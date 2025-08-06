(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



const routes = [{
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 5055)).then(m => m.HomePageModule)
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/splash-screen */ 7661);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 9153);






let AppComponent = class AppComponent {
  constructor(platform) {
    this.platform = platform;
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(val => {
      _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.hide();
      _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__.SplashScreen.hide();
      let clickyClasses = ['click-sounds'];
      // @ts-ignore
      window.nativeclick.watch(clickyClasses);
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
    }];
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 4094);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _home_edit_name_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/edit-name-modal.component */ 5017);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 5813);
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/ble.service */ 8631);
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/devices.service */ 101);
/* harmony import */ var _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/lock-data.service */ 4284);














let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _home_edit_name_modal_component__WEBPACK_IMPORTED_MODULE_3__.EditNameModalComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule],
  providers: [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__.BLE, _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.BleService, _services_devices_service__WEBPACK_IMPORTED_MODULE_6__.DevicesService, _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__.LockDataService, _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__.AndroidPermissions, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
})], AppModule);


/***/ }),

/***/ 5017:
/*!***************************************************!*\
  !*** ./src/app/home/edit-name-modal.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditNameModalComponent: () => (/* binding */ EditNameModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_src_app_home_edit_name_modal_component_ts_css_ngResource_C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDE2cHggMDsKICAgIH0KCiAgICAuaW5wdXQtZ3JvdXAgewogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7CiAgICB9CgogICAgLm5hbWUtaW5wdXQgewogICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7CiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7CiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAtLWJvcmRlci13aWR0aDogMXB4OwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgbWFyZ2luLXRvcDogOHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50IHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICByaWdodDogMTZweDsKICAgICAgYm90dG9tOiAxMnB4OwogICAgICBmb250LXNpemU6IDEycHg7CiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgcGFkZGluZzogMnB4IDZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50Lndhcm5pbmcgewogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOwogICAgfQoKICAgIC5kZXZpY2UtaW5mbyB7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgcGFkZGluZzogMTZweDsKICAgICAgbWFyZ2luLXRvcDogMTZweDsKICAgIH0KCiAgICAuaW5mby1pdGVtIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiA4cHg7CiAgICB9CgogICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMDsKICAgIH0KCiAgICAubGFiZWwgewogICAgICBmb250LXdlaWdodDogNTAwOwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICB9CgogICAgLnZhbHVlIHsKICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OwogICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7CiAgICB9CgogICAgLnNhdmUtYnV0dG9uIHsKICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDsKICAgIH0KCiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KCiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KICA_3D_C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_src_app_home_edit_name_modal_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/home/edit-name-modal.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDE2cHggMDsKICAgIH0KCiAgICAuaW5wdXQtZ3JvdXAgewogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7CiAgICB9CgogICAgLm5hbWUtaW5wdXQgewogICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7CiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7CiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAtLWJvcmRlci13aWR0aDogMXB4OwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgbWFyZ2luLXRvcDogOHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50IHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICByaWdodDogMTZweDsKICAgICAgYm90dG9tOiAxMnB4OwogICAgICBmb250LXNpemU6IDEycHg7CiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgcGFkZGluZzogMnB4IDZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50Lndhcm5pbmcgewogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOwogICAgfQoKICAgIC5kZXZpY2UtaW5mbyB7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgcGFkZGluZzogMTZweDsKICAgICAgbWFyZ2luLXRvcDogMTZweDsKICAgIH0KCiAgICAuaW5mby1pdGVtIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiA4cHg7CiAgICB9CgogICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMDsKICAgIH0KCiAgICAubGFiZWwgewogICAgICBmb250LXdlaWdodDogNTAwOwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICB9CgogICAgLnZhbHVlIHsKICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OwogICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7CiAgICB9CgogICAgLnNhdmUtYnV0dG9uIHsKICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDsKICAgIH0KCiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KCiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KICA%3D!./src/app/home/edit-name-modal.component.ts */ 8856);
/* harmony import */ var C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_src_app_home_edit_name_modal_component_ts_css_ngResource_C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDE2cHggMDsKICAgIH0KCiAgICAuaW5wdXQtZ3JvdXAgewogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7CiAgICB9CgogICAgLm5hbWUtaW5wdXQgewogICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7CiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7CiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAtLWJvcmRlci13aWR0aDogMXB4OwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgbWFyZ2luLXRvcDogOHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50IHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICByaWdodDogMTZweDsKICAgICAgYm90dG9tOiAxMnB4OwogICAgICBmb250LXNpemU6IDEycHg7CiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgcGFkZGluZzogMnB4IDZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50Lndhcm5pbmcgewogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOwogICAgfQoKICAgIC5kZXZpY2UtaW5mbyB7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgcGFkZGluZzogMTZweDsKICAgICAgbWFyZ2luLXRvcDogMTZweDsKICAgIH0KCiAgICAuaW5mby1pdGVtIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiA4cHg7CiAgICB9CgogICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMDsKICAgIH0KCiAgICAubGFiZWwgewogICAgICBmb250LXdlaWdodDogNTAwOwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICB9CgogICAgLnZhbHVlIHsKICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OwogICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7CiAgICB9CgogICAgLnNhdmUtYnV0dG9uIHsKICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDsKICAgIH0KCiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KCiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KICA_3D_C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_src_app_home_edit_name_modal_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_src_app_home_edit_name_modal_component_ts_css_ngResource_C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDE2cHggMDsKICAgIH0KCiAgICAuaW5wdXQtZ3JvdXAgewogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7CiAgICB9CgogICAgLm5hbWUtaW5wdXQgewogICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7CiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7CiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAtLWJvcmRlci13aWR0aDogMXB4OwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgbWFyZ2luLXRvcDogOHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50IHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICByaWdodDogMTZweDsKICAgICAgYm90dG9tOiAxMnB4OwogICAgICBmb250LXNpemU6IDEycHg7CiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgcGFkZGluZzogMnB4IDZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50Lndhcm5pbmcgewogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOwogICAgfQoKICAgIC5kZXZpY2UtaW5mbyB7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgcGFkZGluZzogMTZweDsKICAgICAgbWFyZ2luLXRvcDogMTZweDsKICAgIH0KCiAgICAuaW5mby1pdGVtIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiA4cHg7CiAgICB9CgogICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMDsKICAgIH0KCiAgICAubGFiZWwgewogICAgICBmb250LXdlaWdodDogNTAwOwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICB9CgogICAgLnZhbHVlIHsKICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OwogICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7CiAgICB9CgogICAgLnNhdmUtYnV0dG9uIHsKICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDsKICAgIH0KCiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KCiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KICA_3D_C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_src_app_home_edit_name_modal_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);




let EditNameModalComponent = class EditNameModalComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    this.initialName = '';
    this.showDeviceInfo = false;
    this.saveName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.deviceName = '';
  }
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
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
    }];
  }
  static {
    this.propDecorators = {
      initialName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      serialNumber: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      deviceId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      showDeviceInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      saveName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
      }]
    };
  }
};
EditNameModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
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
  styles: [(C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_src_app_home_edit_name_modal_component_ts_css_ngResource_C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDE2cHggMDsKICAgIH0KCiAgICAuaW5wdXQtZ3JvdXAgewogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7CiAgICB9CgogICAgLm5hbWUtaW5wdXQgewogICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7CiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7CiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAtLWJvcmRlci13aWR0aDogMXB4OwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgbWFyZ2luLXRvcDogOHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50IHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICByaWdodDogMTZweDsKICAgICAgYm90dG9tOiAxMnB4OwogICAgICBmb250LXNpemU6IDEycHg7CiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgcGFkZGluZzogMnB4IDZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50Lndhcm5pbmcgewogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOwogICAgfQoKICAgIC5kZXZpY2UtaW5mbyB7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgcGFkZGluZzogMTZweDsKICAgICAgbWFyZ2luLXRvcDogMTZweDsKICAgIH0KCiAgICAuaW5mby1pdGVtIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiA4cHg7CiAgICB9CgogICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMDsKICAgIH0KCiAgICAubGFiZWwgewogICAgICBmb250LXdlaWdodDogNTAwOwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICB9CgogICAgLnZhbHVlIHsKICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OwogICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7CiAgICB9CgogICAgLnNhdmUtYnV0dG9uIHsKICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDsKICAgIH0KCiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KCiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KICA_3D_C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_src_app_home_edit_name_modal_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], EditNameModalComponent);


/***/ }),

/***/ 8631:
/*!*****************************************!*\
  !*** ./src/app/services/ble.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASK_checksum: () => (/* binding */ ASK_checksum),
/* harmony export */   ASK_correct: () => (/* binding */ ASK_correct),
/* harmony export */   ASK_failed_verification: () => (/* binding */ ASK_failed_verification),
/* harmony export */   ASK_failure: () => (/* binding */ ASK_failure),
/* harmony export */   ASK_password_not_verified: () => (/* binding */ ASK_password_not_verified),
/* harmony export */   ASK_timeout: () => (/* binding */ ASK_timeout),
/* harmony export */   ASK_unknown: () => (/* binding */ ASK_unknown),
/* harmony export */   BleService: () => (/* binding */ BleService),
/* harmony export */   ErrorCategories: () => (/* binding */ ErrorCategories),
/* harmony export */   InactiveDisconnectTime: () => (/* binding */ InactiveDisconnectTime),
/* harmony export */   IsLocked: () => (/* binding */ IsLocked),
/* harmony export */   IsUnhooked: () => (/* binding */ IsUnhooked),
/* harmony export */   ResponseMap: () => (/* binding */ ResponseMap),
/* harmony export */   RetryStrategies: () => (/* binding */ RetryStrategies)
/* harmony export */ });
/* harmony import */ var C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/device */ 7801);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 4094);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 5813);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _util_dynamic_queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dynamic-queue */ 3224);








const CMD = 1;
const ASK = 2;
const EXT = 3;
const SUM = 5;
const DATA = 6;
const RANDDATA = 14;
const CMD_SystemExit = 'sleep';
const CMD_SystemInit = 'initialize';
const ASK_correct = 0x10;
const ASK_failure = 0x11;
const ASK_timeout = 0x12;
const ASK_unknown = 0x13;
const ASK_checksum = 0x16;
const ASK_password_not_verified = 0x26;
const ASK_failed_verification = 0x27;
const ResponseMap = {
  [ASK_correct]: 'Operation completed successfully',
  [ASK_failure]: 'Operation failed - please try again',
  [ASK_timeout]: 'Operation timed out - check connection',
  [ASK_unknown]: 'Unknown command - please reconnect',
  [ASK_checksum]: 'Communication error - please try again',
  [ASK_password_not_verified]: 'Lock not properly paired - enter PIN again',
  [ASK_failed_verification]: 'PIN verification failed - check your PIN'
};
// Add error categories for better handling
const ErrorCategories = {
  [ASK_failure]: 'retry',
  [ASK_timeout]: 'connection',
  [ASK_unknown]: 'reconnect',
  [ASK_checksum]: 'retry',
  [ASK_password_not_verified]: 'pairing',
  [ASK_failed_verification]: 'pin'
};
// Add retry strategies
const RetryStrategies = {
  [ASK_failure]: {
    maxRetries: 3,
    delay: 1000
  },
  [ASK_timeout]: {
    maxRetries: 2,
    delay: 2000
  },
  [ASK_unknown]: {
    maxRetries: 1,
    delay: 0
  },
  [ASK_checksum]: {
    maxRetries: 3,
    delay: 500
  },
  [ASK_password_not_verified]: {
    maxRetries: 0,
    delay: 0
  },
  [ASK_failed_verification]: {
    maxRetries: 0,
    delay: 0
  }
};
const IsLocked = 0x00;
const IsUnhooked = 0x00;
const IsHooked = ~IsUnhooked;
const InactiveDisconnectTime = 300;
const Android11 = '11';
let BleService = class BleService {
  constructor(androidPermissions, ble) {
    this.androidPermissions = androidPermissions;
    this.ble = ble;
    this.deviceId = null;
    this.connectSubscriber = null;
    this.notificationSubscriber = null;
    this.connectRepeater = null;
    this.opQueue = new _util_dynamic_queue__WEBPACK_IMPORTED_MODULE_4__.DynamicQueue();
    this.notificationHandler = null;
    this.messageHandler = null;
    this.alertHandler = null;
    this.writeLockBusy = false;
    this.LongServiceUuid = '0000fff0-0000-1000-8000-00805f9b34fb';
    this.LongStatusUuid = '0000fff1-0000-1000-8000-00805f9b34fb';
    this.LongCommandUuid = '0000fff2-0000-1000-8000-00805f9b34fb';
    this.LongConfigUuid = '0000fff3-0000-1000-8000-00805f9b34fb';
    this.keepAliveInterval = null;
    this.lastConnectedDevice = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    if (!androidPermissions.PERMISSION.BLUETOOTH_CONNECT) {
      androidPermissions.PERMISSION.BLUETOOTH_CONNECT = 'android.permission.BLUETOOTH_CONNECT';
    }
    if (!androidPermissions.PERMISSION.BLUETOOTH_SCAN) {
      androidPermissions.PERMISSION.BLUETOOTH_SCAN = 'android.permission.BLUETOOTH_SCAN';
    }
  }
  setup(_messageHandler, _alertHandler) {
    console.log('ble: activate');
    if (!_messageHandler || !_alertHandler) {
      throw 'handlers cannot be null';
    }
    this.osDataRequest = _capacitor_device__WEBPACK_IMPORTED_MODULE_1__.Device.getInfo();
    this.messageHandler = _messageHandler;
    this.alertHandler = _alertHandler;
    if (!this.ble) {
      let standin = {
        isEnabled: (a, b) => Promise.reject(),
        enable: () => Promise.reject(),
        startScan: () => null,
        stopScan: () => null
      };
      this.ble = standin;
      alert('Something is amiss with the Bluetooth plugin\nCommunication disabled!');
    } else {
      let q = this.ble;
      if (!('enable' in q)) {
        this.ble.enable = this.iosEnable.bind(this);
      }
    }
    return;
  }
  isAvailable() {
    var _this = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Get platform info
        const deviceInfo = yield _this.osDataRequest;
        _this.platform = deviceInfo.operatingSystem;
        _this.osVersion = deviceInfo.osVersion;
        // Check if BLE is enabled
        try {
          yield _this.ble.isEnabled();
        } catch (bleError) {
          // Bluetooth is disabled - try to enable it
          _this.messageHandler('Bluetooth is disabled, attempting to enable...');
          try {
            yield _this.ble.enable();
            _this.messageHandler('Bluetooth enabled successfully');
          } catch (enableError) {
            _this.messageHandler('Failed to enable Bluetooth automatically');
            _this.alertHandler('Bluetooth Error', 'Unable to access Bluetooth. Please check your device settings.');
            return false;
          }
        }
        // Check permissions based on Android version
        if (_this.platform === 'android') {
          if (_this.osVersion <= '11') {
            // Android 11 and below - need BLUETOOTH and ACCESS_FINE_LOCATION
            const bluetoothPermission = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH);
            const locationPermission = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
            if (!bluetoothPermission.hasPermission || !locationPermission.hasPermission) {
              _this.messageHandler('Requesting Bluetooth and Location permissions...');
              if (!bluetoothPermission.hasPermission) {
                const bluetoothResult = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH);
                if (!bluetoothResult.hasPermission) {
                  _this.messageHandler('Bluetooth permission denied');
                  _this.alertHandler('Permission Required', 'Bluetooth permission is required to scan for locks.');
                  return false;
                }
              }
              if (!locationPermission.hasPermission) {
                const locationResult = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
                if (!locationResult.hasPermission) {
                  _this.messageHandler('Location permission denied');
                  _this.alertHandler('Permission Required', 'Location permission is required to scan for Bluetooth devices.');
                  return false;
                }
              }
            }
          } else {
            // Android 12+ - need BLUETOOTH_SCAN and BLUETOOTH_CONNECT
            const scanPermission = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_SCAN);
            const connectPermission = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT);
            if (!scanPermission.hasPermission || !connectPermission.hasPermission) {
              _this.messageHandler('Requesting Bluetooth permissions...');
              if (!scanPermission.hasPermission) {
                const scanResult = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_SCAN);
                if (!scanResult.hasPermission) {
                  _this.messageHandler('Bluetooth scan permission denied');
                  _this.alertHandler('Permission Required', 'Bluetooth scan permission is required to find locks.');
                  return false;
                }
              }
              if (!connectPermission.hasPermission) {
                const connectResult = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT);
                if (!connectResult.hasPermission) {
                  _this.messageHandler('Bluetooth connect permission denied');
                  _this.alertHandler('Permission Required', 'Bluetooth connect permission is required to connect to locks.');
                  return false;
                }
              }
            }
          }
        }
        _this.messageHandler('BLE permissions granted');
        return true;
      } catch (error) {
        _this.messageHandler(`BLE permission check failed: ${error}`);
        _this.alertHandler('Bluetooth Error', 'Unable to access Bluetooth. Please check your device settings.');
        return false;
      }
    })();
  }
  iosEnable() {
    const that = this;
    this.messageHandler('iosEnable() begins');
    let notifier = this.ble.startStateNotifications();
    if (notifier === null) {
      return Promise.reject('missing notifier');
    }
    this.alertHandler('Bluetooth is off. Please turn it on to connect to a lock.');
    return new Promise((resolve, reject) => {
      let stateWatcher = null;
      const timer = setTimeout(() => {
        reject('time expired');
      }, 120 * 1000);
      stateWatcher = notifier.subscribe(state => {
        that.messageHandler(`new Bluetooth state: ${state}`);
        let handled = false;
        if (state === 'on') {
          resolve('ok');
          handled = true;
        } else if (state === 'unauthorized' || state === 'unsupported') {
          reject('invalid state: ' + state);
          handled = true;
        }
        if (handled) {
          clearTimeout(timer);
          stateWatcher.unsubscribe();
          stateWatcher = null;
          notifier = null;
          that.ble.stopStateNotifications().then(() => {
            that.messageHandler('change notifications ended');
          }).catch(reason => {
            that.messageHandler('change notifications error: ' + reason);
          });
          that.alertHandler(null);
        }
      });
    });
  }
  startScan(services) {
    // Simple approach - just like the original working code
    this.messageHandler('startScan: Starting simple scan');
    return this.ble.startScan(services);
  }
  stopScan() {
    return this.ble.stopScan();
  }
  connectTo(scanData) {
    const that = this;
    this.deviceId = null;
    console.log('ble connecting to: ' + scanData.id);
    this.selectUuids(scanData);
    this.connectRepeater = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    let obs = this.ble.connect(scanData.id);
    let notifier = null;
    this.connectSubscriber = obs.subscribe(/*#__PURE__*/function () {
      var _ref = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
        that.messageHandler(`bluetooth connect succeeded: name ${peripheralData.name}, id ${peripheralData.id}`);
        that.deviceId = scanData.id;
        that.connectRepeater.next(peripheralData);
        that.opQueue.flush(); // Clear any pending operations
        that.writeLockBusy = false; // Reset busy state
        notifier = that.ble.startNotification(scanData.id, that.ServiceUuid, that.StatusUuid);
        let notificationSubscriber = notifier.subscribe({
          next: value => that.notificationHandler && that.notificationHandler(value),
          error: error => that.notificationError(error)
        });
        that.connectSubscriber.add(notificationSubscriber);
        that.startKeepAlive(scanData);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
        result.connectFailed = that.deviceId === null;
        that.messageHandler('bluetooth disconnected' + (result.connectFailed ? ' prematurely:' : ':') + JSON.stringify(result));
        that.connectRepeater.error(result);
        that.connectSubscriber.unsubscribe();
        that.connectSubscriber = null;
        if (!result.connectFailed) {
          that.purgeConnection(that.deviceId);
        }
        that.deviceId = null;
        that.writeLockBusy = false; // Reset busy state on disconnect
        that.opQueue.flush(); // Clear pending operations
        that.stopKeepAlive();
        that.tryReconnect();
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    return this.connectRepeater;
  }
  readableHexToBuffer(spaceSeparatedHex) {
    let n = [];
    spaceSeparatedHex.split(' ').forEach(x => {
      n.push(parseInt(x, 16));
    });
    return Uint8Array.from(n);
  }
  bufferToReadableHex(buffer) {
    return Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join(' ');
  }
  isLockBusy() {
    return this.writeLockBusy;
  }
  writeToLock(commandName, command) {
    var _this2 = this;
    let pendingResolve;
    let pendingReject;
    let notificationInjector = null;
    let timeoutId = null;
    if (this.deviceId === null) {
      this.messageHandler(`Tried to send "${commandName}" when disconnected`);
      return Promise.reject('Disconnected - Command refused');
    }
    if (this.writeLockBusy === true) {
      this.messageHandler(`Tried to issue "${commandName}" before previous operation complete`);
      return Promise.reject('writeToLock - execution overlap');
    }
    if (this.notificationHandler != null) {
      this.messageHandler(`Tried to issue "${commandName} while waiting for notification`);
      return Promise.reject('writeToLock - notification incomplete');
    }
    this.writeLockBusy = true;
    command[SUM] = 0;
    command[SUM] = command.reduce((previous, current) => previous + current & 0xff);
    return new Promise(/*#__PURE__*/function () {
      var _ref3 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        pendingResolve = resolve;
        pendingReject = reject;
        // Add timeout for operations to prevent stuck states
        timeoutId = setTimeout(() => {
          _this2.writeLockBusy = false;
          _this2.notificationHandler = null;
          _this2.messageHandler(`Operation timeout for "${commandName}" - no response received`);
          reject('Operation timeout - no response received');
        }, 8000); // Reduced from 10s to 8s for faster failure detection
        try {
          _this2.messageHandler(`writeToLock "${commandName}" : ${_this2.bufferToReadableHex(command)}`);
          _this2.notificationHandler = responseHandler.bind(_this2);
          _this2.notificationError = errorHandler.bind(_this2);
          yield _this2.ble.write(_this2.deviceId, _this2.ServiceUuid, _this2.CommandUuid, command.buffer);
          // Special handling for setAlarmState
          if (commandName === 'setAlarmState') {
            notificationInjector = setTimeout(() => {
              notificationInjector = null;
              let fakeAlarmResponse = [_this2.readableHexToBuffer('F5 74 10 00 5F D8 FF'), 0];
              responseHandler.bind(_this2)(fakeAlarmResponse);
            }, 400);
          }
        } catch (error) {
          if (timeoutId) clearTimeout(timeoutId);
          _this2.writeLockBusy = false;
          _this2.notificationHandler = null;
          _this2.messageHandler(`Write failed for "${commandName}": ${JSON.stringify(error)}`);
          reject('write failed');
        }
      });
      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }());
    function responseHandler(data) {
      try {
        if (timeoutId) clearTimeout(timeoutId);
        if (notificationInjector) {
          clearTimeout(notificationInjector);
        }
        this.writeLockBusy = false;
        this.notificationHandler = null;
        if (commandName === CMD_SystemExit) {
          pendingResolve({
            response: ASK_correct
          });
        } else {
          let output = 'No data';
          if (data == null) {
            throw 'No data returned from notification';
          }
          let buffer = data[0];
          if (buffer == null) {
            throw 'No buffer returned from notification()';
          }
          const bytes = new Uint8Array(buffer);
          output = 'result: ' + this.bufferToReadableHex(bytes);
          if (bytes.length < DATA) {
            this.messageHandler(output);
            throw 'Truncated response ' + bytes;
          }
          let S = {
            response: bytes[ASK],
            extraBytes: bytes[EXT],
            isStatus: false,
            isError: bytes[ASK] > 0x10 && bytes[ASK] < 0x26,
            verified: false,
            alarmOn: null,
            buzzerOn: null
          };
          S.responseMsg = ResponseMap[S.response];
          if (!S.responseMsg) {
            S.responseMsg = 'Unknown ' + S.response;
          }
          switch (bytes[CMD]) {
            case 0x0f:
              if (bytes[ASK] === ASK_correct) {
                S.verified = true;
                output += ', verified';
              } else {
                output += ', ' + (!S.isError ? 'unverified, returned ' : 'invalid response: ') + S.responseMsg;
              }
              break;
            case 0x60:
              S.isStatus = true;
              S.openCloseState = bytes[DATA];
              S.hookState = bytes[DATA + 1];
              S.voltageValue = bytes[8] * 256 + bytes[9];
              S.lockId = (bytes[10] << 24) + (bytes[11] << 16) + (bytes[12] << 8) + bytes[13];
              S.randData = bytes[RANDDATA];
              break;
            case 0x74:
              S.alarmOn = bytes[DATA] === 0;
              if (bytes[EXT] !== 0) {
                output += ', alarm ' + (bytes[DATA] === 0 ? 'on' : 'off');
              }
              if (command[CMD] !== bytes[CMD]) {
                output += '  *** MISMATCH ***';
              }
              break;
            case 0x75:
              S.buzzerOn = bytes[DATA] === 0;
              if (bytes[EXT] !== 0) {
                output += ', buzzer ' + (bytes[DATA] === 0 ? 'on' : 'off');
              }
              if (command[CMD] !== bytes[CMD]) {
                output += '  *** MISMATCH ***';
              }
              break;
          }
          this.messageHandler(output);
          pendingResolve(S);
        }
      } catch (error) {
        let msg = 'Failed to read lock status: ' + JSON.stringify(error);
        this.messageHandler(msg);
        pendingReject('read failed');
      }
      this.writeLockBusy = false;
      this.notificationHandler = null;
      pendingResolve = null;
      pendingReject = null;
    }
    function errorHandler(error) {
      if (timeoutId) clearTimeout(timeoutId);
      if (notificationInjector) {
        clearTimeout(notificationInjector);
      }
      this.writeLockBusy = false;
      this.notificationHandler = null;
      this.messageHandler('notification error: ' + JSON.stringify(error));
      pendingReject(error);
    }
  }
  readLockStatus() {
    const command = this.readableHexToBuffer('F5 60 00 00 5F B4');
    return this.opQueue.enqueue(() => this.writeToLock('read-state', command));
  }
  handleVerification(lockPair) {
    let readable = 'F5 0F 00 04 5F 3B';
    for (let zi = 0; zi < 4; zi++) {
      readable += ' ' + lockPair.pin.charCodeAt(zi).toString(16);
    }
    const command = this.readableHexToBuffer(readable);
    return this.opQueue.enqueue(() => this.writeToLock('verify', command).then(result => {
      return {
        verified: result.verified,
        isError: result.isError,
        msg: result.responseMsg
      };
    }));
  }
  getAlarmState() {
    const command = this.readableHexToBuffer('F5 74 00 00 5F 3B');
    return this.opQueue.enqueue(() => this.writeToLock('getAlarmState', command)).then(result => {
      if (result.alarmOn === null) {
        this.messageHandler('getAlarmState: invalid status: ' + JSON.stringify(result));
      }
      return result.alarmOn !== null && result.alarmOn;
    });
  }
  setAlarmState(enabled) {
    var _this3 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let command = _this3.readableHexToBuffer('F5 75 00 01 5F 3B ' + (enabled ? '00' : '01'));
      let result = yield _this3.opQueue.enqueue(() => _this3.writeToLock('setBuzzerState', command));
      yield _this3.waitForMilliseconds(600);
      command = _this3.readableHexToBuffer('F5 74 00 01 5F 3B ' + (enabled ? '00' : '01'));
      result = yield _this3.opQueue.enqueue(() => _this3.writeToLock('setAlarmState', command));
      return result;
    })();
  }
  triggerLock(toggle, encryptByte) {
    let command = this.readableHexToBuffer('F5 61 00 01 5F 00 00');
    command[DATA] = (toggle === 'toggle' ? 0x35 : 0x36) ^ encryptByte;
    return this.opQueue.enqueue(() => this.writeToLock(toggle, command));
  }
  setDateTime(now) {
    let command = this.readableHexToBuffer('F5 62 00 06 5F 00' + ' ' + ('0' + now.getFullYear()).slice(-2) + ' ' + ('0' + now.getMonth()).slice(-2) + ' ' + ('0' + now.getDate()).slice(-2) + ' ' + ('0' + now.getHours()).slice(-2) + ' ' + ('0' + now.getMinutes()).slice(-2) + ' ' + ('0' + now.getSeconds()).slice(-2));
    return this.opQueue.enqueue(() => this.writeToLock('setTime', command));
  }
  putLockToSleep() {
    const command = this.readableHexToBuffer('F5 6F 00 00 5F C3');
    return this.opQueue.enqueue(() => this.writeToLock(CMD_SystemExit, command));
  }
  initializeLock() {
    const command = this.readableHexToBuffer('F5 65 00 00 5F B9');
    return this.opQueue.enqueue(() => this.writeToLock(CMD_SystemInit, command));
  }
  purgeConnection(deviceId) {
    this.ble.disconnect(deviceId).then(() => {
      console.log('Disconnected');
    }).catch(reason => {
      this.messageHandler('purgeConnection(): ' + reason);
    });
  }
  isConnected(deviceId) {
    return this.ble.isConnected(deviceId);
  }
  readRSSI() {
    return this.ble.readRSSI(this.deviceId);
  }
  selectUuids(target) {
    function shorten(uuid, extract) {
      return extract ? uuid.substr(4, 4).toUpperCase() : uuid;
    }
    if (target === undefined || !('id' in target)) {
      throw 'no device provided';
    }
    const isShort = !target.hasLongUuids;
    this.ServiceUuid = shorten(this.LongServiceUuid, isShort);
    this.StatusUuid = shorten(this.LongStatusUuid, isShort);
    this.CommandUuid = shorten(this.LongCommandUuid, isShort);
    this.ConfigUuid = shorten(this.LongConfigUuid, isShort);
    return;
  }
  forceDisconnect(device) {
    var _this4 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.messageHandler(`** AGGRESSIVE Force Disconnect Started **`);
      try {
        // CRITICAL: Stop keep-alive immediately
        _this4.stopKeepAlive();
        _this4.messageHandler('** Keep-alive stopped **');
        // CRITICAL: Clear device ID immediately
        _this4.deviceId = null;
        // CRITICAL: Stop any ongoing operations
        _this4.writeLockBusy = false;
        // CRITICAL: Clear subscriptions immediately
        if (_this4.connectSubscriber) {
          _this4.connectSubscriber.unsubscribe();
          _this4.connectSubscriber = null;
          _this4.messageHandler('** Connect subscriber cleared **');
        }
        if (_this4.notificationSubscriber) {
          _this4.notificationSubscriber.unsubscribe();
          _this4.notificationSubscriber = null;
          _this4.messageHandler('** Notification subscriber cleared **');
        }
        // CRITICAL: Try to send sleep command first (like old code)
        try {
          yield _this4.sendSleepCommandToLock(device);
        } catch (e) {
          _this4.messageHandler('** Sleep command failed, continuing with disconnect **');
        }
        // CRITICAL: Force disconnect from BLE with timeout
        const disconnectPromise = _this4.ble.disconnect(device.id);
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Disconnect timeout')), 5000));
        yield Promise.race([disconnectPromise, timeoutPromise]);
        _this4.messageHandler('** Force disconnect completed **');
        // CRITICAL: Additional cleanup after disconnect
        try {
          // Try to stop scan if it's running
          yield _this4.ble.stopScan();
          _this4.messageHandler('** Scan stopped after disconnect **');
        } catch (e) {
          // Ignore scan stop errors
        }
        _this4.messageHandler('** AGGRESSIVE Force disconnect cleanup completed **');
      } catch (err) {
        _this4.messageHandler('** Force disconnect failed: ' + err + ' **');
        // CRITICAL: Even if disconnect fails, clear ALL local state
        _this4.deviceId = null;
        _this4.writeLockBusy = false;
        // Clear subscriptions even on failure
        if (_this4.connectSubscriber) {
          _this4.connectSubscriber.unsubscribe();
          _this4.connectSubscriber = null;
        }
        if (_this4.notificationSubscriber) {
          _this4.notificationSubscriber.unsubscribe();
          _this4.notificationSubscriber = null;
        }
        _this4.messageHandler('** Force disconnect cleanup completed despite failure **');
      }
    })();
  }
  waitForMilliseconds(ms) {
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    })();
  }
  ngOnDestroy() {}
  startKeepAlive(device) {
    this.stopKeepAlive();
    this.lastConnectedDevice = device;
    localStorage.setItem('lastConnectedDevice', JSON.stringify(device));
    this.keepAliveInterval = setInterval(() => {
      // Only send keep-alive if not busy with operations
      if (!this.writeLockBusy && this.deviceId) {
        this.readLockStatus().catch(error => {
          this.messageHandler('Keep-alive failed: ' + JSON.stringify(error));
          // If keep-alive fails, try to reconnect
          if (this.deviceId) {
            this.tryReconnect();
          }
        });
      }
    }, 30000); // Increased to 30 seconds to reduce interference
  }
  stopKeepAlive() {
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
  }
  tryReconnect() {
    var _this5 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.lastConnectedDevice || _this5.reconnectAttempts >= _this5.maxReconnectAttempts) return;
      _this5.reconnectAttempts++;
      setTimeout(() => {
        _this5.connectTo(_this5.lastConnectedDevice).subscribe({
          next: () => {
            _this5.reconnectAttempts = 0;
          },
          error: () => {
            _this5.tryReconnect();
          }
        });
      }, 2000 * _this5.reconnectAttempts); // Exponential backoff
    })();
  }
  autoReconnectOnStart() {
    var _this6 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const last = localStorage.getItem('lastConnectedDevice');
      if (last) {
        try {
          const device = JSON.parse(last);
          // Optionally, check if device is in range first
          _this6.connectTo(device).subscribe({
            next: () => {
              _this6.reconnectAttempts = 0;
            },
            error: () => {
              _this6.tryReconnect();
            }
          });
        } catch {}
      }
    })();
  }
  /**
   * Discover services for a device and check if the required service is present.
   * Returns true if the required service is found, false otherwise.
   */
  hasRequiredService(deviceId) {
    var _this7 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // If the BLE plugin exposes a discover method, use it. Otherwise, return true for now.
        if (typeof _this7.ble.services === 'function') {
          const services = yield _this7.ble.services(deviceId);
          _this7.messageHandler('Discovered services: ' + JSON.stringify(services));
          if (services && services.services) {
            return services.services.includes(_this7.LongServiceUuid);
          }
        }
        // Fallback: assume service is present (for plugins without discover)
        return true;
      } catch (e) {
        _this7.messageHandler('Service discovery failed: ' + e);
        return false;
      }
    })();
  }
  // Soft reset Bluetooth adapter (Android only)
  softResetBluetooth() {
    var _this8 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.platform === 'android' && _this8.ble && typeof _this8.ble.isEnabled === 'function' && typeof _this8.ble.enable === 'function') {
        try {
          _this8.messageHandler('softResetBluetooth: Stopping scan and resetting BLE state...');
          // Stop any ongoing scan
          try {
            yield _this8.ble.stopScan();
            _this8.messageHandler('softResetBluetooth: Scan stopped');
          } catch (e) {
            _this8.messageHandler('softResetBluetooth: Error stopping scan: ' + e);
          }
          // Wait a bit for BLE stack to settle
          yield new Promise(res => setTimeout(res, 1000));
          // Try to enable BLE (this can help reset the stack)
          try {
            yield _this8.ble.enable();
            _this8.messageHandler('softResetBluetooth: BLE enabled');
          } catch (e) {
            _this8.messageHandler('softResetBluetooth: Error enabling BLE: ' + e);
          }
          _this8.messageHandler('softResetBluetooth: Reset completed');
        } catch (e) {
          _this8.messageHandler('softResetBluetooth: Failed to reset Bluetooth: ' + e);
        }
      } else {
        _this8.messageHandler('softResetBluetooth: Not supported on this platform.');
      }
    })();
  }
  // Send sleep command to lock to force it to disconnect (like old code)
  sendSleepCommandToLock(device) {
    var _this9 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this9.messageHandler('** Sending sleep command to lock **');
        // Sleep command: CMD_SystemExit
        const command = _this9.readableHexToBuffer('F5 6F 00 00 5F C3');
        command[SUM] = 0;
        command[SUM] = command.reduce((previous, current) => previous + current & 0xFF);
        // Set UUIDs for the device
        _this9.selectUuids(device);
        // Send the sleep command
        yield _this9.ble.write(device.id, _this9.ServiceUuid, _this9.CommandUuid, command.buffer);
        _this9.messageHandler('** Sleep command sent successfully **');
        // Wait a bit for the lock to process the command
        yield new Promise(res => setTimeout(res, 500));
      } catch (error) {
        _this9.messageHandler('** Failed to send sleep command: ' + JSON.stringify(error) + ' **');
        // Don't throw - this is just an additional cleanup step
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions
    }, {
      type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__.BLE
    }];
  }
};
BleService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], BleService);


/***/ }),

/***/ 101:
/*!*********************************************!*\
  !*** ./src/app/services/devices.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevicesService: () => (/* binding */ DevicesService),
/* harmony export */   UnknownDeviceName: () => (/* binding */ UnknownDeviceName)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */
var DevicesService_1;


