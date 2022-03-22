"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _simple_modal_simple_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../simple-modal/simple-modal.page */ 3576);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);








let HomePage = class HomePage {
    constructor(menu, modalCtrl, sanitizer) {
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.sanitizer = sanitizer;
    }
    CallExternalJSFileFunction() {
        ExternalJSFileFunction();
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _simple_modal_simple_modal_page__WEBPACK_IMPORTED_MODULE_2__.SimpleModalPage,
                breakpoints: [0, 0.3, 0.5, 0.8],
                initialBreakpoint: 0.5
            });
            yield modal.present();
        });
    }
    ngOnInit() {
        // It could be bypassTrustResourceUrl (you would need to test)
        this.safeUrl = this.sanitizer.bypassSecurityTrustUrl('http://192.168.1.30:8080/?action=stream');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.no-scroll {\n  --overflow: hidden;\n}\n\n.settingsButton {\n  margin-left: 40px;\n  margin-right: 40px;\n}\n\n.divCustom {\n  display: flex;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n}\n\n.rightButton {\n  float: right;\n  flex: vertical;\n  align-items: center;\n}\n\n.buttonPlacement {\n  padding-left: 30px;\n  padding-right: 30px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNDLGNBQUE7RUFDQyxtQkFBQTtBQURKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5vLXNjcm9sbCB7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuLnNldHRpbmdzQnV0dG9ue1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG4uZGl2Q3VzdG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yaWdodEJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgIGZsZXg6IHZlcnRpY2FsO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYnV0dG9uUGxhY2VtZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<style>\n\n.imgSize { \n  max-width: 100%; \n  height: auto; \n}\n</style>\n\n<ion-content [fullscreen]=\"true\" style=\"--background: #000\" class=\"no-scroll\">\n  \n\n  <ion-header collapse=\"condense\">\n    \n  </ion-header>\n  \n<div id=\"container\" style=\"flex: vertical;\">\n\n    <!--<img style=\"width:100%;\" *ngIf=\"safeUrl\" src=\"http://192.168.1.30/?action=stream\" />-->\n    <img [src]=\"safeUrl\" />\n</div>\n\n\n<!--Bouton Capture-->\n<div class=\"rightButton\">\n  <div>\n    <ion-button color=\"danger\" (click)=\"CallExternalJSFileFunction()\"><ion-icon name=\"camera\"></ion-icon></ion-button>\n  </div>\n  <div>\n    <ion-button color=\"danger\" (click)=\"CallExternalJSFileFunction()\"><ion-icon name=\"move\"></ion-icon></ion-button>\n  </div>\n</div>\n\n\n<!--Menu pour ouvrir le drawer du bas-->\n<ion-button id=\"openModal\" color=\"danger\">\n  <ion-icon size name=\"menu\"></ion-icon>\n</ion-button>\n\n<ion-modal class=\"no-scroll\" trigger=\"openModal\" [initialBreakpoint]=\"0.5\">\n  <ng-template >\n    <ion-content>\n\n<div>\n  <div class=\"divCustom\">\n    <ion-button class=\"buttonPlacement\" color=\"danger\" (click)=\"CallExternalJSFileFunction()\"><ion-icon name=\"camera\"></ion-icon></ion-button>\n    <ion-button class=\"buttonPlacement\" color=\"danger\" (click)=\"CallExternalJSFileFunction()\"><ion-icon name=\"camera\"></ion-icon></ion-button>\n  </div>\n  <div class=\"divCustom\">\n    <ion-button class=\"buttonPlacement\" color=\"danger\" (click)=\"CallExternalJSFileFunction()\"><ion-icon name=\"camera\"></ion-icon></ion-button>\n    <ion-button class=\"buttonPlacement\" color=\"danger\" (click)=\"CallExternalJSFileFunction()\"><ion-icon name=\"camera\"></ion-icon></ion-button>\n  </div>\n  <!--Slider-->\n  <div>\n    <ion-item style=\"position: relative;\">\n      <p>Vitesse de déplacements : </p>\n      <ion-range min=\"1\" max=\"6\" step=\"1\" value=\"1\" snaps color=\"danger\">\n        <ion-label slot=\"start\">1</ion-label>\n        <ion-label slot=\"end\">6</ion-label>\n      </ion-range>\n    </ion-item>\n  </div>\n</div>\n\n\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map