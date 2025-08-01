import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-name-modal',
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Edit Lock Name</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="cancel()">Cancel</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="edit-name-container">
        <div class="input-group">
          <ion-label position="stacked">Device Name</ion-label>
          <ion-input
            #nameInput
            [(ngModel)]="deviceName"
            placeholder="Enter custom name"
            maxlength="15"
            (ionInput)="onInputChange()"
            class="name-input">
          </ion-input>
          <div class="char-count" [class.warning]="deviceName.length >= 14">
            {{ deviceName.length }}/15
          </div>
        </div>

        <div class="device-info" *ngIf="showDeviceInfo">
          <div class="info-item">
            <span class="label">Serial Number:</span>
            <span class="value">{{ serialNumber || 'N/A' }}</span>
          </div>
          <div class="info-item">
            <span class="label">Device ID:</span>
            <span class="value">{{ deviceId || 'N/A' }}</span>
          </div>
        </div>
      </div>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button 
          expand="block" 
          (click)="save()"
          [disabled]="deviceName.trim().length === 0"
          class="save-button">
          Save
        </ion-button>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: [`
    .edit-name-container {
      padding: 16px 0;
    }

    .input-group {
      position: relative;
      margin-bottom: 24px;
    }

    .name-input {
      --padding-start: 16px;
      --padding-end: 16px;
      --padding-top: 12px;
      --padding-bottom: 12px;
      --border-radius: 8px;
      --border-width: 1px;
      --border-color: var(--ion-color-medium);
      --background: var(--ion-color-light);
      margin-top: 8px;
    }

    .char-count {
      position: absolute;
      right: 16px;
      bottom: 12px;
      font-size: 12px;
      color: var(--ion-color-medium);
      background: var(--ion-color-light);
      padding: 2px 6px;
      border-radius: 4px;
    }

    .char-count.warning {
      color: var(--ion-color-warning);
    }

    .device-info {
      background: var(--ion-color-light);
      border-radius: 8px;
      padding: 16px;
      margin-top: 16px;
    }

    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .info-item:last-child {
      margin-bottom: 0;
    }

    .label {
      font-weight: 500;
      color: var(--ion-color-dark);
      font-size: 14px;
    }

    .value {
      color: var(--ion-color-medium);
      font-size: 14px;
      text-align: right;
      word-break: break-all;
    }

    .save-button {
      --border-radius: 8px;
      margin: 0 16px 16px 16px;
    }

    ion-header ion-toolbar {
      --background: var(--ion-color-light);
      --border-color: var(--ion-color-light);
    }

    ion-footer ion-toolbar {
      --background: var(--ion-color-light);
      --border-color: var(--ion-color-light);
    }
  `]
})
export class EditNameModalComponent {
  @Input() initialName: string = '';
  @Input() serialNumber?: string;
  @Input() deviceId?: string;
  @Input() showDeviceInfo: boolean = false;
  
  @Output() saveName = new EventEmitter<string>();

  deviceName: string = '';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.deviceName = this.initialName;
  }

  onInputChange() {
    // Ensure we don't exceed 15 characters
    if (this.deviceName.length > 15) {
      this.deviceName = this.deviceName.substring(0, 15);
    }
  }

  save() {
    const trimmedName = this.deviceName.trim();
    if (trimmedName.length > 0) {
      this.saveName.emit(trimmedName);
      this.modalCtrl.dismiss(trimmedName, 'save');
    }
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
} 