const UnknownDeviceName = 'Unknown Device';
let DevicesService = class DevicesService {
  static {
    DevicesService_1 = this;
  }
  constructor() {
    this.devices = [];
    this.decoder = new TextDecoder('utf-8');
    this.blocking = false;
    console.log('Devices Service initializing');
  }
  hexByte(n) {
    return ('0' + n.toString(16)).substr(-2, 2).toUpperCase();
  }
  /* decode the peripheral connection data received with a
   * successful connection
   */
  advertisementDecoder(buffer) {
    this.blocking = true;
    let advStrings = [];
    const bytes = new Uint8Array(buffer);
    let index = 0;
    while (index < bytes.length) {
      let s, count;
      let adLength = bytes[index++];
      if (adLength === 0) break;
      const adType = bytes[index++];
      adLength = adLength - 1;
      let adData = new Uint8Array(buffer, index, adLength);
      switch (adType) {
        case 1:
          s = 'Flags: ' + this.hexByte(bytes[index]);
          break;
        case 3:
          count = adLength / 2;
          s = 'service:';
          for (let zi = 0; zi < count; zi++) {
            s += ' ' + this.hexByte(adData[zi * 2 + 1]) + this.hexByte(adData[zi * 2]);
          }
          break;
        case 7:
          s = 'UUID: ';
          let p1 = [],
            p2 = [];
          for (let zi = 0; zi < adLength; zi++) {
            p1.unshift(this.hexByte(adData[zi]));
          }
          p2.push(p1.slice(0, 4).join(''));
          p2.push(p1.slice(4, 6).join(''));
          p2.push(p1.slice(6, 8).join(''));
          p2.push(p1.slice(8, 10).join(''));
          p2.push(p1.slice(10, 16).join(''));
          s = p2.join('-');
          break;
        case 8:
        case 9:
          let adView = new DataView(buffer, index, adLength);
          try {
            s = this.decoder.decode(adView);
          } catch (e) {
            s = adView;
          }
          break;
        default:
          s = 'raw: ';
          for (let zi = 0; zi < adLength; zi++) {
            if (zi > 0) s += ', ';
            s += this.hexByte(adData[zi]);
          }
          break;
      }
      advStrings.push('0x' + adType.toString(16) + ': ' + s);
      index += adLength;
    }
    this.blocking = false;
    return advStrings;
  }
  addDevice(device) {
    console.log('DeviceFactory addDevice "' + device.id + '", "' + device.name + '"');
    // decode advertisement to console unless debugger is paused in decoder
    if (!this.blocking) {
      let adverts = this.advertisementDecoder(device.advertising);
      //            adverts.forEach(function(s) { console.log(s); });
      //            console.log('.. RSSI = ' + device.rssi);
    }
    // Attach custom name if it exists
    const customName = this.getCustomName(device.id);
    if (customName) {
      device.customName = customName;
    }
    if (this.devices.find(item => item.id === device.id && item.name === device.name)) {
      console.log('duplicate');
    } else {
      this.devices.push(device);
    }
    return this.devices;
  }
  getDevices() {
    console.log('DeviceFactory getDevices');
    return this.devices;
  }
  getDevice(id) {
    console.log('DeviceFactory getDevice "' + id + '"');
    let index = this.devices.findIndex(device => device.id === id);
    return index > -1 ? this.devices[index] : null;
  }
  reset() {
    console.log('DeviceFactory reset');
    this.devices = [];
  }
  getCustomName(deviceId) {
    return localStorage.getItem('customName_' + deviceId);
  }
  setCustomName(deviceId, name) {
    localStorage.setItem('customName_' + deviceId, name);
    // Update in-memory device if present
    const device = this.devices.find(d => d.id === deviceId);
    if (device) {
      device.customName = name;
    }
  }
  // Utility to extract serial number from device name
  static extractSerialNumber(device) {
    if (device.name && device.name.startsWith('SN:')) {
      return device.name;
    }
    return null;
  }
  // Get the best display name for a device with character limit
  static getDisplayName(device) {
    let displayName = '';
    // Priority 1: Custom name (user-defined name)
    if (device.customName && device.customName.trim()) {
      displayName = device.customName;
    }
    // Priority 2: Device name (if not "Unknown Device")
    else if (device.name && device.name.trim() && device.name !== 'Unknown Device') {
      displayName = device.name;
    }
    // Priority 3: Serial number (extracted from device)
    else {
      const serial = DevicesService_1.extractSerialNumber(device);
      if (serial && serial.trim()) {
        displayName = serial;
      }
      // Priority 4: Device ID (if available)
      else if (device.id && device.id.trim()) {
        displayName = device.id;
      }
      // Priority 5: Unknown device (fallback)
      else {
        displayName = 'Unknown Device';
      }
    }
    // Limit to 15 characters
    if (displayName.length > 15) {
      return displayName.substring(0, 15);
    }
    return displayName;
  }
  // Get text size class based on name length
  static getTextSizeClass(device) {
    let displayName = '';
    // Priority 1: Custom name (user-defined name)
    if (device.customName && device.customName.trim()) {
      displayName = device.customName;
    }
    // Priority 2: Device name (if not "Unknown Device")
    else if (device.name && device.name.trim() && device.name !== 'Unknown Device') {
      displayName = device.name;
    }
    // Priority 3: Serial number (extracted from device)
    else {
      const serial = DevicesService_1.extractSerialNumber(device);
      if (serial && serial.trim()) {
        displayName = serial;
      }
      // Priority 4: Device ID (if available)
      else if (device.id && device.id.trim()) {
        displayName = device.id;
      }
      // Priority 5: Unknown device (fallback)
      else {
        displayName = 'Unknown Device';
      }
    }
    // Apply character limit
    if (displayName.length > 15) {
      displayName = displayName.substring(0, 15);
    }
    // Return appropriate text size class
    if (displayName.length <= 8) {
      return 'text-base'; // Normal size
    } else if (displayName.length <= 12) {
      return 'text-sm'; // Small
    } else {
      return 'text-xs'; // Extra small
    }
  }
  static {
    this.ctorParameters = () => [];
  }
};
DevicesService = DevicesService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], DevicesService);


/***/ }),

/***/ 4284:
/*!***********************************************!*\
  !*** ./src/app/services/lock-data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockDataErrors: () => (/* binding */ LockDataErrors),
/* harmony export */   LockDataService: () => (/* binding */ LockDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 6493);
/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */



const LockDataErrors = {
  SUCCESS: 0,
  NATIVE_WRITE_FAILED: 1,
  ITEM_NOT_FOUND: 2,
  NULL_REFERENCE: 3,
  UNDEFINED_TYPE: 4,
  JSON_ERROR: 5,
  WRONG_PARAMETER: 6,
  DUPLICATE_KEY: 7,
  BAD_NAME: 8
};
let LockDataService = class LockDataService {
  constructor() {
    this.locks = [];
    this.blocking = false;
    this._statusMessageHandler = x => {}; // Default handler
    console.log('Pin Store Service initializing');
  }
  /* Call at startup to load any existing Pin pairs. Return a Promise producing
   * either TRUE or an error message.
   */
  setup(statusMessageHandler) {
    if (statusMessageHandler) {
      this._statusMessageHandler = statusMessageHandler;
    }
    this._statusMessageHandler('lock-data: activate');
  }
  makeLock(serialNumber, pin) {
    return {
      serialNumber,
      pin,
      name: ''
    };
  }
  hexByte(n) {
    return ('0' + n.toString(16)).substr(-2, 2).toUpperCase();
  }
  /* clear the store of any existing serial/PIN pairs */
  clear() {
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.clear();
  }
  /**
   * Check if a device already exists.
   * @param name device id found by scanning
   * @returns Promise<string>, rejects with LockDataError
   */
  getAuthorization(name) {
    this._statusMessageHandler(`getAuthorization for "${name}"`);
    if (typeof name !== 'string') {
      return Promise.reject({
        exception: `getAuthorization: bad name "${name}"`,
        code: LockDataErrors.BAD_NAME
      });
    }
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({
      key: name
    }).then(v => {
      if (v.value === null) {
        throw {
          code: LockDataErrors.ITEM_NOT_FOUND
        };
      }
      return v.value;
    });
  }
  /** Add a new device to permanent storage.
   * @param lock target device
   * @returns result of storage save as Promise of LockDataErrors
   */
  addAuthorization(lock) {
    this._statusMessageHandler(`LockData addDevice "${lock.serialNumber}", "${lock.pin}"`);
    return this.getAuthorization(lock.serialNumber).then(() => {
      this._statusMessageHandler('*** error: adding duplicate device');
      alert('LockData: adding duplicate device');
      return LockDataErrors.DUPLICATE_KEY;
    }).catch(() => {
      return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
        key: lock.serialNumber,
        value: lock.pin
      }).then(() => {
        return LockDataErrors.SUCCESS;
      });
    }).catch(error => {
      this._statusMessageHandler(JSON.stringify(error));
      return Promise.resolve(LockDataErrors.NATIVE_WRITE_FAILED);
    });
  }
  /**
   * Gets an arbitrary item from storage.
   * @param name
   * @returns Promise of string or LockDataResult
   */
  getValue(name) {
    this._statusMessageHandler(`getValue for "${name}"`);
    if (typeof name !== 'string') {
      return Promise.reject({
        exception: `getValue: bad name "${name}"`,
        code: LockDataErrors.BAD_NAME
      });
    }
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({
      key: name
    }).then(v => {
      if (v.value === null) {
        throw {
          code: LockDataErrors.ITEM_NOT_FOUND
        };
      }
      return v.value;
    });
  }
  getJsonValue(name) {
    return this.getValue(name).then(value => {
      try {
        return JSON.parse(value);
      } catch (e) {
        // Explicitly type as unknown
        // Type guard to check if e is an Error
        let errorMessage;
        if (e instanceof Error) {
          errorMessage = e.message;
        } else if (typeof e === 'string') {
          errorMessage = e; // If e is a string, use it directly
        } else {
          errorMessage = 'Unknown error occurred'; // Fallback
        }
        throw {
          code: LockDataErrors.JSON_ERROR,
          exception: errorMessage
        };
      }
    });
  }
  /** set arbitrary <key :: string> in storage
   * @returns Promise to success or LockDataResult
   */
  setValue(key, value) {
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
      key,
      value
    }).then(() => {
      return LockDataErrors.SUCCESS;
    }).catch(error => {
      this._statusMessageHandler(JSON.stringify(error));
      return Promise.resolve(LockDataErrors.NATIVE_WRITE_FAILED);
    });
  }
  /** set arbitrary <key :: object> in storage
   * @returns Promise to success or LockDataResult
   */
  setJsonValue(name, object) {
    return this.setValue(name, JSON.stringify(object));
  }
  /** Remove a device's authorization (PIN) from storage. */
  removeAuthorization(name) {
    this._statusMessageHandler(`removeAuthorization for "${name}"`);
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.remove({
      key: name
    });
  }
  static {
    this.ctorParameters = () => [];
  }
};
LockDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], LockDataService);


/***/ }),

/***/ 3224:
/*!***************************************!*\
  !*** ./src/app/util/dynamic-queue.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicQueue: () => (/* binding */ DynamicQueue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */
