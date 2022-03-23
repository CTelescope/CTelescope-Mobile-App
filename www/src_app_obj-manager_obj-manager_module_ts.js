"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_obj-manager_obj-manager_module_ts"],{

/***/ 7252:
/*!***********************************************************!*\
  !*** ./src/app/obj-manager/obj-manager-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjManagerPageRoutingModule": () => (/* binding */ ObjManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _obj_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj-manager.page */ 8617);




const routes = [
    {
        path: '',
        component: _obj_manager_page__WEBPACK_IMPORTED_MODULE_0__.ObjManagerPage
    }
];
let ObjManagerPageRoutingModule = class ObjManagerPageRoutingModule {
};
ObjManagerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ObjManagerPageRoutingModule);



/***/ }),

/***/ 2946:
/*!***************************************************!*\
  !*** ./src/app/obj-manager/obj-manager.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjManagerPageModule": () => (/* binding */ ObjManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _obj_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj-manager-routing.module */ 7252);
/* harmony import */ var _obj_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obj-manager.page */ 8617);







let ObjManagerPageModule = class ObjManagerPageModule {
};
ObjManagerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _obj_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.ObjManagerPageRoutingModule
        ],
        declarations: [_obj_manager_page__WEBPACK_IMPORTED_MODULE_1__.ObjManagerPage]
    })
], ObjManagerPageModule);



/***/ }),

/***/ 8617:
/*!*************************************************!*\
  !*** ./src/app/obj-manager/obj-manager.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjManagerPage": () => (/* binding */ ObjManagerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _obj_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj-manager.page.html?ngResource */ 5640);
/* harmony import */ var _obj_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obj-manager.page.scss?ngResource */ 8237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ObjManagerPage = class ObjManagerPage {
    constructor(route, modalController) {
        this.route = route;
        this.modalController = modalController;
    }
    homePageButton() {
        this.route.navigate(['/home']);
    }
    ngOnInit() {
        this.modalController.dismiss();
    }
};
ObjManagerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ObjManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-obj-manager',
        template: _obj_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_obj_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ObjManagerPage);



/***/ }),

/***/ 8237:
/*!**************************************************************!*\
  !*** ./src/app/obj-manager/obj-manager.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYmotbWFuYWdlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5640:
/*!**************************************************************!*\
  !*** ./src/app/obj-manager/obj-manager.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>objManager</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"test\">\n\n  <div id=\"container\" style=\"flex: vertical;\">\n    <div>\n      <ion-button class=\"buttonPlacement\" color=\"danger\" (click)=\"homePageButton()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\n    </div>\n    <div>\n      <img src=\"https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif\">\n    </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_obj-manager_obj-manager_module_ts.js.map