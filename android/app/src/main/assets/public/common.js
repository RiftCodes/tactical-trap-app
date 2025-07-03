"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 5779:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-Bxcnevju.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_B_U9CtaY_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-B_U9CtaY.js */ 4917);
/* harmony import */ var _haptic_DzAMWJuk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-DzAMWJuk.js */ 8235);
/* harmony import */ var _index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-CfgBF1SE.js */ 5860);
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
    (0,_index_B_U9CtaY_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_B_U9CtaY_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.remove('ion-activated'));
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
  return (0,_index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_DzAMWJuk_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_DzAMWJuk_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_DzAMWJuk_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};


/***/ }),

/***/ 5051:
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/capacitor-CFERIeaU.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getCapacitor)
/* harmony export */ });
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 575);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const getCapacitor = () => {
  if (_index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined) {
    return _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor;
  }
  return undefined;
};


/***/ }),

/***/ 9929:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/compare-with-utils-sObYyvOy.js ***!
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

/***/ 1008:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-C53feagD.js ***!
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

/***/ 2853:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-BmVRXR1y.js ***!
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

/***/ 8235:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-DzAMWJuk.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ImpactStyle),
/* harmony export */   a: () => (/* binding */ hapticSelectionChanged),
/* harmony export */   b: () => (/* binding */ hapticSelectionStart),
/* harmony export */   c: () => (/* binding */ hapticSelection),
/* harmony export */   d: () => (/* binding */ hapticImpact),
/* harmony export */   h: () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/* harmony import */ var _capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitor-CFERIeaU.js */ 5051);
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
    const capacitor = (0,_capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__.g)();
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
    const capacitor = (0,_capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__.g)();
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

/***/ 4361:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-BLV6ykCk.js ***!
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
/* harmony export */   h: () => (/* binding */ arrowDown),
/* harmony export */   i: () => (/* binding */ caretBackSharp),
/* harmony export */   j: () => (/* binding */ reorderThreeOutline),
/* harmony export */   k: () => (/* binding */ reorderTwoSharp),
/* harmony export */   l: () => (/* binding */ chevronDown),
/* harmony export */   m: () => (/* binding */ chevronForwardOutline),
/* harmony export */   n: () => (/* binding */ ellipsisHorizontal),
/* harmony export */   o: () => (/* binding */ caretUpSharp),
/* harmony export */   p: () => (/* binding */ chevronForward),
/* harmony export */   q: () => (/* binding */ caretDownSharp),
/* harmony export */   r: () => (/* binding */ removeOutline),
/* harmony export */   s: () => (/* binding */ searchOutline),
/* harmony export */   t: () => (/* binding */ close),
/* harmony export */   u: () => (/* binding */ menuOutline),
/* harmony export */   v: () => (/* binding */ menuSharp),
/* harmony export */   w: () => (/* binding */ chevronExpand),
/* harmony export */   x: () => (/* binding */ eyeOff),
/* harmony export */   y: () => (/* binding */ eye)
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

/***/ 4898:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-BlJTBdxG.js ***!
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
/* harmony import */ var C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _helpers_1O4D2b7y_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-1O4D2b7y.js */ 450);
/* harmony import */ var _index_B_U9CtaY_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-B_U9CtaY.js */ 4917);

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
  var _ref = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_1O4D2b7y_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
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
    behavior: 'smooth'
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
  return (0,_index_B_U9CtaY_js__WEBPACK_IMPORTED_MODULE_2__.t)(el, ION_CONTENT_ELEMENT_SELECTOR);
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

/***/ 2954:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-CUw4ekVy.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ Keyboard),
/* harmony export */   a: () => (/* binding */ KeyboardResize)
/* harmony export */ });
/* harmony import */ var _capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitor-CFERIeaU.js */ 5051);
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
    const capacitor = (0,_capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__.g)();
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

/***/ 7387:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-BaaVITYt.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 575);
/* harmony import */ var _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard-CUw4ekVy.js */ 2954);

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
  if (_index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d === undefined || resizeMode === _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_2__.a.None || resizeMode === undefined) {
    return null;
  }
  /**
   * The three remaining resize modes: Native, Ionic, and Body
   * all cause `ion-app` to resize, so we can listen for changes
   * on that. In the event `ion-app` is not available then
   * we can fall back to `body`.
   */
  const ionApp = _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d.querySelector('ion-app');
  return ionApp !== null && ionApp !== void 0 ? ionApp : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d.body;
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
  var _ref = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (keyboardChangeCallback) {
    let keyboardWillShowHandler;
    let keyboardWillHideHandler;
    let keyboardVisible;
    /**
     * This lets us determine if the webview content
     * has resized as a result of the keyboard.
     */
    let initialResizeContainerHeight;
    const init = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const resizeOptions = yield _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_2__.K.getResizeMode();
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
        _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
        _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
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
      _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
      _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
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

/***/ 4753:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-ywgs5efA.js ***!
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
/* harmony import */ var _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-CUw4ekVy.js */ 2954);
/* harmony import */ var _capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capacitor-CFERIeaU.js */ 5051);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 575);
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
  const nativeEngine = _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_0__.K.getEngine();
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

/***/ 2377:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/lock-controller-B-hirT0v.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createLockController)
/* harmony export */ });
/* harmony import */ var C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

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
    var _ref = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

/***/ 787:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-D4RIp70E.js ***!
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