class DynamicQueue {
  constructor() {
    this.queue = []; // Typed array of QueueItem
    this.pendingPromise = false;
    this.workingOnPromise = false;
  }
  /**
   * Flushes the queue by clearing all items.
   */
  flush() {
    this.queue = [];
  }
  /**
   * Add a function to the queue for execution; return an enclosing Promise.
   * The secondary Promise is needed because the function's Promise can only
   * be secured by beginning execution.
   *
   * @param operation - The Promise-returning function to enqueue
   * @returns Promise for the operation's result
   */
  enqueue(operation) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        operation,
        resolve,
        reject
      });
      this.dequeue();
    });
  }
  /** If not busy, pull the next function from the queue and execute it. When the
   * promise completes, the next item is recursively started. Repeats until
   * the queue is empty. With promises, the enqueueing task only needs to
   * invoke dequeue() when it pushes onto an empty queue.
   *
   * @returns boolean indicating if an item was dequeued
   */
  dequeue() {
    if (this.workingOnPromise) {
      return false;
    }
    const item = this.queue.shift();
    if (!item) {
      return false;
    }
    try {
      this.workingOnPromise = true;
      item.operation().then(value => {
        // Explicitly typed value, can be refined with T
        this.workingOnPromise = false;
        item.resolve(value);
        this.dequeue();
      }).catch(err => {
        // Explicitly typed err, can be refined
        this.workingOnPromise = false;
        item.reject(err);
        this.dequeue();
      });
    } catch (err) {
      this.workingOnPromise = false;
      item.reject(err);
      this.dequeue();
    }
    return true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicQueue);

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		1603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		2273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		2095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-GIsHsYIB_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-GIsHsYIB_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		5458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input-otp.entry.js": [
		381,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-otp_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"default-node_modules_ionic_core_dist_esm_input_utils-zWijNCrx_js-node_modules_ionic_core_dist-2e0994",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		8353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-option.entry.js": [
		8442,
		"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
	],
	"./ion-picker-column.entry.js": [
		3110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
	],
	"./ion-picker.entry.js": [
		5575,
		"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
	],
	"./ion-popover.entry.js": [
		6772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		4639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment-content.entry.js": [
		4312,
		"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
	],
	"./ion-segment-view.entry.js": [
		4540,
		"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select-modal.entry.js": [
		7101,
		"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_input_utils-zWijNCrx_js-node_modules_ionic_core_dist-2e0994",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4140;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 8856:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/home/edit-name-modal.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDE2cHggMDsKICAgIH0KCiAgICAuaW5wdXQtZ3JvdXAgewogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7CiAgICB9CgogICAgLm5hbWUtaW5wdXQgewogICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7CiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7CiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7CiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAtLWJvcmRlci13aWR0aDogMXB4OwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgbWFyZ2luLXRvcDogOHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50IHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICByaWdodDogMTZweDsKICAgICAgYm90dG9tOiAxMnB4OwogICAgICBmb250LXNpemU6IDEycHg7CiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgcGFkZGluZzogMnB4IDZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgfQoKICAgIC5jaGFyLWNvdW50Lndhcm5pbmcgewogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOwogICAgfQoKICAgIC5kZXZpY2UtaW5mbyB7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgcGFkZGluZzogMTZweDsKICAgICAgbWFyZ2luLXRvcDogMTZweDsKICAgIH0KCiAgICAuaW5mby1pdGVtIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiA4cHg7CiAgICB9CgogICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMDsKICAgIH0KCiAgICAubGFiZWwgewogICAgICBmb250LXdlaWdodDogNTAwOwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICB9CgogICAgLnZhbHVlIHsKICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OwogICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7CiAgICB9CgogICAgLnNhdmUtYnV0dG9uIHsKICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDsKICAgIH0KCiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KCiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHsKICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgIH0KICA%3D!./src/app/home/edit-name-modal.component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
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
  
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtbmFtZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQix1Q0FBdUM7TUFDdkMsb0NBQW9DO01BQ3BDLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2YsOEJBQThCO01BQzlCLGtDQUFrQztNQUNsQyxnQkFBZ0I7TUFDaEIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsK0JBQStCO0lBQ2pDOztJQUVBO01BQ0Usa0NBQWtDO01BQ2xDLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLDRCQUE0QjtNQUM1QixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsOEJBQThCO01BQzlCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0Usb0JBQW9CO01BQ3BCLHdCQUF3QjtJQUMxQjs7SUFFQTtNQUNFLG9DQUFvQztNQUNwQyxzQ0FBc0M7SUFDeEM7O0lBRUE7TUFDRSxvQ0FBb0M7TUFDcEMsc0NBQXNDO0lBQ3hDIiwiZmlsZSI6ImVkaXQtbmFtZS1tb2RhbC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgLm5hbWUtaW5wdXQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgIC5jaGFyLWNvdW50IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgYm90dG9tOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLmNoYXItY291bnQud2FybmluZyB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgIH1cblxuICAgIC5kZXZpY2UtaW5mbyB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLmluZm8taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuaW5mby1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAubGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnZhbHVlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIH1cblxuICAgIC5zYXZlLWJ1dHRvbiB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cblxuICAgIGlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICAiXX0= */`, "",{"version":3,"sources":["webpack://./src/app/home/edit-name-modal.component.ts"],"names":[],"mappings":";IACI;MACE,eAAe;IACjB;;IAEA;MACE,kBAAkB;MAClB,mBAAmB;IACrB;;IAEA;MACE,qBAAqB;MACrB,mBAAmB;MACnB,mBAAmB;MACnB,sBAAsB;MACtB,oBAAoB;MACpB,mBAAmB;MACnB,uCAAuC;MACvC,oCAAoC;MACpC,eAAe;IACjB;;IAEA;MACE,kBAAkB;MAClB,WAAW;MACX,YAAY;MACZ,eAAe;MACf,8BAA8B;MAC9B,kCAAkC;MAClC,gBAAgB;MAChB,kBAAkB;IACpB;;IAEA;MACE,+BAA+B;IACjC;;IAEA;MACE,kCAAkC;MAClC,kBAAkB;MAClB,aAAa;MACb,gBAAgB;IAClB;;IAEA;MACE,aAAa;MACb,8BAA8B;MAC9B,mBAAmB;MACnB,kBAAkB;IACpB;;IAEA;MACE,gBAAgB;IAClB;;IAEA;MACE,gBAAgB;MAChB,4BAA4B;MAC5B,eAAe;IACjB;;IAEA;MACE,8BAA8B;MAC9B,eAAe;MACf,iBAAiB;MACjB,qBAAqB;IACvB;;IAEA;MACE,oBAAoB;MACpB,wBAAwB;IAC1B;;IAEA;MACE,oCAAoC;MACpC,sCAAsC;IACxC;;IAEA;MACE,oCAAoC;MACpC,sCAAsC;IACxC;;AAEJ,w5GAAw5G","sourcesContent":["\n    .edit-name-container {\n      padding: 16px 0;\n    }\n\n    .input-group {\n      position: relative;\n      margin-bottom: 24px;\n    }\n\n    .name-input {\n      --padding-start: 16px;\n      --padding-end: 16px;\n      --padding-top: 12px;\n      --padding-bottom: 12px;\n      --border-radius: 8px;\n      --border-width: 1px;\n      --border-color: var(--ion-color-medium);\n      --background: var(--ion-color-light);\n      margin-top: 8px;\n    }\n\n    .char-count {\n      position: absolute;\n      right: 16px;\n      bottom: 12px;\n      font-size: 12px;\n      color: var(--ion-color-medium);\n      background: var(--ion-color-light);\n      padding: 2px 6px;\n      border-radius: 4px;\n    }\n\n    .char-count.warning {\n      color: var(--ion-color-warning);\n    }\n\n    .device-info {\n      background: var(--ion-color-light);\n      border-radius: 8px;\n      padding: 16px;\n      margin-top: 16px;\n    }\n\n    .info-item {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 8px;\n    }\n\n    .info-item:last-child {\n      margin-bottom: 0;\n    }\n\n    .label {\n      font-weight: 500;\n      color: var(--ion-color-dark);\n      font-size: 14px;\n    }\n\n    .value {\n      color: var(--ion-color-medium);\n      font-size: 14px;\n      text-align: right;\n      word-break: break-all;\n    }\n\n    .save-button {\n      --border-radius: 8px;\n      margin: 0 16px 16px 16px;\n    }\n\n    ion-header ion-toolbar {\n      --background: var(--ion-color-light);\n      --border-color: var(--ion-color-light);\n    }\n\n    ion-footer ion-toolbar {\n      --background: var(--ion-color-light);\n      --border-color: var(--ion-color-light);\n    }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNpQztBQUUxRSxNQUFNRyxNQUFNLEdBQVcsQ0FDckI7RUFDRUMsSUFBSSxFQUFFLE1BQU07RUFDWkMsWUFBWSxFQUFFQSxDQUFBLEtBQU0sd0pBQTRCLENBQUNDLElBQUksQ0FBRUMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLGNBQWM7Q0FDN0UsRUFDRDtFQUNFSixJQUFJLEVBQUUsRUFBRTtFQUNSSyxVQUFVLEVBQUUsTUFBTTtFQUNsQkMsU0FBUyxFQUFFO0NBQ1osQ0FDRjtBQVFNLElBQU1DLGdCQUFnQixHQUF0QixNQUFNQSxnQkFBZ0IsR0FBSTtBQUFwQkEsZ0JBQWdCLEdBQUFDLGlEQUFBLEVBTjVCWix1REFBUSxDQUFDO0VBQ1JhLE9BQU8sRUFBRSxDQUNQWCx5REFBWSxDQUFDWSxPQUFPLENBQUNYLE1BQU0sRUFBRTtJQUFFWSxrQkFBa0IsRUFBRWQsOERBQWlCQTtFQUFBLENBQUUsQ0FBQyxDQUN4RTtFQUNEZSxPQUFPLEVBQUUsQ0FBQ2QseURBQVk7Q0FDdkIsQ0FBQyxDLEVBQ1dTLGdCQUFnQixDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQlM7QUFFQTtBQUNjO0FBQ047QUFNM0MsSUFBTVUsWUFBWSxHQUFsQixNQUFNQSxZQUFZO0VBQ3ZCQyxZQUNVQyxRQUFrQjtJQUFsQixLQUFBQSxRQUFRLEdBQVJBLFFBQVE7SUFFaEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEI7RUFFQUEsYUFBYUEsQ0FBQTtJQUNYLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxLQUFLLEVBQUUsQ0FBQ25CLElBQUksQ0FBRW9CLEdBQUcsSUFBSTtNQUNqQ04sNERBQVMsQ0FBQ08sSUFBSSxFQUFFO01BQ2hCUixrRUFBWSxDQUFDUSxJQUFJLEVBQUU7TUFDbkIsSUFBSUMsYUFBYSxHQUFHLENBQUMsY0FBYyxDQUFDO01BQ3BDO01BQ0FDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDQyxLQUFLLENBQUNILGFBQWEsQ0FBQztJQUN6QyxDQUFDLENBQUM7RUFDSjs7Ozs7OztBQWZXUCxZQUFZLEdBQUFULGlEQUFBLEVBSnhCSyx3REFBUyxDQUFDO0VBQ1RlLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxRQUFBLEVBQUFDLDJEQUFBQTtDQUNELENBQUMsQyxFQUNXYixZQUFZLENBZ0J4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQndDO0FBQ0k7QUFDYTtBQUNMO0FBRXNCO0FBQ1Y7QUFDVDtBQUNUO0FBQzJCO0FBRTlCO0FBQ1E7QUFDUTtBQUNHO0FBc0J4RCxJQUFNeUIsU0FBUyxHQUFmLE1BQU1BLFNBQVMsR0FBRztBQUFaQSxTQUFTLEdBQUFsQyxpREFBQSxFQXJCckJaLHVEQUFRLENBQUM7RUFDTitDLFlBQVksRUFBRSxDQUNWMUIsd0RBQVksRUFDWm9CLG1GQUFzQixDQUN6QjtFQUNENUIsT0FBTyxFQUFFLENBQ0x1QixxRUFBYSxFQUNiRCx3REFBVyxFQUNYSSx3REFBVyxDQUFDekIsT0FBTyxFQUFFLEVBQ3JCSCxpRUFBZ0IsQ0FDbkI7RUFDRHFDLFNBQVMsRUFBRSxDQUNQTixzREFBRyxFQUNIQyw2REFBVSxFQUNWQyxxRUFBYyxFQUNkQyx3RUFBZSxFQUNmUCxxRkFBa0IsRUFDbEI7SUFBRVcsT0FBTyxFQUFFWixnRUFBa0I7SUFBRWEsUUFBUSxFQUFFViwrREFBa0JBO0VBQUEsQ0FBRSxDQUNoRTtFQUNEVyxTQUFTLEVBQUUsQ0FBQzlCLHdEQUFZO0NBQzNCLENBQUMsQyxFQUNXeUIsU0FBUyxDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDOEM7QUFDdEI7QUE0STFDLElBQU1MLHNCQUFzQixHQUE1QixNQUFNQSxzQkFBc0I7RUFVakNuQixZQUFvQmtDLFNBQTBCO0lBQTFCLEtBQUFBLFNBQVMsR0FBVEEsU0FBUztJQVRwQixLQUFBQyxXQUFXLEdBQVcsRUFBRTtJQUd4QixLQUFBQyxjQUFjLEdBQVksS0FBSztJQUU5QixLQUFBQyxRQUFRLEdBQUcsSUFBSVAsdURBQVksRUFBVTtJQUUvQyxLQUFBUSxVQUFVLEdBQVcsRUFBRTtFQUUwQjtFQUVqREMsUUFBUUEsQ0FBQTtJQUNOLElBQUksQ0FBQ0QsVUFBVSxHQUFHLElBQUksQ0FBQ0gsV0FBVztFQUNwQztFQUVBSyxhQUFhQSxDQUFBO0lBQ1g7SUFDQSxJQUFJLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxNQUFNLEdBQUcsRUFBRSxFQUFFO01BQy9CLElBQUksQ0FBQ0gsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxDQUFDSSxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwRDtFQUNGO0VBRUFDLElBQUlBLENBQUE7SUFDRixNQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDTixVQUFVLENBQUNPLElBQUksRUFBRTtJQUMxQyxJQUFJRCxXQUFXLENBQUNILE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDMUIsSUFBSSxDQUFDSixRQUFRLENBQUNTLElBQUksQ0FBQ0YsV0FBVyxDQUFDO01BQy9CLElBQUksQ0FBQ1YsU0FBUyxDQUFDYSxPQUFPLENBQUNILFdBQVcsRUFBRSxNQUFNLENBQUM7SUFDN0M7RUFDRjtFQUVBSSxNQUFNQSxDQUFBO0lBQ0osSUFBSSxDQUFDZCxTQUFTLENBQUNhLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO0VBQ3hDOzs7Ozs7Ozs7Y0FoQ0NoQixnREFBS0E7TUFBQTs7Y0FDTEEsZ0RBQUtBO01BQUE7O2NBQ0xBLGdEQUFLQTtNQUFBOztjQUNMQSxnREFBS0E7TUFBQTs7Y0FFTEMsaURBQU1BO01BQUE7Ozs7QUFOSWIsc0JBQXNCLEdBQUE3QixpREFBQSxFQTFJbENLLHdEQUFTLENBQUM7RUFDVGUsUUFBUSxFQUFFLHFCQUFxQjtFQUMvQkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtRFQ7O0NBb0ZGLENBQUMsQyxFQUNXUSxzQkFBc0IsQ0FrQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS3FEO0FBSzNCO0FBQ2dEO0FBQy9CO0FBQ2E7QUFDSjtBQTJCckQsTUFBTW1DLEdBQUcsR0FBRyxDQUFDO0FBQ2IsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFDYixNQUFNQyxHQUFHLEdBQUcsQ0FBQztBQUNiLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQ2IsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFDZCxNQUFNQyxRQUFRLEdBQUcsRUFBRTtBQUNuQixNQUFNQyxjQUFjLEdBQUcsT0FBTztBQUM5QixNQUFNQyxjQUFjLEdBQUcsWUFBWTtBQUM1QixNQUFNQyxXQUFXLEdBQUcsSUFBSTtBQUN4QixNQUFNQyxXQUFXLEdBQUcsSUFBSTtBQUN4QixNQUFNQyxXQUFXLEdBQUcsSUFBSTtBQUN4QixNQUFNQyxXQUFXLEdBQUcsSUFBSTtBQUN4QixNQUFNQyxZQUFZLEdBQUcsSUFBSTtBQUN6QixNQUFNQyx5QkFBeUIsR0FBRyxJQUFJO0FBQ3RDLE1BQU1DLHVCQUF1QixHQUFHLElBQUk7QUFDcEMsTUFBTUMsV0FBVyxHQUFHO0VBQ3pCLENBQUNQLFdBQVcsR0FBRyxrQ0FBa0M7RUFDakQsQ0FBQ0MsV0FBVyxHQUFHLHFDQUFxQztFQUNwRCxDQUFDQyxXQUFXLEdBQUcsd0NBQXdDO0VBQ3ZELENBQUNDLFdBQVcsR0FBRyxvQ0FBb0M7RUFDbkQsQ0FBQ0MsWUFBWSxHQUFHLHdDQUF3QztFQUN4RCxDQUFDQyx5QkFBeUIsR0FBRyw0Q0FBNEM7RUFDekUsQ0FBQ0MsdUJBQXVCLEdBQUc7Q0FDNUI7QUFFRDtBQUNPLE1BQU1FLGVBQWUsR0FBRztFQUM3QixDQUFDUCxXQUFXLEdBQUcsT0FBTztFQUN0QixDQUFDQyxXQUFXLEdBQUcsWUFBWTtFQUMzQixDQUFDQyxXQUFXLEdBQUcsV0FBVztFQUMxQixDQUFDQyxZQUFZLEdBQUcsT0FBTztFQUN2QixDQUFDQyx5QkFBeUIsR0FBRyxTQUFTO0VBQ3RDLENBQUNDLHVCQUF1QixHQUFHO0NBQzVCO0FBRUQ7QUFDTyxNQUFNRyxlQUFlLEdBQUc7RUFDN0IsQ0FBQ1IsV0FBVyxHQUFHO0lBQUVTLFVBQVUsRUFBRSxDQUFDO0lBQUVDLEtBQUssRUFBRTtFQUFJLENBQUU7RUFDN0MsQ0FBQ1QsV0FBVyxHQUFHO0lBQUVRLFVBQVUsRUFBRSxDQUFDO0lBQUVDLEtBQUssRUFBRTtFQUFJLENBQUU7RUFDN0MsQ0FBQ1IsV0FBVyxHQUFHO0lBQUVPLFVBQVUsRUFBRSxDQUFDO0lBQUVDLEtBQUssRUFBRTtFQUFDLENBQUU7RUFDMUMsQ0FBQ1AsWUFBWSxHQUFHO0lBQUVNLFVBQVUsRUFBRSxDQUFDO0lBQUVDLEtBQUssRUFBRTtFQUFHLENBQUU7RUFDN0MsQ0FBQ04seUJBQXlCLEdBQUc7SUFBRUssVUFBVSxFQUFFLENBQUM7SUFBRUMsS0FBSyxFQUFFO0VBQUMsQ0FBRTtFQUN4RCxDQUFDTCx1QkFBdUIsR0FBRztJQUFFSSxVQUFVLEVBQUUsQ0FBQztJQUFFQyxLQUFLLEVBQUU7RUFBQztDQUNyRDtBQUNNLE1BQU1DLFFBQVEsR0FBRyxJQUFJO0FBQ3JCLE1BQU1DLFVBQVUsR0FBRyxJQUFJO0FBQzlCLE1BQU1DLFFBQVEsR0FBRyxDQUFDRCxVQUFVO0FBQ3JCLE1BQU1FLHNCQUFzQixHQUFHLEdBQUc7QUFDekMsTUFBTUMsU0FBUyxHQUFHLElBQUk7QUFLZixJQUFNekQsVUFBVSxHQUFoQixNQUFNQSxVQUFVO0VBOEJyQnJCLFlBQ1UrRSxrQkFBc0MsRUFDdENDLEdBQVE7SUFEUixLQUFBRCxrQkFBa0IsR0FBbEJBLGtCQUFrQjtJQUNsQixLQUFBQyxHQUFHLEdBQUhBLEdBQUc7SUE1QmIsS0FBQUMsUUFBUSxHQUFrQixJQUFJO0lBRTlCLEtBQUFDLGlCQUFpQixHQUF3QixJQUFJO0lBQzdDLEtBQUFDLHNCQUFzQixHQUF3QixJQUFJO0lBQ2xELEtBQUFDLGVBQWUsR0FBd0IsSUFBSTtJQUMzQyxLQUFBQyxPQUFPLEdBQWlCLElBQUloQyw2REFBWSxFQUFFO0lBQzFDLEtBQUFpQyxtQkFBbUIsR0FBaUMsSUFBSTtJQUV4RCxLQUFBQyxjQUFjLEdBQVEsSUFBSTtJQUMxQixLQUFBQyxZQUFZLEdBQVEsSUFBSTtJQUN4QixLQUFBQyxhQUFhLEdBQUcsS0FBSztJQUVyQixLQUFBQyxlQUFlLEdBQUcsc0NBQXNDO0lBRXhELEtBQUFDLGNBQWMsR0FBRyxzQ0FBc0M7SUFFdkQsS0FBQUMsZUFBZSxHQUFHLHNDQUFzQztJQUV4RCxLQUFBQyxjQUFjLEdBQUcsc0NBQXNDO0lBR3ZELEtBQUFDLGlCQUFpQixHQUFRLElBQUk7SUFDN0IsS0FBQUMsbUJBQW1CLEdBQWtCLElBQUk7SUFDekMsS0FBQUMsaUJBQWlCLEdBQVcsQ0FBQztJQUM3QixLQUFBQyxvQkFBb0IsR0FBVyxDQUFDO0lBTTlCLElBQUksQ0FBQ2xCLGtCQUFrQixDQUFDbUIsVUFBVSxDQUFDQyxpQkFBaUIsRUFBRTtNQUNwRHBCLGtCQUFrQixDQUFDbUIsVUFBVSxDQUFDQyxpQkFBaUIsR0FDN0Msc0NBQXNDO0lBQzFDO0lBQ0EsSUFBSSxDQUFDcEIsa0JBQWtCLENBQUNtQixVQUFVLENBQUNFLGNBQWMsRUFBRTtNQUNqRHJCLGtCQUFrQixDQUFDbUIsVUFBVSxDQUFDRSxjQUFjLEdBQzFDLG1DQUFtQztJQUN2QztFQUNGO0VBRUFDLEtBQUtBLENBQUNDLGVBQW9CLEVBQUVDLGFBQWtCO0lBQzVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDNUIsSUFBSSxDQUFDSCxlQUFlLElBQUksQ0FBQ0MsYUFBYSxFQUFFO01BQ3RDLE1BQU0seUJBQXlCO0lBQ2pDO0lBQ0EsSUFBSSxDQUFDRyxhQUFhLEdBQUd2RCxxREFBTSxDQUFDd0QsT0FBTyxFQUFFO0lBQ3JDLElBQUksQ0FBQ3BCLGNBQWMsR0FBR2UsZUFBZTtJQUNyQyxJQUFJLENBQUNkLFlBQVksR0FBR2UsYUFBYTtJQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDdkIsR0FBRyxFQUFFO01BQ2IsSUFBSTRCLE9BQU8sR0FBRztRQUNaQyxTQUFTLEVBQUVBLENBQUNDLENBQU0sRUFBRUMsQ0FBTSxLQUFLQyxPQUFPLENBQUNDLE1BQU0sRUFBRTtRQUMvQ0MsTUFBTSxFQUFFQSxDQUFBLEtBQU1GLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFO1FBQzlCRSxTQUFTLEVBQUVBLENBQUEsS0FBTSxJQUFJO1FBQ3JCQyxRQUFRLEVBQUVBLENBQUEsS0FBTTtPQUNqQjtNQUNELElBQUksQ0FBQ3BDLEdBQUcsR0FBRzRCLE9BQWM7TUFDekJTLEtBQUssQ0FDSCx1RUFBdUUsQ0FDeEU7SUFDSCxDQUFDLE1BQU07TUFDTCxJQUFJQyxDQUFDLEdBQUcsSUFBSSxDQUFDdEMsR0FBRztNQUNoQixJQUFJLEVBQUUsUUFBUSxJQUFJc0MsQ0FBQyxDQUFDLEVBQUU7UUFDcEIsSUFBSSxDQUFDdEMsR0FBRyxDQUFDa0MsTUFBTSxHQUFHLElBQUksQ0FBQ0ssU0FBUyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQzdDO0lBQ0Y7SUFDQTtFQUNGO0VBRU1DLFdBQVdBLENBQUE7SUFBQSxJQUFBQyxLQUFBO0lBQUEsT0FBQUMsZ0tBQUE7TUFDZixJQUFJO1FBQ0Y7UUFDQSxNQUFNQyxVQUFVLFNBQVNGLEtBQUksQ0FBQ2hCLGFBQWE7UUFDM0NnQixLQUFJLENBQUN6SCxRQUFRLEdBQUcySCxVQUFVLENBQUNDLGVBQWU7UUFDMUNILEtBQUksQ0FBQ0ksU0FBUyxHQUFHRixVQUFVLENBQUNFLFNBQVM7UUFFckM7UUFDQSxJQUFJO1VBQ0YsTUFBTUosS0FBSSxDQUFDMUMsR0FBRyxDQUFDNkIsU0FBUyxFQUFFO1FBQzVCLENBQUMsQ0FBQyxPQUFPa0IsUUFBUSxFQUFFO1VBQ2pCO1VBQ0FMLEtBQUksQ0FBQ25DLGNBQWMsQ0FBQyxnREFBZ0QsQ0FBQztVQUNyRSxJQUFJO1lBQ0YsTUFBTW1DLEtBQUksQ0FBQzFDLEdBQUcsQ0FBQ2tDLE1BQU0sRUFBRTtZQUN2QlEsS0FBSSxDQUFDbkMsY0FBYyxDQUFDLGdDQUFnQyxDQUFDO1VBQ3ZELENBQUMsQ0FBQyxPQUFPeUMsV0FBVyxFQUFFO1lBQ3BCTixLQUFJLENBQUNuQyxjQUFjLENBQUMsMENBQTBDLENBQUM7WUFDL0RtQyxLQUFJLENBQUNsQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsZ0VBQWdFLENBQUM7WUFDdEcsT0FBTyxLQUFLO1VBQ2Q7UUFDRjtRQUVBO1FBQ0EsSUFBSWtDLEtBQUksQ0FBQ3pILFFBQVEsS0FBSyxTQUFTLEVBQUU7VUFDL0IsSUFBSXlILEtBQUksQ0FBQ0ksU0FBUyxJQUFJLElBQUksRUFBRTtZQUMxQjtZQUNBLE1BQU1HLG1CQUFtQixTQUFTUCxLQUFJLENBQUMzQyxrQkFBa0IsQ0FBQ21ELGVBQWUsQ0FDdkVSLEtBQUksQ0FBQzNDLGtCQUFrQixDQUFDbUIsVUFBVSxDQUFDaUMsU0FBUyxDQUM3QztZQUNELE1BQU1DLGtCQUFrQixTQUFTVixLQUFJLENBQUMzQyxrQkFBa0IsQ0FBQ21ELGVBQWUsQ0FDdEVSLEtBQUksQ0FBQzNDLGtCQUFrQixDQUFDbUIsVUFBVSxDQUFDbUMsb0JBQW9CLENBQ3hEO1lBRUQsSUFBSSxDQUFDSixtQkFBbUIsQ0FBQ0ssYUFBYSxJQUFJLENBQUNGLGtCQUFrQixDQUFDRSxhQUFhLEVBQUU7Y0FDM0VaLEtBQUksQ0FBQ25DLGNBQWMsQ0FBQyxrREFBa0QsQ0FBQztjQUV2RSxJQUFJLENBQUMwQyxtQkFBbUIsQ0FBQ0ssYUFBYSxFQUFFO2dCQUN0QyxNQUFNQyxlQUFlLFNBQVNiLEtBQUksQ0FBQzNDLGtCQUFrQixDQUFDeUQsaUJBQWlCLENBQ3JFZCxLQUFJLENBQUMzQyxrQkFBa0IsQ0FBQ21CLFVBQVUsQ0FBQ2lDLFNBQVMsQ0FDN0M7Z0JBQ0QsSUFBSSxDQUFDSSxlQUFlLENBQUNELGFBQWEsRUFBRTtrQkFDbENaLEtBQUksQ0FBQ25DLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQztrQkFDbERtQyxLQUFJLENBQUNsQyxZQUFZLENBQUMscUJBQXFCLEVBQUUscURBQXFELENBQUM7a0JBQy9GLE9BQU8sS0FBSztnQkFDZDtjQUNGO2NBRUEsSUFBSSxDQUFDNEMsa0JBQWtCLENBQUNFLGFBQWEsRUFBRTtnQkFDckMsTUFBTUcsY0FBYyxTQUFTZixLQUFJLENBQUMzQyxrQkFBa0IsQ0FBQ3lELGlCQUFpQixDQUNwRWQsS0FBSSxDQUFDM0Msa0JBQWtCLENBQUNtQixVQUFVLENBQUNtQyxvQkFBb0IsQ0FDeEQ7Z0JBQ0QsSUFBSSxDQUFDSSxjQUFjLENBQUNILGFBQWEsRUFBRTtrQkFDakNaLEtBQUksQ0FBQ25DLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQztrQkFDakRtQyxLQUFJLENBQUNsQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsZ0VBQWdFLENBQUM7a0JBQzFHLE9BQU8sS0FBSztnQkFDZDtjQUNGO1lBQ0Y7VUFDRixDQUFDLE1BQU07WUFDTDtZQUNBLE1BQU1rRCxjQUFjLFNBQVNoQixLQUFJLENBQUMzQyxrQkFBa0IsQ0FBQ21ELGVBQWUsQ0FDbEVSLEtBQUksQ0FBQzNDLGtCQUFrQixDQUFDbUIsVUFBVSxDQUFDRSxjQUFjLENBQ2xEO1lBQ0QsTUFBTXVDLGlCQUFpQixTQUFTakIsS0FBSSxDQUFDM0Msa0JBQWtCLENBQUNtRCxlQUFlLENBQ3JFUixLQUFJLENBQUMzQyxrQkFBa0IsQ0FBQ21CLFVBQVUsQ0FBQ0MsaUJBQWlCLENBQ3JEO1lBRUQsSUFBSSxDQUFDdUMsY0FBYyxDQUFDSixhQUFhLElBQUksQ0FBQ0ssaUJBQWlCLENBQUNMLGFBQWEsRUFBRTtjQUNyRVosS0FBSSxDQUFDbkMsY0FBYyxDQUFDLHFDQUFxQyxDQUFDO2NBRTFELElBQUksQ0FBQ21ELGNBQWMsQ0FBQ0osYUFBYSxFQUFFO2dCQUNqQyxNQUFNTSxVQUFVLFNBQVNsQixLQUFJLENBQUMzQyxrQkFBa0IsQ0FBQ3lELGlCQUFpQixDQUNoRWQsS0FBSSxDQUFDM0Msa0JBQWtCLENBQUNtQixVQUFVLENBQUNFLGNBQWMsQ0FDbEQ7Z0JBQ0QsSUFBSSxDQUFDd0MsVUFBVSxDQUFDTixhQUFhLEVBQUU7a0JBQzdCWixLQUFJLENBQUNuQyxjQUFjLENBQUMsa0NBQWtDLENBQUM7a0JBQ3ZEbUMsS0FBSSxDQUFDbEMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLHNEQUFzRCxDQUFDO2tCQUNoRyxPQUFPLEtBQUs7Z0JBQ2Q7Y0FDRjtjQUVBLElBQUksQ0FBQ21ELGlCQUFpQixDQUFDTCxhQUFhLEVBQUU7Z0JBQ3BDLE1BQU1PLGFBQWEsU0FBU25CLEtBQUksQ0FBQzNDLGtCQUFrQixDQUFDeUQsaUJBQWlCLENBQ25FZCxLQUFJLENBQUMzQyxrQkFBa0IsQ0FBQ21CLFVBQVUsQ0FBQ0MsaUJBQWlCLENBQ3JEO2dCQUNELElBQUksQ0FBQzBDLGFBQWEsQ0FBQ1AsYUFBYSxFQUFFO2tCQUNoQ1osS0FBSSxDQUFDbkMsY0FBYyxDQUFDLHFDQUFxQyxDQUFDO2tCQUMxRG1DLEtBQUksQ0FBQ2xDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSwrREFBK0QsQ0FBQztrQkFDekcsT0FBTyxLQUFLO2dCQUNkO2NBQ0Y7WUFDRjtVQUNGO1FBQ0Y7UUFFQWtDLEtBQUksQ0FBQ25DLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQztRQUM5QyxPQUFPLElBQUk7TUFDYixDQUFDLENBQUMsT0FBT3VELEtBQUssRUFBRTtRQUNkcEIsS0FBSSxDQUFDbkMsY0FBYyxDQUFDLGdDQUFnQ3VELEtBQUssRUFBRSxDQUFDO1FBQzVEcEIsS0FBSSxDQUFDbEMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLGdFQUFnRSxDQUFDO1FBQ3RHLE9BQU8sS0FBSztNQUNkO0lBQUM7RUFDSDtFQUVBK0IsU0FBU0EsQ0FBQTtJQUNQLE1BQU13QixJQUFJLEdBQUcsSUFBSTtJQUNqQixJQUFJLENBQUN4RCxjQUFjLENBQUMsb0JBQW9CLENBQUM7SUFFekMsSUFBSXlELFFBQVEsR0FBMkIsSUFBSSxDQUFDaEUsR0FBRyxDQUFDaUUsdUJBQXVCLEVBQUU7SUFDekUsSUFBSUQsUUFBUSxLQUFLLElBQUksRUFBRTtNQUNyQixPQUFPaEMsT0FBTyxDQUFDQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDM0M7SUFFQSxJQUFJLENBQUN6QixZQUFZLENBQ2YsMkRBQTJELENBQzVEO0lBQ0QsT0FBTyxJQUFJd0IsT0FBTyxDQUFDLENBQUNrQyxPQUFPLEVBQUVqQyxNQUFNLEtBQUk7TUFDckMsSUFBSWtDLFlBQVksR0FBd0IsSUFBSTtNQUM1QyxNQUFNQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxNQUFLO1FBQzVCcEMsTUFBTSxDQUFDLGNBQWMsQ0FBQztNQUN4QixDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQztNQUVka0MsWUFBWSxHQUFHSCxRQUFTLENBQUNNLFNBQVMsQ0FBRUMsS0FBSyxJQUFJO1FBQzNDUixJQUFJLENBQUN4RCxjQUFjLENBQUMsd0JBQXdCZ0UsS0FBSyxFQUFFLENBQUM7UUFDcEQsSUFBSUMsT0FBTyxHQUFHLEtBQUs7UUFDbkIsSUFBSUQsS0FBSyxLQUFLLElBQUksRUFBRTtVQUNsQkwsT0FBTyxDQUFDLElBQUksQ0FBQztVQUNiTSxPQUFPLEdBQUcsSUFBSTtRQUNoQixDQUFDLE1BQU0sSUFBSUQsS0FBSyxLQUFLLGNBQWMsSUFBSUEsS0FBSyxLQUFLLGFBQWEsRUFBRTtVQUM5RHRDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBR3NDLEtBQUssQ0FBQztVQUNqQ0MsT0FBTyxHQUFHLElBQUk7UUFDaEI7UUFDQSxJQUFJQSxPQUFPLEVBQUU7VUFDWEMsWUFBWSxDQUFDTCxLQUFLLENBQUM7VUFDbkJELFlBQWEsQ0FBQ08sV0FBVyxFQUFFO1VBQzNCUCxZQUFZLEdBQUcsSUFBSTtVQUNuQkgsUUFBUSxHQUFHLElBQUk7VUFDZkQsSUFBSSxDQUFDL0QsR0FBRyxDQUNMMkUsc0JBQXNCLEVBQUUsQ0FDeEIzSyxJQUFJLENBQUMsTUFBSztZQUNUK0osSUFBSSxDQUFDeEQsY0FBYyxDQUFDLDRCQUE0QixDQUFDO1VBQ25ELENBQUMsQ0FBQyxDQUNEcUUsS0FBSyxDQUFFQyxNQUFNLElBQUk7WUFDaEJkLElBQUksQ0FBQ3hELGNBQWMsQ0FBQyw4QkFBOEIsR0FBR3NFLE1BQU0sQ0FBQztVQUM5RCxDQUFDLENBQUM7VUFDSmQsSUFBSSxDQUFDdkQsWUFBWSxDQUFDLElBQUksQ0FBQztRQUN6QjtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUEyQixTQUFTQSxDQUFDMkMsUUFBa0I7SUFDMUI7SUFDQSxJQUFJLENBQUN2RSxjQUFjLENBQUMsaUNBQWlDLENBQUM7SUFDdEQsT0FBTyxJQUFJLENBQUNQLEdBQUcsQ0FBQ21DLFNBQVMsQ0FBQzJDLFFBQVEsQ0FBQztFQUNyQztFQUVBMUMsUUFBUUEsQ0FBQTtJQUNOLE9BQU8sSUFBSSxDQUFDcEMsR0FBRyxDQUFDb0MsUUFBUSxFQUFFO0VBQzVCO0VBRUEyQyxTQUFTQSxDQUFDQyxRQUFnQjtJQUN4QixNQUFNakIsSUFBSSxHQUFHLElBQUk7SUFDakIsSUFBSSxDQUFDOUQsUUFBUSxHQUFHLElBQUk7SUFDcEJ1QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBR3VELFFBQVEsQ0FBQ0MsRUFBRSxDQUFDO0lBQ2hELElBQUksQ0FBQ0MsV0FBVyxDQUFDRixRQUFRLENBQUM7SUFDMUIsSUFBSSxDQUFDNUUsZUFBZSxHQUFHLElBQUloQyx5Q0FBTyxFQUFPO0lBQ3pDLElBQUkrRyxHQUFHLEdBQW9CLElBQUksQ0FBQ25GLEdBQUcsQ0FBQ29GLE9BQU8sQ0FBQ0osUUFBUSxDQUFDQyxFQUFFLENBQUM7SUFDeEQsSUFBSWpCLFFBQVEsR0FBMkIsSUFBSTtJQUMzQyxJQUFJLENBQUM5RCxpQkFBaUIsR0FBR2lGLEdBQUcsQ0FBQ2IsU0FBUztNQUFBLElBQUFlLElBQUEsR0FBQTFDLGdLQUFBLENBQ3BDLFdBQU8yQyxjQUFtQixFQUFJO1FBQzVCdkIsSUFBSSxDQUFDeEQsY0FBYyxDQUNqQixxQ0FBcUMrRSxjQUFjLENBQUNDLElBQUksUUFBUUQsY0FBYyxDQUFDTCxFQUFFLEVBQUUsQ0FDcEY7UUFDRGxCLElBQUksQ0FBQzlELFFBQVEsR0FBRytFLFFBQVEsQ0FBQ0MsRUFBRTtRQUMzQmxCLElBQUksQ0FBQzNELGVBQWdCLENBQUNvRixJQUFJLENBQUNGLGNBQWMsQ0FBQztRQUMxQ3ZCLElBQUksQ0FBQzFELE9BQU8sQ0FBQ29GLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEIxQixJQUFJLENBQUN0RCxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUJ1RCxRQUFRLEdBQUdELElBQUksQ0FBQy9ELEdBQUcsQ0FBQzBGLGlCQUFpQixDQUNuQ1YsUUFBUSxDQUFDQyxFQUFFLEVBQ1hsQixJQUFJLENBQUM0QixXQUFXLEVBQ2hCNUIsSUFBSSxDQUFDNkIsVUFBVSxDQUNoQjtRQUNELElBQUl6RixzQkFBc0IsR0FBRzZELFFBQVEsQ0FBQ00sU0FBUyxDQUFDO1VBQzlDa0IsSUFBSSxFQUFHSyxLQUFLLElBQ1Y5QixJQUFJLENBQUN6RCxtQkFBbUIsSUFBSXlELElBQUksQ0FBQ3pELG1CQUFtQixDQUFDdUYsS0FBSyxDQUFDO1VBQzdEL0IsS0FBSyxFQUFHQSxLQUFLLElBQUtDLElBQUksQ0FBQytCLGlCQUFpQixDQUFDaEMsS0FBSztTQUMvQyxDQUFDO1FBQ0ZDLElBQUksQ0FBQzdELGlCQUFrQixDQUFDNkYsR0FBRyxDQUFDNUYsc0JBQXNCLENBQUM7UUFDbkQ0RCxJQUFJLENBQUNpQyxjQUFjLENBQUNoQixRQUFRLENBQUM7TUFDL0IsQ0FBQztNQUFBLGlCQUFBaUIsRUFBQTtRQUFBLE9BQUFaLElBQUEsQ0FBQWEsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQTtNQUFBLElBQUFDLEtBQUEsR0FBQXpELGdLQUFBLENBQ0QsV0FBTzBELE1BQU0sRUFBSTtRQUNmQSxNQUFNLENBQUNDLGFBQWEsR0FBR3ZDLElBQUksQ0FBQzlELFFBQVEsS0FBSyxJQUFJO1FBQzdDOEQsSUFBSSxDQUFDeEQsY0FBYyxDQUNqQix3QkFBd0IsSUFDckI4RixNQUFNLENBQUNDLGFBQWEsR0FBRyxlQUFlLEdBQUcsR0FBRyxDQUFDLEdBQzlDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDLENBQ3pCO1FBQ0R0QyxJQUFJLENBQUMzRCxlQUFnQixDQUFDMEQsS0FBSyxDQUFDdUMsTUFBTSxDQUFDO1FBQ25DdEMsSUFBSSxDQUFDN0QsaUJBQWtCLENBQUN3RSxXQUFXLEVBQUU7UUFDckNYLElBQUksQ0FBQzdELGlCQUFpQixHQUFHLElBQUk7UUFDN0IsSUFBSSxDQUFDbUcsTUFBTSxDQUFDQyxhQUFhLEVBQUU7VUFDekJ2QyxJQUFJLENBQUMwQyxlQUFlLENBQUMxQyxJQUFJLENBQUM5RCxRQUFTLENBQUM7UUFDdEM7UUFDQThELElBQUksQ0FBQzlELFFBQVEsR0FBRyxJQUFJO1FBQ3BCOEQsSUFBSSxDQUFDdEQsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVCc0QsSUFBSSxDQUFDMUQsT0FBTyxDQUFDb0YsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0QjFCLElBQUksQ0FBQzJDLGFBQWEsRUFBRTtRQUNwQjNDLElBQUksQ0FBQzRDLFlBQVksRUFBRTtNQUNyQixDQUFDO01BQUEsaUJBQUFDLEdBQUE7UUFBQSxPQUFBUixLQUFBLENBQUFGLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsSUFDRjtJQUNELE9BQU8sSUFBSSxDQUFDL0YsZUFBZTtFQUM3QjtFQUVReUcsbUJBQW1CQSxDQUFDQyxpQkFBeUI7SUFDbkQsSUFBSUMsQ0FBQyxHQUFVLEVBQUU7SUFDakJELGlCQUFpQixDQUFDRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE9BQU8sQ0FBRUMsQ0FBQyxJQUFJO01BQ3pDSCxDQUFDLENBQUNJLElBQUksQ0FBQ0MsUUFBUSxDQUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDO0lBQ0YsT0FBT0csVUFBVSxDQUFDQyxJQUFJLENBQUNQLENBQUMsQ0FBQztFQUMzQjtFQUVRUSxtQkFBbUJBLENBQUNDLE1BQWtCO0lBQzVDLE9BQU9DLEtBQUssQ0FBQ0gsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FDdEJFLEdBQUcsQ0FBRTNGLENBQUMsSUFBS0EsQ0FBQyxDQUFDNEYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQzNDQyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2Q7RUFFQUMsVUFBVUEsQ0FBQTtJQUNSLE9BQU8sSUFBSSxDQUFDckgsYUFBYTtFQUMzQjtFQUVRc0gsV0FBV0EsQ0FDakJDLFdBQW1CLEVBQ25CQyxPQUFtQjtJQUFBLElBQUFDLE1BQUE7SUFFbkIsSUFBSUMsY0FBbUI7SUFDdkIsSUFBSUMsYUFBa0I7SUFDdEIsSUFBSUMsb0JBQW9CLEdBQVEsSUFBSTtJQUNwQyxJQUFJQyxTQUFTLEdBQVEsSUFBSTtJQUV6QixJQUFJLElBQUksQ0FBQ3JJLFFBQVEsS0FBSyxJQUFJLEVBQUU7TUFDMUIsSUFBSSxDQUFDTSxjQUFjLENBQUMsa0JBQWtCeUgsV0FBVyxxQkFBcUIsQ0FBQztNQUN2RSxPQUFPaEcsT0FBTyxDQUFDQyxNQUFNLENBQUMsZ0NBQWdDLENBQUM7SUFDekQ7SUFDQSxJQUFJLElBQUksQ0FBQ3hCLGFBQWEsS0FBSyxJQUFJLEVBQUU7TUFDL0IsSUFBSSxDQUFDRixjQUFjLENBQ2pCLG1CQUFtQnlILFdBQVcsc0NBQXNDLENBQ3JFO01BQ0QsT0FBT2hHLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGlDQUFpQyxDQUFDO0lBQzFEO0lBQ0EsSUFBSSxJQUFJLENBQUMzQixtQkFBbUIsSUFBSSxJQUFJLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxjQUFjLENBQ2pCLG1CQUFtQnlILFdBQVcsaUNBQWlDLENBQ2hFO01BQ0QsT0FBT2hHLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLHVDQUF1QyxDQUFDO0lBQ2hFO0lBRUEsSUFBSSxDQUFDeEIsYUFBYSxHQUFHLElBQUk7SUFDekJ3SCxPQUFPLENBQUN4SixHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ2hCd0osT0FBTyxDQUFDeEosR0FBRyxDQUFDLEdBQUd3SixPQUFPLENBQUNNLE1BQU0sQ0FDM0IsQ0FBQ0MsUUFBUSxFQUFFQyxPQUFPLEtBQU1ELFFBQVEsR0FBR0MsT0FBTyxHQUFJLElBQUksQ0FDbkQ7SUFFRCxPQUFPLElBQUl6RyxPQUFPO01BQUEsSUFBQTBHLEtBQUEsR0FBQS9GLGdLQUFBLENBQWEsV0FBT3VCLE9BQU8sRUFBRWpDLE1BQU0sRUFBSTtRQUN2RGtHLGNBQWMsR0FBR2pFLE9BQU87UUFDeEJrRSxhQUFhLEdBQUduRyxNQUFNO1FBRXRCO1FBQ0FxRyxTQUFTLEdBQUdqRSxVQUFVLENBQUMsTUFBSztVQUMxQjZELE1BQUksQ0FBQ3pILGFBQWEsR0FBRyxLQUFLO1VBQzFCeUgsTUFBSSxDQUFDNUgsbUJBQW1CLEdBQUcsSUFBSTtVQUMvQjRILE1BQUksQ0FBQzNILGNBQWMsQ0FBQywwQkFBMEJ5SCxXQUFXLDBCQUEwQixDQUFDO1VBQ3BGL0YsTUFBTSxDQUFDLDBDQUEwQyxDQUFDO1FBQ3BELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRVYsSUFBSTtVQUNGaUcsTUFBSSxDQUFDM0gsY0FBYyxDQUNqQixnQkFBZ0J5SCxXQUFXLE9BQU9FLE1BQUksQ0FBQ1gsbUJBQW1CLENBQUNVLE9BQU8sQ0FBQyxFQUFFLENBQ3RFO1VBQ0RDLE1BQUksQ0FBQzVILG1CQUFtQixHQUFHcUksZUFBZSxDQUFDbkcsSUFBSSxDQUFDMEYsTUFBSSxDQUFDO1VBQ3JEQSxNQUFJLENBQUNwQyxpQkFBaUIsR0FBRzhDLFlBQVksQ0FBQ3BHLElBQUksQ0FBQzBGLE1BQUksQ0FBQztVQUVoRCxNQUFNQSxNQUFJLENBQUNsSSxHQUFHLENBQUM2SSxLQUFLLENBQ2xCWCxNQUFJLENBQUNqSSxRQUFTLEVBQ2RpSSxNQUFJLENBQUN2QyxXQUFXLEVBQ2hCdUMsTUFBSSxDQUFDWSxXQUFXLEVBQ2hCYixPQUFPLENBQUNULE1BQXFCLENBQzlCO1VBRUQ7VUFDQSxJQUFJUSxXQUFXLEtBQUssZUFBZSxFQUFFO1lBQ25DSyxvQkFBb0IsR0FBR2hFLFVBQVUsQ0FBQyxNQUFLO2NBQ3JDZ0Usb0JBQW9CLEdBQUcsSUFBSTtjQUMzQixJQUFJVSxpQkFBaUIsR0FBRyxDQUN0QmIsTUFBSSxDQUFDckIsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsRUFDaEQsQ0FBQyxDQUNGO2NBQ0Q4QixlQUFlLENBQUNuRyxJQUFJLENBQUMwRixNQUFJLENBQUMsQ0FBQ2EsaUJBQWlCLENBQUM7WUFDL0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUNUO1FBQ0YsQ0FBQyxDQUFDLE9BQU9qRixLQUFLLEVBQUU7VUFDZCxJQUFJd0UsU0FBUyxFQUFFN0QsWUFBWSxDQUFDNkQsU0FBUyxDQUFDO1VBQ3RDSixNQUFJLENBQUN6SCxhQUFhLEdBQUcsS0FBSztVQUMxQnlILE1BQUksQ0FBQzVILG1CQUFtQixHQUFHLElBQUk7VUFDL0I0SCxNQUFJLENBQUMzSCxjQUFjLENBQUMscUJBQXFCeUgsV0FBVyxNQUFNekIsSUFBSSxDQUFDQyxTQUFTLENBQUMxQyxLQUFLLENBQUMsRUFBRSxDQUFDO1VBQ2xGN0IsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUN4QjtNQUNGLENBQUM7TUFBQSxpQkFBQStHLEdBQUEsRUFBQUMsR0FBQTtRQUFBLE9BQUFQLEtBQUEsQ0FBQXhDLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsSUFBQztJQUVGLFNBQVN3QyxlQUFlQSxDQUFtQk8sSUFBUztNQUNsRCxJQUFJO1FBQ0YsSUFBSVosU0FBUyxFQUFFN0QsWUFBWSxDQUFDNkQsU0FBUyxDQUFDO1FBQ3RDLElBQUlELG9CQUFvQixFQUFFO1VBQ3hCNUQsWUFBWSxDQUFDNEQsb0JBQW9CLENBQUM7UUFDcEM7UUFDQSxJQUFJLENBQUM1SCxhQUFhLEdBQUcsS0FBSztRQUMxQixJQUFJLENBQUNILG1CQUFtQixHQUFHLElBQUk7UUFFL0IsSUFBSTBILFdBQVcsS0FBS3BKLGNBQWMsRUFBRTtVQUNsQ3VKLGNBQWMsQ0FBQztZQUFFZ0IsUUFBUSxFQUFFcks7VUFBVyxDQUFnQixDQUFDO1FBQ3pELENBQUMsTUFBTTtVQUNMLElBQUlzSyxNQUFNLEdBQUcsU0FBUztVQUN0QixJQUFJRixJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sb0NBQW9DO1VBQzVDO1VBQ0EsSUFBSTFCLE1BQU0sR0FBZ0IwQixJQUFJLENBQUMsQ0FBQyxDQUFDO1VBQ2pDLElBQUkxQixNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sd0NBQXdDO1VBQ2hEO1VBQ0EsTUFBTTZCLEtBQUssR0FBRyxJQUFJaEMsVUFBVSxDQUFDRyxNQUFNLENBQUM7VUFDcEM0QixNQUFNLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQzdCLG1CQUFtQixDQUFDOEIsS0FBSyxDQUFDO1VBQ3JELElBQUlBLEtBQUssQ0FBQzVMLE1BQU0sR0FBR2lCLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUM2QixjQUFjLENBQUM2SSxNQUFNLENBQUM7WUFDM0IsTUFBTSxxQkFBcUIsR0FBR0MsS0FBSztVQUNyQztVQUNBLElBQUlDLENBQUMsR0FBZTtZQUNsQkgsUUFBUSxFQUFFRSxLQUFLLENBQUM5SyxHQUFHLENBQUM7WUFDcEJnTCxVQUFVLEVBQUVGLEtBQUssQ0FBQzdLLEdBQUcsQ0FBQztZQUN0QmdMLFFBQVEsRUFBRSxLQUFLO1lBQ2ZDLE9BQU8sRUFBRUosS0FBSyxDQUFDOUssR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJOEssS0FBSyxDQUFDOUssR0FBRyxDQUFDLEdBQUcsSUFBSTtZQUMvQ21MLFFBQVEsRUFBRSxLQUFLO1lBQ2ZDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRTtXQUNYO1VBQ0ROLENBQUMsQ0FBQ08sV0FBVyxHQUFHeEssV0FBVyxDQUFDaUssQ0FBQyxDQUFDSCxRQUFvQyxDQUFDO1VBQ25FLElBQUksQ0FBQ0csQ0FBQyxDQUFDTyxXQUFXLEVBQUU7WUFDbEJQLENBQUMsQ0FBQ08sV0FBVyxHQUFHLFVBQVUsR0FBR1AsQ0FBQyxDQUFDSCxRQUFRO1VBQ3pDO1VBQ0EsUUFBUUUsS0FBSyxDQUFDL0ssR0FBRyxDQUFDO1lBQ2hCLEtBQUssSUFBSTtjQUNQLElBQUkrSyxLQUFLLENBQUM5SyxHQUFHLENBQUMsS0FBS08sV0FBVyxFQUFFO2dCQUM5QndLLENBQUMsQ0FBQ0ksUUFBUSxHQUFHLElBQUk7Z0JBQ2pCTixNQUFNLElBQUksWUFBWTtjQUN4QixDQUFDLE1BQU07Z0JBQ0xBLE1BQU0sSUFDSixJQUFJLElBQ0gsQ0FBQ0UsQ0FBQyxDQUFDRyxPQUFPLEdBQ1AsdUJBQXVCLEdBQ3ZCLG9CQUFvQixDQUFDLEdBQ3pCSCxDQUFDLENBQUNPLFdBQVc7Y0FDakI7Y0FDQTtZQUNGLEtBQUssSUFBSTtjQUNQUCxDQUFDLENBQUNFLFFBQVEsR0FBRyxJQUFJO2NBQ2pCRixDQUFDLENBQUNRLGNBQWMsR0FBR1QsS0FBSyxDQUFDM0ssSUFBSSxDQUFDO2NBQzlCNEssQ0FBQyxDQUFDUyxTQUFTLEdBQUdWLEtBQUssQ0FBQzNLLElBQUksR0FBRyxDQUFDLENBQUM7Y0FDN0I0SyxDQUFDLENBQUNVLFlBQVksR0FBR1gsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0EsS0FBSyxDQUFDLENBQUMsQ0FBQztjQUMxQ0MsQ0FBQyxDQUFDVyxNQUFNLEdBQ04sQ0FBQ1osS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FDZkEsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUNoQkEsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUNoQkEsS0FBSyxDQUFDLEVBQUUsQ0FBQztjQUNYQyxDQUFDLENBQUNZLFFBQVEsR0FBR2IsS0FBSyxDQUFDMUssUUFBUSxDQUFDO2NBQzVCO1lBQ0YsS0FBSyxJQUFJO2NBQ1AySyxDQUFDLENBQUNLLE9BQU8sR0FBR04sS0FBSyxDQUFDM0ssSUFBSSxDQUFDLEtBQUssQ0FBQztjQUM3QixJQUFJMkssS0FBSyxDQUFDN0ssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQjRLLE1BQU0sSUFBSSxVQUFVLElBQUlDLEtBQUssQ0FBQzNLLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2NBQzNEO2NBQ0EsSUFBSXVKLE9BQU8sQ0FBQzNKLEdBQUcsQ0FBQyxLQUFLK0ssS0FBSyxDQUFDL0ssR0FBRyxDQUFDLEVBQUU7Z0JBQy9COEssTUFBTSxJQUFJLG9CQUFvQjtjQUNoQztjQUNBO1lBQ0YsS0FBSyxJQUFJO2NBQ1BFLENBQUMsQ0FBQ00sUUFBUSxHQUFHUCxLQUFLLENBQUMzSyxJQUFJLENBQUMsS0FBSyxDQUFDO2NBQzlCLElBQUkySyxLQUFLLENBQUM3SyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCNEssTUFBTSxJQUFJLFdBQVcsSUFBSUMsS0FBSyxDQUFDM0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Y0FDNUQ7Y0FDQSxJQUFJdUosT0FBTyxDQUFDM0osR0FBRyxDQUFDLEtBQUsrSyxLQUFLLENBQUMvSyxHQUFHLENBQUMsRUFBRTtnQkFDL0I4SyxNQUFNLElBQUksb0JBQW9CO2NBQ2hDO2NBQ0E7VUFDSjtVQUNBLElBQUksQ0FBQzdJLGNBQWMsQ0FBQzZJLE1BQU0sQ0FBQztVQUMzQmpCLGNBQWMsQ0FBQ21CLENBQUMsQ0FBQztRQUNuQjtNQUNGLENBQUMsQ0FBQyxPQUFPeEYsS0FBSyxFQUFFO1FBQ2QsSUFBSXFHLEdBQUcsR0FBRyw4QkFBOEIsR0FBRzVELElBQUksQ0FBQ0MsU0FBUyxDQUFDMUMsS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQ3ZELGNBQWMsQ0FBQzRKLEdBQUcsQ0FBQztRQUN4Qi9CLGFBQWEsQ0FBQyxhQUFhLENBQUM7TUFDOUI7TUFDQSxJQUFJLENBQUMzSCxhQUFhLEdBQUcsS0FBSztNQUMxQixJQUFJLENBQUNILG1CQUFtQixHQUFHLElBQUk7TUFDL0I2SCxjQUFjLEdBQUcsSUFBSTtNQUNyQkMsYUFBYSxHQUFHLElBQUk7SUFDdEI7SUFFQSxTQUFTUSxZQUFZQSxDQUFtQjlFLEtBQVU7TUFDaEQsSUFBSXdFLFNBQVMsRUFBRTdELFlBQVksQ0FBQzZELFNBQVMsQ0FBQztNQUN0QyxJQUFJRCxvQkFBb0IsRUFBRTtRQUN4QjVELFlBQVksQ0FBQzRELG9CQUFvQixDQUFDO01BQ3BDO01BQ0EsSUFBSSxDQUFDNUgsYUFBYSxHQUFHLEtBQUs7TUFDMUIsSUFBSSxDQUFDSCxtQkFBbUIsR0FBRyxJQUFJO01BQy9CLElBQUksQ0FBQ0MsY0FBYyxDQUFDLHNCQUFzQixHQUFHZ0csSUFBSSxDQUFDQyxTQUFTLENBQUMxQyxLQUFLLENBQUMsQ0FBQztNQUNuRXNFLGFBQWEsQ0FBQ3RFLEtBQUssQ0FBQztJQUN0QjtFQUNGO0VBRUFzRyxjQUFjQSxDQUFBO0lBQ1osTUFBTW5DLE9BQU8sR0FBRyxJQUFJLENBQUNwQixtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztJQUM3RCxPQUNFLElBQUksQ0FBQ3hHLE9BQU8sQ0FBQ2dLLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQ3RDLFdBQVcsQ0FBQyxZQUFZLEVBQUVFLE9BQU8sQ0FBQyxDQUFDO0VBRXZFO0VBRUFxQyxrQkFBa0JBLENBQUNDLFFBQXdCO0lBQ3pDLElBQUlDLFFBQVEsR0FBRyxtQkFBbUI7SUFDbEMsS0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEVBQUUsRUFBRTtNQUM3QkQsUUFBUSxJQUFJLEdBQUcsR0FBR0QsUUFBUSxDQUFDRyxHQUFHLENBQUNDLFVBQVUsQ0FBQ0YsRUFBRSxDQUFDLENBQUM5QyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQzVEO0lBQ0EsTUFBTU0sT0FBTyxHQUFHLElBQUksQ0FBQ3BCLG1CQUFtQixDQUFDMkQsUUFBUSxDQUFDO0lBQ2xELE9BQStCLElBQUksQ0FBQ25LLE9BQU8sQ0FBQ2dLLE9BQU8sQ0FBQyxNQUNsRCxJQUFJLENBQUN0QyxXQUFXLENBQUMsUUFBUSxFQUFFRSxPQUFPLENBQUMsQ0FBQ2pPLElBQUksQ0FBRXFNLE1BQWtCLElBQUk7TUFDOUQsT0FBTztRQUNMcUQsUUFBUSxFQUFFckQsTUFBTSxDQUFDcUQsUUFBUTtRQUN6QkQsT0FBTyxFQUFFcEQsTUFBTSxDQUFDb0QsT0FBTztRQUN2QlUsR0FBRyxFQUFFOUQsTUFBTSxDQUFDd0Q7T0FDYjtJQUNILENBQUMsQ0FBQyxDQUNIO0VBQ0g7RUFFQWUsYUFBYUEsQ0FBQTtJQUNYLE1BQU0zQyxPQUFPLEdBQUcsSUFBSSxDQUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLENBQUM7SUFDN0QsT0FBeUIsSUFBSSxDQUFDeEcsT0FBTyxDQUNsQ2dLLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQ3RDLFdBQVcsQ0FBQyxlQUFlLEVBQUVFLE9BQU8sQ0FBQyxDQUFDLENBQ3pEak8sSUFBSSxDQUFFcU0sTUFBa0IsSUFBSTtNQUMzQixJQUFJQSxNQUFNLENBQUNzRCxPQUFPLEtBQUssSUFBSSxFQUFFO1FBQzNCLElBQUksQ0FBQ3BKLGNBQWMsQ0FDakIsaUNBQWlDLEdBQUdnRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDLENBQzNEO01BQ0g7TUFDQSxPQUFPQSxNQUFNLENBQUNzRCxPQUFPLEtBQUssSUFBSSxJQUFJdEQsTUFBTSxDQUFDc0QsT0FBTztJQUNsRCxDQUFDLENBQUM7RUFDTjtFQUVNa0IsYUFBYUEsQ0FBQ0MsT0FBWTtJQUFBLElBQUFDLE1BQUE7SUFBQSxPQUFBcEksZ0tBQUE7TUFDOUIsSUFBSXNGLE9BQU8sR0FBRzhDLE1BQUksQ0FBQ2xFLG1CQUFtQixDQUNwQyxvQkFBb0IsSUFBSWlFLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQy9DO01BQ0QsSUFBSXpFLE1BQU0sU0FDUjBFLE1BQUksQ0FBQzFLLE9BQU8sQ0FBQ2dLLE9BQU8sQ0FBQyxNQUFNVSxNQUFJLENBQUNoRCxXQUFXLENBQUMsZ0JBQWdCLEVBQUVFLE9BQU8sQ0FBQyxDQUN0RTtNQUVGLE1BQU04QyxNQUFJLENBQUNDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQztNQUVuQy9DLE9BQU8sR0FBRzhDLE1BQUksQ0FBQ2xFLG1CQUFtQixDQUNoQyxvQkFBb0IsSUFBSWlFLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQy9DO01BQ0R6RSxNQUFNLFNBQ0owRSxNQUFJLENBQUMxSyxPQUFPLENBQUNnSyxPQUFPLENBQUMsTUFBTVUsTUFBSSxDQUFDaEQsV0FBVyxDQUFDLGVBQWUsRUFBRUUsT0FBTyxDQUFDLENBQ3JFO01BQ0YsT0FBTzVCLE1BQU07SUFBQztFQUNoQjtFQUVBNEUsV0FBV0EsQ0FBQ0MsTUFBVyxFQUFFQyxXQUFnQjtJQUN2QyxJQUFJbEQsT0FBTyxHQUFHLElBQUksQ0FBQ3BCLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDO0lBQzlEb0IsT0FBTyxDQUFDdkosSUFBSSxDQUFDLEdBQUcsQ0FBQ3dNLE1BQU0sS0FBSyxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSUMsV0FBVztJQUNqRSxPQUNFLElBQUksQ0FBQzlLLE9BQU8sQ0FBQ2dLLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQ3RDLFdBQVcsQ0FBQ21ELE1BQU0sRUFBRWpELE9BQU8sQ0FBQyxDQUFDO0VBRWpFO0VBRUFtRCxXQUFXQSxDQUFDQyxHQUFTO0lBQ25CLElBQUlwRCxPQUFPLEdBQUcsSUFBSSxDQUFDcEIsbUJBQW1CLENBQ3BDLG1CQUFtQixHQUNqQixHQUFHLEdBQ0gsQ0FBQyxHQUFHLEdBQUd3RSxHQUFHLENBQUNDLFdBQVcsRUFBRSxFQUFFQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDbkMsR0FBRyxHQUNILENBQUMsR0FBRyxHQUFHRixHQUFHLENBQUNHLFFBQVEsRUFBRSxFQUFFRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDaEMsR0FBRyxHQUNILENBQUMsR0FBRyxHQUFHRixHQUFHLENBQUNJLE9BQU8sRUFBRSxFQUFFRixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDL0IsR0FBRyxHQUNILENBQUMsR0FBRyxHQUFHRixHQUFHLENBQUNLLFFBQVEsRUFBRSxFQUFFSCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDaEMsR0FBRyxHQUNILENBQUMsR0FBRyxHQUFHRixHQUFHLENBQUNNLFVBQVUsRUFBRSxFQUFFSixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDbEMsR0FBRyxHQUNILENBQUMsR0FBRyxHQUFHRixHQUFHLENBQUNPLFVBQVUsRUFBRSxFQUFFTCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckM7SUFDRCxPQUNFLElBQUksQ0FBQ2xMLE9BQU8sQ0FBQ2dLLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUVFLE9BQU8sQ0FBQyxDQUFDO0VBRXBFO0VBRUE0RCxjQUFjQSxDQUFBO0lBQ1osTUFBTTVELE9BQU8sR0FBRyxJQUFJLENBQUNwQixtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztJQUM3RCxPQUNFLElBQUksQ0FBQ3hHLE9BQU8sQ0FBQ2dLLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQ3RDLFdBQVcsQ0FBQ25KLGNBQWMsRUFBRXFKLE9BQU8sQ0FBQyxDQUFDO0VBRXpFO0VBRUE2RCxjQUFjQSxDQUFBO0lBQ1osTUFBTTdELE9BQU8sR0FBRyxJQUFJLENBQUNwQixtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztJQUM3RCxPQUNFLElBQUksQ0FBQ3hHLE9BQU8sQ0FBQ2dLLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQ3RDLFdBQVcsQ0FBQ2xKLGNBQWMsRUFBRW9KLE9BQU8sQ0FBQyxDQUFDO0VBRXpFO0VBRVF4QixlQUFlQSxDQUFDeEcsUUFBYTtJQUNuQyxJQUFJLENBQUNELEdBQUcsQ0FDTCtMLFVBQVUsQ0FBQzlMLFFBQVEsQ0FBQyxDQUNwQmpHLElBQUksQ0FBQyxNQUFLO01BQ1R3SCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQ0RtRCxLQUFLLENBQUVDLE1BQU0sSUFBSTtNQUNoQixJQUFJLENBQUN0RSxjQUFjLENBQUMscUJBQXFCLEdBQUdzRSxNQUFNLENBQUM7SUFDckQsQ0FBQyxDQUFDO0VBQ047RUFFQW1ILFdBQVdBLENBQUMvTCxRQUFhO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDRCxHQUFHLENBQUNnTSxXQUFXLENBQUMvTCxRQUFRLENBQUM7RUFDdkM7RUFFQWdNLFFBQVFBLENBQUE7SUFDTixPQUFPLElBQUksQ0FBQ2pNLEdBQUcsQ0FBQ2lNLFFBQVEsQ0FBQyxJQUFJLENBQUNoTSxRQUFTLENBQUM7RUFDMUM7RUFFQWlGLFdBQVdBLENBQUNnSCxNQUFXO0lBQ3JCLFNBQVNDLE9BQU9BLENBQUNDLElBQVMsRUFBRUMsT0FBWTtNQUN0QyxPQUFPQSxPQUFPLEdBQUdELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLEdBQUdILElBQUk7SUFDekQ7SUFFQSxJQUFJRixNQUFNLEtBQUtNLFNBQVMsSUFBSSxFQUFFLElBQUksSUFBSU4sTUFBTSxDQUFDLEVBQUU7TUFDN0MsTUFBTSxvQkFBb0I7SUFDNUI7SUFDQSxNQUFNTyxPQUFPLEdBQUcsQ0FBQ1AsTUFBTSxDQUFDUSxZQUFZO0lBQ3BDLElBQUksQ0FBQy9HLFdBQVcsR0FBR3dHLE9BQU8sQ0FBQyxJQUFJLENBQUN6TCxlQUFlLEVBQUUrTCxPQUFPLENBQUM7SUFDekQsSUFBSSxDQUFDN0csVUFBVSxHQUFHdUcsT0FBTyxDQUFDLElBQUksQ0FBQ3hMLGNBQWMsRUFBRThMLE9BQU8sQ0FBQztJQUN2RCxJQUFJLENBQUMzRCxXQUFXLEdBQUdxRCxPQUFPLENBQUMsSUFBSSxDQUFDdkwsZUFBZSxFQUFFNkwsT0FBTyxDQUFDO0lBQ3pELElBQUksQ0FBQ0UsVUFBVSxHQUFHUixPQUFPLENBQUMsSUFBSSxDQUFDdEwsY0FBYyxFQUFFNEwsT0FBTyxDQUFDO0lBQ3ZEO0VBQ0Y7RUFFTUcsZUFBZUEsQ0FBQ0MsTUFBVztJQUFBLElBQUFDLE1BQUE7SUFBQSxPQUFBbkssZ0tBQUE7TUFDL0JtSyxNQUFJLENBQUN2TSxjQUFjLENBQUMsMkNBQTJDLENBQUM7TUFFaEUsSUFBSTtRQUNGO1FBQ0F1TSxNQUFJLENBQUNwRyxhQUFhLEVBQUU7UUFDcEJvRyxNQUFJLENBQUN2TSxjQUFjLENBQUMsMEJBQTBCLENBQUM7UUFFL0M7UUFDQXVNLE1BQUksQ0FBQzdNLFFBQVEsR0FBRyxJQUFJO1FBRXBCO1FBQ0E2TSxNQUFJLENBQUNyTSxhQUFhLEdBQUcsS0FBSztRQUUxQjtRQUNBLElBQUlxTSxNQUFJLENBQUM1TSxpQkFBaUIsRUFBRTtVQUMxQjRNLE1BQUksQ0FBQzVNLGlCQUFpQixDQUFDd0UsV0FBVyxFQUFFO1VBQ3BDb0ksTUFBSSxDQUFDNU0saUJBQWlCLEdBQUcsSUFBSTtVQUM3QjRNLE1BQUksQ0FBQ3ZNLGNBQWMsQ0FBQyxrQ0FBa0MsQ0FBQztRQUN6RDtRQUVBLElBQUl1TSxNQUFJLENBQUMzTSxzQkFBc0IsRUFBRTtVQUMvQjJNLE1BQUksQ0FBQzNNLHNCQUFzQixDQUFDdUUsV0FBVyxFQUFFO1VBQ3pDb0ksTUFBSSxDQUFDM00sc0JBQXNCLEdBQUcsSUFBSTtVQUNsQzJNLE1BQUksQ0FBQ3ZNLGNBQWMsQ0FBQyx1Q0FBdUMsQ0FBQztRQUM5RDtRQUVBO1FBQ0EsSUFBSTtVQUNGLE1BQU11TSxNQUFJLENBQUNDLHNCQUFzQixDQUFDRixNQUFNLENBQUM7UUFDM0MsQ0FBQyxDQUFDLE9BQU9HLENBQUMsRUFBRTtVQUNWRixNQUFJLENBQUN2TSxjQUFjLENBQUMsd0RBQXdELENBQUM7UUFDL0U7UUFFQTtRQUNBLE1BQU0wTSxpQkFBaUIsR0FBR0gsTUFBSSxDQUFDOU0sR0FBRyxDQUFDK0wsVUFBVSxDQUFDYyxNQUFNLENBQUM1SCxFQUFFLENBQUM7UUFDeEQsTUFBTWlJLGNBQWMsR0FBRyxJQUFJbEwsT0FBTyxDQUFDLENBQUNtTCxDQUFDLEVBQUVsTCxNQUFNLEtBQzNDb0MsVUFBVSxDQUFDLE1BQU1wQyxNQUFNLENBQUMsSUFBSW1MLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQ2hFO1FBRUQsTUFBTXBMLE9BQU8sQ0FBQ3FMLElBQUksQ0FBQyxDQUFDSixpQkFBaUIsRUFBRUMsY0FBYyxDQUFDLENBQUM7UUFDdkRKLE1BQUksQ0FBQ3ZNLGNBQWMsQ0FBQyxrQ0FBa0MsQ0FBQztRQUV2RDtRQUNBLElBQUk7VUFDRjtVQUNBLE1BQU11TSxNQUFJLENBQUM5TSxHQUFHLENBQUNvQyxRQUFRLEVBQUU7VUFDekIwSyxNQUFJLENBQUN2TSxjQUFjLENBQUMscUNBQXFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLE9BQU95TSxDQUFDLEVBQUU7VUFDVjtRQUFBO1FBR0ZGLE1BQUksQ0FBQ3ZNLGNBQWMsQ0FBQyxxREFBcUQsQ0FBQztNQUM1RSxDQUFDLENBQUMsT0FBTytNLEdBQUcsRUFBRTtRQUNaUixNQUFJLENBQUN2TSxjQUFjLENBQUMsOEJBQThCLEdBQUcrTSxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2pFO1FBQ0FSLE1BQUksQ0FBQzdNLFFBQVEsR0FBRyxJQUFJO1FBQ3BCNk0sTUFBSSxDQUFDck0sYUFBYSxHQUFHLEtBQUs7UUFFMUI7UUFDQSxJQUFJcU0sTUFBSSxDQUFDNU0saUJBQWlCLEVBQUU7VUFDMUI0TSxNQUFJLENBQUM1TSxpQkFBaUIsQ0FBQ3dFLFdBQVcsRUFBRTtVQUNwQ29JLE1BQUksQ0FBQzVNLGlCQUFpQixHQUFHLElBQUk7UUFDL0I7UUFDQSxJQUFJNE0sTUFBSSxDQUFDM00sc0JBQXNCLEVBQUU7VUFDL0IyTSxNQUFJLENBQUMzTSxzQkFBc0IsQ0FBQ3VFLFdBQVcsRUFBRTtVQUN6Q29JLE1BQUksQ0FBQzNNLHNCQUFzQixHQUFHLElBQUk7UUFDcEM7UUFFQTJNLE1BQUksQ0FBQ3ZNLGNBQWMsQ0FBQywwREFBMEQsQ0FBQztNQUNqRjtJQUFDO0VBQ0g7RUFFTXlLLG1CQUFtQkEsQ0FBQ3VDLEVBQU87SUFBQSxPQUFBNUssZ0tBQUE7TUFDL0IsT0FBTyxJQUFJWCxPQUFPLENBQUVrQyxPQUFPLElBQUk7UUFDN0JHLFVBQVUsQ0FBQ0gsT0FBTyxFQUFFcUosRUFBRSxDQUFDO01BQ3pCLENBQUMsQ0FBQztJQUFDO0VBQ0w7RUFFQUMsV0FBV0EsQ0FBQSxHQUFJO0VBRWZ4SCxjQUFjQSxDQUFDNkcsTUFBYztJQUMzQixJQUFJLENBQUNuRyxhQUFhLEVBQUU7SUFDcEIsSUFBSSxDQUFDM0YsbUJBQW1CLEdBQUc4TCxNQUFNO0lBQ2pDWSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRW5ILElBQUksQ0FBQ0MsU0FBUyxDQUFDcUcsTUFBTSxDQUFDLENBQUM7SUFDbkUsSUFBSSxDQUFDL0wsaUJBQWlCLEdBQUc2TSxXQUFXLENBQUMsTUFBSztNQUN4QztNQUNBLElBQUksQ0FBQyxJQUFJLENBQUNsTixhQUFhLElBQUksSUFBSSxDQUFDUixRQUFRLEVBQUU7UUFDeEMsSUFBSSxDQUFDbUssY0FBYyxFQUFFLENBQUN4RixLQUFLLENBQUVkLEtBQUssSUFBSTtVQUNwQyxJQUFJLENBQUN2RCxjQUFjLENBQUMscUJBQXFCLEdBQUdnRyxJQUFJLENBQUNDLFNBQVMsQ0FBQzFDLEtBQUssQ0FBQyxDQUFDO1VBQ2xFO1VBQ0EsSUFBSSxJQUFJLENBQUM3RCxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDMEcsWUFBWSxFQUFFO1VBQ3JCO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUNiO0VBRUFELGFBQWFBLENBQUE7SUFDWCxJQUFJLElBQUksQ0FBQzVGLGlCQUFpQixFQUFFO01BQzFCOE0sYUFBYSxDQUFDLElBQUksQ0FBQzlNLGlCQUFpQixDQUFDO01BQ3JDLElBQUksQ0FBQ0EsaUJBQWlCLEdBQUcsSUFBSTtJQUMvQjtFQUNGO0VBRU02RixZQUFZQSxDQUFBO0lBQUEsSUFBQWtILE1BQUE7SUFBQSxPQUFBbEwsZ0tBQUE7TUFDaEIsSUFBSSxDQUFDa0wsTUFBSSxDQUFDOU0sbUJBQW1CLElBQUk4TSxNQUFJLENBQUM3TSxpQkFBaUIsSUFBSTZNLE1BQUksQ0FBQzVNLG9CQUFvQixFQUFFO01BQ3RGNE0sTUFBSSxDQUFDN00saUJBQWlCLEVBQUU7TUFDeEJxRCxVQUFVLENBQUMsTUFBSztRQUNkd0osTUFBSSxDQUFDOUksU0FBUyxDQUFDOEksTUFBSSxDQUFDOU0sbUJBQW9CLENBQUMsQ0FBQ3VELFNBQVMsQ0FBQztVQUNsRGtCLElBQUksRUFBRUEsQ0FBQSxLQUFLO1lBQ1RxSSxNQUFJLENBQUM3TSxpQkFBaUIsR0FBRyxDQUFDO1VBQzVCLENBQUM7VUFDRDhDLEtBQUssRUFBRUEsQ0FBQSxLQUFLO1lBQ1YrSixNQUFJLENBQUNsSCxZQUFZLEVBQUU7VUFDckI7U0FDRCxDQUFDO01BQ0osQ0FBQyxFQUFFLElBQUksR0FBR2tILE1BQUksQ0FBQzdNLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUFBO0VBQ3JDO0VBRU04TSxvQkFBb0JBLENBQUE7SUFBQSxJQUFBQyxNQUFBO0lBQUEsT0FBQXBMLGdLQUFBO01BQ3hCLE1BQU1xTCxJQUFJLEdBQUdQLFlBQVksQ0FBQ1EsT0FBTyxDQUFDLHFCQUFxQixDQUFDO01BQ3hELElBQUlELElBQUksRUFBRTtRQUNSLElBQUk7VUFDRixNQUFNbkIsTUFBTSxHQUFHdEcsSUFBSSxDQUFDMkgsS0FBSyxDQUFDRixJQUFJLENBQUM7VUFDL0I7VUFDQUQsTUFBSSxDQUFDaEosU0FBUyxDQUFDOEgsTUFBTSxDQUFDLENBQUN2SSxTQUFTLENBQUM7WUFDL0JrQixJQUFJLEVBQUVBLENBQUEsS0FBSztjQUNUdUksTUFBSSxDQUFDL00saUJBQWlCLEdBQUcsQ0FBQztZQUM1QixDQUFDO1lBQ0Q4QyxLQUFLLEVBQUVBLENBQUEsS0FBSztjQUNWaUssTUFBSSxDQUFDcEgsWUFBWSxFQUFFO1lBQ3JCO1dBQ0QsQ0FBQztRQUNKLENBQUMsQ0FBQyxNQUFNLENBQUM7TUFDWDtJQUFDO0VBQ0g7RUFFQTs7OztFQUlNd0gsa0JBQWtCQSxDQUFDbE8sUUFBZ0I7SUFBQSxJQUFBbU8sTUFBQTtJQUFBLE9BQUF6TCxnS0FBQTtNQUN2QyxJQUFJO1FBQ0Y7UUFDQSxJQUFJLE9BQVF5TCxNQUFJLENBQUNwTyxHQUFXLENBQUM4RSxRQUFRLEtBQUssVUFBVSxFQUFFO1VBQ3BELE1BQU1BLFFBQVEsU0FBVXNKLE1BQUksQ0FBQ3BPLEdBQVcsQ0FBQzhFLFFBQVEsQ0FBQzdFLFFBQVEsQ0FBQztVQUMzRG1PLE1BQUksQ0FBQzdOLGNBQWMsQ0FBQyx1QkFBdUIsR0FBR2dHLElBQUksQ0FBQ0MsU0FBUyxDQUFDMUIsUUFBUSxDQUFDLENBQUM7VUFDdkUsSUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUNBLFFBQVEsRUFBRTtZQUNqQyxPQUFPQSxRQUFRLENBQUNBLFFBQVEsQ0FBQ3VKLFFBQVEsQ0FBQ0QsTUFBSSxDQUFDMU4sZUFBZSxDQUFDO1VBQ3pEO1FBQ0Y7UUFDQTtRQUNBLE9BQU8sSUFBSTtNQUNiLENBQUMsQ0FBQyxPQUFPc00sQ0FBQyxFQUFFO1FBQ1ZvQixNQUFJLENBQUM3TixjQUFjLENBQUMsNEJBQTRCLEdBQUd5TSxDQUFDLENBQUM7UUFDckQsT0FBTyxLQUFLO01BQ2Q7SUFBQztFQUNIO0VBRUE7RUFDTXNCLGtCQUFrQkEsQ0FBQTtJQUFBLElBQUFDLE1BQUE7SUFBQSxPQUFBNUwsZ0tBQUE7TUFDdEIsSUFBSTRMLE1BQUksQ0FBQ3RULFFBQVEsS0FBSyxTQUFTLElBQUlzVCxNQUFJLENBQUN2TyxHQUFHLElBQUksT0FBT3VPLE1BQUksQ0FBQ3ZPLEdBQUcsQ0FBQzZCLFNBQVMsS0FBSyxVQUFVLElBQUksT0FBTzBNLE1BQUksQ0FBQ3ZPLEdBQUcsQ0FBQ2tDLE1BQU0sS0FBSyxVQUFVLEVBQUU7UUFDaEksSUFBSTtVQUNGcU0sTUFBSSxDQUFDaE8sY0FBYyxDQUFDLDhEQUE4RCxDQUFDO1VBRW5GO1VBQ0EsSUFBSTtZQUNGLE1BQU1nTyxNQUFJLENBQUN2TyxHQUFHLENBQUNvQyxRQUFRLEVBQUU7WUFDekJtTSxNQUFJLENBQUNoTyxjQUFjLENBQUMsa0NBQWtDLENBQUM7VUFDekQsQ0FBQyxDQUFDLE9BQU95TSxDQUFDLEVBQUU7WUFDVnVCLE1BQUksQ0FBQ2hPLGNBQWMsQ0FBQywyQ0FBMkMsR0FBR3lNLENBQUMsQ0FBQztVQUN0RTtVQUVBO1VBQ0EsTUFBTSxJQUFJaEwsT0FBTyxDQUFFd00sR0FBRyxJQUFLbkssVUFBVSxDQUFDbUssR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1VBRWpEO1VBQ0EsSUFBSTtZQUNGLE1BQU1ELE1BQUksQ0FBQ3ZPLEdBQUcsQ0FBQ2tDLE1BQU0sRUFBRTtZQUN2QnFNLE1BQUksQ0FBQ2hPLGNBQWMsQ0FBQyxpQ0FBaUMsQ0FBQztVQUN4RCxDQUFDLENBQUMsT0FBT3lNLENBQUMsRUFBRTtZQUNWdUIsTUFBSSxDQUFDaE8sY0FBYyxDQUFDLDBDQUEwQyxHQUFHeU0sQ0FBQyxDQUFDO1VBQ3JFO1VBRUF1QixNQUFJLENBQUNoTyxjQUFjLENBQUMscUNBQXFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLE9BQU95TSxDQUFDLEVBQUU7VUFDVnVCLE1BQUksQ0FBQ2hPLGNBQWMsQ0FBQyxpREFBaUQsR0FBR3lNLENBQUMsQ0FBQztRQUM1RTtNQUNGLENBQUMsTUFBTTtRQUNMdUIsTUFBSSxDQUFDaE8sY0FBYyxDQUFDLHFEQUFxRCxDQUFDO01BQzVFO0lBQUM7RUFDSDtFQUVBO0VBQ013TSxzQkFBc0JBLENBQUNGLE1BQVc7SUFBQSxJQUFBNEIsTUFBQTtJQUFBLE9BQUE5TCxnS0FBQTtNQUN0QyxJQUFJO1FBQ0Y4TCxNQUFJLENBQUNsTyxjQUFjLENBQUMscUNBQXFDLENBQUM7UUFFMUQ7UUFDQSxNQUFNMEgsT0FBTyxHQUFHd0csTUFBSSxDQUFDNUgsbUJBQW1CLENBQUMsbUJBQW1CLENBQUM7UUFDN0RvQixPQUFPLENBQUN4SixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2hCd0osT0FBTyxDQUFDeEosR0FBRyxDQUFDLEdBQUd3SixPQUFPLENBQUNNLE1BQU0sQ0FBQyxDQUFDQyxRQUFRLEVBQUVDLE9BQU8sS0FBTUQsUUFBUSxHQUFHQyxPQUFPLEdBQUksSUFBSSxDQUFDO1FBRWpGO1FBQ0FnRyxNQUFJLENBQUN2SixXQUFXLENBQUMySCxNQUFNLENBQUM7UUFFeEI7UUFDQSxNQUFNNEIsTUFBSSxDQUFDek8sR0FBRyxDQUFDNkksS0FBSyxDQUFDZ0UsTUFBTSxDQUFDNUgsRUFBRSxFQUFFd0osTUFBSSxDQUFDOUksV0FBVyxFQUFFOEksTUFBSSxDQUFDM0YsV0FBVyxFQUFFYixPQUFPLENBQUNULE1BQXFCLENBQUM7UUFDbEdpSCxNQUFJLENBQUNsTyxjQUFjLENBQUMsdUNBQXVDLENBQUM7UUFFNUQ7UUFDQSxNQUFNLElBQUl5QixPQUFPLENBQUV3TSxHQUFHLElBQUtuSyxVQUFVLENBQUNtSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7TUFFbEQsQ0FBQyxDQUFDLE9BQU8xSyxLQUFLLEVBQUU7UUFDZDJLLE1BQUksQ0FBQ2xPLGNBQWMsQ0FBQyxtQ0FBbUMsR0FBR2dHLElBQUksQ0FBQ0MsU0FBUyxDQUFDMUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hGO01BQ0Y7SUFBQztFQUNIOzs7Ozs7Ozs7QUEvMEJXekgsVUFBVSxHQUFBL0IsaURBQUEsRUFIdEIyRCx5REFBVSxDQUFDO0VBQ1Z5USxVQUFVLEVBQUU7Q0FDYixDQUFDLEMsRUFDV3JTLFVBQVUsQ0FnMUJ0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3o2QkQ7Ozs7Ozs7QUFNMkM7QUFjcEMsTUFBTXNTLGlCQUFpQixHQUFHLGdCQUFnQjtBQU0xQyxJQUFNclMsY0FBYyxHQUFwQixNQUFNQSxjQUFjOzs7O0VBS3pCdEIsWUFBQTtJQUpBLEtBQUE0VCxPQUFPLEdBQWtCLEVBQUU7SUFDM0IsS0FBQUMsT0FBTyxHQUFHLElBQUlDLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDbEMsS0FBQUMsUUFBUSxHQUFHLEtBQUs7SUFHZHZOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDO0VBQzdDO0VBRUF1TixPQUFPQSxDQUFDakksQ0FBUztJQUNmLE9BQU8sQ0FBQyxHQUFHLEdBQUdBLENBQUMsQ0FBQ1ksUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFMkUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUU7RUFDM0Q7RUFFQTs7O0VBR0EwQyxvQkFBb0JBLENBQUN6SCxNQUFXO0lBQzlCLElBQUksQ0FBQ3VILFFBQVEsR0FBRyxJQUFJO0lBQ3BCLElBQUlHLFVBQVUsR0FBRyxFQUFFO0lBQ25CLE1BQU03RixLQUFLLEdBQUcsSUFBSWhDLFVBQVUsQ0FBQ0csTUFBTSxDQUFDO0lBQ3BDLElBQUkySCxLQUFLLEdBQUcsQ0FBQztJQUNiLE9BQU9BLEtBQUssR0FBRzlGLEtBQUssQ0FBQzVMLE1BQU0sRUFBRTtNQUMzQixJQUFJMlIsQ0FBQyxFQUFFQyxLQUFLO01BQ1osSUFBSUMsUUFBUSxHQUFHakcsS0FBSyxDQUFDOEYsS0FBSyxFQUFFLENBQUM7TUFDN0IsSUFBSUcsUUFBUSxLQUFLLENBQUMsRUFBRTtNQUNwQixNQUFNQyxNQUFNLEdBQUdsRyxLQUFLLENBQUM4RixLQUFLLEVBQUUsQ0FBQztNQUM3QkcsUUFBUSxHQUFHQSxRQUFRLEdBQUcsQ0FBQztNQUN2QixJQUFJRSxNQUFNLEdBQUcsSUFBSW5JLFVBQVUsQ0FBQ0csTUFBTSxFQUFFMkgsS0FBSyxFQUFFRyxRQUFRLENBQUM7TUFDcEQsUUFBUUMsTUFBTTtRQUNaLEtBQUssQ0FBQztVQUNKSCxDQUFDLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQ0osT0FBTyxDQUFDM0YsS0FBSyxDQUFDOEYsS0FBSyxDQUFDLENBQUM7VUFDMUM7UUFDRixLQUFLLENBQUM7VUFDSkUsS0FBSyxHQUFHQyxRQUFRLEdBQUcsQ0FBQztVQUNwQkYsQ0FBQyxHQUFHLFVBQVU7VUFDZCxLQUFLLElBQUkzRSxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUc0RSxLQUFLLEVBQUU1RSxFQUFFLEVBQUUsRUFBRTtZQUNqQzJFLENBQUMsSUFDQyxHQUFHLEdBQ0gsSUFBSSxDQUFDSixPQUFPLENBQUNRLE1BQU0sQ0FBQy9FLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FDaEMsSUFBSSxDQUFDdUUsT0FBTyxDQUFDUSxNQUFNLENBQUMvRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7VUFDaEM7VUFDQTtRQUNGLEtBQUssQ0FBQztVQUNKMkUsQ0FBQyxHQUFHLFFBQVE7VUFDWixJQUFJSyxFQUFFLEdBQUcsRUFBRTtZQUNUQyxFQUFFLEdBQUcsRUFBRTtVQUNULEtBQUssSUFBSWpGLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBRzZFLFFBQVEsRUFBRTdFLEVBQUUsRUFBRSxFQUFFO1lBQ3BDZ0YsRUFBRSxDQUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDWCxPQUFPLENBQUNRLE1BQU0sQ0FBQy9FLEVBQUUsQ0FBQyxDQUFDLENBQUM7VUFDdEM7VUFDQWlGLEVBQUUsQ0FBQ3ZJLElBQUksQ0FBQ3NJLEVBQUUsQ0FBQ2xFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMxRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDaEM2SCxFQUFFLENBQUN2SSxJQUFJLENBQUNzSSxFQUFFLENBQUNsRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDMUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ2hDNkgsRUFBRSxDQUFDdkksSUFBSSxDQUFDc0ksRUFBRSxDQUFDbEUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzFELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUNoQzZILEVBQUUsQ0FBQ3ZJLElBQUksQ0FBQ3NJLEVBQUUsQ0FBQ2xFLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMxRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDakM2SCxFQUFFLENBQUN2SSxJQUFJLENBQUNzSSxFQUFFLENBQUNsRSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDMUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ2xDdUgsQ0FBQyxHQUFHTSxFQUFFLENBQUM3SCxJQUFJLENBQUMsR0FBRyxDQUFDO1VBQ2hCO1FBQ0YsS0FBSyxDQUFDO1FBQ04sS0FBSyxDQUFDO1VBQ0osSUFBSStILE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUNySSxNQUFNLEVBQUUySCxLQUFLLEVBQUVHLFFBQVEsQ0FBQztVQUNsRCxJQUFJO1lBQ0ZGLENBQUMsR0FBRyxJQUFJLENBQUNQLE9BQU8sQ0FBQ2lCLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDO1VBQ2pDLENBQUMsQ0FBQyxPQUFPNUMsQ0FBQyxFQUFFO1lBQ1ZvQyxDQUFDLEdBQUdRLE1BQU07VUFDWjtVQUNBO1FBQ0Y7VUFDRVIsQ0FBQyxHQUFHLE9BQU87VUFDWCxLQUFLLElBQUkzRSxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUc2RSxRQUFRLEVBQUU3RSxFQUFFLEVBQUUsRUFBRTtZQUNwQyxJQUFJQSxFQUFFLEdBQUcsQ0FBQyxFQUFFMkUsQ0FBQyxJQUFJLElBQUk7WUFDckJBLENBQUMsSUFBSSxJQUFJLENBQUNKLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDL0UsRUFBRSxDQUFDLENBQUM7VUFDL0I7VUFDQTtNQUNKO01BQ0F5RSxVQUFVLENBQUMvSCxJQUFJLENBQUMsSUFBSSxHQUFHb0ksTUFBTSxDQUFDNUgsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBR3lILENBQUMsQ0FBQztNQUN0REQsS0FBSyxJQUFJRyxRQUFRO0lBQ25CO0lBQ0EsSUFBSSxDQUFDUCxRQUFRLEdBQUcsS0FBSztJQUNyQixPQUFPRyxVQUFVO0VBQ25CO0VBRUFhLFNBQVNBLENBQUNsRCxNQUFjO0lBQ3RCckwsT0FBTyxDQUFDQyxHQUFHLENBQ1QsMkJBQTJCLEdBQUdvTCxNQUFNLENBQUM1SCxFQUFFLEdBQUcsTUFBTSxHQUFHNEgsTUFBTSxDQUFDdEgsSUFBSSxHQUFHLEdBQUcsQ0FDckU7SUFDRDtJQUNBLElBQUksQ0FBQyxJQUFJLENBQUN3SixRQUFRLEVBQUU7TUFDbEIsSUFBSWlCLE9BQU8sR0FBRyxJQUFJLENBQUNmLG9CQUFvQixDQUFDcEMsTUFBTSxDQUFDb0QsV0FBVyxDQUFDO01BQzNEO01BQ0E7SUFDRjtJQUNBO0lBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxDQUFDdEQsTUFBTSxDQUFDNUgsRUFBRSxDQUFDO0lBQ2hELElBQUlpTCxVQUFVLEVBQUU7TUFDZHJELE1BQU0sQ0FBQ3FELFVBQVUsR0FBR0EsVUFBVTtJQUNoQztJQUNBLElBQ0UsSUFBSSxDQUFDdEIsT0FBTyxDQUFDd0IsSUFBSSxDQUNkQyxJQUFJLElBQUtBLElBQUksQ0FBQ3BMLEVBQUUsS0FBSzRILE1BQU0sQ0FBQzVILEVBQUUsSUFBSW9MLElBQUksQ0FBQzlLLElBQUksS0FBS3NILE1BQU0sQ0FBQ3RILElBQUksQ0FDN0QsRUFDRDtNQUNBL0QsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUMsTUFBTTtNQUNMLElBQUksQ0FBQ21OLE9BQU8sQ0FBQ3pILElBQUksQ0FBQzBGLE1BQU0sQ0FBQztJQUMzQjtJQUNBLE9BQU8sSUFBSSxDQUFDK0IsT0FBTztFQUNyQjtFQUVBMEIsVUFBVUEsQ0FBQTtJQUNSOU8sT0FBTyxDQUFDQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7SUFDdkMsT0FBTyxJQUFJLENBQUNtTixPQUFPO0VBQ3JCO0VBRUEyQixTQUFTQSxDQUFDdEwsRUFBVTtJQUNsQnpELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixHQUFHd0QsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNuRCxJQUFJa0ssS0FBSyxHQUFHLElBQUksQ0FBQ1AsT0FBTyxDQUFDNEIsU0FBUyxDQUFFM0QsTUFBTSxJQUFLQSxNQUFNLENBQUM1SCxFQUFFLEtBQUtBLEVBQUUsQ0FBQztJQUNoRSxPQUFPa0ssS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1AsT0FBTyxDQUFDTyxLQUFLLENBQUMsR0FBRyxJQUFJO0VBQ2hEO0VBRUFzQixLQUFLQSxDQUFBO0lBQ0hqUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztJQUNsQyxJQUFJLENBQUNtTixPQUFPLEdBQUcsRUFBRTtFQUNuQjtFQUVBdUIsYUFBYUEsQ0FBQ2xRLFFBQWdCO0lBQzVCLE9BQU93TixZQUFZLENBQUNRLE9BQU8sQ0FBQyxhQUFhLEdBQUdoTyxRQUFRLENBQUM7RUFDdkQ7RUFFQXlRLGFBQWFBLENBQUN6USxRQUFnQixFQUFFc0YsSUFBWTtJQUMxQ2tJLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsR0FBR3pOLFFBQVEsRUFBRXNGLElBQUksQ0FBQztJQUNwRDtJQUNBLE1BQU1zSCxNQUFNLEdBQUcsSUFBSSxDQUFDK0IsT0FBTyxDQUFDd0IsSUFBSSxDQUFDTyxDQUFDLElBQUlBLENBQUMsQ0FBQzFMLEVBQUUsS0FBS2hGLFFBQVEsQ0FBQztJQUN4RCxJQUFJNE0sTUFBTSxFQUFFO01BQ1ZBLE1BQU0sQ0FBQ3FELFVBQVUsR0FBRzNLLElBQUk7SUFDMUI7RUFDRjtFQUVBO0VBQ0EsT0FBT3FMLG1CQUFtQkEsQ0FBQy9ELE1BQWM7SUFDdkMsSUFBSUEsTUFBTSxDQUFDdEgsSUFBSSxJQUFJc0gsTUFBTSxDQUFDdEgsSUFBSSxDQUFDc0wsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO01BQ2hELE9BQU9oRSxNQUFNLENBQUN0SCxJQUFJO0lBQ3BCO0lBQ0EsT0FBTyxJQUFJO0VBQ2I7RUFFQTtFQUNBLE9BQU91TCxjQUFjQSxDQUFDakUsTUFBYztJQUNsQyxJQUFJa0UsV0FBVyxHQUFHLEVBQUU7SUFFcEI7SUFDQSxJQUFJbEUsTUFBTSxDQUFDcUQsVUFBVSxJQUFJckQsTUFBTSxDQUFDcUQsVUFBVSxDQUFDclMsSUFBSSxFQUFFLEVBQUU7TUFDakRrVCxXQUFXLEdBQUdsRSxNQUFNLENBQUNxRCxVQUFVO0lBQ2pDO0lBQ0E7SUFBQSxLQUNLLElBQUlyRCxNQUFNLENBQUN0SCxJQUFJLElBQUlzSCxNQUFNLENBQUN0SCxJQUFJLENBQUMxSCxJQUFJLEVBQUUsSUFBSWdQLE1BQU0sQ0FBQ3RILElBQUksS0FBSyxnQkFBZ0IsRUFBRTtNQUM5RXdMLFdBQVcsR0FBR2xFLE1BQU0sQ0FBQ3RILElBQUk7SUFDM0I7SUFDQTtJQUFBLEtBQ0s7TUFDSCxNQUFNeUwsTUFBTSxHQUFHQyxnQkFBYyxDQUFDTCxtQkFBbUIsQ0FBQy9ELE1BQU0sQ0FBQztNQUN6RCxJQUFJbUUsTUFBTSxJQUFJQSxNQUFNLENBQUNuVCxJQUFJLEVBQUUsRUFBRTtRQUMzQmtULFdBQVcsR0FBR0MsTUFBTTtNQUN0QjtNQUNBO01BQUEsS0FDSyxJQUFJbkUsTUFBTSxDQUFDNUgsRUFBRSxJQUFJNEgsTUFBTSxDQUFDNUgsRUFBRSxDQUFDcEgsSUFBSSxFQUFFLEVBQUU7UUFDdENrVCxXQUFXLEdBQUdsRSxNQUFNLENBQUM1SCxFQUFFO01BQ3pCO01BQ0E7TUFBQSxLQUNLO1FBQ0g4TCxXQUFXLEdBQUcsZ0JBQWdCO01BQ2hDO0lBQ0Y7SUFFQTtJQUNBLElBQUlBLFdBQVcsQ0FBQ3RULE1BQU0sR0FBRyxFQUFFLEVBQUU7TUFDM0IsT0FBT3NULFdBQVcsQ0FBQ3JULFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3JDO0lBRUEsT0FBT3FULFdBQVc7RUFDcEI7RUFFQTtFQUNBLE9BQU9HLGdCQUFnQkEsQ0FBQ3JFLE1BQWM7SUFDcEMsSUFBSWtFLFdBQVcsR0FBRyxFQUFFO0lBRXBCO0lBQ0EsSUFBSWxFLE1BQU0sQ0FBQ3FELFVBQVUsSUFBSXJELE1BQU0sQ0FBQ3FELFVBQVUsQ0FBQ3JTLElBQUksRUFBRSxFQUFFO01BQ2pEa1QsV0FBVyxHQUFHbEUsTUFBTSxDQUFDcUQsVUFBVTtJQUNqQztJQUNBO0lBQUEsS0FDSyxJQUFJckQsTUFBTSxDQUFDdEgsSUFBSSxJQUFJc0gsTUFBTSxDQUFDdEgsSUFBSSxDQUFDMUgsSUFBSSxFQUFFLElBQUlnUCxNQUFNLENBQUN0SCxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7TUFDOUV3TCxXQUFXLEdBQUdsRSxNQUFNLENBQUN0SCxJQUFJO0lBQzNCO0lBQ0E7SUFBQSxLQUNLO01BQ0gsTUFBTXlMLE1BQU0sR0FBR0MsZ0JBQWMsQ0FBQ0wsbUJBQW1CLENBQUMvRCxNQUFNLENBQUM7TUFDekQsSUFBSW1FLE1BQU0sSUFBSUEsTUFBTSxDQUFDblQsSUFBSSxFQUFFLEVBQUU7UUFDM0JrVCxXQUFXLEdBQUdDLE1BQU07TUFDdEI7TUFDQTtNQUFBLEtBQ0ssSUFBSW5FLE1BQU0sQ0FBQzVILEVBQUUsSUFBSTRILE1BQU0sQ0FBQzVILEVBQUUsQ0FBQ3BILElBQUksRUFBRSxFQUFFO1FBQ3RDa1QsV0FBVyxHQUFHbEUsTUFBTSxDQUFDNUgsRUFBRTtNQUN6QjtNQUNBO01BQUEsS0FDSztRQUNIOEwsV0FBVyxHQUFHLGdCQUFnQjtNQUNoQztJQUNGO0lBRUE7SUFDQSxJQUFJQSxXQUFXLENBQUN0VCxNQUFNLEdBQUcsRUFBRSxFQUFFO01BQzNCc1QsV0FBVyxHQUFHQSxXQUFXLENBQUNyVCxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM1QztJQUVBO0lBQ0EsSUFBSXFULFdBQVcsQ0FBQ3RULE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDM0IsT0FBTyxXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDLE1BQU0sSUFBSXNULFdBQVcsQ0FBQ3RULE1BQU0sSUFBSSxFQUFFLEVBQUU7TUFDbkMsT0FBTyxTQUFTLENBQUMsQ0FBQztJQUNwQixDQUFDLE1BQU07TUFDTCxPQUFPLFNBQVMsQ0FBQyxDQUFDO0lBQ3BCO0VBQ0Y7Ozs7O0FBN05XbkIsY0FBYyxHQUFBMlUsZ0JBQUEsR0FBQTNXLGlEQUFBLEVBSDFCMkQseURBQVUsQ0FBQztFQUNWeVEsVUFBVSxFQUFFO0NBQ2IsQ0FBQyxDLEVBQ1dwUyxjQUFjLENBOE4xQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UEQ7Ozs7OztBQU0yQztBQUNVO0FBUTlDLE1BQU04VSxjQUFjLEdBQUc7RUFDNUJDLE9BQU8sRUFBRSxDQUFDO0VBQ1ZDLG1CQUFtQixFQUFFLENBQUM7RUFDdEJDLGNBQWMsRUFBRSxDQUFDO0VBQ2pCQyxjQUFjLEVBQUUsQ0FBQztFQUNqQkMsY0FBYyxFQUFFLENBQUM7RUFDakJDLFVBQVUsRUFBRSxDQUFDO0VBQ2JDLGVBQWUsRUFBRSxDQUFDO0VBQ2xCQyxhQUFhLEVBQUUsQ0FBQztFQUNoQkMsUUFBUSxFQUFFO0NBQ1g7QUFXTSxJQUFNdFYsZUFBZSxHQUFyQixNQUFNQSxlQUFlO0VBSzFCdkIsWUFBQTtJQUpBLEtBQUE4VyxLQUFLLEdBQXFCLEVBQUU7SUFDNUIsS0FBQS9DLFFBQVEsR0FBRyxLQUFLO0lBQ1IsS0FBQWdELHFCQUFxQixHQUErQjdLLENBQVMsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBRzVFMUYsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7RUFDL0M7RUFFQTs7O0VBR0FKLEtBQUtBLENBQUMyUSxvQkFBK0M7SUFDbkQsSUFBSUEsb0JBQW9CLEVBQUU7TUFDeEIsSUFBSSxDQUFDRCxxQkFBcUIsR0FBR0Msb0JBQW9CO0lBQ25EO0lBQ0EsSUFBSSxDQUFDRCxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQztFQUNuRDtFQUVBRSxRQUFRQSxDQUFDQyxZQUFvQixFQUFFeEgsR0FBVztJQUN4QyxPQUFPO01BQUV3SCxZQUFZO01BQUV4SCxHQUFHO01BQUVuRixJQUFJLEVBQUU7SUFBRSxDQUFFO0VBQ3hDO0VBRUF5SixPQUFPQSxDQUFDakksQ0FBUztJQUNmLE9BQU8sQ0FBQyxHQUFHLEdBQUdBLENBQUMsQ0FBQ1ksUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFMkUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUU7RUFDM0Q7RUFFQTtFQUNBNEYsS0FBS0EsQ0FBQTtJQUNILE9BQU9oQiwrREFBVyxDQUFDZ0IsS0FBSyxFQUFFO0VBQzVCO0VBRUE7Ozs7O0VBS0FDLGdCQUFnQkEsQ0FBQzdNLElBQVk7SUFDM0IsSUFBSSxDQUFDd00scUJBQXFCLENBQUMseUJBQXlCeE0sSUFBSSxHQUFHLENBQUM7SUFDNUQsSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxFQUFFO01BQzVCLE9BQU92RCxPQUFPLENBQUNDLE1BQU0sQ0FBQztRQUNwQm9RLFNBQVMsRUFBRSwrQkFBK0I5TSxJQUFJLEdBQUc7UUFDakQrTSxJQUFJLEVBQUVsQixjQUFjLENBQUNTO09BQ3RCLENBQUM7SUFDSjtJQUNBLE9BQU9WLCtEQUFXLENBQUNvQixHQUFHLENBQUM7TUFBRUMsR0FBRyxFQUFFak47SUFBSSxDQUFFLENBQUMsQ0FBQ3ZMLElBQUksQ0FBRXlZLENBQUMsSUFBSTtNQUMvQyxJQUFJQSxDQUFDLENBQUM1TSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU07VUFBRXlNLElBQUksRUFBRWxCLGNBQWMsQ0FBQ0c7UUFBYyxDQUFFO01BQy9DO01BQ0EsT0FBT2tCLENBQUMsQ0FBQzVNLEtBQUs7SUFDaEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQTs7OztFQUlBNk0sZ0JBQWdCQSxDQUFDQyxJQUFvQjtJQUNuQyxJQUFJLENBQUNaLHFCQUFxQixDQUN4Qix1QkFBdUJZLElBQUksQ0FBQ1QsWUFBWSxPQUFPUyxJQUFJLENBQUNqSSxHQUFHLEdBQUcsQ0FDM0Q7SUFFRCxPQUFPLElBQUksQ0FBQzBILGdCQUFnQixDQUFDTyxJQUFJLENBQUNULFlBQVksQ0FBQyxDQUM1Q2xZLElBQUksQ0FBQyxNQUFLO01BQ1QsSUFBSSxDQUFDK1gscUJBQXFCLENBQUMsb0NBQW9DLENBQUM7TUFDaEUxUCxLQUFLLENBQUMsbUNBQW1DLENBQUM7TUFDMUMsT0FBTytPLGNBQWMsQ0FBQ1EsYUFBYTtJQUNyQyxDQUFDLENBQUMsQ0FDRGhOLEtBQUssQ0FBQyxNQUFLO01BQ1YsT0FBT3VNLCtEQUFXLENBQUN5QixHQUFHLENBQUM7UUFDckJKLEdBQUcsRUFBRUcsSUFBSSxDQUFDVCxZQUFZO1FBQ3RCck0sS0FBSyxFQUFFOE0sSUFBSSxDQUFDakk7T0FDYixDQUFDLENBQUMxUSxJQUFJLENBQUMsTUFBSztRQUNYLE9BQU9vWCxjQUFjLENBQUNDLE9BQU87TUFDL0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQ0R6TSxLQUFLLENBQUVkLEtBQUssSUFBSTtNQUNmLElBQUksQ0FBQ2lPLHFCQUFxQixDQUFDeEwsSUFBSSxDQUFDQyxTQUFTLENBQUMxQyxLQUFLLENBQUMsQ0FBQztNQUNqRCxPQUFPOUIsT0FBTyxDQUFDa0MsT0FBTyxDQUFDa04sY0FBYyxDQUFDRSxtQkFBbUIsQ0FBQztJQUM1RCxDQUFDLENBQUM7RUFDTjtFQUVBOzs7OztFQUtBdUIsUUFBUUEsQ0FBQ3ROLElBQVk7SUFDbkIsSUFBSSxDQUFDd00scUJBQXFCLENBQUMsaUJBQWlCeE0sSUFBSSxHQUFHLENBQUM7SUFDcEQsSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxFQUFFO01BQzVCLE9BQU92RCxPQUFPLENBQUNDLE1BQU0sQ0FBQztRQUNwQm9RLFNBQVMsRUFBRSx1QkFBdUI5TSxJQUFJLEdBQUc7UUFDekMrTSxJQUFJLEVBQUVsQixjQUFjLENBQUNTO09BQ3RCLENBQUM7SUFDSjtJQUNBLE9BQU9WLCtEQUFXLENBQUNvQixHQUFHLENBQUM7TUFBRUMsR0FBRyxFQUFFak47SUFBSSxDQUFFLENBQUMsQ0FBQ3ZMLElBQUksQ0FBRXlZLENBQUMsSUFBSTtNQUMvQyxJQUFJQSxDQUFDLENBQUM1TSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU07VUFBRXlNLElBQUksRUFBRWxCLGNBQWMsQ0FBQ0c7UUFBYyxDQUFFO01BQy9DO01BQ0EsT0FBT2tCLENBQUMsQ0FBQzVNLEtBQUs7SUFDaEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQWlOLFlBQVlBLENBQUN2TixJQUFZO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDc04sUUFBUSxDQUFDdE4sSUFBSSxDQUFDLENBQUN2TCxJQUFJLENBQUU2TCxLQUFLLElBQUk7TUFDeEMsSUFBSTtRQUNGLE9BQU9VLElBQUksQ0FBQzJILEtBQUssQ0FBQ3JJLEtBQUssQ0FBQztNQUMxQixDQUFDLENBQUMsT0FBT21ILENBQVUsRUFBRTtRQUNuQjtRQUNBO1FBQ0EsSUFBSStGLFlBQW9CO1FBQ3hCLElBQUkvRixDQUFDLFlBQVlJLEtBQUssRUFBRTtVQUN0QjJGLFlBQVksR0FBRy9GLENBQUMsQ0FBQ2dHLE9BQU87UUFDMUIsQ0FBQyxNQUFNLElBQUksT0FBT2hHLENBQUMsS0FBSyxRQUFRLEVBQUU7VUFDaEMrRixZQUFZLEdBQUcvRixDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLE1BQU07VUFDTCtGLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzNDO1FBQ0EsTUFBTTtVQUFFVCxJQUFJLEVBQUVsQixjQUFjLENBQUNNLFVBQVU7VUFBRVcsU0FBUyxFQUFFVTtRQUFZLENBQUU7TUFDcEU7SUFDRixDQUFDLENBQUM7RUFDSjtFQUVBOzs7RUFHQUUsUUFBUUEsQ0FBQ1QsR0FBVyxFQUFFM00sS0FBYTtJQUNqQyxPQUFPc0wsK0RBQVcsQ0FBQ3lCLEdBQUcsQ0FBQztNQUFFSixHQUFHO01BQUUzTTtJQUFLLENBQUUsQ0FBQyxDQUNuQzdMLElBQUksQ0FBQyxNQUFLO01BQ1QsT0FBT29YLGNBQWMsQ0FBQ0MsT0FBTztJQUMvQixDQUFDLENBQUMsQ0FDRHpNLEtBQUssQ0FBRWQsS0FBSyxJQUFJO01BQ2YsSUFBSSxDQUFDaU8scUJBQXFCLENBQUN4TCxJQUFJLENBQUNDLFNBQVMsQ0FBQzFDLEtBQUssQ0FBQyxDQUFDO01BQ2pELE9BQU85QixPQUFPLENBQUNrQyxPQUFPLENBQUNrTixjQUFjLENBQUNFLG1CQUFtQixDQUFDO0lBQzVELENBQUMsQ0FBQztFQUNOO0VBRUE7OztFQUdBNEIsWUFBWUEsQ0FBQzNOLElBQVksRUFBRTROLE1BQVc7SUFDcEMsT0FBTyxJQUFJLENBQUNGLFFBQVEsQ0FBQzFOLElBQUksRUFBRWdCLElBQUksQ0FBQ0MsU0FBUyxDQUFDMk0sTUFBTSxDQUFDLENBQUM7RUFDcEQ7RUFFQTtFQUNBQyxtQkFBbUJBLENBQUM3TixJQUFZO0lBQzlCLElBQUksQ0FBQ3dNLHFCQUFxQixDQUFDLDRCQUE0QnhNLElBQUksR0FBRyxDQUFDO0lBQy9ELE9BQU80TCwrREFBVyxDQUFDa0MsTUFBTSxDQUFDO01BQUViLEdBQUcsRUFBRWpOO0lBQUksQ0FBRSxDQUFDO0VBQzFDOzs7OztBQXBKV2hKLGVBQWUsR0FBQWpDLGlEQUFBLEVBSDNCMkQseURBQVUsQ0FBQztFQUNWeVEsVUFBVSxFQUFFO0NBQ2IsQ0FBQyxDLEVBQ1duUyxlQUFlLENBcUozQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7Ozs7O0FBa0JNLE1BQU84QixZQUFZO0VBQXpCckQsWUFBQTtJQUNVLEtBQUFzWSxLQUFLLEdBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLEtBQUFDLGNBQWMsR0FBRyxLQUFLO0lBQ3RCLEtBQUFDLGdCQUFnQixHQUFHLEtBQUs7RUFrRWxDO0VBaEVFOzs7RUFHQS9OLEtBQUtBLENBQUE7SUFDSCxJQUFJLENBQUM2TixLQUFLLEdBQUcsRUFBRTtFQUNqQjtFQUVBOzs7Ozs7OztFQVFBakosT0FBT0EsQ0FBVW9KLFNBQTJCO0lBQzFDLE9BQU8sSUFBSXpSLE9BQU8sQ0FBQyxDQUFDa0MsT0FBTyxFQUFFakMsTUFBTSxLQUFJO01BQ3JDLElBQUksQ0FBQ3FSLEtBQUssQ0FBQ25NLElBQUksQ0FBQztRQUNkc00sU0FBUztRQUNUdlAsT0FBTztRQUNQakM7T0FDRCxDQUFDO01BQ0YsSUFBSSxDQUFDeVIsT0FBTyxFQUFFO0lBQ2hCLENBQUMsQ0FBQztFQUNKO0VBRUE7Ozs7Ozs7RUFPUUEsT0FBT0EsQ0FBQTtJQUNiLElBQUksSUFBSSxDQUFDRixnQkFBZ0IsRUFBRTtNQUN6QixPQUFPLEtBQUs7SUFDZDtJQUNBLE1BQU1uRCxJQUFJLEdBQUcsSUFBSSxDQUFDaUQsS0FBSyxDQUFDSyxLQUFLLEVBQUU7SUFDL0IsSUFBSSxDQUFDdEQsSUFBSSxFQUFFO01BQ1QsT0FBTyxLQUFLO0lBQ2Q7SUFDQSxJQUFJO01BQ0YsSUFBSSxDQUFDbUQsZ0JBQWdCLEdBQUcsSUFBSTtNQUM1Qm5ELElBQUksQ0FDRG9ELFNBQVMsRUFBRSxDQUNYelosSUFBSSxDQUFFNkwsS0FBVSxJQUFJO1FBQ25CO1FBQ0EsSUFBSSxDQUFDMk4sZ0JBQWdCLEdBQUcsS0FBSztRQUM3Qm5ELElBQUksQ0FBQ25NLE9BQU8sQ0FBQzJCLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUM2TixPQUFPLEVBQUU7TUFDaEIsQ0FBQyxDQUFDLENBQ0Q5TyxLQUFLLENBQUUwSSxHQUFRLElBQUk7UUFDbEI7UUFDQSxJQUFJLENBQUNrRyxnQkFBZ0IsR0FBRyxLQUFLO1FBQzdCbkQsSUFBSSxDQUFDcE8sTUFBTSxDQUFDcUwsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQ29HLE9BQU8sRUFBRTtNQUNoQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsT0FBT3BHLEdBQVEsRUFBRTtNQUNqQixJQUFJLENBQUNrRyxnQkFBZ0IsR0FBRyxLQUFLO01BQzdCbkQsSUFBSSxDQUFDcE8sTUFBTSxDQUFDcUwsR0FBRyxDQUFDO01BQ2hCLElBQUksQ0FBQ29HLE9BQU8sRUFBRTtJQUNoQjtJQUNBLE9BQU8sSUFBSTtFQUNiOztBQUdGLGlFQUFlclYsWUFBWSxFOzs7Ozs7Ozs7Ozs7Ozs7QUN6RjNCO0FBQ0E7QUFDQTtBQUVPLE1BQU11VixXQUFXLEdBQUc7RUFDekJDLFVBQVUsRUFBRTtDQUNiO0FBRUQ7Ozs7Ozs7QUFPQSxtRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2YrQztBQUM0QjtBQUU5QjtBQUNZO0FBRXpELElBQUlELGtFQUFXLENBQUNDLFVBQVUsRUFBRTtFQUMxQkMsNkRBQWMsRUFBRTtBQUNsQjtBQUVBQyx5RkFBc0IsRUFBRSxDQUFDQyxlQUFlLENBQUN4WCxzREFBUyxDQUFDLENBQ2hEb0ksS0FBSyxDQUFDMEksR0FBRyxJQUFJOUwsT0FBTyxDQUFDQyxHQUFHLENBQUM2TCxHQUFHLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7O0FDWGpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7OztBQ3BRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7O0FDWkE7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyx1RUFBNkQ7QUFDakgsa0NBQWtDLG1CQUFPLENBQUMsZ0VBQXNEO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHEzR0FBcTNHLHdHQUF3RyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyw4REFBOEQsd0JBQXdCLE9BQU8sc0JBQXNCLDJCQUEyQiw0QkFBNEIsT0FBTyxxQkFBcUIsOEJBQThCLDRCQUE0Qiw0QkFBNEIsK0JBQStCLDZCQUE2Qiw0QkFBNEIsZ0RBQWdELDZDQUE2Qyx3QkFBd0IsT0FBTyxxQkFBcUIsMkJBQTJCLG9CQUFvQixxQkFBcUIsd0JBQXdCLHVDQUF1QywyQ0FBMkMseUJBQXlCLDJCQUEyQixPQUFPLDZCQUE2Qix3Q0FBd0MsT0FBTyxzQkFBc0IsMkNBQTJDLDJCQUEyQixzQkFBc0IseUJBQXlCLE9BQU8sb0JBQW9CLHNCQUFzQix1Q0FBdUMsNEJBQTRCLDJCQUEyQixPQUFPLCtCQUErQix5QkFBeUIsT0FBTyxnQkFBZ0IseUJBQXlCLHFDQUFxQyx3QkFBd0IsT0FBTyxnQkFBZ0IsdUNBQXVDLHdCQUF3QiwwQkFBMEIsOEJBQThCLE9BQU8sc0JBQXNCLDZCQUE2QixpQ0FBaUMsT0FBTyxnQ0FBZ0MsNkNBQTZDLCtDQUErQyxPQUFPLGdDQUFnQyw2Q0FBNkMsK0NBQStDLE9BQU8sdUJBQXVCO0FBQzM3TDtBQUNBIiwic291cmNlcyI6WyIuL3NyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9ob21lL2VkaXQtbmFtZS1tb2RhbC5jb21wb25lbnQudHMiLCIuL3NyYy9hcHAvc2VydmljZXMvYmxlLnNlcnZpY2UudHMiLCIuL3NyYy9hcHAvc2VydmljZXMvZGV2aWNlcy5zZXJ2aWNlLnRzIiwiLi9zcmMvYXBwL3NlcnZpY2VzL2xvY2stZGF0YS5zZXJ2aWNlLnRzIiwiLi9zcmMvYXBwL3V0aWwvZHluYW1pYy1xdWV1ZS50cyIsIi4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi4vc3JjL21haW4udHMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0IiwiLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcy4qJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBzdHJpY3QgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvZWRpdC1uYW1lLW1vZGFsLmNvbXBvbmVudC50cz83NmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZWxvYWRBbGxNb2R1bGVzLCBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnaG9tZScsXHJcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9ob21lL2hvbWUubW9kdWxlJykudGhlbiggbSA9PiBtLkhvbWVQYWdlTW9kdWxlKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICByZWRpcmVjdFRvOiAnaG9tZScsXHJcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyBwcmVsb2FkaW5nU3RyYXRlZ3k6IFByZWxvYWRBbGxNb2R1bGVzIH0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGNhcGFjaXRvci9zcGxhc2gtc2NyZWVuJztcclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGNhcGFjaXRvci9zdGF0dXMtYmFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVBcHAoKSB7XHJcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgIFN0YXR1c0Jhci5oaWRlKCk7XHJcbiAgICAgIFNwbGFzaFNjcmVlbi5oaWRlKCk7XHJcbiAgICAgIGxldCBjbGlja3lDbGFzc2VzID0gWydjbGljay1zb3VuZHMnXTtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB3aW5kb3cubmF0aXZlY2xpY2sud2F0Y2goY2xpY2t5Q2xhc3Nlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFuZHJvaWRQZXJtaXNzaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSwgSW9uaWNSb3V0ZVN0cmF0ZWd5IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0TmFtZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2VkaXQtbmFtZS1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQkxFIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ibGUvbmd4JztcclxuaW1wb3J0IHsgQmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZXZpY2VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGV2aWNlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9ja0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NrLWRhdGEuc2VydmljZSc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdE5hbWVNb2RhbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIElvbmljTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQkxFLFxyXG4gICAgICAgIEJsZVNlcnZpY2UsXHJcbiAgICAgICAgRGV2aWNlc1NlcnZpY2UsXHJcbiAgICAgICAgTG9ja0RhdGFTZXJ2aWNlLFxyXG4gICAgICAgIEFuZHJvaWRQZXJtaXNzaW9ucyxcclxuICAgICAgICB7IHByb3ZpZGU6IFJvdXRlUmV1c2VTdHJhdGVneSwgdXNlQ2xhc3M6IElvbmljUm91dGVTdHJhdGVneSB9XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWVkaXQtbmFtZS1tb2RhbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpb24taGVhZGVyIGNsYXNzPVwiaW9uLW5vLWJvcmRlclwiPlxyXG4gICAgICA8aW9uLXRvb2xiYXI+XHJcbiAgICAgICAgPGlvbi10aXRsZT5FZGl0IExvY2sgTmFtZTwvaW9uLXRpdGxlPlxyXG4gICAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwiZW5kXCI+XHJcbiAgICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2FuY2VsKClcIj5DYW5jZWw8L2lvbi1idXR0b24+XHJcbiAgICAgICAgPC9pb24tYnV0dG9ucz5cclxuICAgICAgPC9pb24tdG9vbGJhcj5cclxuICAgIDwvaW9uLWhlYWRlcj5cclxuXHJcbiAgICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1uYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cInN0YWNrZWRcIj5EZXZpY2UgTmFtZTwvaW9uLWxhYmVsPlxyXG4gICAgICAgICAgPGlvbi1pbnB1dFxyXG4gICAgICAgICAgICAjbmFtZUlucHV0XHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGV2aWNlTmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY3VzdG9tIG5hbWVcIlxyXG4gICAgICAgICAgICBtYXhsZW5ndGg9XCIxNVwiXHJcbiAgICAgICAgICAgIChpb25JbnB1dCk9XCJvbklucHV0Q2hhbmdlKClcIlxyXG4gICAgICAgICAgICBjbGFzcz1cIm5hbWUtaW5wdXRcIj5cclxuICAgICAgICAgIDwvaW9uLWlucHV0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXItY291bnRcIiBbY2xhc3Mud2FybmluZ109XCJkZXZpY2VOYW1lLmxlbmd0aCA+PSAxNFwiPlxyXG4gICAgICAgICAgICB7eyBkZXZpY2VOYW1lLmxlbmd0aCB9fS8xNVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtaW5mb1wiICpuZ0lmPVwic2hvd0RldmljZUluZm9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlNlcmlhbCBOdW1iZXI6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3sgc2VyaWFsTnVtYmVyIHx8ICdOL0EnIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5EZXZpY2UgSUQ6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3sgZGV2aWNlSWQgfHwgJ04vQScgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2lvbi1jb250ZW50PlxyXG5cclxuICAgIDxpb24tZm9vdGVyIGNsYXNzPVwiaW9uLW5vLWJvcmRlclwiPlxyXG4gICAgICA8aW9uLXRvb2xiYXI+XHJcbiAgICAgICAgPGlvbi1idXR0b24gXHJcbiAgICAgICAgICBleHBhbmQ9XCJibG9ja1wiIFxyXG4gICAgICAgICAgKGNsaWNrKT1cInNhdmUoKVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGV2aWNlTmFtZS50cmltKCkubGVuZ3RoID09PSAwXCJcclxuICAgICAgICAgIGNsYXNzPVwic2F2ZS1idXR0b25cIj5cclxuICAgICAgICAgIFNhdmVcclxuICAgICAgICA8L2lvbi1idXR0b24+XHJcbiAgICAgIDwvaW9uLXRvb2xiYXI+XHJcbiAgICA8L2lvbi1mb290ZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUtaW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFyLWNvdW50IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTZweDtcclxuICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFyLWNvdW50Lndhcm5pbmcge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXZpY2UtaW5mbyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZhbHVlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhdmUtYnV0dG9uIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdE5hbWVNb2RhbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaW5pdGlhbE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNlcmlhbE51bWJlcj86IHN0cmluZztcclxuICBASW5wdXQoKSBkZXZpY2VJZD86IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93RGV2aWNlSW5mbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIEBPdXRwdXQoKSBzYXZlTmFtZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBkZXZpY2VOYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRldmljZU5hbWUgPSB0aGlzLmluaXRpYWxOYW1lO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZSgpIHtcclxuICAgIC8vIEVuc3VyZSB3ZSBkb24ndCBleGNlZWQgMTUgY2hhcmFjdGVyc1xyXG4gICAgaWYgKHRoaXMuZGV2aWNlTmFtZS5sZW5ndGggPiAxNSkge1xyXG4gICAgICB0aGlzLmRldmljZU5hbWUgPSB0aGlzLmRldmljZU5hbWUuc3Vic3RyaW5nKDAsIDE1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBjb25zdCB0cmltbWVkTmFtZSA9IHRoaXMuZGV2aWNlTmFtZS50cmltKCk7XHJcbiAgICBpZiAodHJpbW1lZE5hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNhdmVOYW1lLmVtaXQodHJpbW1lZE5hbWUpO1xyXG4gICAgICB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHRyaW1tZWROYW1lLCAnc2F2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCAnY2FuY2VsJyk7XHJcbiAgfVxyXG59ICIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRGV2aWNlSW5mbyxcbiAgT3BlcmF0aW5nU3lzdGVtLFxuICBEZXZpY2UgYXMgU3lzdGVtLFxufSBmcm9tICdAY2FwYWNpdG9yL2RldmljZSc7XG5pbXBvcnQgeyBBbmRyb2lkUGVybWlzc2lvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FuZHJvaWQtcGVybWlzc2lvbnMvbmd4JztcbmltcG9ydCB7IEJMRSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxlL25neCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IER5bmFtaWNRdWV1ZSB9IGZyb20gJy4uL3V0aWwvZHluYW1pYy1xdWV1ZSc7XG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICcuL2RldmljZXMuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NrUGFyYW1ldGVycyB9IGZyb20gJy4vbG9jay1kYXRhLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2tTdGF0dXMge1xuICByZXNwb25zZTogbnVtYmVyO1xuICByZXNwb25zZU1zZz86IHN0cmluZztcbiAgZXh0cmFCeXRlczogbnVtYmVyO1xuICBpc1N0YXR1czogYm9vbGVhbjtcbiAgaXNFcnJvcj86IGJvb2xlYW47XG4gIHZlcmlmaWVkOiBhbnk7XG4gIGFsYXJtT246IGFueTtcbiAgYnV6emVyT246IGFueTtcbiAgb3BlbkNsb3NlU3RhdGU/OiBudW1iZXI7XG4gIGhvb2tTdGF0ZT86IG51bWJlcjtcbiAgdm9sdGFnZVZhbHVlPzogbnVtYmVyO1xuICBsb2NrSWQ/OiBudW1iZXI7XG4gIHJhbmREYXRhPzogbnVtYmVyO1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWZXJpZnlPdXRjb21lIHtcbiAgdmVyaWZpZWQ6IGJvb2xlYW47XG4gIGlzRXJyb3I6IGJvb2xlYW47XG4gIG1zZzogc3RyaW5nO1xufVxuXG5jb25zdCBDTUQgPSAxO1xuY29uc3QgQVNLID0gMjtcbmNvbnN0IEVYVCA9IDM7XG5jb25zdCBTVU0gPSA1O1xuY29uc3QgREFUQSA9IDY7XG5jb25zdCBSQU5EREFUQSA9IDE0O1xuY29uc3QgQ01EX1N5c3RlbUV4aXQgPSAnc2xlZXAnO1xuY29uc3QgQ01EX1N5c3RlbUluaXQgPSAnaW5pdGlhbGl6ZSc7XG5leHBvcnQgY29uc3QgQVNLX2NvcnJlY3QgPSAweDEwO1xuZXhwb3J0IGNvbnN0IEFTS19mYWlsdXJlID0gMHgxMTtcbmV4cG9ydCBjb25zdCBBU0tfdGltZW91dCA9IDB4MTI7XG5leHBvcnQgY29uc3QgQVNLX3Vua25vd24gPSAweDEzO1xuZXhwb3J0IGNvbnN0IEFTS19jaGVja3N1bSA9IDB4MTY7XG5leHBvcnQgY29uc3QgQVNLX3Bhc3N3b3JkX25vdF92ZXJpZmllZCA9IDB4MjY7XG5leHBvcnQgY29uc3QgQVNLX2ZhaWxlZF92ZXJpZmljYXRpb24gPSAweDI3O1xuZXhwb3J0IGNvbnN0IFJlc3BvbnNlTWFwID0ge1xuICBbQVNLX2NvcnJlY3RdOiAnT3BlcmF0aW9uIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknLFxuICBbQVNLX2ZhaWx1cmVdOiAnT3BlcmF0aW9uIGZhaWxlZCAtIHBsZWFzZSB0cnkgYWdhaW4nLFxuICBbQVNLX3RpbWVvdXRdOiAnT3BlcmF0aW9uIHRpbWVkIG91dCAtIGNoZWNrIGNvbm5lY3Rpb24nLFxuICBbQVNLX3Vua25vd25dOiAnVW5rbm93biBjb21tYW5kIC0gcGxlYXNlIHJlY29ubmVjdCcsXG4gIFtBU0tfY2hlY2tzdW1dOiAnQ29tbXVuaWNhdGlvbiBlcnJvciAtIHBsZWFzZSB0cnkgYWdhaW4nLFxuICBbQVNLX3Bhc3N3b3JkX25vdF92ZXJpZmllZF06ICdMb2NrIG5vdCBwcm9wZXJseSBwYWlyZWQgLSBlbnRlciBQSU4gYWdhaW4nLFxuICBbQVNLX2ZhaWxlZF92ZXJpZmljYXRpb25dOiAnUElOIHZlcmlmaWNhdGlvbiBmYWlsZWQgLSBjaGVjayB5b3VyIFBJTicsXG59O1xuXG4vLyBBZGQgZXJyb3IgY2F0ZWdvcmllcyBmb3IgYmV0dGVyIGhhbmRsaW5nXG5leHBvcnQgY29uc3QgRXJyb3JDYXRlZ29yaWVzID0ge1xuICBbQVNLX2ZhaWx1cmVdOiAncmV0cnknLFxuICBbQVNLX3RpbWVvdXRdOiAnY29ubmVjdGlvbicsXG4gIFtBU0tfdW5rbm93bl06ICdyZWNvbm5lY3QnLFxuICBbQVNLX2NoZWNrc3VtXTogJ3JldHJ5JyxcbiAgW0FTS19wYXNzd29yZF9ub3RfdmVyaWZpZWRdOiAncGFpcmluZycsXG4gIFtBU0tfZmFpbGVkX3ZlcmlmaWNhdGlvbl06ICdwaW4nLFxufTtcblxuLy8gQWRkIHJldHJ5IHN0cmF0ZWdpZXNcbmV4cG9ydCBjb25zdCBSZXRyeVN0cmF0ZWdpZXMgPSB7XG4gIFtBU0tfZmFpbHVyZV06IHsgbWF4UmV0cmllczogMywgZGVsYXk6IDEwMDAgfSxcbiAgW0FTS190aW1lb3V0XTogeyBtYXhSZXRyaWVzOiAyLCBkZWxheTogMjAwMCB9LFxuICBbQVNLX3Vua25vd25dOiB7IG1heFJldHJpZXM6IDEsIGRlbGF5OiAwIH0sXG4gIFtBU0tfY2hlY2tzdW1dOiB7IG1heFJldHJpZXM6IDMsIGRlbGF5OiA1MDAgfSxcbiAgW0FTS19wYXNzd29yZF9ub3RfdmVyaWZpZWRdOiB7IG1heFJldHJpZXM6IDAsIGRlbGF5OiAwIH0sXG4gIFtBU0tfZmFpbGVkX3ZlcmlmaWNhdGlvbl06IHsgbWF4UmV0cmllczogMCwgZGVsYXk6IDAgfSxcbn07XG5leHBvcnQgY29uc3QgSXNMb2NrZWQgPSAweDAwO1xuZXhwb3J0IGNvbnN0IElzVW5ob29rZWQgPSAweDAwO1xuY29uc3QgSXNIb29rZWQgPSB+SXNVbmhvb2tlZDtcbmV4cG9ydCBjb25zdCBJbmFjdGl2ZURpc2Nvbm5lY3RUaW1lID0gMzAwO1xuY29uc3QgQW5kcm9pZDExID0gJzExJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwbGF0Zm9ybSE6IE9wZXJhdGluZ1N5c3RlbTtcbiAgb3NEYXRhUmVxdWVzdCE6IFByb21pc2U8RGV2aWNlSW5mbz47XG4gIG9zVmVyc2lvbiE6IHN0cmluZztcbiAgZGV2aWNlSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGNvbm5lY3RTdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgbm90aWZpY2F0aW9uU3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIGNvbm5lY3RSZXBlYXRlcjogU3ViamVjdDxhbnk+IHwgbnVsbCA9IG51bGw7XG4gIG9wUXVldWU6IER5bmFtaWNRdWV1ZSA9IG5ldyBEeW5hbWljUXVldWUoKTtcbiAgbm90aWZpY2F0aW9uSGFuZGxlcjogKChkYXRhOiBhbnkpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gIG5vdGlmaWNhdGlvbkVycm9yITogKGVycm9yOiBhbnkpID0+IHZvaWQ7XG4gIG1lc3NhZ2VIYW5kbGVyOiBhbnkgPSBudWxsO1xuICBhbGVydEhhbmRsZXI6IGFueSA9IG51bGw7XG4gIHdyaXRlTG9ja0J1c3kgPSBmYWxzZTtcblxuICBMb25nU2VydmljZVV1aWQgPSAnMDAwMGZmZjAtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcbiAgU2VydmljZVV1aWQ6IGFueTtcbiAgTG9uZ1N0YXR1c1V1aWQgPSAnMDAwMGZmZjEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcbiAgU3RhdHVzVXVpZDogYW55O1xuICBMb25nQ29tbWFuZFV1aWQgPSAnMDAwMGZmZjItMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcbiAgQ29tbWFuZFV1aWQ6IGFueTtcbiAgTG9uZ0NvbmZpZ1V1aWQgPSAnMDAwMGZmZjMtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcbiAgQ29uZmlnVXVpZDogYW55O1xuXG4gIGtlZXBBbGl2ZUludGVydmFsOiBhbnkgPSBudWxsO1xuICBsYXN0Q29ubmVjdGVkRGV2aWNlOiBEZXZpY2UgfCBudWxsID0gbnVsbDtcbiAgcmVjb25uZWN0QXR0ZW1wdHM6IG51bWJlciA9IDA7XG4gIG1heFJlY29ubmVjdEF0dGVtcHRzOiBudW1iZXIgPSA1O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5kcm9pZFBlcm1pc3Npb25zOiBBbmRyb2lkUGVybWlzc2lvbnMsXG4gICAgcHJpdmF0ZSBibGU6IEJMRVxuICApIHtcbiAgICBpZiAoIWFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9DT05ORUNUKSB7XG4gICAgICBhbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfQ09OTkVDVCA9XG4gICAgICAgICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIX0NPTk5FQ1QnO1xuICAgIH1cbiAgICBpZiAoIWFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9TQ0FOKSB7XG4gICAgICBhbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfU0NBTiA9XG4gICAgICAgICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIX1NDQU4nO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwKF9tZXNzYWdlSGFuZGxlcjogYW55LCBfYWxlcnRIYW5kbGVyOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnYmxlOiBhY3RpdmF0ZScpO1xuICAgIGlmICghX21lc3NhZ2VIYW5kbGVyIHx8ICFfYWxlcnRIYW5kbGVyKSB7XG4gICAgICB0aHJvdyAnaGFuZGxlcnMgY2Fubm90IGJlIG51bGwnO1xuICAgIH1cbiAgICB0aGlzLm9zRGF0YVJlcXVlc3QgPSBTeXN0ZW0uZ2V0SW5mbygpO1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIgPSBfbWVzc2FnZUhhbmRsZXI7XG4gICAgdGhpcy5hbGVydEhhbmRsZXIgPSBfYWxlcnRIYW5kbGVyO1xuICAgIGlmICghdGhpcy5ibGUpIHtcbiAgICAgIGxldCBzdGFuZGluID0ge1xuICAgICAgICBpc0VuYWJsZWQ6IChhOiBhbnksIGI6IGFueSkgPT4gUHJvbWlzZS5yZWplY3QoKSxcbiAgICAgICAgZW5hYmxlOiAoKSA9PiBQcm9taXNlLnJlamVjdCgpLFxuICAgICAgICBzdGFydFNjYW46ICgpID0+IG51bGwsXG4gICAgICAgIHN0b3BTY2FuOiAoKSA9PiBudWxsLFxuICAgICAgfTtcbiAgICAgIHRoaXMuYmxlID0gc3RhbmRpbiBhcyBhbnk7XG4gICAgICBhbGVydChcbiAgICAgICAgJ1NvbWV0aGluZyBpcyBhbWlzcyB3aXRoIHRoZSBCbHVldG9vdGggcGx1Z2luXFxuQ29tbXVuaWNhdGlvbiBkaXNhYmxlZCEnXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcSA9IHRoaXMuYmxlO1xuICAgICAgaWYgKCEoJ2VuYWJsZScgaW4gcSkpIHtcbiAgICAgICAgdGhpcy5ibGUuZW5hYmxlID0gdGhpcy5pb3NFbmFibGUuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXN5bmMgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdldCBwbGF0Zm9ybSBpbmZvXG4gICAgICBjb25zdCBkZXZpY2VJbmZvID0gYXdhaXQgdGhpcy5vc0RhdGFSZXF1ZXN0O1xuICAgICAgdGhpcy5wbGF0Zm9ybSA9IGRldmljZUluZm8ub3BlcmF0aW5nU3lzdGVtO1xuICAgICAgdGhpcy5vc1ZlcnNpb24gPSBkZXZpY2VJbmZvLm9zVmVyc2lvbjtcbiAgICAgIFxuICAgICAgLy8gQ2hlY2sgaWYgQkxFIGlzIGVuYWJsZWRcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYmxlLmlzRW5hYmxlZCgpO1xuICAgICAgfSBjYXRjaCAoYmxlRXJyb3IpIHtcbiAgICAgICAgLy8gQmx1ZXRvb3RoIGlzIGRpc2FibGVkIC0gdHJ5IHRvIGVuYWJsZSBpdFxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCbHVldG9vdGggaXMgZGlzYWJsZWQsIGF0dGVtcHRpbmcgdG8gZW5hYmxlLi4uJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5ibGUuZW5hYmxlKCk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQmx1ZXRvb3RoIGVuYWJsZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGVuYWJsZUVycm9yKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRmFpbGVkIHRvIGVuYWJsZSBCbHVldG9vdGggYXV0b21hdGljYWxseScpO1xuICAgICAgICAgIHRoaXMuYWxlcnRIYW5kbGVyKCdCbHVldG9vdGggRXJyb3InLCAnVW5hYmxlIHRvIGFjY2VzcyBCbHVldG9vdGguIFBsZWFzZSBjaGVjayB5b3VyIGRldmljZSBzZXR0aW5ncy4nKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2hlY2sgcGVybWlzc2lvbnMgYmFzZWQgb24gQW5kcm9pZCB2ZXJzaW9uXG4gICAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgIGlmICh0aGlzLm9zVmVyc2lvbiA8PSAnMTEnKSB7XG4gICAgICAgICAgLy8gQW5kcm9pZCAxMSBhbmQgYmVsb3cgLSBuZWVkIEJMVUVUT09USCBhbmQgQUNDRVNTX0ZJTkVfTE9DQVRJT05cbiAgICAgICAgICBjb25zdCBibHVldG9vdGhQZXJtaXNzaW9uID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuY2hlY2tQZXJtaXNzaW9uKFxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGxvY2F0aW9uUGVybWlzc2lvbiA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLmNoZWNrUGVybWlzc2lvbihcbiAgICAgICAgICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQUNDRVNTX0ZJTkVfTE9DQVRJT05cbiAgICAgICAgICApO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmICghYmx1ZXRvb3RoUGVybWlzc2lvbi5oYXNQZXJtaXNzaW9uIHx8ICFsb2NhdGlvblBlcm1pc3Npb24uaGFzUGVybWlzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignUmVxdWVzdGluZyBCbHVldG9vdGggYW5kIExvY2F0aW9uIHBlcm1pc3Npb25zLi4uJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghYmx1ZXRvb3RoUGVybWlzc2lvbi5oYXNQZXJtaXNzaW9uKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJsdWV0b290aFJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgICAgICAgICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQkxVRVRPT1RIXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmICghYmx1ZXRvb3RoUmVzdWx0Lmhhc1Blcm1pc3Npb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCbHVldG9vdGggcGVybWlzc2lvbiBkZW5pZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0SGFuZGxlcignUGVybWlzc2lvbiBSZXF1aXJlZCcsICdCbHVldG9vdGggcGVybWlzc2lvbiBpcyByZXF1aXJlZCB0byBzY2FuIGZvciBsb2Nrcy4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFsb2NhdGlvblBlcm1pc3Npb24uaGFzUGVybWlzc2lvbikge1xuICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvblJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgICAgICAgICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQUNDRVNTX0ZJTkVfTE9DQVRJT05cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKCFsb2NhdGlvblJlc3VsdC5oYXNQZXJtaXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignTG9jYXRpb24gcGVybWlzc2lvbiBkZW5pZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0SGFuZGxlcignUGVybWlzc2lvbiBSZXF1aXJlZCcsICdMb2NhdGlvbiBwZXJtaXNzaW9uIGlzIHJlcXVpcmVkIHRvIHNjYW4gZm9yIEJsdWV0b290aCBkZXZpY2VzLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBbmRyb2lkIDEyKyAtIG5lZWQgQkxVRVRPT1RIX1NDQU4gYW5kIEJMVUVUT09USF9DT05ORUNUXG4gICAgICAgICAgY29uc3Qgc2NhblBlcm1pc3Npb24gPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5jaGVja1Blcm1pc3Npb24oXG4gICAgICAgICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9TQ0FOXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBjb25uZWN0UGVybWlzc2lvbiA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLmNoZWNrUGVybWlzc2lvbihcbiAgICAgICAgICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQkxVRVRPT1RIX0NPTk5FQ1RcbiAgICAgICAgICApO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmICghc2NhblBlcm1pc3Npb24uaGFzUGVybWlzc2lvbiB8fCAhY29ubmVjdFBlcm1pc3Npb24uaGFzUGVybWlzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignUmVxdWVzdGluZyBCbHVldG9vdGggcGVybWlzc2lvbnMuLi4nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFzY2FuUGVybWlzc2lvbi5oYXNQZXJtaXNzaW9uKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNjYW5SZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcbiAgICAgICAgICAgICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9TQ0FOXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmICghc2NhblJlc3VsdC5oYXNQZXJtaXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQmx1ZXRvb3RoIHNjYW4gcGVybWlzc2lvbiBkZW5pZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0SGFuZGxlcignUGVybWlzc2lvbiBSZXF1aXJlZCcsICdCbHVldG9vdGggc2NhbiBwZXJtaXNzaW9uIGlzIHJlcXVpcmVkIHRvIGZpbmQgbG9ja3MuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghY29ubmVjdFBlcm1pc3Npb24uaGFzUGVybWlzc2lvbikge1xuICAgICAgICAgICAgICBjb25zdCBjb25uZWN0UmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oXG4gICAgICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfQ09OTkVDVFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoIWNvbm5lY3RSZXN1bHQuaGFzUGVybWlzc2lvbikge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0JsdWV0b290aCBjb25uZWN0IHBlcm1pc3Npb24gZGVuaWVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydEhhbmRsZXIoJ1Blcm1pc3Npb24gUmVxdWlyZWQnLCAnQmx1ZXRvb3RoIGNvbm5lY3QgcGVybWlzc2lvbiBpcyByZXF1aXJlZCB0byBjb25uZWN0IHRvIGxvY2tzLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCTEUgcGVybWlzc2lvbnMgZ3JhbnRlZCcpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYEJMRSBwZXJtaXNzaW9uIGNoZWNrIGZhaWxlZDogJHtlcnJvcn1gKTtcbiAgICAgIHRoaXMuYWxlcnRIYW5kbGVyKCdCbHVldG9vdGggRXJyb3InLCAnVW5hYmxlIHRvIGFjY2VzcyBCbHVldG9vdGguIFBsZWFzZSBjaGVjayB5b3VyIGRldmljZSBzZXR0aW5ncy4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpb3NFbmFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdpb3NFbmFibGUoKSBiZWdpbnMnKTtcblxuICAgIGxldCBub3RpZmllcjogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCA9IHRoaXMuYmxlLnN0YXJ0U3RhdGVOb3RpZmljYXRpb25zKCk7XG4gICAgaWYgKG5vdGlmaWVyID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ21pc3Npbmcgbm90aWZpZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmFsZXJ0SGFuZGxlcihcbiAgICAgICdCbHVldG9vdGggaXMgb2ZmLiBQbGVhc2UgdHVybiBpdCBvbiB0byBjb25uZWN0IHRvIGEgbG9jay4nXG4gICAgKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHN0YXRlV2F0Y2hlcjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZWplY3QoJ3RpbWUgZXhwaXJlZCcpO1xuICAgICAgfSwgMTIwICogMTAwMCk7XG5cbiAgICAgIHN0YXRlV2F0Y2hlciA9IG5vdGlmaWVyIS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoYG5ldyBCbHVldG9vdGggc3RhdGU6ICR7c3RhdGV9YCk7XG4gICAgICAgIGxldCBoYW5kbGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ29uJykge1xuICAgICAgICAgIHJlc29sdmUoJ29rJyk7XG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICd1bmF1dGhvcml6ZWQnIHx8IHN0YXRlID09PSAndW5zdXBwb3J0ZWQnKSB7XG4gICAgICAgICAgcmVqZWN0KCdpbnZhbGlkIHN0YXRlOiAnICsgc3RhdGUpO1xuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICBzdGF0ZVdhdGNoZXIhLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgc3RhdGVXYXRjaGVyID0gbnVsbDtcbiAgICAgICAgICBub3RpZmllciA9IG51bGw7XG4gICAgICAgICAgdGhhdC5ibGVcbiAgICAgICAgICAgIC5zdG9wU3RhdGVOb3RpZmljYXRpb25zKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcignY2hhbmdlIG5vdGlmaWNhdGlvbnMgZW5kZWQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKCdjaGFuZ2Ugbm90aWZpY2F0aW9ucyBlcnJvcjogJyArIHJlYXNvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0LmFsZXJ0SGFuZGxlcihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGFydFNjYW4oc2VydmljZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBTaW1wbGUgYXBwcm9hY2ggLSBqdXN0IGxpa2UgdGhlIG9yaWdpbmFsIHdvcmtpbmcgY29kZVxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3N0YXJ0U2NhbjogU3RhcnRpbmcgc2ltcGxlIHNjYW4nKTtcbiAgICByZXR1cm4gdGhpcy5ibGUuc3RhcnRTY2FuKHNlcnZpY2VzKTtcbiAgfVxuXG4gIHN0b3BTY2FuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYmxlLnN0b3BTY2FuKCk7XG4gIH1cblxuICBjb25uZWN0VG8oc2NhbkRhdGE6IERldmljZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5kZXZpY2VJZCA9IG51bGw7XG4gICAgY29uc29sZS5sb2coJ2JsZSBjb25uZWN0aW5nIHRvOiAnICsgc2NhbkRhdGEuaWQpO1xuICAgIHRoaXMuc2VsZWN0VXVpZHMoc2NhbkRhdGEpO1xuICAgIHRoaXMuY29ubmVjdFJlcGVhdGVyID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIGxldCBvYnM6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYmxlLmNvbm5lY3Qoc2NhbkRhdGEuaWQpO1xuICAgIGxldCBub3RpZmllcjogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCA9IG51bGw7XG4gICAgdGhpcy5jb25uZWN0U3Vic2NyaWJlciA9IG9icy5zdWJzY3JpYmUoXG4gICAgICBhc3luYyAocGVyaXBoZXJhbERhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICAgIGBibHVldG9vdGggY29ubmVjdCBzdWNjZWVkZWQ6IG5hbWUgJHtwZXJpcGhlcmFsRGF0YS5uYW1lfSwgaWQgJHtwZXJpcGhlcmFsRGF0YS5pZH1gXG4gICAgICAgICk7XG4gICAgICAgIHRoYXQuZGV2aWNlSWQgPSBzY2FuRGF0YS5pZDtcbiAgICAgICAgdGhhdC5jb25uZWN0UmVwZWF0ZXIhLm5leHQocGVyaXBoZXJhbERhdGEpO1xuICAgICAgICB0aGF0Lm9wUXVldWUuZmx1c2goKTsgLy8gQ2xlYXIgYW55IHBlbmRpbmcgb3BlcmF0aW9uc1xuICAgICAgICB0aGF0LndyaXRlTG9ja0J1c3kgPSBmYWxzZTsgLy8gUmVzZXQgYnVzeSBzdGF0ZVxuICAgICAgICBub3RpZmllciA9IHRoYXQuYmxlLnN0YXJ0Tm90aWZpY2F0aW9uKFxuICAgICAgICAgIHNjYW5EYXRhLmlkLFxuICAgICAgICAgIHRoYXQuU2VydmljZVV1aWQsXG4gICAgICAgICAgdGhhdC5TdGF0dXNVdWlkXG4gICAgICAgICk7XG4gICAgICAgIGxldCBub3RpZmljYXRpb25TdWJzY3JpYmVyID0gbm90aWZpZXIuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAodmFsdWUpID0+XG4gICAgICAgICAgICB0aGF0Lm5vdGlmaWNhdGlvbkhhbmRsZXIgJiYgdGhhdC5ub3RpZmljYXRpb25IYW5kbGVyKHZhbHVlKSxcbiAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB0aGF0Lm5vdGlmaWNhdGlvbkVycm9yKGVycm9yKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoYXQuY29ubmVjdFN1YnNjcmliZXIhLmFkZChub3RpZmljYXRpb25TdWJzY3JpYmVyKTtcbiAgICAgICAgdGhhdC5zdGFydEtlZXBBbGl2ZShzY2FuRGF0YSk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuY29ubmVjdEZhaWxlZCA9IHRoYXQuZGV2aWNlSWQgPT09IG51bGw7XG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgICAgJ2JsdWV0b290aCBkaXNjb25uZWN0ZWQnICtcbiAgICAgICAgICAgIChyZXN1bHQuY29ubmVjdEZhaWxlZCA/ICcgcHJlbWF0dXJlbHk6JyA6ICc6JykgK1xuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KVxuICAgICAgICApO1xuICAgICAgICB0aGF0LmNvbm5lY3RSZXBlYXRlciEuZXJyb3IocmVzdWx0KTtcbiAgICAgICAgdGhhdC5jb25uZWN0U3Vic2NyaWJlciEudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhhdC5jb25uZWN0U3Vic2NyaWJlciA9IG51bGw7XG4gICAgICAgIGlmICghcmVzdWx0LmNvbm5lY3RGYWlsZWQpIHtcbiAgICAgICAgICB0aGF0LnB1cmdlQ29ubmVjdGlvbih0aGF0LmRldmljZUlkISk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5kZXZpY2VJZCA9IG51bGw7XG4gICAgICAgIHRoYXQud3JpdGVMb2NrQnVzeSA9IGZhbHNlOyAvLyBSZXNldCBidXN5IHN0YXRlIG9uIGRpc2Nvbm5lY3RcbiAgICAgICAgdGhhdC5vcFF1ZXVlLmZsdXNoKCk7IC8vIENsZWFyIHBlbmRpbmcgb3BlcmF0aW9uc1xuICAgICAgICB0aGF0LnN0b3BLZWVwQWxpdmUoKTtcbiAgICAgICAgdGhhdC50cnlSZWNvbm5lY3QoKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLmNvbm5lY3RSZXBlYXRlcjtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZGFibGVIZXhUb0J1ZmZlcihzcGFjZVNlcGFyYXRlZEhleDogc3RyaW5nKTogVWludDhBcnJheSB7XG4gICAgbGV0IG46IGFueVtdID0gW107XG4gICAgc3BhY2VTZXBhcmF0ZWRIZXguc3BsaXQoJyAnKS5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBuLnB1c2gocGFyc2VJbnQoeCwgMTYpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWZmZXJUb1JlYWRhYmxlSGV4KGJ1ZmZlcjogVWludDhBcnJheSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYnVmZmVyKVxuICAgICAgLm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cblxuICBpc0xvY2tCdXN5KCkge1xuICAgIHJldHVybiB0aGlzLndyaXRlTG9ja0J1c3k7XG4gIH1cblxuICBwcml2YXRlIHdyaXRlVG9Mb2NrKFxuICAgIGNvbW1hbmROYW1lOiBzdHJpbmcsXG4gICAgY29tbWFuZDogVWludDhBcnJheVxuICApOiBQcm9taXNlPExvY2tTdGF0dXM+IHtcbiAgICBsZXQgcGVuZGluZ1Jlc29sdmU6IGFueTtcbiAgICBsZXQgcGVuZGluZ1JlamVjdDogYW55O1xuICAgIGxldCBub3RpZmljYXRpb25JbmplY3RvcjogYW55ID0gbnVsbDtcbiAgICBsZXQgdGltZW91dElkOiBhbnkgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuZGV2aWNlSWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYFRyaWVkIHRvIHNlbmQgXCIke2NvbW1hbmROYW1lfVwiIHdoZW4gZGlzY29ubmVjdGVkYCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0Rpc2Nvbm5lY3RlZCAtIENvbW1hbmQgcmVmdXNlZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy53cml0ZUxvY2tCdXN5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBgVHJpZWQgdG8gaXNzdWUgXCIke2NvbW1hbmROYW1lfVwiIGJlZm9yZSBwcmV2aW91cyBvcGVyYXRpb24gY29tcGxldGVgXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCd3cml0ZVRvTG9jayAtIGV4ZWN1dGlvbiBvdmVybGFwJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgYFRyaWVkIHRvIGlzc3VlIFwiJHtjb21tYW5kTmFtZX0gd2hpbGUgd2FpdGluZyBmb3Igbm90aWZpY2F0aW9uYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnd3JpdGVUb0xvY2sgLSBub3RpZmljYXRpb24gaW5jb21wbGV0ZScpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLndyaXRlTG9ja0J1c3kgPSB0cnVlO1xuICAgIGNvbW1hbmRbU1VNXSA9IDA7XG4gICAgY29tbWFuZFtTVU1dID0gY29tbWFuZC5yZWR1Y2UoXG4gICAgICAocHJldmlvdXMsIGN1cnJlbnQpID0+IChwcmV2aW91cyArIGN1cnJlbnQpICYgMHhmZlxuICAgICk7XG4gICAgXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPExvY2tTdGF0dXM+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHBlbmRpbmdSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHBlbmRpbmdSZWplY3QgPSByZWplY3Q7XG4gICAgICBcbiAgICAgIC8vIEFkZCB0aW1lb3V0IGZvciBvcGVyYXRpb25zIHRvIHByZXZlbnQgc3R1Y2sgc3RhdGVzXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy53cml0ZUxvY2tCdXN5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uSGFuZGxlciA9IG51bGw7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYE9wZXJhdGlvbiB0aW1lb3V0IGZvciBcIiR7Y29tbWFuZE5hbWV9XCIgLSBubyByZXNwb25zZSByZWNlaXZlZGApO1xuICAgICAgICByZWplY3QoJ09wZXJhdGlvbiB0aW1lb3V0IC0gbm8gcmVzcG9uc2UgcmVjZWl2ZWQnKTtcbiAgICAgIH0sIDgwMDApOyAvLyBSZWR1Y2VkIGZyb20gMTBzIHRvIDhzIGZvciBmYXN0ZXIgZmFpbHVyZSBkZXRlY3Rpb25cbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICBgd3JpdGVUb0xvY2sgXCIke2NvbW1hbmROYW1lfVwiIDogJHt0aGlzLmJ1ZmZlclRvUmVhZGFibGVIZXgoY29tbWFuZCl9YFxuICAgICAgICApO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkhhbmRsZXIgPSByZXNwb25zZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25FcnJvciA9IGVycm9ySGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgYXdhaXQgdGhpcy5ibGUud3JpdGUoXG4gICAgICAgICAgdGhpcy5kZXZpY2VJZCEsXG4gICAgICAgICAgdGhpcy5TZXJ2aWNlVXVpZCxcbiAgICAgICAgICB0aGlzLkNvbW1hbmRVdWlkLFxuICAgICAgICAgIGNvbW1hbmQuYnVmZmVyIGFzIEFycmF5QnVmZmVyXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciBzZXRBbGFybVN0YXRlXG4gICAgICAgIGlmIChjb21tYW5kTmFtZSA9PT0gJ3NldEFsYXJtU3RhdGUnKSB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uSW5qZWN0b3IgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkluamVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBmYWtlQWxhcm1SZXNwb25zZSA9IFtcbiAgICAgICAgICAgICAgdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA3NCAxMCAwMCA1RiBEOCBGRicpLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHJlc3BvbnNlSGFuZGxlci5iaW5kKHRoaXMpKGZha2VBbGFybVJlc3BvbnNlKTtcbiAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAodGltZW91dElkKSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgdGhpcy53cml0ZUxvY2tCdXN5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uSGFuZGxlciA9IG51bGw7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYFdyaXRlIGZhaWxlZCBmb3IgXCIke2NvbW1hbmROYW1lfVwiOiAke0pTT04uc3RyaW5naWZ5KGVycm9yKX1gKTtcbiAgICAgICAgcmVqZWN0KCd3cml0ZSBmYWlsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJlc3BvbnNlSGFuZGxlcih0aGlzOiBCbGVTZXJ2aWNlLCBkYXRhOiBhbnkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICBpZiAobm90aWZpY2F0aW9uSW5qZWN0b3IpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQobm90aWZpY2F0aW9uSW5qZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3JpdGVMb2NrQnVzeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkhhbmRsZXIgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbW1hbmROYW1lID09PSBDTURfU3lzdGVtRXhpdCkge1xuICAgICAgICAgIHBlbmRpbmdSZXNvbHZlKHsgcmVzcG9uc2U6IEFTS19jb3JyZWN0IH0gYXMgTG9ja1N0YXR1cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG91dHB1dCA9ICdObyBkYXRhJztcbiAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyAnTm8gZGF0YSByZXR1cm5lZCBmcm9tIG5vdGlmaWNhdGlvbic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBidWZmZXI6IEFycmF5QnVmZmVyID0gZGF0YVswXTtcbiAgICAgICAgICBpZiAoYnVmZmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93ICdObyBidWZmZXIgcmV0dXJuZWQgZnJvbSBub3RpZmljYXRpb24oKSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICBvdXRwdXQgPSAncmVzdWx0OiAnICsgdGhpcy5idWZmZXJUb1JlYWRhYmxlSGV4KGJ5dGVzKTtcbiAgICAgICAgICBpZiAoYnl0ZXMubGVuZ3RoIDwgREFUQSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihvdXRwdXQpO1xuICAgICAgICAgICAgdGhyb3cgJ1RydW5jYXRlZCByZXNwb25zZSAnICsgYnl0ZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBTOiBMb2NrU3RhdHVzID0ge1xuICAgICAgICAgICAgcmVzcG9uc2U6IGJ5dGVzW0FTS10sXG4gICAgICAgICAgICBleHRyYUJ5dGVzOiBieXRlc1tFWFRdLFxuICAgICAgICAgICAgaXNTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgaXNFcnJvcjogYnl0ZXNbQVNLXSA+IDB4MTAgJiYgYnl0ZXNbQVNLXSA8IDB4MjYsXG4gICAgICAgICAgICB2ZXJpZmllZDogZmFsc2UsXG4gICAgICAgICAgICBhbGFybU9uOiBudWxsLFxuICAgICAgICAgICAgYnV6emVyT246IG51bGwsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBTLnJlc3BvbnNlTXNnID0gUmVzcG9uc2VNYXBbUy5yZXNwb25zZSBhcyBrZXlvZiB0eXBlb2YgUmVzcG9uc2VNYXBdO1xuICAgICAgICAgIGlmICghUy5yZXNwb25zZU1zZykge1xuICAgICAgICAgICAgUy5yZXNwb25zZU1zZyA9ICdVbmtub3duICcgKyBTLnJlc3BvbnNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2ggKGJ5dGVzW0NNRF0pIHtcbiAgICAgICAgICAgIGNhc2UgMHgwZjpcbiAgICAgICAgICAgICAgaWYgKGJ5dGVzW0FTS10gPT09IEFTS19jb3JyZWN0KSB7XG4gICAgICAgICAgICAgICAgUy52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9ICcsIHZlcmlmaWVkJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz1cbiAgICAgICAgICAgICAgICAgICcsICcgK1xuICAgICAgICAgICAgICAgICAgKCFTLmlzRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgPyAndW52ZXJpZmllZCwgcmV0dXJuZWQgJ1xuICAgICAgICAgICAgICAgICAgICA6ICdpbnZhbGlkIHJlc3BvbnNlOiAnKSArXG4gICAgICAgICAgICAgICAgICBTLnJlc3BvbnNlTXNnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAweDYwOlxuICAgICAgICAgICAgICBTLmlzU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgUy5vcGVuQ2xvc2VTdGF0ZSA9IGJ5dGVzW0RBVEFdO1xuICAgICAgICAgICAgICBTLmhvb2tTdGF0ZSA9IGJ5dGVzW0RBVEEgKyAxXTtcbiAgICAgICAgICAgICAgUy52b2x0YWdlVmFsdWUgPSBieXRlc1s4XSAqIDI1NiArIGJ5dGVzWzldO1xuICAgICAgICAgICAgICBTLmxvY2tJZCA9XG4gICAgICAgICAgICAgICAgKGJ5dGVzWzEwXSA8PCAyNCkgK1xuICAgICAgICAgICAgICAgIChieXRlc1sxMV0gPDwgMTYpICtcbiAgICAgICAgICAgICAgICAoYnl0ZXNbMTJdIDw8IDgpICtcbiAgICAgICAgICAgICAgICBieXRlc1sxM107XG4gICAgICAgICAgICAgIFMucmFuZERhdGEgPSBieXRlc1tSQU5EREFUQV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAweDc0OlxuICAgICAgICAgICAgICBTLmFsYXJtT24gPSBieXRlc1tEQVRBXSA9PT0gMDtcbiAgICAgICAgICAgICAgaWYgKGJ5dGVzW0VYVF0gIT09IDApIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJywgYWxhcm0gJyArIChieXRlc1tEQVRBXSA9PT0gMCA/ICdvbicgOiAnb2ZmJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGNvbW1hbmRbQ01EXSAhPT0gYnl0ZXNbQ01EXSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSAnICAqKiogTUlTTUFUQ0ggKioqJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMHg3NTpcbiAgICAgICAgICAgICAgUy5idXp6ZXJPbiA9IGJ5dGVzW0RBVEFdID09PSAwO1xuICAgICAgICAgICAgICBpZiAoYnl0ZXNbRVhUXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSAnLCBidXp6ZXIgJyArIChieXRlc1tEQVRBXSA9PT0gMCA/ICdvbicgOiAnb2ZmJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGNvbW1hbmRbQ01EXSAhPT0gYnl0ZXNbQ01EXSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSAnICAqKiogTUlTTUFUQ0ggKioqJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihvdXRwdXQpO1xuICAgICAgICAgIHBlbmRpbmdSZXNvbHZlKFMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsZXQgbXNnID0gJ0ZhaWxlZCB0byByZWFkIGxvY2sgc3RhdHVzOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKG1zZyk7XG4gICAgICAgIHBlbmRpbmdSZWplY3QoJ3JlYWQgZmFpbGVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLndyaXRlTG9ja0J1c3kgPSBmYWxzZTtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uSGFuZGxlciA9IG51bGw7XG4gICAgICBwZW5kaW5nUmVzb2x2ZSA9IG51bGw7XG4gICAgICBwZW5kaW5nUmVqZWN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvckhhbmRsZXIodGhpczogQmxlU2VydmljZSwgZXJyb3I6IGFueSkge1xuICAgICAgaWYgKHRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICBpZiAobm90aWZpY2F0aW9uSW5qZWN0b3IpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG5vdGlmaWNhdGlvbkluamVjdG9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud3JpdGVMb2NrQnVzeSA9IGZhbHNlO1xuICAgICAgdGhpcy5ub3RpZmljYXRpb25IYW5kbGVyID0gbnVsbDtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ25vdGlmaWNhdGlvbiBlcnJvcjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICBwZW5kaW5nUmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZWFkTG9ja1N0YXR1cygpOiBQcm9taXNlPExvY2tTdGF0dXM+IHtcbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA2MCAwMCAwMCA1RiBCNCcpO1xuICAgIHJldHVybiA8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXG4gICAgICB0aGlzLm9wUXVldWUuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKCdyZWFkLXN0YXRlJywgY29tbWFuZCkpXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZVZlcmlmaWNhdGlvbihsb2NrUGFpcjogTG9ja1BhcmFtZXRlcnMpOiBQcm9taXNlPFZlcmlmeU91dGNvbWU+IHtcbiAgICBsZXQgcmVhZGFibGUgPSAnRjUgMEYgMDAgMDQgNUYgM0InO1xuICAgIGZvciAobGV0IHppID0gMDsgemkgPCA0OyB6aSsrKSB7XG4gICAgICByZWFkYWJsZSArPSAnICcgKyBsb2NrUGFpci5waW4uY2hhckNvZGVBdCh6aSkudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKHJlYWRhYmxlKTtcbiAgICByZXR1cm4gPFByb21pc2U8VmVyaWZ5T3V0Y29tZT4+dGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT5cbiAgICAgIHRoaXMud3JpdGVUb0xvY2soJ3ZlcmlmeScsIGNvbW1hbmQpLnRoZW4oKHJlc3VsdDogTG9ja1N0YXR1cykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZlcmlmaWVkOiByZXN1bHQudmVyaWZpZWQsXG4gICAgICAgICAgaXNFcnJvcjogcmVzdWx0LmlzRXJyb3IsXG4gICAgICAgICAgbXNnOiByZXN1bHQucmVzcG9uc2VNc2csXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBbGFybVN0YXRlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoJ0Y1IDc0IDAwIDAwIDVGIDNCJyk7XG4gICAgcmV0dXJuIDxQcm9taXNlPGJvb2xlYW4+PnRoaXMub3BRdWV1ZVxuICAgICAgLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jaygnZ2V0QWxhcm1TdGF0ZScsIGNvbW1hbmQpKVxuICAgICAgLnRoZW4oKHJlc3VsdDogTG9ja1N0YXR1cykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LmFsYXJtT24gPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICAgICAgJ2dldEFsYXJtU3RhdGU6IGludmFsaWQgc3RhdHVzOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5hbGFybU9uICE9PSBudWxsICYmIHJlc3VsdC5hbGFybU9uO1xuICAgICAgfSk7XG4gIH1cblxuICBhc3luYyBzZXRBbGFybVN0YXRlKGVuYWJsZWQ6IGFueSk6IFByb21pc2U8TG9ja1N0YXR1cz4ge1xuICAgIGxldCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKFxuICAgICAgJ0Y1IDc1IDAwIDAxIDVGIDNCICcgKyAoZW5hYmxlZCA/ICcwMCcgOiAnMDEnKVxuICAgICk7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0ICg8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXG4gICAgICB0aGlzLm9wUXVldWUuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKCdzZXRCdXp6ZXJTdGF0ZScsIGNvbW1hbmQpKVxuICAgICkpO1xuXG4gICAgYXdhaXQgdGhpcy53YWl0Rm9yTWlsbGlzZWNvbmRzKDYwMCk7XG5cbiAgICBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKFxuICAgICAgJ0Y1IDc0IDAwIDAxIDVGIDNCICcgKyAoZW5hYmxlZCA/ICcwMCcgOiAnMDEnKVxuICAgICk7XG4gICAgcmVzdWx0ID0gYXdhaXQgKDxQcm9taXNlPExvY2tTdGF0dXM+PihcbiAgICAgIHRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2soJ3NldEFsYXJtU3RhdGUnLCBjb21tYW5kKSlcbiAgICApKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdHJpZ2dlckxvY2sodG9nZ2xlOiBhbnksIGVuY3J5cHRCeXRlOiBhbnkpOiBQcm9taXNlPExvY2tTdGF0dXM+IHtcbiAgICBsZXQgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcignRjUgNjEgMDAgMDEgNUYgMDAgMDAnKTtcbiAgICBjb21tYW5kW0RBVEFdID0gKHRvZ2dsZSA9PT0gJ3RvZ2dsZScgPyAweDM1IDogMHgzNikgXiBlbmNyeXB0Qnl0ZTtcbiAgICByZXR1cm4gPFByb21pc2U8TG9ja1N0YXR1cz4+KFxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jayh0b2dnbGUsIGNvbW1hbmQpKVxuICAgICk7XG4gIH1cblxuICBzZXREYXRlVGltZShub3c6IERhdGUpIHtcbiAgICBsZXQgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcihcbiAgICAgICdGNSA2MiAwMCAwNiA1RiAwMCcgK1xuICAgICAgICAnICcgK1xuICAgICAgICAoJzAnICsgbm93LmdldEZ1bGxZZWFyKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICcgJyArXG4gICAgICAgICgnMCcgKyBub3cuZ2V0TW9udGgoKSkuc2xpY2UoLTIpICtcbiAgICAgICAgJyAnICtcbiAgICAgICAgKCcwJyArIG5vdy5nZXREYXRlKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICcgJyArXG4gICAgICAgICgnMCcgKyBub3cuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICtcbiAgICAgICAgJyAnICtcbiAgICAgICAgKCcwJyArIG5vdy5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICcgJyArXG4gICAgICAgICgnMCcgKyBub3cuZ2V0U2Vjb25kcygpKS5zbGljZSgtMilcbiAgICApO1xuICAgIHJldHVybiA8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXG4gICAgICB0aGlzLm9wUXVldWUuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKCdzZXRUaW1lJywgY29tbWFuZCkpXG4gICAgKTtcbiAgfVxuXG4gIHB1dExvY2tUb1NsZWVwKCk6IFByb21pc2U8TG9ja1N0YXR1cz4ge1xuICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoJ0Y1IDZGIDAwIDAwIDVGIEMzJyk7XG4gICAgcmV0dXJuIDxQcm9taXNlPExvY2tTdGF0dXM+PihcbiAgICAgIHRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2soQ01EX1N5c3RlbUV4aXQsIGNvbW1hbmQpKVxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXplTG9jaygpOiBQcm9taXNlPExvY2tTdGF0dXM+IHtcbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA2NSAwMCAwMCA1RiBCOScpO1xuICAgIHJldHVybiA8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXG4gICAgICB0aGlzLm9wUXVldWUuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKENNRF9TeXN0ZW1Jbml0LCBjb21tYW5kKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXJnZUNvbm5lY3Rpb24oZGV2aWNlSWQ6IGFueSkge1xuICAgIHRoaXMuYmxlXG4gICAgICAuZGlzY29ubmVjdChkZXZpY2VJZClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3B1cmdlQ29ubmVjdGlvbigpOiAnICsgcmVhc29uKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaXNDb25uZWN0ZWQoZGV2aWNlSWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmJsZS5pc0Nvbm5lY3RlZChkZXZpY2VJZCk7XG4gIH1cblxuICByZWFkUlNTSSgpIHtcbiAgICByZXR1cm4gdGhpcy5ibGUucmVhZFJTU0kodGhpcy5kZXZpY2VJZCEpO1xuICB9XG5cbiAgc2VsZWN0VXVpZHModGFyZ2V0OiBhbnkpIHtcbiAgICBmdW5jdGlvbiBzaG9ydGVuKHV1aWQ6IGFueSwgZXh0cmFjdDogYW55KSB7XG4gICAgICByZXR1cm4gZXh0cmFjdCA/IHV1aWQuc3Vic3RyKDQsIDQpLnRvVXBwZXJDYXNlKCkgOiB1dWlkO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCAhKCdpZCcgaW4gdGFyZ2V0KSkge1xuICAgICAgdGhyb3cgJ25vIGRldmljZSBwcm92aWRlZCc7XG4gICAgfVxuICAgIGNvbnN0IGlzU2hvcnQgPSAhdGFyZ2V0Lmhhc0xvbmdVdWlkcztcbiAgICB0aGlzLlNlcnZpY2VVdWlkID0gc2hvcnRlbih0aGlzLkxvbmdTZXJ2aWNlVXVpZCwgaXNTaG9ydCk7XG4gICAgdGhpcy5TdGF0dXNVdWlkID0gc2hvcnRlbih0aGlzLkxvbmdTdGF0dXNVdWlkLCBpc1Nob3J0KTtcbiAgICB0aGlzLkNvbW1hbmRVdWlkID0gc2hvcnRlbih0aGlzLkxvbmdDb21tYW5kVXVpZCwgaXNTaG9ydCk7XG4gICAgdGhpcy5Db25maWdVdWlkID0gc2hvcnRlbih0aGlzLkxvbmdDb25maWdVdWlkLCBpc1Nob3J0KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBhc3luYyBmb3JjZURpc2Nvbm5lY3QoZGV2aWNlOiBhbnkpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGAqKiBBR0dSRVNTSVZFIEZvcmNlIERpc2Nvbm5lY3QgU3RhcnRlZCAqKmApO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAvLyBDUklUSUNBTDogU3RvcCBrZWVwLWFsaXZlIGltbWVkaWF0ZWx5XG4gICAgICB0aGlzLnN0b3BLZWVwQWxpdmUoKTtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJyoqIEtlZXAtYWxpdmUgc3RvcHBlZCAqKicpO1xuICAgICAgXG4gICAgICAvLyBDUklUSUNBTDogQ2xlYXIgZGV2aWNlIElEIGltbWVkaWF0ZWx5XG4gICAgICB0aGlzLmRldmljZUlkID0gbnVsbDtcbiAgICAgIFxuICAgICAgLy8gQ1JJVElDQUw6IFN0b3AgYW55IG9uZ29pbmcgb3BlcmF0aW9uc1xuICAgICAgdGhpcy53cml0ZUxvY2tCdXN5ID0gZmFsc2U7XG4gICAgICBcbiAgICAgIC8vIENSSVRJQ0FMOiBDbGVhciBzdWJzY3JpcHRpb25zIGltbWVkaWF0ZWx5XG4gICAgICBpZiAodGhpcy5jb25uZWN0U3Vic2NyaWJlcikge1xuICAgICAgICB0aGlzLmNvbm5lY3RTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdFN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCcqKiBDb25uZWN0IHN1YnNjcmliZXIgY2xlYXJlZCAqKicpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25TdWJzY3JpYmVyKSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCcqKiBOb3RpZmljYXRpb24gc3Vic2NyaWJlciBjbGVhcmVkICoqJyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENSSVRJQ0FMOiBUcnkgdG8gc2VuZCBzbGVlcCBjb21tYW5kIGZpcnN0IChsaWtlIG9sZCBjb2RlKVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kU2xlZXBDb21tYW5kVG9Mb2NrKGRldmljZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJyoqIFNsZWVwIGNvbW1hbmQgZmFpbGVkLCBjb250aW51aW5nIHdpdGggZGlzY29ubmVjdCAqKicpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDUklUSUNBTDogRm9yY2UgZGlzY29ubmVjdCBmcm9tIEJMRSB3aXRoIHRpbWVvdXRcbiAgICAgIGNvbnN0IGRpc2Nvbm5lY3RQcm9taXNlID0gdGhpcy5ibGUuZGlzY29ubmVjdChkZXZpY2UuaWQpO1xuICAgICAgY29uc3QgdGltZW91dFByb21pc2UgPSBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IEVycm9yKCdEaXNjb25uZWN0IHRpbWVvdXQnKSksIDUwMDApXG4gICAgICApO1xuICAgICAgXG4gICAgICBhd2FpdCBQcm9taXNlLnJhY2UoW2Rpc2Nvbm5lY3RQcm9taXNlLCB0aW1lb3V0UHJvbWlzZV0pO1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignKiogRm9yY2UgZGlzY29ubmVjdCBjb21wbGV0ZWQgKionKTtcbiAgICAgIFxuICAgICAgLy8gQ1JJVElDQUw6IEFkZGl0aW9uYWwgY2xlYW51cCBhZnRlciBkaXNjb25uZWN0XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUcnkgdG8gc3RvcCBzY2FuIGlmIGl0J3MgcnVubmluZ1xuICAgICAgICBhd2FpdCB0aGlzLmJsZS5zdG9wU2NhbigpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCcqKiBTY2FuIHN0b3BwZWQgYWZ0ZXIgZGlzY29ubmVjdCAqKicpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBJZ25vcmUgc2NhbiBzdG9wIGVycm9yc1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCcqKiBBR0dSRVNTSVZFIEZvcmNlIGRpc2Nvbm5lY3QgY2xlYW51cCBjb21wbGV0ZWQgKionKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJyoqIEZvcmNlIGRpc2Nvbm5lY3QgZmFpbGVkOiAnICsgZXJyICsgJyAqKicpO1xuICAgICAgLy8gQ1JJVElDQUw6IEV2ZW4gaWYgZGlzY29ubmVjdCBmYWlscywgY2xlYXIgQUxMIGxvY2FsIHN0YXRlXG4gICAgICB0aGlzLmRldmljZUlkID0gbnVsbDtcbiAgICAgIHRoaXMud3JpdGVMb2NrQnVzeSA9IGZhbHNlO1xuICAgICAgXG4gICAgICAvLyBDbGVhciBzdWJzY3JpcHRpb25zIGV2ZW4gb24gZmFpbHVyZVxuICAgICAgaWYgKHRoaXMuY29ubmVjdFN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0U3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNvbm5lY3RTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvblN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3Vic2NyaWJlciA9IG51bGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJyoqIEZvcmNlIGRpc2Nvbm5lY3QgY2xlYW51cCBjb21wbGV0ZWQgZGVzcGl0ZSBmYWlsdXJlICoqJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgd2FpdEZvck1pbGxpc2Vjb25kcyhtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxuXG4gIHN0YXJ0S2VlcEFsaXZlKGRldmljZTogRGV2aWNlKSB7XG4gICAgdGhpcy5zdG9wS2VlcEFsaXZlKCk7XG4gICAgdGhpcy5sYXN0Q29ubmVjdGVkRGV2aWNlID0gZGV2aWNlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0Q29ubmVjdGVkRGV2aWNlJywgSlNPTi5zdHJpbmdpZnkoZGV2aWNlKSk7XG4gICAgdGhpcy5rZWVwQWxpdmVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vIE9ubHkgc2VuZCBrZWVwLWFsaXZlIGlmIG5vdCBidXN5IHdpdGggb3BlcmF0aW9uc1xuICAgICAgaWYgKCF0aGlzLndyaXRlTG9ja0J1c3kgJiYgdGhpcy5kZXZpY2VJZCkge1xuICAgICAgICB0aGlzLnJlYWRMb2NrU3RhdHVzKCkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignS2VlcC1hbGl2ZSBmYWlsZWQ6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgIC8vIElmIGtlZXAtYWxpdmUgZmFpbHMsIHRyeSB0byByZWNvbm5lY3RcbiAgICAgICAgICBpZiAodGhpcy5kZXZpY2VJZCkge1xuICAgICAgICAgICAgdGhpcy50cnlSZWNvbm5lY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDMwMDAwKTsgLy8gSW5jcmVhc2VkIHRvIDMwIHNlY29uZHMgdG8gcmVkdWNlIGludGVyZmVyZW5jZVxuICB9XG5cbiAgc3RvcEtlZXBBbGl2ZSgpIHtcbiAgICBpZiAodGhpcy5rZWVwQWxpdmVJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmtlZXBBbGl2ZUludGVydmFsKTtcbiAgICAgIHRoaXMua2VlcEFsaXZlSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHRyeVJlY29ubmVjdCgpIHtcbiAgICBpZiAoIXRoaXMubGFzdENvbm5lY3RlZERldmljZSB8fCB0aGlzLnJlY29ubmVjdEF0dGVtcHRzID49IHRoaXMubWF4UmVjb25uZWN0QXR0ZW1wdHMpIHJldHVybjtcbiAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzKys7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3RUbyh0aGlzLmxhc3RDb25uZWN0ZWREZXZpY2UhKS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA9IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy50cnlSZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMjAwMCAqIHRoaXMucmVjb25uZWN0QXR0ZW1wdHMpOyAvLyBFeHBvbmVudGlhbCBiYWNrb2ZmXG4gIH1cblxuICBhc3luYyBhdXRvUmVjb25uZWN0T25TdGFydCgpIHtcbiAgICBjb25zdCBsYXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RDb25uZWN0ZWREZXZpY2UnKTtcbiAgICBpZiAobGFzdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV2aWNlID0gSlNPTi5wYXJzZShsYXN0KTtcbiAgICAgICAgLy8gT3B0aW9uYWxseSwgY2hlY2sgaWYgZGV2aWNlIGlzIGluIHJhbmdlIGZpcnN0XG4gICAgICAgIHRoaXMuY29ubmVjdFRvKGRldmljZSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzID0gMDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyeVJlY29ubmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIHt9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2NvdmVyIHNlcnZpY2VzIGZvciBhIGRldmljZSBhbmQgY2hlY2sgaWYgdGhlIHJlcXVpcmVkIHNlcnZpY2UgaXMgcHJlc2VudC5cbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSByZXF1aXJlZCBzZXJ2aWNlIGlzIGZvdW5kLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBhc3luYyBoYXNSZXF1aXJlZFNlcnZpY2UoZGV2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBJZiB0aGUgQkxFIHBsdWdpbiBleHBvc2VzIGEgZGlzY292ZXIgbWV0aG9kLCB1c2UgaXQuIE90aGVyd2lzZSwgcmV0dXJuIHRydWUgZm9yIG5vdy5cbiAgICAgIGlmICh0eXBlb2YgKHRoaXMuYmxlIGFzIGFueSkuc2VydmljZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3Qgc2VydmljZXMgPSBhd2FpdCAodGhpcy5ibGUgYXMgYW55KS5zZXJ2aWNlcyhkZXZpY2VJZCk7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Rpc2NvdmVyZWQgc2VydmljZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzZXJ2aWNlcykpO1xuICAgICAgICBpZiAoc2VydmljZXMgJiYgc2VydmljZXMuc2VydmljZXMpIHtcbiAgICAgICAgICByZXR1cm4gc2VydmljZXMuc2VydmljZXMuaW5jbHVkZXModGhpcy5Mb25nU2VydmljZVV1aWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBGYWxsYmFjazogYXNzdW1lIHNlcnZpY2UgaXMgcHJlc2VudCAoZm9yIHBsdWdpbnMgd2l0aG91dCBkaXNjb3ZlcilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ1NlcnZpY2UgZGlzY292ZXJ5IGZhaWxlZDogJyArIGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNvZnQgcmVzZXQgQmx1ZXRvb3RoIGFkYXB0ZXIgKEFuZHJvaWQgb25seSlcbiAgYXN5bmMgc29mdFJlc2V0Qmx1ZXRvb3RoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgJiYgdGhpcy5ibGUgJiYgdHlwZW9mIHRoaXMuYmxlLmlzRW5hYmxlZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdGhpcy5ibGUuZW5hYmxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzb2Z0UmVzZXRCbHVldG9vdGg6IFN0b3BwaW5nIHNjYW4gYW5kIHJlc2V0dGluZyBCTEUgc3RhdGUuLi4nKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFN0b3AgYW55IG9uZ29pbmcgc2NhblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYmxlLnN0b3BTY2FuKCk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc29mdFJlc2V0Qmx1ZXRvb3RoOiBTY2FuIHN0b3BwZWQnKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3NvZnRSZXNldEJsdWV0b290aDogRXJyb3Igc3RvcHBpbmcgc2NhbjogJyArIGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBXYWl0IGEgYml0IGZvciBCTEUgc3RhY2sgdG8gc2V0dGxlXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCAxMDAwKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBUcnkgdG8gZW5hYmxlIEJMRSAodGhpcyBjYW4gaGVscCByZXNldCB0aGUgc3RhY2spXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5ibGUuZW5hYmxlKCk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc29mdFJlc2V0Qmx1ZXRvb3RoOiBCTEUgZW5hYmxlZCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc29mdFJlc2V0Qmx1ZXRvb3RoOiBFcnJvciBlbmFibGluZyBCTEU6ICcgKyBlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc29mdFJlc2V0Qmx1ZXRvb3RoOiBSZXNldCBjb21wbGV0ZWQnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc29mdFJlc2V0Qmx1ZXRvb3RoOiBGYWlsZWQgdG8gcmVzZXQgQmx1ZXRvb3RoOiAnICsgZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3NvZnRSZXNldEJsdWV0b290aDogTm90IHN1cHBvcnRlZCBvbiB0aGlzIHBsYXRmb3JtLicpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNlbmQgc2xlZXAgY29tbWFuZCB0byBsb2NrIHRvIGZvcmNlIGl0IHRvIGRpc2Nvbm5lY3QgKGxpa2Ugb2xkIGNvZGUpXG4gIGFzeW5jIHNlbmRTbGVlcENvbW1hbmRUb0xvY2soZGV2aWNlOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignKiogU2VuZGluZyBzbGVlcCBjb21tYW5kIHRvIGxvY2sgKionKTtcbiAgICAgIFxuICAgICAgLy8gU2xlZXAgY29tbWFuZDogQ01EX1N5c3RlbUV4aXRcbiAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoJ0Y1IDZGIDAwIDAwIDVGIEMzJyk7XG4gICAgICBjb21tYW5kW1NVTV0gPSAwO1xuICAgICAgY29tbWFuZFtTVU1dID0gY29tbWFuZC5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiAocHJldmlvdXMgKyBjdXJyZW50KSAmIDB4RkYpO1xuICAgICAgXG4gICAgICAvLyBTZXQgVVVJRHMgZm9yIHRoZSBkZXZpY2VcbiAgICAgIHRoaXMuc2VsZWN0VXVpZHMoZGV2aWNlKTtcbiAgICAgIFxuICAgICAgLy8gU2VuZCB0aGUgc2xlZXAgY29tbWFuZFxuICAgICAgYXdhaXQgdGhpcy5ibGUud3JpdGUoZGV2aWNlLmlkLCB0aGlzLlNlcnZpY2VVdWlkLCB0aGlzLkNvbW1hbmRVdWlkLCBjb21tYW5kLmJ1ZmZlciBhcyBBcnJheUJ1ZmZlcik7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCcqKiBTbGVlcCBjb21tYW5kIHNlbnQgc3VjY2Vzc2Z1bGx5ICoqJyk7XG4gICAgICBcbiAgICAgIC8vIFdhaXQgYSBiaXQgZm9yIHRoZSBsb2NrIHRvIHByb2Nlc3MgdGhlIGNvbW1hbmRcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCA1MDApKTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCcqKiBGYWlsZWQgdG8gc2VuZCBzbGVlcCBjb21tYW5kOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpICsgJyAqKicpO1xuICAgICAgLy8gRG9uJ3QgdGhyb3cgLSB0aGlzIGlzIGp1c3QgYW4gYWRkaXRpb25hbCBjbGVhbnVwIHN0ZXBcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogVGFjdGljYWwgVHJhcHMgQmx1ZXRvb3RoIExvY2sgQXBwXG4gKiAoYykgMjAxOS0yMDIyIFRhY3RpY2FsIFRyYXBzIGh0dHBzOi8vd3d3LnRhY3RpY2FsdHJhcHMuY29tL1xuICogTGljZW5zZTogUHJvcHJpZXRhcnksIGJ5IHBlcm1pc3Npb24gb25seVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2Uge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJzc2k6IGFueTtcbiAgYWR2ZXJ0aXNpbmc6IGFueTtcbiAgaGFzUHJvcGVyTmFtZT86IGJvb2xlYW47XG4gIGhhc0xvbmdVdWlkcz86IGJvb2xlYW47XG4gIGlzTm90QUdob3N0PzogYm9vbGVhbjtcbiAgY3VzdG9tTmFtZT86IHN0cmluZztcbiAgaXNFeHBhbmRlZD86IGJvb2xlYW47IC8vIEFkZCBmb3IgZGV2aWNlIGV4cGFuc2lvbiBmdW5jdGlvbmFsaXR5XG59XG5cbmV4cG9ydCBjb25zdCBVbmtub3duRGV2aWNlTmFtZSA9ICdVbmtub3duIERldmljZSc7XG5leHBvcnQgdHlwZSBCbGVEZXZpY2VMaXN0ID0gRGV2aWNlW107XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEZXZpY2VzU2VydmljZSB7XG4gIGRldmljZXM6IEJsZURldmljZUxpc3QgPSBbXTtcbiAgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTtcbiAgYmxvY2tpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnRGV2aWNlcyBTZXJ2aWNlIGluaXRpYWxpemluZycpO1xuICB9XG5cbiAgaGV4Qnl0ZShuOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKCcwJyArIG4udG9TdHJpbmcoMTYpKS5zdWJzdHIoLTIsIDIpLnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICAvKiBkZWNvZGUgdGhlIHBlcmlwaGVyYWwgY29ubmVjdGlvbiBkYXRhIHJlY2VpdmVkIHdpdGggYVxuICAgKiBzdWNjZXNzZnVsIGNvbm5lY3Rpb25cbiAgICovXG4gIGFkdmVydGlzZW1lbnREZWNvZGVyKGJ1ZmZlcjogYW55KSB7XG4gICAgdGhpcy5ibG9ja2luZyA9IHRydWU7XG4gICAgbGV0IGFkdlN0cmluZ3MgPSBbXTtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCBieXRlcy5sZW5ndGgpIHtcbiAgICAgIGxldCBzLCBjb3VudDtcbiAgICAgIGxldCBhZExlbmd0aCA9IGJ5dGVzW2luZGV4KytdO1xuICAgICAgaWYgKGFkTGVuZ3RoID09PSAwKSBicmVhaztcbiAgICAgIGNvbnN0IGFkVHlwZSA9IGJ5dGVzW2luZGV4KytdO1xuICAgICAgYWRMZW5ndGggPSBhZExlbmd0aCAtIDE7XG4gICAgICBsZXQgYWREYXRhID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBpbmRleCwgYWRMZW5ndGgpO1xuICAgICAgc3dpdGNoIChhZFR5cGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHMgPSAnRmxhZ3M6ICcgKyB0aGlzLmhleEJ5dGUoYnl0ZXNbaW5kZXhdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvdW50ID0gYWRMZW5ndGggLyAyO1xuICAgICAgICAgIHMgPSAnc2VydmljZTonO1xuICAgICAgICAgIGZvciAobGV0IHppID0gMDsgemkgPCBjb3VudDsgemkrKykge1xuICAgICAgICAgICAgcyArPVxuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICB0aGlzLmhleEJ5dGUoYWREYXRhW3ppICogMiArIDFdKSArXG4gICAgICAgICAgICAgIHRoaXMuaGV4Qnl0ZShhZERhdGFbemkgKiAyXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgcyA9ICdVVUlEOiAnO1xuICAgICAgICAgIGxldCBwMSA9IFtdLFxuICAgICAgICAgICAgcDIgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCB6aSA9IDA7IHppIDwgYWRMZW5ndGg7IHppKyspIHtcbiAgICAgICAgICAgIHAxLnVuc2hpZnQodGhpcy5oZXhCeXRlKGFkRGF0YVt6aV0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSgwLCA0KS5qb2luKCcnKSk7XG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSg0LCA2KS5qb2luKCcnKSk7XG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSg2LCA4KS5qb2luKCcnKSk7XG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSg4LCAxMCkuam9pbignJykpO1xuICAgICAgICAgIHAyLnB1c2gocDEuc2xpY2UoMTAsIDE2KS5qb2luKCcnKSk7XG4gICAgICAgICAgcyA9IHAyLmpvaW4oJy0nKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgbGV0IGFkVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIGluZGV4LCBhZExlbmd0aCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHMgPSB0aGlzLmRlY29kZXIuZGVjb2RlKGFkVmlldyk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcyA9IGFkVmlldztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcyA9ICdyYXc6ICc7XG4gICAgICAgICAgZm9yIChsZXQgemkgPSAwOyB6aSA8IGFkTGVuZ3RoOyB6aSsrKSB7XG4gICAgICAgICAgICBpZiAoemkgPiAwKSBzICs9ICcsICc7XG4gICAgICAgICAgICBzICs9IHRoaXMuaGV4Qnl0ZShhZERhdGFbemldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBhZHZTdHJpbmdzLnB1c2goJzB4JyArIGFkVHlwZS50b1N0cmluZygxNikgKyAnOiAnICsgcyk7XG4gICAgICBpbmRleCArPSBhZExlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5ibG9ja2luZyA9IGZhbHNlO1xuICAgIHJldHVybiBhZHZTdHJpbmdzO1xuICB9XG5cbiAgYWRkRGV2aWNlKGRldmljZTogRGV2aWNlKTogYW55W10ge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ0RldmljZUZhY3RvcnkgYWRkRGV2aWNlIFwiJyArIGRldmljZS5pZCArICdcIiwgXCInICsgZGV2aWNlLm5hbWUgKyAnXCInXG4gICAgKTtcbiAgICAvLyBkZWNvZGUgYWR2ZXJ0aXNlbWVudCB0byBjb25zb2xlIHVubGVzcyBkZWJ1Z2dlciBpcyBwYXVzZWQgaW4gZGVjb2RlclxuICAgIGlmICghdGhpcy5ibG9ja2luZykge1xuICAgICAgbGV0IGFkdmVydHMgPSB0aGlzLmFkdmVydGlzZW1lbnREZWNvZGVyKGRldmljZS5hZHZlcnRpc2luZyk7XG4gICAgICAvLyAgICAgICAgICAgIGFkdmVydHMuZm9yRWFjaChmdW5jdGlvbihzKSB7IGNvbnNvbGUubG9nKHMpOyB9KTtcbiAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coJy4uIFJTU0kgPSAnICsgZGV2aWNlLnJzc2kpO1xuICAgIH1cbiAgICAvLyBBdHRhY2ggY3VzdG9tIG5hbWUgaWYgaXQgZXhpc3RzXG4gICAgY29uc3QgY3VzdG9tTmFtZSA9IHRoaXMuZ2V0Q3VzdG9tTmFtZShkZXZpY2UuaWQpO1xuICAgIGlmIChjdXN0b21OYW1lKSB7XG4gICAgICBkZXZpY2UuY3VzdG9tTmFtZSA9IGN1c3RvbU5hbWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuZGV2aWNlcy5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZGV2aWNlLmlkICYmIGl0ZW0ubmFtZSA9PT0gZGV2aWNlLm5hbWVcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkdXBsaWNhdGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXZpY2VzLnB1c2goZGV2aWNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGV2aWNlcztcbiAgfVxuXG4gIGdldERldmljZXMoKTogQmxlRGV2aWNlTGlzdCB7XG4gICAgY29uc29sZS5sb2coJ0RldmljZUZhY3RvcnkgZ2V0RGV2aWNlcycpO1xuICAgIHJldHVybiB0aGlzLmRldmljZXM7XG4gIH1cblxuICBnZXREZXZpY2UoaWQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdEZXZpY2VGYWN0b3J5IGdldERldmljZSBcIicgKyBpZCArICdcIicpO1xuICAgIGxldCBpbmRleCA9IHRoaXMuZGV2aWNlcy5maW5kSW5kZXgoKGRldmljZSkgPT4gZGV2aWNlLmlkID09PSBpZCk7XG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0aGlzLmRldmljZXNbaW5kZXhdIDogbnVsbDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnNvbGUubG9nKCdEZXZpY2VGYWN0b3J5IHJlc2V0Jyk7XG4gICAgdGhpcy5kZXZpY2VzID0gW107XG4gIH1cblxuICBnZXRDdXN0b21OYW1lKGRldmljZUlkOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbU5hbWVfJyArIGRldmljZUlkKTtcbiAgfVxuXG4gIHNldEN1c3RvbU5hbWUoZGV2aWNlSWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1c3RvbU5hbWVfJyArIGRldmljZUlkLCBuYW1lKTtcbiAgICAvLyBVcGRhdGUgaW4tbWVtb3J5IGRldmljZSBpZiBwcmVzZW50XG4gICAgY29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2VzLmZpbmQoZCA9PiBkLmlkID09PSBkZXZpY2VJZCk7XG4gICAgaWYgKGRldmljZSkge1xuICAgICAgZGV2aWNlLmN1c3RvbU5hbWUgPSBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFV0aWxpdHkgdG8gZXh0cmFjdCBzZXJpYWwgbnVtYmVyIGZyb20gZGV2aWNlIG5hbWVcbiAgc3RhdGljIGV4dHJhY3RTZXJpYWxOdW1iZXIoZGV2aWNlOiBEZXZpY2UpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAoZGV2aWNlLm5hbWUgJiYgZGV2aWNlLm5hbWUuc3RhcnRzV2l0aCgnU046JykpIHtcbiAgICAgIHJldHVybiBkZXZpY2UubmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBHZXQgdGhlIGJlc3QgZGlzcGxheSBuYW1lIGZvciBhIGRldmljZSB3aXRoIGNoYXJhY3RlciBsaW1pdFxuICBzdGF0aWMgZ2V0RGlzcGxheU5hbWUoZGV2aWNlOiBEZXZpY2UpOiBzdHJpbmcge1xuICAgIGxldCBkaXNwbGF5TmFtZSA9ICcnO1xuICAgIFxuICAgIC8vIFByaW9yaXR5IDE6IEN1c3RvbSBuYW1lICh1c2VyLWRlZmluZWQgbmFtZSlcbiAgICBpZiAoZGV2aWNlLmN1c3RvbU5hbWUgJiYgZGV2aWNlLmN1c3RvbU5hbWUudHJpbSgpKSB7XG4gICAgICBkaXNwbGF5TmFtZSA9IGRldmljZS5jdXN0b21OYW1lO1xuICAgIH1cbiAgICAvLyBQcmlvcml0eSAyOiBEZXZpY2UgbmFtZSAoaWYgbm90IFwiVW5rbm93biBEZXZpY2VcIilcbiAgICBlbHNlIGlmIChkZXZpY2UubmFtZSAmJiBkZXZpY2UubmFtZS50cmltKCkgJiYgZGV2aWNlLm5hbWUgIT09ICdVbmtub3duIERldmljZScpIHtcbiAgICAgIGRpc3BsYXlOYW1lID0gZGV2aWNlLm5hbWU7XG4gICAgfVxuICAgIC8vIFByaW9yaXR5IDM6IFNlcmlhbCBudW1iZXIgKGV4dHJhY3RlZCBmcm9tIGRldmljZSlcbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IHNlcmlhbCA9IERldmljZXNTZXJ2aWNlLmV4dHJhY3RTZXJpYWxOdW1iZXIoZGV2aWNlKTtcbiAgICAgIGlmIChzZXJpYWwgJiYgc2VyaWFsLnRyaW0oKSkge1xuICAgICAgICBkaXNwbGF5TmFtZSA9IHNlcmlhbDtcbiAgICAgIH1cbiAgICAgIC8vIFByaW9yaXR5IDQ6IERldmljZSBJRCAoaWYgYXZhaWxhYmxlKVxuICAgICAgZWxzZSBpZiAoZGV2aWNlLmlkICYmIGRldmljZS5pZC50cmltKCkpIHtcbiAgICAgICAgZGlzcGxheU5hbWUgPSBkZXZpY2UuaWQ7XG4gICAgICB9XG4gICAgICAvLyBQcmlvcml0eSA1OiBVbmtub3duIGRldmljZSAoZmFsbGJhY2spXG4gICAgICBlbHNlIHtcbiAgICAgICAgZGlzcGxheU5hbWUgPSAnVW5rbm93biBEZXZpY2UnO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBMaW1pdCB0byAxNSBjaGFyYWN0ZXJzXG4gICAgaWYgKGRpc3BsYXlOYW1lLmxlbmd0aCA+IDE1KSB7XG4gICAgICByZXR1cm4gZGlzcGxheU5hbWUuc3Vic3RyaW5nKDAsIDE1KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgLy8gR2V0IHRleHQgc2l6ZSBjbGFzcyBiYXNlZCBvbiBuYW1lIGxlbmd0aFxuICBzdGF0aWMgZ2V0VGV4dFNpemVDbGFzcyhkZXZpY2U6IERldmljZSk6IHN0cmluZyB7XG4gICAgbGV0IGRpc3BsYXlOYW1lID0gJyc7XG4gICAgXG4gICAgLy8gUHJpb3JpdHkgMTogQ3VzdG9tIG5hbWUgKHVzZXItZGVmaW5lZCBuYW1lKVxuICAgIGlmIChkZXZpY2UuY3VzdG9tTmFtZSAmJiBkZXZpY2UuY3VzdG9tTmFtZS50cmltKCkpIHtcbiAgICAgIGRpc3BsYXlOYW1lID0gZGV2aWNlLmN1c3RvbU5hbWU7XG4gICAgfVxuICAgIC8vIFByaW9yaXR5IDI6IERldmljZSBuYW1lIChpZiBub3QgXCJVbmtub3duIERldmljZVwiKVxuICAgIGVsc2UgaWYgKGRldmljZS5uYW1lICYmIGRldmljZS5uYW1lLnRyaW0oKSAmJiBkZXZpY2UubmFtZSAhPT0gJ1Vua25vd24gRGV2aWNlJykge1xuICAgICAgZGlzcGxheU5hbWUgPSBkZXZpY2UubmFtZTtcbiAgICB9XG4gICAgLy8gUHJpb3JpdHkgMzogU2VyaWFsIG51bWJlciAoZXh0cmFjdGVkIGZyb20gZGV2aWNlKVxuICAgIGVsc2Uge1xuICAgICAgY29uc3Qgc2VyaWFsID0gRGV2aWNlc1NlcnZpY2UuZXh0cmFjdFNlcmlhbE51bWJlcihkZXZpY2UpO1xuICAgICAgaWYgKHNlcmlhbCAmJiBzZXJpYWwudHJpbSgpKSB7XG4gICAgICAgIGRpc3BsYXlOYW1lID0gc2VyaWFsO1xuICAgICAgfVxuICAgICAgLy8gUHJpb3JpdHkgNDogRGV2aWNlIElEIChpZiBhdmFpbGFibGUpXG4gICAgICBlbHNlIGlmIChkZXZpY2UuaWQgJiYgZGV2aWNlLmlkLnRyaW0oKSkge1xuICAgICAgICBkaXNwbGF5TmFtZSA9IGRldmljZS5pZDtcbiAgICAgIH1cbiAgICAgIC8vIFByaW9yaXR5IDU6IFVua25vd24gZGV2aWNlIChmYWxsYmFjaylcbiAgICAgIGVsc2Uge1xuICAgICAgICBkaXNwbGF5TmFtZSA9ICdVbmtub3duIERldmljZSc7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEFwcGx5IGNoYXJhY3RlciBsaW1pdFxuICAgIGlmIChkaXNwbGF5TmFtZS5sZW5ndGggPiAxNSkge1xuICAgICAgZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZS5zdWJzdHJpbmcoMCwgMTUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBSZXR1cm4gYXBwcm9wcmlhdGUgdGV4dCBzaXplIGNsYXNzXG4gICAgaWYgKGRpc3BsYXlOYW1lLmxlbmd0aCA8PSA4KSB7XG4gICAgICByZXR1cm4gJ3RleHQtYmFzZSc7IC8vIE5vcm1hbCBzaXplXG4gICAgfSBlbHNlIGlmIChkaXNwbGF5TmFtZS5sZW5ndGggPD0gMTIpIHtcbiAgICAgIHJldHVybiAndGV4dC1zbSc7IC8vIFNtYWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAndGV4dC14cyc7IC8vIEV4dHJhIHNtYWxsXG4gICAgfVxuICB9XG59XG4iLCIvKipcclxuICogVGFjdGljYWwgVHJhcHMgQmx1ZXRvb3RoIExvY2sgQXBwXHJcbiAqIChjKSAyMDE5LTIwMjIgVGFjdGljYWwgVHJhcHMgaHR0cHM6Ly93d3cudGFjdGljYWx0cmFwcy5jb20vXHJcbiAqIExpY2Vuc2U6IFByb3ByaWV0YXJ5LCBieSBwZXJtaXNzaW9uIG9ubHlcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZWZlcmVuY2VzIH0gZnJvbSAnQGNhcGFjaXRvci9wcmVmZXJlbmNlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2tQYXJhbWV0ZXJzIHtcclxuICBzZXJpYWxOdW1iZXI6IHN0cmluZztcclxuICBwaW46IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMb2NrRGF0YUVycm9ycyA9IHtcclxuICBTVUNDRVNTOiAwLFxyXG4gIE5BVElWRV9XUklURV9GQUlMRUQ6IDEsXHJcbiAgSVRFTV9OT1RfRk9VTkQ6IDIsXHJcbiAgTlVMTF9SRUZFUkVOQ0U6IDMsXHJcbiAgVU5ERUZJTkVEX1RZUEU6IDQsXHJcbiAgSlNPTl9FUlJPUjogNSxcclxuICBXUk9OR19QQVJBTUVURVI6IDYsXHJcbiAgRFVQTElDQVRFX0tFWTogNyxcclxuICBCQURfTkFNRTogOCxcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9ja0RhdGFSZXN1bHQge1xyXG4gIGNvZGU6IG51bWJlcjtcclxuICBleGNlcHRpb24/OiBzdHJpbmc7XHJcbiAgc291cmNlPzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9ja0RhdGFTZXJ2aWNlIHtcclxuICBsb2NrczogTG9ja1BhcmFtZXRlcnNbXSA9IFtdO1xyXG4gIGJsb2NraW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3RhdHVzTWVzc2FnZUhhbmRsZXI6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQgPSAoeDogc3RyaW5nKSA9PiB7fTsgLy8gRGVmYXVsdCBoYW5kbGVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1BpbiBTdG9yZSBTZXJ2aWNlIGluaXRpYWxpemluZycpO1xyXG4gIH1cclxuXHJcbiAgLyogQ2FsbCBhdCBzdGFydHVwIHRvIGxvYWQgYW55IGV4aXN0aW5nIFBpbiBwYWlycy4gUmV0dXJuIGEgUHJvbWlzZSBwcm9kdWNpbmdcclxuICAgKiBlaXRoZXIgVFJVRSBvciBhbiBlcnJvciBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIHNldHVwKHN0YXR1c01lc3NhZ2VIYW5kbGVyOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAoc3RhdHVzTWVzc2FnZUhhbmRsZXIpIHtcclxuICAgICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIgPSBzdGF0dXNNZXNzYWdlSGFuZGxlcjtcclxuICAgIH1cclxuICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKCdsb2NrLWRhdGE6IGFjdGl2YXRlJyk7XHJcbiAgfVxyXG5cclxuICBtYWtlTG9jayhzZXJpYWxOdW1iZXI6IHN0cmluZywgcGluOiBzdHJpbmcpOiBMb2NrUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4geyBzZXJpYWxOdW1iZXIsIHBpbiwgbmFtZTogJycgfTtcclxuICB9XHJcblxyXG4gIGhleEJ5dGUobjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoJzAnICsgbi50b1N0cmluZygxNikpLnN1YnN0cigtMiwgMikudG9VcHBlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIC8qIGNsZWFyIHRoZSBzdG9yZSBvZiBhbnkgZXhpc3Rpbmcgc2VyaWFsL1BJTiBwYWlycyAqL1xyXG4gIGNsZWFyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIFByZWZlcmVuY2VzLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIGRldmljZSBhbHJlYWR5IGV4aXN0cy5cclxuICAgKiBAcGFyYW0gbmFtZSBkZXZpY2UgaWQgZm91bmQgYnkgc2Nhbm5pbmdcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz4sIHJlamVjdHMgd2l0aCBMb2NrRGF0YUVycm9yXHJcbiAgICovXHJcbiAgZ2V0QXV0aG9yaXphdGlvbihuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoYGdldEF1dGhvcml6YXRpb24gZm9yIFwiJHtuYW1lfVwiYCk7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XHJcbiAgICAgICAgZXhjZXB0aW9uOiBgZ2V0QXV0aG9yaXphdGlvbjogYmFkIG5hbWUgXCIke25hbWV9XCJgLFxyXG4gICAgICAgIGNvZGU6IExvY2tEYXRhRXJyb3JzLkJBRF9OQU1FLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcmVmZXJlbmNlcy5nZXQoeyBrZXk6IG5hbWUgfSkudGhlbigodikgPT4ge1xyXG4gICAgICBpZiAodi52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IHsgY29kZTogTG9ja0RhdGFFcnJvcnMuSVRFTV9OT1RfRk9VTkQgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdi52YWx1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkZCBhIG5ldyBkZXZpY2UgdG8gcGVybWFuZW50IHN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIGxvY2sgdGFyZ2V0IGRldmljZVxyXG4gICAqIEByZXR1cm5zIHJlc3VsdCBvZiBzdG9yYWdlIHNhdmUgYXMgUHJvbWlzZSBvZiBMb2NrRGF0YUVycm9yc1xyXG4gICAqL1xyXG4gIGFkZEF1dGhvcml6YXRpb24obG9jazogTG9ja1BhcmFtZXRlcnMpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgIGBMb2NrRGF0YSBhZGREZXZpY2UgXCIke2xvY2suc2VyaWFsTnVtYmVyfVwiLCBcIiR7bG9jay5waW59XCJgXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldEF1dGhvcml6YXRpb24obG9jay5zZXJpYWxOdW1iZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlcignKioqIGVycm9yOiBhZGRpbmcgZHVwbGljYXRlIGRldmljZScpO1xyXG4gICAgICAgIGFsZXJ0KCdMb2NrRGF0YTogYWRkaW5nIGR1cGxpY2F0ZSBkZXZpY2UnKTtcclxuICAgICAgICByZXR1cm4gTG9ja0RhdGFFcnJvcnMuRFVQTElDQVRFX0tFWTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gUHJlZmVyZW5jZXMuc2V0KHtcclxuICAgICAgICAgIGtleTogbG9jay5zZXJpYWxOdW1iZXIsXHJcbiAgICAgICAgICB2YWx1ZTogbG9jay5waW4sXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gTG9ja0RhdGFFcnJvcnMuU1VDQ0VTUztcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShMb2NrRGF0YUVycm9ycy5OQVRJVkVfV1JJVEVfRkFJTEVEKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGFuIGFyYml0cmFyeSBpdGVtIGZyb20gc3RvcmFnZS5cclxuICAgKiBAcGFyYW0gbmFtZVxyXG4gICAqIEByZXR1cm5zIFByb21pc2Ugb2Ygc3RyaW5nIG9yIExvY2tEYXRhUmVzdWx0XHJcbiAgICovXHJcbiAgZ2V0VmFsdWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKGBnZXRWYWx1ZSBmb3IgXCIke25hbWV9XCJgKTtcclxuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcclxuICAgICAgICBleGNlcHRpb246IGBnZXRWYWx1ZTogYmFkIG5hbWUgXCIke25hbWV9XCJgLFxyXG4gICAgICAgIGNvZGU6IExvY2tEYXRhRXJyb3JzLkJBRF9OQU1FLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcmVmZXJlbmNlcy5nZXQoeyBrZXk6IG5hbWUgfSkudGhlbigodikgPT4ge1xyXG4gICAgICBpZiAodi52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IHsgY29kZTogTG9ja0RhdGFFcnJvcnMuSVRFTV9OT1RfRk9VTkQgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdi52YWx1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SnNvblZhbHVlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShuYW1lKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xyXG4gICAgICAgIC8vIEV4cGxpY2l0bHkgdHlwZSBhcyB1bmtub3duXHJcbiAgICAgICAgLy8gVHlwZSBndWFyZCB0byBjaGVjayBpZiBlIGlzIGFuIEVycm9yXHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGUubWVzc2FnZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0gZTsgLy8gSWYgZSBpcyBhIHN0cmluZywgdXNlIGl0IGRpcmVjdGx5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdVbmtub3duIGVycm9yIG9jY3VycmVkJzsgLy8gRmFsbGJhY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgeyBjb2RlOiBMb2NrRGF0YUVycm9ycy5KU09OX0VSUk9SLCBleGNlcHRpb246IGVycm9yTWVzc2FnZSB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgYXJiaXRyYXJ5IDxrZXkgOjogc3RyaW5nPiBpbiBzdG9yYWdlXHJcbiAgICogQHJldHVybnMgUHJvbWlzZSB0byBzdWNjZXNzIG9yIExvY2tEYXRhUmVzdWx0XHJcbiAgICovXHJcbiAgc2V0VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIFByZWZlcmVuY2VzLnNldCh7IGtleSwgdmFsdWUgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBMb2NrRGF0YUVycm9ycy5TVUNDRVNTO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKExvY2tEYXRhRXJyb3JzLk5BVElWRV9XUklURV9GQUlMRUQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgYXJiaXRyYXJ5IDxrZXkgOjogb2JqZWN0PiBpbiBzdG9yYWdlXHJcbiAgICogQHJldHVybnMgUHJvbWlzZSB0byBzdWNjZXNzIG9yIExvY2tEYXRhUmVzdWx0XHJcbiAgICovXHJcbiAgc2V0SnNvblZhbHVlKG5hbWU6IHN0cmluZywgb2JqZWN0OiBhbnkpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0VmFsdWUobmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVtb3ZlIGEgZGV2aWNlJ3MgYXV0aG9yaXphdGlvbiAoUElOKSBmcm9tIHN0b3JhZ2UuICovXHJcbiAgcmVtb3ZlQXV0aG9yaXphdGlvbihuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKGByZW1vdmVBdXRob3JpemF0aW9uIGZvciBcIiR7bmFtZX1cImApO1xyXG4gICAgcmV0dXJuIFByZWZlcmVuY2VzLnJlbW92ZSh7IGtleTogbmFtZSB9KTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRhY3RpY2FsIFRyYXBzIEJsdWV0b290aCBMb2NrIEFwcFxyXG4gKiAoYykgMjAxOS0yMDIyIFRhY3RpY2FsIFRyYXBzIGh0dHBzOi8vd3d3LnRhY3RpY2FsdHJhcHMuY29tL1xyXG4gKiBMaWNlbnNlOiBQcm9wcmlldGFyeSwgYnkgcGVybWlzc2lvbiBvbmx5XHJcbiAqL1xyXG5cclxuLyoqIER5bmFtaWNRdWV1ZVxyXG4gKlxyXG4gKiBBIGNsYXNzIGRlc2lnbmVkIHRvIHF1ZXVlIFByb21pc2UtcmV0dXJuaW5nIGZ1bmN0aW9ucyBmb3JcclxuICogc2VxdWVudGlhbCBleGVjdXRpb24uXHJcbiAqL1xyXG5cclxuaW50ZXJmYWNlIFF1ZXVlSXRlbTxUID0gYW55PiB7XHJcbiAgb3BlcmF0aW9uOiAoKSA9PiBQcm9taXNlPFQ+OyAvLyBGdW5jdGlvbiByZXR1cm5pbmcgYSBQcm9taXNlIHdpdGggZ2VuZXJpYyB0eXBlIFRcclxuICByZXNvbHZlOiAodmFsdWU6IFQpID0+IHZvaWQ7IC8vIFJlc29sdmUgZnVuY3Rpb24gd2l0aCB0eXBlZCB2YWx1ZVxyXG4gIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDsgLy8gUmVqZWN0IGZ1bmN0aW9uIHdpdGggb3B0aW9uYWwgcmVhc29uXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljUXVldWUge1xyXG4gIHByaXZhdGUgcXVldWU6IFF1ZXVlSXRlbVtdID0gW107IC8vIFR5cGVkIGFycmF5IG9mIFF1ZXVlSXRlbVxyXG4gIHByaXZhdGUgcGVuZGluZ1Byb21pc2UgPSBmYWxzZTtcclxuICBwcml2YXRlIHdvcmtpbmdPblByb21pc2UgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmx1c2hlcyB0aGUgcXVldWUgYnkgY2xlYXJpbmcgYWxsIGl0ZW1zLlxyXG4gICAqL1xyXG4gIGZsdXNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgZnVuY3Rpb24gdG8gdGhlIHF1ZXVlIGZvciBleGVjdXRpb247IHJldHVybiBhbiBlbmNsb3NpbmcgUHJvbWlzZS5cclxuICAgKiBUaGUgc2Vjb25kYXJ5IFByb21pc2UgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGZ1bmN0aW9uJ3MgUHJvbWlzZSBjYW4gb25seVxyXG4gICAqIGJlIHNlY3VyZWQgYnkgYmVnaW5uaW5nIGV4ZWN1dGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcGVyYXRpb24gLSBUaGUgUHJvbWlzZS1yZXR1cm5pbmcgZnVuY3Rpb24gdG8gZW5xdWV1ZVxyXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSBvcGVyYXRpb24ncyByZXN1bHRcclxuICAgKi9cclxuICBlbnF1ZXVlPFQgPSBhbnk+KG9wZXJhdGlvbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKHtcclxuICAgICAgICBvcGVyYXRpb24sXHJcbiAgICAgICAgcmVzb2x2ZSxcclxuICAgICAgICByZWplY3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRlcXVldWUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIElmIG5vdCBidXN5LCBwdWxsIHRoZSBuZXh0IGZ1bmN0aW9uIGZyb20gdGhlIHF1ZXVlIGFuZCBleGVjdXRlIGl0LiBXaGVuIHRoZVxyXG4gICAqIHByb21pc2UgY29tcGxldGVzLCB0aGUgbmV4dCBpdGVtIGlzIHJlY3Vyc2l2ZWx5IHN0YXJ0ZWQuIFJlcGVhdHMgdW50aWxcclxuICAgKiB0aGUgcXVldWUgaXMgZW1wdHkuIFdpdGggcHJvbWlzZXMsIHRoZSBlbnF1ZXVlaW5nIHRhc2sgb25seSBuZWVkcyB0b1xyXG4gICAqIGludm9rZSBkZXF1ZXVlKCkgd2hlbiBpdCBwdXNoZXMgb250byBhbiBlbXB0eSBxdWV1ZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBhbiBpdGVtIHdhcyBkZXF1ZXVlZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZGVxdWV1ZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLndvcmtpbmdPblByb21pc2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMucXVldWUuc2hpZnQoKTtcclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLndvcmtpbmdPblByb21pc2UgPSB0cnVlO1xyXG4gICAgICBpdGVtXHJcbiAgICAgICAgLm9wZXJhdGlvbigpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgIC8vIEV4cGxpY2l0bHkgdHlwZWQgdmFsdWUsIGNhbiBiZSByZWZpbmVkIHdpdGggVFxyXG4gICAgICAgICAgdGhpcy53b3JraW5nT25Qcm9taXNlID0gZmFsc2U7XHJcbiAgICAgICAgICBpdGVtLnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5kZXF1ZXVlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAvLyBFeHBsaWNpdGx5IHR5cGVkIGVyciwgY2FuIGJlIHJlZmluZWRcclxuICAgICAgICAgIHRoaXMud29ya2luZ09uUHJvbWlzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaXRlbS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgIHRoaXMuZGVxdWV1ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgdGhpcy53b3JraW5nT25Qcm9taXNlID0gZmFsc2U7XHJcbiAgICAgIGl0ZW0ucmVqZWN0KGVycik7XHJcbiAgICAgIHRoaXMuZGVxdWV1ZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUXVldWU7XHJcbiIsIi8vIFRoaXMgZmlsZSBjYW4gYmUgcmVwbGFjZWQgZHVyaW5nIGJ1aWxkIGJ5IHVzaW5nIHRoZSBgZmlsZVJlcGxhY2VtZW50c2AgYXJyYXkuXHJcbi8vIGBuZyBidWlsZCAtLXByb2RgIHJlcGxhY2VzIGBlbnZpcm9ubWVudC50c2Agd2l0aCBgZW52aXJvbm1lbnQucHJvZC50c2AuXHJcbi8vIFRoZSBsaXN0IG9mIGZpbGUgcmVwbGFjZW1lbnRzIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci5qc29uYC5cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuICBwcm9kdWN0aW9uOiBmYWxzZVxyXG59O1xyXG5cclxuLypcclxuICogRm9yIGVhc2llciBkZWJ1Z2dpbmcgaW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGNhbiBpbXBvcnQgdGhlIGZvbGxvd2luZyBmaWxlXHJcbiAqIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXMgYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYC5cclxuICpcclxuICogVGhpcyBpbXBvcnQgc2hvdWxkIGJlIGNvbW1lbnRlZCBvdXQgaW4gcHJvZHVjdGlvbiBtb2RlIGJlY2F1c2UgaXQgd2lsbCBoYXZlIGEgbmVnYXRpdmUgaW1wYWN0XHJcbiAqIG9uIHBlcmZvcm1hbmNlIGlmIGFuIGVycm9yIGlzIHRocm93bi5cclxuICovXHJcbi8vIGltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUtZXJyb3InOyAgLy8gSW5jbHVkZWQgd2l0aCBBbmd1bGFyIENMSS5cclxuIiwiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcblxyXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pb24tYWNjb3JkaW9uXzIuZW50cnkuanNcIjogW1xuXHRcdDc1MTgsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hY2NvcmRpb25fMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYWN0aW9uLXNoZWV0LmVudHJ5LmpzXCI6IFtcblx0XHQxOTgxLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYWN0aW9uLXNoZWV0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hbGVydC5lbnRyeS5qc1wiOiBbXG5cdFx0MTYwMyxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFsZXJ0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hcHBfOC5lbnRyeS5qc1wiOiBbXG5cdFx0MjI3Myxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFwcF84X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hdmF0YXJfMy5lbnRyeS5qc1wiOiBbXG5cdFx0OTY0Mixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hdmF0YXJfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYmFjay1idXR0b24uZW50cnkuanNcIjogW1xuXHRcdDIwOTUsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1iYWNrLWJ1dHRvbl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYmFja2Ryb3AuZW50cnkuanNcIjogW1xuXHRcdDIzMzUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYmFja2Ryb3BfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJyZWFkY3J1bWJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0ODIyMSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJyZWFkY3J1bWJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYnV0dG9uXzIuZW50cnkuanNcIjogW1xuXHRcdDcxODQsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYnV0dG9uXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWNhcmRfNS5lbnRyeS5qc1wiOiBbXG5cdFx0ODc1OSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jYXJkXzVfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWNoZWNrYm94LmVudHJ5LmpzXCI6IFtcblx0XHQ0MjQ4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWNoZWNrYm94X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jaGlwLmVudHJ5LmpzXCI6IFtcblx0XHQ5ODYzLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWNoaXBfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWNvbF8zLmVudHJ5LmpzXCI6IFtcblx0XHQxNzY5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWNvbF8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1kYXRldGltZS1idXR0b24uZW50cnkuanNcIjogW1xuXHRcdDI1NjksXG5cdFx0XCJkZWZhdWx0LW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2RhdGEtR0lzSHNZSUJfanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1kYXRldGltZS1idXR0b25fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWRhdGV0aW1lXzMuZW50cnkuanNcIjogW1xuXHRcdDY1MzQsXG5cdFx0XCJkZWZhdWx0LW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2RhdGEtR0lzSHNZSUJfanNcIixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWRhdGV0aW1lXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWZhYl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ1NDU4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tZmFiXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWltZy5lbnRyeS5qc1wiOiBbXG5cdFx0NjU0LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWltZ19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5maW5pdGUtc2Nyb2xsXzIuZW50cnkuanNcIjogW1xuXHRcdDYwMzQsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbmZpbml0ZS1zY3JvbGxfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5wdXQtb3RwLmVudHJ5LmpzXCI6IFtcblx0XHQzODEsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbnB1dC1vdHBfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZS5lbnRyeS5qc1wiOiBbXG5cdFx0NTE5Nixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5wdXQuZW50cnkuanNcIjogW1xuXHRcdDc2MSxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW5wdXRfdXRpbHMteldpak5DcnhfanMtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdC0yZTA5OTRcIixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWlucHV0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pdGVtLW9wdGlvbl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ2NDkyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taXRlbS1vcHRpb25fM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taXRlbV84LmVudHJ5LmpzXCI6IFtcblx0XHQ5NTU3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taXRlbV84X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1sb2FkaW5nLmVudHJ5LmpzXCI6IFtcblx0XHQ4MzUzLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbG9hZGluZ19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbWVudV8zLmVudHJ5LmpzXCI6IFtcblx0XHQxMDI0LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbWVudV8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1tb2RhbC5lbnRyeS5qc1wiOiBbXG5cdFx0OTE2MCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW1vZGFsX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1uYXZfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MzkzLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW5hdl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1waWNrZXItY29sdW1uLW9wdGlvbi5lbnRyeS5qc1wiOiBbXG5cdFx0ODQ0Mixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXItY29sdW1uLW9wdGlvbl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcGlja2VyLWNvbHVtbi5lbnRyeS5qc1wiOiBbXG5cdFx0MzExMCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXBpY2tlci1jb2x1bW5fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBpY2tlci5lbnRyeS5qc1wiOiBbXG5cdFx0NTU3NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBvcG92ZXIuZW50cnkuanNcIjogW1xuXHRcdDY3NzIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1wb3BvdmVyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1wcm9ncmVzcy1iYXIuZW50cnkuanNcIjogW1xuXHRcdDQ4MTAsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcHJvZ3Jlc3MtYmFyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yYWRpb18yLmVudHJ5LmpzXCI6IFtcblx0XHQ0NjM5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmFkaW9fMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmFuZ2UuZW50cnkuanNcIjogW1xuXHRcdDYyOCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJhbmdlX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yZWZyZXNoZXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0ODUyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmVmcmVzaGVyXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJlb3JkZXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MTQ3OSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJlb3JkZXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmlwcGxlLWVmZmVjdC5lbnRyeS5qc1wiOiBbXG5cdFx0NDA2NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yaXBwbGUtZWZmZWN0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yb3V0ZV80LmVudHJ5LmpzXCI6IFtcblx0XHQ3OTcxLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJvdXRlXzRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlYXJjaGJhci5lbnRyeS5qc1wiOiBbXG5cdFx0MzE4NCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlYXJjaGJhcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudC1jb250ZW50LmVudHJ5LmpzXCI6IFtcblx0XHQ0MzEyLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlZ21lbnQtY29udGVudF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudC12aWV3LmVudHJ5LmpzXCI6IFtcblx0XHQ0NTQwLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlZ21lbnQtdmlld19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudF8yLmVudHJ5LmpzXCI6IFtcblx0XHQ0NjksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWdtZW50XzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlbGVjdC1tb2RhbC5lbnRyeS5qc1wiOiBbXG5cdFx0NzEwMSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWxlY3QtbW9kYWxfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlbGVjdF8zLmVudHJ5LmpzXCI6IFtcblx0XHQ4NDcxLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2VsZWN0XzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwaW5uZXIuZW50cnkuanNcIjogW1xuXHRcdDM4OCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNwaW5uZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwbGl0LXBhbmUuZW50cnkuanNcIjogW1xuXHRcdDIzOTIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc3BsaXQtcGFuZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGFiLWJhcl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ2MDU5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGFiLWJhcl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10YWJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0NTQyNyxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10YWJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGV4dC5lbnRyeS5qc1wiOiBbXG5cdFx0MTk4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRleHRhcmVhLmVudHJ5LmpzXCI6IFtcblx0XHQxNzM1LFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pbnB1dF91dGlscy16V2lqTkNyeF9qcy1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0LTJlMDk5NFwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRhcmVhX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10b2FzdC5lbnRyeS5qc1wiOiBbXG5cdFx0NzUxMCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRvYXN0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10b2dnbGUuZW50cnkuanNcIjogW1xuXHRcdDUyOTcsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10b2dnbGVfZW50cnlfanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSA4OTk2O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gNDE0MDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgLm5hbWUtaW5wdXQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgIC5jaGFyLWNvdW50IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgYm90dG9tOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLmNoYXItY291bnQud2FybmluZyB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgIH1cblxuICAgIC5kZXZpY2UtaW5mbyB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLmluZm8taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuaW5mby1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAubGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnZhbHVlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIH1cblxuICAgIC5zYXZlLWJ1dHRvbiB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cblxuICAgIGlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICBcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVZrYVhRdGJtRnRaUzF0YjJSaGJDNWpiMjF3YjI1bGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRKUVVOSk8wMUJRMFVzWlVGQlpUdEpRVU5xUWpzN1NVRkZRVHROUVVORkxHdENRVUZyUWp0TlFVTnNRaXh0UWtGQmJVSTdTVUZEY2tJN08wbEJSVUU3VFVGRFJTeHhRa0ZCY1VJN1RVRkRja0lzYlVKQlFXMUNPMDFCUTI1Q0xHMUNRVUZ0UWp0TlFVTnVRaXh6UWtGQmMwSTdUVUZEZEVJc2IwSkJRVzlDTzAxQlEzQkNMRzFDUVVGdFFqdE5RVU51UWl4MVEwRkJkVU03VFVGRGRrTXNiME5CUVc5RE8wMUJRM0JETEdWQlFXVTdTVUZEYWtJN08wbEJSVUU3VFVGRFJTeHJRa0ZCYTBJN1RVRkRiRUlzVjBGQlZ6dE5RVU5ZTEZsQlFWazdUVUZEV2l4bFFVRmxPMDFCUTJZc09FSkJRVGhDTzAxQlF6bENMR3REUVVGclF6dE5RVU5zUXl4blFrRkJaMEk3VFVGRGFFSXNhMEpCUVd0Q08wbEJRM0JDT3p0SlFVVkJPMDFCUTBVc0swSkJRU3RDTzBsQlEycERPenRKUVVWQk8wMUJRMFVzYTBOQlFXdERPMDFCUTJ4RExHdENRVUZyUWp0TlFVTnNRaXhoUVVGaE8wMUJRMklzWjBKQlFXZENPMGxCUTJ4Q096dEpRVVZCTzAxQlEwVXNZVUZCWVR0TlFVTmlMRGhDUVVFNFFqdE5RVU01UWl4dFFrRkJiVUk3VFVGRGJrSXNhMEpCUVd0Q08wbEJRM0JDT3p0SlFVVkJPMDFCUTBVc1owSkJRV2RDTzBsQlEyeENPenRKUVVWQk8wMUJRMFVzWjBKQlFXZENPMDFCUTJoQ0xEUkNRVUUwUWp0TlFVTTFRaXhsUVVGbE8wbEJRMnBDT3p0SlFVVkJPMDFCUTBVc09FSkJRVGhDTzAxQlF6bENMR1ZCUVdVN1RVRkRaaXhwUWtGQmFVSTdUVUZEYWtJc2NVSkJRWEZDTzBsQlEzWkNPenRKUVVWQk8wMUJRMFVzYjBKQlFXOUNPMDFCUTNCQ0xIZENRVUYzUWp0SlFVTXhRanM3U1VGRlFUdE5RVU5GTEc5RFFVRnZRenROUVVOd1F5eHpRMEZCYzBNN1NVRkRlRU03TzBsQlJVRTdUVUZEUlN4dlEwRkJiME03VFVGRGNFTXNjME5CUVhORE8wbEJRM2hESWl3aVptbHNaU0k2SW1Wa2FYUXRibUZ0WlMxdGIyUmhiQzVqYjIxd2IyNWxiblF1ZEhNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmNiaUFnSUNBdVpXUnBkQzF1WVcxbExXTnZiblJoYVc1bGNpQjdYRzRnSUNBZ0lDQndZV1JrYVc1bk9pQXhObkI0SURBN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTG1sdWNIVjBMV2R5YjNWd0lIdGNiaUFnSUNBZ0lIQnZjMmwwYVc5dU9pQnlaV3hoZEdsMlpUdGNiaUFnSUNBZ0lHMWhjbWRwYmkxaWIzUjBiMjA2SURJMGNIZzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0xtNWhiV1V0YVc1d2RYUWdlMXh1SUNBZ0lDQWdMUzF3WVdSa2FXNW5MWE4wWVhKME9pQXhObkI0TzF4dUlDQWdJQ0FnTFMxd1lXUmthVzVuTFdWdVpEb2dNVFp3ZUR0Y2JpQWdJQ0FnSUMwdGNHRmtaR2x1WnkxMGIzQTZJREV5Y0hnN1hHNGdJQ0FnSUNBdExYQmhaR1JwYm1jdFltOTBkRzl0T2lBeE1uQjRPMXh1SUNBZ0lDQWdMUzFpYjNKa1pYSXRjbUZrYVhWek9pQTRjSGc3WEc0Z0lDQWdJQ0F0TFdKdmNtUmxjaTEzYVdSMGFEb2dNWEI0TzF4dUlDQWdJQ0FnTFMxaWIzSmtaWEl0WTI5c2IzSTZJSFpoY2lndExXbHZiaTFqYjJ4dmNpMXRaV1JwZFcwcE8xeHVJQ0FnSUNBZ0xTMWlZV05yWjNKdmRXNWtPaUIyWVhJb0xTMXBiMjR0WTI5c2IzSXRiR2xuYUhRcE8xeHVJQ0FnSUNBZ2JXRnlaMmx1TFhSdmNEb2dPSEI0TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzVqYUdGeUxXTnZkVzUwSUh0Y2JpQWdJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JpQWdJQ0FnSUhKcFoyaDBPaUF4Tm5CNE8xeHVJQ0FnSUNBZ1ltOTBkRzl0T2lBeE1uQjRPMXh1SUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF4TW5CNE8xeHVJQ0FnSUNBZ1kyOXNiM0k2SUhaaGNpZ3RMV2x2YmkxamIyeHZjaTF0WldScGRXMHBPMXh1SUNBZ0lDQWdZbUZqYTJkeWIzVnVaRG9nZG1GeUtDMHRhVzl1TFdOdmJHOXlMV3hwWjJoMEtUdGNiaUFnSUNBZ0lIQmhaR1JwYm1jNklESndlQ0EyY0hnN1hHNGdJQ0FnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUEwY0hnN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTG1Ob1lYSXRZMjkxYm5RdWQyRnlibWx1WnlCN1hHNGdJQ0FnSUNCamIyeHZjam9nZG1GeUtDMHRhVzl1TFdOdmJHOXlMWGRoY201cGJtY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDNWtaWFpwWTJVdGFXNW1ieUI3WEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrT2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0YkdsbmFIUXBPMXh1SUNBZ0lDQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ09IQjRPMXh1SUNBZ0lDQWdjR0ZrWkdsdVp6b2dNVFp3ZUR0Y2JpQWdJQ0FnSUcxaGNtZHBiaTEwYjNBNklERTJjSGc3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMbWx1Wm04dGFYUmxiU0I3WEc0Z0lDQWdJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHVJQ0FnSUNBZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCemNHRmpaUzFpWlhSM1pXVnVPMXh1SUNBZ0lDQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanRjYmlBZ0lDQWdJRzFoY21kcGJpMWliM1IwYjIwNklEaHdlRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXVhVzVtYnkxcGRHVnRPbXhoYzNRdFkyaHBiR1FnZTF4dUlDQWdJQ0FnYldGeVoybHVMV0p2ZEhSdmJUb2dNRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXViR0ZpWld3Z2UxeHVJQ0FnSUNBZ1ptOXVkQzEzWldsbmFIUTZJRFV3TUR0Y2JpQWdJQ0FnSUdOdmJHOXlPaUIyWVhJb0xTMXBiMjR0WTI5c2IzSXRaR0Z5YXlrN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERTBjSGc3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMblpoYkhWbElIdGNiaUFnSUNBZ0lHTnZiRzl5T2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0YldWa2FYVnRLVHRjYmlBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEdGNiaUFnSUNBZ0lIUmxlSFF0WVd4cFoyNDZJSEpwWjJoME8xeHVJQ0FnSUNBZ2QyOXlaQzFpY21WaGF6b2dZbkpsWVdzdFlXeHNPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDNXpZWFpsTFdKMWRIUnZiaUI3WEc0Z0lDQWdJQ0F0TFdKdmNtUmxjaTF5WVdScGRYTTZJRGh3ZUR0Y2JpQWdJQ0FnSUcxaGNtZHBiam9nTUNBeE5uQjRJREUyY0hnZ01UWndlRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBiMjR0YUdWaFpHVnlJR2x2YmkxMGIyOXNZbUZ5SUh0Y2JpQWdJQ0FnSUMwdFltRmphMmR5YjNWdVpEb2dkbUZ5S0MwdGFXOXVMV052Ykc5eUxXeHBaMmgwS1R0Y2JpQWdJQ0FnSUMwdFltOXlaR1Z5TFdOdmJHOXlPaUIyWVhJb0xTMXBiMjR0WTI5c2IzSXRiR2xuYUhRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsdmJpMW1iMjkwWlhJZ2FXOXVMWFJ2YjJ4aVlYSWdlMXh1SUNBZ0lDQWdMUzFpWVdOclozSnZkVzVrT2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0YkdsbmFIUXBPMXh1SUNBZ0lDQWdMUzFpYjNKa1pYSXRZMjlzYjNJNklIWmhjaWd0TFdsdmJpMWpiMnh2Y2kxc2FXZG9kQ2s3WEc0Z0lDQWdmVnh1SUNBaVhYMD0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9lZGl0LW5hbWUtbW9kYWwuY29tcG9uZW50LnRzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7SUFDSTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsc0JBQXNCO01BQ3RCLG9CQUFvQjtNQUNwQixtQkFBbUI7TUFDbkIsdUNBQXVDO01BQ3ZDLG9DQUFvQztNQUNwQyxlQUFlO0lBQ2pCOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxZQUFZO01BQ1osZUFBZTtNQUNmLDhCQUE4QjtNQUM5QixrQ0FBa0M7TUFDbEMsZ0JBQWdCO01BQ2hCLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLCtCQUErQjtJQUNqQzs7SUFFQTtNQUNFLGtDQUFrQztNQUNsQyxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQiw0QkFBNEI7TUFDNUIsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLDhCQUE4QjtNQUM5QixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLG9CQUFvQjtNQUNwQix3QkFBd0I7SUFDMUI7O0lBRUE7TUFDRSxvQ0FBb0M7TUFDcEMsc0NBQXNDO0lBQ3hDOztJQUVBO01BQ0Usb0NBQW9DO01BQ3BDLHNDQUFzQztJQUN4Qzs7QUFFSix3NUdBQXc1R1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4gICAgLmVkaXQtbmFtZS1jb250YWluZXIge1xcbiAgICAgIHBhZGRpbmc6IDE2cHggMDtcXG4gICAgfVxcblxcbiAgICAuaW5wdXQtZ3JvdXAge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICB9XFxuXFxuICAgIC5uYW1lLWlucHV0IHtcXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XFxuICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcXG4gICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XFxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XFxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgfVxcblxcbiAgICAuY2hhci1jb3VudCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAxNnB4O1xcbiAgICAgIGJvdHRvbTogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XFxuICAgICAgcGFkZGluZzogMnB4IDZweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG5cXG4gICAgLmNoYXItY291bnQud2FybmluZyB7XFxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcXG4gICAgfVxcblxcbiAgICAuZGV2aWNlLWluZm8ge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgfVxcblxcbiAgICAuaW5mby1pdGVtIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgfVxcblxcbiAgICAuaW5mby1pdGVtOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLmxhYmVsIHtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuXFxuICAgIC52YWx1ZSB7XFxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIH1cXG5cXG4gICAgLnNhdmUtYnV0dG9uIHtcXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBtYXJnaW46IDAgMTZweCAxNnB4IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XFxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xcbiAgICB9XFxuXFxuICAgIGlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcXG4gICAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fLnRvU3RyaW5nKCk7XG4iXSwibmFtZXMiOlsiTmdNb2R1bGUiLCJQcmVsb2FkQWxsTW9kdWxlcyIsIlJvdXRlck1vZHVsZSIsInJvdXRlcyIsInBhdGgiLCJsb2FkQ2hpbGRyZW4iLCJ0aGVuIiwibSIsIkhvbWVQYWdlTW9kdWxlIiwicmVkaXJlY3RUbyIsInBhdGhNYXRjaCIsIkFwcFJvdXRpbmdNb2R1bGUiLCJfX2RlY29yYXRlIiwiaW1wb3J0cyIsImZvclJvb3QiLCJwcmVsb2FkaW5nU3RyYXRlZ3kiLCJleHBvcnRzIiwiQ29tcG9uZW50IiwiUGxhdGZvcm0iLCJTcGxhc2hTY3JlZW4iLCJTdGF0dXNCYXIiLCJBcHBDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInBsYXRmb3JtIiwiaW5pdGlhbGl6ZUFwcCIsInJlYWR5IiwidmFsIiwiaGlkZSIsImNsaWNreUNsYXNzZXMiLCJ3aW5kb3ciLCJuYXRpdmVjbGljayIsIndhdGNoIiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsIl9fTkdfQ0xJX1JFU09VUkNFX18wIiwiRm9ybXNNb2R1bGUiLCJCcm93c2VyTW9kdWxlIiwiUm91dGVSZXVzZVN0cmF0ZWd5IiwiQW5kcm9pZFBlcm1pc3Npb25zIiwiSW9uaWNNb2R1bGUiLCJJb25pY1JvdXRlU3RyYXRlZ3kiLCJFZGl0TmFtZU1vZGFsQ29tcG9uZW50IiwiQkxFIiwiQmxlU2VydmljZSIsIkRldmljZXNTZXJ2aWNlIiwiTG9ja0RhdGFTZXJ2aWNlIiwiQXBwTW9kdWxlIiwiZGVjbGFyYXRpb25zIiwicHJvdmlkZXJzIiwicHJvdmlkZSIsInVzZUNsYXNzIiwiYm9vdHN0cmFwIiwiRXZlbnRFbWl0dGVyIiwiSW5wdXQiLCJPdXRwdXQiLCJNb2RhbENvbnRyb2xsZXIiLCJtb2RhbEN0cmwiLCJpbml0aWFsTmFtZSIsInNob3dEZXZpY2VJbmZvIiwic2F2ZU5hbWUiLCJkZXZpY2VOYW1lIiwibmdPbkluaXQiLCJvbklucHV0Q2hhbmdlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwic2F2ZSIsInRyaW1tZWROYW1lIiwidHJpbSIsImVtaXQiLCJkaXNtaXNzIiwiY2FuY2VsIiwiSW5qZWN0YWJsZSIsIkRldmljZSIsIlN5c3RlbSIsIlN1YmplY3QiLCJEeW5hbWljUXVldWUiLCJDTUQiLCJBU0siLCJFWFQiLCJTVU0iLCJEQVRBIiwiUkFORERBVEEiLCJDTURfU3lzdGVtRXhpdCIsIkNNRF9TeXN0ZW1Jbml0IiwiQVNLX2NvcnJlY3QiLCJBU0tfZmFpbHVyZSIsIkFTS190aW1lb3V0IiwiQVNLX3Vua25vd24iLCJBU0tfY2hlY2tzdW0iLCJBU0tfcGFzc3dvcmRfbm90X3ZlcmlmaWVkIiwiQVNLX2ZhaWxlZF92ZXJpZmljYXRpb24iLCJSZXNwb25zZU1hcCIsIkVycm9yQ2F0ZWdvcmllcyIsIlJldHJ5U3RyYXRlZ2llcyIsIm1heFJldHJpZXMiLCJkZWxheSIsIklzTG9ja2VkIiwiSXNVbmhvb2tlZCIsIklzSG9va2VkIiwiSW5hY3RpdmVEaXNjb25uZWN0VGltZSIsIkFuZHJvaWQxMSIsImFuZHJvaWRQZXJtaXNzaW9ucyIsImJsZSIsImRldmljZUlkIiwiY29ubmVjdFN1YnNjcmliZXIiLCJub3RpZmljYXRpb25TdWJzY3JpYmVyIiwiY29ubmVjdFJlcGVhdGVyIiwib3BRdWV1ZSIsIm5vdGlmaWNhdGlvbkhhbmRsZXIiLCJtZXNzYWdlSGFuZGxlciIsImFsZXJ0SGFuZGxlciIsIndyaXRlTG9ja0J1c3kiLCJMb25nU2VydmljZVV1aWQiLCJMb25nU3RhdHVzVXVpZCIsIkxvbmdDb21tYW5kVXVpZCIsIkxvbmdDb25maWdVdWlkIiwia2VlcEFsaXZlSW50ZXJ2YWwiLCJsYXN0Q29ubmVjdGVkRGV2aWNlIiwicmVjb25uZWN0QXR0ZW1wdHMiLCJtYXhSZWNvbm5lY3RBdHRlbXB0cyIsIlBFUk1JU1NJT04iLCJCTFVFVE9PVEhfQ09OTkVDVCIsIkJMVUVUT09USF9TQ0FOIiwic2V0dXAiLCJfbWVzc2FnZUhhbmRsZXIiLCJfYWxlcnRIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsIm9zRGF0YVJlcXVlc3QiLCJnZXRJbmZvIiwic3RhbmRpbiIsImlzRW5hYmxlZCIsImEiLCJiIiwiUHJvbWlzZSIsInJlamVjdCIsImVuYWJsZSIsInN0YXJ0U2NhbiIsInN0b3BTY2FuIiwiYWxlcnQiLCJxIiwiaW9zRW5hYmxlIiwiYmluZCIsImlzQXZhaWxhYmxlIiwiX3RoaXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsImRldmljZUluZm8iLCJvcGVyYXRpbmdTeXN0ZW0iLCJvc1ZlcnNpb24iLCJibGVFcnJvciIsImVuYWJsZUVycm9yIiwiYmx1ZXRvb3RoUGVybWlzc2lvbiIsImNoZWNrUGVybWlzc2lvbiIsIkJMVUVUT09USCIsImxvY2F0aW9uUGVybWlzc2lvbiIsIkFDQ0VTU19GSU5FX0xPQ0FUSU9OIiwiaGFzUGVybWlzc2lvbiIsImJsdWV0b290aFJlc3VsdCIsInJlcXVlc3RQZXJtaXNzaW9uIiwibG9jYXRpb25SZXN1bHQiLCJzY2FuUGVybWlzc2lvbiIsImNvbm5lY3RQZXJtaXNzaW9uIiwic2NhblJlc3VsdCIsImNvbm5lY3RSZXN1bHQiLCJlcnJvciIsInRoYXQiLCJub3RpZmllciIsInN0YXJ0U3RhdGVOb3RpZmljYXRpb25zIiwicmVzb2x2ZSIsInN0YXRlV2F0Y2hlciIsInRpbWVyIiwic2V0VGltZW91dCIsInN1YnNjcmliZSIsInN0YXRlIiwiaGFuZGxlZCIsImNsZWFyVGltZW91dCIsInVuc3Vic2NyaWJlIiwic3RvcFN0YXRlTm90aWZpY2F0aW9ucyIsImNhdGNoIiwicmVhc29uIiwic2VydmljZXMiLCJjb25uZWN0VG8iLCJzY2FuRGF0YSIsImlkIiwic2VsZWN0VXVpZHMiLCJvYnMiLCJjb25uZWN0IiwiX3JlZiIsInBlcmlwaGVyYWxEYXRhIiwibmFtZSIsIm5leHQiLCJmbHVzaCIsInN0YXJ0Tm90aWZpY2F0aW9uIiwiU2VydmljZVV1aWQiLCJTdGF0dXNVdWlkIiwidmFsdWUiLCJub3RpZmljYXRpb25FcnJvciIsImFkZCIsInN0YXJ0S2VlcEFsaXZlIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIl9yZWYyIiwicmVzdWx0IiwiY29ubmVjdEZhaWxlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXJnZUNvbm5lY3Rpb24iLCJzdG9wS2VlcEFsaXZlIiwidHJ5UmVjb25uZWN0IiwiX3gyIiwicmVhZGFibGVIZXhUb0J1ZmZlciIsInNwYWNlU2VwYXJhdGVkSGV4IiwibiIsInNwbGl0IiwiZm9yRWFjaCIsIngiLCJwdXNoIiwicGFyc2VJbnQiLCJVaW50OEFycmF5IiwiZnJvbSIsImJ1ZmZlclRvUmVhZGFibGVIZXgiLCJidWZmZXIiLCJBcnJheSIsIm1hcCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJqb2luIiwiaXNMb2NrQnVzeSIsIndyaXRlVG9Mb2NrIiwiY29tbWFuZE5hbWUiLCJjb21tYW5kIiwiX3RoaXMyIiwicGVuZGluZ1Jlc29sdmUiLCJwZW5kaW5nUmVqZWN0Iiwibm90aWZpY2F0aW9uSW5qZWN0b3IiLCJ0aW1lb3V0SWQiLCJyZWR1Y2UiLCJwcmV2aW91cyIsImN1cnJlbnQiLCJfcmVmMyIsInJlc3BvbnNlSGFuZGxlciIsImVycm9ySGFuZGxlciIsIndyaXRlIiwiQ29tbWFuZFV1aWQiLCJmYWtlQWxhcm1SZXNwb25zZSIsIl94MyIsIl94NCIsImRhdGEiLCJyZXNwb25zZSIsIm91dHB1dCIsImJ5dGVzIiwiUyIsImV4dHJhQnl0ZXMiLCJpc1N0YXR1cyIsImlzRXJyb3IiLCJ2ZXJpZmllZCIsImFsYXJtT24iLCJidXp6ZXJPbiIsInJlc3BvbnNlTXNnIiwib3BlbkNsb3NlU3RhdGUiLCJob29rU3RhdGUiLCJ2b2x0YWdlVmFsdWUiLCJsb2NrSWQiLCJyYW5kRGF0YSIsIm1zZyIsInJlYWRMb2NrU3RhdHVzIiwiZW5xdWV1ZSIsImhhbmRsZVZlcmlmaWNhdGlvbiIsImxvY2tQYWlyIiwicmVhZGFibGUiLCJ6aSIsInBpbiIsImNoYXJDb2RlQXQiLCJnZXRBbGFybVN0YXRlIiwic2V0QWxhcm1TdGF0ZSIsImVuYWJsZWQiLCJfdGhpczMiLCJ3YWl0Rm9yTWlsbGlzZWNvbmRzIiwidHJpZ2dlckxvY2siLCJ0b2dnbGUiLCJlbmNyeXB0Qnl0ZSIsInNldERhdGVUaW1lIiwibm93IiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJwdXRMb2NrVG9TbGVlcCIsImluaXRpYWxpemVMb2NrIiwiZGlzY29ubmVjdCIsImlzQ29ubmVjdGVkIiwicmVhZFJTU0kiLCJ0YXJnZXQiLCJzaG9ydGVuIiwidXVpZCIsImV4dHJhY3QiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInVuZGVmaW5lZCIsImlzU2hvcnQiLCJoYXNMb25nVXVpZHMiLCJDb25maWdVdWlkIiwiZm9yY2VEaXNjb25uZWN0IiwiZGV2aWNlIiwiX3RoaXM0Iiwic2VuZFNsZWVwQ29tbWFuZFRvTG9jayIsImUiLCJkaXNjb25uZWN0UHJvbWlzZSIsInRpbWVvdXRQcm9taXNlIiwiXyIsIkVycm9yIiwicmFjZSIsImVyciIsIm1zIiwibmdPbkRlc3Ryb3kiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiX3RoaXM1IiwiYXV0b1JlY29ubmVjdE9uU3RhcnQiLCJfdGhpczYiLCJsYXN0IiwiZ2V0SXRlbSIsInBhcnNlIiwiaGFzUmVxdWlyZWRTZXJ2aWNlIiwiX3RoaXM3IiwiaW5jbHVkZXMiLCJzb2Z0UmVzZXRCbHVldG9vdGgiLCJfdGhpczgiLCJyZXMiLCJfdGhpczkiLCJwcm92aWRlZEluIiwiVW5rbm93bkRldmljZU5hbWUiLCJkZXZpY2VzIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwiYmxvY2tpbmciLCJoZXhCeXRlIiwiYWR2ZXJ0aXNlbWVudERlY29kZXIiLCJhZHZTdHJpbmdzIiwiaW5kZXgiLCJzIiwiY291bnQiLCJhZExlbmd0aCIsImFkVHlwZSIsImFkRGF0YSIsInAxIiwicDIiLCJ1bnNoaWZ0IiwiYWRWaWV3IiwiRGF0YVZpZXciLCJkZWNvZGUiLCJhZGREZXZpY2UiLCJhZHZlcnRzIiwiYWR2ZXJ0aXNpbmciLCJjdXN0b21OYW1lIiwiZ2V0Q3VzdG9tTmFtZSIsImZpbmQiLCJpdGVtIiwiZ2V0RGV2aWNlcyIsImdldERldmljZSIsImZpbmRJbmRleCIsInJlc2V0Iiwic2V0Q3VzdG9tTmFtZSIsImQiLCJleHRyYWN0U2VyaWFsTnVtYmVyIiwic3RhcnRzV2l0aCIsImdldERpc3BsYXlOYW1lIiwiZGlzcGxheU5hbWUiLCJzZXJpYWwiLCJEZXZpY2VzU2VydmljZV8xIiwiZ2V0VGV4dFNpemVDbGFzcyIsIlByZWZlcmVuY2VzIiwiTG9ja0RhdGFFcnJvcnMiLCJTVUNDRVNTIiwiTkFUSVZFX1dSSVRFX0ZBSUxFRCIsIklURU1fTk9UX0ZPVU5EIiwiTlVMTF9SRUZFUkVOQ0UiLCJVTkRFRklORURfVFlQRSIsIkpTT05fRVJST1IiLCJXUk9OR19QQVJBTUVURVIiLCJEVVBMSUNBVEVfS0VZIiwiQkFEX05BTUUiLCJsb2NrcyIsIl9zdGF0dXNNZXNzYWdlSGFuZGxlciIsInN0YXR1c01lc3NhZ2VIYW5kbGVyIiwibWFrZUxvY2siLCJzZXJpYWxOdW1iZXIiLCJjbGVhciIsImdldEF1dGhvcml6YXRpb24iLCJleGNlcHRpb24iLCJjb2RlIiwiZ2V0Iiwia2V5IiwidiIsImFkZEF1dGhvcml6YXRpb24iLCJsb2NrIiwic2V0IiwiZ2V0VmFsdWUiLCJnZXRKc29uVmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwic2V0VmFsdWUiLCJzZXRKc29uVmFsdWUiLCJvYmplY3QiLCJyZW1vdmVBdXRob3JpemF0aW9uIiwicmVtb3ZlIiwicXVldWUiLCJwZW5kaW5nUHJvbWlzZSIsIndvcmtpbmdPblByb21pc2UiLCJvcGVyYXRpb24iLCJkZXF1ZXVlIiwic2hpZnQiLCJlbnZpcm9ubWVudCIsInByb2R1Y3Rpb24iLCJlbmFibGVQcm9kTW9kZSIsInBsYXRmb3JtQnJvd3NlckR5bmFtaWMiLCJib290c3RyYXBNb2R1bGUiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzEwLDExXX0=