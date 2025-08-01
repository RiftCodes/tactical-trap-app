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
      let available = false;
      _this.messageHandler('checking availability');
      try {
        const deviceInfo = yield _this.osDataRequest;
        _this.platform = deviceInfo.operatingSystem;
        _this.osVersion = deviceInfo.osVersion;
        yield _this.ble.isEnabled();
        _this.messageHandler('ble: is enabled');
        available = true;
      } catch (e) {
        try {
          yield _this.ble.enable();
          _this.messageHandler('ble: successfully enabled');
          available = true;
        } catch (err) {
          _this.messageHandler('ble: Bluetooth enable not successful: ' + err);
        }
      }
      if (_this.platform == 'android' && _this.osVersion <= Android11) {
        let result, bluetooth, location;
        if (available) {
          _this.messageHandler('ble: check permissions');
          try {
            result = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH);
            bluetooth = result.hasPermission;
            result = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
            location = result.hasPermission;
            if (!bluetooth || !location) {
              yield _this.alertHandler('Bluetooth and Location permissions are required to scan for locks. Please allow these permissions in your device settings.');
            }
          } catch (err) {
            alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
            available = false;
          }
        }
        if (available && !bluetooth) {
          _this.messageHandler('ble: request Bluetooth permission');
          try {
            result = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH);
            _this.messageHandler('ble: request permission done');
            available = result.hasPermission;
          } catch (err) {
            alert(err);
            available = false;
          }
        }
        if (available && !location) {
          _this.messageHandler('ble: request location permission');
          try {
            result = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
            _this.messageHandler('ble: request permission done');
            available = result.hasPermission;
          } catch (err) {
            alert(err);
            available = false;
          }
        }
        _this.messageHandler(`ble: after requests, bluetooth allowed = ${bluetooth}, location allowed = ${location}`);
      }
      if (_this.platform == 'android' && _this.osVersion > Android11) {
        let result, scan, connect;
        if (available) {
          _this.messageHandler('ble: check permissions');
          try {
            result = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_SCAN);
            scan = result.hasPermission;
            result = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT);
            connect = result.hasPermission;
            _this.messageHandler(`ble: checking permission, scan allowed = ${scan}, connect allowed = ${connect}`);
            if (!scan || !connect) {
              yield _this.alertHandler('Bluetooth permissions are required to scan for locks. Please allow these permissions in your device settings.');
            }
          } catch (err) {
            alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
            available = false;
          }
        }
        if (available && !scan) {
          _this.messageHandler('bluetooth: check scan permission');
          try {
            result = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_SCAN);
            scan = result.hasPermission;
            available = result.hasPermission;
          } catch (err) {
            alert(err);
            available = false;
          }
        }
        if (available && !connect) {
          _this.messageHandler('bluetooth: check connect permission');
          try {
            result = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT);
            connect = result.hasPermission;
            available = result.hasPermission;
          } catch (err) {
            alert(err);
            available = false;
          }
        }
        _this.messageHandler(`ble: after requests, scan allowed = ${scan}, connect allowed = ${connect}`);
      }
      return available;
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
        // Add timeout for operations
        timeoutId = setTimeout(() => {
          _this2.writeLockBusy = false;
          _this2.notificationHandler = null;
          reject('Operation timeout - no response received');
        }, 10000); // 10 second timeout
        try {
          _this2.messageHandler(`writeToLock "${commandName}" : ${_this2.bufferToReadableHex(command)}`);
          _this2.notificationHandler = responseHandler.bind(_this2);
          _this2.notificationError = errorHandler.bind(_this2);
          yield _this2.ble.write(_this2.deviceId, _this2.ServiceUuid, _this2.CommandUuid, command.buffer);
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
          alert('Failed to write data to device:' + JSON.stringify(error));
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
        alert(msg);
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
      if (_this4.platform == 'android') {
        _this4.messageHandler(`** Attempting Disconnect **`);
        _this4.ble.disconnect(device.id).catch(err => {
          _this4.messageHandler('-- disconnected failed\n');
        });
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
          _this8.messageHandler('softResetBluetooth: Disabling Bluetooth...');
          yield _this8.ble.disable();
          _this8.messageHandler('softResetBluetooth: Bluetooth disabled. Waiting 1s...');
          yield new Promise(res => setTimeout(res, 1000));
          _this8.messageHandler('softResetBluetooth: Enabling Bluetooth...');
          yield _this8.ble.enable();
          _this8.messageHandler('softResetBluetooth: Bluetooth enabled.');
        } catch (e) {
          _this8.messageHandler('softResetBluetooth: Failed to reset Bluetooth: ' + e);
        }
      } else {
        _this8.messageHandler('softResetBluetooth: Not supported on this platform.');
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
    if (device.customName && device.customName.trim()) {
      displayName = device.customName;
    } else if (device.name && device.name !== 'Unknown Device') {
      displayName = device.name;
    } else {
      const serial = DevicesService_1.extractSerialNumber(device);
      if (serial) {
        displayName = serial;
      } else {
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
    if (device.customName && device.customName.trim()) {
      displayName = device.customName;
    } else if (device.name && device.name !== 'Unknown Device') {
      displayName = device.name;
    } else {
      const serial = DevicesService_1.extractSerialNumber(device);
      if (serial) {
        displayName = serial;
      } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7O0FDWGpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QStDLE9BQU8sdUJBQXVCO0FBQzM3TDtBQUNBIiwic291cmNlcyI6WyIuL3NyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9ob21lL2VkaXQtbmFtZS1tb2RhbC5jb21wb25lbnQudHMiLCIuL3NyYy9hcHAvc2VydmljZXMvYmxlLnNlcnZpY2UudHMiLCIuL3NyYy9hcHAvc2VydmljZXMvZGV2aWNlcy5zZXJ2aWNlLnRzIiwiLi9zcmMvYXBwL3NlcnZpY2VzL2xvY2stZGF0YS5zZXJ2aWNlLnRzIiwiLi9zcmMvYXBwL3V0aWwvZHluYW1pYy1xdWV1ZS50cyIsIi4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi4vc3JjL21haW4udHMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0IiwiLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcy4qJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBzdHJpY3QgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvZWRpdC1uYW1lLW1vZGFsLmNvbXBvbmVudC50cz83NmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZWxvYWRBbGxNb2R1bGVzLCBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnaG9tZScsXHJcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9ob21lL2hvbWUubW9kdWxlJykudGhlbiggbSA9PiBtLkhvbWVQYWdlTW9kdWxlKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICByZWRpcmVjdFRvOiAnaG9tZScsXHJcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyBwcmVsb2FkaW5nU3RyYXRlZ3k6IFByZWxvYWRBbGxNb2R1bGVzIH0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGNhcGFjaXRvci9zcGxhc2gtc2NyZWVuJztcclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGNhcGFjaXRvci9zdGF0dXMtYmFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVBcHAoKSB7XHJcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgIFN0YXR1c0Jhci5oaWRlKCk7XHJcbiAgICAgIFNwbGFzaFNjcmVlbi5oaWRlKCk7XHJcbiAgICAgIGxldCBjbGlja3lDbGFzc2VzID0gWydjbGljay1zb3VuZHMnXTtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB3aW5kb3cubmF0aXZlY2xpY2sud2F0Y2goY2xpY2t5Q2xhc3Nlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFuZHJvaWRQZXJtaXNzaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSwgSW9uaWNSb3V0ZVN0cmF0ZWd5IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0TmFtZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2VkaXQtbmFtZS1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQkxFIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ibGUvbmd4JztcclxuaW1wb3J0IHsgQmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZXZpY2VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGV2aWNlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9ja0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NrLWRhdGEuc2VydmljZSc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdE5hbWVNb2RhbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIElvbmljTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQkxFLFxyXG4gICAgICAgIEJsZVNlcnZpY2UsXHJcbiAgICAgICAgRGV2aWNlc1NlcnZpY2UsXHJcbiAgICAgICAgTG9ja0RhdGFTZXJ2aWNlLFxyXG4gICAgICAgIEFuZHJvaWRQZXJtaXNzaW9ucyxcclxuICAgICAgICB7IHByb3ZpZGU6IFJvdXRlUmV1c2VTdHJhdGVneSwgdXNlQ2xhc3M6IElvbmljUm91dGVTdHJhdGVneSB9XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWVkaXQtbmFtZS1tb2RhbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpb24taGVhZGVyIGNsYXNzPVwiaW9uLW5vLWJvcmRlclwiPlxyXG4gICAgICA8aW9uLXRvb2xiYXI+XHJcbiAgICAgICAgPGlvbi10aXRsZT5FZGl0IExvY2sgTmFtZTwvaW9uLXRpdGxlPlxyXG4gICAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwiZW5kXCI+XHJcbiAgICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2FuY2VsKClcIj5DYW5jZWw8L2lvbi1idXR0b24+XHJcbiAgICAgICAgPC9pb24tYnV0dG9ucz5cclxuICAgICAgPC9pb24tdG9vbGJhcj5cclxuICAgIDwvaW9uLWhlYWRlcj5cclxuXHJcbiAgICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1uYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cInN0YWNrZWRcIj5EZXZpY2UgTmFtZTwvaW9uLWxhYmVsPlxyXG4gICAgICAgICAgPGlvbi1pbnB1dFxyXG4gICAgICAgICAgICAjbmFtZUlucHV0XHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGV2aWNlTmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY3VzdG9tIG5hbWVcIlxyXG4gICAgICAgICAgICBtYXhsZW5ndGg9XCIxNVwiXHJcbiAgICAgICAgICAgIChpb25JbnB1dCk9XCJvbklucHV0Q2hhbmdlKClcIlxyXG4gICAgICAgICAgICBjbGFzcz1cIm5hbWUtaW5wdXRcIj5cclxuICAgICAgICAgIDwvaW9uLWlucHV0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXItY291bnRcIiBbY2xhc3Mud2FybmluZ109XCJkZXZpY2VOYW1lLmxlbmd0aCA+PSAxNFwiPlxyXG4gICAgICAgICAgICB7eyBkZXZpY2VOYW1lLmxlbmd0aCB9fS8xNVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtaW5mb1wiICpuZ0lmPVwic2hvd0RldmljZUluZm9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlNlcmlhbCBOdW1iZXI6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3sgc2VyaWFsTnVtYmVyIHx8ICdOL0EnIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5EZXZpY2UgSUQ6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3sgZGV2aWNlSWQgfHwgJ04vQScgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2lvbi1jb250ZW50PlxyXG5cclxuICAgIDxpb24tZm9vdGVyIGNsYXNzPVwiaW9uLW5vLWJvcmRlclwiPlxyXG4gICAgICA8aW9uLXRvb2xiYXI+XHJcbiAgICAgICAgPGlvbi1idXR0b24gXHJcbiAgICAgICAgICBleHBhbmQ9XCJibG9ja1wiIFxyXG4gICAgICAgICAgKGNsaWNrKT1cInNhdmUoKVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGV2aWNlTmFtZS50cmltKCkubGVuZ3RoID09PSAwXCJcclxuICAgICAgICAgIGNsYXNzPVwic2F2ZS1idXR0b25cIj5cclxuICAgICAgICAgIFNhdmVcclxuICAgICAgICA8L2lvbi1idXR0b24+XHJcbiAgICAgIDwvaW9uLXRvb2xiYXI+XHJcbiAgICA8L2lvbi1mb290ZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAuZWRpdC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUtaW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFyLWNvdW50IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTZweDtcclxuICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFyLWNvdW50Lndhcm5pbmcge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXZpY2UtaW5mbyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZhbHVlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhdmUtYnV0dG9uIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdE5hbWVNb2RhbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaW5pdGlhbE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNlcmlhbE51bWJlcj86IHN0cmluZztcclxuICBASW5wdXQoKSBkZXZpY2VJZD86IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93RGV2aWNlSW5mbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIEBPdXRwdXQoKSBzYXZlTmFtZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBkZXZpY2VOYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRldmljZU5hbWUgPSB0aGlzLmluaXRpYWxOYW1lO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZSgpIHtcclxuICAgIC8vIEVuc3VyZSB3ZSBkb24ndCBleGNlZWQgMTUgY2hhcmFjdGVyc1xyXG4gICAgaWYgKHRoaXMuZGV2aWNlTmFtZS5sZW5ndGggPiAxNSkge1xyXG4gICAgICB0aGlzLmRldmljZU5hbWUgPSB0aGlzLmRldmljZU5hbWUuc3Vic3RyaW5nKDAsIDE1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBjb25zdCB0cmltbWVkTmFtZSA9IHRoaXMuZGV2aWNlTmFtZS50cmltKCk7XHJcbiAgICBpZiAodHJpbW1lZE5hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNhdmVOYW1lLmVtaXQodHJpbW1lZE5hbWUpO1xyXG4gICAgICB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHRyaW1tZWROYW1lLCAnc2F2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCAnY2FuY2VsJyk7XHJcbiAgfVxyXG59ICIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRGV2aWNlSW5mbyxcbiAgT3BlcmF0aW5nU3lzdGVtLFxuICBEZXZpY2UgYXMgU3lzdGVtLFxufSBmcm9tICdAY2FwYWNpdG9yL2RldmljZSc7XG5pbXBvcnQgeyBBbmRyb2lkUGVybWlzc2lvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FuZHJvaWQtcGVybWlzc2lvbnMvbmd4JztcbmltcG9ydCB7IEJMRSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxlL25neCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IER5bmFtaWNRdWV1ZSB9IGZyb20gJy4uL3V0aWwvZHluYW1pYy1xdWV1ZSc7XG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICcuL2RldmljZXMuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NrUGFyYW1ldGVycyB9IGZyb20gJy4vbG9jay1kYXRhLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2tTdGF0dXMge1xuICByZXNwb25zZTogbnVtYmVyO1xuICByZXNwb25zZU1zZz86IHN0cmluZztcbiAgZXh0cmFCeXRlczogbnVtYmVyO1xuICBpc1N0YXR1czogYm9vbGVhbjtcbiAgaXNFcnJvcj86IGJvb2xlYW47XG4gIHZlcmlmaWVkOiBhbnk7XG4gIGFsYXJtT246IGFueTtcbiAgYnV6emVyT246IGFueTtcbiAgb3BlbkNsb3NlU3RhdGU/OiBudW1iZXI7XG4gIGhvb2tTdGF0ZT86IG51bWJlcjtcbiAgdm9sdGFnZVZhbHVlPzogbnVtYmVyO1xuICBsb2NrSWQ/OiBudW1iZXI7XG4gIHJhbmREYXRhPzogbnVtYmVyO1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWZXJpZnlPdXRjb21lIHtcbiAgdmVyaWZpZWQ6IGJvb2xlYW47XG4gIGlzRXJyb3I6IGJvb2xlYW47XG4gIG1zZzogc3RyaW5nO1xufVxuXG5jb25zdCBDTUQgPSAxO1xuY29uc3QgQVNLID0gMjtcbmNvbnN0IEVYVCA9IDM7XG5jb25zdCBTVU0gPSA1O1xuY29uc3QgREFUQSA9IDY7XG5jb25zdCBSQU5EREFUQSA9IDE0O1xuY29uc3QgQ01EX1N5c3RlbUV4aXQgPSAnc2xlZXAnO1xuY29uc3QgQ01EX1N5c3RlbUluaXQgPSAnaW5pdGlhbGl6ZSc7XG5leHBvcnQgY29uc3QgQVNLX2NvcnJlY3QgPSAweDEwO1xuZXhwb3J0IGNvbnN0IEFTS19mYWlsdXJlID0gMHgxMTtcbmV4cG9ydCBjb25zdCBBU0tfdGltZW91dCA9IDB4MTI7XG5leHBvcnQgY29uc3QgQVNLX3Vua25vd24gPSAweDEzO1xuZXhwb3J0IGNvbnN0IEFTS19jaGVja3N1bSA9IDB4MTY7XG5leHBvcnQgY29uc3QgQVNLX3Bhc3N3b3JkX25vdF92ZXJpZmllZCA9IDB4MjY7XG5leHBvcnQgY29uc3QgQVNLX2ZhaWxlZF92ZXJpZmljYXRpb24gPSAweDI3O1xuZXhwb3J0IGNvbnN0IFJlc3BvbnNlTWFwID0ge1xuICBbQVNLX2NvcnJlY3RdOiAnT3BlcmF0aW9uIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknLFxuICBbQVNLX2ZhaWx1cmVdOiAnT3BlcmF0aW9uIGZhaWxlZCAtIHBsZWFzZSB0cnkgYWdhaW4nLFxuICBbQVNLX3RpbWVvdXRdOiAnT3BlcmF0aW9uIHRpbWVkIG91dCAtIGNoZWNrIGNvbm5lY3Rpb24nLFxuICBbQVNLX3Vua25vd25dOiAnVW5rbm93biBjb21tYW5kIC0gcGxlYXNlIHJlY29ubmVjdCcsXG4gIFtBU0tfY2hlY2tzdW1dOiAnQ29tbXVuaWNhdGlvbiBlcnJvciAtIHBsZWFzZSB0cnkgYWdhaW4nLFxuICBbQVNLX3Bhc3N3b3JkX25vdF92ZXJpZmllZF06ICdMb2NrIG5vdCBwcm9wZXJseSBwYWlyZWQgLSBlbnRlciBQSU4gYWdhaW4nLFxuICBbQVNLX2ZhaWxlZF92ZXJpZmljYXRpb25dOiAnUElOIHZlcmlmaWNhdGlvbiBmYWlsZWQgLSBjaGVjayB5b3VyIFBJTicsXG59O1xuXG4vLyBBZGQgZXJyb3IgY2F0ZWdvcmllcyBmb3IgYmV0dGVyIGhhbmRsaW5nXG5leHBvcnQgY29uc3QgRXJyb3JDYXRlZ29yaWVzID0ge1xuICBbQVNLX2ZhaWx1cmVdOiAncmV0cnknLFxuICBbQVNLX3RpbWVvdXRdOiAnY29ubmVjdGlvbicsXG4gIFtBU0tfdW5rbm93bl06ICdyZWNvbm5lY3QnLFxuICBbQVNLX2NoZWNrc3VtXTogJ3JldHJ5JyxcbiAgW0FTS19wYXNzd29yZF9ub3RfdmVyaWZpZWRdOiAncGFpcmluZycsXG4gIFtBU0tfZmFpbGVkX3ZlcmlmaWNhdGlvbl06ICdwaW4nLFxufTtcblxuLy8gQWRkIHJldHJ5IHN0cmF0ZWdpZXNcbmV4cG9ydCBjb25zdCBSZXRyeVN0cmF0ZWdpZXMgPSB7XG4gIFtBU0tfZmFpbHVyZV06IHsgbWF4UmV0cmllczogMywgZGVsYXk6IDEwMDAgfSxcbiAgW0FTS190aW1lb3V0XTogeyBtYXhSZXRyaWVzOiAyLCBkZWxheTogMjAwMCB9LFxuICBbQVNLX3Vua25vd25dOiB7IG1heFJldHJpZXM6IDEsIGRlbGF5OiAwIH0sXG4gIFtBU0tfY2hlY2tzdW1dOiB7IG1heFJldHJpZXM6IDMsIGRlbGF5OiA1MDAgfSxcbiAgW0FTS19wYXNzd29yZF9ub3RfdmVyaWZpZWRdOiB7IG1heFJldHJpZXM6IDAsIGRlbGF5OiAwIH0sXG4gIFtBU0tfZmFpbGVkX3ZlcmlmaWNhdGlvbl06IHsgbWF4UmV0cmllczogMCwgZGVsYXk6IDAgfSxcbn07XG5leHBvcnQgY29uc3QgSXNMb2NrZWQgPSAweDAwO1xuZXhwb3J0IGNvbnN0IElzVW5ob29rZWQgPSAweDAwO1xuY29uc3QgSXNIb29rZWQgPSB+SXNVbmhvb2tlZDtcbmV4cG9ydCBjb25zdCBJbmFjdGl2ZURpc2Nvbm5lY3RUaW1lID0gMzAwO1xuY29uc3QgQW5kcm9pZDExID0gJzExJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwbGF0Zm9ybSE6IE9wZXJhdGluZ1N5c3RlbTtcbiAgb3NEYXRhUmVxdWVzdCE6IFByb21pc2U8RGV2aWNlSW5mbz47XG4gIG9zVmVyc2lvbiE6IHN0cmluZztcbiAgZGV2aWNlSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGNvbm5lY3RTdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgbm90aWZpY2F0aW9uU3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIGNvbm5lY3RSZXBlYXRlcjogU3ViamVjdDxhbnk+IHwgbnVsbCA9IG51bGw7XG4gIG9wUXVldWU6IER5bmFtaWNRdWV1ZSA9IG5ldyBEeW5hbWljUXVldWUoKTtcbiAgbm90aWZpY2F0aW9uSGFuZGxlcjogKChkYXRhOiBhbnkpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gIG5vdGlmaWNhdGlvbkVycm9yITogKGVycm9yOiBhbnkpID0+IHZvaWQ7XG4gIG1lc3NhZ2VIYW5kbGVyOiBhbnkgPSBudWxsO1xuICBhbGVydEhhbmRsZXI6IGFueSA9IG51bGw7XG4gIHdyaXRlTG9ja0J1c3kgPSBmYWxzZTtcblxuICBMb25nU2VydmljZVV1aWQgPSAnMDAwMGZmZjAtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcbiAgU2VydmljZVV1aWQ6IGFueTtcbiAgTG9uZ1N0YXR1c1V1aWQgPSAnMDAwMGZmZjEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcbiAgU3RhdHVzVXVpZDogYW55O1xuICBMb25nQ29tbWFuZFV1aWQgPSAnMDAwMGZmZjItMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcbiAgQ29tbWFuZFV1aWQ6IGFueTtcbiAgTG9uZ0NvbmZpZ1V1aWQgPSAnMDAwMGZmZjMtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcbiAgQ29uZmlnVXVpZDogYW55O1xuXG4gIGtlZXBBbGl2ZUludGVydmFsOiBhbnkgPSBudWxsO1xuICBsYXN0Q29ubmVjdGVkRGV2aWNlOiBEZXZpY2UgfCBudWxsID0gbnVsbDtcbiAgcmVjb25uZWN0QXR0ZW1wdHM6IG51bWJlciA9IDA7XG4gIG1heFJlY29ubmVjdEF0dGVtcHRzOiBudW1iZXIgPSA1O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5kcm9pZFBlcm1pc3Npb25zOiBBbmRyb2lkUGVybWlzc2lvbnMsXG4gICAgcHJpdmF0ZSBibGU6IEJMRVxuICApIHtcbiAgICBpZiAoIWFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9DT05ORUNUKSB7XG4gICAgICBhbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfQ09OTkVDVCA9XG4gICAgICAgICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIX0NPTk5FQ1QnO1xuICAgIH1cbiAgICBpZiAoIWFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9TQ0FOKSB7XG4gICAgICBhbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfU0NBTiA9XG4gICAgICAgICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIX1NDQU4nO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwKF9tZXNzYWdlSGFuZGxlcjogYW55LCBfYWxlcnRIYW5kbGVyOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnYmxlOiBhY3RpdmF0ZScpO1xuICAgIGlmICghX21lc3NhZ2VIYW5kbGVyIHx8ICFfYWxlcnRIYW5kbGVyKSB7XG4gICAgICB0aHJvdyAnaGFuZGxlcnMgY2Fubm90IGJlIG51bGwnO1xuICAgIH1cbiAgICB0aGlzLm9zRGF0YVJlcXVlc3QgPSBTeXN0ZW0uZ2V0SW5mbygpO1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIgPSBfbWVzc2FnZUhhbmRsZXI7XG4gICAgdGhpcy5hbGVydEhhbmRsZXIgPSBfYWxlcnRIYW5kbGVyO1xuICAgIGlmICghdGhpcy5ibGUpIHtcbiAgICAgIGxldCBzdGFuZGluID0ge1xuICAgICAgICBpc0VuYWJsZWQ6IChhOiBhbnksIGI6IGFueSkgPT4gUHJvbWlzZS5yZWplY3QoKSxcbiAgICAgICAgZW5hYmxlOiAoKSA9PiBQcm9taXNlLnJlamVjdCgpLFxuICAgICAgICBzdGFydFNjYW46ICgpID0+IG51bGwsXG4gICAgICAgIHN0b3BTY2FuOiAoKSA9PiBudWxsLFxuICAgICAgfTtcbiAgICAgIHRoaXMuYmxlID0gc3RhbmRpbiBhcyBhbnk7XG4gICAgICBhbGVydChcbiAgICAgICAgJ1NvbWV0aGluZyBpcyBhbWlzcyB3aXRoIHRoZSBCbHVldG9vdGggcGx1Z2luXFxuQ29tbXVuaWNhdGlvbiBkaXNhYmxlZCEnXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcSA9IHRoaXMuYmxlO1xuICAgICAgaWYgKCEoJ2VuYWJsZScgaW4gcSkpIHtcbiAgICAgICAgdGhpcy5ibGUuZW5hYmxlID0gdGhpcy5pb3NFbmFibGUuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXN5bmMgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgbGV0IGF2YWlsYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2NoZWNraW5nIGF2YWlsYWJpbGl0eScpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZXZpY2VJbmZvID0gYXdhaXQgdGhpcy5vc0RhdGFSZXF1ZXN0O1xuICAgICAgdGhpcy5wbGF0Zm9ybSA9IGRldmljZUluZm8ub3BlcmF0aW5nU3lzdGVtO1xuICAgICAgdGhpcy5vc1ZlcnNpb24gPSBkZXZpY2VJbmZvLm9zVmVyc2lvbjtcbiAgICAgIGF3YWl0IHRoaXMuYmxlLmlzRW5hYmxlZCgpO1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmxlOiBpcyBlbmFibGVkJyk7XG4gICAgICBhdmFpbGFibGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYmxlLmVuYWJsZSgpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IHN1Y2Nlc3NmdWxseSBlbmFibGVkJyk7XG4gICAgICAgIGF2YWlsYWJsZSA9IHRydWU7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmxlOiBCbHVldG9vdGggZW5hYmxlIG5vdCBzdWNjZXNzZnVsOiAnICsgZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucGxhdGZvcm0gPT0gJ2FuZHJvaWQnICYmIHRoaXMub3NWZXJzaW9uIDw9IEFuZHJvaWQxMSkge1xuICAgICAgbGV0IHJlc3VsdCwgYmx1ZXRvb3RoLCBsb2NhdGlvbjtcbiAgICAgIGlmIChhdmFpbGFibGUpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmxlOiBjaGVjayBwZXJtaXNzaW9ucycpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLmNoZWNrUGVybWlzc2lvbihcbiAgICAgICAgICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQkxVRVRPT1RIXG4gICAgICAgICAgKTtcbiAgICAgICAgICBibHVldG9vdGggPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5jaGVja1Blcm1pc3Npb24oXG4gICAgICAgICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkFDQ0VTU19GSU5FX0xPQ0FUSU9OXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsb2NhdGlvbiA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xuICAgICAgICAgIGlmICghYmx1ZXRvb3RoIHx8ICFsb2NhdGlvbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hbGVydEhhbmRsZXIoXG4gICAgICAgICAgICAgICdCbHVldG9vdGggYW5kIExvY2F0aW9uIHBlcm1pc3Npb25zIGFyZSByZXF1aXJlZCB0byBzY2FuIGZvciBsb2Nrcy4gUGxlYXNlIGFsbG93IHRoZXNlIHBlcm1pc3Npb25zIGluIHlvdXIgZGV2aWNlIHNldHRpbmdzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBhbGVydCgnQ2Fubm90IGNoZWNrIEJsdWV0b290aCBwZXJtaXNzaW9uOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgICAgYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhdmFpbGFibGUgJiYgIWJsdWV0b290aCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IHJlcXVlc3QgQmx1ZXRvb3RoIHBlcm1pc3Npb24nKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcbiAgICAgICAgICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQkxVRVRPT1RIXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IHJlcXVlc3QgcGVybWlzc2lvbiBkb25lJyk7XG4gICAgICAgICAgYXZhaWxhYmxlID0gcmVzdWx0Lmhhc1Blcm1pc3Npb247XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhdmFpbGFibGUgJiYgIWxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsZTogcmVxdWVzdCBsb2NhdGlvbiBwZXJtaXNzaW9uJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oXG4gICAgICAgICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkFDQ0VTU19GSU5FX0xPQ0FUSU9OXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IHJlcXVlc3QgcGVybWlzc2lvbiBkb25lJyk7XG4gICAgICAgICAgYXZhaWxhYmxlID0gcmVzdWx0Lmhhc1Blcm1pc3Npb247XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgIGBibGU6IGFmdGVyIHJlcXVlc3RzLCBibHVldG9vdGggYWxsb3dlZCA9ICR7Ymx1ZXRvb3RofSwgbG9jYXRpb24gYWxsb3dlZCA9ICR7bG9jYXRpb259YFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGxhdGZvcm0gPT0gJ2FuZHJvaWQnICYmIHRoaXMub3NWZXJzaW9uID4gQW5kcm9pZDExKSB7XG4gICAgICBsZXQgcmVzdWx0LCBzY2FuLCBjb25uZWN0O1xuICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IGNoZWNrIHBlcm1pc3Npb25zJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuY2hlY2tQZXJtaXNzaW9uKFxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfU0NBTlxuICAgICAgICAgICk7XG4gICAgICAgICAgc2NhbiA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLmNoZWNrUGVybWlzc2lvbihcbiAgICAgICAgICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQkxVRVRPT1RIX0NPTk5FQ1RcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbm5lY3QgPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICAgICAgYGJsZTogY2hlY2tpbmcgcGVybWlzc2lvbiwgc2NhbiBhbGxvd2VkID0gJHtzY2FufSwgY29ubmVjdCBhbGxvd2VkID0gJHtjb25uZWN0fWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghc2NhbiB8fCAhY29ubmVjdCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hbGVydEhhbmRsZXIoXG4gICAgICAgICAgICAgICdCbHVldG9vdGggcGVybWlzc2lvbnMgYXJlIHJlcXVpcmVkIHRvIHNjYW4gZm9yIGxvY2tzLiBQbGVhc2UgYWxsb3cgdGhlc2UgcGVybWlzc2lvbnMgaW4geW91ciBkZXZpY2Ugc2V0dGluZ3MuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGFsZXJ0KCdDYW5ub3QgY2hlY2sgQmx1ZXRvb3RoIHBlcm1pc3Npb246ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICBhdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGF2YWlsYWJsZSAmJiAhc2Nhbikge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibHVldG9vdGg6IGNoZWNrIHNjYW4gcGVybWlzc2lvbicpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfU0NBTlxuICAgICAgICAgICk7XG4gICAgICAgICAgc2NhbiA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xuICAgICAgICAgIGF2YWlsYWJsZSA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgIGF2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYXZhaWxhYmxlICYmICFjb25uZWN0KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsdWV0b290aDogY2hlY2sgY29ubmVjdCBwZXJtaXNzaW9uJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oXG4gICAgICAgICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9DT05ORUNUXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25uZWN0ID0gcmVzdWx0Lmhhc1Blcm1pc3Npb247XG4gICAgICAgICAgYXZhaWxhYmxlID0gcmVzdWx0Lmhhc1Blcm1pc3Npb247XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgIGBibGU6IGFmdGVyIHJlcXVlc3RzLCBzY2FuIGFsbG93ZWQgPSAke3NjYW59LCBjb25uZWN0IGFsbG93ZWQgPSAke2Nvbm5lY3R9YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGF2YWlsYWJsZTtcbiAgfVxuXG4gIGlvc0VuYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2lvc0VuYWJsZSgpIGJlZ2lucycpO1xuXG4gICAgbGV0IG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT4gfCBudWxsID0gdGhpcy5ibGUuc3RhcnRTdGF0ZU5vdGlmaWNhdGlvbnMoKTtcbiAgICBpZiAobm90aWZpZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnbWlzc2luZyBub3RpZmllcicpO1xuICAgIH1cblxuICAgIHRoaXMuYWxlcnRIYW5kbGVyKFxuICAgICAgJ0JsdWV0b290aCBpcyBvZmYuIFBsZWFzZSB0dXJuIGl0IG9uIHRvIGNvbm5lY3QgdG8gYSBsb2NrLidcbiAgICApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc3RhdGVXYXRjaGVyOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlamVjdCgndGltZSBleHBpcmVkJyk7XG4gICAgICB9LCAxMjAgKiAxMDAwKTtcblxuICAgICAgc3RhdGVXYXRjaGVyID0gbm90aWZpZXIhLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihgbmV3IEJsdWV0b290aCBzdGF0ZTogJHtzdGF0ZX1gKTtcbiAgICAgICAgbGV0IGhhbmRsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlID09PSAnb24nKSB7XG4gICAgICAgICAgcmVzb2x2ZSgnb2snKTtcbiAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ3VuYXV0aG9yaXplZCcgfHwgc3RhdGUgPT09ICd1bnN1cHBvcnRlZCcpIHtcbiAgICAgICAgICByZWplY3QoJ2ludmFsaWQgc3RhdGU6ICcgKyBzdGF0ZSk7XG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgIHN0YXRlV2F0Y2hlciEudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICBzdGF0ZVdhdGNoZXIgPSBudWxsO1xuICAgICAgICAgIG5vdGlmaWVyID0gbnVsbDtcbiAgICAgICAgICB0aGF0LmJsZVxuICAgICAgICAgICAgLnN0b3BTdGF0ZU5vdGlmaWNhdGlvbnMoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKCdjaGFuZ2Ugbm90aWZpY2F0aW9ucyBlbmRlZCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoJ2NoYW5nZSBub3RpZmljYXRpb25zIGVycm9yOiAnICsgcmVhc29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoYXQuYWxlcnRIYW5kbGVyKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0U2NhbihzZXJ2aWNlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmJsZS5zdGFydFNjYW4oc2VydmljZXMpO1xuICB9XG5cbiAgc3RvcFNjYW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5ibGUuc3RvcFNjYW4oKTtcbiAgfVxuXG4gIGNvbm5lY3RUbyhzY2FuRGF0YTogRGV2aWNlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmRldmljZUlkID0gbnVsbDtcbiAgICBjb25zb2xlLmxvZygnYmxlIGNvbm5lY3RpbmcgdG86ICcgKyBzY2FuRGF0YS5pZCk7XG4gICAgdGhpcy5zZWxlY3RVdWlkcyhzY2FuRGF0YSk7XG4gICAgdGhpcy5jb25uZWN0UmVwZWF0ZXIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgbGV0IG9iczogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5ibGUuY29ubmVjdChzY2FuRGF0YS5pZCk7XG4gICAgbGV0IG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT4gfCBudWxsID0gbnVsbDtcbiAgICB0aGlzLmNvbm5lY3RTdWJzY3JpYmVyID0gb2JzLnN1YnNjcmliZShcbiAgICAgIGFzeW5jIChwZXJpcGhlcmFsRGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgICAgYGJsdWV0b290aCBjb25uZWN0IHN1Y2NlZWRlZDogbmFtZSAke3BlcmlwaGVyYWxEYXRhLm5hbWV9LCBpZCAke3BlcmlwaGVyYWxEYXRhLmlkfWBcbiAgICAgICAgKTtcbiAgICAgICAgdGhhdC5kZXZpY2VJZCA9IHNjYW5EYXRhLmlkO1xuICAgICAgICB0aGF0LmNvbm5lY3RSZXBlYXRlciEubmV4dChwZXJpcGhlcmFsRGF0YSk7XG4gICAgICAgIHRoYXQub3BRdWV1ZS5mbHVzaCgpOyAvLyBDbGVhciBhbnkgcGVuZGluZyBvcGVyYXRpb25zXG4gICAgICAgIHRoYXQud3JpdGVMb2NrQnVzeSA9IGZhbHNlOyAvLyBSZXNldCBidXN5IHN0YXRlXG4gICAgICAgIG5vdGlmaWVyID0gdGhhdC5ibGUuc3RhcnROb3RpZmljYXRpb24oXG4gICAgICAgICAgc2NhbkRhdGEuaWQsXG4gICAgICAgICAgdGhhdC5TZXJ2aWNlVXVpZCxcbiAgICAgICAgICB0aGF0LlN0YXR1c1V1aWRcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG5vdGlmaWNhdGlvblN1YnNjcmliZXIgPSBub3RpZmllci5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgIHRoYXQubm90aWZpY2F0aW9uSGFuZGxlciAmJiB0aGF0Lm5vdGlmaWNhdGlvbkhhbmRsZXIodmFsdWUpLFxuICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHRoYXQubm90aWZpY2F0aW9uRXJyb3IoZXJyb3IpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhhdC5jb25uZWN0U3Vic2NyaWJlciEuYWRkKG5vdGlmaWNhdGlvblN1YnNjcmliZXIpO1xuICAgICAgICB0aGF0LnN0YXJ0S2VlcEFsaXZlKHNjYW5EYXRhKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyAocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5jb25uZWN0RmFpbGVkID0gdGhhdC5kZXZpY2VJZCA9PT0gbnVsbDtcbiAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAnYmx1ZXRvb3RoIGRpc2Nvbm5lY3RlZCcgK1xuICAgICAgICAgICAgKHJlc3VsdC5jb25uZWN0RmFpbGVkID8gJyBwcmVtYXR1cmVseTonIDogJzonKSArXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXN1bHQpXG4gICAgICAgICk7XG4gICAgICAgIHRoYXQuY29ubmVjdFJlcGVhdGVyIS5lcnJvcihyZXN1bHQpO1xuICAgICAgICB0aGF0LmNvbm5lY3RTdWJzY3JpYmVyIS51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGF0LmNvbm5lY3RTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgaWYgKCFyZXN1bHQuY29ubmVjdEZhaWxlZCkge1xuICAgICAgICAgIHRoYXQucHVyZ2VDb25uZWN0aW9uKHRoYXQuZGV2aWNlSWQhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0LmRldmljZUlkID0gbnVsbDtcbiAgICAgICAgdGhhdC53cml0ZUxvY2tCdXN5ID0gZmFsc2U7IC8vIFJlc2V0IGJ1c3kgc3RhdGUgb24gZGlzY29ubmVjdFxuICAgICAgICB0aGF0Lm9wUXVldWUuZmx1c2goKTsgLy8gQ2xlYXIgcGVuZGluZyBvcGVyYXRpb25zXG4gICAgICAgIHRoYXQuc3RvcEtlZXBBbGl2ZSgpO1xuICAgICAgICB0aGF0LnRyeVJlY29ubmVjdCgpO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdFJlcGVhdGVyO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkYWJsZUhleFRvQnVmZmVyKHNwYWNlU2VwYXJhdGVkSGV4OiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgICBsZXQgbjogYW55W10gPSBbXTtcbiAgICBzcGFjZVNlcGFyYXRlZEhleC5zcGxpdCgnICcpLmZvckVhY2goKHgpID0+IHtcbiAgICAgIG4ucHVzaChwYXJzZUludCh4LCAxNikpO1xuICAgIH0pO1xuICAgIHJldHVybiBVaW50OEFycmF5LmZyb20obik7XG4gIH1cblxuICBwcml2YXRlIGJ1ZmZlclRvUmVhZGFibGVIZXgoYnVmZmVyOiBVaW50OEFycmF5KTogc3RyaW5nIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShidWZmZXIpXG4gICAgICAubWFwKChiKSA9PiBiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGlzTG9ja0J1c3koKSB7XG4gICAgcmV0dXJuIHRoaXMud3JpdGVMb2NrQnVzeTtcbiAgfVxuXG4gIHByaXZhdGUgd3JpdGVUb0xvY2soXG4gICAgY29tbWFuZE5hbWU6IHN0cmluZyxcbiAgICBjb21tYW5kOiBVaW50OEFycmF5XG4gICk6IFByb21pc2U8TG9ja1N0YXR1cz4ge1xuICAgIGxldCBwZW5kaW5nUmVzb2x2ZTogYW55O1xuICAgIGxldCBwZW5kaW5nUmVqZWN0OiBhbnk7XG4gICAgbGV0IG5vdGlmaWNhdGlvbkluamVjdG9yOiBhbnkgPSBudWxsO1xuICAgIGxldCB0aW1lb3V0SWQ6IGFueSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5kZXZpY2VJZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgVHJpZWQgdG8gc2VuZCBcIiR7Y29tbWFuZE5hbWV9XCIgd2hlbiBkaXNjb25uZWN0ZWRgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnRGlzY29ubmVjdGVkIC0gQ29tbWFuZCByZWZ1c2VkJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLndyaXRlTG9ja0J1c3kgPT09IHRydWUpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgIGBUcmllZCB0byBpc3N1ZSBcIiR7Y29tbWFuZE5hbWV9XCIgYmVmb3JlIHByZXZpb3VzIG9wZXJhdGlvbiBjb21wbGV0ZWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3dyaXRlVG9Mb2NrIC0gZXhlY3V0aW9uIG92ZXJsYXAnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubm90aWZpY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBgVHJpZWQgdG8gaXNzdWUgXCIke2NvbW1hbmROYW1lfSB3aGlsZSB3YWl0aW5nIGZvciBub3RpZmljYXRpb25gXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCd3cml0ZVRvTG9jayAtIG5vdGlmaWNhdGlvbiBpbmNvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMud3JpdGVMb2NrQnVzeSA9IHRydWU7XG4gICAgY29tbWFuZFtTVU1dID0gMDtcbiAgICBjb21tYW5kW1NVTV0gPSBjb21tYW5kLnJlZHVjZShcbiAgICAgIChwcmV2aW91cywgY3VycmVudCkgPT4gKHByZXZpb3VzICsgY3VycmVudCkgJiAweGZmXG4gICAgKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8TG9ja1N0YXR1cz4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcGVuZGluZ1Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcGVuZGluZ1JlamVjdCA9IHJlamVjdDtcbiAgICAgIFxuICAgICAgLy8gQWRkIHRpbWVvdXQgZm9yIG9wZXJhdGlvbnNcbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLndyaXRlTG9ja0J1c3kgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25IYW5kbGVyID0gbnVsbDtcbiAgICAgICAgcmVqZWN0KCdPcGVyYXRpb24gdGltZW91dCAtIG5vIHJlc3BvbnNlIHJlY2VpdmVkJyk7XG4gICAgICB9LCAxMDAwMCk7IC8vIDEwIHNlY29uZCB0aW1lb3V0XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgICAgYHdyaXRlVG9Mb2NrIFwiJHtjb21tYW5kTmFtZX1cIiA6ICR7dGhpcy5idWZmZXJUb1JlYWRhYmxlSGV4KGNvbW1hbmQpfWBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25IYW5kbGVyID0gcmVzcG9uc2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uRXJyb3IgPSBlcnJvckhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgYXdhaXQgdGhpcy5ibGUud3JpdGUoXG4gICAgICAgICAgdGhpcy5kZXZpY2VJZCEsXG4gICAgICAgICAgdGhpcy5TZXJ2aWNlVXVpZCxcbiAgICAgICAgICB0aGlzLkNvbW1hbmRVdWlkLFxuICAgICAgICAgIGNvbW1hbmQuYnVmZmVyIGFzIEFycmF5QnVmZmVyXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb21tYW5kTmFtZSA9PT0gJ3NldEFsYXJtU3RhdGUnKSB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uSW5qZWN0b3IgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkluamVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBmYWtlQWxhcm1SZXNwb25zZSA9IFtcbiAgICAgICAgICAgICAgdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA3NCAxMCAwMCA1RiBEOCBGRicpLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHJlc3BvbnNlSGFuZGxlci5iaW5kKHRoaXMpKGZha2VBbGFybVJlc3BvbnNlKTtcbiAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAodGltZW91dElkKSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgdGhpcy53cml0ZUxvY2tCdXN5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uSGFuZGxlciA9IG51bGw7XG4gICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gd3JpdGUgZGF0YSB0byBkZXZpY2U6JyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgIHJlamVjdCgnd3JpdGUgZmFpbGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiByZXNwb25zZUhhbmRsZXIodGhpczogQmxlU2VydmljZSwgZGF0YTogYW55KSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGltZW91dElkKSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbkluamVjdG9yKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KG5vdGlmaWNhdGlvbkluamVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyaXRlTG9ja0J1c3kgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25IYW5kbGVyID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb21tYW5kTmFtZSA9PT0gQ01EX1N5c3RlbUV4aXQpIHtcbiAgICAgICAgICBwZW5kaW5nUmVzb2x2ZSh7IHJlc3BvbnNlOiBBU0tfY29ycmVjdCB9IGFzIExvY2tTdGF0dXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBvdXRwdXQgPSAnTm8gZGF0YSc7XG4gICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgJ05vIGRhdGEgcmV0dXJuZWQgZnJvbSBub3RpZmljYXRpb24nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgYnVmZmVyOiBBcnJheUJ1ZmZlciA9IGRhdGFbMF07XG4gICAgICAgICAgaWYgKGJ1ZmZlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyAnTm8gYnVmZmVyIHJldHVybmVkIGZyb20gbm90aWZpY2F0aW9uKCknO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgICAgb3V0cHV0ID0gJ3Jlc3VsdDogJyArIHRoaXMuYnVmZmVyVG9SZWFkYWJsZUhleChieXRlcyk7XG4gICAgICAgICAgaWYgKGJ5dGVzLmxlbmd0aCA8IERBVEEpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIob3V0cHV0KTtcbiAgICAgICAgICAgIHRocm93ICdUcnVuY2F0ZWQgcmVzcG9uc2UgJyArIGJ5dGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgUzogTG9ja1N0YXR1cyA9IHtcbiAgICAgICAgICAgIHJlc3BvbnNlOiBieXRlc1tBU0tdLFxuICAgICAgICAgICAgZXh0cmFCeXRlczogYnl0ZXNbRVhUXSxcbiAgICAgICAgICAgIGlzU3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRXJyb3I6IGJ5dGVzW0FTS10gPiAweDEwICYmIGJ5dGVzW0FTS10gPCAweDI2LFxuICAgICAgICAgICAgdmVyaWZpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYWxhcm1PbjogbnVsbCxcbiAgICAgICAgICAgIGJ1enplck9uOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgICAgUy5yZXNwb25zZU1zZyA9IFJlc3BvbnNlTWFwW1MucmVzcG9uc2UgYXMga2V5b2YgdHlwZW9mIFJlc3BvbnNlTWFwXTtcbiAgICAgICAgICBpZiAoIVMucmVzcG9uc2VNc2cpIHtcbiAgICAgICAgICAgIFMucmVzcG9uc2VNc2cgPSAnVW5rbm93biAnICsgUy5yZXNwb25zZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpdGNoIChieXRlc1tDTURdKSB7XG4gICAgICAgICAgICBjYXNlIDB4MGY6XG4gICAgICAgICAgICAgIGlmIChieXRlc1tBU0tdID09PSBBU0tfY29ycmVjdCkge1xuICAgICAgICAgICAgICAgIFMudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSAnLCB2ZXJpZmllZCc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9XG4gICAgICAgICAgICAgICAgICAnLCAnICtcbiAgICAgICAgICAgICAgICAgICghUy5pc0Vycm9yXG4gICAgICAgICAgICAgICAgICAgID8gJ3VudmVyaWZpZWQsIHJldHVybmVkICdcbiAgICAgICAgICAgICAgICAgICAgOiAnaW52YWxpZCByZXNwb25zZTogJykgK1xuICAgICAgICAgICAgICAgICAgUy5yZXNwb25zZU1zZztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMHg2MDpcbiAgICAgICAgICAgICAgUy5pc1N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgIFMub3BlbkNsb3NlU3RhdGUgPSBieXRlc1tEQVRBXTtcbiAgICAgICAgICAgICAgUy5ob29rU3RhdGUgPSBieXRlc1tEQVRBICsgMV07XG4gICAgICAgICAgICAgIFMudm9sdGFnZVZhbHVlID0gYnl0ZXNbOF0gKiAyNTYgKyBieXRlc1s5XTtcbiAgICAgICAgICAgICAgUy5sb2NrSWQgPVxuICAgICAgICAgICAgICAgIChieXRlc1sxMF0gPDwgMjQpICtcbiAgICAgICAgICAgICAgICAoYnl0ZXNbMTFdIDw8IDE2KSArXG4gICAgICAgICAgICAgICAgKGJ5dGVzWzEyXSA8PCA4KSArXG4gICAgICAgICAgICAgICAgYnl0ZXNbMTNdO1xuICAgICAgICAgICAgICBTLnJhbmREYXRhID0gYnl0ZXNbUkFORERBVEFdO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMHg3NDpcbiAgICAgICAgICAgICAgUy5hbGFybU9uID0gYnl0ZXNbREFUQV0gPT09IDA7XG4gICAgICAgICAgICAgIGlmIChieXRlc1tFWFRdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9ICcsIGFsYXJtICcgKyAoYnl0ZXNbREFUQV0gPT09IDAgPyAnb24nIDogJ29mZicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjb21tYW5kW0NNRF0gIT09IGJ5dGVzW0NNRF0pIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJyAgKioqIE1JU01BVENIICoqKic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDB4NzU6XG4gICAgICAgICAgICAgIFMuYnV6emVyT24gPSBieXRlc1tEQVRBXSA9PT0gMDtcbiAgICAgICAgICAgICAgaWYgKGJ5dGVzW0VYVF0gIT09IDApIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJywgYnV6emVyICcgKyAoYnl0ZXNbREFUQV0gPT09IDAgPyAnb24nIDogJ29mZicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjb21tYW5kW0NNRF0gIT09IGJ5dGVzW0NNRF0pIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJyAgKioqIE1JU01BVENIICoqKic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIob3V0cHV0KTtcbiAgICAgICAgICBwZW5kaW5nUmVzb2x2ZShTKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbGV0IG1zZyA9ICdGYWlsZWQgdG8gcmVhZCBsb2NrIHN0YXR1czogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihtc2cpO1xuICAgICAgICBhbGVydChtc2cpO1xuICAgICAgICBwZW5kaW5nUmVqZWN0KCdyZWFkIGZhaWxlZCcpO1xuICAgICAgfVxuICAgICAgdGhpcy53cml0ZUxvY2tCdXN5ID0gZmFsc2U7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbkhhbmRsZXIgPSBudWxsO1xuICAgICAgcGVuZGluZ1Jlc29sdmUgPSBudWxsO1xuICAgICAgcGVuZGluZ1JlamVjdCA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JIYW5kbGVyKHRoaXM6IEJsZVNlcnZpY2UsIGVycm9yOiBhbnkpIHtcbiAgICAgIGlmICh0aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgaWYgKG5vdGlmaWNhdGlvbkluamVjdG9yKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChub3RpZmljYXRpb25JbmplY3Rvcik7XG4gICAgICB9XG4gICAgICB0aGlzLndyaXRlTG9ja0J1c3kgPSBmYWxzZTtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uSGFuZGxlciA9IG51bGw7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdub3RpZmljYXRpb24gZXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgcGVuZGluZ1JlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmVhZExvY2tTdGF0dXMoKTogUHJvbWlzZTxMb2NrU3RhdHVzPiB7XG4gICAgY29uc3QgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcignRjUgNjAgMDAgMDAgNUYgQjQnKTtcbiAgICByZXR1cm4gPFByb21pc2U8TG9ja1N0YXR1cz4+KFxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jaygncmVhZC1zdGF0ZScsIGNvbW1hbmQpKVxuICAgICk7XG4gIH1cblxuICBoYW5kbGVWZXJpZmljYXRpb24obG9ja1BhaXI6IExvY2tQYXJhbWV0ZXJzKTogUHJvbWlzZTxWZXJpZnlPdXRjb21lPiB7XG4gICAgbGV0IHJlYWRhYmxlID0gJ0Y1IDBGIDAwIDA0IDVGIDNCJztcbiAgICBmb3IgKGxldCB6aSA9IDA7IHppIDwgNDsgemkrKykge1xuICAgICAgcmVhZGFibGUgKz0gJyAnICsgbG9ja1BhaXIucGluLmNoYXJDb2RlQXQoemkpLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgY29uc3QgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcihyZWFkYWJsZSk7XG4gICAgcmV0dXJuIDxQcm9taXNlPFZlcmlmeU91dGNvbWU+PnRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+XG4gICAgICB0aGlzLndyaXRlVG9Mb2NrKCd2ZXJpZnknLCBjb21tYW5kKS50aGVuKChyZXN1bHQ6IExvY2tTdGF0dXMpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2ZXJpZmllZDogcmVzdWx0LnZlcmlmaWVkLFxuICAgICAgICAgIGlzRXJyb3I6IHJlc3VsdC5pc0Vycm9yLFxuICAgICAgICAgIG1zZzogcmVzdWx0LnJlc3BvbnNlTXNnLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWxhcm1TdGF0ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA3NCAwMCAwMCA1RiAzQicpO1xuICAgIHJldHVybiA8UHJvbWlzZTxib29sZWFuPj50aGlzLm9wUXVldWVcbiAgICAgIC5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2soJ2dldEFsYXJtU3RhdGUnLCBjb21tYW5kKSlcbiAgICAgIC50aGVuKChyZXN1bHQ6IExvY2tTdGF0dXMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5hbGFybU9uID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAgICdnZXRBbGFybVN0YXRlOiBpbnZhbGlkIHN0YXR1czogJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQuYWxhcm1PbiAhPT0gbnVsbCAmJiByZXN1bHQuYWxhcm1PbjtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc2V0QWxhcm1TdGF0ZShlbmFibGVkOiBhbnkpOiBQcm9taXNlPExvY2tTdGF0dXM+IHtcbiAgICBsZXQgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcihcbiAgICAgICdGNSA3NSAwMCAwMSA1RiAzQiAnICsgKGVuYWJsZWQgPyAnMDAnIDogJzAxJylcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCAoPFByb21pc2U8TG9ja1N0YXR1cz4+KFxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jaygnc2V0QnV6emVyU3RhdGUnLCBjb21tYW5kKSlcbiAgICApKTtcblxuICAgIGF3YWl0IHRoaXMud2FpdEZvck1pbGxpc2Vjb25kcyg2MDApO1xuXG4gICAgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcihcbiAgICAgICdGNSA3NCAwMCAwMSA1RiAzQiAnICsgKGVuYWJsZWQgPyAnMDAnIDogJzAxJylcbiAgICApO1xuICAgIHJlc3VsdCA9IGF3YWl0ICg8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXG4gICAgICB0aGlzLm9wUXVldWUuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKCdzZXRBbGFybVN0YXRlJywgY29tbWFuZCkpXG4gICAgKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRyaWdnZXJMb2NrKHRvZ2dsZTogYW55LCBlbmNyeXB0Qnl0ZTogYW55KTogUHJvbWlzZTxMb2NrU3RhdHVzPiB7XG4gICAgbGV0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoJ0Y1IDYxIDAwIDAxIDVGIDAwIDAwJyk7XG4gICAgY29tbWFuZFtEQVRBXSA9ICh0b2dnbGUgPT09ICd0b2dnbGUnID8gMHgzNSA6IDB4MzYpIF4gZW5jcnlwdEJ5dGU7XG4gICAgcmV0dXJuIDxQcm9taXNlPExvY2tTdGF0dXM+PihcbiAgICAgIHRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2sodG9nZ2xlLCBjb21tYW5kKSlcbiAgICApO1xuICB9XG5cbiAgc2V0RGF0ZVRpbWUobm93OiBEYXRlKSB7XG4gICAgbGV0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoXG4gICAgICAnRjUgNjIgMDAgMDYgNUYgMDAnICtcbiAgICAgICAgJyAnICtcbiAgICAgICAgKCcwJyArIG5vdy5nZXRGdWxsWWVhcigpKS5zbGljZSgtMikgK1xuICAgICAgICAnICcgK1xuICAgICAgICAoJzAnICsgbm93LmdldE1vbnRoKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICcgJyArXG4gICAgICAgICgnMCcgKyBub3cuZ2V0RGF0ZSgpKS5zbGljZSgtMikgK1xuICAgICAgICAnICcgK1xuICAgICAgICAoJzAnICsgbm93LmdldEhvdXJzKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICcgJyArXG4gICAgICAgICgnMCcgKyBub3cuZ2V0TWludXRlcygpKS5zbGljZSgtMikgK1xuICAgICAgICAnICcgK1xuICAgICAgICAoJzAnICsgbm93LmdldFNlY29uZHMoKSkuc2xpY2UoLTIpXG4gICAgKTtcbiAgICByZXR1cm4gPFByb21pc2U8TG9ja1N0YXR1cz4+KFxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jaygnc2V0VGltZScsIGNvbW1hbmQpKVxuICAgICk7XG4gIH1cblxuICBwdXRMb2NrVG9TbGVlcCgpOiBQcm9taXNlPExvY2tTdGF0dXM+IHtcbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA2RiAwMCAwMCA1RiBDMycpO1xuICAgIHJldHVybiA8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXG4gICAgICB0aGlzLm9wUXVldWUuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKENNRF9TeXN0ZW1FeGl0LCBjb21tYW5kKSlcbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUxvY2soKTogUHJvbWlzZTxMb2NrU3RhdHVzPiB7XG4gICAgY29uc3QgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcignRjUgNjUgMDAgMDAgNUYgQjknKTtcbiAgICByZXR1cm4gPFByb21pc2U8TG9ja1N0YXR1cz4+KFxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jayhDTURfU3lzdGVtSW5pdCwgY29tbWFuZCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcHVyZ2VDb25uZWN0aW9uKGRldmljZUlkOiBhbnkpIHtcbiAgICB0aGlzLmJsZVxuICAgICAgLmRpc2Nvbm5lY3QoZGV2aWNlSWQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQnKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdwdXJnZUNvbm5lY3Rpb24oKTogJyArIHJlYXNvbik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGlzQ29ubmVjdGVkKGRldmljZUlkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5ibGUuaXNDb25uZWN0ZWQoZGV2aWNlSWQpO1xuICB9XG5cbiAgcmVhZFJTU0koKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxlLnJlYWRSU1NJKHRoaXMuZGV2aWNlSWQhKTtcbiAgfVxuXG4gIHNlbGVjdFV1aWRzKHRhcmdldDogYW55KSB7XG4gICAgZnVuY3Rpb24gc2hvcnRlbih1dWlkOiBhbnksIGV4dHJhY3Q6IGFueSkge1xuICAgICAgcmV0dXJuIGV4dHJhY3QgPyB1dWlkLnN1YnN0cig0LCA0KS50b1VwcGVyQ2FzZSgpIDogdXVpZDtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgISgnaWQnIGluIHRhcmdldCkpIHtcbiAgICAgIHRocm93ICdubyBkZXZpY2UgcHJvdmlkZWQnO1xuICAgIH1cbiAgICBjb25zdCBpc1Nob3J0ID0gIXRhcmdldC5oYXNMb25nVXVpZHM7XG4gICAgdGhpcy5TZXJ2aWNlVXVpZCA9IHNob3J0ZW4odGhpcy5Mb25nU2VydmljZVV1aWQsIGlzU2hvcnQpO1xuICAgIHRoaXMuU3RhdHVzVXVpZCA9IHNob3J0ZW4odGhpcy5Mb25nU3RhdHVzVXVpZCwgaXNTaG9ydCk7XG4gICAgdGhpcy5Db21tYW5kVXVpZCA9IHNob3J0ZW4odGhpcy5Mb25nQ29tbWFuZFV1aWQsIGlzU2hvcnQpO1xuICAgIHRoaXMuQ29uZmlnVXVpZCA9IHNob3J0ZW4odGhpcy5Mb25nQ29uZmlnVXVpZCwgaXNTaG9ydCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXN5bmMgZm9yY2VEaXNjb25uZWN0KGRldmljZTogYW55KSB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGAqKiBBdHRlbXB0aW5nIERpc2Nvbm5lY3QgKipgKTtcbiAgICAgIHRoaXMuYmxlLmRpc2Nvbm5lY3QoZGV2aWNlLmlkKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJy0tIGRpc2Nvbm5lY3RlZCBmYWlsZWRcXG4nKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHdhaXRGb3JNaWxsaXNlY29uZHMobXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge31cblxuICBzdGFydEtlZXBBbGl2ZShkZXZpY2U6IERldmljZSkge1xuICAgIHRoaXMuc3RvcEtlZXBBbGl2ZSgpO1xuICAgIHRoaXMubGFzdENvbm5lY3RlZERldmljZSA9IGRldmljZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdENvbm5lY3RlZERldmljZScsIEpTT04uc3RyaW5naWZ5KGRldmljZSkpO1xuICAgIHRoaXMua2VlcEFsaXZlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBPbmx5IHNlbmQga2VlcC1hbGl2ZSBpZiBub3QgYnVzeSB3aXRoIG9wZXJhdGlvbnNcbiAgICAgIGlmICghdGhpcy53cml0ZUxvY2tCdXN5ICYmIHRoaXMuZGV2aWNlSWQpIHtcbiAgICAgICAgdGhpcy5yZWFkTG9ja1N0YXR1cygpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0tlZXAtYWxpdmUgZmFpbGVkOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAvLyBJZiBrZWVwLWFsaXZlIGZhaWxzLCB0cnkgdG8gcmVjb25uZWN0XG4gICAgICAgICAgaWYgKHRoaXMuZGV2aWNlSWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJ5UmVjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAzMDAwMCk7IC8vIEluY3JlYXNlZCB0byAzMCBzZWNvbmRzIHRvIHJlZHVjZSBpbnRlcmZlcmVuY2VcbiAgfVxuXG4gIHN0b3BLZWVwQWxpdmUoKSB7XG4gICAgaWYgKHRoaXMua2VlcEFsaXZlSW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5rZWVwQWxpdmVJbnRlcnZhbCk7XG4gICAgICB0aGlzLmtlZXBBbGl2ZUludGVydmFsID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyB0cnlSZWNvbm5lY3QoKSB7XG4gICAgaWYgKCF0aGlzLmxhc3RDb25uZWN0ZWREZXZpY2UgfHwgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA+PSB0aGlzLm1heFJlY29ubmVjdEF0dGVtcHRzKSByZXR1cm47XG4gICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cysrO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0VG8odGhpcy5sYXN0Q29ubmVjdGVkRGV2aWNlISkuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVjb25uZWN0QXR0ZW1wdHMgPSAwO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMudHJ5UmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDIwMDAgKiB0aGlzLnJlY29ubmVjdEF0dGVtcHRzKTsgLy8gRXhwb25lbnRpYWwgYmFja29mZlxuICB9XG5cbiAgYXN5bmMgYXV0b1JlY29ubmVjdE9uU3RhcnQoKSB7XG4gICAgY29uc3QgbGFzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXN0Q29ubmVjdGVkRGV2aWNlJyk7XG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldmljZSA9IEpTT04ucGFyc2UobGFzdCk7XG4gICAgICAgIC8vIE9wdGlvbmFsbHksIGNoZWNrIGlmIGRldmljZSBpcyBpbiByYW5nZSBmaXJzdFxuICAgICAgICB0aGlzLmNvbm5lY3RUbyhkZXZpY2UpLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA9IDA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cnlSZWNvbm5lY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCB7fVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjb3ZlciBzZXJ2aWNlcyBmb3IgYSBkZXZpY2UgYW5kIGNoZWNrIGlmIHRoZSByZXF1aXJlZCBzZXJ2aWNlIGlzIHByZXNlbnQuXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcmVxdWlyZWQgc2VydmljZSBpcyBmb3VuZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgYXN5bmMgaGFzUmVxdWlyZWRTZXJ2aWNlKGRldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgLy8gSWYgdGhlIEJMRSBwbHVnaW4gZXhwb3NlcyBhIGRpc2NvdmVyIG1ldGhvZCwgdXNlIGl0LiBPdGhlcndpc2UsIHJldHVybiB0cnVlIGZvciBub3cuXG4gICAgICBpZiAodHlwZW9mICh0aGlzLmJsZSBhcyBhbnkpLnNlcnZpY2VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gYXdhaXQgKHRoaXMuYmxlIGFzIGFueSkuc2VydmljZXMoZGV2aWNlSWQpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdEaXNjb3ZlcmVkIHNlcnZpY2VzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2VydmljZXMpKTtcbiAgICAgICAgaWYgKHNlcnZpY2VzICYmIHNlcnZpY2VzLnNlcnZpY2VzKSB7XG4gICAgICAgICAgcmV0dXJuIHNlcnZpY2VzLnNlcnZpY2VzLmluY2x1ZGVzKHRoaXMuTG9uZ1NlcnZpY2VVdWlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRmFsbGJhY2s6IGFzc3VtZSBzZXJ2aWNlIGlzIHByZXNlbnQgKGZvciBwbHVnaW5zIHdpdGhvdXQgZGlzY292ZXIpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdTZXJ2aWNlIGRpc2NvdmVyeSBmYWlsZWQ6ICcgKyBlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBTb2Z0IHJlc2V0IEJsdWV0b290aCBhZGFwdGVyIChBbmRyb2lkIG9ubHkpXG4gIGFzeW5jIHNvZnRSZXNldEJsdWV0b290aCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnICYmIHRoaXMuYmxlICYmIHR5cGVvZiB0aGlzLmJsZS5pc0VuYWJsZWQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHRoaXMuYmxlLmVuYWJsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc29mdFJlc2V0Qmx1ZXRvb3RoOiBEaXNhYmxpbmcgQmx1ZXRvb3RoLi4uJyk7XG4gICAgICAgIGF3YWl0ICh0aGlzLmJsZSBhcyBhbnkpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc29mdFJlc2V0Qmx1ZXRvb3RoOiBCbHVldG9vdGggZGlzYWJsZWQuIFdhaXRpbmcgMXMuLi4nKTtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIDEwMDApKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc29mdFJlc2V0Qmx1ZXRvb3RoOiBFbmFibGluZyBCbHVldG9vdGguLi4nKTtcbiAgICAgICAgYXdhaXQgdGhpcy5ibGUuZW5hYmxlKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3NvZnRSZXNldEJsdWV0b290aDogQmx1ZXRvb3RoIGVuYWJsZWQuJyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3NvZnRSZXNldEJsdWV0b290aDogRmFpbGVkIHRvIHJlc2V0IEJsdWV0b290aDogJyArIGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzb2Z0UmVzZXRCbHVldG9vdGg6IE5vdCBzdXBwb3J0ZWQgb24gdGhpcyBwbGF0Zm9ybS4nKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogVGFjdGljYWwgVHJhcHMgQmx1ZXRvb3RoIExvY2sgQXBwXG4gKiAoYykgMjAxOS0yMDIyIFRhY3RpY2FsIFRyYXBzIGh0dHBzOi8vd3d3LnRhY3RpY2FsdHJhcHMuY29tL1xuICogTGljZW5zZTogUHJvcHJpZXRhcnksIGJ5IHBlcm1pc3Npb24gb25seVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2Uge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJzc2k6IGFueTtcbiAgYWR2ZXJ0aXNpbmc6IGFueTtcbiAgaGFzUHJvcGVyTmFtZT86IGJvb2xlYW47XG4gIGhhc0xvbmdVdWlkcz86IGJvb2xlYW47XG4gIGlzTm90QUdob3N0PzogYm9vbGVhbjtcbiAgY3VzdG9tTmFtZT86IHN0cmluZztcbiAgaXNFeHBhbmRlZD86IGJvb2xlYW47IC8vIEFkZCBmb3IgZGV2aWNlIGV4cGFuc2lvbiBmdW5jdGlvbmFsaXR5XG59XG5cbmV4cG9ydCBjb25zdCBVbmtub3duRGV2aWNlTmFtZSA9ICdVbmtub3duIERldmljZSc7XG5leHBvcnQgdHlwZSBCbGVEZXZpY2VMaXN0ID0gRGV2aWNlW107XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEZXZpY2VzU2VydmljZSB7XG4gIGRldmljZXM6IEJsZURldmljZUxpc3QgPSBbXTtcbiAgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTtcbiAgYmxvY2tpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnRGV2aWNlcyBTZXJ2aWNlIGluaXRpYWxpemluZycpO1xuICB9XG5cbiAgaGV4Qnl0ZShuOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKCcwJyArIG4udG9TdHJpbmcoMTYpKS5zdWJzdHIoLTIsIDIpLnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICAvKiBkZWNvZGUgdGhlIHBlcmlwaGVyYWwgY29ubmVjdGlvbiBkYXRhIHJlY2VpdmVkIHdpdGggYVxuICAgKiBzdWNjZXNzZnVsIGNvbm5lY3Rpb25cbiAgICovXG4gIGFkdmVydGlzZW1lbnREZWNvZGVyKGJ1ZmZlcjogYW55KSB7XG4gICAgdGhpcy5ibG9ja2luZyA9IHRydWU7XG4gICAgbGV0IGFkdlN0cmluZ3MgPSBbXTtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCBieXRlcy5sZW5ndGgpIHtcbiAgICAgIGxldCBzLCBjb3VudDtcbiAgICAgIGxldCBhZExlbmd0aCA9IGJ5dGVzW2luZGV4KytdO1xuICAgICAgaWYgKGFkTGVuZ3RoID09PSAwKSBicmVhaztcbiAgICAgIGNvbnN0IGFkVHlwZSA9IGJ5dGVzW2luZGV4KytdO1xuICAgICAgYWRMZW5ndGggPSBhZExlbmd0aCAtIDE7XG4gICAgICBsZXQgYWREYXRhID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBpbmRleCwgYWRMZW5ndGgpO1xuICAgICAgc3dpdGNoIChhZFR5cGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHMgPSAnRmxhZ3M6ICcgKyB0aGlzLmhleEJ5dGUoYnl0ZXNbaW5kZXhdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvdW50ID0gYWRMZW5ndGggLyAyO1xuICAgICAgICAgIHMgPSAnc2VydmljZTonO1xuICAgICAgICAgIGZvciAobGV0IHppID0gMDsgemkgPCBjb3VudDsgemkrKykge1xuICAgICAgICAgICAgcyArPVxuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICB0aGlzLmhleEJ5dGUoYWREYXRhW3ppICogMiArIDFdKSArXG4gICAgICAgICAgICAgIHRoaXMuaGV4Qnl0ZShhZERhdGFbemkgKiAyXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgcyA9ICdVVUlEOiAnO1xuICAgICAgICAgIGxldCBwMSA9IFtdLFxuICAgICAgICAgICAgcDIgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCB6aSA9IDA7IHppIDwgYWRMZW5ndGg7IHppKyspIHtcbiAgICAgICAgICAgIHAxLnVuc2hpZnQodGhpcy5oZXhCeXRlKGFkRGF0YVt6aV0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSgwLCA0KS5qb2luKCcnKSk7XG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSg0LCA2KS5qb2luKCcnKSk7XG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSg2LCA4KS5qb2luKCcnKSk7XG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSg4LCAxMCkuam9pbignJykpO1xuICAgICAgICAgIHAyLnB1c2gocDEuc2xpY2UoMTAsIDE2KS5qb2luKCcnKSk7XG4gICAgICAgICAgcyA9IHAyLmpvaW4oJy0nKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgbGV0IGFkVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIGluZGV4LCBhZExlbmd0aCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHMgPSB0aGlzLmRlY29kZXIuZGVjb2RlKGFkVmlldyk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcyA9IGFkVmlldztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcyA9ICdyYXc6ICc7XG4gICAgICAgICAgZm9yIChsZXQgemkgPSAwOyB6aSA8IGFkTGVuZ3RoOyB6aSsrKSB7XG4gICAgICAgICAgICBpZiAoemkgPiAwKSBzICs9ICcsICc7XG4gICAgICAgICAgICBzICs9IHRoaXMuaGV4Qnl0ZShhZERhdGFbemldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBhZHZTdHJpbmdzLnB1c2goJzB4JyArIGFkVHlwZS50b1N0cmluZygxNikgKyAnOiAnICsgcyk7XG4gICAgICBpbmRleCArPSBhZExlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5ibG9ja2luZyA9IGZhbHNlO1xuICAgIHJldHVybiBhZHZTdHJpbmdzO1xuICB9XG5cbiAgYWRkRGV2aWNlKGRldmljZTogRGV2aWNlKTogYW55W10ge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ0RldmljZUZhY3RvcnkgYWRkRGV2aWNlIFwiJyArIGRldmljZS5pZCArICdcIiwgXCInICsgZGV2aWNlLm5hbWUgKyAnXCInXG4gICAgKTtcbiAgICAvLyBkZWNvZGUgYWR2ZXJ0aXNlbWVudCB0byBjb25zb2xlIHVubGVzcyBkZWJ1Z2dlciBpcyBwYXVzZWQgaW4gZGVjb2RlclxuICAgIGlmICghdGhpcy5ibG9ja2luZykge1xuICAgICAgbGV0IGFkdmVydHMgPSB0aGlzLmFkdmVydGlzZW1lbnREZWNvZGVyKGRldmljZS5hZHZlcnRpc2luZyk7XG4gICAgICAvLyAgICAgICAgICAgIGFkdmVydHMuZm9yRWFjaChmdW5jdGlvbihzKSB7IGNvbnNvbGUubG9nKHMpOyB9KTtcbiAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coJy4uIFJTU0kgPSAnICsgZGV2aWNlLnJzc2kpO1xuICAgIH1cbiAgICAvLyBBdHRhY2ggY3VzdG9tIG5hbWUgaWYgaXQgZXhpc3RzXG4gICAgY29uc3QgY3VzdG9tTmFtZSA9IHRoaXMuZ2V0Q3VzdG9tTmFtZShkZXZpY2UuaWQpO1xuICAgIGlmIChjdXN0b21OYW1lKSB7XG4gICAgICBkZXZpY2UuY3VzdG9tTmFtZSA9IGN1c3RvbU5hbWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuZGV2aWNlcy5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZGV2aWNlLmlkICYmIGl0ZW0ubmFtZSA9PT0gZGV2aWNlLm5hbWVcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkdXBsaWNhdGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXZpY2VzLnB1c2goZGV2aWNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGV2aWNlcztcbiAgfVxuXG4gIGdldERldmljZXMoKTogQmxlRGV2aWNlTGlzdCB7XG4gICAgY29uc29sZS5sb2coJ0RldmljZUZhY3RvcnkgZ2V0RGV2aWNlcycpO1xuICAgIHJldHVybiB0aGlzLmRldmljZXM7XG4gIH1cblxuICBnZXREZXZpY2UoaWQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdEZXZpY2VGYWN0b3J5IGdldERldmljZSBcIicgKyBpZCArICdcIicpO1xuICAgIGxldCBpbmRleCA9IHRoaXMuZGV2aWNlcy5maW5kSW5kZXgoKGRldmljZSkgPT4gZGV2aWNlLmlkID09PSBpZCk7XG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0aGlzLmRldmljZXNbaW5kZXhdIDogbnVsbDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnNvbGUubG9nKCdEZXZpY2VGYWN0b3J5IHJlc2V0Jyk7XG4gICAgdGhpcy5kZXZpY2VzID0gW107XG4gIH1cblxuICBnZXRDdXN0b21OYW1lKGRldmljZUlkOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbU5hbWVfJyArIGRldmljZUlkKTtcbiAgfVxuXG4gIHNldEN1c3RvbU5hbWUoZGV2aWNlSWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1c3RvbU5hbWVfJyArIGRldmljZUlkLCBuYW1lKTtcbiAgICAvLyBVcGRhdGUgaW4tbWVtb3J5IGRldmljZSBpZiBwcmVzZW50XG4gICAgY29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2VzLmZpbmQoZCA9PiBkLmlkID09PSBkZXZpY2VJZCk7XG4gICAgaWYgKGRldmljZSkge1xuICAgICAgZGV2aWNlLmN1c3RvbU5hbWUgPSBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFV0aWxpdHkgdG8gZXh0cmFjdCBzZXJpYWwgbnVtYmVyIGZyb20gZGV2aWNlIG5hbWVcbiAgc3RhdGljIGV4dHJhY3RTZXJpYWxOdW1iZXIoZGV2aWNlOiBEZXZpY2UpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAoZGV2aWNlLm5hbWUgJiYgZGV2aWNlLm5hbWUuc3RhcnRzV2l0aCgnU046JykpIHtcbiAgICAgIHJldHVybiBkZXZpY2UubmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBHZXQgdGhlIGJlc3QgZGlzcGxheSBuYW1lIGZvciBhIGRldmljZSB3aXRoIGNoYXJhY3RlciBsaW1pdFxuICBzdGF0aWMgZ2V0RGlzcGxheU5hbWUoZGV2aWNlOiBEZXZpY2UpOiBzdHJpbmcge1xuICAgIGxldCBkaXNwbGF5TmFtZSA9ICcnO1xuICAgIFxuICAgIGlmIChkZXZpY2UuY3VzdG9tTmFtZSAmJiBkZXZpY2UuY3VzdG9tTmFtZS50cmltKCkpIHtcbiAgICAgIGRpc3BsYXlOYW1lID0gZGV2aWNlLmN1c3RvbU5hbWU7XG4gICAgfSBlbHNlIGlmIChkZXZpY2UubmFtZSAmJiBkZXZpY2UubmFtZSAhPT0gJ1Vua25vd24gRGV2aWNlJykge1xuICAgICAgZGlzcGxheU5hbWUgPSBkZXZpY2UubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VyaWFsID0gRGV2aWNlc1NlcnZpY2UuZXh0cmFjdFNlcmlhbE51bWJlcihkZXZpY2UpO1xuICAgICAgaWYgKHNlcmlhbCkge1xuICAgICAgICBkaXNwbGF5TmFtZSA9IHNlcmlhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlOYW1lID0gJ1Vua25vd24gRGV2aWNlJztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gTGltaXQgdG8gMTUgY2hhcmFjdGVyc1xuICAgIGlmIChkaXNwbGF5TmFtZS5sZW5ndGggPiAxNSkge1xuICAgICAgcmV0dXJuIGRpc3BsYXlOYW1lLnN1YnN0cmluZygwLCAxNSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIC8vIEdldCB0ZXh0IHNpemUgY2xhc3MgYmFzZWQgb24gbmFtZSBsZW5ndGhcbiAgc3RhdGljIGdldFRleHRTaXplQ2xhc3MoZGV2aWNlOiBEZXZpY2UpOiBzdHJpbmcge1xuICAgIGxldCBkaXNwbGF5TmFtZSA9ICcnO1xuICAgIFxuICAgIGlmIChkZXZpY2UuY3VzdG9tTmFtZSAmJiBkZXZpY2UuY3VzdG9tTmFtZS50cmltKCkpIHtcbiAgICAgIGRpc3BsYXlOYW1lID0gZGV2aWNlLmN1c3RvbU5hbWU7XG4gICAgfSBlbHNlIGlmIChkZXZpY2UubmFtZSAmJiBkZXZpY2UubmFtZSAhPT0gJ1Vua25vd24gRGV2aWNlJykge1xuICAgICAgZGlzcGxheU5hbWUgPSBkZXZpY2UubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlcmlhbCA9IERldmljZXNTZXJ2aWNlLmV4dHJhY3RTZXJpYWxOdW1iZXIoZGV2aWNlKTtcbiAgICBpZiAoc2VyaWFsKSB7XG4gICAgICAgIGRpc3BsYXlOYW1lID0gc2VyaWFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheU5hbWUgPSAnVW5rbm93biBEZXZpY2UnO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBBcHBseSBjaGFyYWN0ZXIgbGltaXRcbiAgICBpZiAoZGlzcGxheU5hbWUubGVuZ3RoID4gMTUpIHtcbiAgICAgIGRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWUuc3Vic3RyaW5nKDAsIDE1KTtcbiAgICB9XG4gICAgXG4gICAgLy8gUmV0dXJuIGFwcHJvcHJpYXRlIHRleHQgc2l6ZSBjbGFzc1xuICAgIGlmIChkaXNwbGF5TmFtZS5sZW5ndGggPD0gOCkge1xuICAgICAgcmV0dXJuICd0ZXh0LWJhc2UnOyAvLyBOb3JtYWwgc2l6ZVxuICAgIH0gZWxzZSBpZiAoZGlzcGxheU5hbWUubGVuZ3RoIDw9IDEyKSB7XG4gICAgICByZXR1cm4gJ3RleHQtc20nOyAvLyBTbWFsbFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3RleHQteHMnOyAvLyBFeHRyYSBzbWFsbFxuICAgIH1cbiAgfVxufVxuIiwiLyoqXHJcbiAqIFRhY3RpY2FsIFRyYXBzIEJsdWV0b290aCBMb2NrIEFwcFxyXG4gKiAoYykgMjAxOS0yMDIyIFRhY3RpY2FsIFRyYXBzIGh0dHBzOi8vd3d3LnRhY3RpY2FsdHJhcHMuY29tL1xyXG4gKiBMaWNlbnNlOiBQcm9wcmlldGFyeSwgYnkgcGVybWlzc2lvbiBvbmx5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmVmZXJlbmNlcyB9IGZyb20gJ0BjYXBhY2l0b3IvcHJlZmVyZW5jZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NrUGFyYW1ldGVycyB7XHJcbiAgc2VyaWFsTnVtYmVyOiBzdHJpbmc7XHJcbiAgcGluOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTG9ja0RhdGFFcnJvcnMgPSB7XHJcbiAgU1VDQ0VTUzogMCxcclxuICBOQVRJVkVfV1JJVEVfRkFJTEVEOiAxLFxyXG4gIElURU1fTk9UX0ZPVU5EOiAyLFxyXG4gIE5VTExfUkVGRVJFTkNFOiAzLFxyXG4gIFVOREVGSU5FRF9UWVBFOiA0LFxyXG4gIEpTT05fRVJST1I6IDUsXHJcbiAgV1JPTkdfUEFSQU1FVEVSOiA2LFxyXG4gIERVUExJQ0FURV9LRVk6IDcsXHJcbiAgQkFEX05BTUU6IDgsXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2tEYXRhUmVzdWx0IHtcclxuICBjb2RlOiBudW1iZXI7XHJcbiAgZXhjZXB0aW9uPzogc3RyaW5nO1xyXG4gIHNvdXJjZT86IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2tEYXRhU2VydmljZSB7XHJcbiAgbG9ja3M6IExvY2tQYXJhbWV0ZXJzW10gPSBbXTtcclxuICBibG9ja2luZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3N0YXR1c01lc3NhZ2VIYW5kbGVyOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkID0gKHg6IHN0cmluZykgPT4ge307IC8vIERlZmF1bHQgaGFuZGxlclxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdQaW4gU3RvcmUgU2VydmljZSBpbml0aWFsaXppbmcnKTtcclxuICB9XHJcblxyXG4gIC8qIENhbGwgYXQgc3RhcnR1cCB0byBsb2FkIGFueSBleGlzdGluZyBQaW4gcGFpcnMuIFJldHVybiBhIFByb21pc2UgcHJvZHVjaW5nXHJcbiAgICogZWl0aGVyIFRSVUUgb3IgYW4gZXJyb3IgbWVzc2FnZS5cclxuICAgKi9cclxuICBzZXR1cChzdGF0dXNNZXNzYWdlSGFuZGxlcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKHN0YXR1c01lc3NhZ2VIYW5kbGVyKSB7XHJcbiAgICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyID0gc3RhdHVzTWVzc2FnZUhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlcignbG9jay1kYXRhOiBhY3RpdmF0ZScpO1xyXG4gIH1cclxuXHJcbiAgbWFrZUxvY2soc2VyaWFsTnVtYmVyOiBzdHJpbmcsIHBpbjogc3RyaW5nKTogTG9ja1BhcmFtZXRlcnMge1xyXG4gICAgcmV0dXJuIHsgc2VyaWFsTnVtYmVyLCBwaW4sIG5hbWU6ICcnIH07XHJcbiAgfVxyXG5cclxuICBoZXhCeXRlKG46IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKCcwJyArIG4udG9TdHJpbmcoMTYpKS5zdWJzdHIoLTIsIDIpLnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICAvKiBjbGVhciB0aGUgc3RvcmUgb2YgYW55IGV4aXN0aW5nIHNlcmlhbC9QSU4gcGFpcnMgKi9cclxuICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBQcmVmZXJlbmNlcy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBkZXZpY2UgYWxyZWFkeSBleGlzdHMuXHJcbiAgICogQHBhcmFtIG5hbWUgZGV2aWNlIGlkIGZvdW5kIGJ5IHNjYW5uaW5nXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+LCByZWplY3RzIHdpdGggTG9ja0RhdGFFcnJvclxyXG4gICAqL1xyXG4gIGdldEF1dGhvcml6YXRpb24obmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKGBnZXRBdXRob3JpemF0aW9uIGZvciBcIiR7bmFtZX1cImApO1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xyXG4gICAgICAgIGV4Y2VwdGlvbjogYGdldEF1dGhvcml6YXRpb246IGJhZCBuYW1lIFwiJHtuYW1lfVwiYCxcclxuICAgICAgICBjb2RlOiBMb2NrRGF0YUVycm9ycy5CQURfTkFNRSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJlZmVyZW5jZXMuZ2V0KHsga2V5OiBuYW1lIH0pLnRoZW4oKHYpID0+IHtcclxuICAgICAgaWYgKHYudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyB7IGNvZGU6IExvY2tEYXRhRXJyb3JzLklURU1fTk9UX0ZPVU5EIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHYudmFsdWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBBZGQgYSBuZXcgZGV2aWNlIHRvIHBlcm1hbmVudCBzdG9yYWdlLlxyXG4gICAqIEBwYXJhbSBsb2NrIHRhcmdldCBkZXZpY2VcclxuICAgKiBAcmV0dXJucyByZXN1bHQgb2Ygc3RvcmFnZSBzYXZlIGFzIFByb21pc2Ugb2YgTG9ja0RhdGFFcnJvcnNcclxuICAgKi9cclxuICBhZGRBdXRob3JpemF0aW9uKGxvY2s6IExvY2tQYXJhbWV0ZXJzKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICBgTG9ja0RhdGEgYWRkRGV2aWNlIFwiJHtsb2NrLnNlcmlhbE51bWJlcn1cIiwgXCIke2xvY2sucGlufVwiYFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdXRob3JpemF0aW9uKGxvY2suc2VyaWFsTnVtYmVyKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoJyoqKiBlcnJvcjogYWRkaW5nIGR1cGxpY2F0ZSBkZXZpY2UnKTtcclxuICAgICAgICBhbGVydCgnTG9ja0RhdGE6IGFkZGluZyBkdXBsaWNhdGUgZGV2aWNlJyk7XHJcbiAgICAgICAgcmV0dXJuIExvY2tEYXRhRXJyb3JzLkRVUExJQ0FURV9LRVk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFByZWZlcmVuY2VzLnNldCh7XHJcbiAgICAgICAgICBrZXk6IGxvY2suc2VyaWFsTnVtYmVyLFxyXG4gICAgICAgICAgdmFsdWU6IGxvY2sucGluLFxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIExvY2tEYXRhRXJyb3JzLlNVQ0NFU1M7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlcihKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoTG9ja0RhdGFFcnJvcnMuTkFUSVZFX1dSSVRFX0ZBSUxFRCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhbiBhcmJpdHJhcnkgaXRlbSBmcm9tIHN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIG5hbWVcclxuICAgKiBAcmV0dXJucyBQcm9taXNlIG9mIHN0cmluZyBvciBMb2NrRGF0YVJlc3VsdFxyXG4gICAqL1xyXG4gIGdldFZhbHVlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlcihgZ2V0VmFsdWUgZm9yIFwiJHtuYW1lfVwiYCk7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XHJcbiAgICAgICAgZXhjZXB0aW9uOiBgZ2V0VmFsdWU6IGJhZCBuYW1lIFwiJHtuYW1lfVwiYCxcclxuICAgICAgICBjb2RlOiBMb2NrRGF0YUVycm9ycy5CQURfTkFNRSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJlZmVyZW5jZXMuZ2V0KHsga2V5OiBuYW1lIH0pLnRoZW4oKHYpID0+IHtcclxuICAgICAgaWYgKHYudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyB7IGNvZGU6IExvY2tEYXRhRXJyb3JzLklURU1fTk9UX0ZPVU5EIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHYudmFsdWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEpzb25WYWx1ZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUobmFtZSkudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcclxuICAgICAgICAvLyBFeHBsaWNpdGx5IHR5cGUgYXMgdW5rbm93blxyXG4gICAgICAgIC8vIFR5cGUgZ3VhcmQgdG8gY2hlY2sgaWYgZSBpcyBhbiBFcnJvclxyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlLm1lc3NhZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGU7IC8vIElmIGUgaXMgYSBzdHJpbmcsIHVzZSBpdCBkaXJlY3RseVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnVW5rbm93biBlcnJvciBvY2N1cnJlZCc7IC8vIEZhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IHsgY29kZTogTG9ja0RhdGFFcnJvcnMuSlNPTl9FUlJPUiwgZXhjZXB0aW9uOiBlcnJvck1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IGFyYml0cmFyeSA8a2V5IDo6IHN0cmluZz4gaW4gc3RvcmFnZVxyXG4gICAqIEByZXR1cm5zIFByb21pc2UgdG8gc3VjY2VzcyBvciBMb2NrRGF0YVJlc3VsdFxyXG4gICAqL1xyXG4gIHNldFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybiBQcmVmZXJlbmNlcy5zZXQoeyBrZXksIHZhbHVlIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gTG9ja0RhdGFFcnJvcnMuU1VDQ0VTUztcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShMb2NrRGF0YUVycm9ycy5OQVRJVkVfV1JJVEVfRkFJTEVEKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IGFyYml0cmFyeSA8a2V5IDo6IG9iamVjdD4gaW4gc3RvcmFnZVxyXG4gICAqIEByZXR1cm5zIFByb21pc2UgdG8gc3VjY2VzcyBvciBMb2NrRGF0YVJlc3VsdFxyXG4gICAqL1xyXG4gIHNldEpzb25WYWx1ZShuYW1lOiBzdHJpbmcsIG9iamVjdDogYW55KTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLnNldFZhbHVlKG5hbWUsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlbW92ZSBhIGRldmljZSdzIGF1dGhvcml6YXRpb24gKFBJTikgZnJvbSBzdG9yYWdlLiAqL1xyXG4gIHJlbW92ZUF1dGhvcml6YXRpb24obmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlcihgcmVtb3ZlQXV0aG9yaXphdGlvbiBmb3IgXCIke25hbWV9XCJgKTtcclxuICAgIHJldHVybiBQcmVmZXJlbmNlcy5yZW1vdmUoeyBrZXk6IG5hbWUgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUYWN0aWNhbCBUcmFwcyBCbHVldG9vdGggTG9jayBBcHBcclxuICogKGMpIDIwMTktMjAyMiBUYWN0aWNhbCBUcmFwcyBodHRwczovL3d3dy50YWN0aWNhbHRyYXBzLmNvbS9cclxuICogTGljZW5zZTogUHJvcHJpZXRhcnksIGJ5IHBlcm1pc3Npb24gb25seVxyXG4gKi9cclxuXHJcbi8qKiBEeW5hbWljUXVldWVcclxuICpcclxuICogQSBjbGFzcyBkZXNpZ25lZCB0byBxdWV1ZSBQcm9taXNlLXJldHVybmluZyBmdW5jdGlvbnMgZm9yXHJcbiAqIHNlcXVlbnRpYWwgZXhlY3V0aW9uLlxyXG4gKi9cclxuXHJcbmludGVyZmFjZSBRdWV1ZUl0ZW08VCA9IGFueT4ge1xyXG4gIG9wZXJhdGlvbjogKCkgPT4gUHJvbWlzZTxUPjsgLy8gRnVuY3Rpb24gcmV0dXJuaW5nIGEgUHJvbWlzZSB3aXRoIGdlbmVyaWMgdHlwZSBUXHJcbiAgcmVzb2x2ZTogKHZhbHVlOiBUKSA9PiB2b2lkOyAvLyBSZXNvbHZlIGZ1bmN0aW9uIHdpdGggdHlwZWQgdmFsdWVcclxuICByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7IC8vIFJlamVjdCBmdW5jdGlvbiB3aXRoIG9wdGlvbmFsIHJlYXNvblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1F1ZXVlIHtcclxuICBwcml2YXRlIHF1ZXVlOiBRdWV1ZUl0ZW1bXSA9IFtdOyAvLyBUeXBlZCBhcnJheSBvZiBRdWV1ZUl0ZW1cclxuICBwcml2YXRlIHBlbmRpbmdQcm9taXNlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB3b3JraW5nT25Qcm9taXNlID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZsdXNoZXMgdGhlIHF1ZXVlIGJ5IGNsZWFyaW5nIGFsbCBpdGVtcy5cclxuICAgKi9cclxuICBmbHVzaCgpOiB2b2lkIHtcclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIHRoZSBxdWV1ZSBmb3IgZXhlY3V0aW9uOyByZXR1cm4gYW4gZW5jbG9zaW5nIFByb21pc2UuXHJcbiAgICogVGhlIHNlY29uZGFyeSBQcm9taXNlIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBmdW5jdGlvbidzIFByb21pc2UgY2FuIG9ubHlcclxuICAgKiBiZSBzZWN1cmVkIGJ5IGJlZ2lubmluZyBleGVjdXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3BlcmF0aW9uIC0gVGhlIFByb21pc2UtcmV0dXJuaW5nIGZ1bmN0aW9uIHRvIGVucXVldWVcclxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgb3BlcmF0aW9uJ3MgcmVzdWx0XHJcbiAgICovXHJcbiAgZW5xdWV1ZTxUID0gYW55PihvcGVyYXRpb246ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMucXVldWUucHVzaCh7XHJcbiAgICAgICAgb3BlcmF0aW9uLFxyXG4gICAgICAgIHJlc29sdmUsXHJcbiAgICAgICAgcmVqZWN0LFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5kZXF1ZXVlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBJZiBub3QgYnVzeSwgcHVsbCB0aGUgbmV4dCBmdW5jdGlvbiBmcm9tIHRoZSBxdWV1ZSBhbmQgZXhlY3V0ZSBpdC4gV2hlbiB0aGVcclxuICAgKiBwcm9taXNlIGNvbXBsZXRlcywgdGhlIG5leHQgaXRlbSBpcyByZWN1cnNpdmVseSBzdGFydGVkLiBSZXBlYXRzIHVudGlsXHJcbiAgICogdGhlIHF1ZXVlIGlzIGVtcHR5LiBXaXRoIHByb21pc2VzLCB0aGUgZW5xdWV1ZWluZyB0YXNrIG9ubHkgbmVlZHMgdG9cclxuICAgKiBpbnZva2UgZGVxdWV1ZSgpIHdoZW4gaXQgcHVzaGVzIG9udG8gYW4gZW1wdHkgcXVldWUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBib29sZWFuIGluZGljYXRpbmcgaWYgYW4gaXRlbSB3YXMgZGVxdWV1ZWRcclxuICAgKi9cclxuICBwcml2YXRlIGRlcXVldWUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy53b3JraW5nT25Qcm9taXNlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XHJcbiAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy53b3JraW5nT25Qcm9taXNlID0gdHJ1ZTtcclxuICAgICAgaXRlbVxyXG4gICAgICAgIC5vcGVyYXRpb24oKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAvLyBFeHBsaWNpdGx5IHR5cGVkIHZhbHVlLCBjYW4gYmUgcmVmaW5lZCB3aXRoIFRcclxuICAgICAgICAgIHRoaXMud29ya2luZ09uUHJvbWlzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaXRlbS5yZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuZGVxdWV1ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgLy8gRXhwbGljaXRseSB0eXBlZCBlcnIsIGNhbiBiZSByZWZpbmVkXHJcbiAgICAgICAgICB0aGlzLndvcmtpbmdPblByb21pc2UgPSBmYWxzZTtcclxuICAgICAgICAgIGl0ZW0ucmVqZWN0KGVycik7XHJcbiAgICAgICAgICB0aGlzLmRlcXVldWUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgIHRoaXMud29ya2luZ09uUHJvbWlzZSA9IGZhbHNlO1xyXG4gICAgICBpdGVtLnJlamVjdChlcnIpO1xyXG4gICAgICB0aGlzLmRlcXVldWUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1F1ZXVlO1xyXG4iLCIvLyBUaGlzIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGR1cmluZyBidWlsZCBieSB1c2luZyB0aGUgYGZpbGVSZXBsYWNlbWVudHNgIGFycmF5LlxyXG4vLyBgbmcgYnVpbGQgLS1wcm9kYCByZXBsYWNlcyBgZW52aXJvbm1lbnQudHNgIHdpdGggYGVudmlyb25tZW50LnByb2QudHNgLlxyXG4vLyBUaGUgbGlzdCBvZiBmaWxlIHJlcGxhY2VtZW50cyBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXIuanNvbmAuXHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcbiAgcHJvZHVjdGlvbjogZmFsc2VcclxufTtcclxuXHJcbi8qXHJcbiAqIEZvciBlYXNpZXIgZGVidWdnaW5nIGluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBjYW4gaW1wb3J0IHRoZSBmb2xsb3dpbmcgZmlsZVxyXG4gKiB0byBpZ25vcmUgem9uZSByZWxhdGVkIGVycm9yIHN0YWNrIGZyYW1lcyBzdWNoIGFzIGB6b25lLnJ1bmAsIGB6b25lRGVsZWdhdGUuaW52b2tlVGFza2AuXHJcbiAqXHJcbiAqIFRoaXMgaW1wb3J0IHNob3VsZCBiZSBjb21tZW50ZWQgb3V0IGluIHByb2R1Y3Rpb24gbW9kZSBiZWNhdXNlIGl0IHdpbGwgaGF2ZSBhIG5lZ2F0aXZlIGltcGFjdFxyXG4gKiBvbiBwZXJmb3JtYW5jZSBpZiBhbiBlcnJvciBpcyB0aHJvd24uXHJcbiAqL1xyXG4vLyBpbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lLWVycm9yJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXHJcbiIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICBlbmFibGVQcm9kTW9kZSgpO1xyXG59XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW9uLWFjY29yZGlvbl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ3NTE4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYWNjb3JkaW9uXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWFjdGlvbi1zaGVldC5lbnRyeS5qc1wiOiBbXG5cdFx0MTk4MSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFjdGlvbi1zaGVldF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYWxlcnQuZW50cnkuanNcIjogW1xuXHRcdDE2MDMsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hbGVydF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYXBwXzguZW50cnkuanNcIjogW1xuXHRcdDIyNzMsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hcHBfOF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYXZhdGFyXzMuZW50cnkuanNcIjogW1xuXHRcdDk2NDIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYXZhdGFyXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJhY2stYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQyMDk1LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYmFjay1idXR0b25fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJhY2tkcm9wLmVudHJ5LmpzXCI6IFtcblx0XHQyMzM1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJhY2tkcm9wX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1icmVhZGNydW1iXzIuZW50cnkuanNcIjogW1xuXHRcdDgyMjEsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1icmVhZGNydW1iXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJ1dHRvbl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ3MTg0LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJ1dHRvbl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jYXJkXzUuZW50cnkuanNcIjogW1xuXHRcdDg3NTksXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tY2FyZF81X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jaGVja2JveC5lbnRyeS5qc1wiOiBbXG5cdFx0NDI0OCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGVja2JveF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2hpcC5lbnRyeS5qc1wiOiBbXG5cdFx0OTg2Myxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGlwX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jb2xfMy5lbnRyeS5qc1wiOiBbXG5cdFx0MTc2OSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jb2xfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWUtYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQyNTY5LFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9kYXRhLUdJc0hzWUlCX2pzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tZGF0ZXRpbWUtYnV0dG9uX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1kYXRldGltZV8zLmVudHJ5LmpzXCI6IFtcblx0XHQ2NTM0LFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9kYXRhLUdJc0hzWUlCX2pzXCIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1kYXRldGltZV8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1mYWJfMy5lbnRyeS5qc1wiOiBbXG5cdFx0NTQ1OCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWZhYl8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pbWcuZW50cnkuanNcIjogW1xuXHRcdDY1NCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbWdfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWluZmluaXRlLXNjcm9sbF8yLmVudHJ5LmpzXCI6IFtcblx0XHQ2MDM0LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taW5maW5pdGUtc2Nyb2xsXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWlucHV0LW90cC5lbnRyeS5qc1wiOiBbXG5cdFx0MzgxLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taW5wdXQtb3RwX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pbnB1dC1wYXNzd29yZC10b2dnbGUuZW50cnkuanNcIjogW1xuXHRcdDUxOTYsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbnB1dC1wYXNzd29yZC10b2dnbGVfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWlucHV0LmVudHJ5LmpzXCI6IFtcblx0XHQ3NjEsXG5cdFx0XCJkZWZhdWx0LW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lucHV0X3V0aWxzLXpXaWpOQ3J4X2pzLW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3QtMmUwOTk0XCIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbnB1dF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taXRlbS1vcHRpb25fMy5lbnRyeS5qc1wiOiBbXG5cdFx0NjQ5Mixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWl0ZW0tb3B0aW9uXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWl0ZW1fOC5lbnRyeS5qc1wiOiBbXG5cdFx0OTU1Nyxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWl0ZW1fOF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbG9hZGluZy5lbnRyeS5qc1wiOiBbXG5cdFx0ODM1Myxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWxvYWRpbmdfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLW1lbnVfMy5lbnRyeS5qc1wiOiBbXG5cdFx0MTAyNCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW1lbnVfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbW9kYWwuZW50cnkuanNcIjogW1xuXHRcdDkxNjAsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1tb2RhbF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbmF2XzIuZW50cnkuanNcIjogW1xuXHRcdDM5Myxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1uYXZfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcGlja2VyLWNvbHVtbi1vcHRpb24uZW50cnkuanNcIjogW1xuXHRcdDg0NDIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcGlja2VyLWNvbHVtbi1vcHRpb25fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBpY2tlci1jb2x1bW4uZW50cnkuanNcIjogW1xuXHRcdDMxMTAsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXItY29sdW1uX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1waWNrZXIuZW50cnkuanNcIjogW1xuXHRcdDU1NzUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcGlja2VyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1wb3BvdmVyLmVudHJ5LmpzXCI6IFtcblx0XHQ2NzcyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcG9wb3Zlcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcHJvZ3Jlc3MtYmFyLmVudHJ5LmpzXCI6IFtcblx0XHQ0ODEwLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXByb2dyZXNzLWJhcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmFkaW9fMi5lbnRyeS5qc1wiOiBbXG5cdFx0NDYzOSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJhZGlvXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJhbmdlLmVudHJ5LmpzXCI6IFtcblx0XHQ2MjgsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yYW5nZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmVmcmVzaGVyXzIuZW50cnkuanNcIjogW1xuXHRcdDg1Mixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJlZnJlc2hlcl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yZW9yZGVyXzIuZW50cnkuanNcIjogW1xuXHRcdDE0NzksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yZW9yZGVyXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJpcHBsZS1lZmZlY3QuZW50cnkuanNcIjogW1xuXHRcdDQwNjUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmlwcGxlLWVmZmVjdF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcm91dGVfNC5lbnRyeS5qc1wiOiBbXG5cdFx0Nzk3MSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yb3V0ZV80X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zZWFyY2hiYXIuZW50cnkuanNcIjogW1xuXHRcdDMxODQsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWFyY2hiYXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlZ21lbnQtY29udGVudC5lbnRyeS5qc1wiOiBbXG5cdFx0NDMxMixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWdtZW50LWNvbnRlbnRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlZ21lbnQtdmlldy5lbnRyeS5qc1wiOiBbXG5cdFx0NDU0MCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWdtZW50LXZpZXdfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlZ21lbnRfMi5lbnRyeS5qc1wiOiBbXG5cdFx0NDY5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2VnbWVudF8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zZWxlY3QtbW9kYWwuZW50cnkuanNcIjogW1xuXHRcdDcxMDEsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2VsZWN0LW1vZGFsX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zZWxlY3RfMy5lbnRyeS5qc1wiOiBbXG5cdFx0ODQ3MSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlbGVjdF8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zcGlubmVyLmVudHJ5LmpzXCI6IFtcblx0XHQzODgsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zcGlubmVyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zcGxpdC1wYW5lLmVudHJ5LmpzXCI6IFtcblx0XHQyMzkyLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNwbGl0LXBhbmVfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRhYi1iYXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0NjA1OSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRhYi1iYXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGFiXzIuZW50cnkuanNcIjogW1xuXHRcdDU0MjcsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGFiXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRleHQuZW50cnkuanNcIjogW1xuXHRcdDE5OCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10ZXh0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10ZXh0YXJlYS5lbnRyeS5qc1wiOiBbXG5cdFx0MTczNSxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW5wdXRfdXRpbHMteldpak5DcnhfanMtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdC0yZTA5OTRcIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10ZXh0YXJlYV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdG9hc3QuZW50cnkuanNcIjogW1xuXHRcdDc1MTAsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10b2FzdF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdG9nZ2xlLmVudHJ5LmpzXCI6IFtcblx0XHQ1Mjk3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdG9nZ2xlX2VudHJ5X2pzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gODk5Njtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDQxNDA7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4gICAgLmVkaXQtbmFtZS1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cblxuICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIC5uYW1lLWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG5cbiAgICAuY2hhci1jb3VudCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTZweDtcbiAgICAgIGJvdHRvbTogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgIC5jaGFyLWNvdW50Lndhcm5pbmcge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgICB9XG5cbiAgICAuZGV2aWNlLWluZm8ge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC5pbmZvLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLmxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC52YWx1ZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG5cbiAgICAuc2F2ZS1idXR0b24ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBtYXJnaW46IDAgMTZweCAxNnB4IDE2cHg7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cbiAgXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1Wa2FYUXRibUZ0WlMxdGIyUmhiQzVqYjIxd2IyNWxiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0SlFVTkpPMDFCUTBVc1pVRkJaVHRKUVVOcVFqczdTVUZGUVR0TlFVTkZMR3RDUVVGclFqdE5RVU5zUWl4dFFrRkJiVUk3U1VGRGNrSTdPMGxCUlVFN1RVRkRSU3h4UWtGQmNVSTdUVUZEY2tJc2JVSkJRVzFDTzAxQlEyNUNMRzFDUVVGdFFqdE5RVU51UWl4elFrRkJjMEk3VFVGRGRFSXNiMEpCUVc5Q08wMUJRM0JDTEcxQ1FVRnRRanROUVVOdVFpeDFRMEZCZFVNN1RVRkRka01zYjBOQlFXOURPMDFCUTNCRExHVkJRV1U3U1VGRGFrSTdPMGxCUlVFN1RVRkRSU3hyUWtGQmEwSTdUVUZEYkVJc1YwRkJWenROUVVOWUxGbEJRVms3VFVGRFdpeGxRVUZsTzAxQlEyWXNPRUpCUVRoQ08wMUJRemxDTEd0RFFVRnJRenROUVVOc1F5eG5Ra0ZCWjBJN1RVRkRhRUlzYTBKQlFXdENPMGxCUTNCQ096dEpRVVZCTzAxQlEwVXNLMEpCUVN0Q08wbEJRMnBET3p0SlFVVkJPMDFCUTBVc2EwTkJRV3RETzAxQlEyeERMR3RDUVVGclFqdE5RVU5zUWl4aFFVRmhPMDFCUTJJc1owSkJRV2RDTzBsQlEyeENPenRKUVVWQk8wMUJRMFVzWVVGQllUdE5RVU5pTERoQ1FVRTRRanROUVVNNVFpeHRRa0ZCYlVJN1RVRkRia0lzYTBKQlFXdENPMGxCUTNCQ096dEpRVVZCTzAxQlEwVXNaMEpCUVdkQ08wbEJRMnhDT3p0SlFVVkJPMDFCUTBVc1owSkJRV2RDTzAxQlEyaENMRFJDUVVFMFFqdE5RVU0xUWl4bFFVRmxPMGxCUTJwQ096dEpRVVZCTzAxQlEwVXNPRUpCUVRoQ08wMUJRemxDTEdWQlFXVTdUVUZEWml4cFFrRkJhVUk3VFVGRGFrSXNjVUpCUVhGQ08wbEJRM1pDT3p0SlFVVkJPMDFCUTBVc2IwSkJRVzlDTzAxQlEzQkNMSGRDUVVGM1FqdEpRVU14UWpzN1NVRkZRVHROUVVORkxHOURRVUZ2UXp0TlFVTndReXh6UTBGQmMwTTdTVUZEZUVNN08wbEJSVUU3VFVGRFJTeHZRMEZCYjBNN1RVRkRjRU1zYzBOQlFYTkRPMGxCUTNoRElpd2labWxzWlNJNkltVmthWFF0Ym1GdFpTMXRiMlJoYkM1amIyMXdiMjVsYm5RdWRITWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpjYmlBZ0lDQXVaV1JwZEMxdVlXMWxMV052Ym5SaGFXNWxjaUI3WEc0Z0lDQWdJQ0J3WVdSa2FXNW5PaUF4Tm5CNElEQTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0xtbHVjSFYwTFdkeWIzVndJSHRjYmlBZ0lDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHRjYmlBZ0lDQWdJRzFoY21kcGJpMWliM1IwYjIwNklESTBjSGc3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMbTVoYldVdGFXNXdkWFFnZTF4dUlDQWdJQ0FnTFMxd1lXUmthVzVuTFhOMFlYSjBPaUF4Tm5CNE8xeHVJQ0FnSUNBZ0xTMXdZV1JrYVc1bkxXVnVaRG9nTVRad2VEdGNiaUFnSUNBZ0lDMHRjR0ZrWkdsdVp5MTBiM0E2SURFeWNIZzdYRzRnSUNBZ0lDQXRMWEJoWkdScGJtY3RZbTkwZEc5dE9pQXhNbkI0TzF4dUlDQWdJQ0FnTFMxaWIzSmtaWEl0Y21Ga2FYVnpPaUE0Y0hnN1hHNGdJQ0FnSUNBdExXSnZjbVJsY2kxM2FXUjBhRG9nTVhCNE8xeHVJQ0FnSUNBZ0xTMWliM0prWlhJdFkyOXNiM0k2SUhaaGNpZ3RMV2x2YmkxamIyeHZjaTF0WldScGRXMHBPMXh1SUNBZ0lDQWdMUzFpWVdOclozSnZkVzVrT2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0YkdsbmFIUXBPMXh1SUNBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nT0hCNE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM1amFHRnlMV052ZFc1MElIdGNiaUFnSUNBZ0lIQnZjMmwwYVc5dU9pQmhZbk52YkhWMFpUdGNiaUFnSUNBZ0lISnBaMmgwT2lBeE5uQjRPMXh1SUNBZ0lDQWdZbTkwZEc5dE9pQXhNbkI0TzF4dUlDQWdJQ0FnWm05dWRDMXphWHBsT2lBeE1uQjRPMXh1SUNBZ0lDQWdZMjlzYjNJNklIWmhjaWd0TFdsdmJpMWpiMnh2Y2kxdFpXUnBkVzBwTzF4dUlDQWdJQ0FnWW1GamEyZHliM1Z1WkRvZ2RtRnlLQzB0YVc5dUxXTnZiRzl5TFd4cFoyaDBLVHRjYmlBZ0lDQWdJSEJoWkdScGJtYzZJREp3ZUNBMmNIZzdYRzRnSUNBZ0lDQmliM0prWlhJdGNtRmthWFZ6T2lBMGNIZzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0xtTm9ZWEl0WTI5MWJuUXVkMkZ5Ym1sdVp5QjdYRzRnSUNBZ0lDQmpiMnh2Y2pvZ2RtRnlLQzB0YVc5dUxXTnZiRzl5TFhkaGNtNXBibWNwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzVrWlhacFkyVXRhVzVtYnlCN1hHNGdJQ0FnSUNCaVlXTnJaM0p2ZFc1a09pQjJZWElvTFMxcGIyNHRZMjlzYjNJdGJHbG5hSFFwTzF4dUlDQWdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dPSEI0TzF4dUlDQWdJQ0FnY0dGa1pHbHVaem9nTVRad2VEdGNiaUFnSUNBZ0lHMWhjbWRwYmkxMGIzQTZJREUyY0hnN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTG1sdVptOHRhWFJsYlNCN1hHNGdJQ0FnSUNCa2FYTndiR0Y1T2lCbWJHVjRPMXh1SUNBZ0lDQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQnpjR0ZqWlMxaVpYUjNaV1Z1TzF4dUlDQWdJQ0FnWVd4cFoyNHRhWFJsYlhNNklHTmxiblJsY2p0Y2JpQWdJQ0FnSUcxaGNtZHBiaTFpYjNSMGIyMDZJRGh3ZUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F1YVc1bWJ5MXBkR1Z0T214aGMzUXRZMmhwYkdRZ2UxeHVJQ0FnSUNBZ2JXRnlaMmx1TFdKdmRIUnZiVG9nTUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F1YkdGaVpXd2dlMXh1SUNBZ0lDQWdabTl1ZEMxM1pXbG5hSFE2SURVd01EdGNiaUFnSUNBZ0lHTnZiRzl5T2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0WkdGeWF5azdYRzRnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREUwY0hnN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTG5aaGJIVmxJSHRjYmlBZ0lDQWdJR052Ykc5eU9pQjJZWElvTFMxcGIyNHRZMjlzYjNJdGJXVmthWFZ0S1R0Y2JpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01UUndlRHRjYmlBZ0lDQWdJSFJsZUhRdFlXeHBaMjQ2SUhKcFoyaDBPMXh1SUNBZ0lDQWdkMjl5WkMxaWNtVmhhem9nWW5KbFlXc3RZV3hzTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzV6WVhabExXSjFkSFJ2YmlCN1hHNGdJQ0FnSUNBdExXSnZjbVJsY2kxeVlXUnBkWE02SURod2VEdGNiaUFnSUNBZ0lHMWhjbWRwYmpvZ01DQXhObkI0SURFMmNIZ2dNVFp3ZUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwYjI0dGFHVmhaR1Z5SUdsdmJpMTBiMjlzWW1GeUlIdGNiaUFnSUNBZ0lDMHRZbUZqYTJkeWIzVnVaRG9nZG1GeUtDMHRhVzl1TFdOdmJHOXlMV3hwWjJoMEtUdGNiaUFnSUNBZ0lDMHRZbTl5WkdWeUxXTnZiRzl5T2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0YkdsbmFIUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbHZiaTFtYjI5MFpYSWdhVzl1TFhSdmIyeGlZWElnZTF4dUlDQWdJQ0FnTFMxaVlXTnJaM0p2ZFc1a09pQjJZWElvTFMxcGIyNHRZMjlzYjNJdGJHbG5hSFFwTzF4dUlDQWdJQ0FnTFMxaWIzSmtaWEl0WTI5c2IzSTZJSFpoY2lndExXbHZiaTFqYjJ4dmNpMXNhV2RvZENrN1hHNGdJQ0FnZlZ4dUlDQWlYWDA9ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2hvbWUvZWRpdC1uYW1lLW1vZGFsLmNvbXBvbmVudC50c1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0lBQ0k7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLHNCQUFzQjtNQUN0QixvQkFBb0I7TUFDcEIsbUJBQW1CO01BQ25CLHVDQUF1QztNQUN2QyxvQ0FBb0M7TUFDcEMsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7TUFDZiw4QkFBOEI7TUFDOUIsa0NBQWtDO01BQ2xDLGdCQUFnQjtNQUNoQixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSwrQkFBK0I7SUFDakM7O0lBRUE7TUFDRSxrQ0FBa0M7TUFDbEMsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsNEJBQTRCO01BQzVCLGVBQWU7SUFDakI7O0lBRUE7TUFDRSw4QkFBOEI7TUFDOUIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixxQkFBcUI7SUFDdkI7O0lBRUE7TUFDRSxvQkFBb0I7TUFDcEIsd0JBQXdCO0lBQzFCOztJQUVBO01BQ0Usb0NBQW9DO01BQ3BDLHNDQUFzQztJQUN4Qzs7SUFFQTtNQUNFLG9DQUFvQztNQUNwQyxzQ0FBc0M7SUFDeEM7O0FBRUosdzVHQUF3NUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuICAgIC5lZGl0LW5hbWUtY29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LWdyb3VwIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgfVxcblxcbiAgICAubmFtZS1pbnB1dCB7XFxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XFxuICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIH1cXG5cXG4gICAgLmNoYXItY291bnQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMTZweDtcXG4gICAgICBib3R0b206IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xcbiAgICAgIHBhZGRpbmc6IDJweCA2cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuXFxuICAgIC5jaGFyLWNvdW50Lndhcm5pbmcge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XFxuICAgIH1cXG5cXG4gICAgLmRldmljZS1pbmZvIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLmluZm8taXRlbSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIH1cXG5cXG4gICAgLmluZm8taXRlbTpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIC5sYWJlbCB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcblxcbiAgICAudmFsdWUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICB9XFxuXFxuICAgIC5zYXZlLWJ1dHRvbiB7XFxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgbWFyZ2luOiAwIDE2cHggMTZweCAxNnB4O1xcbiAgICB9XFxuXFxuICAgIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcXG4gICAgfVxcblxcbiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyIHtcXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XFxuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XFxuICAgIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy50b1N0cmluZygpO1xuIl0sIm5hbWVzIjpbIk5nTW9kdWxlIiwiUHJlbG9hZEFsbE1vZHVsZXMiLCJSb3V0ZXJNb2R1bGUiLCJyb3V0ZXMiLCJwYXRoIiwibG9hZENoaWxkcmVuIiwidGhlbiIsIm0iLCJIb21lUGFnZU1vZHVsZSIsInJlZGlyZWN0VG8iLCJwYXRoTWF0Y2giLCJBcHBSb3V0aW5nTW9kdWxlIiwiX19kZWNvcmF0ZSIsImltcG9ydHMiLCJmb3JSb290IiwicHJlbG9hZGluZ1N0cmF0ZWd5IiwiZXhwb3J0cyIsIkNvbXBvbmVudCIsIlBsYXRmb3JtIiwiU3BsYXNoU2NyZWVuIiwiU3RhdHVzQmFyIiwiQXBwQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwbGF0Zm9ybSIsImluaXRpYWxpemVBcHAiLCJyZWFkeSIsInZhbCIsImhpZGUiLCJjbGlja3lDbGFzc2VzIiwid2luZG93IiwibmF0aXZlY2xpY2siLCJ3YXRjaCIsInNlbGVjdG9yIiwidGVtcGxhdGUiLCJfX05HX0NMSV9SRVNPVVJDRV9fMCIsIkZvcm1zTW9kdWxlIiwiQnJvd3Nlck1vZHVsZSIsIlJvdXRlUmV1c2VTdHJhdGVneSIsIkFuZHJvaWRQZXJtaXNzaW9ucyIsIklvbmljTW9kdWxlIiwiSW9uaWNSb3V0ZVN0cmF0ZWd5IiwiRWRpdE5hbWVNb2RhbENvbXBvbmVudCIsIkJMRSIsIkJsZVNlcnZpY2UiLCJEZXZpY2VzU2VydmljZSIsIkxvY2tEYXRhU2VydmljZSIsIkFwcE1vZHVsZSIsImRlY2xhcmF0aW9ucyIsInByb3ZpZGVycyIsInByb3ZpZGUiLCJ1c2VDbGFzcyIsImJvb3RzdHJhcCIsIkV2ZW50RW1pdHRlciIsIklucHV0IiwiT3V0cHV0IiwiTW9kYWxDb250cm9sbGVyIiwibW9kYWxDdHJsIiwiaW5pdGlhbE5hbWUiLCJzaG93RGV2aWNlSW5mbyIsInNhdmVOYW1lIiwiZGV2aWNlTmFtZSIsIm5nT25Jbml0Iiwib25JbnB1dENoYW5nZSIsImxlbmd0aCIsInN1YnN0cmluZyIsInNhdmUiLCJ0cmltbWVkTmFtZSIsInRyaW0iLCJlbWl0IiwiZGlzbWlzcyIsImNhbmNlbCIsIkluamVjdGFibGUiLCJEZXZpY2UiLCJTeXN0ZW0iLCJTdWJqZWN0IiwiRHluYW1pY1F1ZXVlIiwiQ01EIiwiQVNLIiwiRVhUIiwiU1VNIiwiREFUQSIsIlJBTkREQVRBIiwiQ01EX1N5c3RlbUV4aXQiLCJDTURfU3lzdGVtSW5pdCIsIkFTS19jb3JyZWN0IiwiQVNLX2ZhaWx1cmUiLCJBU0tfdGltZW91dCIsIkFTS191bmtub3duIiwiQVNLX2NoZWNrc3VtIiwiQVNLX3Bhc3N3b3JkX25vdF92ZXJpZmllZCIsIkFTS19mYWlsZWRfdmVyaWZpY2F0aW9uIiwiUmVzcG9uc2VNYXAiLCJFcnJvckNhdGVnb3JpZXMiLCJSZXRyeVN0cmF0ZWdpZXMiLCJtYXhSZXRyaWVzIiwiZGVsYXkiLCJJc0xvY2tlZCIsIklzVW5ob29rZWQiLCJJc0hvb2tlZCIsIkluYWN0aXZlRGlzY29ubmVjdFRpbWUiLCJBbmRyb2lkMTEiLCJhbmRyb2lkUGVybWlzc2lvbnMiLCJibGUiLCJkZXZpY2VJZCIsImNvbm5lY3RTdWJzY3JpYmVyIiwibm90aWZpY2F0aW9uU3Vic2NyaWJlciIsImNvbm5lY3RSZXBlYXRlciIsIm9wUXVldWUiLCJub3RpZmljYXRpb25IYW5kbGVyIiwibWVzc2FnZUhhbmRsZXIiLCJhbGVydEhhbmRsZXIiLCJ3cml0ZUxvY2tCdXN5IiwiTG9uZ1NlcnZpY2VVdWlkIiwiTG9uZ1N0YXR1c1V1aWQiLCJMb25nQ29tbWFuZFV1aWQiLCJMb25nQ29uZmlnVXVpZCIsImtlZXBBbGl2ZUludGVydmFsIiwibGFzdENvbm5lY3RlZERldmljZSIsInJlY29ubmVjdEF0dGVtcHRzIiwibWF4UmVjb25uZWN0QXR0ZW1wdHMiLCJQRVJNSVNTSU9OIiwiQkxVRVRPT1RIX0NPTk5FQ1QiLCJCTFVFVE9PVEhfU0NBTiIsInNldHVwIiwiX21lc3NhZ2VIYW5kbGVyIiwiX2FsZXJ0SGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJvc0RhdGFSZXF1ZXN0IiwiZ2V0SW5mbyIsInN0YW5kaW4iLCJpc0VuYWJsZWQiLCJhIiwiYiIsIlByb21pc2UiLCJyZWplY3QiLCJlbmFibGUiLCJzdGFydFNjYW4iLCJzdG9wU2NhbiIsImFsZXJ0IiwicSIsImlvc0VuYWJsZSIsImJpbmQiLCJpc0F2YWlsYWJsZSIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhdmFpbGFibGUiLCJkZXZpY2VJbmZvIiwib3BlcmF0aW5nU3lzdGVtIiwib3NWZXJzaW9uIiwiZSIsImVyciIsInJlc3VsdCIsImJsdWV0b290aCIsImxvY2F0aW9uIiwiY2hlY2tQZXJtaXNzaW9uIiwiQkxVRVRPT1RIIiwiaGFzUGVybWlzc2lvbiIsIkFDQ0VTU19GSU5FX0xPQ0FUSU9OIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3RQZXJtaXNzaW9uIiwic2NhbiIsImNvbm5lY3QiLCJ0aGF0Iiwibm90aWZpZXIiLCJzdGFydFN0YXRlTm90aWZpY2F0aW9ucyIsInJlc29sdmUiLCJzdGF0ZVdhdGNoZXIiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJzdGF0ZSIsImhhbmRsZWQiLCJjbGVhclRpbWVvdXQiLCJ1bnN1YnNjcmliZSIsInN0b3BTdGF0ZU5vdGlmaWNhdGlvbnMiLCJjYXRjaCIsInJlYXNvbiIsInNlcnZpY2VzIiwiY29ubmVjdFRvIiwic2NhbkRhdGEiLCJpZCIsInNlbGVjdFV1aWRzIiwib2JzIiwiX3JlZiIsInBlcmlwaGVyYWxEYXRhIiwibmFtZSIsIm5leHQiLCJmbHVzaCIsInN0YXJ0Tm90aWZpY2F0aW9uIiwiU2VydmljZVV1aWQiLCJTdGF0dXNVdWlkIiwidmFsdWUiLCJlcnJvciIsIm5vdGlmaWNhdGlvbkVycm9yIiwiYWRkIiwic3RhcnRLZWVwQWxpdmUiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3JlZjIiLCJjb25uZWN0RmFpbGVkIiwicHVyZ2VDb25uZWN0aW9uIiwic3RvcEtlZXBBbGl2ZSIsInRyeVJlY29ubmVjdCIsIl94MiIsInJlYWRhYmxlSGV4VG9CdWZmZXIiLCJzcGFjZVNlcGFyYXRlZEhleCIsIm4iLCJzcGxpdCIsImZvckVhY2giLCJ4IiwicHVzaCIsInBhcnNlSW50IiwiVWludDhBcnJheSIsImZyb20iLCJidWZmZXJUb1JlYWRhYmxlSGV4IiwiYnVmZmVyIiwiQXJyYXkiLCJtYXAiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsImlzTG9ja0J1c3kiLCJ3cml0ZVRvTG9jayIsImNvbW1hbmROYW1lIiwiY29tbWFuZCIsIl90aGlzMiIsInBlbmRpbmdSZXNvbHZlIiwicGVuZGluZ1JlamVjdCIsIm5vdGlmaWNhdGlvbkluamVjdG9yIiwidGltZW91dElkIiwicmVkdWNlIiwicHJldmlvdXMiLCJjdXJyZW50IiwiX3JlZjMiLCJyZXNwb25zZUhhbmRsZXIiLCJlcnJvckhhbmRsZXIiLCJ3cml0ZSIsIkNvbW1hbmRVdWlkIiwiZmFrZUFsYXJtUmVzcG9uc2UiLCJfeDMiLCJfeDQiLCJkYXRhIiwicmVzcG9uc2UiLCJvdXRwdXQiLCJieXRlcyIsIlMiLCJleHRyYUJ5dGVzIiwiaXNTdGF0dXMiLCJpc0Vycm9yIiwidmVyaWZpZWQiLCJhbGFybU9uIiwiYnV6emVyT24iLCJyZXNwb25zZU1zZyIsIm9wZW5DbG9zZVN0YXRlIiwiaG9va1N0YXRlIiwidm9sdGFnZVZhbHVlIiwibG9ja0lkIiwicmFuZERhdGEiLCJtc2ciLCJyZWFkTG9ja1N0YXR1cyIsImVucXVldWUiLCJoYW5kbGVWZXJpZmljYXRpb24iLCJsb2NrUGFpciIsInJlYWRhYmxlIiwiemkiLCJwaW4iLCJjaGFyQ29kZUF0IiwiZ2V0QWxhcm1TdGF0ZSIsInNldEFsYXJtU3RhdGUiLCJlbmFibGVkIiwiX3RoaXMzIiwid2FpdEZvck1pbGxpc2Vjb25kcyIsInRyaWdnZXJMb2NrIiwidG9nZ2xlIiwiZW5jcnlwdEJ5dGUiLCJzZXREYXRlVGltZSIsIm5vdyIsImdldEZ1bGxZZWFyIiwic2xpY2UiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwicHV0TG9ja1RvU2xlZXAiLCJpbml0aWFsaXplTG9jayIsImRpc2Nvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsInJlYWRSU1NJIiwidGFyZ2V0Iiwic2hvcnRlbiIsInV1aWQiLCJleHRyYWN0Iiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJ1bmRlZmluZWQiLCJpc1Nob3J0IiwiaGFzTG9uZ1V1aWRzIiwiQ29uZmlnVXVpZCIsImZvcmNlRGlzY29ubmVjdCIsImRldmljZSIsIl90aGlzNCIsIm1zIiwibmdPbkRlc3Ryb3kiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiX3RoaXM1IiwiYXV0b1JlY29ubmVjdE9uU3RhcnQiLCJfdGhpczYiLCJsYXN0IiwiZ2V0SXRlbSIsInBhcnNlIiwiaGFzUmVxdWlyZWRTZXJ2aWNlIiwiX3RoaXM3IiwiaW5jbHVkZXMiLCJzb2Z0UmVzZXRCbHVldG9vdGgiLCJfdGhpczgiLCJkaXNhYmxlIiwicmVzIiwicHJvdmlkZWRJbiIsIlVua25vd25EZXZpY2VOYW1lIiwiZGV2aWNlcyIsImRlY29kZXIiLCJUZXh0RGVjb2RlciIsImJsb2NraW5nIiwiaGV4Qnl0ZSIsImFkdmVydGlzZW1lbnREZWNvZGVyIiwiYWR2U3RyaW5ncyIsImluZGV4IiwicyIsImNvdW50IiwiYWRMZW5ndGgiLCJhZFR5cGUiLCJhZERhdGEiLCJwMSIsInAyIiwidW5zaGlmdCIsImFkVmlldyIsIkRhdGFWaWV3IiwiZGVjb2RlIiwiYWRkRGV2aWNlIiwiYWR2ZXJ0cyIsImFkdmVydGlzaW5nIiwiY3VzdG9tTmFtZSIsImdldEN1c3RvbU5hbWUiLCJmaW5kIiwiaXRlbSIsImdldERldmljZXMiLCJnZXREZXZpY2UiLCJmaW5kSW5kZXgiLCJyZXNldCIsInNldEN1c3RvbU5hbWUiLCJkIiwiZXh0cmFjdFNlcmlhbE51bWJlciIsInN0YXJ0c1dpdGgiLCJnZXREaXNwbGF5TmFtZSIsImRpc3BsYXlOYW1lIiwic2VyaWFsIiwiRGV2aWNlc1NlcnZpY2VfMSIsImdldFRleHRTaXplQ2xhc3MiLCJQcmVmZXJlbmNlcyIsIkxvY2tEYXRhRXJyb3JzIiwiU1VDQ0VTUyIsIk5BVElWRV9XUklURV9GQUlMRUQiLCJJVEVNX05PVF9GT1VORCIsIk5VTExfUkVGRVJFTkNFIiwiVU5ERUZJTkVEX1RZUEUiLCJKU09OX0VSUk9SIiwiV1JPTkdfUEFSQU1FVEVSIiwiRFVQTElDQVRFX0tFWSIsIkJBRF9OQU1FIiwibG9ja3MiLCJfc3RhdHVzTWVzc2FnZUhhbmRsZXIiLCJzdGF0dXNNZXNzYWdlSGFuZGxlciIsIm1ha2VMb2NrIiwic2VyaWFsTnVtYmVyIiwiY2xlYXIiLCJnZXRBdXRob3JpemF0aW9uIiwiZXhjZXB0aW9uIiwiY29kZSIsImdldCIsImtleSIsInYiLCJhZGRBdXRob3JpemF0aW9uIiwibG9jayIsInNldCIsImdldFZhbHVlIiwiZ2V0SnNvblZhbHVlIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJtZXNzYWdlIiwic2V0VmFsdWUiLCJzZXRKc29uVmFsdWUiLCJvYmplY3QiLCJyZW1vdmVBdXRob3JpemF0aW9uIiwicmVtb3ZlIiwicXVldWUiLCJwZW5kaW5nUHJvbWlzZSIsIndvcmtpbmdPblByb21pc2UiLCJvcGVyYXRpb24iLCJkZXF1ZXVlIiwic2hpZnQiLCJlbnZpcm9ubWVudCIsInByb2R1Y3Rpb24iLCJlbmFibGVQcm9kTW9kZSIsInBsYXRmb3JtQnJvd3NlckR5bmFtaWMiLCJib290c3RyYXBNb2R1bGUiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzEwLDExXX0=