/***/ 9019:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-VdaUzLWy.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSwipeBackGesture: () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_1O4D2b7y_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1O4D2b7y.js */ 450);
/* harmony import */ var _dir_C53feagD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-C53feagD.js */ 1008);
/* harmony import */ var _index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-CfgBF1SE.js */ 5860);
/* harmony import */ var _index_B_U9CtaY_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-B_U9CtaY.js */ 4917);
/* harmony import */ var _gesture_controller_BTEOs1at_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gesture-controller-BTEOs1at.js */ 566);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = (0,_dir_C53feagD_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
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
    rtl = (0,_dir_C53feagD_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
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
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_1O4D2b7y_js__WEBPACK_IMPORTED_MODULE_0__.e)(0, stepValue, 0.9999), realDur);
  };
  return (0,_index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
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

/***/ 4468:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-Dtdm8lKC.js ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDcUQ7QUFDa0U7QUFDbkU7QUFFcEQsTUFBTVMseUJBQXlCLEdBQUdBLENBQUNDLEVBQUUsRUFBRUMsUUFBUSxLQUFLO0VBQ2hELElBQUlDLG9CQUFvQjtFQUN4QixJQUFJQyxvQkFBb0I7RUFDeEIsTUFBTUMscUJBQXFCLEdBQUdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxnQkFBZ0IsS0FBSztJQUN0RCxJQUFJLE9BQU9DLFFBQVEsS0FBSyxXQUFXLEVBQUU7TUFDakM7SUFDSjtJQUNBLE1BQU1DLE1BQU0sR0FBR0QsUUFBUSxDQUFDRSxnQkFBZ0IsQ0FBQ0wsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDOUMsSUFBSSxDQUFDRyxNQUFNLElBQUksQ0FBQ1IsUUFBUSxDQUFDUSxNQUFNLENBQUMsSUFBSUEsTUFBTSxDQUFDRSxRQUFRLEVBQUU7TUFDakRDLGlCQUFpQixDQUFDLENBQUM7TUFDbkI7SUFDSjtJQUNBLElBQUlILE1BQU0sS0FBS1Asb0JBQW9CLEVBQUU7TUFDakNVLGlCQUFpQixDQUFDLENBQUM7TUFDbkJDLGVBQWUsQ0FBQ0osTUFBTSxFQUFFRixnQkFBZ0IsQ0FBQztJQUM3QztFQUNKLENBQUM7RUFDRCxNQUFNTSxlQUFlLEdBQUdBLENBQUNDLE1BQU0sRUFBRVAsZ0JBQWdCLEtBQUs7SUFDbERMLG9CQUFvQixHQUFHWSxNQUFNO0lBQzdCLElBQUksQ0FBQ1gsb0JBQW9CLEVBQUU7TUFDdkJBLG9CQUFvQixHQUFHRCxvQkFBb0I7SUFDL0M7SUFDQSxNQUFNYSxjQUFjLEdBQUdiLG9CQUFvQjtJQUMzQ1gscURBQVMsQ0FBQyxNQUFNd0IsY0FBYyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5RFYsZ0JBQWdCLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBQ0QsTUFBTUssaUJBQWlCLEdBQUdBLENBQUNNLGFBQWEsR0FBRyxLQUFLLEtBQUs7SUFDakQsSUFBSSxDQUFDaEIsb0JBQW9CLEVBQUU7TUFDdkI7SUFDSjtJQUNBLE1BQU1hLGNBQWMsR0FBR2Isb0JBQW9CO0lBQzNDWCxxREFBUyxDQUFDLE1BQU13QixjQUFjLENBQUNDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJRCxhQUFhLElBQUlmLG9CQUFvQixLQUFLRCxvQkFBb0IsRUFBRTtNQUNoRUEsb0JBQW9CLENBQUNrQixLQUFLLENBQUMsQ0FBQztJQUNoQztJQUNBbEIsb0JBQW9CLEdBQUdtQixTQUFTO0VBQ3BDLENBQUM7RUFDRCxPQUFPdkIsaUVBQWEsQ0FBQztJQUNqQkUsRUFBRTtJQUNGc0IsV0FBVyxFQUFFLGtCQUFrQjtJQUMvQkMsU0FBUyxFQUFFLENBQUM7SUFDWkMsT0FBTyxFQUFHQyxFQUFFLElBQUtyQixxQkFBcUIsQ0FBQ3FCLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFRCxFQUFFLENBQUNFLFFBQVEsRUFBRTlCLGtEQUFvQixDQUFDO0lBQ3RGK0IsTUFBTSxFQUFHSCxFQUFFLElBQUtyQixxQkFBcUIsQ0FBQ3FCLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFRCxFQUFFLENBQUNFLFFBQVEsRUFBRWhDLGtEQUFzQixDQUFDO0lBQ3ZGa0MsS0FBSyxFQUFFQSxDQUFBLEtBQU07TUFDVGpCLGlCQUFpQixDQUFDLElBQUksQ0FBQztNQUN2Qm5CLHNEQUFrQixDQUFDLENBQUM7TUFDcEJVLG9CQUFvQixHQUFHa0IsU0FBUztJQUNwQztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUQ7QUFDQTtBQUNBO0FBQytDO0FBRS9DLE1BQU1XLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0VBQ3ZCLElBQUlELGlEQUFHLEtBQUtWLFNBQVMsRUFBRTtJQUNuQixPQUFPVSxpREFBRyxDQUFDRSxTQUFTO0VBQ3hCO0VBQ0EsT0FBT1osU0FBUztBQUNwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNYyxjQUFjLEdBQUdBLENBQUNDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEtBQUs7RUFDaEUsSUFBSSxPQUFPQSxXQUFXLEtBQUssVUFBVSxFQUFFO0lBQ25DLE9BQU9BLFdBQVcsQ0FBQ0YsWUFBWSxFQUFFQyxZQUFZLENBQUM7RUFDbEQsQ0FBQyxNQUNJLElBQUksT0FBT0MsV0FBVyxLQUFLLFFBQVEsRUFBRTtJQUN0QyxPQUFPRixZQUFZLENBQUNFLFdBQVcsQ0FBQyxLQUFLRCxZQUFZLENBQUNDLFdBQVcsQ0FBQztFQUNsRSxDQUFDLE1BQ0k7SUFDRCxPQUFPQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsWUFBWSxDQUFDLEdBQUdBLFlBQVksQ0FBQ0ksUUFBUSxDQUFDTCxZQUFZLENBQUMsR0FBR0EsWUFBWSxLQUFLQyxZQUFZO0VBQzVHO0FBQ0osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUssZ0JBQWdCLEdBQUdBLENBQUNOLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEtBQUs7RUFDbEUsSUFBSUYsWUFBWSxLQUFLZixTQUFTLEVBQUU7SUFDNUIsT0FBTyxLQUFLO0VBQ2hCO0VBQ0EsSUFBSWtCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSixZQUFZLENBQUMsRUFBRTtJQUM3QixPQUFPQSxZQUFZLENBQUNPLElBQUksQ0FBRUMsR0FBRyxJQUFLVCxjQUFjLENBQUNTLEdBQUcsRUFBRVAsWUFBWSxFQUFFQyxXQUFXLENBQUMsQ0FBQztFQUNyRixDQUFDLE1BQ0k7SUFDRCxPQUFPSCxjQUFjLENBQUNDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxXQUFXLENBQUM7RUFDbEU7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1RLEtBQUssR0FBSUMsTUFBTSxJQUFLO0VBQ3RCLElBQUlBLE1BQU0sRUFBRTtJQUNSLElBQUlBLE1BQU0sQ0FBQ0MsR0FBRyxLQUFLLEVBQUUsRUFBRTtNQUNuQixPQUFPRCxNQUFNLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsS0FBSyxLQUFLO0lBQzdDO0VBQ0o7RUFDQSxPQUFPLENBQUN6QyxRQUFRLEtBQUssSUFBSSxJQUFJQSxRQUFRLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLFFBQVEsQ0FBQ3dDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsTUFBTSxLQUFLO0FBQ3JHLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFhO0FBQ2pDLE1BQU1DLGFBQWEsR0FBRyxlQUFlO0FBQ3JDLE1BQU1DLFVBQVUsR0FBRyxDQUNmLEtBQUssRUFDTCxXQUFXLEVBQ1gsT0FBTyxFQUNQLFFBQVEsRUFDUixHQUFHLEVBQ0gsT0FBTyxFQUNQLE9BQU8sRUFDUCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBQ0QsTUFBTUMsaUJBQWlCLEdBQUlDLE1BQU0sSUFBSztFQUNsQyxJQUFJQyxZQUFZLEdBQUcsRUFBRTtFQUNyQixJQUFJQyxZQUFZLEdBQUcsSUFBSTtFQUN2QixNQUFNQyxHQUFHLEdBQUdILE1BQU0sR0FBR0EsTUFBTSxDQUFDSSxVQUFVLEdBQUdsRCxRQUFRO0VBQ2pELE1BQU1tRCxJQUFJLEdBQUdMLE1BQU0sR0FBR0EsTUFBTSxHQUFHOUMsUUFBUSxDQUFDb0QsSUFBSTtFQUM1QyxNQUFNQyxRQUFRLEdBQUlDLFFBQVEsSUFBSztJQUMzQlAsWUFBWSxDQUFDUSxPQUFPLENBQUUvRCxFQUFFLElBQUtBLEVBQUUsQ0FBQ2dCLFNBQVMsQ0FBQ0csTUFBTSxDQUFDK0IsV0FBVyxDQUFDLENBQUM7SUFDOURZLFFBQVEsQ0FBQ0MsT0FBTyxDQUFFL0QsRUFBRSxJQUFLQSxFQUFFLENBQUNnQixTQUFTLENBQUNDLEdBQUcsQ0FBQ2lDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZESyxZQUFZLEdBQUdPLFFBQVE7RUFDM0IsQ0FBQztFQUNELE1BQU1FLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3RCUixZQUFZLEdBQUcsS0FBSztJQUNwQkssUUFBUSxDQUFDLEVBQUUsQ0FBQztFQUNoQixDQUFDO0VBQ0QsTUFBTUksU0FBUyxHQUFJeEMsRUFBRSxJQUFLO0lBQ3RCK0IsWUFBWSxHQUFHSixVQUFVLENBQUNYLFFBQVEsQ0FBQ2hCLEVBQUUsQ0FBQ3lDLEdBQUcsQ0FBQztJQUMxQyxJQUFJLENBQUNWLFlBQVksRUFBRTtNQUNmSyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ2hCO0VBQ0osQ0FBQztFQUNELE1BQU1NLFNBQVMsR0FBSTFDLEVBQUUsSUFBSztJQUN0QixJQUFJK0IsWUFBWSxJQUFJL0IsRUFBRSxDQUFDMkMsWUFBWSxLQUFLL0MsU0FBUyxFQUFFO01BQy9DLE1BQU1nRCxPQUFPLEdBQUc1QyxFQUFFLENBQUMyQyxZQUFZLENBQUMsQ0FBQyxDQUFDRSxNQUFNLENBQUV0RSxFQUFFLElBQUs7UUFDN0M7UUFDQSxJQUFJQSxFQUFFLENBQUNnQixTQUFTLEVBQUU7VUFDZCxPQUFPaEIsRUFBRSxDQUFDZ0IsU0FBUyxDQUFDdUQsUUFBUSxDQUFDcEIsYUFBYSxDQUFDO1FBQy9DO1FBQ0EsT0FBTyxLQUFLO01BQ2hCLENBQUMsQ0FBQztNQUNGVSxRQUFRLENBQUNRLE9BQU8sQ0FBQztJQUNyQjtFQUNKLENBQUM7RUFDRCxNQUFNRyxVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUNyQixJQUFJZixHQUFHLENBQUNnQixhQUFhLEtBQUtkLElBQUksRUFBRTtNQUM1QkUsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUNoQjtFQUNKLENBQUM7RUFDREosR0FBRyxDQUFDaUIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFVCxTQUFTLENBQUM7RUFDMUNSLEdBQUcsQ0FBQ2lCLGdCQUFnQixDQUFDLFNBQVMsRUFBRVAsU0FBUyxDQUFDO0VBQzFDVixHQUFHLENBQUNpQixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUVGLFVBQVUsQ0FBQztFQUM1Q2YsR0FBRyxDQUFDaUIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFVixXQUFXLEVBQUU7SUFBRVcsT0FBTyxFQUFFO0VBQUssQ0FBQyxDQUFDO0VBQ2xFbEIsR0FBRyxDQUFDaUIsZ0JBQWdCLENBQUMsV0FBVyxFQUFFVixXQUFXLENBQUM7RUFDOUMsTUFBTVksT0FBTyxHQUFHQSxDQUFBLEtBQU07SUFDbEJuQixHQUFHLENBQUNvQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUVaLFNBQVMsQ0FBQztJQUM3Q1IsR0FBRyxDQUFDb0IsbUJBQW1CLENBQUMsU0FBUyxFQUFFVixTQUFTLENBQUM7SUFDN0NWLEdBQUcsQ0FBQ29CLG1CQUFtQixDQUFDLFVBQVUsRUFBRUwsVUFBVSxDQUFDO0lBQy9DZixHQUFHLENBQUNvQixtQkFBbUIsQ0FBQyxZQUFZLEVBQUViLFdBQVcsQ0FBQztJQUNsRFAsR0FBRyxDQUFDb0IsbUJBQW1CLENBQUMsV0FBVyxFQUFFYixXQUFXLENBQUM7RUFDckQsQ0FBQztFQUNELE9BQU87SUFDSFksT0FBTztJQUNQZjtFQUNKLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUQ7QUFDQTtBQUNBO0FBQzREO0FBRTVELElBQUlpQixXQUFXO0FBQ2YsQ0FBQyxVQUFVQSxXQUFXLEVBQUU7RUFDcEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTztFQUM5QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lBLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRO0VBQ2hDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUEsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU87QUFDbEMsQ0FBQyxFQUFFQSxXQUFXLEtBQUtBLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLElBQUlDLGdCQUFnQjtBQUNwQixDQUFDLFVBQVVBLGdCQUFnQixFQUFFO0VBQ3pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUEsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUztFQUN2QztBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lBLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVM7RUFDdkM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQ3ZDLENBQUMsRUFBRUEsZ0JBQWdCLEtBQUtBLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0MsTUFBTUMsWUFBWSxHQUFHO0VBQ2pCQyxTQUFTQSxDQUFBLEVBQUc7SUFDUixNQUFNQyxTQUFTLEdBQUdsRCx5REFBWSxDQUFDLENBQUM7SUFDaEMsSUFBSWtELFNBQVMsS0FBSyxJQUFJLElBQUlBLFNBQVMsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsU0FBUyxDQUFDQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUM5RjtNQUNBLE9BQU9ELFNBQVMsQ0FBQ0UsT0FBTyxDQUFDQyxPQUFPO0lBQ3BDO0lBQ0EsT0FBT2hFLFNBQVM7RUFDcEIsQ0FBQztFQUNEaUUsU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsTUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ04sU0FBUyxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDTSxNQUFNLEVBQUU7TUFDVCxPQUFPLEtBQUs7SUFDaEI7SUFDQSxNQUFNTCxTQUFTLEdBQUdsRCx5REFBWSxDQUFDLENBQUM7SUFDaEM7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDa0QsU0FBUyxLQUFLLElBQUksSUFBSUEsU0FBUyxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxTQUFTLENBQUNNLFdBQVcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxFQUFFO01BQzNGO01BQ0EsT0FBTyxPQUFPQyxTQUFTLEtBQUssV0FBVyxJQUFJQSxTQUFTLENBQUNDLE9BQU8sS0FBS3JFLFNBQVM7SUFDOUU7SUFDQSxPQUFPLElBQUk7RUFDZixDQUFDO0VBQ0RzRSxNQUFNQSxDQUFDQyxPQUFPLEVBQUU7SUFDWixNQUFNTCxNQUFNLEdBQUcsSUFBSSxDQUFDTixTQUFTLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUNNLE1BQU0sRUFBRTtNQUNUO0lBQ0o7SUFDQUEsTUFBTSxDQUFDSSxNQUFNLENBQUM7TUFBRUUsS0FBSyxFQUFFRCxPQUFPLENBQUNDO0lBQU0sQ0FBQyxDQUFDO0VBQzNDLENBQUM7RUFDREMsWUFBWUEsQ0FBQ0YsT0FBTyxFQUFFO0lBQ2xCLE1BQU1MLE1BQU0sR0FBRyxJQUFJLENBQUNOLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQ00sTUFBTSxFQUFFO01BQ1Q7SUFDSjtJQUNBQSxNQUFNLENBQUNPLFlBQVksQ0FBQztNQUFFQyxJQUFJLEVBQUVILE9BQU8sQ0FBQ0c7SUFBSyxDQUFDLENBQUM7RUFDL0MsQ0FBQztFQUNEQyxTQUFTQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUNMLE1BQU0sQ0FBQztNQUFFRSxLQUFLLEVBQUVmLFdBQVcsQ0FBQ21CO0lBQU0sQ0FBQyxDQUFDO0VBQzdDLENBQUM7RUFDREMsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsTUFBTVgsTUFBTSxHQUFHLElBQUksQ0FBQ04sU0FBUyxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDTSxNQUFNLEVBQUU7TUFDVDtJQUNKO0lBQ0FBLE1BQU0sQ0FBQ1csY0FBYyxDQUFDLENBQUM7RUFDM0IsQ0FBQztFQUNEQyxnQkFBZ0JBLENBQUEsRUFBRztJQUNmLE1BQU1aLE1BQU0sR0FBRyxJQUFJLENBQUNOLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQ00sTUFBTSxFQUFFO01BQ1Q7SUFDSjtJQUNBQSxNQUFNLENBQUNZLGdCQUFnQixDQUFDLENBQUM7RUFDN0IsQ0FBQztFQUNEQyxZQUFZQSxDQUFBLEVBQUc7SUFDWCxNQUFNYixNQUFNLEdBQUcsSUFBSSxDQUFDTixTQUFTLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUNNLE1BQU0sRUFBRTtNQUNUO0lBQ0o7SUFDQUEsTUFBTSxDQUFDYSxZQUFZLENBQUMsQ0FBQztFQUN6QjtBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0VBQzFCLE9BQU9yQixZQUFZLENBQUNNLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1nQixlQUFlLEdBQUdBLENBQUEsS0FBTTtFQUMxQkQsZUFBZSxDQUFDLENBQUMsSUFBSXJCLFlBQVksQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFNbkcsb0JBQW9CLEdBQUdBLENBQUEsS0FBTTtFQUMvQndHLGVBQWUsQ0FBQyxDQUFDLElBQUlyQixZQUFZLENBQUNrQixjQUFjLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTXZHLHNCQUFzQixHQUFHQSxDQUFBLEtBQU07RUFDakMwRyxlQUFlLENBQUMsQ0FBQyxJQUFJckIsWUFBWSxDQUFDbUIsZ0JBQWdCLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNMUcsa0JBQWtCLEdBQUdBLENBQUEsS0FBTTtFQUM3QjRHLGVBQWUsQ0FBQyxDQUFDLElBQUlyQixZQUFZLENBQUNvQixZQUFZLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNRyxZQUFZLEdBQUlYLE9BQU8sSUFBSztFQUM5QlMsZUFBZSxDQUFDLENBQUMsSUFBSXJCLFlBQVksQ0FBQ1csTUFBTSxDQUFDQyxPQUFPLENBQUM7QUFDckQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1jLGNBQWMsR0FBRyx5UEFBeVA7QUFDaFIsTUFBTUMsU0FBUyxHQUFHLHlQQUF5UDtBQUMzUSxNQUFNQyxjQUFjLEdBQUcscUpBQXFKO0FBQzVLLE1BQU1DLGNBQWMsR0FBRyxxSkFBcUo7QUFDNUssTUFBTUMsWUFBWSxHQUFHLHNKQUFzSjtBQUMzSyxNQUFNQyxnQkFBZ0IsR0FBRywrT0FBK087QUFDeFEsTUFBTUMsV0FBVyxHQUFHLDZPQUE2TztBQUNqUSxNQUFNQyxXQUFXLEdBQUcsNk9BQTZPO0FBQ2pRLE1BQU1DLGFBQWEsR0FBRyxxUUFBcVE7QUFDM1IsTUFBTUMsY0FBYyxHQUFHLDZPQUE2TztBQUNwUSxNQUFNQyxxQkFBcUIsR0FBRyw2T0FBNk87QUFDM1EsTUFBTUMsS0FBSyxHQUFHLG9QQUFvUDtBQUNsUSxNQUFNQyxXQUFXLEdBQUcsNFlBQTRZO0FBQ2hhLE1BQU1DLFVBQVUsR0FBRywwUUFBMFE7QUFDN1IsTUFBTUMsY0FBYyxHQUFHLCtPQUErTztBQUN0USxNQUFNQyxrQkFBa0IsR0FBRyxtTkFBbU47QUFDOU8sTUFBTUMsR0FBRyxHQUFHLDZoQkFBNmhCO0FBQ3ppQixNQUFNQyxNQUFNLEdBQUcsNDlCQUE0OUI7QUFDMytCLE1BQU1DLFdBQVcsR0FBRyx3UEFBd1A7QUFDNVEsTUFBTUMsU0FBUyxHQUFHLDhMQUE4TDtBQUNoTixNQUFNQyxhQUFhLEdBQUcsb09BQW9PO0FBQzFQLE1BQU1DLG1CQUFtQixHQUFHLHlQQUF5UDtBQUNyUixNQUFNQyxlQUFlLEdBQUcsOE9BQThPO0FBQ3RRLE1BQU1DLGFBQWEsR0FBRyxvWUFBb1k7QUFDMVosTUFBTUMsV0FBVyxHQUFHLG1YQUFtWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QnZZO0FBQ0E7QUFDQTtBQUM4RDtBQUNPO0FBRXJFLE1BQU1rQixvQkFBb0IsR0FBRyxhQUFhO0FBQzFDLE1BQU1DLDRCQUE0QixHQUFHLGFBQWE7QUFDbEQsTUFBTUMsMEJBQTBCLEdBQUcsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsR0FBR0YsNEJBQTRCLEtBQUtDLDBCQUEwQixFQUFFO0FBQzdGLE1BQU1FLFlBQVksR0FBSXhKLEVBQUUsSUFBS0EsRUFBRSxDQUFDeUosT0FBTyxLQUFLTCxvQkFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNTSxnQkFBZ0I7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLGdLQUFBLENBQUcsV0FBTzVKLEVBQUUsRUFBSztJQUNuQyxJQUFJd0osWUFBWSxDQUFDeEosRUFBRSxDQUFDLEVBQUU7TUFDbEIsTUFBTSxJQUFJNkosT0FBTyxDQUFFQyxPQUFPLElBQUtaLHVEQUFnQixDQUFDbEosRUFBRSxFQUFFOEosT0FBTyxDQUFDLENBQUM7TUFDN0QsT0FBTzlKLEVBQUUsQ0FBQzBKLGdCQUFnQixDQUFDLENBQUM7SUFDaEM7SUFDQSxPQUFPMUosRUFBRTtFQUNiLENBQUM7RUFBQSxnQkFOSzBKLGdCQUFnQkEsQ0FBQUssRUFBQTtJQUFBLE9BQUFKLElBQUEsQ0FBQUssS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQU1yQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsY0FBYyxHQUFJbEssRUFBRSxJQUFLO0VBQzNCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxNQUFNbUssaUJBQWlCLEdBQUduSyxFQUFFLENBQUNvSyxhQUFhLENBQUNkLDBCQUEwQixDQUFDO0VBQ3RFLElBQUlhLGlCQUFpQixFQUFFO0lBQ25CLE9BQU9BLGlCQUFpQjtFQUM1QjtFQUNBLE9BQU9uSyxFQUFFLENBQUNvSyxhQUFhLENBQUNiLG9CQUFvQixDQUFDO0FBQ2pELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFNYyxxQkFBcUIsR0FBSXJLLEVBQUUsSUFBSztFQUNsQyxPQUFPQSxFQUFFLENBQUNzSyxPQUFPLENBQUNmLG9CQUFvQixDQUFDO0FBQzNDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1nQixXQUFXLEdBQUdBLENBQUN2SyxFQUFFLEVBQUV3SyxVQUFVLEtBQUs7RUFDcEMsSUFBSWhCLFlBQVksQ0FBQ3hKLEVBQUUsQ0FBQyxFQUFFO0lBQ2xCLE1BQU15SyxPQUFPLEdBQUd6SyxFQUFFO0lBQ2xCLE9BQU95SyxPQUFPLENBQUNGLFdBQVcsQ0FBQ0MsVUFBVSxDQUFDO0VBQzFDO0VBQ0EsT0FBT1gsT0FBTyxDQUFDQyxPQUFPLENBQUM5SixFQUFFLENBQUMwSyxRQUFRLENBQUM7SUFDL0JDLEdBQUcsRUFBRSxDQUFDO0lBQ05DLElBQUksRUFBRSxDQUFDO0lBQ1BDLFFBQVEsRUFBRTtFQUNkLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQSxDQUFDOUssRUFBRSxFQUFFSyxDQUFDLEVBQUVDLENBQUMsRUFBRWtLLFVBQVUsS0FBSztFQUM1QyxJQUFJaEIsWUFBWSxDQUFDeEosRUFBRSxDQUFDLEVBQUU7SUFDbEIsTUFBTXlLLE9BQU8sR0FBR3pLLEVBQUU7SUFDbEIsT0FBT3lLLE9BQU8sQ0FBQ0ssYUFBYSxDQUFDekssQ0FBQyxFQUFFQyxDQUFDLEVBQUVrSyxVQUFVLENBQUM7RUFDbEQ7RUFDQSxPQUFPWCxPQUFPLENBQUNDLE9BQU8sQ0FBQzlKLEVBQUUsQ0FBQytLLFFBQVEsQ0FBQztJQUMvQkosR0FBRyxFQUFFckssQ0FBQztJQUNOc0ssSUFBSSxFQUFFdkssQ0FBQztJQUNQd0ssUUFBUSxFQUFFTCxVQUFVLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRztFQUMxQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1RLHVCQUF1QixHQUFJaEwsRUFBRSxJQUFLO0VBQ3BDLE9BQU9tSixxREFBeUIsQ0FBQ25KLEVBQUUsRUFBRXFKLDRCQUE0QixDQUFDO0FBQ3RFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTRCLHFCQUFxQixHQUFJQyxTQUFTLElBQUs7RUFDekMsSUFBSTFCLFlBQVksQ0FBQzBCLFNBQVMsQ0FBQyxFQUFFO0lBQ3pCLE1BQU1DLFVBQVUsR0FBR0QsU0FBUztJQUM1QixNQUFNRSxjQUFjLEdBQUdELFVBQVUsQ0FBQ0UsT0FBTztJQUN6Q0YsVUFBVSxDQUFDRSxPQUFPLEdBQUcsS0FBSztJQUMxQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNRLE9BQU9ELGNBQWM7RUFDekIsQ0FBQyxNQUNJO0lBQ0RGLFNBQVMsQ0FBQ3JGLEtBQUssQ0FBQ3lGLFdBQVcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO0lBQ2pELE9BQU8sSUFBSTtFQUNmO0FBQ0osQ0FBQztBQUNELE1BQU1DLG1CQUFtQixHQUFHQSxDQUFDTCxTQUFTLEVBQUVFLGNBQWMsS0FBSztFQUN2RCxJQUFJNUIsWUFBWSxDQUFDMEIsU0FBUyxDQUFDLEVBQUU7SUFDekJBLFNBQVMsQ0FBQ0csT0FBTyxHQUFHRCxjQUFjO0VBQ3RDLENBQUMsTUFDSTtJQUNERixTQUFTLENBQUNyRixLQUFLLENBQUMyRixjQUFjLENBQUMsVUFBVSxDQUFDO0VBQzlDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEQ7QUFDQTtBQUNBO0FBQzREO0FBRTVELElBQUlDLGFBQWE7QUFDakIsQ0FBQyxVQUFVQSxhQUFhLEVBQUU7RUFDdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lBLGFBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxlQUFlO0VBQ2hEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lBLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxhQUFhO0FBQ2hELENBQUMsRUFBRUEsYUFBYSxLQUFLQSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV6QyxJQUFJQyxjQUFjO0FBQ2xCLENBQUMsVUFBVUEsY0FBYyxFQUFFO0VBQ3ZCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJQSxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTTtFQUMvQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUEsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU87RUFDakM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lBLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRO0VBQ25DO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUEsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU07QUFDbkMsQ0FBQyxFQUFFQSxjQUFjLEtBQUtBLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLE1BQU1DLFFBQVEsR0FBRztFQUNiMUcsU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsTUFBTUMsU0FBUyxHQUFHbEQseURBQVksQ0FBQyxDQUFDO0lBQ2hDLElBQUlrRCxTQUFTLEtBQUssSUFBSSxJQUFJQSxTQUFTLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLFNBQVMsQ0FBQ0MsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDL0YsT0FBT0QsU0FBUyxDQUFDRSxPQUFPLENBQUN1RyxRQUFRO0lBQ3JDO0lBQ0EsT0FBT3RLLFNBQVM7RUFDcEIsQ0FBQztFQUNEdUssYUFBYUEsQ0FBQSxFQUFHO0lBQ1osTUFBTXJHLE1BQU0sR0FBRyxJQUFJLENBQUNOLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLElBQUksRUFBRU0sTUFBTSxLQUFLLElBQUksSUFBSUEsTUFBTSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxNQUFNLENBQUNxRyxhQUFhLENBQUMsRUFBRTtNQUN6RSxPQUFPL0IsT0FBTyxDQUFDQyxPQUFPLENBQUN6SSxTQUFTLENBQUM7SUFDckM7SUFDQSxPQUFPa0UsTUFBTSxDQUFDcUcsYUFBYSxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFFMUQsQ0FBQyxJQUFLO01BQ3ZDLElBQUlBLENBQUMsQ0FBQzJELElBQUksS0FBS0wsYUFBYSxDQUFDTSxhQUFhLEVBQUU7UUFDeEM7UUFDQTtRQUNBLE9BQU8xSyxTQUFTO01BQ3BCO01BQ0EsTUFBTThHLENBQUM7SUFDWCxDQUFDLENBQUM7RUFDTjtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUQ7QUFDQTtBQUNBO0FBQ3lEO0FBQ21COztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTStELGtCQUFrQixHQUFJQyxVQUFVLElBQUs7RUFDdkM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxJQUFJRixpREFBRyxLQUFLNUssU0FBUyxJQUFJOEssVUFBVSxLQUFLVCxvREFBYyxDQUFDVSxJQUFJLElBQUlELFVBQVUsS0FBSzlLLFNBQVMsRUFBRTtJQUNyRixPQUFPLElBQUk7RUFDZjtFQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJLE1BQU1nTCxNQUFNLEdBQUdKLGlEQUFHLENBQUM3QixhQUFhLENBQUMsU0FBUyxDQUFDO0VBQzNDLE9BQU9pQyxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLEtBQUssS0FBSyxDQUFDLEdBQUdBLE1BQU0sR0FBR0osaURBQUcsQ0FBQ3JJLElBQUk7QUFDbkUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNMEksd0JBQXdCLEdBQUlILFVBQVUsSUFBSztFQUM3QyxNQUFNSSxnQkFBZ0IsR0FBR0wsa0JBQWtCLENBQUNDLFVBQVUsQ0FBQztFQUN2RCxPQUFPSSxnQkFBZ0IsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHQSxnQkFBZ0IsQ0FBQ0MsWUFBWTtBQUN4RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsd0JBQXdCO0VBQUEsSUFBQTlDLElBQUEsR0FBQUMsZ0tBQUEsQ0FBRyxXQUFPOEMsc0JBQXNCLEVBQUs7SUFDL0QsSUFBSUMsdUJBQXVCO0lBQzNCLElBQUlDLHVCQUF1QjtJQUMzQixJQUFJQyxlQUFlO0lBQ25CO0FBQ0o7QUFDQTtBQUNBO0lBQ0ksSUFBSUMsNEJBQTRCO0lBQ2hDLE1BQU1DLElBQUk7TUFBQSxJQUFBQyxLQUFBLEdBQUFwRCxnS0FBQSxDQUFHLGFBQVk7UUFDckIsTUFBTXFELGFBQWEsU0FBU3RCLG9EQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELE1BQU1PLFVBQVUsR0FBR2MsYUFBYSxLQUFLNUwsU0FBUyxHQUFHQSxTQUFTLEdBQUc0TCxhQUFhLENBQUNDLElBQUk7UUFDL0VQLHVCQUF1QixHQUFHQSxDQUFBLEtBQU07VUFDNUI7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtVQUNZLElBQUlHLDRCQUE0QixLQUFLekwsU0FBUyxFQUFFO1lBQzVDeUwsNEJBQTRCLEdBQUdSLHdCQUF3QixDQUFDSCxVQUFVLENBQUM7VUFDdkU7VUFDQVUsZUFBZSxHQUFHLElBQUk7VUFDdEJNLGtCQUFrQixDQUFDTixlQUFlLEVBQUVWLFVBQVUsQ0FBQztRQUNuRCxDQUFDO1FBQ0RTLHVCQUF1QixHQUFHQSxDQUFBLEtBQU07VUFDNUJDLGVBQWUsR0FBRyxLQUFLO1VBQ3ZCTSxrQkFBa0IsQ0FBQ04sZUFBZSxFQUFFVixVQUFVLENBQUM7UUFDbkQsQ0FBQztRQUNEcEssaURBQUcsS0FBSyxJQUFJLElBQUlBLGlEQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLGlEQUFHLENBQUMyQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRWlJLHVCQUF1QixDQUFDO1FBQzNHNUssaURBQUcsS0FBSyxJQUFJLElBQUlBLGlEQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLGlEQUFHLENBQUMyQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRWtJLHVCQUF1QixDQUFDO01BQy9HLENBQUM7TUFBQSxnQkF4QktHLElBQUlBLENBQUE7UUFBQSxPQUFBQyxLQUFBLENBQUFoRCxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBd0JUO0lBQ0QsTUFBTWtELGtCQUFrQixHQUFHQSxDQUFDQyxLQUFLLEVBQUVqQixVQUFVLEtBQUs7TUFDOUMsSUFBSU8sc0JBQXNCLEVBQUU7UUFDeEJBLHNCQUFzQixDQUFDVSxLQUFLLEVBQUVDLDJCQUEyQixDQUFDbEIsVUFBVSxDQUFDLENBQUM7TUFDMUU7SUFDSixDQUFDO0lBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSSxNQUFNa0IsMkJBQTJCLEdBQUlsQixVQUFVLElBQUs7TUFDaEQ7TUFDQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDUVcsNEJBQTRCLEtBQUssQ0FBQztNQUM5QjtBQUNaO0FBQ0E7QUFDQTtNQUNZQSw0QkFBNEIsS0FBS1Isd0JBQXdCLENBQUNILFVBQVUsQ0FBQyxFQUFFO1FBQ3ZFO01BQ0o7TUFDQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO01BQ1EsTUFBTUksZ0JBQWdCLEdBQUdMLGtCQUFrQixDQUFDQyxVQUFVLENBQUM7TUFDdkQsSUFBSUksZ0JBQWdCLEtBQUssSUFBSSxFQUFFO1FBQzNCO01BQ0o7TUFDQTtBQUNSO0FBQ0E7QUFDQTtNQUNRLE9BQU8sSUFBSTFDLE9BQU8sQ0FBRUMsT0FBTyxJQUFLO1FBQzVCLE1BQU13RCxRQUFRLEdBQUdBLENBQUEsS0FBTTtVQUNuQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtVQUNnQixJQUFJZixnQkFBZ0IsQ0FBQ0MsWUFBWSxLQUFLTSw0QkFBNEIsRUFBRTtZQUNoRTtBQUNwQjtBQUNBO0FBQ0E7WUFDb0JTLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7WUFDZjFELE9BQU8sQ0FBQyxDQUFDO1VBQ2I7UUFDSixDQUFDO1FBQ0Q7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFDWSxNQUFNeUQsRUFBRSxHQUFHLElBQUlFLGNBQWMsQ0FBQ0gsUUFBUSxDQUFDO1FBQ3ZDQyxFQUFFLENBQUNHLE9BQU8sQ0FBQ25CLGdCQUFnQixDQUFDO01BQ2hDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxNQUFNM0gsT0FBTyxHQUFHQSxDQUFBLEtBQU07TUFDbEI3QyxpREFBRyxLQUFLLElBQUksSUFBSUEsaURBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsaURBQUcsQ0FBQzhDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFOEgsdUJBQXVCLENBQUM7TUFDOUc1SyxpREFBRyxLQUFLLElBQUksSUFBSUEsaURBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsaURBQUcsQ0FBQzhDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFK0gsdUJBQXVCLENBQUM7TUFDOUdELHVCQUF1QixHQUFHQyx1QkFBdUIsR0FBR3ZMLFNBQVM7SUFDakUsQ0FBQztJQUNELE1BQU1zTSxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNZCxlQUFlO0lBQy9DLE1BQU1FLElBQUksQ0FBQyxDQUFDO0lBQ1osT0FBTztNQUFFQSxJQUFJO01BQUVuSSxPQUFPO01BQUUrSTtJQUFrQixDQUFDO0VBQy9DLENBQUM7RUFBQSxnQkFwSEtsQix3QkFBd0JBLENBQUExQyxFQUFBO0lBQUEsT0FBQUosSUFBQSxDQUFBSyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBb0g3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xLRDtBQUNBO0FBQ0E7QUFDdUQ7QUFDdEI7QUFDSjtBQUU3QixNQUFNMkQsaUJBQWlCLEdBQUcsb0JBQW9CO0FBQzlDLE1BQU1DLGtCQUFrQixHQUFHLG9CQUFvQjtBQUMvQyxNQUFNQyxrQkFBa0IsR0FBRyxHQUFHO0FBQzlCO0FBQ0EsSUFBSUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLElBQUlDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztBQUM5QixJQUFJQyxZQUFZLEdBQUcsS0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxtQkFBbUIsR0FBR0EsQ0FBQSxLQUFNO0VBQzlCSCxzQkFBc0IsR0FBRyxDQUFDLENBQUM7RUFDM0JDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztFQUMxQkMsWUFBWSxHQUFHLEtBQUs7QUFDeEIsQ0FBQztBQUNELE1BQU1FLG1CQUFtQixHQUFJcE0sR0FBRyxJQUFLO0VBQ2pDLE1BQU1xTSxZQUFZLEdBQUd6QyxvREFBUSxDQUFDMUcsU0FBUyxDQUFDLENBQUM7RUFDekM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJLElBQUltSixZQUFZLEVBQUU7SUFDZEMsb0JBQW9CLENBQUN0TSxHQUFHLENBQUM7RUFDN0IsQ0FBQyxNQUNJO0lBQ0QsSUFBSSxDQUFDQSxHQUFHLENBQUN1TSxjQUFjLEVBQUU7TUFDckI7SUFDSjtJQUNBTixxQkFBcUIsR0FBR08sa0JBQWtCLENBQUN4TSxHQUFHLENBQUN1TSxjQUFjLENBQUM7SUFDOUR2TSxHQUFHLENBQUN1TSxjQUFjLENBQUNFLFFBQVEsR0FBRyxNQUFNO01BQ2hDQyxvQkFBb0IsQ0FBQzFNLEdBQUcsQ0FBQztNQUN6QixJQUFJMk0sZUFBZSxDQUFDLENBQUMsSUFBSUMsaUJBQWlCLENBQUM1TSxHQUFHLENBQUMsRUFBRTtRQUM3QzZNLGVBQWUsQ0FBQzdNLEdBQUcsQ0FBQztNQUN4QixDQUFDLE1BQ0ksSUFBSThNLGdCQUFnQixDQUFDOU0sR0FBRyxDQUFDLEVBQUU7UUFDNUIrTSxnQkFBZ0IsQ0FBQy9NLEdBQUcsQ0FBQztNQUN6QjtJQUNKLENBQUM7RUFDTDtBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTXNNLG9CQUFvQixHQUFJdE0sR0FBRyxJQUFLO0VBQ2xDQSxHQUFHLENBQUMyQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBR2pELEVBQUUsSUFBS21OLGVBQWUsQ0FBQzdNLEdBQUcsRUFBRU4sRUFBRSxDQUFDLENBQUM7RUFDekVNLEdBQUcsQ0FBQzJDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLE1BQU1vSyxnQkFBZ0IsQ0FBQy9NLEdBQUcsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFDRCxNQUFNNk0sZUFBZSxHQUFHQSxDQUFDN00sR0FBRyxFQUFFTixFQUFFLEtBQUs7RUFDakNzTixxQkFBcUIsQ0FBQ2hOLEdBQUcsRUFBRU4sRUFBRSxDQUFDO0VBQzlCd00sWUFBWSxHQUFHLElBQUk7QUFDdkIsQ0FBQztBQUNELE1BQU1hLGdCQUFnQixHQUFJL00sR0FBRyxJQUFLO0VBQzlCaU4sc0JBQXNCLENBQUNqTixHQUFHLENBQUM7RUFDM0JrTSxZQUFZLEdBQUcsS0FBSztBQUN4QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTVMsZUFBZSxHQUFHQSxDQUFBLEtBQU07RUFDMUIsTUFBTU8sc0JBQXNCLEdBQUcsQ0FBQ2xCLHNCQUFzQixDQUFDbUIsTUFBTSxHQUFHbEIscUJBQXFCLENBQUNrQixNQUFNLElBQUlsQixxQkFBcUIsQ0FBQ21CLEtBQUs7RUFDM0gsT0FBUSxDQUFDbEIsWUFBWSxJQUNqQkYsc0JBQXNCLENBQUNxQixLQUFLLEtBQUtwQixxQkFBcUIsQ0FBQ29CLEtBQUssSUFDNURILHNCQUFzQixHQUFHbkIsa0JBQWtCO0FBQ25ELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1hLGlCQUFpQixHQUFJNU0sR0FBRyxJQUFLO0VBQy9CLE9BQU9rTSxZQUFZLElBQUksQ0FBQ1ksZ0JBQWdCLENBQUM5TSxHQUFHLENBQUM7QUFDakQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU04TSxnQkFBZ0IsR0FBSTlNLEdBQUcsSUFBSztFQUM5QixPQUFPa00sWUFBWSxJQUFJRCxxQkFBcUIsQ0FBQ2tCLE1BQU0sS0FBS25OLEdBQUcsQ0FBQ3NOLFdBQVc7QUFDM0UsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE1BQU1OLHFCQUFxQixHQUFHQSxDQUFDaE4sR0FBRyxFQUFFdU4sUUFBUSxLQUFLO0VBQzdDLE1BQU1DLGNBQWMsR0FBR0QsUUFBUSxHQUFHQSxRQUFRLENBQUNDLGNBQWMsR0FBR3hOLEdBQUcsQ0FBQ3NOLFdBQVcsR0FBR3JCLHFCQUFxQixDQUFDa0IsTUFBTTtFQUMxRyxNQUFNek4sRUFBRSxHQUFHLElBQUkrTixXQUFXLENBQUM1QixpQkFBaUIsRUFBRTtJQUMxQzZCLE1BQU0sRUFBRTtNQUFFRjtJQUFlO0VBQzdCLENBQUMsQ0FBQztFQUNGeE4sR0FBRyxDQUFDMk4sYUFBYSxDQUFDak8sRUFBRSxDQUFDO0FBQ3pCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFNdU4sc0JBQXNCLEdBQUlqTixHQUFHLElBQUs7RUFDcEMsTUFBTU4sRUFBRSxHQUFHLElBQUkrTixXQUFXLENBQUMzQixrQkFBa0IsQ0FBQztFQUM5QzlMLEdBQUcsQ0FBQzJOLGFBQWEsQ0FBQ2pPLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTWdOLG9CQUFvQixHQUFJMU0sR0FBRyxJQUFLO0VBQ2xDZ00sc0JBQXNCLEdBQUc0QixNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTVCLHFCQUFxQixDQUFDO0VBQ2pFQSxxQkFBcUIsR0FBR08sa0JBQWtCLENBQUN4TSxHQUFHLENBQUN1TSxjQUFjLENBQUM7QUFDbEUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUlELGNBQWMsSUFBSztFQUMzQyxPQUFPO0lBQ0hjLEtBQUssRUFBRVMsSUFBSSxDQUFDQyxLQUFLLENBQUN4QixjQUFjLENBQUNjLEtBQUssQ0FBQztJQUN2Q0YsTUFBTSxFQUFFVyxJQUFJLENBQUNDLEtBQUssQ0FBQ3hCLGNBQWMsQ0FBQ1ksTUFBTSxDQUFDO0lBQ3pDYSxTQUFTLEVBQUV6QixjQUFjLENBQUN5QixTQUFTO0lBQ25DQyxVQUFVLEVBQUUxQixjQUFjLENBQUMwQixVQUFVO0lBQ3JDQyxPQUFPLEVBQUUzQixjQUFjLENBQUMyQixPQUFPO0lBQy9CQyxRQUFRLEVBQUU1QixjQUFjLENBQUM0QixRQUFRO0lBQ2pDZixLQUFLLEVBQUViLGNBQWMsQ0FBQ2E7RUFDMUIsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTWdCLG9CQUFvQixHQUFHQSxDQUFBLEtBQU07RUFDL0IsSUFBSUMsV0FBVztFQUNmO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxNQUFNQyxJQUFJO0lBQUEsSUFBQTFHLElBQUEsR0FBQUMsZ0tBQUEsQ0FBRyxhQUFZO01BQ3JCLE1BQU1qQixDQUFDLEdBQUd5SCxXQUFXO01BQ3JCLElBQUl0RyxPQUFPO01BQ1hzRyxXQUFXLEdBQUcsSUFBSXZHLE9BQU8sQ0FBRWhCLENBQUMsSUFBTWlCLE9BQU8sR0FBR2pCLENBQUUsQ0FBQztNQUMvQyxJQUFJRixDQUFDLEtBQUt0SCxTQUFTLEVBQUU7UUFDakIsTUFBTXNILENBQUM7TUFDWDtNQUNBLE9BQU9tQixPQUFPO0lBQ2xCLENBQUM7SUFBQSxnQkFSS3VHLElBQUlBLENBQUE7TUFBQSxPQUFBMUcsSUFBQSxDQUFBSyxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBUVQ7RUFDRCxPQUFPO0lBQ0hvRztFQUNKLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsUUFBUSxHQUFHO0VBQ2JDLE9BQU8sRUFBRTtJQUNMQyxHQUFHLEVBQUUsSUFBSTtJQUNUQyxPQUFPLEVBQUUsQ0FBQztJQUNWQyxFQUFFLEVBQUVBLENBQUNGLEdBQUcsRUFBRUcsS0FBSyxFQUFFQyxLQUFLLEtBQUs7TUFDdkIsTUFBTUMsY0FBYyxHQUFHLEdBQUlMLEdBQUcsR0FBR0csS0FBSyxHQUFJQyxLQUFLLEdBQUdKLEdBQUcsSUFBSTtNQUN6RCxNQUFNTSxLQUFLLEdBQUksQ0FBQyxHQUFHakIsSUFBSSxDQUFDa0IsRUFBRSxHQUFHSixLQUFLLEdBQUlDLEtBQUs7TUFDM0MsT0FBTztRQUNIL0gsQ0FBQyxFQUFFLENBQUM7UUFDSmhELEtBQUssRUFBRTtVQUNIOEUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHa0YsSUFBSSxDQUFDbUIsR0FBRyxDQUFDRixLQUFLLENBQUMsR0FBRztVQUMvQmxHLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBR2lGLElBQUksQ0FBQ29CLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDLEdBQUc7VUFDaEMsaUJBQWlCLEVBQUVEO1FBQ3ZCO01BQ0osQ0FBQztJQUNMO0VBQ0osQ0FBQztFQUNESixPQUFPLEVBQUU7SUFDTEQsR0FBRyxFQUFFLElBQUk7SUFDVEMsT0FBTyxFQUFFLENBQUM7SUFDVkMsRUFBRSxFQUFFQSxDQUFDRixHQUFHLEVBQUVHLEtBQUssRUFBRUMsS0FBSyxLQUFLO01BQ3ZCLE1BQU1NLElBQUksR0FBR1AsS0FBSyxHQUFHQyxLQUFLO01BQzFCLE1BQU1DLGNBQWMsR0FBRyxHQUFHTCxHQUFHLEdBQUdVLElBQUksR0FBR1YsR0FBRyxJQUFJO01BQzlDLE1BQU1NLEtBQUssR0FBRyxDQUFDLEdBQUdqQixJQUFJLENBQUNrQixFQUFFLEdBQUdHLElBQUk7TUFDaEMsT0FBTztRQUNIckksQ0FBQyxFQUFFLENBQUM7UUFDSmhELEtBQUssRUFBRTtVQUNIOEUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHa0YsSUFBSSxDQUFDbUIsR0FBRyxDQUFDRixLQUFLLENBQUMsR0FBRztVQUMvQmxHLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBR2lGLElBQUksQ0FBQ29CLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDLEdBQUc7VUFDaEMsaUJBQWlCLEVBQUVEO1FBQ3ZCO01BQ0osQ0FBQztJQUNMO0VBQ0osQ0FBQztFQUNETSxRQUFRLEVBQUU7SUFDTlgsR0FBRyxFQUFFLElBQUk7SUFDVFksV0FBVyxFQUFFLElBQUk7SUFDakJYLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLEVBQUUsRUFBRUEsQ0FBQSxLQUFNO01BQ04sT0FBTztRQUNIN0gsQ0FBQyxFQUFFLEVBQUU7UUFDTHdJLEVBQUUsRUFBRSxFQUFFO1FBQ05DLEVBQUUsRUFBRSxFQUFFO1FBQ05DLElBQUksRUFBRSxNQUFNO1FBQ1pDLE9BQU8sRUFBRSxhQUFhO1FBQ3RCQyxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCNUwsS0FBSyxFQUFFLENBQUM7TUFDWixDQUFDO0lBQ0w7RUFDSixDQUFDO0VBQ0Q2TCxRQUFRLEVBQUU7SUFDTmxCLEdBQUcsRUFBRSxHQUFHO0lBQ1JDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLEVBQUUsRUFBRUEsQ0FBQSxLQUFNO01BQ04sT0FBTztRQUNIN0gsQ0FBQyxFQUFFLEVBQUU7UUFDTGhELEtBQUssRUFBRSxDQUFDO01BQ1osQ0FBQztJQUNMO0VBQ0osQ0FBQztFQUNEOEwsSUFBSSxFQUFFO0lBQ0ZuQixHQUFHLEVBQUUsR0FBRztJQUNSQyxPQUFPLEVBQUUsQ0FBQztJQUNWQyxFQUFFLEVBQUVBLENBQUNrQixDQUFDLEVBQUVqQixLQUFLLEtBQUs7TUFDZCxNQUFNRSxjQUFjLEdBQUcsRUFBRSxHQUFHLEdBQUdGLEtBQUssQ0FBQyxHQUFHLElBQUk7TUFDNUMsT0FBTztRQUNIOUgsQ0FBQyxFQUFFLENBQUM7UUFDSmhELEtBQUssRUFBRTtVQUNIK0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRytGLEtBQUssR0FBRztVQUMzQixpQkFBaUIsRUFBRUU7UUFDdkI7TUFDSixDQUFDO0lBQ0w7RUFDSixDQUFDO0VBQ0RnQixLQUFLLEVBQUU7SUFDSHJCLEdBQUcsRUFBRSxJQUFJO0lBQ1RxQixLQUFLLEVBQUUsQ0FBQztJQUNSbkIsRUFBRSxFQUFFQSxDQUFDRixHQUFHLEVBQUVHLEtBQUssRUFBRUMsS0FBSyxLQUFLO01BQ3ZCLE1BQU1hLFNBQVMsR0FBRyxVQUFXLEdBQUcsR0FBR2IsS0FBSyxHQUFJRCxLQUFLLElBQUlBLEtBQUssR0FBR0MsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTTtNQUMxRixNQUFNQyxjQUFjLEdBQUcsR0FBSUwsR0FBRyxHQUFHRyxLQUFLLEdBQUlDLEtBQUssR0FBR0osR0FBRyxJQUFJO01BQ3pELE9BQU87UUFDSHNCLEVBQUUsRUFBRSxFQUFFO1FBQ05DLEVBQUUsRUFBRSxFQUFFO1FBQ05sTSxLQUFLLEVBQUU7VUFDSDRMLFNBQVMsRUFBRUEsU0FBUztVQUNwQixpQkFBaUIsRUFBRVo7UUFDdkI7TUFDSixDQUFDO0lBQ0w7RUFDSixDQUFDO0VBQ0QsYUFBYSxFQUFFO0lBQ1hMLEdBQUcsRUFBRSxJQUFJO0lBQ1RxQixLQUFLLEVBQUUsQ0FBQztJQUNSbkIsRUFBRSxFQUFFQSxDQUFDRixHQUFHLEVBQUVHLEtBQUssRUFBRUMsS0FBSyxLQUFLO01BQ3ZCLE1BQU1hLFNBQVMsR0FBRyxVQUFXLEdBQUcsR0FBR2IsS0FBSyxHQUFJRCxLQUFLLElBQUlBLEtBQUssR0FBR0MsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTTtNQUMxRixNQUFNQyxjQUFjLEdBQUcsR0FBSUwsR0FBRyxHQUFHRyxLQUFLLEdBQUlDLEtBQUssR0FBR0osR0FBRyxJQUFJO01BQ3pELE9BQU87UUFDSHNCLEVBQUUsRUFBRSxFQUFFO1FBQ05DLEVBQUUsRUFBRSxFQUFFO1FBQ05sTSxLQUFLLEVBQUU7VUFDSDRMLFNBQVMsRUFBRUEsU0FBUztVQUNwQixpQkFBaUIsRUFBRVo7UUFDdkI7TUFDSixDQUFDO0lBQ0w7RUFDSixDQUFDO0VBQ0QsYUFBYSxFQUFFO0lBQ1hMLEdBQUcsRUFBRSxJQUFJO0lBQ1RxQixLQUFLLEVBQUUsRUFBRTtJQUNUbkIsRUFBRSxFQUFFQSxDQUFDRixHQUFHLEVBQUVHLEtBQUssRUFBRUMsS0FBSyxLQUFLO01BQ3ZCLE1BQU1hLFNBQVMsR0FBRyxVQUFVLEVBQUUsR0FBR2QsS0FBSyxJQUFJQSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNO01BQ3ZFLE1BQU1FLGNBQWMsR0FBRyxHQUFJTCxHQUFHLEdBQUdHLEtBQUssR0FBSUMsS0FBSyxHQUFHSixHQUFHLElBQUk7TUFDekQsT0FBTztRQUNIc0IsRUFBRSxFQUFFLEVBQUU7UUFDTkMsRUFBRSxFQUFFLEVBQUU7UUFDTmxNLEtBQUssRUFBRTtVQUNINEwsU0FBUyxFQUFFQSxTQUFTO1VBQ3BCLGlCQUFpQixFQUFFWjtRQUN2QjtNQUNKLENBQUM7SUFDTDtFQUNKLENBQUM7RUFDRCxtQkFBbUIsRUFBRTtJQUNqQkwsR0FBRyxFQUFFLElBQUk7SUFDVHFCLEtBQUssRUFBRSxFQUFFO0lBQ1RuQixFQUFFLEVBQUVBLENBQUNGLEdBQUcsRUFBRUcsS0FBSyxFQUFFQyxLQUFLLEtBQUs7TUFDdkIsTUFBTWEsU0FBUyxHQUFHLFVBQVUsRUFBRSxHQUFHZCxLQUFLLElBQUlBLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU07TUFDdkUsTUFBTUUsY0FBYyxHQUFHLEdBQUlMLEdBQUcsR0FBR0csS0FBSyxHQUFJQyxLQUFLLEdBQUdKLEdBQUcsSUFBSTtNQUN6RCxPQUFPO1FBQ0hzQixFQUFFLEVBQUUsRUFBRTtRQUNOQyxFQUFFLEVBQUUsRUFBRTtRQUNObE0sS0FBSyxFQUFFO1VBQ0g0TCxTQUFTLEVBQUVBLFNBQVM7VUFDcEIsaUJBQWlCLEVBQUVaO1FBQ3ZCO01BQ0osQ0FBQztJQUNMO0VBQ0o7QUFDSixDQUFDO0FBQ0QsTUFBTW1CLFFBQVEsR0FBRzFCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUl6QjtBQUNBO0FBQ0E7QUFDbUQ7QUFDSjtBQUNLO0FBQ3ZCO0FBQ2E7QUFFMUMsTUFBTTZCLHNCQUFzQixHQUFHQSxDQUFDblMsRUFBRSxFQUFFb1MsZUFBZSxFQUFFQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxLQUFLO0VBQ2pHLE1BQU14USxHQUFHLEdBQUcvQixFQUFFLENBQUN3UyxhQUFhLENBQUNDLFdBQVc7RUFDeEMsSUFBSUMsR0FBRyxHQUFHNVAsbURBQUssQ0FBQzlDLEVBQUUsQ0FBQztFQUNuQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksTUFBTTJTLFFBQVEsR0FBSWxELE1BQU0sSUFBSztJQUN6QixNQUFNbE8sU0FBUyxHQUFHLEVBQUU7SUFDcEIsTUFBTTtNQUFFcVI7SUFBTyxDQUFDLEdBQUduRCxNQUFNO0lBQ3pCLElBQUlpRCxHQUFHLEVBQUU7TUFDTCxPQUFPRSxNQUFNLElBQUk3USxHQUFHLENBQUM4USxVQUFVLEdBQUd0UixTQUFTO0lBQy9DO0lBQ0EsT0FBT3FSLE1BQU0sSUFBSXJSLFNBQVM7RUFDOUIsQ0FBQztFQUNELE1BQU11UixTQUFTLEdBQUlyRCxNQUFNLElBQUs7SUFDMUIsT0FBT2lELEdBQUcsR0FBRyxDQUFDakQsTUFBTSxDQUFDc0QsTUFBTSxHQUFHdEQsTUFBTSxDQUFDc0QsTUFBTTtFQUMvQyxDQUFDO0VBQ0QsTUFBTUMsWUFBWSxHQUFJdkQsTUFBTSxJQUFLO0lBQzdCLE9BQU9pRCxHQUFHLEdBQUcsQ0FBQ2pELE1BQU0sQ0FBQ3dELFNBQVMsR0FBR3hELE1BQU0sQ0FBQ3dELFNBQVM7RUFDckQsQ0FBQztFQUNELE1BQU1DLFFBQVEsR0FBSXpELE1BQU0sSUFBSztJQUN6QjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1FpRCxHQUFHLEdBQUc1UCxtREFBSyxDQUFDOUMsRUFBRSxDQUFDO0lBQ2YsT0FBTzJTLFFBQVEsQ0FBQ2xELE1BQU0sQ0FBQyxJQUFJMkMsZUFBZSxDQUFDLENBQUM7RUFDaEQsQ0FBQztFQUNELE1BQU14USxNQUFNLEdBQUk2TixNQUFNLElBQUs7SUFDdkI7SUFDQSxNQUFNMEQsS0FBSyxHQUFHTCxTQUFTLENBQUNyRCxNQUFNLENBQUM7SUFDL0IsTUFBTTJELFNBQVMsR0FBR0QsS0FBSyxHQUFHcFIsR0FBRyxDQUFDOFEsVUFBVTtJQUN4Q1AsYUFBYSxDQUFDYyxTQUFTLENBQUM7RUFDNUIsQ0FBQztFQUNELE1BQU12UixLQUFLLEdBQUk0TixNQUFNLElBQUs7SUFDdEI7SUFDQSxNQUFNMEQsS0FBSyxHQUFHTCxTQUFTLENBQUNyRCxNQUFNLENBQUM7SUFDL0IsTUFBTUwsS0FBSyxHQUFHck4sR0FBRyxDQUFDOFEsVUFBVTtJQUM1QixNQUFNTyxTQUFTLEdBQUdELEtBQUssR0FBRy9ELEtBQUs7SUFDL0IsTUFBTWlFLFFBQVEsR0FBR0wsWUFBWSxDQUFDdkQsTUFBTSxDQUFDO0lBQ3JDLE1BQU02RCxDQUFDLEdBQUdsRSxLQUFLLEdBQUcsR0FBRztJQUNyQixNQUFNbUUsY0FBYyxHQUFHRixRQUFRLElBQUksQ0FBQyxLQUFLQSxRQUFRLEdBQUcsR0FBRyxJQUFJRixLQUFLLEdBQUdHLENBQUMsQ0FBQztJQUNyRSxNQUFNRSxPQUFPLEdBQUdELGNBQWMsR0FBRyxDQUFDLEdBQUdILFNBQVMsR0FBR0EsU0FBUztJQUMxRCxNQUFNSyxlQUFlLEdBQUdELE9BQU8sR0FBR3BFLEtBQUs7SUFDdkMsSUFBSXNFLE9BQU8sR0FBRyxDQUFDO0lBQ2YsSUFBSUQsZUFBZSxHQUFHLENBQUMsRUFBRTtNQUNyQixNQUFNakQsR0FBRyxHQUFHaUQsZUFBZSxHQUFHNUQsSUFBSSxDQUFDOEQsR0FBRyxDQUFDTixRQUFRLENBQUM7TUFDaERLLE9BQU8sR0FBRzdELElBQUksQ0FBQytELEdBQUcsQ0FBQ3BELEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDaEM7SUFDQStCLFlBQVksQ0FBQ2dCLGNBQWMsRUFBRUgsU0FBUyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUdsQix1REFBSyxDQUFDLENBQUMsRUFBRWtCLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRU0sT0FBTyxDQUFDO0VBQzlGLENBQUM7RUFDRCxPQUFPNVQsaUVBQWEsQ0FBQztJQUNqQkUsRUFBRTtJQUNGc0IsV0FBVyxFQUFFLGNBQWM7SUFDM0I7QUFDUjtBQUNBO0FBQ0E7SUFDUXVTLGVBQWUsRUFBRSxHQUFHO0lBQ3BCdFMsU0FBUyxFQUFFLEVBQUU7SUFDYjJSLFFBQVE7SUFDUjFSLE9BQU8sRUFBRTZRLGNBQWM7SUFDdkJ6USxNQUFNO0lBQ05DO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0VEO0FBQ0E7QUFDQTtBQUNBLE1BQU1pUyxlQUFlLEdBQUdBLENBQUNDLFdBQVcsRUFBRXRLLE9BQU8sRUFBRXVLLFFBQVEsS0FBSztFQUN4RCxJQUFJLE9BQU9DLGdCQUFnQixLQUFLLFdBQVcsRUFBRTtJQUN6QztFQUNKO0VBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlELGdCQUFnQixDQUFFRSxZQUFZLElBQUs7SUFDcERILFFBQVEsQ0FBQ0ksaUJBQWlCLENBQUNELFlBQVksRUFBRTFLLE9BQU8sQ0FBQyxDQUFDO0VBQ3RELENBQUMsQ0FBQztFQUNGeUssUUFBUSxDQUFDeEcsT0FBTyxDQUFDcUcsV0FBVyxFQUFFO0lBQzFCTSxTQUFTLEVBQUUsSUFBSTtJQUNmQyxPQUFPLEVBQUU7RUFDYixDQUFDLENBQUM7RUFDRixPQUFPSixRQUFRO0FBQ25CLENBQUM7QUFDRCxNQUFNRSxpQkFBaUIsR0FBR0EsQ0FBQ0QsWUFBWSxFQUFFMUssT0FBTyxLQUFLO0VBQ2pELElBQUk4SyxTQUFTO0VBQ2JKLFlBQVksQ0FBQ3BRLE9BQU8sQ0FBRXlRLEdBQUcsSUFBSztJQUMxQjtJQUNBLEtBQUssSUFBSTNSLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzJSLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDQyxNQUFNLEVBQUU3UixDQUFDLEVBQUUsRUFBRTtNQUM1QzBSLFNBQVMsR0FBR0ksaUJBQWlCLENBQUNILEdBQUcsQ0FBQ0MsVUFBVSxDQUFDNVIsQ0FBQyxDQUFDLEVBQUU0RyxPQUFPLENBQUMsSUFBSThLLFNBQVM7SUFDMUU7RUFDSixDQUFDLENBQUM7RUFDRixPQUFPQSxTQUFTO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNSSxpQkFBaUIsR0FBR0EsQ0FBQ0MsSUFBSSxFQUFFbkwsT0FBTyxLQUFLO0VBQ3pDO0FBQ0o7QUFDQTtBQUNBO0VBQ0ksSUFBSW1MLElBQUksQ0FBQ0MsUUFBUSxLQUFLLENBQUMsRUFBRTtJQUNyQixPQUFPeFQsU0FBUztFQUNwQjtFQUNBO0VBQ0EsTUFBTXJCLEVBQUUsR0FBRzRVLElBQUk7RUFDZixNQUFNaFAsT0FBTyxHQUFHNUYsRUFBRSxDQUFDeUosT0FBTyxLQUFLQSxPQUFPLENBQUNxTCxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUM5VSxFQUFFLENBQUMsR0FBR3VDLEtBQUssQ0FBQ3dTLElBQUksQ0FBQy9VLEVBQUUsQ0FBQ2dWLGdCQUFnQixDQUFDdkwsT0FBTyxDQUFDLENBQUM7RUFDdEcsT0FBTzdELE9BQU8sQ0FBQ3FQLElBQUksQ0FBRXZNLENBQUMsSUFBS0EsQ0FBQyxDQUFDd00sS0FBSyxLQUFLbFYsRUFBRSxDQUFDa1YsS0FBSyxDQUFDO0FBQ3BELENBQUMiLCJzb3VyY2VzIjpbIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2J1dHRvbi1hY3RpdmUtQnhjbmV2anUuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9jYXBhY2l0b3ItQ0ZFUkllYVUuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9jb21wYXJlLXdpdGgtdXRpbHMtc09iWXl2T3kuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9kaXItQzUzZmVhZ0QuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9mb2N1cy12aXNpYmxlLUJtVlJYUjF5LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaGFwdGljLUR6QU1XSnVrLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW5kZXgtQkxWNnlrQ2suanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC1CbEpUQmR4Ry5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2tleWJvYXJkLUNVdzRla1Z5LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20va2V5Ym9hcmQtY29udHJvbGxlci1CYWFWSVRZdC5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2tleWJvYXJkLXl3Z3M1ZWZBLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vbG9jay1jb250cm9sbGVyLUItaGlyVDB2LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vc3Bpbm5lci1jb25maWdzLUQ0UklwNzBFLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vc3dpcGUtYmFjay1WZGFVekxXeS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3dhdGNoLW9wdGlvbnMtRHRkbThsS0MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHcgYXMgd3JpdGVUYXNrIH0gZnJvbSAnLi9pbmRleC1CX1U5Q3RhWS5qcyc7XG5pbXBvcnQgeyBoIGFzIGhhcHRpY1NlbGVjdGlvbkVuZCwgYSBhcyBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkLCBiIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0IH0gZnJvbSAnLi9oYXB0aWMtRHpBTVdKdWsuanMnO1xuaW1wb3J0IHsgY3JlYXRlR2VzdHVyZSB9IGZyb20gJy4vaW5kZXgtQ2ZnQkYxU0UuanMnO1xuXG5jb25zdCBjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlID0gKGVsLCBpc0J1dHRvbikgPT4ge1xuICAgIGxldCBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICBsZXQgaW5pdGlhbFRvdWNoZWRCdXR0b247XG4gICAgY29uc3QgYWN0aXZhdGVCdXR0b25BdFBvaW50ID0gKHgsIHksIGhhcHRpY0ZlZWRiYWNrRm4pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgICAgICBpZiAoIXRhcmdldCB8fCAhaXNCdXR0b24odGFyZ2V0KSB8fCB0YXJnZXQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldCAhPT0gY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgICAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKCk7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdXR0b24odGFyZ2V0LCBoYXB0aWNGZWVkYmFja0ZuKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2V0QWN0aXZlQnV0dG9uID0gKGJ1dHRvbiwgaGFwdGljRmVlZGJhY2tGbikgPT4ge1xuICAgICAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbiA9IGJ1dHRvbjtcbiAgICAgICAgaWYgKCFpbml0aWFsVG91Y2hlZEJ1dHRvbikge1xuICAgICAgICAgICAgaW5pdGlhbFRvdWNoZWRCdXR0b24gPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b25Ub01vZGlmeSA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgICAgICB3cml0ZVRhc2soKCkgPT4gYnV0dG9uVG9Nb2RpZnkuY2xhc3NMaXN0LmFkZCgnaW9uLWFjdGl2YXRlZCcpKTtcbiAgICAgICAgaGFwdGljRmVlZGJhY2tGbigpO1xuICAgIH07XG4gICAgY29uc3QgY2xlYXJBY3RpdmVCdXR0b24gPSAoZGlzcGF0Y2hDbGljayA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGlmICghY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b25Ub01vZGlmeSA9IGN1cnJlbnRUb3VjaGVkQnV0dG9uO1xuICAgICAgICB3cml0ZVRhc2soKCkgPT4gYnV0dG9uVG9Nb2RpZnkuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLWFjdGl2YXRlZCcpKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsaWNraW5nIG9uIG9uZSBidXR0b24sIGJ1dCByZWxlYXNpbmcgb24gYW5vdGhlciBidXR0b25cbiAgICAgICAgICogZG9lcyBub3QgZGlzcGF0Y2ggYSBjbGljayBldmVudCBpbiBicm93c2Vycywgc28gd2VcbiAgICAgICAgICogbmVlZCB0byBkbyBpdCBtYW51YWxseSBoZXJlLiBTb21lIGJyb3dzZXJzIHdpbGxcbiAgICAgICAgICogZGlzcGF0Y2ggYSBjbGljayBpZiBjbGlja2luZyBvbiBvbmUgYnV0dG9uLCBkcmFnZ2luZyBvdmVyXG4gICAgICAgICAqIGFub3RoZXIgYnV0dG9uLCBhbmQgcmVsZWFzaW5nIG9uIHRoZSBvcmlnaW5hbCBidXR0b24uIEluIHRoYXRcbiAgICAgICAgICogY2FzZSwgd2UgbmVlZCB0byBtYWtlIHN1cmUgd2UgZG8gbm90IGNhdXNlIGEgZG91YmxlIGNsaWNrIHRoZXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGRpc3BhdGNoQ2xpY2sgJiYgaW5pdGlhbFRvdWNoZWRCdXR0b24gIT09IGN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICAgICAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUb3VjaGVkQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgICAgICBlbCxcbiAgICAgICAgZ2VzdHVyZU5hbWU6ICdidXR0b25BY3RpdmVEcmFnJyxcbiAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICBvblN0YXJ0OiAoZXYpID0+IGFjdGl2YXRlQnV0dG9uQXRQb2ludChldi5jdXJyZW50WCwgZXYuY3VycmVudFksIGhhcHRpY1NlbGVjdGlvblN0YXJ0KSxcbiAgICAgICAgb25Nb3ZlOiAoZXYpID0+IGFjdGl2YXRlQnV0dG9uQXRQb2ludChldi5jdXJyZW50WCwgZXYuY3VycmVudFksIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQpLFxuICAgICAgICBvbkVuZDogKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJBY3RpdmVCdXR0b24odHJ1ZSk7XG4gICAgICAgICAgICBoYXB0aWNTZWxlY3Rpb25FbmQoKTtcbiAgICAgICAgICAgIGluaXRpYWxUb3VjaGVkQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9LFxuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSBhcyBjIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3aW4gfSBmcm9tICcuL2luZGV4LVpqUDRDamVaLmpzJztcblxuY29uc3QgZ2V0Q2FwYWNpdG9yID0gKCkgPT4ge1xuICAgIGlmICh3aW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gd2luLkNhcGFjaXRvcjtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCB7IGdldENhcGFjaXRvciBhcyBnIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyoqXG4gKiBVc2VzIHRoZSBjb21wYXJlV2l0aCBwYXJhbSB0byBjb21wYXJlIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSBjdXJyZW50VmFsdWUgVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGNvbnRyb2wuXG4gKiBAcGFyYW0gY29tcGFyZVZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlIGFnYWluc3QuXG4gKiBAcGFyYW0gY29tcGFyZVdpdGggVGhlIGZ1bmN0aW9uIG9yIHByb3BlcnR5IG5hbWUgdG8gdXNlIHRvIGNvbXBhcmUgdmFsdWVzLlxuICovXG5jb25zdCBjb21wYXJlT3B0aW9ucyA9IChjdXJyZW50VmFsdWUsIGNvbXBhcmVWYWx1ZSwgY29tcGFyZVdpdGgpID0+IHtcbiAgICBpZiAodHlwZW9mIGNvbXBhcmVXaXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlV2l0aChjdXJyZW50VmFsdWUsIGNvbXBhcmVWYWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb21wYXJlV2l0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZVtjb21wYXJlV2l0aF0gPT09IGNvbXBhcmVWYWx1ZVtjb21wYXJlV2l0aF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb21wYXJlVmFsdWUpID8gY29tcGFyZVZhbHVlLmluY2x1ZGVzKGN1cnJlbnRWYWx1ZSkgOiBjdXJyZW50VmFsdWUgPT09IGNvbXBhcmVWYWx1ZTtcbiAgICB9XG59O1xuLyoqXG4gKiBDb21wYXJlcyBhIHZhbHVlIGFnYWluc3QgdGhlIGN1cnJlbnQgdmFsdWUocykgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIHNlbGVjdGVkLlxuICpcbiAqIEBwYXJhbSBjdXJyZW50VmFsdWUgVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGNvbnRyb2wuXG4gKiBAcGFyYW0gY29tcGFyZVZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlIGFnYWluc3QuXG4gKiBAcGFyYW0gY29tcGFyZVdpdGggVGhlIGZ1bmN0aW9uIG9yIHByb3BlcnR5IG5hbWUgdG8gdXNlIHRvIGNvbXBhcmUgdmFsdWVzLlxuICovXG5jb25zdCBpc09wdGlvblNlbGVjdGVkID0gKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCkgPT4ge1xuICAgIGlmIChjdXJyZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWwpID0+IGNvbXBhcmVPcHRpb25zKHZhbCwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVPcHRpb25zKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgY29tcGFyZU9wdGlvbnMgYXMgYywgaXNPcHRpb25TZWxlY3RlZCBhcyBpIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZG9jdW1lbnQgb3IgaG9zdCBlbGVtZW50XG4gKiBoYXMgYSBgZGlyYCBzZXQgdG8gYHJ0bGAuIFRoZSBob3N0IHZhbHVlIHdpbGwgYWx3YXlzXG4gKiB0YWtlIHByaW9yaXR5IG92ZXIgdGhlIHJvb3QgZG9jdW1lbnQgdmFsdWUuXG4gKi9cbmNvbnN0IGlzUlRMID0gKGhvc3RFbCkgPT4ge1xuICAgIGlmIChob3N0RWwpIHtcbiAgICAgICAgaWYgKGhvc3RFbC5kaXIgIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9zdEVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGRvY3VtZW50ID09PSBudWxsIHx8IGRvY3VtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb2N1bWVudC5kaXIudG9Mb3dlckNhc2UoKSkgPT09ICdydGwnO1xufTtcblxuZXhwb3J0IHsgaXNSVEwgYXMgaSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IElPTl9GT0NVU0VEID0gJ2lvbi1mb2N1c2VkJztcbmNvbnN0IElPTl9GT0NVU0FCTEUgPSAnaW9uLWZvY3VzYWJsZSc7XG5jb25zdCBGT0NVU19LRVlTID0gW1xuICAgICdUYWInLFxuICAgICdBcnJvd0Rvd24nLFxuICAgICdTcGFjZScsXG4gICAgJ0VzY2FwZScsXG4gICAgJyAnLFxuICAgICdTaGlmdCcsXG4gICAgJ0VudGVyJyxcbiAgICAnQXJyb3dMZWZ0JyxcbiAgICAnQXJyb3dSaWdodCcsXG4gICAgJ0Fycm93VXAnLFxuICAgICdIb21lJyxcbiAgICAnRW5kJyxcbl07XG5jb25zdCBzdGFydEZvY3VzVmlzaWJsZSA9IChyb290RWwpID0+IHtcbiAgICBsZXQgY3VycmVudEZvY3VzID0gW107XG4gICAgbGV0IGtleWJvYXJkTW9kZSA9IHRydWU7XG4gICAgY29uc3QgcmVmID0gcm9vdEVsID8gcm9vdEVsLnNoYWRvd1Jvb3QgOiBkb2N1bWVudDtcbiAgICBjb25zdCByb290ID0gcm9vdEVsID8gcm9vdEVsIDogZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBzZXRGb2N1cyA9IChlbGVtZW50cykgPT4ge1xuICAgICAgICBjdXJyZW50Rm9jdXMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoSU9OX0ZPQ1VTRUQpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoSU9OX0ZPQ1VTRUQpKTtcbiAgICAgICAgY3VycmVudEZvY3VzID0gZWxlbWVudHM7XG4gICAgfTtcbiAgICBjb25zdCBwb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAga2V5Ym9hcmRNb2RlID0gZmFsc2U7XG4gICAgICAgIHNldEZvY3VzKFtdKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uS2V5ZG93biA9IChldikgPT4ge1xuICAgICAgICBrZXlib2FyZE1vZGUgPSBGT0NVU19LRVlTLmluY2x1ZGVzKGV2LmtleSk7XG4gICAgICAgIGlmICgha2V5Ym9hcmRNb2RlKSB7XG4gICAgICAgICAgICBzZXRGb2N1cyhbXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uRm9jdXNpbiA9IChldikgPT4ge1xuICAgICAgICBpZiAoa2V5Ym9hcmRNb2RlICYmIGV2LmNvbXBvc2VkUGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCB0b0ZvY3VzID0gZXYuY29tcG9zZWRQYXRoKCkuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRPRE8oRlctMjgzMik6IHR5cGVcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoSU9OX0ZPQ1VTQUJMRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0Rm9jdXModG9Gb2N1cyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uRm9jdXNvdXQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuYWN0aXZlRWxlbWVudCA9PT0gcm9vdCkge1xuICAgICAgICAgICAgc2V0Rm9jdXMoW10pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xuICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcG9pbnRlckRvd24sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcG9pbnRlckRvd24pO1xuICAgIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xuICAgICAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3Vzb3V0KTtcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwb2ludGVyRG93bik7XG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95LFxuICAgICAgICBzZXRGb2N1cyxcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgc3RhcnRGb2N1c1Zpc2libGUgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBnIGFzIGdldENhcGFjaXRvciB9IGZyb20gJy4vY2FwYWNpdG9yLUNGRVJJZWFVLmpzJztcblxudmFyIEltcGFjdFN0eWxlO1xuKGZ1bmN0aW9uIChJbXBhY3RTdHlsZSkge1xuICAgIC8qKlxuICAgICAqIEEgY29sbGlzaW9uIGJldHdlZW4gbGFyZ2UsIGhlYXZ5IHVzZXIgaW50ZXJmYWNlIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBJbXBhY3RTdHlsZVtcIkhlYXZ5XCJdID0gXCJIRUFWWVwiO1xuICAgIC8qKlxuICAgICAqIEEgY29sbGlzaW9uIGJldHdlZW4gbW9kZXJhdGVseSBzaXplZCB1c2VyIGludGVyZmFjZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgSW1wYWN0U3R5bGVbXCJNZWRpdW1cIl0gPSBcIk1FRElVTVwiO1xuICAgIC8qKlxuICAgICAqIEEgY29sbGlzaW9uIGJldHdlZW4gc21hbGwsIGxpZ2h0IHVzZXIgaW50ZXJmYWNlIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBJbXBhY3RTdHlsZVtcIkxpZ2h0XCJdID0gXCJMSUdIVFwiO1xufSkoSW1wYWN0U3R5bGUgfHwgKEltcGFjdFN0eWxlID0ge30pKTtcbnZhciBOb3RpZmljYXRpb25UeXBlO1xuKGZ1bmN0aW9uIChOb3RpZmljYXRpb25UeXBlKSB7XG4gICAgLyoqXG4gICAgICogQSBub3RpZmljYXRpb24gZmVlZGJhY2sgdHlwZSBpbmRpY2F0aW5nIHRoYXQgYSB0YXNrIGhhcyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBOb3RpZmljYXRpb25UeXBlW1wiU3VjY2Vzc1wiXSA9IFwiU1VDQ0VTU1wiO1xuICAgIC8qKlxuICAgICAqIEEgbm90aWZpY2F0aW9uIGZlZWRiYWNrIHR5cGUgaW5kaWNhdGluZyB0aGF0IGEgdGFzayBoYXMgcHJvZHVjZWQgYSB3YXJuaW5nXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBOb3RpZmljYXRpb25UeXBlW1wiV2FybmluZ1wiXSA9IFwiV0FSTklOR1wiO1xuICAgIC8qKlxuICAgICAqIEEgbm90aWZpY2F0aW9uIGZlZWRiYWNrIHR5cGUgaW5kaWNhdGluZyB0aGF0IGEgdGFzayBoYXMgZmFpbGVkXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBOb3RpZmljYXRpb25UeXBlW1wiRXJyb3JcIl0gPSBcIkVSUk9SXCI7XG59KShOb3RpZmljYXRpb25UeXBlIHx8IChOb3RpZmljYXRpb25UeXBlID0ge30pKTtcbmNvbnN0IEhhcHRpY0VuZ2luZSA9IHtcbiAgICBnZXRFbmdpbmUoKSB7XG4gICAgICAgIGNvbnN0IGNhcGFjaXRvciA9IGdldENhcGFjaXRvcigpO1xuICAgICAgICBpZiAoY2FwYWNpdG9yID09PSBudWxsIHx8IGNhcGFjaXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FwYWNpdG9yLmlzUGx1Z2luQXZhaWxhYmxlKCdIYXB0aWNzJykpIHtcbiAgICAgICAgICAgIC8vIENhcGFjaXRvclxuICAgICAgICAgICAgcmV0dXJuIGNhcGFjaXRvci5QbHVnaW5zLkhhcHRpY3M7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGF2YWlsYWJsZSgpIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICAgICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXBhY2l0b3IgPSBnZXRDYXBhY2l0b3IoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldmVsb3BlcnMgY2FuIG1hbnVhbGx5IGltcG9ydCB0aGVcbiAgICAgICAgICogSGFwdGljcyBwbHVnaW4gaW4gdGhlaXIgYXBwIHdoaWNoIHdpbGwgY2F1c2VcbiAgICAgICAgICogZ2V0RW5naW5lIHRvIHJldHVybiB0aGUgSGFwdGljcyBlbmdpbmUuIEhvd2V2ZXIsXG4gICAgICAgICAqIHRoZSBIYXB0aWNzIGVuZ2luZSB3aWxsIHRocm93IGFuIGVycm9yIGlmXG4gICAgICAgICAqIHVzZWQgaW4gYSB3ZWIgYnJvd3NlciB0aGF0IGRvZXMgbm90IHN1cHBvcnRcbiAgICAgICAgICogdGhlIFZpYnJhdGUgQVBJLiBUaGlzIGNoZWNrIGF2b2lkcyB0aGF0IGVycm9yXG4gICAgICAgICAqIGlmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIFZpYnJhdGUgQVBJLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKChjYXBhY2l0b3IgPT09IG51bGwgfHwgY2FwYWNpdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXBhY2l0b3IuZ2V0UGxhdGZvcm0oKSkgPT09ICd3ZWInKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1vcHRpb25hbC1jaGFpblxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci52aWJyYXRlICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBpbXBhY3Qob3B0aW9ucykge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgICAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVuZ2luZS5pbXBhY3QoeyBzdHlsZTogb3B0aW9ucy5zdHlsZSB9KTtcbiAgICB9LFxuICAgIG5vdGlmaWNhdGlvbihvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgICAgIGlmICghZW5naW5lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5naW5lLm5vdGlmaWNhdGlvbih7IHR5cGU6IG9wdGlvbnMudHlwZSB9KTtcbiAgICB9LFxuICAgIHNlbGVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbXBhY3QoeyBzdHlsZTogSW1wYWN0U3R5bGUuTGlnaHQgfSk7XG4gICAgfSxcbiAgICBzZWxlY3Rpb25TdGFydCgpIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICAgICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbmdpbmUuc2VsZWN0aW9uU3RhcnQoKTtcbiAgICB9LFxuICAgIHNlbGVjdGlvbkNoYW5nZWQoKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgICAgIGlmICghZW5naW5lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5naW5lLnNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9LFxuICAgIHNlbGVjdGlvbkVuZCgpIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICAgICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbmdpbmUuc2VsZWN0aW9uRW5kKCk7XG4gICAgfSxcbn07XG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgSGFwdGljIFBsdWdpbiBpcyBhdmFpbGFibGVcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgb3IgZmFsc2UgaWYgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGVcbiAqL1xuY29uc3QgaGFwdGljQXZhaWxhYmxlID0gKCkgPT4ge1xuICAgIHJldHVybiBIYXB0aWNFbmdpbmUuYXZhaWxhYmxlKCk7XG59O1xuLyoqXG4gKiBUcmlnZ2VyIGEgc2VsZWN0aW9uIGNoYW5nZWQgaGFwdGljIGV2ZW50LiBHb29kIGZvciBvbmUtdGltZSBldmVudHNcbiAqIChub3QgZm9yIGdlc3R1cmVzKVxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgaGFwdGljQXZhaWxhYmxlKCkgJiYgSGFwdGljRW5naW5lLnNlbGVjdGlvbigpO1xufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25TdGFydCA9ICgpID0+IHtcbiAgICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uU3RhcnQoKTtcbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgPSAoKSA9PiB7XG4gICAgaGFwdGljQXZhaWxhYmxlKCkgJiYgSGFwdGljRW5naW5lLnNlbGVjdGlvbkNoYW5nZWQoKTtcbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgd2UgYXJlIGRvbmUgd2l0aCBhIGdlc3R1cmUuIFRoaXMgbmVlZHMgdG8gYmVcbiAqIGNhbGxlZCBsZXN0IHJlc291cmNlcyBhcmUgbm90IHByb3Blcmx5IHJlY3ljbGVkLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25FbmQgPSAoKSA9PiB7XG4gICAgaGFwdGljQXZhaWxhYmxlKCkgJiYgSGFwdGljRW5naW5lLnNlbGVjdGlvbkVuZCgpO1xufTtcbi8qKlxuICogVXNlIHRoaXMgdG8gaW5kaWNhdGUgc3VjY2Vzcy9mYWlsdXJlL3dhcm5pbmcgdG8gdGhlIHVzZXIuXG4gKiBvcHRpb25zIHNob3VsZCBiZSBvZiB0aGUgdHlwZSBgeyBzdHlsZTogSW1wYWN0U3R5bGUuTElHSFQgfWAgKG9yIGBNRURJVU1gL2BIRUFWWWApXG4gKi9cbmNvbnN0IGhhcHRpY0ltcGFjdCA9IChvcHRpb25zKSA9PiB7XG4gICAgaGFwdGljQXZhaWxhYmxlKCkgJiYgSGFwdGljRW5naW5lLmltcGFjdChvcHRpb25zKTtcbn07XG5cbmV4cG9ydCB7IEltcGFjdFN0eWxlIGFzIEksIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgYXMgYSwgaGFwdGljU2VsZWN0aW9uU3RhcnQgYXMgYiwgaGFwdGljU2VsZWN0aW9uIGFzIGMsIGhhcHRpY0ltcGFjdCBhcyBkLCBoYXB0aWNTZWxlY3Rpb25FbmQgYXMgaCB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8qIElvbmljb25zIHY3LjIuMiwgRVMgTW9kdWxlcyAqL1xuXG5jb25zdCBhcnJvd0JhY2tTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3NxdWFyZScgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMjQ0IDQwMEwxMDAgMjU2bDE0NC0xNDRNMTIwIDI1NmgyOTInIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgYXJyb3dEb3duID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xMTIgMjY4bDE0NCAxNDQgMTQ0LTE0NE0yNTYgMzkyVjEwMCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldEJhY2tTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTM2OCA2NEwxNDQgMjU2bDIyNCAxOTJWNjR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldERvd25TaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTY0IDE0NGwxOTIgMjI0IDE5Mi0yMjRINjR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldFVwU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J000NDggMzY4TDI1NiAxNDQgNjQgMzY4aDM4NHonLz48L3N2Zz5cIjtcbmNvbnN0IGNoZWNrbWFya091dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTQxNiAxMjhMMTkyIDM4NGwtOTYtOTYnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkJhY2sgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTMyOCAxMTJMMTg0IDI1NmwxNDQgMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25Eb3duID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xMTIgMTg0bDE0NCAxNDQgMTQ0LTE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRXhwYW5kID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNMTM2IDIwOGwxMjAtMTA0IDEyMCAxMDRNMTM2IDMwNGwxMjAgMTA0IDEyMC0xMDQnIHN0cm9rZS13aWR0aD0nNDgnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRm9yd2FyZCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTg0IDExMmwxNDQgMTQ0LTE0NCAxNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkZvcndhcmRPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xODQgMTEybDE0NCAxNDQtMTQ0IDE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTI4OS45NCAyNTZsOTUtOTVBMjQgMjQgMCAwMDM1MSAxMjdsLTk1IDk1LTk1LTk1YTI0IDI0IDAgMDAtMzQgMzRsOTUgOTUtOTUgOTVhMjQgMjQgMCAxMDM0IDM0bDk1LTk1IDk1IDk1YTI0IDI0IDAgMDAzNC0zNHonLz48L3N2Zz5cIjtcbmNvbnN0IGNsb3NlQ2lyY2xlID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNMjU2IDQ4QzE0MS4zMSA0OCA0OCAxNDEuMzEgNDggMjU2czkzLjMxIDIwOCAyMDggMjA4IDIwOC05My4zMSAyMDgtMjA4UzM3MC42OSA0OCAyNTYgNDh6bTc1LjMxIDI2MC42OWExNiAxNiAwIDExLTIyLjYyIDIyLjYyTDI1NiAyNzguNjNsLTUyLjY5IDUyLjY4YTE2IDE2IDAgMDEtMjIuNjItMjIuNjJMMjMzLjM3IDI1NmwtNTIuNjgtNTIuNjlhMTYgMTYgMCAwMTIyLjYyLTIyLjYyTDI1NiAyMzMuMzdsNTIuNjktNTIuNjhhMTYgMTYgMCAwMTIyLjYyIDIyLjYyTDI3OC42MyAyNTZ6Jy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZVNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNNDAwIDE0NS40OUwzNjYuNTEgMTEyIDI1NiAyMjIuNTEgMTQ1LjQ5IDExMiAxMTIgMTQ1LjQ5IDIyMi41MSAyNTYgMTEyIDM2Ni41MSAxNDUuNDkgNDAwIDI1NiAyODkuNDkgMzY2LjUxIDQwMCA0MDAgMzY2LjUxIDI4OS40OSAyNTYgNDAwIDE0NS40OXonLz48L3N2Zz5cIjtcbmNvbnN0IGVsbGlwc2VPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48Y2lyY2xlIGN4PScyNTYnIGN5PScyNTYnIHI9JzE5Micgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IGVsbGlwc2lzSG9yaXpvbnRhbCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PGNpcmNsZSBjeD0nMjU2JyBjeT0nMjU2JyByPSc0OCcvPjxjaXJjbGUgY3g9JzQxNicgY3k9JzI1Nicgcj0nNDgnLz48Y2lyY2xlIGN4PSc5NicgY3k9JzI1Nicgcj0nNDgnLz48L3N2Zz5cIjtcbmNvbnN0IGV5ZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PGNpcmNsZSBjeD0nMjU2JyBjeT0nMjU2JyByPSc2NCcvPjxwYXRoIGQ9J000OTAuODQgMjM4LjZjLTI2LjQ2LTQwLjkyLTYwLjc5LTc1LjY4LTk5LjI3LTEwMC41M0MzNDkgMTEwLjU1IDMwMiA5NiAyNTUuNjYgOTZjLTQyLjUyIDAtODQuMzMgMTIuMTUtMTI0LjI3IDM2LjExLTQwLjczIDI0LjQzLTc3LjYzIDYwLjEyLTEwOS42OCAxMDYuMDdhMzEuOTIgMzEuOTIgMCAwMC0uNjQgMzUuNTRjMjYuNDEgNDEuMzMgNjAuNCA3Ni4xNCA5OC4yOCAxMDAuNjVDMTYyIDQwMiAyMDcuOSA0MTYgMjU1LjY2IDQxNmM0Ni43MSAwIDkzLjgxLTE0LjQzIDEzNi4yLTQxLjcyIDM4LjQ2LTI0Ljc3IDcyLjcyLTU5LjY2IDk5LjA4LTEwMC45MmEzMi4yIDMyLjIgMCAwMC0uMS0zNC43NnpNMjU2IDM1MmE5NiA5NiAwIDExOTYtOTYgOTYuMTEgOTYuMTEgMCAwMS05NiA5NnonLz48L3N2Zz5cIjtcbmNvbnN0IGV5ZU9mZiA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTQzMiA0NDhhMTUuOTIgMTUuOTIgMCAwMS0xMS4zMS00LjY5bC0zNTItMzUyYTE2IDE2IDAgMDEyMi42Mi0yMi42MmwzNTIgMzUyQTE2IDE2IDAgMDE0MzIgNDQ4ek0yNDggMzE1Ljg1bC01MS43OS01MS43OWEyIDIgMCAwMC0zLjM5IDEuNjkgNjQuMTEgNjQuMTEgMCAwMDUzLjQ5IDUzLjQ5IDIgMiAwIDAwMS42OS0zLjM5ek0yNjQgMTk2LjE1TDMxNS44NyAyNDhhMiAyIDAgMDAzLjQtMS42OSA2NC4xMyA2NC4xMyAwIDAwLTUzLjU1LTUzLjU1IDIgMiAwIDAwLTEuNzIgMy4zOXonLz48cGF0aCBkPSdNNDkxIDI3My4zNmEzMi4yIDMyLjIgMCAwMC0uMS0zNC43NmMtMjYuNDYtNDAuOTItNjAuNzktNzUuNjgtOTkuMjctMTAwLjUzQzM0OSAxMTAuNTUgMzAyIDk2IDI1NS42OCA5NmEyMjYuNTQgMjI2LjU0IDAgMDAtNzEuODIgMTEuNzkgNCA0IDAgMDAtMS41NiA2LjYzbDQ3LjI0IDQ3LjI0YTQgNCAwIDAwMy44MiAxLjA1IDk2IDk2IDAgMDExMTYgMTE2IDQgNCAwIDAwMS4wNSAzLjgxbDY3Ljk1IDY4YTQgNCAwIDAwNS40LjI0IDM0My44MSAzNDMuODEgMCAwMDY3LjI0LTc3LjR6TTI1NiAzNTJhOTYgOTYgMCAwMS05My4zLTExOC42MyA0IDQgMCAwMC0xLjA1LTMuODFsLTY2Ljg0LTY2Ljg3YTQgNCAwIDAwLTUuNDEtLjIzYy0yNC4zOSAyMC44MS00NyA0Ni4xMy02Ny42NyA3NS43MmEzMS45MiAzMS45MiAwIDAwLS42NCAzNS41NGMyNi40MSA0MS4zMyA2MC4zOSA3Ni4xNCA5OC4yOCAxMDAuNjVDMTYyLjA2IDQwMiAyMDcuOTIgNDE2IDI1NS42OCA0MTZhMjM4LjIyIDIzOC4yMiAwIDAwNzIuNjQtMTEuNTUgNCA0IDAgMDAxLjYxLTYuNjRsLTQ3LjQ3LTQ3LjQ2YTQgNCAwIDAwLTMuODEtMS4wNUE5NiA5NiAwIDAxMjU2IDM1MnonLz48L3N2Zz5cIjtcbmNvbnN0IG1lbnVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTgwIDE2MGgzNTJNODAgMjU2aDM1Mk04MCAzNTJoMzUyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IG1lbnVTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTY0IDM4NGgzODR2LTQyLjY3SDY0em0wLTEwNi42N2gzODR2LTQyLjY2SDY0ek02NCAxMjh2NDIuNjdoMzg0VjEyOHonLz48L3N2Zz5cIjtcbmNvbnN0IHJlbW92ZU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTQwMCAyNTZIMTEyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IHJlb3JkZXJUaHJlZU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTk2IDI1NmgzMjBNOTYgMTc2aDMyME05NiAzMzZoMzIwJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IHJlb3JkZXJUd29TaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3NxdWFyZScgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0NCcgZD0nTTExOCAzMDRoMjc2TTExOCAyMDhoMjc2JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IHNlYXJjaE91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J00yMjEuMDkgNjRhMTU3LjA5IDE1Ny4wOSAwIDEwMTU3LjA5IDE1Ny4wOUExNTcuMSAxNTcuMSAwIDAwMjIxLjA5IDY0eicgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTMzOC4yOSAzMzguMjlMNDQ4IDQ0OCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBzZWFyY2hTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTQ2NCA0MjhMMzM5LjkyIDMwMy45YTE2MC40OCAxNjAuNDggMCAwMDMwLjcyLTk0LjU4QzM3MC42NCAxMjAuMzcgMjk4LjI3IDQ4IDIwOS4zMiA0OFM0OCAxMjAuMzcgNDggMjA5LjMyczcyLjM3IDE2MS4zMiAxNjEuMzIgMTYxLjMyYTE2MC40OCAxNjAuNDggMCAwMDk0LjU4LTMwLjcyTDQyOCA0NjR6TTIwOS4zMiAzMTkuNjlhMTEwLjM4IDExMC4zOCAwIDExMTEwLjM3LTExMC4zNyAxMTAuNSAxMTAuNSAwIDAxLTExMC4zNyAxMTAuMzd6Jy8+PC9zdmc+XCI7XG5cbmV4cG9ydCB7IGFycm93QmFja1NoYXJwIGFzIGEsIGNsb3NlQ2lyY2xlIGFzIGIsIGNoZXZyb25CYWNrIGFzIGMsIGNsb3NlU2hhcnAgYXMgZCwgc2VhcmNoU2hhcnAgYXMgZSwgY2hlY2ttYXJrT3V0bGluZSBhcyBmLCBlbGxpcHNlT3V0bGluZSBhcyBnLCBhcnJvd0Rvd24gYXMgaCwgY2FyZXRCYWNrU2hhcnAgYXMgaSwgcmVvcmRlclRocmVlT3V0bGluZSBhcyBqLCByZW9yZGVyVHdvU2hhcnAgYXMgaywgY2hldnJvbkRvd24gYXMgbCwgY2hldnJvbkZvcndhcmRPdXRsaW5lIGFzIG0sIGVsbGlwc2lzSG9yaXpvbnRhbCBhcyBuLCBjYXJldFVwU2hhcnAgYXMgbywgY2hldnJvbkZvcndhcmQgYXMgcCwgY2FyZXREb3duU2hhcnAgYXMgcSwgcmVtb3ZlT3V0bGluZSBhcyByLCBzZWFyY2hPdXRsaW5lIGFzIHMsIGNsb3NlIGFzIHQsIG1lbnVPdXRsaW5lIGFzIHUsIG1lbnVTaGFycCBhcyB2LCBjaGV2cm9uRXhwYW5kIGFzIHcsIGV5ZU9mZiBhcyB4LCBleWUgYXMgeSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGMgYXMgY29tcG9uZW50T25SZWFkeSB9IGZyb20gJy4vaGVscGVycy0xTzREMmI3eS5qcyc7XG5pbXBvcnQgeyB0IGFzIHByaW50UmVxdWlyZWRFbGVtZW50RXJyb3IgfSBmcm9tICcuL2luZGV4LUJfVTlDdGFZLmpzJztcblxuY29uc3QgSU9OX0NPTlRFTlRfVEFHX05BTUUgPSAnSU9OLUNPTlRFTlQnO1xuY29uc3QgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUiA9ICdpb24tY29udGVudCc7XG5jb25zdCBJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiA9ICcuaW9uLWNvbnRlbnQtc2Nyb2xsLWhvc3QnO1xuLyoqXG4gKiBTZWxlY3RvciB1c2VkIGZvciBpbXBsZW1lbnRhdGlvbnMgcmVsaWFudCBvbiBgPGlvbi1jb250ZW50PmAgZm9yIHNjcm9sbCBldmVudCBjaGFuZ2VzLlxuICpcbiAqIERldmVsb3BlcnMgc2hvdWxkIHVzZSB0aGUgYC5pb24tY29udGVudC1zY3JvbGwtaG9zdGAgc2VsZWN0b3IgdG8gdGFyZ2V0IHRoZSBlbGVtZW50IGVtaXR0aW5nXG4gKiBzY3JvbGwgZXZlbnRzLiBXaXRoIHZpcnR1YWwgc2Nyb2xsIGltcGxlbWVudGF0aW9ucyB0aGlzIHdpbGwgYmUgdGhlIGhvc3QgZWxlbWVudCBmb3JcbiAqIHRoZSBzY3JvbGwgdmlld3BvcnQuXG4gKi9cbmNvbnN0IElPTl9DT05URU5UX1NFTEVDVE9SID0gYCR7SU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUn0sICR7SU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1J9YDtcbmNvbnN0IGlzSW9uQ29udGVudCA9IChlbCkgPT4gZWwudGFnTmFtZSA9PT0gSU9OX0NPTlRFTlRfVEFHX05BTUU7XG4vKipcbiAqIFdhaXRzIGZvciB0aGUgZWxlbWVudCBob3N0IGZ1bGx5IGluaXRpYWxpemUgYmVmb3JlXG4gKiByZXR1cm5pbmcgdGhlIGlubmVyIHNjcm9sbCBlbGVtZW50LlxuICpcbiAqIEZvciBgaW9uLWNvbnRlbnRgIHRoZSBzY3JvbGwgdGFyZ2V0IHdpbGwgYmUgdGhlIHJlc3VsdFxuICogb2YgdGhlIGBnZXRTY3JvbGxFbGVtZW50YCBmdW5jdGlvbi5cbiAqXG4gKiBGb3IgY3VzdG9tIGltcGxlbWVudGF0aW9ucyBpdCB3aWxsIGJlIHRoZSBlbGVtZW50IGhvc3RcbiAqIG9yIGEgc2VsZWN0b3Igd2l0aGluIHRoZSBob3N0LCBpZiBzdXBwbGllZCB0aHJvdWdoIGBzY3JvbGxUYXJnZXRgLlxuICovXG5jb25zdCBnZXRTY3JvbGxFbGVtZW50ID0gYXN5bmMgKGVsKSA9PiB7XG4gICAgaWYgKGlzSW9uQ29udGVudChlbCkpIHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGNvbXBvbmVudE9uUmVhZHkoZWwsIHJlc29sdmUpKTtcbiAgICAgICAgcmV0dXJuIGVsLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xufTtcbi8qKlxuICogUXVlcmllcyB0aGUgZWxlbWVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3IgZm9yIElvbkNvbnRlbnQuXG4gKiBTZWUgSU9OX0NPTlRFTlRfU0VMRUNUT1IgZm9yIHRoZSBzZWxlY3RvciB1c2VkLlxuICovXG5jb25zdCBmaW5kSW9uQ29udGVudCA9IChlbCkgPT4ge1xuICAgIC8qKlxuICAgICAqIEZpcnN0IHdlIHRyeSB0byBxdWVyeSB0aGUgY3VzdG9tIHNjcm9sbCBob3N0IHNlbGVjdG9yIGluIGNhc2VzIHdoZXJlXG4gICAgICogdGhlIGltcGxlbWVudGF0aW9uIGlzIHVzaW5nIGFuIG91dGVyIGBpb24tY29udGVudGAgd2l0aCBhbiBpbm5lciBjdXN0b21cbiAgICAgKiBzY3JvbGwgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnN0IGN1c3RvbUNvbnRlbnRIb3N0ID0gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUik7XG4gICAgaWYgKGN1c3RvbUNvbnRlbnRIb3N0KSB7XG4gICAgICAgIHJldHVybiBjdXN0b21Db250ZW50SG9zdDtcbiAgICB9XG4gICAgcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3IoSU9OX0NPTlRFTlRfU0VMRUNUT1IpO1xufTtcbi8qKlxuICogUXVlcmllcyB0aGUgY2xvc2VzdCBlbGVtZW50IG1hdGNoaW5nIHRoZSBzZWxlY3RvciBmb3IgSW9uQ29udGVudC5cbiAqL1xuY29uc3QgZmluZENsb3Nlc3RJb25Db250ZW50ID0gKGVsKSA9PiB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3QoSU9OX0NPTlRFTlRfU0VMRUNUT1IpO1xufTtcbi8qKlxuICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBlbGVtZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbFRvVG9wYCB3aXRoIGEgZHVyYXRpb24uXG4gKi9cbmNvbnN0IHNjcm9sbFRvVG9wID0gKGVsLCBkdXJhdGlvbk1zKSA9PiB7XG4gICAgaWYgKGlzSW9uQ29udGVudChlbCkpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsO1xuICAgICAgICByZXR1cm4gY29udGVudC5zY3JvbGxUb1RvcChkdXJhdGlvbk1zKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbC5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnICxcbiAgICB9KSk7XG59O1xuLyoqXG4gKiBTY3JvbGxzIGJ5IGEgc3BlY2lmaWVkIFgvWSBkaXN0YW5jZSBpbiB0aGUgY29tcG9uZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbEJ5UG9pbnRgIHdpdGggYSBkdXJhdGlvbi5cbiAqL1xuY29uc3Qgc2Nyb2xsQnlQb2ludCA9IChlbCwgeCwgeSwgZHVyYXRpb25NcykgPT4ge1xuICAgIGlmIChpc0lvbkNvbnRlbnQoZWwpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlbDtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQuc2Nyb2xsQnlQb2ludCh4LCB5LCBkdXJhdGlvbk1zKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbC5zY3JvbGxCeSh7XG4gICAgICAgIHRvcDogeSxcbiAgICAgICAgbGVmdDogeCxcbiAgICAgICAgYmVoYXZpb3I6IGR1cmF0aW9uTXMgPiAwID8gJ3Ntb290aCcgOiAnYXV0bycsXG4gICAgfSkpO1xufTtcbi8qKlxuICogUHJpbnRzIGFuIGVycm9yIGluZm9ybWluZyBkZXZlbG9wZXJzIHRoYXQgYW4gaW1wbGVtZW50YXRpb24gcmVxdWlyZXMgYW4gZWxlbWVudCB0byBiZSB1c2VkXG4gKiB3aXRoaW4gZWl0aGVyIHRoZSBgaW9uLWNvbnRlbnRgIHNlbGVjdG9yIG9yIHRoZSBgLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0YCBjbGFzcy5cbiAqL1xuY29uc3QgcHJpbnRJb25Db250ZW50RXJyb3JNc2cgPSAoZWwpID0+IHtcbiAgICByZXR1cm4gcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvcihlbCwgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBTZXZlcmFsIGNvbXBvbmVudHMgaW4gSW9uaWMgbmVlZCB0byBwcmV2ZW50IHNjcm9sbGluZ1xuICogZHVyaW5nIGEgZ2VzdHVyZSAoY2FyZCBtb2RhbCwgcmFuZ2UsIGl0ZW0gc2xpZGluZywgZXRjKS5cbiAqIFVzZSB0aGlzIHV0aWxpdHkgdG8gYWNjb3VudCBmb3IgaW9uLWNvbnRlbnQgYW5kIGN1c3RvbSBjb250ZW50IGhvc3RzLlxuICovXG5jb25zdCBkaXNhYmxlQ29udGVudFNjcm9sbFkgPSAoY29udGVudEVsKSA9PiB7XG4gICAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgICAgIGNvbnN0IGlvbkNvbnRlbnQgPSBjb250ZW50RWw7XG4gICAgICAgIGNvbnN0IGluaXRpYWxTY3JvbGxZID0gaW9uQ29udGVudC5zY3JvbGxZO1xuICAgICAgICBpb25Db250ZW50LnNjcm9sbFkgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgc2hvdWxkIGJlIHBhc3NlZCBpbnRvIHJlc2V0Q29udGVudFNjcm9sbFlcbiAgICAgICAgICogc28gdGhhdCB3ZSBjYW4gcmV2ZXJ0IGlvbi1jb250ZW50J3Mgc2Nyb2xsWSB0byB0aGVcbiAgICAgICAgICogY29ycmVjdCBzdGF0ZS4gRm9yIGV4YW1wbGUsIGlmIHNjcm9sbFkgPSBmYWxzZVxuICAgICAgICAgKiBpbml0aWFsbHksIHdlIGRvIG5vdCB3YW50IHRvIGVuYWJsZSBzY3JvbGxpbmdcbiAgICAgICAgICogd2hlbiB3ZSBjYWxsIHJlc2V0Q29udGVudFNjcm9sbFkuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gaW5pdGlhbFNjcm9sbFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuY29uc3QgcmVzZXRDb250ZW50U2Nyb2xsWSA9IChjb250ZW50RWwsIGluaXRpYWxTY3JvbGxZKSA9PiB7XG4gICAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gaW5pdGlhbFNjcm9sbFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb250ZW50RWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IgYXMgSSwgZmluZElvbkNvbnRlbnQgYXMgYSwgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUiBhcyBiLCBzY3JvbGxCeVBvaW50IGFzIGMsIGRpc2FibGVDb250ZW50U2Nyb2xsWSBhcyBkLCBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgYXMgZiwgZ2V0U2Nyb2xsRWxlbWVudCBhcyBnLCBpc0lvbkNvbnRlbnQgYXMgaSwgcHJpbnRJb25Db250ZW50RXJyb3JNc2cgYXMgcCwgcmVzZXRDb250ZW50U2Nyb2xsWSBhcyByLCBzY3JvbGxUb1RvcCBhcyBzIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRDYXBhY2l0b3IgfSBmcm9tICcuL2NhcGFjaXRvci1DRkVSSWVhVS5qcyc7XG5cbnZhciBFeGNlcHRpb25Db2RlO1xuKGZ1bmN0aW9uIChFeGNlcHRpb25Db2RlKSB7XG4gICAgLyoqXG4gICAgICogQVBJIGlzIG5vdCBpbXBsZW1lbnRlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgdXN1YWxseSBtZWFucyB0aGUgQVBJIGNhbid0IGJlIHVzZWQgYmVjYXVzZSBpdCBpcyBub3QgaW1wbGVtZW50ZWQgZm9yXG4gICAgICogdGhlIGN1cnJlbnQgcGxhdGZvcm0uXG4gICAgICovXG4gICAgRXhjZXB0aW9uQ29kZVtcIlVuaW1wbGVtZW50ZWRcIl0gPSBcIlVOSU1QTEVNRU5URURcIjtcbiAgICAvKipcbiAgICAgKiBBUEkgaXMgbm90IGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWVhbnMgdGhlIEFQSSBjYW4ndCBiZSB1c2VkIHJpZ2h0IG5vdyBiZWNhdXNlOlxuICAgICAqICAgLSBpdCBpcyBjdXJyZW50bHkgbWlzc2luZyBhIHByZXJlcXVpc2l0ZSwgc3VjaCBhcyBuZXR3b3JrIGNvbm5lY3Rpdml0eVxuICAgICAqICAgLSBpdCByZXF1aXJlcyBhIHBhcnRpY3VsYXIgcGxhdGZvcm0gb3IgYnJvd3NlciB2ZXJzaW9uXG4gICAgICovXG4gICAgRXhjZXB0aW9uQ29kZVtcIlVuYXZhaWxhYmxlXCJdID0gXCJVTkFWQUlMQUJMRVwiO1xufSkoRXhjZXB0aW9uQ29kZSB8fCAoRXhjZXB0aW9uQ29kZSA9IHt9KSk7XG5cbnZhciBLZXlib2FyZFJlc2l6ZTtcbihmdW5jdGlvbiAoS2V5Ym9hcmRSZXNpemUpIHtcbiAgICAvKipcbiAgICAgKiBPbmx5IHRoZSBgYm9keWAgSFRNTCBlbGVtZW50IHdpbGwgYmUgcmVzaXplZC5cbiAgICAgKiBSZWxhdGl2ZSB1bml0cyBhcmUgbm90IGFmZmVjdGVkLCBiZWNhdXNlIHRoZSB2aWV3cG9ydCBkb2VzIG5vdCBjaGFuZ2UuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBLZXlib2FyZFJlc2l6ZVtcIkJvZHlcIl0gPSBcImJvZHlcIjtcbiAgICAvKipcbiAgICAgKiBPbmx5IHRoZSBgaW9uLWFwcGAgSFRNTCBlbGVtZW50IHdpbGwgYmUgcmVzaXplZC5cbiAgICAgKiBVc2UgaXQgb25seSBmb3IgSW9uaWMgRnJhbWV3b3JrIGFwcHMuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBLZXlib2FyZFJlc2l6ZVtcIklvbmljXCJdID0gXCJpb25pY1wiO1xuICAgIC8qKlxuICAgICAqIFRoZSB3aG9sZSBuYXRpdmUgV2ViIFZpZXcgd2lsbCBiZSByZXNpemVkIHdoZW4gdGhlIGtleWJvYXJkIHNob3dzL2hpZGVzLlxuICAgICAqIFRoaXMgYWZmZWN0cyB0aGUgYHZoYCByZWxhdGl2ZSB1bml0LlxuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgS2V5Ym9hcmRSZXNpemVbXCJOYXRpdmVcIl0gPSBcIm5hdGl2ZVwiO1xuICAgIC8qKlxuICAgICAqIE5laXRoZXIgdGhlIGFwcCBub3IgdGhlIFdlYiBWaWV3IGFyZSByZXNpemVkLlxuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgS2V5Ym9hcmRSZXNpemVbXCJOb25lXCJdID0gXCJub25lXCI7XG59KShLZXlib2FyZFJlc2l6ZSB8fCAoS2V5Ym9hcmRSZXNpemUgPSB7fSkpO1xuY29uc3QgS2V5Ym9hcmQgPSB7XG4gICAgZ2V0RW5naW5lKCkge1xuICAgICAgICBjb25zdCBjYXBhY2l0b3IgPSBnZXRDYXBhY2l0b3IoKTtcbiAgICAgICAgaWYgKGNhcGFjaXRvciA9PT0gbnVsbCB8fCBjYXBhY2l0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcGFjaXRvci5pc1BsdWdpbkF2YWlsYWJsZSgnS2V5Ym9hcmQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhcGFjaXRvci5QbHVnaW5zLktleWJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBnZXRSZXNpemVNb2RlKCkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgICAgICBpZiAoIShlbmdpbmUgPT09IG51bGwgfHwgZW5naW5lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbmdpbmUuZ2V0UmVzaXplTW9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5naW5lLmdldFJlc2l6ZU1vZGUoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gRXhjZXB0aW9uQ29kZS5VbmltcGxlbWVudGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgLy8gd2UgdHJlYXQgaXQgdGhlIHNhbWUgYXMgaWYgdGhlIHBsdWdpbiBpcyBub3QgYXZhaWxhYmxlLlxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgS2V5Ym9hcmQgYXMgSywgS2V5Ym9hcmRSZXNpemUgYXMgYSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHcgYXMgd2luLCBkIGFzIGRvYyB9IGZyb20gJy4vaW5kZXgtWmpQNENqZVouanMnO1xuaW1wb3J0IHsgSyBhcyBLZXlib2FyZCwgYSBhcyBLZXlib2FyZFJlc2l6ZSB9IGZyb20gJy4va2V5Ym9hcmQtQ1V3NGVrVnkuanMnO1xuXG4vKipcbiAqIFRoZSBlbGVtZW50IHRoYXQgcmVzaXplcyB3aGVuIHRoZSBrZXlib2FyZCBvcGVuc1xuICogaXMgZ29pbmcgdG8gZGVwZW5kIG9uIHRoZSByZXNpemUgbW9kZVxuICogd2hpY2ggaXMgd2h5IHdlIGNoZWNrIHRoYXQgaGVyZS5cbiAqL1xuY29uc3QgZ2V0UmVzaXplQ29udGFpbmVyID0gKHJlc2l6ZU1vZGUpID0+IHtcbiAgICAvKipcbiAgICAgKiBJZiBkb2MgaXMgdW5kZWZpbmVkIHRoZW4gd2UgYXJlXG4gICAgICogaW4gYW4gU1NSIGVudmlyb25tZW50LCBzbyB0aGUga2V5Ym9hcmRcbiAgICAgKiBhZGp1c3RtZW50IGRvZXMgbm90IGFwcGx5LlxuICAgICAqIElmIHRoZSB3ZWJ2aWV3IGRvZXMgbm90IHJlc2l6ZSB0aGVuIHRoZXJlXG4gICAgICogaXMgbm8gY29udGFpbmVyIHRvIHJlc2l6ZS5cbiAgICAgKi9cbiAgICBpZiAoZG9jID09PSB1bmRlZmluZWQgfHwgcmVzaXplTW9kZSA9PT0gS2V5Ym9hcmRSZXNpemUuTm9uZSB8fCByZXNpemVNb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSB0aHJlZSByZW1haW5pbmcgcmVzaXplIG1vZGVzOiBOYXRpdmUsIElvbmljLCBhbmQgQm9keVxuICAgICAqIGFsbCBjYXVzZSBgaW9uLWFwcGAgdG8gcmVzaXplLCBzbyB3ZSBjYW4gbGlzdGVuIGZvciBjaGFuZ2VzXG4gICAgICogb24gdGhhdC4gSW4gdGhlIGV2ZW50IGBpb24tYXBwYCBpcyBub3QgYXZhaWxhYmxlIHRoZW5cbiAgICAgKiB3ZSBjYW4gZmFsbCBiYWNrIHRvIGBib2R5YC5cbiAgICAgKi9cbiAgICBjb25zdCBpb25BcHAgPSBkb2MucXVlcnlTZWxlY3RvcignaW9uLWFwcCcpO1xuICAgIHJldHVybiBpb25BcHAgIT09IG51bGwgJiYgaW9uQXBwICE9PSB2b2lkIDAgPyBpb25BcHAgOiBkb2MuYm9keTtcbn07XG4vKipcbiAqIEdldCB0aGUgaGVpZ2h0IG9mIGlvbi1hcHAgb3IgYm9keS5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgZGV0ZXJtaW5pbmcgaWYgdGhlIHdlYnZpZXdcbiAqIGhhcyByZXNpemVkIGJlZm9yZSB0aGUga2V5Ym9hcmQgY2xvc2VkLlxuICogKi9cbmNvbnN0IGdldFJlc2l6ZUNvbnRhaW5lckhlaWdodCA9IChyZXNpemVNb2RlKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGdldFJlc2l6ZUNvbnRhaW5lcihyZXNpemVNb2RlKTtcbiAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCA/IDAgOiBjb250YWluZXJFbGVtZW50LmNsaWVudEhlaWdodDtcbn07XG4vKipcbiAqIENyZWF0ZXMgYSBjb250cm9sbGVyIHRoYXQgdHJhY2tzIGFuZCByZWFjdHMgdG8gb3BlbmluZyBvciBjbG9zaW5nIHRoZSBrZXlib2FyZC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSBrZXlib2FyZENoYW5nZUNhbGxiYWNrIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBrZXlib2FyZCBvcGVucyBvciBjbG9zZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciA9IGFzeW5jIChrZXlib2FyZENoYW5nZUNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGtleWJvYXJkV2lsbFNob3dIYW5kbGVyO1xuICAgIGxldCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcjtcbiAgICBsZXQga2V5Ym9hcmRWaXNpYmxlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgbGV0cyB1cyBkZXRlcm1pbmUgaWYgdGhlIHdlYnZpZXcgY29udGVudFxuICAgICAqIGhhcyByZXNpemVkIGFzIGEgcmVzdWx0IG9mIHRoZSBrZXlib2FyZC5cbiAgICAgKi9cbiAgICBsZXQgaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodDtcbiAgICBjb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNpemVPcHRpb25zID0gYXdhaXQgS2V5Ym9hcmQuZ2V0UmVzaXplTW9kZSgpO1xuICAgICAgICBjb25zdCByZXNpemVNb2RlID0gcmVzaXplT3B0aW9ucyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVzaXplT3B0aW9ucy5tb2RlO1xuICAgICAgICBrZXlib2FyZFdpbGxTaG93SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2UgbmVlZCB0byBjb21wdXRlIGluaXRpYWxSZXNpemVDb250YWluZXJIZWlnaHQgcmlnaHQgYmVmb3JlXG4gICAgICAgICAgICAgKiB0aGUga2V5Ym9hcmQgb3BlbnMgdG8gZ3VhcmFudGVlIHRoZSByZXNpemUgY29udGFpbmVyIGlzIHZpc2libGUuXG4gICAgICAgICAgICAgKiBUaGUgcmVzaXplIGNvbnRhaW5lciBtYXkgbm90IGJlIHZpc2libGUgaWYgd2UgY29tcHV0ZSB0aGlzXG4gICAgICAgICAgICAgKiBhcyBzb29uIGFzIHRoZSBrZXlib2FyZCBjb250cm9sbGVyIGlzIGNyZWF0ZWQuXG4gICAgICAgICAgICAgKiBXZSBzaG91bGQgb25seSBuZWVkIHRvIGRvIHRoaXMgb25jZSB0byBhdm9pZCBhZGRpdGlvbmFsIGNsaWVudEhlaWdodFxuICAgICAgICAgICAgICogY29tcHV0YXRpb25zLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodCA9IGdldFJlc2l6ZUNvbnRhaW5lckhlaWdodChyZXNpemVNb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleWJvYXJkVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBmaXJlQ2hhbmdlQ2FsbGJhY2soa2V5Ym9hcmRWaXNpYmxlLCByZXNpemVNb2RlKTtcbiAgICAgICAgfTtcbiAgICAgICAga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBrZXlib2FyZFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGZpcmVDaGFuZ2VDYWxsYmFjayhrZXlib2FyZFZpc2libGUsIHJlc2l6ZU1vZGUpO1xuICAgICAgICB9O1xuICAgICAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsU2hvdycsIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyKTtcbiAgICAgICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkV2lsbEhpZGUnLCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcik7XG4gICAgfTtcbiAgICBjb25zdCBmaXJlQ2hhbmdlQ2FsbGJhY2sgPSAoc3RhdGUsIHJlc2l6ZU1vZGUpID0+IHtcbiAgICAgICAgaWYgKGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIGtleWJvYXJkQ2hhbmdlQ2FsbGJhY2soc3RhdGUsIGNyZWF0ZVJlc2l6ZVByb21pc2VJZk5lZWRlZChyZXNpemVNb2RlKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvZGUgcmVzcG9uZGluZyB0byBrZXlib2FyZCBsaWZlY3ljbGVzIG1heSBuZWVkXG4gICAgICogdG8gc2hvdy9oaWRlIGNvbnRlbnQgb25jZSB0aGUgd2VidmlldyBoYXNcbiAgICAgKiByZXNpemVkIGFzIGEgcmVzdWx0IG9mIHRoZSBrZXlib2FyZCBzaG93aW5nL2hpZGluZy5cbiAgICAgKiBjcmVhdGVSZXNpemVQcm9taXNlSWZOZWVkZWQgcHJvdmlkZXMgYSB3YXkgZm9yIGNvZGUgdG8gd2FpdCBmb3IgdGhlXG4gICAgICogcmVzaXplIGV2ZW50IHRoYXQgd2FzIHRyaWdnZXJlZCBhcyBhIHJlc3VsdCBvZiB0aGUga2V5Ym9hcmQuXG4gICAgICovXG4gICAgY29uc3QgY3JlYXRlUmVzaXplUHJvbWlzZUlmTmVlZGVkID0gKHJlc2l6ZU1vZGUpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgd2UgYXJlIGluIGFuIFNTUiBlbnZpcm9ubWVudCB0aGVuIHRoZXJlIGlzXG4gICAgICAgICAqIG5vIHdpbmRvdyB0byByZXNpemUuIEFkZGl0aW9uYWxseSwgaWYgdGhlcmVcbiAgICAgICAgICogaXMgbm8gcmVzaXplIG1vZGUgb3IgdGhlIHJlc2l6ZSBtb2RlIGlzIFwiTm9uZVwiXG4gICAgICAgICAqIHRoZW4gaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodCB3aWxsIGJlIDBcbiAgICAgICAgICovXG4gICAgICAgIGluaXRpYWxSZXNpemVDb250YWluZXJIZWlnaHQgPT09IDAgfHxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgdGhlIGtleWJvYXJkIGlzIGNsb3NlZCBiZWZvcmUgdGhlIHdlYnZpZXcgcmVzaXplcyBpbml0aWFsbHlcbiAgICAgICAgICAgICAqIHRoZW4gdGhlIHdlYnZpZXcgd2lsbCBuZXZlciByZXNpemUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluaXRpYWxSZXNpemVDb250YWluZXJIZWlnaHQgPT09IGdldFJlc2l6ZUNvbnRhaW5lckhlaWdodChyZXNpemVNb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIHJlc2l6ZSBjb250YWluZXIgc28gd2UgY2FuXG4gICAgICAgICAqIGF0dGFjaCB0aGUgUmVzaXplT2JzZXJ2ZXIgYmVsb3cgdG9cbiAgICAgICAgICogdGhlIGNvcnJlY3QgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBnZXRSZXNpemVDb250YWluZXIocmVzaXplTW9kZSk7XG4gICAgICAgIGlmIChjb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvbWUgcGFydCBvZiB0aGUgd2ViIGNvbnRlbnQgc2hvdWxkIHJlc2l6ZSxcbiAgICAgICAgICogYW5kIHdlIG5lZWQgdG8gbGlzdGVuIGZvciBhIHJlc2l6ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQXMgcGVyIHRoZSBzcGVjLCB0aGUgUmVzaXplT2JzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgKiB3aWxsIGZpcmUgd2hlbiBvYnNlcnZhdGlvbiBzdGFydHMgaWZcbiAgICAgICAgICAgICAgICAgKiB0aGUgb2JzZXJ2ZWQgZWxlbWVudCBpcyByZW5kZXJlZCBhbmQgZG9lcyBub3RcbiAgICAgICAgICAgICAgICAgKiBoYXZlIGEgc2l6ZSBvZiAwIHggMC4gSG93ZXZlciwgdGhlIHdhdGNoZWQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAqIG1heSBvciBtYXkgbm90IGhhdmUgcmVzaXplZCBieSB0aGUgdGltZSB0aGlzIGZpcnN0XG4gICAgICAgICAgICAgICAgICogY2FsbGJhY2sgaXMgZmlyZWQuIEFzIGEgcmVzdWx0LCB3ZSBuZWVkIHRvIGNoZWNrXG4gICAgICAgICAgICAgICAgICogdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgKiBodHRwczovL3d3dy53My5vcmcvVFIvcmVzaXplLW9ic2VydmVyLyNpbnRyb1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJFbGVtZW50LmNsaWVudEhlaWdodCA9PT0gaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogVGhlIHJlc2l6ZSBoYXBwZW5lZCwgc28gc3RvcCBsaXN0ZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICogZm9yIHJlc2l6ZSBvbiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICByby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbiBDYXBhY2l0b3IgdGhlcmUgY2FuIGJlIGRlbGF5IGJldHdlZW4gd2hlbiB0aGUgd2luZG93XG4gICAgICAgICAgICAgKiByZXNpemVzIGFuZCB3aGVuIHRoZSBjb250YWluZXIgZWxlbWVudCByZXNpemVzLCBzbyB3ZSBjYW5ub3RcbiAgICAgICAgICAgICAqIHJlbHkgb24gYSAncmVzaXplJyBldmVudCBsaXN0ZW5lciBvbiB0aGUgd2luZG93LlxuICAgICAgICAgICAgICogSW5zdGVhZCwgd2UgbmVlZCB0byBkZXRlcm1pbmUgd2hlbiB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICAgKiBlbGVtZW50IHJlc2l6ZXMgdXNpbmcgYSBSZXNpemVPYnNlcnZlci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgICAgICAgICAgcm8ub2JzZXJ2ZShjb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsU2hvdycsIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyKTtcbiAgICAgICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkV2lsbEhpZGUnLCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcik7XG4gICAgICAgIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyID0ga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBjb25zdCBpc0tleWJvYXJkVmlzaWJsZSA9ICgpID0+IGtleWJvYXJkVmlzaWJsZTtcbiAgICBhd2FpdCBpbml0KCk7XG4gICAgcmV0dXJuIHsgaW5pdCwgZGVzdHJveSwgaXNLZXlib2FyZFZpc2libGUgfTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciBhcyBjIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgSyBhcyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQtQ1V3NGVrVnkuanMnO1xuaW1wb3J0ICcuL2NhcGFjaXRvci1DRkVSSWVhVS5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtWmpQNENqZVouanMnO1xuXG5jb25zdCBLRVlCT0FSRF9ESURfT1BFTiA9ICdpb25LZXlib2FyZERpZFNob3cnO1xuY29uc3QgS0VZQk9BUkRfRElEX0NMT1NFID0gJ2lvbktleWJvYXJkRGlkSGlkZSc7XG5jb25zdCBLRVlCT0FSRF9USFJFU0hPTEQgPSAxNTA7XG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xubGV0IHByZXZpb3VzVmlzdWFsVmlld3BvcnQgPSB7fTtcbmxldCBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSB7fTtcbmxldCBrZXlib2FyZE9wZW4gPSBmYWxzZTtcbi8qKlxuICogVGhpcyBpcyBvbmx5IHVzZWQgZm9yIHRlc3RzXG4gKi9cbmNvbnN0IHJlc2V0S2V5Ym9hcmRBc3Npc3QgPSAoKSA9PiB7XG4gICAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydCA9IHt9O1xuICAgIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IHt9O1xuICAgIGtleWJvYXJkT3BlbiA9IGZhbHNlO1xufTtcbmNvbnN0IHN0YXJ0S2V5Ym9hcmRBc3Npc3QgPSAod2luKSA9PiB7XG4gICAgY29uc3QgbmF0aXZlRW5naW5lID0gS2V5Ym9hcmQuZ2V0RW5naW5lKCk7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIG5hdGl2ZSBrZXlib2FyZCBwbHVnaW4gaXMgYXZhaWxhYmxlXG4gICAgICogdGhlbiB3ZSBhcmUgcnVubmluZyBpbiBhIG5hdGl2ZSBlbnZpcm9ubWVudC4gQXMgYSByZXN1bHRcbiAgICAgKiB3ZSBzaG91bGQgb25seSBsaXN0ZW4gb24gdGhlIG5hdGl2ZSBldmVudHMgaW5zdGVhZCBvZlxuICAgICAqIHVzaW5nIHRoZSBWaXN1YWwgVmlld3BvcnQgYXMgdGhlIElvbmljIHdlYnZpZXcgbWFuaXB1bGF0ZXNcbiAgICAgKiBob3cgaXQgcmVzaXplcyBzdWNoIHRoYXQgdGhlIFZpc3VhbCBWaWV3cG9ydCBBUEkgaXMgbm90XG4gICAgICogcmVsaWFibGUgaGVyZS5cbiAgICAgKi9cbiAgICBpZiAobmF0aXZlRW5naW5lKSB7XG4gICAgICAgIHN0YXJ0TmF0aXZlTGlzdGVuZXJzKHdpbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIXdpbi52aXN1YWxWaWV3cG9ydCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IGNvcHlWaXN1YWxWaWV3cG9ydCh3aW4udmlzdWFsVmlld3BvcnQpO1xuICAgICAgICB3aW4udmlzdWFsVmlld3BvcnQub25yZXNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0cmFja1ZpZXdwb3J0Q2hhbmdlcyh3aW4pO1xuICAgICAgICAgICAgaWYgKGtleWJvYXJkRGlkT3BlbigpIHx8IGtleWJvYXJkRGlkUmVzaXplKHdpbikpIHtcbiAgICAgICAgICAgICAgICBzZXRLZXlib2FyZE9wZW4od2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleWJvYXJkRGlkQ2xvc2Uod2luKSkge1xuICAgICAgICAgICAgICAgIHNldEtleWJvYXJkQ2xvc2Uod2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59O1xuLyoqXG4gKiBMaXN0ZW4gZm9yIGV2ZW50cyBmaXJlZCBieSBuYXRpdmUga2V5Ym9hcmQgcGx1Z2luXG4gKiBpbiBDYXBhY2l0b3IvQ29yZG92YSBzbyBkZXZzIG9ubHkgbmVlZCB0byBsaXN0ZW5cbiAqIGluIG9uZSBwbGFjZS5cbiAqL1xuY29uc3Qgc3RhcnROYXRpdmVMaXN0ZW5lcnMgPSAod2luKSA9PiB7XG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkRGlkU2hvdycsIChldikgPT4gc2V0S2V5Ym9hcmRPcGVuKHdpbiwgZXYpKTtcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmREaWRIaWRlJywgKCkgPT4gc2V0S2V5Ym9hcmRDbG9zZSh3aW4pKTtcbn07XG5jb25zdCBzZXRLZXlib2FyZE9wZW4gPSAod2luLCBldikgPT4ge1xuICAgIGZpcmVLZXlib2FyZE9wZW5FdmVudCh3aW4sIGV2KTtcbiAgICBrZXlib2FyZE9wZW4gPSB0cnVlO1xufTtcbmNvbnN0IHNldEtleWJvYXJkQ2xvc2UgPSAod2luKSA9PiB7XG4gICAgZmlyZUtleWJvYXJkQ2xvc2VFdmVudCh3aW4pO1xuICAgIGtleWJvYXJkT3BlbiA9IGZhbHNlO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBrZXlib2FyZE9wZW5gIGZsYWcgaXMgbm90XG4gKiBzZXQsIHRoZSBwcmV2aW91cyB2aXN1YWwgdmlld3BvcnQgd2lkdGggZXF1YWwgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCB3aWR0aCwgYW5kIGlmIHRoZSBzY2FsZWQgZGlmZmVyZW5jZVxuICogb2YgdGhlIHByZXZpb3VzIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgbWludXMgdGhlIGN1cnJlbnRcbiAqIHZpc3VhbCB2aWV3cG9ydCBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIEtFWUJPQVJEX1RIUkVTSE9MRFxuICpcbiAqIFdlIG5lZWQgdG8gYmUgYWJsZSB0byBhY2NvbW1vZGF0ZSB1c2VycyB3aG8gaGF2ZSB6b29taW5nXG4gKiBlbmFibGVkIGluIHRoZWlyIGJyb3dzZXIgKG9yIGhhdmUgem9vbWVkIGluIG1hbnVhbGx5KSB3aGljaFxuICogaXMgd2h5IHdlIHRha2UgaW50byBhY2NvdW50IHRoZSBjdXJyZW50IHZpc3VhbCB2aWV3cG9ydCdzXG4gKiBzY2FsZSB2YWx1ZS5cbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRPcGVuID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPSAocHJldmlvdXNWaXN1YWxWaWV3cG9ydC5oZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0KSAqIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5zY2FsZTtcbiAgICByZXR1cm4gKCFrZXlib2FyZE9wZW4gJiZcbiAgICAgICAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydC53aWR0aCA9PT0gY3VycmVudFZpc3VhbFZpZXdwb3J0LndpZHRoICYmXG4gICAgICAgIHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPiBLRVlCT0FSRF9USFJFU0hPTEQpO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sXG4gKiBidXQgdGhlIGtleWJvYXJkIGRpZCBub3QgY2xvc2VcbiAqL1xuY29uc3Qga2V5Ym9hcmREaWRSZXNpemUgPSAod2luKSA9PiB7XG4gICAgcmV0dXJuIGtleWJvYXJkT3BlbiAmJiAha2V5Ym9hcmREaWRDbG9zZSh3aW4pO1xufTtcbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBrZXlib2FyZCB3YXMgY2xvc2VkXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYGtleWJvYXJkT3BlbmAgZmxhZyBpcyBzZXQgYW5kXG4gKiB0aGUgY3VycmVudCB2aXN1YWwgdmlld3BvcnQgaGVpZ2h0IGVxdWFscyB0aGVcbiAqIGxheW91dCB2aWV3cG9ydCBoZWlnaHQuXG4gKi9cbmNvbnN0IGtleWJvYXJkRGlkQ2xvc2UgPSAod2luKSA9PiB7XG4gICAgcmV0dXJuIGtleWJvYXJkT3BlbiAmJiBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0ID09PSB3aW4uaW5uZXJIZWlnaHQ7XG59O1xuLyoqXG4gKiBEaXNwYXRjaCBhIGtleWJvYXJkIG9wZW4gZXZlbnRcbiAqL1xuY29uc3QgZmlyZUtleWJvYXJkT3BlbkV2ZW50ID0gKHdpbiwgbmF0aXZlRXYpID0+IHtcbiAgICBjb25zdCBrZXlib2FyZEhlaWdodCA9IG5hdGl2ZUV2ID8gbmF0aXZlRXYua2V5Ym9hcmRIZWlnaHQgOiB3aW4uaW5uZXJIZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KEtFWUJPQVJEX0RJRF9PUEVOLCB7XG4gICAgICAgIGRldGFpbDogeyBrZXlib2FyZEhlaWdodCB9LFxuICAgIH0pO1xuICAgIHdpbi5kaXNwYXRjaEV2ZW50KGV2KTtcbn07XG4vKipcbiAqIERpc3BhdGNoIGEga2V5Ym9hcmQgY2xvc2UgZXZlbnRcbiAqL1xuY29uc3QgZmlyZUtleWJvYXJkQ2xvc2VFdmVudCA9ICh3aW4pID0+IHtcbiAgICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChLRVlCT0FSRF9ESURfQ0xPU0UpO1xuICAgIHdpbi5kaXNwYXRjaEV2ZW50KGV2KTtcbn07XG4vKipcbiAqIEdpdmVuIGEgd2luZG93IG9iamVjdCwgY3JlYXRlIGEgY29weSBvZlxuICogdGhlIGN1cnJlbnQgdmlzdWFsIGFuZCBsYXlvdXQgdmlld3BvcnQgc3RhdGVzXG4gKiB3aGlsZSBhbHNvIHByZXNlcnZpbmcgdGhlIHByZXZpb3VzIHZpc3VhbCBhbmRcbiAqIGxheW91dCB2aWV3cG9ydCBzdGF0ZXNcbiAqL1xuY29uc3QgdHJhY2tWaWV3cG9ydENoYW5nZXMgPSAod2luKSA9PiB7XG4gICAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCk7XG4gICAgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0gY29weVZpc3VhbFZpZXdwb3J0KHdpbi52aXN1YWxWaWV3cG9ydCk7XG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIHRoZSB2aXN1YWwgdmlld3BvcnRcbiAqIGF0IGEgZ2l2ZW4gc3RhdGVcbiAqL1xuY29uc3QgY29weVZpc3VhbFZpZXdwb3J0ID0gKHZpc3VhbFZpZXdwb3J0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IE1hdGgucm91bmQodmlzdWFsVmlld3BvcnQud2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQodmlzdWFsVmlld3BvcnQuaGVpZ2h0KSxcbiAgICAgICAgb2Zmc2V0VG9wOiB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AsXG4gICAgICAgIG9mZnNldExlZnQ6IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQsXG4gICAgICAgIHBhZ2VUb3A6IHZpc3VhbFZpZXdwb3J0LnBhZ2VUb3AsXG4gICAgICAgIHBhZ2VMZWZ0OiB2aXN1YWxWaWV3cG9ydC5wYWdlTGVmdCxcbiAgICAgICAgc2NhbGU6IHZpc3VhbFZpZXdwb3J0LnNjYWxlLFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBLRVlCT0FSRF9ESURfQ0xPU0UsIEtFWUJPQVJEX0RJRF9PUEVOLCBjb3B5VmlzdWFsVmlld3BvcnQsIGtleWJvYXJkRGlkQ2xvc2UsIGtleWJvYXJkRGlkT3Blbiwga2V5Ym9hcmREaWRSZXNpemUsIHJlc2V0S2V5Ym9hcmRBc3Npc3QsIHNldEtleWJvYXJkQ2xvc2UsIHNldEtleWJvYXJkT3Blbiwgc3RhcnRLZXlib2FyZEFzc2lzdCwgdHJhY2tWaWV3cG9ydENoYW5nZXMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4vKipcbiAqIENyZWF0ZXMgYSBsb2NrIGNvbnRyb2xsZXIuXG4gKlxuICogQ2xhaW1pbmcgYSBsb2NrIG1lYW5zIHRoYXQgbm90aGluZyBlbHNlIGNhbiBhY3F1aXJlIHRoZSBsb2NrIHVudGlsIGl0IGlzIHJlbGVhc2VkLlxuICogVGhpcyBjYW4gbW9tZW50YXJpbHkgcHJldmVudCBleGVjdXRpb24gb2YgY29kZSB0aGF0IG5lZWRzIHRvIHdhaXQgZm9yIHRoZSBlYXJsaWVyIGNvZGUgdG8gZmluaXNoLlxuICogRm9yIGV4YW1wbGUsIHRoaXMgY2FuIGJlIHVzZWQgdG8gcHJldmVudCBtdWx0aXBsZSB0cmFuc2l0aW9ucyBmcm9tIG9jY3VycmluZyBhdCB0aGUgc2FtZSB0aW1lLlxuICovXG5jb25zdCBjcmVhdGVMb2NrQ29udHJvbGxlciA9ICgpID0+IHtcbiAgICBsZXQgd2FpdFByb21pc2U7XG4gICAgLyoqXG4gICAgICogV2hlbiBsb2NrKCkgaXMgY2FsbGVkLCB0aGUgbG9jayBpcyBjbGFpbWVkLlxuICAgICAqIE9uY2UgYSBsb2NrIGhhcyBiZWVuIGNsYWltZWQsIGl0IGNhbm5vdCBiZSBjbGFpbWVkIGFnYWluIHVudGlsIGl0IGlzIHJlbGVhc2VkLlxuICAgICAqIFdoZW4gdGhpcyBmdW5jdGlvbiBnZXRzIHJlc29sdmVkLCB0aGUgbG9jayBpcyByZWxlYXNlZCwgYWxsb3dpbmcgaXQgdG8gYmUgY2xhaW1lZCBhZ2Fpbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIGBgYHRzeFxuICAgICAqIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9ja0NvbnRyb2xsZXIubG9jaygpO1xuICAgICAqIC8vIGRvIG90aGVyIHN0dWZmXG4gICAgICogdW5sb2NrKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgY29uc3QgbG9jayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcCA9IHdhaXRQcm9taXNlO1xuICAgICAgICBsZXQgcmVzb2x2ZTtcbiAgICAgICAgd2FpdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocikgPT4gKHJlc29sdmUgPSByKSk7XG4gICAgICAgIGlmIChwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmU7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2NrLFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMb2NrQ29udHJvbGxlciBhcyBjIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3Qgc3Bpbm5lcnMgPSB7XG4gICAgYnViYmxlczoge1xuICAgICAgICBkdXI6IDEwMDAsXG4gICAgICAgIGNpcmNsZXM6IDksXG4gICAgICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJICogaW5kZXgpIC8gdG90YWw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IDUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHszMiAqIE1hdGguc2luKGFuZ2xlKX0lYCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7MzIgKiBNYXRoLmNvcyhhbmdsZSl9JWAsXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNpcmNsZXM6IHtcbiAgICAgICAgZHVyOiAxMDAwLFxuICAgICAgICBjaXJjbGVzOiA4LFxuICAgICAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gaW5kZXggLyB0b3RhbDtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7ZHVyICogc3RlcCAtIGR1cn1tc2A7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLlBJICogc3RlcDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcjogNSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IGAkezMyICogTWF0aC5zaW4oYW5nbGUpfSVgLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHszMiAqIE1hdGguY29zKGFuZ2xlKX0lYCxcbiAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2lyY3VsYXI6IHtcbiAgICAgICAgZHVyOiAxNDAwLFxuICAgICAgICBlbG1EdXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgY2lyY2xlczogMSxcbiAgICAgICAgZm46ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcjogMjAsXG4gICAgICAgICAgICAgICAgY3g6IDQ4LFxuICAgICAgICAgICAgICAgIGN5OiA0OCxcbiAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgdmlld0JveDogJzI0IDI0IDQ4IDQ4JyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNyZXNjZW50OiB7XG4gICAgICAgIGR1cjogNzUwLFxuICAgICAgICBjaXJjbGVzOiAxLFxuICAgICAgICBmbjogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByOiAyNixcbiAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgZG90czoge1xuICAgICAgICBkdXI6IDc1MCxcbiAgICAgICAgY2lyY2xlczogMyxcbiAgICAgICAgZm46IChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSAtKDExMCAqIGluZGV4KSArICdtcyc7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IDYsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7MzIgLSAzMiAqIGluZGV4fSVgLFxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBsaW5lczoge1xuICAgICAgICBkdXI6IDEwMDAsXG4gICAgICAgIGxpbmVzOiA4LFxuICAgICAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7KDM2MCAvIHRvdGFsKSAqIGluZGV4ICsgKGluZGV4IDwgdG90YWwgLyAyID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHkxOiAxNCxcbiAgICAgICAgICAgICAgICB5MjogMjYsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgICdsaW5lcy1zbWFsbCc6IHtcbiAgICAgICAgZHVyOiAxMDAwLFxuICAgICAgICBsaW5lczogOCxcbiAgICAgICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkeygzNjAgLyB0b3RhbCkgKiBpbmRleCArIChpbmRleCA8IHRvdGFsIC8gMiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB5MTogMTIsXG4gICAgICAgICAgICAgICAgeTI6IDIwLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAnbGluZXMtc2hhcnAnOiB7XG4gICAgICAgIGR1cjogMTAwMCxcbiAgICAgICAgbGluZXM6IDEyLFxuICAgICAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7MzAgKiBpbmRleCArIChpbmRleCA8IDYgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeTE6IDE3LFxuICAgICAgICAgICAgICAgIHkyOiAyOSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgJ2xpbmVzLXNoYXJwLXNtYWxsJzoge1xuICAgICAgICBkdXI6IDEwMDAsXG4gICAgICAgIGxpbmVzOiAxMixcbiAgICAgICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkezMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHkxOiAxMixcbiAgICAgICAgICAgICAgICB5MjogMjAsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmNvbnN0IFNQSU5ORVJTID0gc3Bpbm5lcnM7XG5cbmV4cG9ydCB7IFNQSU5ORVJTIGFzIFMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBlIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLTFPNEQyYjd5LmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1DNTNmZWFnRC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC1DZmdCRjFTRS5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtQl9VOUN0YVkuanMnO1xuaW1wb3J0ICcuL2dlc3R1cmUtY29udHJvbGxlci1CVEVPczFhdC5qcyc7XG5cbmNvbnN0IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgPSAoZWwsIGNhblN0YXJ0SGFuZGxlciwgb25TdGFydEhhbmRsZXIsIG9uTW92ZUhhbmRsZXIsIG9uRW5kSGFuZGxlcikgPT4ge1xuICAgIGNvbnN0IHdpbiA9IGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgbGV0IHJ0bCA9IGlzUlRMKGVsKTtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgYSBnZXN0dXJlIGlzIG5lYXIgdGhlIGVkZ2VcbiAgICAgKiBvZiB0aGUgc2NyZWVuLiBJZiB0cnVlLCB0aGVuIHRoZSBzd2lwZVxuICAgICAqIHRvIGdvIGJhY2sgZ2VzdHVyZSBzaG91bGQgcHJvY2VlZC5cbiAgICAgKi9cbiAgICBjb25zdCBpc0F0RWRnZSA9IChkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gNTA7XG4gICAgICAgIGNvbnN0IHsgc3RhcnRYIH0gPSBkZXRhaWw7XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFydFggPj0gd2luLmlubmVyV2lkdGggLSB0aHJlc2hvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXJ0WCA8PSB0aHJlc2hvbGQ7XG4gICAgfTtcbiAgICBjb25zdCBnZXREZWx0YVggPSAoZGV0YWlsKSA9PiB7XG4gICAgICAgIHJldHVybiBydGwgPyAtZGV0YWlsLmRlbHRhWCA6IGRldGFpbC5kZWx0YVg7XG4gICAgfTtcbiAgICBjb25zdCBnZXRWZWxvY2l0eVggPSAoZGV0YWlsKSA9PiB7XG4gICAgICAgIHJldHVybiBydGwgPyAtZGV0YWlsLnZlbG9jaXR5WCA6IGRldGFpbC52ZWxvY2l0eVg7XG4gICAgfTtcbiAgICBjb25zdCBjYW5TdGFydCA9IChkZXRhaWwpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1c2VyJ3MgbG9jYWxlIGNhbiBjaGFuZ2UgbWlkLXNlc3Npb24sXG4gICAgICAgICAqIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGV4dCBkaXJlY3Rpb24gYXRcbiAgICAgICAgICogdGhlIGJlZ2lubmluZyBvZiBldmVyeSBnZXN0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgcnRsID0gaXNSVEwoZWwpO1xuICAgICAgICByZXR1cm4gaXNBdEVkZ2UoZGV0YWlsKSAmJiBjYW5TdGFydEhhbmRsZXIoKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTW92ZSA9IChkZXRhaWwpID0+IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbidzIHByb2dyZXNzXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2luLmlubmVyV2lkdGg7XG4gICAgICAgIG9uTW92ZUhhbmRsZXIoc3RlcFZhbHVlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uRW5kID0gKGRldGFpbCkgPT4ge1xuICAgICAgICAvLyB0aGUgc3dpcGUgYmFjayBnZXN0dXJlIGhhcyBlbmRlZFxuICAgICAgICBjb25zdCBkZWx0YSA9IGdldERlbHRhWChkZXRhaWwpO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgICAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpZHRoO1xuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IGdldFZlbG9jaXR5WChkZXRhaWwpO1xuICAgICAgICBjb25zdCB6ID0gd2lkdGggLyAyLjA7XG4gICAgICAgIGNvbnN0IHNob3VsZENvbXBsZXRlID0gdmVsb2NpdHkgPj0gMCAmJiAodmVsb2NpdHkgPiAwLjIgfHwgZGVsdGEgPiB6KTtcbiAgICAgICAgY29uc3QgbWlzc2luZyA9IHNob3VsZENvbXBsZXRlID8gMSAtIHN0ZXBWYWx1ZSA6IHN0ZXBWYWx1ZTtcbiAgICAgICAgY29uc3QgbWlzc2luZ0Rpc3RhbmNlID0gbWlzc2luZyAqIHdpZHRoO1xuICAgICAgICBsZXQgcmVhbER1ciA9IDA7XG4gICAgICAgIGlmIChtaXNzaW5nRGlzdGFuY2UgPiA1KSB7XG4gICAgICAgICAgICBjb25zdCBkdXIgPSBtaXNzaW5nRGlzdGFuY2UgLyBNYXRoLmFicyh2ZWxvY2l0eSk7XG4gICAgICAgICAgICByZWFsRHVyID0gTWF0aC5taW4oZHVyLCA1NDApO1xuICAgICAgICB9XG4gICAgICAgIG9uRW5kSGFuZGxlcihzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlIDw9IDAgPyAwLjAxIDogY2xhbXAoMCwgc3RlcFZhbHVlLCAwLjk5OTkpLCByZWFsRHVyKTtcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgZWwsXG4gICAgICAgIGdlc3R1cmVOYW1lOiAnZ29iYWNrLXN3aXBlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3aXBlIHRvIGdvIGJhY2sgc2hvdWxkIGhhdmUgcHJpb3JpdHkgb3ZlciBvdGhlciBob3Jpem9udGFsIHN3aXBlXG4gICAgICAgICAqIGdlc3R1cmVzLiBUaGVzZSBnZXN0dXJlcyBoYXZlIGEgcHJpb3JpdHkgb2YgMTAwIHdoaWNoIGlzIHdoeSAxMDEgd2FzIGNob3NlbiBoZXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDEsXG4gICAgICAgIHRocmVzaG9sZDogMTAsXG4gICAgICAgIGNhblN0YXJ0LFxuICAgICAgICBvblN0YXJ0OiBvblN0YXJ0SGFuZGxlcixcbiAgICAgICAgb25Nb3ZlLFxuICAgICAgICBvbkVuZCxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCB3YXRjaEZvck9wdGlvbnMgPSAoY29udGFpbmVyRWwsIHRhZ05hbWUsIG9uQ2hhbmdlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG11dGF0aW9uID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCkgPT4ge1xuICAgICAgICBvbkNoYW5nZShnZXRTZWxlY3RlZE9wdGlvbihtdXRhdGlvbkxpc3QsIHRhZ05hbWUpKTtcbiAgICB9KTtcbiAgICBtdXRhdGlvbi5vYnNlcnZlKGNvbnRhaW5lckVsLCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gbXV0YXRpb247XG59O1xuY29uc3QgZ2V0U2VsZWN0ZWRPcHRpb24gPSAobXV0YXRpb25MaXN0LCB0YWdOYW1lKSA9PiB7XG4gICAgbGV0IG5ld09wdGlvbjtcbiAgICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0KSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLWZvci1vZlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dC5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdPcHRpb24gPSBmaW5kQ2hlY2tlZE9wdGlvbihtdXQuYWRkZWROb2Rlc1tpXSwgdGFnTmFtZSkgfHwgbmV3T3B0aW9uO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld09wdGlvbjtcbn07XG4vKipcbiAqIFRoZSBcInZhbHVlXCIga2V5IGlzIG9ubHkgc2V0IG9uIHNvbWUgY29tcG9uZW50cyBzdWNoIGFzIGlvbi1zZWxlY3Qtb3B0aW9uLlxuICogQXMgYSByZXN1bHQsIHdlIGNyZWF0ZSBhIGRlZmF1bHQgdW5pb24gdHlwZSBvZiBIVE1MRWxlbWVudCBhbmQgdGhlIFwidmFsdWVcIiBrZXkuXG4gKiBIb3dldmVyLCBpbXBsZW1lbnRlcnMgYXJlIHJlcXVpcmVkIHRvIHByb3ZpZGUgdGhlIGFwcHJvcHJpYXRlIGNvbXBvbmVudCB0eXBlXG4gKiBzdWNoIGFzIEhUTUxJb25TZWxlY3RPcHRpb25FbGVtZW50LlxuICovXG5jb25zdCBmaW5kQ2hlY2tlZE9wdGlvbiA9IChub2RlLCB0YWdOYW1lKSA9PiB7XG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUvbm9kZVR5cGVcbiAgICAgKiBUaGUgYWJvdmUgY2hlY2sgZW5zdXJlcyBcIm5vZGVcIiBpcyBhbiBFbGVtZW50IChub2RlVHlwZSAxKS5cbiAgICAgKi9cbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBIVE1MRWxlbWVudCBpbmhlcml0cyBmcm9tIEVsZW1lbnQsIHNvIHdlIGNhc3QgXCJlbFwiIGFzIFQuXG4gICAgY29uc3QgZWwgPSBub2RlO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBlbC50YWdOYW1lID09PSB0YWdOYW1lLnRvVXBwZXJDYXNlKCkgPyBbZWxdIDogQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUpKTtcbiAgICByZXR1cm4gb3B0aW9ucy5maW5kKChvKSA9PiBvLnZhbHVlID09PSBlbC52YWx1ZSk7XG59O1xuXG5leHBvcnQgeyB3YXRjaEZvck9wdGlvbnMgYXMgdyB9O1xuIl0sIm5hbWVzIjpbInciLCJ3cml0ZVRhc2siLCJoIiwiaGFwdGljU2VsZWN0aW9uRW5kIiwiYSIsImhhcHRpY1NlbGVjdGlvbkNoYW5nZWQiLCJiIiwiaGFwdGljU2VsZWN0aW9uU3RhcnQiLCJjcmVhdGVHZXN0dXJlIiwiY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSIsImVsIiwiaXNCdXR0b24iLCJjdXJyZW50VG91Y2hlZEJ1dHRvbiIsImluaXRpYWxUb3VjaGVkQnV0dG9uIiwiYWN0aXZhdGVCdXR0b25BdFBvaW50IiwieCIsInkiLCJoYXB0aWNGZWVkYmFja0ZuIiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJlbGVtZW50RnJvbVBvaW50IiwiZGlzYWJsZWQiLCJjbGVhckFjdGl2ZUJ1dHRvbiIsInNldEFjdGl2ZUJ1dHRvbiIsImJ1dHRvbiIsImJ1dHRvblRvTW9kaWZ5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGF0Y2hDbGljayIsInJlbW92ZSIsImNsaWNrIiwidW5kZWZpbmVkIiwiZ2VzdHVyZU5hbWUiLCJ0aHJlc2hvbGQiLCJvblN0YXJ0IiwiZXYiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwib25Nb3ZlIiwib25FbmQiLCJjIiwid2luIiwiZ2V0Q2FwYWNpdG9yIiwiQ2FwYWNpdG9yIiwiZyIsImNvbXBhcmVPcHRpb25zIiwiY3VycmVudFZhbHVlIiwiY29tcGFyZVZhbHVlIiwiY29tcGFyZVdpdGgiLCJBcnJheSIsImlzQXJyYXkiLCJpbmNsdWRlcyIsImlzT3B0aW9uU2VsZWN0ZWQiLCJzb21lIiwidmFsIiwiaSIsImlzUlRMIiwiaG9zdEVsIiwiZGlyIiwidG9Mb3dlckNhc2UiLCJJT05fRk9DVVNFRCIsIklPTl9GT0NVU0FCTEUiLCJGT0NVU19LRVlTIiwic3RhcnRGb2N1c1Zpc2libGUiLCJyb290RWwiLCJjdXJyZW50Rm9jdXMiLCJrZXlib2FyZE1vZGUiLCJyZWYiLCJzaGFkb3dSb290Iiwicm9vdCIsImJvZHkiLCJzZXRGb2N1cyIsImVsZW1lbnRzIiwiZm9yRWFjaCIsInBvaW50ZXJEb3duIiwib25LZXlkb3duIiwia2V5Iiwib25Gb2N1c2luIiwiY29tcG9zZWRQYXRoIiwidG9Gb2N1cyIsImZpbHRlciIsImNvbnRhaW5zIiwib25Gb2N1c291dCIsImFjdGl2ZUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSW1wYWN0U3R5bGUiLCJOb3RpZmljYXRpb25UeXBlIiwiSGFwdGljRW5naW5lIiwiZ2V0RW5naW5lIiwiY2FwYWNpdG9yIiwiaXNQbHVnaW5BdmFpbGFibGUiLCJQbHVnaW5zIiwiSGFwdGljcyIsImF2YWlsYWJsZSIsImVuZ2luZSIsImdldFBsYXRmb3JtIiwibmF2aWdhdG9yIiwidmlicmF0ZSIsImltcGFjdCIsIm9wdGlvbnMiLCJzdHlsZSIsIm5vdGlmaWNhdGlvbiIsInR5cGUiLCJzZWxlY3Rpb24iLCJMaWdodCIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uQ2hhbmdlZCIsInNlbGVjdGlvbkVuZCIsImhhcHRpY0F2YWlsYWJsZSIsImhhcHRpY1NlbGVjdGlvbiIsImhhcHRpY0ltcGFjdCIsIkkiLCJkIiwiYXJyb3dCYWNrU2hhcnAiLCJhcnJvd0Rvd24iLCJjYXJldEJhY2tTaGFycCIsImNhcmV0RG93blNoYXJwIiwiY2FyZXRVcFNoYXJwIiwiY2hlY2ttYXJrT3V0bGluZSIsImNoZXZyb25CYWNrIiwiY2hldnJvbkRvd24iLCJjaGV2cm9uRXhwYW5kIiwiY2hldnJvbkZvcndhcmQiLCJjaGV2cm9uRm9yd2FyZE91dGxpbmUiLCJjbG9zZSIsImNsb3NlQ2lyY2xlIiwiY2xvc2VTaGFycCIsImVsbGlwc2VPdXRsaW5lIiwiZWxsaXBzaXNIb3Jpem9udGFsIiwiZXllIiwiZXllT2ZmIiwibWVudU91dGxpbmUiLCJtZW51U2hhcnAiLCJyZW1vdmVPdXRsaW5lIiwicmVvcmRlclRocmVlT3V0bGluZSIsInJlb3JkZXJUd29TaGFycCIsInNlYXJjaE91dGxpbmUiLCJzZWFyY2hTaGFycCIsImUiLCJmIiwiaiIsImsiLCJsIiwibSIsIm4iLCJvIiwicCIsInEiLCJyIiwicyIsInQiLCJ1IiwidiIsImNvbXBvbmVudE9uUmVhZHkiLCJwcmludFJlcXVpcmVkRWxlbWVudEVycm9yIiwiSU9OX0NPTlRFTlRfVEFHX05BTUUiLCJJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SIiwiSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IiLCJJT05fQ09OVEVOVF9TRUxFQ1RPUiIsImlzSW9uQ29udGVudCIsInRhZ05hbWUiLCJnZXRTY3JvbGxFbGVtZW50IiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmluZElvbkNvbnRlbnQiLCJjdXN0b21Db250ZW50SG9zdCIsInF1ZXJ5U2VsZWN0b3IiLCJmaW5kQ2xvc2VzdElvbkNvbnRlbnQiLCJjbG9zZXN0Iiwic2Nyb2xsVG9Ub3AiLCJkdXJhdGlvbk1zIiwiY29udGVudCIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwic2Nyb2xsQnlQb2ludCIsInNjcm9sbEJ5IiwicHJpbnRJb25Db250ZW50RXJyb3JNc2ciLCJkaXNhYmxlQ29udGVudFNjcm9sbFkiLCJjb250ZW50RWwiLCJpb25Db250ZW50IiwiaW5pdGlhbFNjcm9sbFkiLCJzY3JvbGxZIiwic2V0UHJvcGVydHkiLCJyZXNldENvbnRlbnRTY3JvbGxZIiwicmVtb3ZlUHJvcGVydHkiLCJFeGNlcHRpb25Db2RlIiwiS2V5Ym9hcmRSZXNpemUiLCJLZXlib2FyZCIsImdldFJlc2l6ZU1vZGUiLCJjYXRjaCIsImNvZGUiLCJVbmltcGxlbWVudGVkIiwiSyIsImRvYyIsImdldFJlc2l6ZUNvbnRhaW5lciIsInJlc2l6ZU1vZGUiLCJOb25lIiwiaW9uQXBwIiwiZ2V0UmVzaXplQ29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyRWxlbWVudCIsImNsaWVudEhlaWdodCIsImNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciIsImtleWJvYXJkQ2hhbmdlQ2FsbGJhY2siLCJrZXlib2FyZFdpbGxTaG93SGFuZGxlciIsImtleWJvYXJkV2lsbEhpZGVIYW5kbGVyIiwia2V5Ym9hcmRWaXNpYmxlIiwiaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodCIsImluaXQiLCJfcmVmMiIsInJlc2l6ZU9wdGlvbnMiLCJtb2RlIiwiZmlyZUNoYW5nZUNhbGxiYWNrIiwic3RhdGUiLCJjcmVhdGVSZXNpemVQcm9taXNlSWZOZWVkZWQiLCJjYWxsYmFjayIsInJvIiwiZGlzY29ubmVjdCIsIlJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsImlzS2V5Ym9hcmRWaXNpYmxlIiwiS0VZQk9BUkRfRElEX09QRU4iLCJLRVlCT0FSRF9ESURfQ0xPU0UiLCJLRVlCT0FSRF9USFJFU0hPTEQiLCJwcmV2aW91c1Zpc3VhbFZpZXdwb3J0IiwiY3VycmVudFZpc3VhbFZpZXdwb3J0Iiwia2V5Ym9hcmRPcGVuIiwicmVzZXRLZXlib2FyZEFzc2lzdCIsInN0YXJ0S2V5Ym9hcmRBc3Npc3QiLCJuYXRpdmVFbmdpbmUiLCJzdGFydE5hdGl2ZUxpc3RlbmVycyIsInZpc3VhbFZpZXdwb3J0IiwiY29weVZpc3VhbFZpZXdwb3J0Iiwib25yZXNpemUiLCJ0cmFja1ZpZXdwb3J0Q2hhbmdlcyIsImtleWJvYXJkRGlkT3BlbiIsImtleWJvYXJkRGlkUmVzaXplIiwic2V0S2V5Ym9hcmRPcGVuIiwia2V5Ym9hcmREaWRDbG9zZSIsInNldEtleWJvYXJkQ2xvc2UiLCJmaXJlS2V5Ym9hcmRPcGVuRXZlbnQiLCJmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50Iiwic2NhbGVkSGVpZ2h0RGlmZmVyZW5jZSIsImhlaWdodCIsInNjYWxlIiwid2lkdGgiLCJpbm5lckhlaWdodCIsIm5hdGl2ZUV2Iiwia2V5Ym9hcmRIZWlnaHQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJNYXRoIiwicm91bmQiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwicGFnZVRvcCIsInBhZ2VMZWZ0IiwiY3JlYXRlTG9ja0NvbnRyb2xsZXIiLCJ3YWl0UHJvbWlzZSIsImxvY2siLCJzcGlubmVycyIsImJ1YmJsZXMiLCJkdXIiLCJjaXJjbGVzIiwiZm4iLCJpbmRleCIsInRvdGFsIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmdsZSIsIlBJIiwic2luIiwiY29zIiwic3RlcCIsImNpcmN1bGFyIiwiZWxtRHVyYXRpb24iLCJjeCIsImN5IiwiZmlsbCIsInZpZXdCb3giLCJ0cmFuc2Zvcm0iLCJjcmVzY2VudCIsImRvdHMiLCJfIiwibGluZXMiLCJ5MSIsInkyIiwiU1BJTk5FUlMiLCJTIiwiY2xhbXAiLCJjcmVhdGVTd2lwZUJhY2tHZXN0dXJlIiwiY2FuU3RhcnRIYW5kbGVyIiwib25TdGFydEhhbmRsZXIiLCJvbk1vdmVIYW5kbGVyIiwib25FbmRIYW5kbGVyIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwicnRsIiwiaXNBdEVkZ2UiLCJzdGFydFgiLCJpbm5lcldpZHRoIiwiZ2V0RGVsdGFYIiwiZGVsdGFYIiwiZ2V0VmVsb2NpdHlYIiwidmVsb2NpdHlYIiwiY2FuU3RhcnQiLCJkZWx0YSIsInN0ZXBWYWx1ZSIsInZlbG9jaXR5IiwieiIsInNob3VsZENvbXBsZXRlIiwibWlzc2luZyIsIm1pc3NpbmdEaXN0YW5jZSIsInJlYWxEdXIiLCJhYnMiLCJtaW4iLCJnZXN0dXJlUHJpb3JpdHkiLCJ3YXRjaEZvck9wdGlvbnMiLCJjb250YWluZXJFbCIsIm9uQ2hhbmdlIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uIiwibXV0YXRpb25MaXN0IiwiZ2V0U2VsZWN0ZWRPcHRpb24iLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwibmV3T3B0aW9uIiwibXV0IiwiYWRkZWROb2RlcyIsImxlbmd0aCIsImZpbmRDaGVja2VkT3B0aW9uIiwibm9kZSIsIm5vZGVUeXBlIiwidG9VcHBlckNhc2UiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbmQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNF19