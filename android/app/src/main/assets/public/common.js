"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 9679:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-90f1dbc4.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-527b9e34.js */ 4514);
/* harmony import */ var _haptic_ac164e4c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-ac164e4c.js */ 7099);
/* harmony import */ var _index_39782642_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-39782642.js */ 2976);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target) || target.disabled) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_39782642_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_ac164e4c_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_ac164e4c_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_ac164e4c_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};


/***/ }),

/***/ 1341:
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/capacitor-59395cbd.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getCapacitor)
/* harmony export */ });
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const getCapacitor = () => {
  if (_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined) {
    return _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor;
  }
  return undefined;
};


/***/ }),

/***/ 9221:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/compare-with-utils-a96ff2ea.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ compareOptions),
/* harmony export */   i: () => (/* binding */ isOptionSelected)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Uses the compareWith param to compare two values to determine if they are equal.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */
const compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};
/**
 * Compares a value against the current value(s) to determine if it is selected.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */
const isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val => compareOptions(val, compareValue, compareWith));
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};


/***/ }),

/***/ 7280:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-babeabeb.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};


/***/ }),

/***/ 2497:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-dd40d69f.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startFocusVisible: () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        // TODO(FW-2832): type
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown, {
    passive: true
  });
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};


/***/ }),

/***/ 7099:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-ac164e4c.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ImpactStyle),
/* harmony export */   a: () => (/* binding */ hapticSelectionStart),
/* harmony export */   b: () => (/* binding */ hapticSelectionChanged),
/* harmony export */   c: () => (/* binding */ hapticSelection),
/* harmony export */   d: () => (/* binding */ hapticImpact),
/* harmony export */   h: () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/* harmony import */ var _capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitor-59395cbd.js */ 1341);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

var ImpactStyle;
(function (ImpactStyle) {
  /**
   * A collision between large, heavy user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Heavy"] = "HEAVY";
  /**
   * A collision between moderately sized user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Medium"] = "MEDIUM";
  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Light"] = "LIGHT";
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
(function (NotificationType) {
  /**
   * A notification feedback type indicating that a task has completed successfully
   *
   * @since 1.0.0
   */
  NotificationType["Success"] = "SUCCESS";
  /**
   * A notification feedback type indicating that a task has produced a warning
   *
   * @since 1.0.0
   */
  NotificationType["Warning"] = "WARNING";
  /**
   * A notification feedback type indicating that a task has failed
   *
   * @since 1.0.0
   */
  NotificationType["Error"] = "ERROR";
})(NotificationType || (NotificationType = {}));
const HapticEngine = {
  getEngine() {
    const capacitor = (0,_capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('Haptics')) {
      // Capacitor
      return capacitor.Plugins.Haptics;
    }
    return undefined;
  },
  available() {
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    const capacitor = (0,_capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */
    if ((capacitor === null || capacitor === void 0 ? void 0 : capacitor.getPlatform()) === 'web') {
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }
    return true;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.impact({
      style: options.style
    });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.notification({
      type: options.type
    });
  },
  selection() {
    this.impact({
      style: ImpactStyle.Light
    });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.selectionStart();
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.selectionChanged();
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.selectionEnd();
  }
};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: ImpactStyle.LIGHT }` (or `MEDIUM`/`HEAVY`)
 */
const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};


/***/ }),

/***/ 3871:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-e2cf2ceb.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ arrowBackSharp),
/* harmony export */   b: () => (/* binding */ closeCircle),
/* harmony export */   c: () => (/* binding */ chevronBack),
/* harmony export */   d: () => (/* binding */ closeSharp),
/* harmony export */   e: () => (/* binding */ searchSharp),
/* harmony export */   f: () => (/* binding */ checkmarkOutline),
/* harmony export */   g: () => (/* binding */ ellipseOutline),
/* harmony export */   h: () => (/* binding */ caretBackSharp),
/* harmony export */   i: () => (/* binding */ arrowDown),
/* harmony export */   j: () => (/* binding */ reorderThreeOutline),
/* harmony export */   k: () => (/* binding */ reorderTwoSharp),
/* harmony export */   l: () => (/* binding */ chevronDown),
/* harmony export */   m: () => (/* binding */ chevronForwardOutline),
/* harmony export */   n: () => (/* binding */ ellipsisHorizontal),
/* harmony export */   o: () => (/* binding */ chevronForward),
/* harmony export */   p: () => (/* binding */ caretUpSharp),
/* harmony export */   q: () => (/* binding */ caretDownSharp),
/* harmony export */   r: () => (/* binding */ removeOutline),
/* harmony export */   s: () => (/* binding */ searchOutline),
/* harmony export */   t: () => (/* binding */ close),
/* harmony export */   u: () => (/* binding */ menuOutline),
/* harmony export */   v: () => (/* binding */ menuSharp),
/* harmony export */   w: () => (/* binding */ chevronExpand),
/* harmony export */   x: () => (/* binding */ eye),
/* harmony export */   y: () => (/* binding */ eyeOff)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v7.2.2, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronExpand = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const eye = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>";
const eyeOff = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 1293:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-e919e353.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   a: () => (/* binding */ findIonContent),
/* harmony export */   b: () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   c: () => (/* binding */ scrollByPoint),
/* harmony export */   d: () => (/* binding */ disableContentScrollY),
/* harmony export */   f: () => (/* binding */ findClosestIonContent),
/* harmony export */   g: () => (/* binding */ getScrollElement),
/* harmony export */   i: () => (/* binding */ isIonContent),
/* harmony export */   p: () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   r: () => (/* binding */ resetContentScrollY),
/* harmony export */   s: () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);
/* harmony import */ var _index_738d7504_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-738d7504.js */ 7243);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */
const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */
const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }
    return el;
  });
  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */
const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
  if (customContentHost) {
    return customContentHost;
  }
  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */
const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */
const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */
const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }
  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */
const printIonContentErrorMsg = el => {
  return (0,_index_738d7504_js__WEBPACK_IMPORTED_MODULE_2__.b)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */
const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */
    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};
const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};


/***/ }),

/***/ 1375:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-52278bd7.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYBOARD_DID_CLOSE: () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   KEYBOARD_DID_OPEN: () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   copyVisualViewport: () => (/* binding */ copyVisualViewport),
/* harmony export */   keyboardDidClose: () => (/* binding */ keyboardDidClose),
/* harmony export */   keyboardDidOpen: () => (/* binding */ keyboardDidOpen),
/* harmony export */   keyboardDidResize: () => (/* binding */ keyboardDidResize),
/* harmony export */   resetKeyboardAssist: () => (/* binding */ resetKeyboardAssist),
/* harmony export */   setKeyboardClose: () => (/* binding */ setKeyboardClose),
/* harmony export */   setKeyboardOpen: () => (/* binding */ setKeyboardOpen),
/* harmony export */   startKeyboardAssist: () => (/* binding */ startKeyboardAssist),
/* harmony export */   trackViewportChanges: () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/* harmony import */ var _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-73175e24.js */ 7726);
/* harmony import */ var _capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capacitor-59395cbd.js */ 1341);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
// TODO(FW-2832): types
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */
const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};
const startKeyboardAssist = win => {
  const nativeEngine = _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_0__.K.getEngine();
  /**
   * If the native keyboard plugin is available
   * then we are running in a native environment. As a result
   * we should only listen on the native events instead of
   * using the Visual Viewport as the Ionic webview manipulates
   * how it resizes such that the Visual Viewport API is not
   * reliable here.
   */
  if (nativeEngine) {
    startNativeListeners(win);
  } else {
    if (!win.visualViewport) {
      return;
    }
    currentVisualViewport = copyVisualViewport(win.visualViewport);
    win.visualViewport.onresize = () => {
      trackViewportChanges(win);
      if (keyboardDidOpen() || keyboardDidResize(win)) {
        setKeyboardOpen(win);
      } else if (keyboardDidClose(win)) {
        setKeyboardClose(win);
      }
    };
  }
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */
const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};
const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};
const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */
const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */
const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */
const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */
const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */
const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */
const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */
const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};


/***/ }),

/***/ 7726:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-73175e24.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ Keyboard),
/* harmony export */   a: () => (/* binding */ KeyboardResize)
/* harmony export */ });
/* harmony import */ var _capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitor-59395cbd.js */ 1341);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

var ExceptionCode;
(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */
  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
var KeyboardResize;
(function (KeyboardResize) {
  /**
   * Only the `body` HTML element will be resized.
   * Relative units are not affected, because the viewport does not change.
   *
   * @since 1.0.0
   */
  KeyboardResize["Body"] = "body";
  /**
   * Only the `ion-app` HTML element will be resized.
   * Use it only for Ionic Framework apps.
   *
   * @since 1.0.0
   */
  KeyboardResize["Ionic"] = "ionic";
  /**
   * The whole native Web View will be resized when the keyboard shows/hides.
   * This affects the `vh` relative unit.
   *
   * @since 1.0.0
   */
  KeyboardResize["Native"] = "native";
  /**
   * Neither the app nor the Web View are resized.
   *
   * @since 1.0.0
   */
  KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
const Keyboard = {
  getEngine() {
    const capacitor = (0,_capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('Keyboard')) {
      return capacitor.Plugins.Keyboard;
    }
    return undefined;
  },
  getResizeMode() {
    const engine = this.getEngine();
    if (!(engine === null || engine === void 0 ? void 0 : engine.getResizeMode)) {
      return Promise.resolve(undefined);
    }
    return engine.getResizeMode().catch(e => {
      if (e.code === ExceptionCode.Unimplemented) {
        // If the native implementation is not available
        // we treat it the same as if the plugin is not available.
        return undefined;
      }
      throw e;
    });
  }
};


/***/ }),

/***/ 5772:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-ec5c2bfa.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/* harmony import */ var _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard-73175e24.js */ 7726);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



/**
 * The element that resizes when the keyboard opens
 * is going to depend on the resize mode
 * which is why we check that here.
 */
const getResizeContainer = resizeMode => {
  /**
   * If doc is undefined then we are
   * in an SSR environment, so the keyboard
   * adjustment does not apply.
   * If the webview does not resize then there
   * is no container to resize.
   */
  if (_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d === undefined || resizeMode === _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_2__.a.None || resizeMode === undefined) {
    return null;
  }
  /**
   * The three remaining resize modes: Native, Ionic, and Body
   * all cause `ion-app` to resize, so we can listen for changes
   * on that. In the event `ion-app` is not available then
   * we can fall back to `body`.
   */
  const ionApp = _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d.querySelector('ion-app');
  return ionApp !== null && ionApp !== void 0 ? ionApp : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d.body;
};
/**
 * Get the height of ion-app or body.
 * This is used for determining if the webview
 * has resized before the keyboard closed.
 * */
const getResizeContainerHeight = resizeMode => {
  const containerElement = getResizeContainer(resizeMode);
  return containerElement === null ? 0 : containerElement.clientHeight;
};
/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */
const createKeyboardController = /*#__PURE__*/function () {
  var _ref = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (keyboardChangeCallback) {
    let keyboardWillShowHandler;
    let keyboardWillHideHandler;
    let keyboardVisible;
    /**
     * This lets us determine if the webview content
     * has resized as a result of the keyboard.
     */
    let initialResizeContainerHeight;
    const init = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const resizeOptions = yield _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_2__.K.getResizeMode();
        const resizeMode = resizeOptions === undefined ? undefined : resizeOptions.mode;
        keyboardWillShowHandler = () => {
          /**
           * We need to compute initialResizeContainerHeight right before
           * the keyboard opens to guarantee the resize container is visible.
           * The resize container may not be visible if we compute this
           * as soon as the keyboard controller is created.
           * We should only need to do this once to avoid additional clientHeight
           * computations.
           */
          if (initialResizeContainerHeight === undefined) {
            initialResizeContainerHeight = getResizeContainerHeight(resizeMode);
          }
          keyboardVisible = true;
          fireChangeCallback(keyboardVisible, resizeMode);
        };
        keyboardWillHideHandler = () => {
          keyboardVisible = false;
          fireChangeCallback(keyboardVisible, resizeMode);
        };
        _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
        _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
      });
      return function init() {
        return _ref2.apply(this, arguments);
      };
    }();
    const fireChangeCallback = (state, resizeMode) => {
      if (keyboardChangeCallback) {
        keyboardChangeCallback(state, createResizePromiseIfNeeded(resizeMode));
      }
    };
    /**
     * Code responding to keyboard lifecycles may need
     * to show/hide content once the webview has
     * resized as a result of the keyboard showing/hiding.
     * createResizePromiseIfNeeded provides a way for code to wait for the
     * resize event that was triggered as a result of the keyboard.
     */
    const createResizePromiseIfNeeded = resizeMode => {
      if (
      /**
       * If we are in an SSR environment then there is
       * no window to resize. Additionally, if there
       * is no resize mode or the resize mode is "None"
       * then initialResizeContainerHeight will be 0
       */
      initialResizeContainerHeight === 0 ||
      /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      initialResizeContainerHeight === getResizeContainerHeight(resizeMode)) {
        return;
      }
      /**
       * Get the resize container so we can
       * attach the ResizeObserver below to
       * the correct element.
       */
      const containerElement = getResizeContainer(resizeMode);
      if (containerElement === null) {
        return;
      }
      /**
       * Some part of the web content should resize,
       * and we need to listen for a resize.
       */
      return new Promise(resolve => {
        const callback = () => {
          /**
           * As per the spec, the ResizeObserver
           * will fire when observation starts if
           * the observed element is rendered and does not
           * have a size of 0 x 0. However, the watched element
           * may or may not have resized by the time this first
           * callback is fired. As a result, we need to check
           * the dimensions of the element.
           *
           * https://www.w3.org/TR/resize-observer/#intro
           */
          if (containerElement.clientHeight === initialResizeContainerHeight) {
            /**
             * The resize happened, so stop listening
             * for resize on this element.
             */
            ro.disconnect();
            resolve();
          }
        };
        /**
         * In Capacitor there can be delay between when the window
         * resizes and when the container element resizes, so we cannot
         * rely on a 'resize' event listener on the window.
         * Instead, we need to determine when the container
         * element resizes using a ResizeObserver.
         */
        const ro = new ResizeObserver(callback);
        ro.observe(containerElement);
      });
    };
    const destroy = () => {
      _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
      _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
      keyboardWillShowHandler = keyboardWillHideHandler = undefined;
    };
    const isKeyboardVisible = () => keyboardVisible;
    yield init();
    return {
      init,
      destroy,
      isKeyboardVisible
    };
  });
  return function createKeyboardController(_x) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ 1881:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/lock-controller-316928be.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createLockController)
/* harmony export */ });
/* harmony import */ var C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Creates a lock controller.
 *
 * Claiming a lock means that nothing else can acquire the lock until it is released.
 * This can momentarily prevent execution of code that needs to wait for the earlier code to finish.
 * For example, this can be used to prevent multiple transitions from occurring at the same time.
 */
const createLockController = () => {
  let waitPromise;
  /**
   * When lock() is called, the lock is claimed.
   * Once a lock has been claimed, it cannot be claimed again until it is released.
   * When this function gets resolved, the lock is released, allowing it to be claimed again.
   *
   * @example ```tsx
   * const unlock = await this.lockController.lock();
   * // do other stuff
   * unlock();
   * ```
   */
  const lock = /*#__PURE__*/function () {
    var _ref = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const p = waitPromise;
      let resolve;
      waitPromise = new Promise(r => resolve = r);
      if (p !== undefined) {
        yield p;
      }
      return resolve;
    });
    return function lock() {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    lock
  };
};


/***/ }),

/***/ 6556:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-964f7cf3.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${32 - 32 * index}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 7734:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-07df2095.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSwipeBackGesture: () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);
/* harmony import */ var _dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-babeabeb.js */ 7280);
/* harmony import */ var _index_39782642_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-39782642.js */ 2976);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 6611);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */
  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  };
  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };
  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };
  const canStart = detail => {
    /**
     * The user's locale can change mid-session,
     * so we need to check text direction at
     * the beginning of every gesture.
     */
    rtl = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
    return isAtEdge(detail) && canStartHandler();
  };
  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };
  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_0__.j)(0, stepValue, 0.9999), realDur);
  };
  return (0,_index_39782642_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    /**
     * Swipe to go back should have priority over other horizontal swipe
     * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
     */
    gesturePriority: 101,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};


/***/ }),

/***/ 4560:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-c2911ace.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ watchForOptions)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const watchForOptions = (containerEl, tagName, onChange) => {
  if (typeof MutationObserver === 'undefined') {
    return;
  }
  const mutation = new MutationObserver(mutationList => {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
  let newOption;
  mutationList.forEach(mut => {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};
/**
 * The "value" key is only set on some components such as ion-select-option.
 * As a result, we create a default union type of HTMLElement and the "value" key.
 * However, implementers are required to provide the appropriate component type
 * such as HTMLIonSelectOptionElement.
 */
const findCheckedOption = (node, tagName) => {
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
   * The above check ensures "node" is an Element (nodeType 1).
   */
  if (node.nodeType !== 1) {
    return undefined;
  }
  // HTMLElement inherits from Element, so we cast "el" as T.
  const el = node;
  const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find(o => o.value === el.value);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEI7RUFDQTtFQUNBLE1BQU1yQixFQUFFLEdBQUc0VSxJQUFJO0VBQ2YsTUFBTWhQLE9BQU8sR0FBRzVGLEVBQUUsQ0FBQ3lKLE9BQU8sS0FBS0EsT0FBTyxDQUFDcUwsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDOVUsRUFBRSxDQUFDLEdBQUd1QyxLQUFLLENBQUN3UyxJQUFJLENBQUMvVSxFQUFFLENBQUNnVixnQkFBZ0IsQ0FBQ3ZMLE9BQU8sQ0FBQyxDQUFDO0VBQ3RHLE9BQU83RCxPQUFPLENBQUNxUCxJQUFJLENBQUV2TSxDQUFDLElBQUtBLENBQUMsQ0FBQ3dNLEtBQUssS0FBS2xWLEVBQUUsQ0FBQ2tWLEtBQUssQ0FBQztBQUNwRCxDQUFDIiwic291cmNlcyI6WyIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9idXR0b24tYWN0aXZlLTkwZjFkYmM0LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vY2FwYWNpdG9yLTU5Mzk1Y2JkLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vY29tcGFyZS13aXRoLXV0aWxzLWE5NmZmMmVhLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZGlyLWJhYmVhYmViLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZm9jdXMtdmlzaWJsZS1kZDQwZDY5Zi5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy1hYzE2NGU0Yy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LWUyY2YyY2ViLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW5kZXgtZTkxOWUzNTMuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9rZXlib2FyZC01MjI3OGJkNy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2tleWJvYXJkLTczMTc1ZTI0LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20va2V5Ym9hcmQtY29udHJvbGxlci1lYzVjMmJmYS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2xvY2stY29udHJvbGxlci0zMTY5MjhiZS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3NwaW5uZXItY29uZmlncy05NjRmN2NmMy5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3N3aXBlLWJhY2stMDdkZjIwOTUuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS93YXRjaC1vcHRpb25zLWMyOTExYWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyB3IGFzIHdyaXRlVGFzayB9IGZyb20gJy4vaW5kZXgtNTI3YjllMzQuanMnO1xuaW1wb3J0IHsgaCBhcyBoYXB0aWNTZWxlY3Rpb25FbmQsIGEgYXMgaGFwdGljU2VsZWN0aW9uU3RhcnQsIGIgYXMgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCB9IGZyb20gJy4vaGFwdGljLWFjMTY0ZTRjLmpzJztcbmltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4LTM5NzgyNjQyLmpzJztcblxuY29uc3QgY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSA9IChlbCwgaXNCdXR0b24pID0+IHtcbiAgICBsZXQgY3VycmVudFRvdWNoZWRCdXR0b247XG4gICAgbGV0IGluaXRpYWxUb3VjaGVkQnV0dG9uO1xuICAgIGNvbnN0IGFjdGl2YXRlQnV0dG9uQXRQb2ludCA9ICh4LCB5LCBoYXB0aWNGZWVkYmFja0ZuKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIWlzQnV0dG9uKHRhcmdldCkgfHwgdGFyZ2V0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjbGVhckFjdGl2ZUJ1dHRvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQgIT09IGN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICAgICAgICBjbGVhckFjdGl2ZUJ1dHRvbigpO1xuICAgICAgICAgICAgc2V0QWN0aXZlQnV0dG9uKHRhcmdldCwgaGFwdGljRmVlZGJhY2tGbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNldEFjdGl2ZUJ1dHRvbiA9IChidXR0b24sIGhhcHRpY0ZlZWRiYWNrRm4pID0+IHtcbiAgICAgICAgY3VycmVudFRvdWNoZWRCdXR0b24gPSBidXR0b247XG4gICAgICAgIGlmICghaW5pdGlhbFRvdWNoZWRCdXR0b24pIHtcbiAgICAgICAgICAgIGluaXRpYWxUb3VjaGVkQnV0dG9uID0gY3VycmVudFRvdWNoZWRCdXR0b247XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uVG9Nb2RpZnkgPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICAgICAgd3JpdGVUYXNrKCgpID0+IGJ1dHRvblRvTW9kaWZ5LmNsYXNzTGlzdC5hZGQoJ2lvbi1hY3RpdmF0ZWQnKSk7XG4gICAgICAgIGhhcHRpY0ZlZWRiYWNrRm4oKTtcbiAgICB9O1xuICAgIGNvbnN0IGNsZWFyQWN0aXZlQnV0dG9uID0gKGRpc3BhdGNoQ2xpY2sgPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAoIWN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uVG9Nb2RpZnkgPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICAgICAgd3JpdGVUYXNrKCgpID0+IGJ1dHRvblRvTW9kaWZ5LmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1hY3RpdmF0ZWQnKSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGlja2luZyBvbiBvbmUgYnV0dG9uLCBidXQgcmVsZWFzaW5nIG9uIGFub3RoZXIgYnV0dG9uXG4gICAgICAgICAqIGRvZXMgbm90IGRpc3BhdGNoIGEgY2xpY2sgZXZlbnQgaW4gYnJvd3NlcnMsIHNvIHdlXG4gICAgICAgICAqIG5lZWQgdG8gZG8gaXQgbWFudWFsbHkgaGVyZS4gU29tZSBicm93c2VycyB3aWxsXG4gICAgICAgICAqIGRpc3BhdGNoIGEgY2xpY2sgaWYgY2xpY2tpbmcgb24gb25lIGJ1dHRvbiwgZHJhZ2dpbmcgb3ZlclxuICAgICAgICAgKiBhbm90aGVyIGJ1dHRvbiwgYW5kIHJlbGVhc2luZyBvbiB0aGUgb3JpZ2luYWwgYnV0dG9uLiBJbiB0aGF0XG4gICAgICAgICAqIGNhc2UsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGRvIG5vdCBjYXVzZSBhIGRvdWJsZSBjbGljayB0aGVyZS5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChkaXNwYXRjaENsaWNrICYmIGluaXRpYWxUb3VjaGVkQnV0dG9uICE9PSBjdXJyZW50VG91Y2hlZEJ1dHRvbikge1xuICAgICAgICAgICAgY3VycmVudFRvdWNoZWRCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgZWwsXG4gICAgICAgIGdlc3R1cmVOYW1lOiAnYnV0dG9uQWN0aXZlRHJhZycsXG4gICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgb25TdGFydDogKGV2KSA9PiBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQoZXYuY3VycmVudFgsIGV2LmN1cnJlbnRZLCBoYXB0aWNTZWxlY3Rpb25TdGFydCksXG4gICAgICAgIG9uTW92ZTogKGV2KSA9PiBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQoZXYuY3VycmVudFgsIGV2LmN1cnJlbnRZLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkKSxcbiAgICAgICAgb25FbmQ6ICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKHRydWUpO1xuICAgICAgICAgICAgaGFwdGljU2VsZWN0aW9uRW5kKCk7XG4gICAgICAgICAgICBpbml0aWFsVG91Y2hlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUgYXMgYyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHcgYXMgd2luIH0gZnJvbSAnLi9pbmRleC1hNWQ1MGRhZi5qcyc7XG5cbmNvbnN0IGdldENhcGFjaXRvciA9ICgpID0+IHtcbiAgICBpZiAod2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHdpbi5DYXBhY2l0b3I7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgeyBnZXRDYXBhY2l0b3IgYXMgZyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8qKlxuICogVXNlcyB0aGUgY29tcGFyZVdpdGggcGFyYW0gdG8gY29tcGFyZSB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0gY3VycmVudFZhbHVlIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICogQHBhcmFtIGNvbXBhcmVWYWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0LlxuICogQHBhcmFtIGNvbXBhcmVXaXRoIFRoZSBmdW5jdGlvbiBvciBwcm9wZXJ0eSBuYW1lIHRvIHVzZSB0byBjb21wYXJlIHZhbHVlcy5cbiAqL1xuY29uc3QgY29tcGFyZU9wdGlvbnMgPSAoY3VycmVudFZhbHVlLCBjb21wYXJlVmFsdWUsIGNvbXBhcmVXaXRoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjb21wYXJlV2l0aCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcGFyZVdpdGgoY3VycmVudFZhbHVlLCBjb21wYXJlVmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29tcGFyZVdpdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWVbY29tcGFyZVdpdGhdID09PSBjb21wYXJlVmFsdWVbY29tcGFyZVdpdGhdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY29tcGFyZVZhbHVlKSA/IGNvbXBhcmVWYWx1ZS5pbmNsdWRlcyhjdXJyZW50VmFsdWUpIDogY3VycmVudFZhbHVlID09PSBjb21wYXJlVmFsdWU7XG4gICAgfVxufTtcbi8qKlxuICogQ29tcGFyZXMgYSB2YWx1ZSBhZ2FpbnN0IHRoZSBjdXJyZW50IHZhbHVlKHMpIHRvIGRldGVybWluZSBpZiBpdCBpcyBzZWxlY3RlZC5cbiAqXG4gKiBAcGFyYW0gY3VycmVudFZhbHVlIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICogQHBhcmFtIGNvbXBhcmVWYWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0LlxuICogQHBhcmFtIGNvbXBhcmVXaXRoIFRoZSBmdW5jdGlvbiBvciBwcm9wZXJ0eSBuYW1lIHRvIHVzZSB0byBjb21wYXJlIHZhbHVlcy5cbiAqL1xuY29uc3QgaXNPcHRpb25TZWxlY3RlZCA9IChjdXJyZW50VmFsdWUsIGNvbXBhcmVWYWx1ZSwgY29tcGFyZVdpdGgpID0+IHtcbiAgICBpZiAoY3VycmVudFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUuc29tZSgodmFsKSA9PiBjb21wYXJlT3B0aW9ucyh2YWwsIGNvbXBhcmVWYWx1ZSwgY29tcGFyZVdpdGgpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlT3B0aW9ucyhjdXJyZW50VmFsdWUsIGNvbXBhcmVWYWx1ZSwgY29tcGFyZVdpdGgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGNvbXBhcmVPcHRpb25zIGFzIGMsIGlzT3B0aW9uU2VsZWN0ZWQgYXMgaSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGRvY3VtZW50IG9yIGhvc3QgZWxlbWVudFxuICogaGFzIGEgYGRpcmAgc2V0IHRvIGBydGxgLiBUaGUgaG9zdCB2YWx1ZSB3aWxsIGFsd2F5c1xuICogdGFrZSBwcmlvcml0eSBvdmVyIHRoZSByb290IGRvY3VtZW50IHZhbHVlLlxuICovXG5jb25zdCBpc1JUTCA9IChob3N0RWwpID0+IHtcbiAgICBpZiAoaG9zdEVsKSB7XG4gICAgICAgIGlmIChob3N0RWwuZGlyICE9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChkb2N1bWVudCA9PT0gbnVsbCB8fCBkb2N1bWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdW1lbnQuZGlyLnRvTG93ZXJDYXNlKCkpID09PSAncnRsJztcbn07XG5cbmV4cG9ydCB7IGlzUlRMIGFzIGkgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBJT05fRk9DVVNFRCA9ICdpb24tZm9jdXNlZCc7XG5jb25zdCBJT05fRk9DVVNBQkxFID0gJ2lvbi1mb2N1c2FibGUnO1xuY29uc3QgRk9DVVNfS0VZUyA9IFtcbiAgICAnVGFiJyxcbiAgICAnQXJyb3dEb3duJyxcbiAgICAnU3BhY2UnLFxuICAgICdFc2NhcGUnLFxuICAgICcgJyxcbiAgICAnU2hpZnQnLFxuICAgICdFbnRlcicsXG4gICAgJ0Fycm93TGVmdCcsXG4gICAgJ0Fycm93UmlnaHQnLFxuICAgICdBcnJvd1VwJyxcbiAgICAnSG9tZScsXG4gICAgJ0VuZCcsXG5dO1xuY29uc3Qgc3RhcnRGb2N1c1Zpc2libGUgPSAocm9vdEVsKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRGb2N1cyA9IFtdO1xuICAgIGxldCBrZXlib2FyZE1vZGUgPSB0cnVlO1xuICAgIGNvbnN0IHJlZiA9IHJvb3RFbCA/IHJvb3RFbC5zaGFkb3dSb290IDogZG9jdW1lbnQ7XG4gICAgY29uc3Qgcm9vdCA9IHJvb3RFbCA/IHJvb3RFbCA6IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3Qgc2V0Rm9jdXMgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgICAgY3VycmVudEZvY3VzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKElPTl9GT0NVU0VEKSk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKElPTl9GT0NVU0VEKSk7XG4gICAgICAgIGN1cnJlbnRGb2N1cyA9IGVsZW1lbnRzO1xuICAgIH07XG4gICAgY29uc3QgcG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIGtleWJvYXJkTW9kZSA9IGZhbHNlO1xuICAgICAgICBzZXRGb2N1cyhbXSk7XG4gICAgfTtcbiAgICBjb25zdCBvbktleWRvd24gPSAoZXYpID0+IHtcbiAgICAgICAga2V5Ym9hcmRNb2RlID0gRk9DVVNfS0VZUy5pbmNsdWRlcyhldi5rZXkpO1xuICAgICAgICBpZiAoIWtleWJvYXJkTW9kZSkge1xuICAgICAgICAgICAgc2V0Rm9jdXMoW10pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvbkZvY3VzaW4gPSAoZXYpID0+IHtcbiAgICAgICAgaWYgKGtleWJvYXJkTW9kZSAmJiBldi5jb21wb3NlZFBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgdG9Gb2N1cyA9IGV2LmNvbXBvc2VkUGF0aCgpLmZpbHRlcigoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPKEZXLTI4MzIpOiB0eXBlXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKElPTl9GT0NVU0FCTEUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldEZvY3VzKHRvRm9jdXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvbkZvY3Vzb3V0ID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVmLmFjdGl2ZUVsZW1lbnQgPT09IHJvb3QpIHtcbiAgICAgICAgICAgIHNldEZvY3VzKFtdKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luKTtcbiAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3Vzb3V0KTtcbiAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHBvaW50ZXJEb3duKTtcbiAgICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luKTtcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25Gb2N1c291dCk7XG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcG9pbnRlckRvd24pO1xuICAgICAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcG9pbnRlckRvd24pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveSxcbiAgICAgICAgc2V0Rm9jdXMsXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IHN0YXJ0Rm9jdXNWaXNpYmxlIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRDYXBhY2l0b3IgfSBmcm9tICcuL2NhcGFjaXRvci01OTM5NWNiZC5qcyc7XG5cbnZhciBJbXBhY3RTdHlsZTtcbihmdW5jdGlvbiAoSW1wYWN0U3R5bGUpIHtcbiAgICAvKipcbiAgICAgKiBBIGNvbGxpc2lvbiBiZXR3ZWVuIGxhcmdlLCBoZWF2eSB1c2VyIGludGVyZmFjZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgSW1wYWN0U3R5bGVbXCJIZWF2eVwiXSA9IFwiSEVBVllcIjtcbiAgICAvKipcbiAgICAgKiBBIGNvbGxpc2lvbiBiZXR3ZWVuIG1vZGVyYXRlbHkgc2l6ZWQgdXNlciBpbnRlcmZhY2UgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIEltcGFjdFN0eWxlW1wiTWVkaXVtXCJdID0gXCJNRURJVU1cIjtcbiAgICAvKipcbiAgICAgKiBBIGNvbGxpc2lvbiBiZXR3ZWVuIHNtYWxsLCBsaWdodCB1c2VyIGludGVyZmFjZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgSW1wYWN0U3R5bGVbXCJMaWdodFwiXSA9IFwiTElHSFRcIjtcbn0pKEltcGFjdFN0eWxlIHx8IChJbXBhY3RTdHlsZSA9IHt9KSk7XG52YXIgTm90aWZpY2F0aW9uVHlwZTtcbihmdW5jdGlvbiAoTm90aWZpY2F0aW9uVHlwZSkge1xuICAgIC8qKlxuICAgICAqIEEgbm90aWZpY2F0aW9uIGZlZWRiYWNrIHR5cGUgaW5kaWNhdGluZyB0aGF0IGEgdGFzayBoYXMgY29tcGxldGVkIHN1Y2Nlc3NmdWxseVxuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uVHlwZVtcIlN1Y2Nlc3NcIl0gPSBcIlNVQ0NFU1NcIjtcbiAgICAvKipcbiAgICAgKiBBIG5vdGlmaWNhdGlvbiBmZWVkYmFjayB0eXBlIGluZGljYXRpbmcgdGhhdCBhIHRhc2sgaGFzIHByb2R1Y2VkIGEgd2FybmluZ1xuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uVHlwZVtcIldhcm5pbmdcIl0gPSBcIldBUk5JTkdcIjtcbiAgICAvKipcbiAgICAgKiBBIG5vdGlmaWNhdGlvbiBmZWVkYmFjayB0eXBlIGluZGljYXRpbmcgdGhhdCBhIHRhc2sgaGFzIGZhaWxlZFxuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uVHlwZVtcIkVycm9yXCJdID0gXCJFUlJPUlwiO1xufSkoTm90aWZpY2F0aW9uVHlwZSB8fCAoTm90aWZpY2F0aW9uVHlwZSA9IHt9KSk7XG5jb25zdCBIYXB0aWNFbmdpbmUgPSB7XG4gICAgZ2V0RW5naW5lKCkge1xuICAgICAgICBjb25zdCBjYXBhY2l0b3IgPSBnZXRDYXBhY2l0b3IoKTtcbiAgICAgICAgaWYgKGNhcGFjaXRvciA9PT0gbnVsbCB8fCBjYXBhY2l0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcGFjaXRvci5pc1BsdWdpbkF2YWlsYWJsZSgnSGFwdGljcycpKSB7XG4gICAgICAgICAgICAvLyBDYXBhY2l0b3JcbiAgICAgICAgICAgIHJldHVybiBjYXBhY2l0b3IuUGx1Z2lucy5IYXB0aWNzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBhdmFpbGFibGUoKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgICAgIGlmICghZW5naW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FwYWNpdG9yID0gZ2V0Q2FwYWNpdG9yKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXZlbG9wZXJzIGNhbiBtYW51YWxseSBpbXBvcnQgdGhlXG4gICAgICAgICAqIEhhcHRpY3MgcGx1Z2luIGluIHRoZWlyIGFwcCB3aGljaCB3aWxsIGNhdXNlXG4gICAgICAgICAqIGdldEVuZ2luZSB0byByZXR1cm4gdGhlIEhhcHRpY3MgZW5naW5lLiBIb3dldmVyLFxuICAgICAgICAgKiB0aGUgSGFwdGljcyBlbmdpbmUgd2lsbCB0aHJvdyBhbiBlcnJvciBpZlxuICAgICAgICAgKiB1c2VkIGluIGEgd2ViIGJyb3dzZXIgdGhhdCBkb2VzIG5vdCBzdXBwb3J0XG4gICAgICAgICAqIHRoZSBWaWJyYXRlIEFQSS4gVGhpcyBjaGVjayBhdm9pZHMgdGhhdCBlcnJvclxuICAgICAgICAgKiBpZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBWaWJyYXRlIEFQSS5cbiAgICAgICAgICovXG4gICAgICAgIGlmICgoY2FwYWNpdG9yID09PSBudWxsIHx8IGNhcGFjaXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FwYWNpdG9yLmdldFBsYXRmb3JtKCkpID09PSAnd2ViJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItb3B0aW9uYWwtY2hhaW5cbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudmlicmF0ZSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaW1wYWN0KG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICAgICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbmdpbmUuaW1wYWN0KHsgc3R5bGU6IG9wdGlvbnMuc3R5bGUgfSk7XG4gICAgfSxcbiAgICBub3RpZmljYXRpb24ob3B0aW9ucykge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgICAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVuZ2luZS5ub3RpZmljYXRpb24oeyB0eXBlOiBvcHRpb25zLnR5cGUgfSk7XG4gICAgfSxcbiAgICBzZWxlY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaW1wYWN0KHsgc3R5bGU6IEltcGFjdFN0eWxlLkxpZ2h0IH0pO1xuICAgIH0sXG4gICAgc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgICAgIGlmICghZW5naW5lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5naW5lLnNlbGVjdGlvblN0YXJ0KCk7XG4gICAgfSxcbiAgICBzZWxlY3Rpb25DaGFuZ2VkKCkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgICAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVuZ2luZS5zZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgfSxcbiAgICBzZWxlY3Rpb25FbmQoKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgICAgIGlmICghZW5naW5lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5naW5lLnNlbGVjdGlvbkVuZCgpO1xuICAgIH0sXG59O1xuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgdGhlIEhhcHRpYyBQbHVnaW4gaXMgYXZhaWxhYmxlXG4gKiBAcmV0dXJuIFJldHVybnMgYHRydWVgIG9yIGZhbHNlIGlmIHRoZSBwbHVnaW4gaXMgYXZhaWxhYmxlXG4gKi9cbmNvbnN0IGhhcHRpY0F2YWlsYWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gSGFwdGljRW5naW5lLmF2YWlsYWJsZSgpO1xufTtcbi8qKlxuICogVHJpZ2dlciBhIHNlbGVjdGlvbiBjaGFuZ2VkIGhhcHRpYyBldmVudC4gR29vZCBmb3Igb25lLXRpbWUgZXZlbnRzXG4gKiAobm90IGZvciBnZXN0dXJlcylcbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGhhcHRpY0F2YWlsYWJsZSgpICYmIEhhcHRpY0VuZ2luZS5zZWxlY3Rpb24oKTtcbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uU3RhcnQgPSAoKSA9PiB7XG4gICAgaGFwdGljQXZhaWxhYmxlKCkgJiYgSGFwdGljRW5naW5lLnNlbGVjdGlvblN0YXJ0KCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBzZWxlY3Rpb24gY2hhbmdlZCBkdXJpbmcgYSBnZXN0dXJlLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkID0gKCkgPT4ge1xuICAgIGhhcHRpY0F2YWlsYWJsZSgpICYmIEhhcHRpY0VuZ2luZS5zZWxlY3Rpb25DaGFuZ2VkKCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlXG4gKiBjYWxsZWQgbGVzdCByZXNvdXJjZXMgYXJlIG5vdCBwcm9wZXJseSByZWN5Y2xlZC5cbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uRW5kID0gKCkgPT4ge1xuICAgIGhhcHRpY0F2YWlsYWJsZSgpICYmIEhhcHRpY0VuZ2luZS5zZWxlY3Rpb25FbmQoKTtcbn07XG4vKipcbiAqIFVzZSB0aGlzIHRvIGluZGljYXRlIHN1Y2Nlc3MvZmFpbHVyZS93YXJuaW5nIHRvIHRoZSB1c2VyLlxuICogb3B0aW9ucyBzaG91bGQgYmUgb2YgdGhlIHR5cGUgYHsgc3R5bGU6IEltcGFjdFN0eWxlLkxJR0hUIH1gIChvciBgTUVESVVNYC9gSEVBVllgKVxuICovXG5jb25zdCBoYXB0aWNJbXBhY3QgPSAob3B0aW9ucykgPT4ge1xuICAgIGhhcHRpY0F2YWlsYWJsZSgpICYmIEhhcHRpY0VuZ2luZS5pbXBhY3Qob3B0aW9ucyk7XG59O1xuXG5leHBvcnQgeyBJbXBhY3RTdHlsZSBhcyBJLCBoYXB0aWNTZWxlY3Rpb25TdGFydCBhcyBhLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIGFzIGIsIGhhcHRpY1NlbGVjdGlvbiBhcyBjLCBoYXB0aWNJbXBhY3QgYXMgZCwgaGFwdGljU2VsZWN0aW9uRW5kIGFzIGggfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKiBJb25pY29ucyB2Ny4yLjIsIEVTIE1vZHVsZXMgKi9cbmNvbnN0IGFycm93QmFja1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0nc3F1YXJlJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00yNDQgNDAwTDEwMCAyNTZsMTQ0LTE0NE0xMjAgMjU2aDI5MicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBhcnJvd0Rvd24gPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTExMiAyNjhsMTQ0IDE0NCAxNDQtMTQ0TTI1NiAzOTJWMTAwJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNhcmV0QmFja1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNMzY4IDY0TDE0NCAyNTZsMjI0IDE5MlY2NHonLz48L3N2Zz5cIjtcbmNvbnN0IGNhcmV0RG93blNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNNjQgMTQ0bDE5MiAyMjQgMTkyLTIyNEg2NHonLz48L3N2Zz5cIjtcbmNvbnN0IGNhcmV0VXBTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTQ0OCAzNjhMMjU2IDE0NCA2NCAzNjhoMzg0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2hlY2ttYXJrT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNDE2IDEyOEwxOTIgMzg0bC05Ni05NicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uQmFjayA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMzI4IDExMkwxODQgMjU2bDE0NCAxNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkRvd24gPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTExMiAxODRsMTQ0IDE0NCAxNDQtMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25FeHBhbmQgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J00xMzYgMjA4bDEyMC0xMDQgMTIwIDEwNE0xMzYgMzA0bDEyMCAxMDQgMTIwLTEwNCcgc3Ryb2tlLXdpZHRoPSc0OCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25Gb3J3YXJkID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xODQgMTEybDE0NCAxNDQtMTQ0IDE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRm9yd2FyZE91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTE4NCAxMTJsMTQ0IDE0NC0xNDQgMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNsb3NlID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNMjg5Ljk0IDI1Nmw5NS05NUEyNCAyNCAwIDAwMzUxIDEyN2wtOTUgOTUtOTUtOTVhMjQgMjQgMCAwMC0zNCAzNGw5NSA5NS05NSA5NWEyNCAyNCAwIDEwMzQgMzRsOTUtOTUgOTUgOTVhMjQgMjQgMCAwMDM0LTM0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2xvc2VDaXJjbGUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J00yNTYgNDhDMTQxLjMxIDQ4IDQ4IDE0MS4zMSA0OCAyNTZzOTMuMzEgMjA4IDIwOCAyMDggMjA4LTkzLjMxIDIwOC0yMDhTMzcwLjY5IDQ4IDI1NiA0OHptNzUuMzEgMjYwLjY5YTE2IDE2IDAgMTEtMjIuNjIgMjIuNjJMMjU2IDI3OC42M2wtNTIuNjkgNTIuNjhhMTYgMTYgMCAwMS0yMi42Mi0yMi42MkwyMzMuMzcgMjU2bC01Mi42OC01Mi42OWExNiAxNiAwIDAxMjIuNjItMjIuNjJMMjU2IDIzMy4zN2w1Mi42OS01Mi42OGExNiAxNiAwIDAxMjIuNjIgMjIuNjJMMjc4LjYzIDI1NnonLz48L3N2Zz5cIjtcbmNvbnN0IGNsb3NlU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J000MDAgMTQ1LjQ5TDM2Ni41MSAxMTIgMjU2IDIyMi41MSAxNDUuNDkgMTEyIDExMiAxNDUuNDkgMjIyLjUxIDI1NiAxMTIgMzY2LjUxIDE0NS40OSA0MDAgMjU2IDI4OS40OSAzNjYuNTEgNDAwIDQwMCAzNjYuNTEgMjg5LjQ5IDI1NiA0MDAgMTQ1LjQ5eicvPjwvc3ZnPlwiO1xuY29uc3QgZWxsaXBzZU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxjaXJjbGUgY3g9JzI1NicgY3k9JzI1Nicgcj0nMTkyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgZWxsaXBzaXNIb3Jpem9udGFsID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48Y2lyY2xlIGN4PScyNTYnIGN5PScyNTYnIHI9JzQ4Jy8+PGNpcmNsZSBjeD0nNDE2JyBjeT0nMjU2JyByPSc0OCcvPjxjaXJjbGUgY3g9Jzk2JyBjeT0nMjU2JyByPSc0OCcvPjwvc3ZnPlwiO1xuY29uc3QgZXllID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48Y2lyY2xlIGN4PScyNTYnIGN5PScyNTYnIHI9JzY0Jy8+PHBhdGggZD0nTTQ5MC44NCAyMzguNmMtMjYuNDYtNDAuOTItNjAuNzktNzUuNjgtOTkuMjctMTAwLjUzQzM0OSAxMTAuNTUgMzAyIDk2IDI1NS42NiA5NmMtNDIuNTIgMC04NC4zMyAxMi4xNS0xMjQuMjcgMzYuMTEtNDAuNzMgMjQuNDMtNzcuNjMgNjAuMTItMTA5LjY4IDEwNi4wN2EzMS45MiAzMS45MiAwIDAwLS42NCAzNS41NGMyNi40MSA0MS4zMyA2MC40IDc2LjE0IDk4LjI4IDEwMC42NUMxNjIgNDAyIDIwNy45IDQxNiAyNTUuNjYgNDE2YzQ2LjcxIDAgOTMuODEtMTQuNDMgMTM2LjItNDEuNzIgMzguNDYtMjQuNzcgNzIuNzItNTkuNjYgOTkuMDgtMTAwLjkyYTMyLjIgMzIuMiAwIDAwLS4xLTM0Ljc2ek0yNTYgMzUyYTk2IDk2IDAgMTE5Ni05NiA5Ni4xMSA5Ni4xMSAwIDAxLTk2IDk2eicvPjwvc3ZnPlwiO1xuY29uc3QgZXllT2ZmID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNNDMyIDQ0OGExNS45MiAxNS45MiAwIDAxLTExLjMxLTQuNjlsLTM1Mi0zNTJhMTYgMTYgMCAwMTIyLjYyLTIyLjYybDM1MiAzNTJBMTYgMTYgMCAwMTQzMiA0NDh6TTI0OCAzMTUuODVsLTUxLjc5LTUxLjc5YTIgMiAwIDAwLTMuMzkgMS42OSA2NC4xMSA2NC4xMSAwIDAwNTMuNDkgNTMuNDkgMiAyIDAgMDAxLjY5LTMuMzl6TTI2NCAxOTYuMTVMMzE1Ljg3IDI0OGEyIDIgMCAwMDMuNC0xLjY5IDY0LjEzIDY0LjEzIDAgMDAtNTMuNTUtNTMuNTUgMiAyIDAgMDAtMS43MiAzLjM5eicvPjxwYXRoIGQ9J000OTEgMjczLjM2YTMyLjIgMzIuMiAwIDAwLS4xLTM0Ljc2Yy0yNi40Ni00MC45Mi02MC43OS03NS42OC05OS4yNy0xMDAuNTNDMzQ5IDExMC41NSAzMDIgOTYgMjU1LjY4IDk2YTIyNi41NCAyMjYuNTQgMCAwMC03MS44MiAxMS43OSA0IDQgMCAwMC0xLjU2IDYuNjNsNDcuMjQgNDcuMjRhNCA0IDAgMDAzLjgyIDEuMDUgOTYgOTYgMCAwMTExNiAxMTYgNCA0IDAgMDAxLjA1IDMuODFsNjcuOTUgNjhhNCA0IDAgMDA1LjQuMjQgMzQzLjgxIDM0My44MSAwIDAwNjcuMjQtNzcuNHpNMjU2IDM1MmE5NiA5NiAwIDAxLTkzLjMtMTE4LjYzIDQgNCAwIDAwLTEuMDUtMy44MWwtNjYuODQtNjYuODdhNCA0IDAgMDAtNS40MS0uMjNjLTI0LjM5IDIwLjgxLTQ3IDQ2LjEzLTY3LjY3IDc1LjcyYTMxLjkyIDMxLjkyIDAgMDAtLjY0IDM1LjU0YzI2LjQxIDQxLjMzIDYwLjM5IDc2LjE0IDk4LjI4IDEwMC42NUMxNjIuMDYgNDAyIDIwNy45MiA0MTYgMjU1LjY4IDQxNmEyMzguMjIgMjM4LjIyIDAgMDA3Mi42NC0xMS41NSA0IDQgMCAwMDEuNjEtNi42NGwtNDcuNDctNDcuNDZhNCA0IDAgMDAtMy44MS0xLjA1QTk2IDk2IDAgMDEyNTYgMzUyeicvPjwvc3ZnPlwiO1xuY29uc3QgbWVudU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNODAgMTYwaDM1Mk04MCAyNTZoMzUyTTgwIDM1MmgzNTInIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgbWVudVNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNNjQgMzg0aDM4NHYtNDIuNjdINjR6bTAtMTA2LjY3aDM4NHYtNDIuNjZINjR6TTY0IDEyOHY0Mi42N2gzODRWMTI4eicvPjwvc3ZnPlwiO1xuY29uc3QgcmVtb3ZlT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNDAwIDI1NkgxMTInIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgcmVvcmRlclRocmVlT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNOTYgMjU2aDMyME05NiAxNzZoMzIwTTk2IDMzNmgzMjAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgcmVvcmRlclR3b1NoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0nc3F1YXJlJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ0JyBkPSdNMTE4IDMwNGgyNzZNMTE4IDIwOGgyNzYnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3Qgc2VhcmNoT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTIyMS4wOSA2NGExNTcuMDkgMTU3LjA5IDAgMTAxNTcuMDkgMTU3LjA5QTE1Ny4xIDE1Ny4xIDAgMDAyMjEuMDkgNjR6JyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNMzM4LjI5IDMzOC4yOUw0NDggNDQ4JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IHNlYXJjaFNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNNDY0IDQyOEwzMzkuOTIgMzAzLjlhMTYwLjQ4IDE2MC40OCAwIDAwMzAuNzItOTQuNThDMzcwLjY0IDEyMC4zNyAyOTguMjcgNDggMjA5LjMyIDQ4UzQ4IDEyMC4zNyA0OCAyMDkuMzJzNzIuMzcgMTYxLjMyIDE2MS4zMiAxNjEuMzJhMTYwLjQ4IDE2MC40OCAwIDAwOTQuNTgtMzAuNzJMNDI4IDQ2NHpNMjA5LjMyIDMxOS42OWExMTAuMzggMTEwLjM4IDAgMTExMTAuMzctMTEwLjM3IDExMC41IDExMC41IDAgMDEtMTEwLjM3IDExMC4zN3onLz48L3N2Zz5cIjtcblxuZXhwb3J0IHsgYXJyb3dCYWNrU2hhcnAgYXMgYSwgY2xvc2VDaXJjbGUgYXMgYiwgY2hldnJvbkJhY2sgYXMgYywgY2xvc2VTaGFycCBhcyBkLCBzZWFyY2hTaGFycCBhcyBlLCBjaGVja21hcmtPdXRsaW5lIGFzIGYsIGVsbGlwc2VPdXRsaW5lIGFzIGcsIGNhcmV0QmFja1NoYXJwIGFzIGgsIGFycm93RG93biBhcyBpLCByZW9yZGVyVGhyZWVPdXRsaW5lIGFzIGosIHJlb3JkZXJUd29TaGFycCBhcyBrLCBjaGV2cm9uRG93biBhcyBsLCBjaGV2cm9uRm9yd2FyZE91dGxpbmUgYXMgbSwgZWxsaXBzaXNIb3Jpem9udGFsIGFzIG4sIGNoZXZyb25Gb3J3YXJkIGFzIG8sIGNhcmV0VXBTaGFycCBhcyBwLCBjYXJldERvd25TaGFycCBhcyBxLCByZW1vdmVPdXRsaW5lIGFzIHIsIHNlYXJjaE91dGxpbmUgYXMgcywgY2xvc2UgYXMgdCwgbWVudU91dGxpbmUgYXMgdSwgbWVudVNoYXJwIGFzIHYsIGNoZXZyb25FeHBhbmQgYXMgdywgZXllIGFzIHgsIGV5ZU9mZiBhcyB5IH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGIgYXMgcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvciB9IGZyb20gJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuXG5jb25zdCBJT05fQ09OVEVOVF9UQUdfTkFNRSA9ICdJT04tQ09OVEVOVCc7XG5jb25zdCBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SID0gJ2lvbi1jb250ZW50JztcbmNvbnN0IElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SID0gJy5pb24tY29udGVudC1zY3JvbGwtaG9zdCc7XG4vKipcbiAqIFNlbGVjdG9yIHVzZWQgZm9yIGltcGxlbWVudGF0aW9ucyByZWxpYW50IG9uIGA8aW9uLWNvbnRlbnQ+YCBmb3Igc2Nyb2xsIGV2ZW50IGNoYW5nZXMuXG4gKlxuICogRGV2ZWxvcGVycyBzaG91bGQgdXNlIHRoZSBgLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0YCBzZWxlY3RvciB0byB0YXJnZXQgdGhlIGVsZW1lbnQgZW1pdHRpbmdcbiAqIHNjcm9sbCBldmVudHMuIFdpdGggdmlydHVhbCBzY3JvbGwgaW1wbGVtZW50YXRpb25zIHRoaXMgd2lsbCBiZSB0aGUgaG9zdCBlbGVtZW50IGZvclxuICogdGhlIHNjcm9sbCB2aWV3cG9ydC5cbiAqL1xuY29uc3QgSU9OX0NPTlRFTlRfU0VMRUNUT1IgPSBgJHtJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SfSwgJHtJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUn1gO1xuY29uc3QgaXNJb25Db250ZW50ID0gKGVsKSA9PiBlbC50YWdOYW1lID09PSBJT05fQ09OVEVOVF9UQUdfTkFNRTtcbi8qKlxuICogV2FpdHMgZm9yIHRoZSBlbGVtZW50IGhvc3QgZnVsbHkgaW5pdGlhbGl6ZSBiZWZvcmVcbiAqIHJldHVybmluZyB0aGUgaW5uZXIgc2Nyb2xsIGVsZW1lbnQuXG4gKlxuICogRm9yIGBpb24tY29udGVudGAgdGhlIHNjcm9sbCB0YXJnZXQgd2lsbCBiZSB0aGUgcmVzdWx0XG4gKiBvZiB0aGUgYGdldFNjcm9sbEVsZW1lbnRgIGZ1bmN0aW9uLlxuICpcbiAqIEZvciBjdXN0b20gaW1wbGVtZW50YXRpb25zIGl0IHdpbGwgYmUgdGhlIGVsZW1lbnQgaG9zdFxuICogb3IgYSBzZWxlY3RvciB3aXRoaW4gdGhlIGhvc3QsIGlmIHN1cHBsaWVkIHRocm91Z2ggYHNjcm9sbFRhcmdldGAuXG4gKi9cbmNvbnN0IGdldFNjcm9sbEVsZW1lbnQgPSBhc3luYyAoZWwpID0+IHtcbiAgICBpZiAoaXNJb25Db250ZW50KGVsKSkge1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY29tcG9uZW50T25SZWFkeShlbCwgcmVzb2x2ZSkpO1xuICAgICAgICByZXR1cm4gZWwuZ2V0U2Nyb2xsRWxlbWVudCgpO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59O1xuLyoqXG4gKiBRdWVyaWVzIHRoZSBlbGVtZW50IG1hdGNoaW5nIHRoZSBzZWxlY3RvciBmb3IgSW9uQ29udGVudC5cbiAqIFNlZSBJT05fQ09OVEVOVF9TRUxFQ1RPUiBmb3IgdGhlIHNlbGVjdG9yIHVzZWQuXG4gKi9cbmNvbnN0IGZpbmRJb25Db250ZW50ID0gKGVsKSA9PiB7XG4gICAgLyoqXG4gICAgICogRmlyc3Qgd2UgdHJ5IHRvIHF1ZXJ5IHRoZSBjdXN0b20gc2Nyb2xsIGhvc3Qgc2VsZWN0b3IgaW4gY2FzZXMgd2hlcmVcbiAgICAgKiB0aGUgaW1wbGVtZW50YXRpb24gaXMgdXNpbmcgYW4gb3V0ZXIgYGlvbi1jb250ZW50YCB3aXRoIGFuIGlubmVyIGN1c3RvbVxuICAgICAqIHNjcm9sbCBjb250YWluZXIuXG4gICAgICovXG4gICAgY29uc3QgY3VzdG9tQ29udGVudEhvc3QgPSBlbC5xdWVyeVNlbGVjdG9yKElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SKTtcbiAgICBpZiAoY3VzdG9tQ29udGVudEhvc3QpIHtcbiAgICAgICAgcmV0dXJuIGN1c3RvbUNvbnRlbnRIb3N0O1xuICAgIH1cbiAgICByZXR1cm4gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBRdWVyaWVzIHRoZSBjbG9zZXN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZvciBJb25Db250ZW50LlxuICovXG5jb25zdCBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgPSAoZWwpID0+IHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChJT05fQ09OVEVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIGVsZW1lbnQuIElmIGFuIGBpb24tY29udGVudGAgaXMgZm91bmQsIGl0IHdpbGwgc2Nyb2xsXG4gKiB1c2luZyB0aGUgcHVibGljIEFQSSBgc2Nyb2xsVG9Ub3BgIHdpdGggYSBkdXJhdGlvbi5cbiAqL1xuY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoZWwsIGR1cmF0aW9uTXMpID0+IHtcbiAgICBpZiAoaXNJb25Db250ZW50KGVsKSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZWw7XG4gICAgICAgIHJldHVybiBjb250ZW50LnNjcm9sbFRvVG9wKGR1cmF0aW9uTXMpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsLnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogZHVyYXRpb25NcyA+IDAgPyAnc21vb3RoJyA6ICdhdXRvJyxcbiAgICB9KSk7XG59O1xuLyoqXG4gKiBTY3JvbGxzIGJ5IGEgc3BlY2lmaWVkIFgvWSBkaXN0YW5jZSBpbiB0aGUgY29tcG9uZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbEJ5UG9pbnRgIHdpdGggYSBkdXJhdGlvbi5cbiAqL1xuY29uc3Qgc2Nyb2xsQnlQb2ludCA9IChlbCwgeCwgeSwgZHVyYXRpb25NcykgPT4ge1xuICAgIGlmIChpc0lvbkNvbnRlbnQoZWwpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlbDtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQuc2Nyb2xsQnlQb2ludCh4LCB5LCBkdXJhdGlvbk1zKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbC5zY3JvbGxCeSh7XG4gICAgICAgIHRvcDogeSxcbiAgICAgICAgbGVmdDogeCxcbiAgICAgICAgYmVoYXZpb3I6IGR1cmF0aW9uTXMgPiAwID8gJ3Ntb290aCcgOiAnYXV0bycsXG4gICAgfSkpO1xufTtcbi8qKlxuICogUHJpbnRzIGFuIGVycm9yIGluZm9ybWluZyBkZXZlbG9wZXJzIHRoYXQgYW4gaW1wbGVtZW50YXRpb24gcmVxdWlyZXMgYW4gZWxlbWVudCB0byBiZSB1c2VkXG4gKiB3aXRoaW4gZWl0aGVyIHRoZSBgaW9uLWNvbnRlbnRgIHNlbGVjdG9yIG9yIHRoZSBgLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0YCBjbGFzcy5cbiAqL1xuY29uc3QgcHJpbnRJb25Db250ZW50RXJyb3JNc2cgPSAoZWwpID0+IHtcbiAgICByZXR1cm4gcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvcihlbCwgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBTZXZlcmFsIGNvbXBvbmVudHMgaW4gSW9uaWMgbmVlZCB0byBwcmV2ZW50IHNjcm9sbGluZ1xuICogZHVyaW5nIGEgZ2VzdHVyZSAoY2FyZCBtb2RhbCwgcmFuZ2UsIGl0ZW0gc2xpZGluZywgZXRjKS5cbiAqIFVzZSB0aGlzIHV0aWxpdHkgdG8gYWNjb3VudCBmb3IgaW9uLWNvbnRlbnQgYW5kIGN1c3RvbSBjb250ZW50IGhvc3RzLlxuICovXG5jb25zdCBkaXNhYmxlQ29udGVudFNjcm9sbFkgPSAoY29udGVudEVsKSA9PiB7XG4gICAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgICAgIGNvbnN0IGlvbkNvbnRlbnQgPSBjb250ZW50RWw7XG4gICAgICAgIGNvbnN0IGluaXRpYWxTY3JvbGxZID0gaW9uQ29udGVudC5zY3JvbGxZO1xuICAgICAgICBpb25Db250ZW50LnNjcm9sbFkgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgc2hvdWxkIGJlIHBhc3NlZCBpbnRvIHJlc2V0Q29udGVudFNjcm9sbFlcbiAgICAgICAgICogc28gdGhhdCB3ZSBjYW4gcmV2ZXJ0IGlvbi1jb250ZW50J3Mgc2Nyb2xsWSB0byB0aGVcbiAgICAgICAgICogY29ycmVjdCBzdGF0ZS4gRm9yIGV4YW1wbGUsIGlmIHNjcm9sbFkgPSBmYWxzZVxuICAgICAgICAgKiBpbml0aWFsbHksIHdlIGRvIG5vdCB3YW50IHRvIGVuYWJsZSBzY3JvbGxpbmdcbiAgICAgICAgICogd2hlbiB3ZSBjYWxsIHJlc2V0Q29udGVudFNjcm9sbFkuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gaW5pdGlhbFNjcm9sbFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuY29uc3QgcmVzZXRDb250ZW50U2Nyb2xsWSA9IChjb250ZW50RWwsIGluaXRpYWxTY3JvbGxZKSA9PiB7XG4gICAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gaW5pdGlhbFNjcm9sbFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb250ZW50RWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IgYXMgSSwgZmluZElvbkNvbnRlbnQgYXMgYSwgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUiBhcyBiLCBzY3JvbGxCeVBvaW50IGFzIGMsIGRpc2FibGVDb250ZW50U2Nyb2xsWSBhcyBkLCBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgYXMgZiwgZ2V0U2Nyb2xsRWxlbWVudCBhcyBnLCBpc0lvbkNvbnRlbnQgYXMgaSwgcHJpbnRJb25Db250ZW50RXJyb3JNc2cgYXMgcCwgcmVzZXRDb250ZW50U2Nyb2xsWSBhcyByLCBzY3JvbGxUb1RvcCBhcyBzIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgSyBhcyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQtNzMxNzVlMjQuanMnO1xuaW1wb3J0ICcuL2NhcGFjaXRvci01OTM5NWNiZC5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtYTVkNTBkYWYuanMnO1xuXG5jb25zdCBLRVlCT0FSRF9ESURfT1BFTiA9ICdpb25LZXlib2FyZERpZFNob3cnO1xuY29uc3QgS0VZQk9BUkRfRElEX0NMT1NFID0gJ2lvbktleWJvYXJkRGlkSGlkZSc7XG5jb25zdCBLRVlCT0FSRF9USFJFU0hPTEQgPSAxNTA7XG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xubGV0IHByZXZpb3VzVmlzdWFsVmlld3BvcnQgPSB7fTtcbmxldCBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSB7fTtcbmxldCBrZXlib2FyZE9wZW4gPSBmYWxzZTtcbi8qKlxuICogVGhpcyBpcyBvbmx5IHVzZWQgZm9yIHRlc3RzXG4gKi9cbmNvbnN0IHJlc2V0S2V5Ym9hcmRBc3Npc3QgPSAoKSA9PiB7XG4gICAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydCA9IHt9O1xuICAgIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IHt9O1xuICAgIGtleWJvYXJkT3BlbiA9IGZhbHNlO1xufTtcbmNvbnN0IHN0YXJ0S2V5Ym9hcmRBc3Npc3QgPSAod2luKSA9PiB7XG4gICAgY29uc3QgbmF0aXZlRW5naW5lID0gS2V5Ym9hcmQuZ2V0RW5naW5lKCk7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIG5hdGl2ZSBrZXlib2FyZCBwbHVnaW4gaXMgYXZhaWxhYmxlXG4gICAgICogdGhlbiB3ZSBhcmUgcnVubmluZyBpbiBhIG5hdGl2ZSBlbnZpcm9ubWVudC4gQXMgYSByZXN1bHRcbiAgICAgKiB3ZSBzaG91bGQgb25seSBsaXN0ZW4gb24gdGhlIG5hdGl2ZSBldmVudHMgaW5zdGVhZCBvZlxuICAgICAqIHVzaW5nIHRoZSBWaXN1YWwgVmlld3BvcnQgYXMgdGhlIElvbmljIHdlYnZpZXcgbWFuaXB1bGF0ZXNcbiAgICAgKiBob3cgaXQgcmVzaXplcyBzdWNoIHRoYXQgdGhlIFZpc3VhbCBWaWV3cG9ydCBBUEkgaXMgbm90XG4gICAgICogcmVsaWFibGUgaGVyZS5cbiAgICAgKi9cbiAgICBpZiAobmF0aXZlRW5naW5lKSB7XG4gICAgICAgIHN0YXJ0TmF0aXZlTGlzdGVuZXJzKHdpbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIXdpbi52aXN1YWxWaWV3cG9ydCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IGNvcHlWaXN1YWxWaWV3cG9ydCh3aW4udmlzdWFsVmlld3BvcnQpO1xuICAgICAgICB3aW4udmlzdWFsVmlld3BvcnQub25yZXNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0cmFja1ZpZXdwb3J0Q2hhbmdlcyh3aW4pO1xuICAgICAgICAgICAgaWYgKGtleWJvYXJkRGlkT3BlbigpIHx8IGtleWJvYXJkRGlkUmVzaXplKHdpbikpIHtcbiAgICAgICAgICAgICAgICBzZXRLZXlib2FyZE9wZW4od2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleWJvYXJkRGlkQ2xvc2Uod2luKSkge1xuICAgICAgICAgICAgICAgIHNldEtleWJvYXJkQ2xvc2Uod2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59O1xuLyoqXG4gKiBMaXN0ZW4gZm9yIGV2ZW50cyBmaXJlZCBieSBuYXRpdmUga2V5Ym9hcmQgcGx1Z2luXG4gKiBpbiBDYXBhY2l0b3IvQ29yZG92YSBzbyBkZXZzIG9ubHkgbmVlZCB0byBsaXN0ZW5cbiAqIGluIG9uZSBwbGFjZS5cbiAqL1xuY29uc3Qgc3RhcnROYXRpdmVMaXN0ZW5lcnMgPSAod2luKSA9PiB7XG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkRGlkU2hvdycsIChldikgPT4gc2V0S2V5Ym9hcmRPcGVuKHdpbiwgZXYpKTtcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmREaWRIaWRlJywgKCkgPT4gc2V0S2V5Ym9hcmRDbG9zZSh3aW4pKTtcbn07XG5jb25zdCBzZXRLZXlib2FyZE9wZW4gPSAod2luLCBldikgPT4ge1xuICAgIGZpcmVLZXlib2FyZE9wZW5FdmVudCh3aW4sIGV2KTtcbiAgICBrZXlib2FyZE9wZW4gPSB0cnVlO1xufTtcbmNvbnN0IHNldEtleWJvYXJkQ2xvc2UgPSAod2luKSA9PiB7XG4gICAgZmlyZUtleWJvYXJkQ2xvc2VFdmVudCh3aW4pO1xuICAgIGtleWJvYXJkT3BlbiA9IGZhbHNlO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBrZXlib2FyZE9wZW5gIGZsYWcgaXMgbm90XG4gKiBzZXQsIHRoZSBwcmV2aW91cyB2aXN1YWwgdmlld3BvcnQgd2lkdGggZXF1YWwgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCB3aWR0aCwgYW5kIGlmIHRoZSBzY2FsZWQgZGlmZmVyZW5jZVxuICogb2YgdGhlIHByZXZpb3VzIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgbWludXMgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIEtFWUJPQVJEX1RIUkVTSE9MRFxuICpcbiAqIFdlIG5lZWQgdG8gYmUgYWJsZSB0byBhY2NvbW1vZGF0ZSB1c2VycyB3aG8gaGF2ZSB6b29taW5nXG4gKiBlbmFibGVkIGluIHRoZWlyIGJyb3dzZXIgKG9yIGhhdmUgem9vbWVkIGluIG1hbnVhbGx5KSB3aGljaFxuICogaXMgd2h5IHdlIHRha2UgaW50byBhY2NvdW50IHRoZSBjdXJyZW50IHZpc3VhbCB2aWV3cG9ydCdzXG4gKiBzY2FsZSB2YWx1ZS5cbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRPcGVuID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPSAocHJldmlvdXNWaXN1YWxWaWV3cG9ydC5oZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0KSAqIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5zY2FsZTtcbiAgICByZXR1cm4gKCFrZXlib2FyZE9wZW4gJiZcbiAgICAgICAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydC53aWR0aCA9PT0gY3VycmVudFZpc3VhbFZpZXdwb3J0LndpZHRoICYmXG4gICAgICAgIHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPiBLRVlCT0FSRF9USFJFU0hPTEQpO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sXG4gKiBidXQgdGhlIGtleWJvYXJkIGRpZCBub3QgY2xvc2VcbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRSZXNpemUgPSAod2luKSA9PiB7XG4gICAgcmV0dXJuIGtleWJvYXJkT3BlbiAmJiAha2V5Ym9hcmREaWRDbG9zZSh3aW4pO1xufTtcbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBrZXlib2FyZCB3YXMgY2xvc2VkXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYGtleWJvYXJkT3BlbmAgZmxhZyBpcyBzZXQgYW5kXG4gKiB0aGUgY3VycmVudCB2aXN1YWwgdmlld3BvcnQgaGVpZ2h0IGVxdWFscyB0aGVcbiAqIGxheW91dCB2aWV3cG9ydCBoZWlnaHQuXG4gKi9cbmNvbnN0IGtleWJvYXJkRGlkQ2xvc2UgPSAod2luKSA9PiB7XG4gICAgcmV0dXJuIGtleWJvYXJkT3BlbiAmJiBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0ID09PSB3aW4uaW5uZXJIZWlnaHQ7XG59O1xuLyoqXG4gKiBEaXNwYXRjaCBhIGtleWJvYXJkIG9wZW4gZXZlbnRcbiAqL1xuY29uc3QgZmlyZUtleWJvYXJkT3BlbkV2ZW50ID0gKHdpbiwgbmF0aXZlRXYpID0+IHtcbiAgICBjb25zdCBrZXlib2FyZEhlaWdodCA9IG5hdGl2ZUV2ID8gbmF0aXZlRXYua2V5Ym9hcmRIZWlnaHQgOiB3aW4uaW5uZXJIZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KEtFWUJPQVJEX0RJRF9PUEVOLCB7XG4gICAgICAgIGRldGFpbDogeyBrZXlib2FyZEhlaWdodCB9LFxuICAgIH0pO1xuICAgIHdpbi5kaXNwYXRjaEV2ZW50KGV2KTtcbn07XG4vKipcbiAqIERpc3BhdGNoIGEga2V5Ym9hcmQgY2xvc2UgZXZlbnRcbiAqL1xuY29uc3QgZmlyZUtleWJvYXJkQ2xvc2VFdmVudCA9ICh3aW4pID0+IHtcbiAgICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChLRVlCT0FSRF9ESURfQ0xPU0UpO1xuICAgIHdpbi5kaXNwYXRjaEV2ZW50KGV2KTtcbn07XG4vKipcbiAqIEdpdmVuIGEgd2luZG93IG9iamVjdCwgY3JlYXRlIGEgY29weSBvZlxuICogdGhlIGN1cnJlbnQgdmlzdWFsIGFuZCBsYXlvdXQgdmlld3BvcnQgc3RhdGVzXG4gKiB3aGlsZSBhbHNvIHByZXNlcnZpbmcgdGhlIHByZXZpb3VzIHZpc3VhbCBhbmRcbiAqIGxheW91dCB2aWV3cG9ydCBzdGF0ZXNcbiAqL1xuY29uc3QgdHJhY2tWaWV3cG9ydENoYW5nZXMgPSAod2luKSA9PiB7XG4gICAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCk7XG4gICAgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0gY29weVZpc3VhbFZpZXdwb3J0KHdpbi52aXN1YWxWaWV3cG9ydCk7XG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIHRoZSB2aXN1YWwgdmlld3BvcnRcbiAqIGF0IGEgZ2l2ZW4gc3RhdGVcbiAqL1xuY29uc3QgY29weVZpc3VhbFZpZXdwb3J0ID0gKHZpc3VhbFZpZXdwb3J0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IE1hdGgucm91bmQodmlzdWFsVmlld3BvcnQud2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQodmlzdWFsVmlld3BvcnQuaGVpZ2h0KSxcbiAgICAgICAgb2Zmc2V0VG9wOiB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AsXG4gICAgICAgIG9mZnNldExlZnQ6IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQsXG4gICAgICAgIHBhZ2VUb3A6IHZpc3VhbFZpZXdwb3J0LnBhZ2VUb3AsXG4gICAgICAgIHBhZ2VMZWZ0OiB2aXN1YWxWaWV3cG9ydC5wYWdlTGVmdCxcbiAgICAgICAgc2NhbGU6IHZpc3VhbFZpZXdwb3J0LnNjYWxlLFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBLRVlCT0FSRF9ESURfQ0xPU0UsIEtFWUJPQVJEX0RJRF9PUEVOLCBjb3B5VmlzdWFsVmlld3BvcnQsIGtleWJvYXJkRGlkQ2xvc2UsIGtleWJvYXJkRGlkT3Blbiwga2V5Ym9hcmREaWRSZXNpemUsIHJlc2V0S2V5Ym9hcmRBc3Npc3QsIHNldEtleWJvYXJkQ2xvc2UsIHNldEtleWJvYXJkT3Blbiwgc3RhcnRLZXlib2FyZEFzc2lzdCwgdHJhY2tWaWV3cG9ydENoYW5nZXMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBnIGFzIGdldENhcGFjaXRvciB9IGZyb20gJy4vY2FwYWNpdG9yLTU5Mzk1Y2JkLmpzJztcblxudmFyIEV4Y2VwdGlvbkNvZGU7XG4oZnVuY3Rpb24gKEV4Y2VwdGlvbkNvZGUpIHtcbiAgICAvKipcbiAgICAgKiBBUEkgaXMgbm90IGltcGxlbWVudGVkLlxuICAgICAqXG4gICAgICogVGhpcyB1c3VhbGx5IG1lYW5zIHRoZSBBUEkgY2FuJ3QgYmUgdXNlZCBiZWNhdXNlIGl0IGlzIG5vdCBpbXBsZW1lbnRlZCBmb3JcbiAgICAgKiB0aGUgY3VycmVudCBwbGF0Zm9ybS5cbiAgICAgKi9cbiAgICBFeGNlcHRpb25Db2RlW1wiVW5pbXBsZW1lbnRlZFwiXSA9IFwiVU5JTVBMRU1FTlRFRFwiO1xuICAgIC8qKlxuICAgICAqIEFQSSBpcyBub3QgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogVGhpcyBtZWFucyB0aGUgQVBJIGNhbid0IGJlIHVzZWQgcmlnaHQgbm93IGJlY2F1c2U6XG4gICAgICogICAtIGl0IGlzIGN1cnJlbnRseSBtaXNzaW5nIGEgcHJlcmVxdWlzaXRlLCBzdWNoIGFzIG5ldHdvcmsgY29ubmVjdGl2aXR5XG4gICAgICogICAtIGl0IHJlcXVpcmVzIGEgcGFydGljdWxhciBwbGF0Zm9ybSBvciBicm93c2VyIHZlcnNpb25cbiAgICAgKi9cbiAgICBFeGNlcHRpb25Db2RlW1wiVW5hdmFpbGFibGVcIl0gPSBcIlVOQVZBSUxBQkxFXCI7XG59KShFeGNlcHRpb25Db2RlIHx8IChFeGNlcHRpb25Db2RlID0ge30pKTtcblxudmFyIEtleWJvYXJkUmVzaXplO1xuKGZ1bmN0aW9uIChLZXlib2FyZFJlc2l6ZSkge1xuICAgIC8qKlxuICAgICAqIE9ubHkgdGhlIGBib2R5YCBIVE1MIGVsZW1lbnQgd2lsbCBiZSByZXNpemVkLlxuICAgICAqIFJlbGF0aXZlIHVuaXRzIGFyZSBub3QgYWZmZWN0ZWQsIGJlY2F1c2UgdGhlIHZpZXdwb3J0IGRvZXMgbm90IGNoYW5nZS5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIEtleWJvYXJkUmVzaXplW1wiQm9keVwiXSA9IFwiYm9keVwiO1xuICAgIC8qKlxuICAgICAqIE9ubHkgdGhlIGBpb24tYXBwYCBIVE1MIGVsZW1lbnQgd2lsbCBiZSByZXNpemVkLlxuICAgICAqIFVzZSBpdCBvbmx5IGZvciBJb25pYyBGcmFtZXdvcmsgYXBwcy5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIEtleWJvYXJkUmVzaXplW1wiSW9uaWNcIl0gPSBcImlvbmljXCI7XG4gICAgLyoqXG4gICAgICogVGhlIHdob2xlIG5hdGl2ZSBXZWIgVmlldyB3aWxsIGJlIHJlc2l6ZWQgd2hlbiB0aGUga2V5Ym9hcmQgc2hvd3MvaGlkZXMuXG4gICAgICogVGhpcyBhZmZlY3RzIHRoZSBgdmhgIHJlbGF0aXZlIHVuaXQuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBLZXlib2FyZFJlc2l6ZVtcIk5hdGl2ZVwiXSA9IFwibmF0aXZlXCI7XG4gICAgLyoqXG4gICAgICogTmVpdGhlciB0aGUgYXBwIG5vciB0aGUgV2ViIFZpZXcgYXJlIHJlc2l6ZWQuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBLZXlib2FyZFJlc2l6ZVtcIk5vbmVcIl0gPSBcIm5vbmVcIjtcbn0pKEtleWJvYXJkUmVzaXplIHx8IChLZXlib2FyZFJlc2l6ZSA9IHt9KSk7XG5jb25zdCBLZXlib2FyZCA9IHtcbiAgICBnZXRFbmdpbmUoKSB7XG4gICAgICAgIGNvbnN0IGNhcGFjaXRvciA9IGdldENhcGFjaXRvcigpO1xuICAgICAgICBpZiAoY2FwYWNpdG9yID09PSBudWxsIHx8IGNhcGFjaXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FwYWNpdG9yLmlzUGx1Z2luQXZhaWxhYmxlKCdLZXlib2FyZCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FwYWNpdG9yLlBsdWdpbnMuS2V5Ym9hcmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGdldFJlc2l6ZU1vZGUoKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgICAgIGlmICghKGVuZ2luZSA9PT0gbnVsbCB8fCBlbmdpbmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVuZ2luZS5nZXRSZXNpemVNb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmdpbmUuZ2V0UmVzaXplTW9kZSgpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBFeGNlcHRpb25Db2RlLlVuaW1wbGVtZW50ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAvLyB3ZSB0cmVhdCBpdCB0aGUgc2FtZSBhcyBpZiB0aGUgcGx1Z2luIGlzIG5vdCBhdmFpbGFibGUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG5leHBvcnQgeyBLZXlib2FyZCBhcyBLLCBLZXlib2FyZFJlc2l6ZSBhcyBhIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3aW4sIGQgYXMgZG9jIH0gZnJvbSAnLi9pbmRleC1hNWQ1MGRhZi5qcyc7XG5pbXBvcnQgeyBLIGFzIEtleWJvYXJkLCBhIGFzIEtleWJvYXJkUmVzaXplIH0gZnJvbSAnLi9rZXlib2FyZC03MzE3NWUyNC5qcyc7XG5cbi8qKlxuICogVGhlIGVsZW1lbnQgdGhhdCByZXNpemVzIHdoZW4gdGhlIGtleWJvYXJkIG9wZW5zXG4gKiBpcyBnb2luZyB0byBkZXBlbmQgb24gdGhlIHJlc2l6ZSBtb2RlXG4gKiB3aGljaCBpcyB3aHkgd2UgY2hlY2sgdGhhdCBoZXJlLlxuICovXG5jb25zdCBnZXRSZXNpemVDb250YWluZXIgPSAocmVzaXplTW9kZSkgPT4ge1xuICAgIC8qKlxuICAgICAqIElmIGRvYyBpcyB1bmRlZmluZWQgdGhlbiB3ZSBhcmVcbiAgICAgKiBpbiBhbiBTU1IgZW52aXJvbm1lbnQsIHNvIHRoZSBrZXlib2FyZFxuICAgICAqIGFkanVzdG1lbnQgZG9lcyBub3QgYXBwbHkuXG4gICAgICogSWYgdGhlIHdlYnZpZXcgZG9lcyBub3QgcmVzaXplIHRoZW4gdGhlcmVcbiAgICAgKiBpcyBubyBjb250YWluZXIgdG8gcmVzaXplLlxuICAgICAqL1xuICAgIGlmIChkb2MgPT09IHVuZGVmaW5lZCB8fCByZXNpemVNb2RlID09PSBLZXlib2FyZFJlc2l6ZS5Ob25lIHx8IHJlc2l6ZU1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHRocmVlIHJlbWFpbmluZyByZXNpemUgbW9kZXM6IE5hdGl2ZSwgSW9uaWMsIGFuZCBCb2R5XG4gICAgICogYWxsIGNhdXNlIGBpb24tYXBwYCB0byByZXNpemUsIHNvIHdlIGNhbiBsaXN0ZW4gZm9yIGNoYW5nZXNcbiAgICAgKiBvbiB0aGF0LiBJbiB0aGUgZXZlbnQgYGlvbi1hcHBgIGlzIG5vdCBhdmFpbGFibGUgdGhlblxuICAgICAqIHdlIGNhbiBmYWxsIGJhY2sgdG8gYGJvZHlgLlxuICAgICAqL1xuICAgIGNvbnN0IGlvbkFwcCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdpb24tYXBwJyk7XG4gICAgcmV0dXJuIGlvbkFwcCAhPT0gbnVsbCAmJiBpb25BcHAgIT09IHZvaWQgMCA/IGlvbkFwcCA6IGRvYy5ib2R5O1xufTtcbi8qKlxuICogR2V0IHRoZSBoZWlnaHQgb2YgaW9uLWFwcCBvciBib2R5LlxuICogVGhpcyBpcyB1c2VkIGZvciBkZXRlcm1pbmluZyBpZiB0aGUgd2Vidmlld1xuICogaGFzIHJlc2l6ZWQgYmVmb3JlIHRoZSBrZXlib2FyZCBjbG9zZWQuXG4gKiAqL1xuY29uc3QgZ2V0UmVzaXplQ29udGFpbmVySGVpZ2h0ID0gKHJlc2l6ZU1vZGUpID0+IHtcbiAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZ2V0UmVzaXplQ29udGFpbmVyKHJlc2l6ZU1vZGUpO1xuICAgIHJldHVybiBjb250YWluZXJFbGVtZW50ID09PSBudWxsID8gMCA6IGNvbnRhaW5lckVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufTtcbi8qKlxuICogQ3JlYXRlcyBhIGNvbnRyb2xsZXIgdGhhdCB0cmFja3MgYW5kIHJlYWN0cyB0byBvcGVuaW5nIG9yIGNsb3NpbmcgdGhlIGtleWJvYXJkLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2sgQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGtleWJvYXJkIG9wZW5zIG9yIGNsb3Nlcy5cbiAqL1xuY29uc3QgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyID0gYXN5bmMgKGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2spID0+IHtcbiAgICBsZXQga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXI7XG4gICAgbGV0IGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyO1xuICAgIGxldCBrZXlib2FyZFZpc2libGU7XG4gICAgLyoqXG4gICAgICogVGhpcyBsZXRzIHVzIGRldGVybWluZSBpZiB0aGUgd2VidmlldyBjb250ZW50XG4gICAgICogaGFzIHJlc2l6ZWQgYXMgYSByZXN1bHQgb2YgdGhlIGtleWJvYXJkLlxuICAgICAqL1xuICAgIGxldCBpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0O1xuICAgIGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc2l6ZU9wdGlvbnMgPSBhd2FpdCBLZXlib2FyZC5nZXRSZXNpemVNb2RlKCk7XG4gICAgICAgIGNvbnN0IHJlc2l6ZU1vZGUgPSByZXNpemVPcHRpb25zID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZXNpemVPcHRpb25zLm1vZGU7XG4gICAgICAgIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXZSBuZWVkIHRvIGNvbXB1dGUgaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodCByaWdodCBiZWZvcmVcbiAgICAgICAgICAgICAqIHRoZSBrZXlib2FyZCBvcGVucyB0byBndWFyYW50ZWUgdGhlIHJlc2l6ZSBjb250YWluZXIgaXMgdmlzaWJsZS5cbiAgICAgICAgICAgICAqIFRoZSByZXNpemUgY29udGFpbmVyIG1heSBub3QgYmUgdmlzaWJsZSBpZiB3ZSBjb21wdXRlIHRoaXNcbiAgICAgICAgICAgICAqIGFzIHNvb24gYXMgdGhlIGtleWJvYXJkIGNvbnRyb2xsZXIgaXMgY3JlYXRlZC5cbiAgICAgICAgICAgICAqIFdlIHNob3VsZCBvbmx5IG5lZWQgdG8gZG8gdGhpcyBvbmNlIHRvIGF2b2lkIGFkZGl0aW9uYWwgY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgKiBjb21wdXRhdGlvbnMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0ID0gZ2V0UmVzaXplQ29udGFpbmVySGVpZ2h0KHJlc2l6ZU1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5Ym9hcmRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZpcmVDaGFuZ2VDYWxsYmFjayhrZXlib2FyZFZpc2libGUsIHJlc2l6ZU1vZGUpO1xuICAgICAgICB9O1xuICAgICAgICBrZXlib2FyZFdpbGxIaWRlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGtleWJvYXJkVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgZmlyZUNoYW5nZUNhbGxiYWNrKGtleWJvYXJkVmlzaWJsZSwgcmVzaXplTW9kZSk7XG4gICAgICAgIH07XG4gICAgICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxTaG93Jywga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIpO1xuICAgICAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsSGlkZScsIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyKTtcbiAgICB9O1xuICAgIGNvbnN0IGZpcmVDaGFuZ2VDYWxsYmFjayA9IChzdGF0ZSwgcmVzaXplTW9kZSkgPT4ge1xuICAgICAgICBpZiAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayhzdGF0ZSwgY3JlYXRlUmVzaXplUHJvbWlzZUlmTmVlZGVkKHJlc2l6ZU1vZGUpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29kZSByZXNwb25kaW5nIHRvIGtleWJvYXJkIGxpZmVjeWNsZXMgbWF5IG5lZWRcbiAgICAgKiB0byBzaG93L2hpZGUgY29udGVudCBvbmNlIHRoZSB3ZWJ2aWV3IGhhc1xuICAgICAqIHJlc2l6ZWQgYXMgYSByZXN1bHQgb2YgdGhlIGtleWJvYXJkIHNob3dpbmcvaGlkaW5nLlxuICAgICAqIGNyZWF0ZVJlc2l6ZVByb21pc2VJZk5lZWRlZCBwcm92aWRlcyBhIHdheSBmb3IgY29kZSB0byB3YWl0IGZvciB0aGVcbiAgICAgKiByZXNpemUgZXZlbnQgdGhhdCB3YXMgdHJpZ2dlcmVkIGFzIGEgcmVzdWx0IG9mIHRoZSBrZXlib2FyZC5cbiAgICAgKi9cbiAgICBjb25zdCBjcmVhdGVSZXNpemVQcm9taXNlSWZOZWVkZWQgPSAocmVzaXplTW9kZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB3ZSBhcmUgaW4gYW4gU1NSIGVudmlyb25tZW50IHRoZW4gdGhlcmUgaXNcbiAgICAgICAgICogbm8gd2luZG93IHRvIHJlc2l6ZS4gQWRkaXRpb25hbGx5LCBpZiB0aGVyZVxuICAgICAgICAgKiBpcyBubyByZXNpemUgbW9kZSBvciB0aGUgcmVzaXplIG1vZGUgaXMgXCJOb25lXCJcbiAgICAgICAgICogdGhlbiBpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0IHdpbGwgYmUgMFxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodCA9PT0gMCB8fFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiB0aGUga2V5Ym9hcmQgaXMgY2xvc2VkIGJlZm9yZSB0aGUgd2VidmlldyByZXNpemVzIGluaXRpYWxseVxuICAgICAgICAgICAgICogdGhlbiB0aGUgd2VidmlldyB3aWxsIG5ldmVyIHJlc2l6ZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodCA9PT0gZ2V0UmVzaXplQ29udGFpbmVySGVpZ2h0KHJlc2l6ZU1vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgcmVzaXplIGNvbnRhaW5lciBzbyB3ZSBjYW5cbiAgICAgICAgICogYXR0YWNoIHRoZSBSZXNpemVPYnNlcnZlciBiZWxvdyB0b1xuICAgICAgICAgKiB0aGUgY29ycmVjdCBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGdldFJlc2l6ZUNvbnRhaW5lcihyZXNpemVNb2RlKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU29tZSBwYXJ0IG9mIHRoZSB3ZWIgY29udGVudCBzaG91bGQgcmVzaXplLFxuICAgICAgICAgKiBhbmQgd2UgbmVlZCB0byBsaXN0ZW4gZm9yIGEgcmVzaXplLlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBcyBwZXIgdGhlIHNwZWMsIHRoZSBSZXNpemVPYnNlcnZlclxuICAgICAgICAgICAgICAgICAqIHdpbGwgZmlyZSB3aGVuIG9ic2VydmF0aW9uIHN0YXJ0cyBpZlxuICAgICAgICAgICAgICAgICAqIHRoZSBvYnNlcnZlZCBlbGVtZW50IGlzIHJlbmRlcmVkIGFuZCBkb2VzIG5vdFxuICAgICAgICAgICAgICAgICAqIGhhdmUgYSBzaXplIG9mIDAgeCAwLiBIb3dldmVyLCB0aGUgd2F0Y2hlZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICogbWF5IG9yIG1heSBub3QgaGF2ZSByZXNpemVkIGJ5IHRoZSB0aW1lIHRoaXMgZmlyc3RcbiAgICAgICAgICAgICAgICAgKiBjYWxsYmFjayBpcyBmaXJlZC4gQXMgYSByZXN1bHQsIHdlIG5lZWQgdG8gY2hlY2tcbiAgICAgICAgICAgICAgICAgKiB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9yZXNpemUtb2JzZXJ2ZXIvI2ludHJvXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lckVsZW1lbnQuY2xpZW50SGVpZ2h0ID09PSBpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBUaGUgcmVzaXplIGhhcHBlbmVkLCBzbyBzdG9wIGxpc3RlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgKiBmb3IgcmVzaXplIG9uIHRoaXMgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHJvLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluIENhcGFjaXRvciB0aGVyZSBjYW4gYmUgZGVsYXkgYmV0d2VlbiB3aGVuIHRoZSB3aW5kb3dcbiAgICAgICAgICAgICAqIHJlc2l6ZXMgYW5kIHdoZW4gdGhlIGNvbnRhaW5lciBlbGVtZW50IHJlc2l6ZXMsIHNvIHdlIGNhbm5vdFxuICAgICAgICAgICAgICogcmVseSBvbiBhICdyZXNpemUnIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSB3aW5kb3cuXG4gICAgICAgICAgICAgKiBJbnN0ZWFkLCB3ZSBuZWVkIHRvIGRldGVybWluZSB3aGVuIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAqIGVsZW1lbnQgcmVzaXplcyB1c2luZyBhIFJlc2l6ZU9ic2VydmVyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBybyA9IG5ldyBSZXNpemVPYnNlcnZlcihjYWxsYmFjayk7XG4gICAgICAgICAgICByby5vYnNlcnZlKGNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxTaG93Jywga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIpO1xuICAgICAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsSGlkZScsIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyKTtcbiAgICAgICAga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIgPSBrZXlib2FyZFdpbGxIaWRlSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIGNvbnN0IGlzS2V5Ym9hcmRWaXNpYmxlID0gKCkgPT4ga2V5Ym9hcmRWaXNpYmxlO1xuICAgIGF3YWl0IGluaXQoKTtcbiAgICByZXR1cm4geyBpbml0LCBkZXN0cm95LCBpc0tleWJvYXJkVmlzaWJsZSB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyIGFzIGMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKipcbiAqIENyZWF0ZXMgYSBsb2NrIGNvbnRyb2xsZXIuXG4gKlxuICogQ2xhaW1pbmcgYSBsb2NrIG1lYW5zIHRoYXQgbm90aGluZyBlbHNlIGNhbiBhY3F1aXJlIHRoZSBsb2NrIHVudGlsIGl0IGlzIHJlbGVhc2VkLlxuICogVGhpcyBjYW4gbW9tZW50YXJpbHkgcHJldmVudCBleGVjdXRpb24gb2YgY29kZSB0aGF0IG5lZWRzIHRvIHdhaXQgZm9yIHRoZSBlYXJsaWVyIGNvZGUgdG8gZmluaXNoLlxuICogRm9yIGV4YW1wbGUsIHRoaXMgY2FuIGJlIHVzZWQgdG8gcHJldmVudCBtdWx0aXBsZSB0cmFuc2l0aW9ucyBmcm9tIG9jY3VycmluZyBhdCB0aGUgc2FtZSB0aW1lLlxuICovXG5jb25zdCBjcmVhdGVMb2NrQ29udHJvbGxlciA9ICgpID0+IHtcbiAgICBsZXQgd2FpdFByb21pc2U7XG4gICAgLyoqXG4gICAgICogV2hlbiBsb2NrKCkgaXMgY2FsbGVkLCB0aGUgbG9jayBpcyBjbGFpbWVkLlxuICAgICAqIE9uY2UgYSBsb2NrIGhhcyBiZWVuIGNsYWltZWQsIGl0IGNhbm5vdCBiZSBjbGFpbWVkIGFnYWluIHVudGlsIGl0IGlzIHJlbGVhc2VkLlxuICAgICAqIFdoZW4gdGhpcyBmdW5jdGlvbiBnZXRzIHJlc29sdmVkLCB0aGUgbG9jayBpcyByZWxlYXNlZCwgYWxsb3dpbmcgaXQgdG8gYmUgY2xhaW1lZCBhZ2Fpbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIGBgYHRzeFxuICAgICAqIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9ja0NvbnRyb2xsZXIubG9jaygpO1xuICAgICAqIC8vIGRvIG90aGVyIHN0dWZmXG4gICAgICogdW5sb2NrKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgY29uc3QgbG9jayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcCA9IHdhaXRQcm9taXNlO1xuICAgICAgICBsZXQgcmVzb2x2ZTtcbiAgICAgICAgd2FpdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocikgPT4gKHJlc29sdmUgPSByKSk7XG4gICAgICAgIGlmIChwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmU7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2NrLFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMb2NrQ29udHJvbGxlciBhcyBjIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3Qgc3Bpbm5lcnMgPSB7XG4gICAgYnViYmxlczoge1xuICAgICAgICBkdXI6IDEwMDAsXG4gICAgICAgIGNpcmNsZXM6IDksXG4gICAgICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJICogaW5kZXgpIC8gdG90YWw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IDUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHszMiAqIE1hdGguc2luKGFuZ2xlKX0lYCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7MzIgKiBNYXRoLmNvcyhhbmdsZSl9JWAsXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNpcmNsZXM6IHtcbiAgICAgICAgZHVyOiAxMDAwLFxuICAgICAgICBjaXJjbGVzOiA4LFxuICAgICAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gaW5kZXggLyB0b3RhbDtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7ZHVyICogc3RlcCAtIGR1cn1tc2A7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLlBJICogc3RlcDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcjogNSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IGAkezMyICogTWF0aC5zaW4oYW5nbGUpfSVgLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHszMiAqIE1hdGguY29zKGFuZ2xlKX0lYCxcbiAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2lyY3VsYXI6IHtcbiAgICAgICAgZHVyOiAxNDAwLFxuICAgICAgICBlbG1EdXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgY2lyY2xlczogMSxcbiAgICAgICAgZm46ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcjogMjAsXG4gICAgICAgICAgICAgICAgY3g6IDQ4LFxuICAgICAgICAgICAgICAgIGN5OiA0OCxcbiAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgdmlld0JveDogJzI0IDI0IDQ4IDQ4JyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNyZXNjZW50OiB7XG4gICAgICAgIGR1cjogNzUwLFxuICAgICAgICBjaXJjbGVzOiAxLFxuICAgICAgICBmbjogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByOiAyNixcbiAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgZG90czoge1xuICAgICAgICBkdXI6IDc1MCxcbiAgICAgICAgY2lyY2xlczogMyxcbiAgICAgICAgZm46IChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSAtKDExMCAqIGluZGV4KSArICdtcyc7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IDYsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7MzIgLSAzMiAqIGluZGV4fSVgLFxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBsaW5lczoge1xuICAgICAgICBkdXI6IDEwMDAsXG4gICAgICAgIGxpbmVzOiA4LFxuICAgICAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7KDM2MCAvIHRvdGFsKSAqIGluZGV4ICsgKGluZGV4IDwgdG90YWwgLyAyID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHkxOiAxNCxcbiAgICAgICAgICAgICAgICB5MjogMjYsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgICdsaW5lcy1zbWFsbCc6IHtcbiAgICAgICAgZHVyOiAxMDAwLFxuICAgICAgICBsaW5lczogOCxcbiAgICAgICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkeygzNjAgLyB0b3RhbCkgKiBpbmRleCArIChpbmRleCA8IHRvdGFsIC8gMiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB5MTogMTIsXG4gICAgICAgICAgICAgICAgeTI6IDIwLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAnbGluZXMtc2hhcnAnOiB7XG4gICAgICAgIGR1cjogMTAwMCxcbiAgICAgICAgbGluZXM6IDEyLFxuICAgICAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7MzAgKiBpbmRleCArIChpbmRleCA8IDYgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeTE6IDE3LFxuICAgICAgICAgICAgICAgIHkyOiAyOSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgJ2xpbmVzLXNoYXJwLXNtYWxsJzoge1xuICAgICAgICBkdXI6IDEwMDAsXG4gICAgICAgIGxpbmVzOiAxMixcbiAgICAgICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkezMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHkxOiAxMixcbiAgICAgICAgICAgICAgICB5MjogMjAsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmNvbnN0IFNQSU5ORVJTID0gc3Bpbm5lcnM7XG5cbmV4cG9ydCB7IFNQSU5ORVJTIGFzIFMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBqIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1iYWJlYWJlYi5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC0zOTc4MjY0Mi5qcyc7XG5pbXBvcnQgJy4vZ2VzdHVyZS1jb250cm9sbGVyLTMxNGE1NGY2LmpzJztcblxuY29uc3QgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSA9IChlbCwgY2FuU3RhcnRIYW5kbGVyLCBvblN0YXJ0SGFuZGxlciwgb25Nb3ZlSGFuZGxlciwgb25FbmRIYW5kbGVyKSA9PiB7XG4gICAgY29uc3Qgd2luID0gZWwub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICBsZXQgcnRsID0gaXNSVEwoZWwpO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZSBpZiBhIGdlc3R1cmUgaXMgbmVhciB0aGUgZWRnZVxuICAgICAqIG9mIHRoZSBzY3JlZW4uIElmIHRydWUsIHRoZW4gdGhlIHN3aXBlXG4gICAgICogdG8gZ28gYmFjayBnZXN0dXJlIHNob3VsZCBwcm9jZWVkLlxuICAgICAqL1xuICAgIGNvbnN0IGlzQXRFZGdlID0gKGRldGFpbCkgPT4ge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSA1MDtcbiAgICAgICAgY29uc3QgeyBzdGFydFggfSA9IGRldGFpbDtcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0WCA+PSB3aW4uaW5uZXJXaWR0aCAtIHRocmVzaG9sZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhcnRYIDw9IHRocmVzaG9sZDtcbiAgICB9O1xuICAgIGNvbnN0IGdldERlbHRhWCA9IChkZXRhaWwpID0+IHtcbiAgICAgICAgcmV0dXJuIHJ0bCA/IC1kZXRhaWwuZGVsdGFYIDogZGV0YWlsLmRlbHRhWDtcbiAgICB9O1xuICAgIGNvbnN0IGdldFZlbG9jaXR5WCA9IChkZXRhaWwpID0+IHtcbiAgICAgICAgcmV0dXJuIHJ0bCA/IC1kZXRhaWwudmVsb2NpdHlYIDogZGV0YWlsLnZlbG9jaXR5WDtcbiAgICB9O1xuICAgIGNvbnN0IGNhblN0YXJ0ID0gKGRldGFpbCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVzZXIncyBsb2NhbGUgY2FuIGNoYW5nZSBtaWQtc2Vzc2lvbixcbiAgICAgICAgICogc28gd2UgbmVlZCB0byBjaGVjayB0ZXh0IGRpcmVjdGlvbiBhdFxuICAgICAgICAgKiB0aGUgYmVnaW5uaW5nIG9mIGV2ZXJ5IGdlc3R1cmUuXG4gICAgICAgICAqL1xuICAgICAgICBydGwgPSBpc1JUTChlbCk7XG4gICAgICAgIHJldHVybiBpc0F0RWRnZShkZXRhaWwpICYmIGNhblN0YXJ0SGFuZGxlcigpO1xuICAgIH07XG4gICAgY29uc3Qgb25Nb3ZlID0gKGRldGFpbCkgPT4ge1xuICAgICAgICAvLyBzZXQgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uJ3MgcHJvZ3Jlc3NcbiAgICAgICAgY29uc3QgZGVsdGEgPSBnZXREZWx0YVgoZGV0YWlsKTtcbiAgICAgICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aW4uaW5uZXJXaWR0aDtcbiAgICAgICAgb25Nb3ZlSGFuZGxlcihzdGVwVmFsdWUpO1xuICAgIH07XG4gICAgY29uc3Qgb25FbmQgPSAoZGV0YWlsKSA9PiB7XG4gICAgICAgIC8vIHRoZSBzd2lwZSBiYWNrIGdlc3R1cmUgaGFzIGVuZGVkXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2lkdGg7XG4gICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gZ2V0VmVsb2NpdHlYKGRldGFpbCk7XG4gICAgICAgIGNvbnN0IHogPSB3aWR0aCAvIDIuMDtcbiAgICAgICAgY29uc3Qgc2hvdWxkQ29tcGxldGUgPSB2ZWxvY2l0eSA+PSAwICYmICh2ZWxvY2l0eSA+IDAuMiB8fCBkZWx0YSA+IHopO1xuICAgICAgICBjb25zdCBtaXNzaW5nID0gc2hvdWxkQ29tcGxldGUgPyAxIC0gc3RlcFZhbHVlIDogc3RlcFZhbHVlO1xuICAgICAgICBjb25zdCBtaXNzaW5nRGlzdGFuY2UgPSBtaXNzaW5nICogd2lkdGg7XG4gICAgICAgIGxldCByZWFsRHVyID0gMDtcbiAgICAgICAgaWYgKG1pc3NpbmdEaXN0YW5jZSA+IDUpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1ciA9IG1pc3NpbmdEaXN0YW5jZSAvIE1hdGguYWJzKHZlbG9jaXR5KTtcbiAgICAgICAgICAgIHJlYWxEdXIgPSBNYXRoLm1pbihkdXIsIDU0MCk7XG4gICAgICAgIH1cbiAgICAgICAgb25FbmRIYW5kbGVyKHNob3VsZENvbXBsZXRlLCBzdGVwVmFsdWUgPD0gMCA/IDAuMDEgOiBjbGFtcCgwLCBzdGVwVmFsdWUsIDAuOTk5OSksIHJlYWxEdXIpO1xuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgICAgICBlbCxcbiAgICAgICAgZ2VzdHVyZU5hbWU6ICdnb2JhY2stc3dpcGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3dpcGUgdG8gZ28gYmFjayBzaG91bGQgaGF2ZSBwcmlvcml0eSBvdmVyIG90aGVyIGhvcml6b250YWwgc3dpcGVcbiAgICAgICAgICogZ2VzdHVyZXMuIFRoZXNlIGdlc3R1cmVzIGhhdmUgYSBwcmlvcml0eSBvZiAxMDAgd2hpY2ggaXMgd2h5IDEwMSB3YXMgY2hvc2VuIGhlcmUuXG4gICAgICAgICAqL1xuICAgICAgICBnZXN0dXJlUHJpb3JpdHk6IDEwMSxcbiAgICAgICAgdGhyZXNob2xkOiAxMCxcbiAgICAgICAgY2FuU3RhcnQsXG4gICAgICAgIG9uU3RhcnQ6IG9uU3RhcnRIYW5kbGVyLFxuICAgICAgICBvbk1vdmUsXG4gICAgICAgIG9uRW5kLFxuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IHdhdGNoRm9yT3B0aW9ucyA9IChjb250YWluZXJFbCwgdGFnTmFtZSwgb25DaGFuZ2UpID0+IHtcbiAgICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbXV0YXRpb24gPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0KSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKGdldFNlbGVjdGVkT3B0aW9uKG11dGF0aW9uTGlzdCwgdGFnTmFtZSkpO1xuICAgIH0pO1xuICAgIG11dGF0aW9uLm9ic2VydmUoY29udGFpbmVyRWwsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIH0pO1xuICAgIHJldHVybiBtdXRhdGlvbjtcbn07XG5jb25zdCBnZXRTZWxlY3RlZE9wdGlvbiA9IChtdXRhdGlvbkxpc3QsIHRhZ05hbWUpID0+IHtcbiAgICBsZXQgbmV3T3B0aW9uO1xuICAgIG11dGF0aW9uTGlzdC5mb3JFYWNoKChtdXQpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItZm9yLW9mXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0LmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld09wdGlvbiA9IGZpbmRDaGVja2VkT3B0aW9uKG11dC5hZGRlZE5vZGVzW2ldLCB0YWdOYW1lKSB8fCBuZXdPcHRpb247XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3T3B0aW9uO1xufTtcbi8qKlxuICogVGhlIFwidmFsdWVcIiBrZXkgaXMgb25seSBzZXQgb24gc29tZSBjb21wb25lbnRzIHN1Y2ggYXMgaW9uLXNlbGVjdC1vcHRpb24uXG4gKiBBcyBhIHJlc3VsdCwgd2UgY3JlYXRlIGEgZGVmYXVsdCB1bmlvbiB0eXBlIG9mIEhUTUxFbGVtZW50IGFuZCB0aGUgXCJ2YWx1ZVwiIGtleS5cbiAqIEhvd2V2ZXIsIGltcGxlbWVudGVycyBhcmUgcmVxdWlyZWQgdG8gcHJvdmlkZSB0aGUgYXBwcm9wcmlhdGUgY29tcG9uZW50IHR5cGVcbiAqIHN1Y2ggYXMgSFRNTElvblNlbGVjdE9wdGlvbkVsZW1lbnQuXG4gKi9cbmNvbnN0IGZpbmRDaGVja2VkT3B0aW9uID0gKG5vZGUsIHRhZ05hbWUpID0+IHtcbiAgICAvKipcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS9ub2RlVHlwZVxuICAgICAqIFRoZSBhYm92ZSBjaGVjayBlbnN1cmVzIFwibm9kZVwiIGlzIGFuIEVsZW1lbnQgKG5vZGVUeXBlIDEpLlxuICAgICAqL1xuICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEhUTUxFbGVtZW50IGluaGVyaXRzIGZyb20gRWxlbWVudCwgc28gd2UgY2FzdCBcImVsXCIgYXMgVC5cbiAgICBjb25zdCBlbCA9IG5vZGU7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGVsLnRhZ05hbWUgPT09IHRhZ05hbWUudG9VcHBlckNhc2UoKSA/IFtlbF0gOiBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwodGFnTmFtZSkpO1xuICAgIHJldHVybiBvcHRpb25zLmZpbmQoKG8pID0+IG8udmFsdWUgPT09IGVsLnZhbHVlKTtcbn07XG5cbmV4cG9ydCB7IHdhdGNoRm9yT3B0aW9ucyBhcyB3IH07XG4iXSwibmFtZXMiOlsidyIsIndyaXRlVGFzayIsImgiLCJoYXB0aWNTZWxlY3Rpb25FbmQiLCJhIiwiaGFwdGljU2VsZWN0aW9uU3RhcnQiLCJiIiwiaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCIsImNyZWF0ZUdlc3R1cmUiLCJjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlIiwiZWwiLCJpc0J1dHRvbiIsImN1cnJlbnRUb3VjaGVkQnV0dG9uIiwiaW5pdGlhbFRvdWNoZWRCdXR0b24iLCJhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQiLCJ4IiwieSIsImhhcHRpY0ZlZWRiYWNrRm4iLCJkb2N1bWVudCIsInRhcmdldCIsImVsZW1lbnRGcm9tUG9pbnQiLCJkaXNhYmxlZCIsImNsZWFyQWN0aXZlQnV0dG9uIiwic2V0QWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwiYnV0dG9uVG9Nb2RpZnkiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwYXRjaENsaWNrIiwicmVtb3ZlIiwiY2xpY2siLCJ1bmRlZmluZWQiLCJnZXN0dXJlTmFtZSIsInRocmVzaG9sZCIsIm9uU3RhcnQiLCJldiIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJvbk1vdmUiLCJvbkVuZCIsImMiLCJ3aW4iLCJnZXRDYXBhY2l0b3IiLCJDYXBhY2l0b3IiLCJnIiwiY29tcGFyZU9wdGlvbnMiLCJjdXJyZW50VmFsdWUiLCJjb21wYXJlVmFsdWUiLCJjb21wYXJlV2l0aCIsIkFycmF5IiwiaXNBcnJheSIsImluY2x1ZGVzIiwiaXNPcHRpb25TZWxlY3RlZCIsInNvbWUiLCJ2YWwiLCJpIiwiaXNSVEwiLCJob3N0RWwiLCJkaXIiLCJ0b0xvd2VyQ2FzZSIsIklPTl9GT0NVU0VEIiwiSU9OX0ZPQ1VTQUJMRSIsIkZPQ1VTX0tFWVMiLCJzdGFydEZvY3VzVmlzaWJsZSIsInJvb3RFbCIsImN1cnJlbnRGb2N1cyIsImtleWJvYXJkTW9kZSIsInJlZiIsInNoYWRvd1Jvb3QiLCJyb290IiwiYm9keSIsInNldEZvY3VzIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwicG9pbnRlckRvd24iLCJvbktleWRvd24iLCJrZXkiLCJvbkZvY3VzaW4iLCJjb21wb3NlZFBhdGgiLCJ0b0ZvY3VzIiwiZmlsdGVyIiwiY29udGFpbnMiLCJvbkZvY3Vzb3V0IiwiYWN0aXZlRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJbXBhY3RTdHlsZSIsIk5vdGlmaWNhdGlvblR5cGUiLCJIYXB0aWNFbmdpbmUiLCJnZXRFbmdpbmUiLCJjYXBhY2l0b3IiLCJpc1BsdWdpbkF2YWlsYWJsZSIsIlBsdWdpbnMiLCJIYXB0aWNzIiwiYXZhaWxhYmxlIiwiZW5naW5lIiwiZ2V0UGxhdGZvcm0iLCJuYXZpZ2F0b3IiLCJ2aWJyYXRlIiwiaW1wYWN0Iiwib3B0aW9ucyIsInN0eWxlIiwibm90aWZpY2F0aW9uIiwidHlwZSIsInNlbGVjdGlvbiIsIkxpZ2h0Iiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwic2VsZWN0aW9uRW5kIiwiaGFwdGljQXZhaWxhYmxlIiwiaGFwdGljU2VsZWN0aW9uIiwiaGFwdGljSW1wYWN0IiwiSSIsImQiLCJhcnJvd0JhY2tTaGFycCIsImFycm93RG93biIsImNhcmV0QmFja1NoYXJwIiwiY2FyZXREb3duU2hhcnAiLCJjYXJldFVwU2hhcnAiLCJjaGVja21hcmtPdXRsaW5lIiwiY2hldnJvbkJhY2siLCJjaGV2cm9uRG93biIsImNoZXZyb25FeHBhbmQiLCJjaGV2cm9uRm9yd2FyZCIsImNoZXZyb25Gb3J3YXJkT3V0bGluZSIsImNsb3NlIiwiY2xvc2VDaXJjbGUiLCJjbG9zZVNoYXJwIiwiZWxsaXBzZU91dGxpbmUiLCJlbGxpcHNpc0hvcml6b250YWwiLCJleWUiLCJleWVPZmYiLCJtZW51T3V0bGluZSIsIm1lbnVTaGFycCIsInJlbW92ZU91dGxpbmUiLCJyZW9yZGVyVGhyZWVPdXRsaW5lIiwicmVvcmRlclR3b1NoYXJwIiwic2VhcmNoT3V0bGluZSIsInNlYXJjaFNoYXJwIiwiZSIsImYiLCJqIiwiayIsImwiLCJtIiwibiIsIm8iLCJwIiwicSIsInIiLCJzIiwidCIsInUiLCJ2IiwiY29tcG9uZW50T25SZWFkeSIsInByaW50UmVxdWlyZWRFbGVtZW50RXJyb3IiLCJJT05fQ09OVEVOVF9UQUdfTkFNRSIsIklPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1IiLCJJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiIsIklPTl9DT05URU5UX1NFTEVDVE9SIiwiaXNJb25Db250ZW50IiwidGFnTmFtZSIsImdldFNjcm9sbEVsZW1lbnQiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmaW5kSW9uQ29udGVudCIsImN1c3RvbUNvbnRlbnRIb3N0IiwicXVlcnlTZWxlY3RvciIsImZpbmRDbG9zZXN0SW9uQ29udGVudCIsImNsb3Nlc3QiLCJzY3JvbGxUb1RvcCIsImR1cmF0aW9uTXMiLCJjb250ZW50Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzY3JvbGxCeVBvaW50Iiwic2Nyb2xsQnkiLCJwcmludElvbkNvbnRlbnRFcnJvck1zZyIsImRpc2FibGVDb250ZW50U2Nyb2xsWSIsImNvbnRlbnRFbCIsImlvbkNvbnRlbnQiLCJpbml0aWFsU2Nyb2xsWSIsInNjcm9sbFkiLCJzZXRQcm9wZXJ0eSIsInJlc2V0Q29udGVudFNjcm9sbFkiLCJyZW1vdmVQcm9wZXJ0eSIsIksiLCJLZXlib2FyZCIsIktFWUJPQVJEX0RJRF9PUEVOIiwiS0VZQk9BUkRfRElEX0NMT1NFIiwiS0VZQk9BUkRfVEhSRVNIT0xEIiwicHJldmlvdXNWaXN1YWxWaWV3cG9ydCIsImN1cnJlbnRWaXN1YWxWaWV3cG9ydCIsImtleWJvYXJkT3BlbiIsInJlc2V0S2V5Ym9hcmRBc3Npc3QiLCJzdGFydEtleWJvYXJkQXNzaXN0IiwibmF0aXZlRW5naW5lIiwic3RhcnROYXRpdmVMaXN0ZW5lcnMiLCJ2aXN1YWxWaWV3cG9ydCIsImNvcHlWaXN1YWxWaWV3cG9ydCIsIm9ucmVzaXplIiwidHJhY2tWaWV3cG9ydENoYW5nZXMiLCJrZXlib2FyZERpZE9wZW4iLCJrZXlib2FyZERpZFJlc2l6ZSIsInNldEtleWJvYXJkT3BlbiIsImtleWJvYXJkRGlkQ2xvc2UiLCJzZXRLZXlib2FyZENsb3NlIiwiZmlyZUtleWJvYXJkT3BlbkV2ZW50IiwiZmlyZUtleWJvYXJkQ2xvc2VFdmVudCIsInNjYWxlZEhlaWdodERpZmZlcmVuY2UiLCJoZWlnaHQiLCJzY2FsZSIsIndpZHRoIiwiaW5uZXJIZWlnaHQiLCJuYXRpdmVFdiIsImtleWJvYXJkSGVpZ2h0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiTWF0aCIsInJvdW5kIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsInBhZ2VUb3AiLCJwYWdlTGVmdCIsIkV4Y2VwdGlvbkNvZGUiLCJLZXlib2FyZFJlc2l6ZSIsImdldFJlc2l6ZU1vZGUiLCJjYXRjaCIsImNvZGUiLCJVbmltcGxlbWVudGVkIiwiZG9jIiwiZ2V0UmVzaXplQ29udGFpbmVyIiwicmVzaXplTW9kZSIsIk5vbmUiLCJpb25BcHAiLCJnZXRSZXNpemVDb250YWluZXJIZWlnaHQiLCJjb250YWluZXJFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyIiwia2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayIsImtleWJvYXJkV2lsbFNob3dIYW5kbGVyIiwia2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIiLCJrZXlib2FyZFZpc2libGUiLCJpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0IiwiaW5pdCIsIl9yZWYyIiwicmVzaXplT3B0aW9ucyIsIm1vZGUiLCJmaXJlQ2hhbmdlQ2FsbGJhY2siLCJzdGF0ZSIsImNyZWF0ZVJlc2l6ZVByb21pc2VJZk5lZWRlZCIsImNhbGxiYWNrIiwicm8iLCJkaXNjb25uZWN0IiwiUmVzaXplT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiaXNLZXlib2FyZFZpc2libGUiLCJjcmVhdGVMb2NrQ29udHJvbGxlciIsIndhaXRQcm9taXNlIiwibG9jayIsInNwaW5uZXJzIiwiYnViYmxlcyIsImR1ciIsImNpcmNsZXMiLCJmbiIsImluZGV4IiwidG90YWwiLCJhbmltYXRpb25EZWxheSIsImFuZ2xlIiwiUEkiLCJzaW4iLCJjb3MiLCJzdGVwIiwiY2lyY3VsYXIiLCJlbG1EdXJhdGlvbiIsImN4IiwiY3kiLCJmaWxsIiwidmlld0JveCIsInRyYW5zZm9ybSIsImNyZXNjZW50IiwiZG90cyIsIl8iLCJsaW5lcyIsInkxIiwieTIiLCJTUElOTkVSUyIsIlMiLCJjbGFtcCIsImNyZWF0ZVN3aXBlQmFja0dlc3R1cmUiLCJjYW5TdGFydEhhbmRsZXIiLCJvblN0YXJ0SGFuZGxlciIsIm9uTW92ZUhhbmRsZXIiLCJvbkVuZEhhbmRsZXIiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJydGwiLCJpc0F0RWRnZSIsInN0YXJ0WCIsImlubmVyV2lkdGgiLCJnZXREZWx0YVgiLCJkZWx0YVgiLCJnZXRWZWxvY2l0eVgiLCJ2ZWxvY2l0eVgiLCJjYW5TdGFydCIsImRlbHRhIiwic3RlcFZhbHVlIiwidmVsb2NpdHkiLCJ6Iiwic2hvdWxkQ29tcGxldGUiLCJtaXNzaW5nIiwibWlzc2luZ0Rpc3RhbmNlIiwicmVhbER1ciIsImFicyIsIm1pbiIsImdlc3R1cmVQcmlvcml0eSIsIndhdGNoRm9yT3B0aW9ucyIsImNvbnRhaW5lckVsIiwib25DaGFuZ2UiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb24iLCJtdXRhdGlvbkxpc3QiLCJnZXRTZWxlY3RlZE9wdGlvbiIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJuZXdPcHRpb24iLCJtdXQiLCJhZGRlZE5vZGVzIiwibGVuZ3RoIiwiZmluZENoZWNrZWRPcHRpb24iLCJub2RlIiwibm9kZVR5cGUiLCJ0b1VwcGVyQ2FzZSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmluZCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0XX0=