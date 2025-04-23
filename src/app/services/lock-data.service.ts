/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */

import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface LockParameters {
  serialNumber: string;
  pin: string;
  name: string;
}

export const LockDataErrors = {
  SUCCESS: 0,
  NATIVE_WRITE_FAILED: 1,
  ITEM_NOT_FOUND: 2,
  NULL_REFERENCE: 3,
  UNDEFINED_TYPE: 4,
  JSON_ERROR: 5,
  WRONG_PARAMETER: 6,
  DUPLICATE_KEY: 7,
  BAD_NAME: 8,
};

export interface LockDataResult {
  code: number;
  exception?: string;
  source?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LockDataService {
  locks: LockParameters[] = [];
  blocking = false;
  private _statusMessageHandler: (message: string) => void = (x: string) => {}; // Default handler

  constructor() {
    console.log('Pin Store Service initializing');
  }

  /* Call at startup to load any existing Pin pairs. Return a Promise producing
   * either TRUE or an error message.
   */
  setup(statusMessageHandler: (message: string) => void): void {
    if (statusMessageHandler) {
      this._statusMessageHandler = statusMessageHandler;
    }
    this._statusMessageHandler('lock-data: activate');
  }

  makeLock(serialNumber: string, pin: string): LockParameters {
    return { serialNumber, pin, name: '' };
  }

  hexByte(n: number): string {
    return ('0' + n.toString(16)).substr(-2, 2).toUpperCase();
  }

  /* clear the store of any existing serial/PIN pairs */
  clear(): Promise<void> {
    return Preferences.clear();
  }

  /**
   * Check if a device already exists.
   * @param name device id found by scanning
   * @returns Promise<string>, rejects with LockDataError
   */
  getAuthorization(name: string): Promise<string> {
    this._statusMessageHandler(`getAuthorization for "${name}"`);
    if (typeof name !== 'string') {
      return Promise.reject({
        exception: `getAuthorization: bad name "${name}"`,
        code: LockDataErrors.BAD_NAME,
      });
    }
    return Preferences.get({ key: name }).then((v) => {
      if (v.value === null) {
        throw { code: LockDataErrors.ITEM_NOT_FOUND };
      }
      return v.value;
    });
  }

  /** Add a new device to permanent storage.
   * @param lock target device
   * @returns result of storage save as Promise of LockDataErrors
   */
  addAuthorization(lock: LockParameters): Promise<number> {
    this._statusMessageHandler(
      `LockData addDevice "${lock.serialNumber}", "${lock.pin}"`
    );

    return this.getAuthorization(lock.serialNumber)
      .then(() => {
        this._statusMessageHandler('*** error: adding duplicate device');
        alert('LockData: adding duplicate device');
        return LockDataErrors.DUPLICATE_KEY;
      })
      .catch(() => {
        return Preferences.set({
          key: lock.serialNumber,
          value: lock.pin,
        }).then(() => {
          return LockDataErrors.SUCCESS;
        });
      })
      .catch((error) => {
        this._statusMessageHandler(JSON.stringify(error));
        return Promise.resolve(LockDataErrors.NATIVE_WRITE_FAILED);
      });
  }

  /**
   * Gets an arbitrary item from storage.
   * @param name
   * @returns Promise of string or LockDataResult
   */
  getValue(name: string): Promise<string> {
    this._statusMessageHandler(`getValue for "${name}"`);
    if (typeof name !== 'string') {
      return Promise.reject({
        exception: `getValue: bad name "${name}"`,
        code: LockDataErrors.BAD_NAME,
      });
    }
    return Preferences.get({ key: name }).then((v) => {
      if (v.value === null) {
        throw { code: LockDataErrors.ITEM_NOT_FOUND };
      }
      return v.value;
    });
  }

  getJsonValue(name: string): Promise<object> {
    return this.getValue(name).then((value) => {
      try {
        return JSON.parse(value);
      } catch (e: unknown) {
        // Explicitly type as unknown
        // Type guard to check if e is an Error
        let errorMessage: string;
        if (e instanceof Error) {
          errorMessage = e.message;
        } else if (typeof e === 'string') {
          errorMessage = e; // If e is a string, use it directly
        } else {
          errorMessage = 'Unknown error occurred'; // Fallback
        }
        throw { code: LockDataErrors.JSON_ERROR, exception: errorMessage };
      }
    });
  }

  /** set arbitrary <key :: string> in storage
   * @returns Promise to success or LockDataResult
   */
  setValue(key: string, value: string): Promise<number> {
    return Preferences.set({ key, value })
      .then(() => {
        return LockDataErrors.SUCCESS;
      })
      .catch((error) => {
        this._statusMessageHandler(JSON.stringify(error));
        return Promise.resolve(LockDataErrors.NATIVE_WRITE_FAILED);
      });
  }

  /** set arbitrary <key :: object> in storage
   * @returns Promise to success or LockDataResult
   */
  setJsonValue(name: string, object: any): Promise<number> {
    return this.setValue(name, JSON.stringify(object));
  }
}
