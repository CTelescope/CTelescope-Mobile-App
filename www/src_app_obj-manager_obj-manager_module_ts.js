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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _obj_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj-manager.page.html?ngResource */ 5640);
/* harmony import */ var _obj_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obj-manager.page.scss?ngResource */ 8237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ObjManagerPage = class ObjManagerPage {
    constructor(http, route, modalController) {
        this.http = http;
        this.route = route;
        this.modalController = modalController;
        this.objetApiURL = '';
        this.ionViewDidLoad();
        //this.objectData = [];
        //this.readAPI('http://127.0.0.1:5000/api/objets').subscribe((data) => {
        /* console.log(data);
        
         this.objectData.Nom_obj = data['Nom_obj'];
         this.objectData.Asension_droite = data['Ascension_droite'];
         this.objectData.Declinaison = data['Declinaison'];
         this.objectData.Magnitude = data['Magnitude'];
         this.objectData.Type = data['Nom_type'];
         this.objectData.Constellation = data['Nom_const'];
       });*/
    }
    ngOnInit() {
        this.modalController.dismiss();
    }
    readAPI(URL) {
        return this.http.get(URL);
    }
    ionViewDidLoad() {
        var objets = [];
        this.readAPI('http://192.168.1.30:5000/api/objets').subscribe(data => {
            console.log(data);
            this.objects = [];
            for (var i = 0; i < JSON.stringify(data).length; i++) {
                this.objects.push({
                    object_id: data[i].Id_obj,
                    object_nom: data[i].Nom_obj,
                    object_AD: data[i].Ascension_droite,
                    object_Decl: data[i].Declinaison,
                    object_Mag: data[i].Magnitude,
                    object_type: data[i].Nom_type,
                    object_const: data[i].Nom_const
                });
            }
        });
    }
    homePageButton() {
        this.route.navigate(['/home']);
    }
};
ObjManagerPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ObjManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-col {\n  align-items: center;\n  text-align: center;\n  grid-auto-columns: min-content;\n}\n\nion-row {\n  align-content: center;\n  box-sizing: content-box;\n  text-align: center;\n  align-items: center;\n  width: 1000px;\n}\n\nion-grid {\n  --ion-grid-width-xs: 100%;\n  --ion-grid-width-sm: 540px;\n  --ion-grid-width-md: 720px;\n  --ion-grid-width-lg: 960px;\n  --ion-grid-width-xl: 1140px;\n  --ion-grid-column-padding: 20px;\n  --ion-grid-column-padding-xs: 5px;\n  --ion-grid-column-padding-sm: 5px;\n  --ion-grid-column-padding-md: 5px;\n  --ion-grid-column-padding-lg: 5px;\n  --ion-grid-column-padding-xl: 5px;\n}\n\ndiv {\n  color: #5c000c;\n}\n\nion-title {\n  color: #5c000c;\n}\n\n.homeButton {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-top: 7px;\n  padding-right: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iai1tYW5hZ2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSw4QkFBQTtBQUpKOztBQVFFO0VBQ0MscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0FBTkg7O0FBVUU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBR0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0FBVEo7O0FBWUU7RUFDRSxjQUFBO0FBVEo7O0FBWUU7RUFDRSxjQUFBO0FBVEo7O0FBYUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFBTSxRQUFBO0VBQ04sZ0JBQUE7RUFDQSxrQkFBQTtBQVRKIiwiZmlsZSI6Im9iai1tYW5hZ2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb2x7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgXHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogbWluLWNvbnRlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi1yb3d7XHJcbiAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgYm94LXNpemluZzpjb250ZW50LWJveDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICB3aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tZ3JpZHtcclxuICAgIC0taW9uLWdyaWQtd2lkdGgteHM6IDEwMCU7XHJcbiAgICAtLWlvbi1ncmlkLXdpZHRoLXNtOiA1NDBweDtcclxuICAgIC0taW9uLWdyaWQtd2lkdGgtbWQ6IDcyMHB4O1xyXG4gICAgLS1pb24tZ3JpZC13aWR0aC1sZzogOTYwcHg7XHJcbiAgICAtLWlvbi1ncmlkLXdpZHRoLXhsOiAxMTQwcHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMjBweDtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteHM6IDVweDtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctc206IDVweDtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQ6IDVweDtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbGc6IDVweDtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteGw6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgZGl2e1xyXG4gICAgY29sb3I6ICM1YzAwMGM7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAgICM1YzAwMGM7XHJcbiAgICA7XHJcbiAgXHJcbiAgfVxyXG4gIC5ob21lQnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7cmlnaHQ6MDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 5640:
/*!**************************************************************!*\
  !*** ./src/app/obj-manager/obj-manager.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title >\n      Liste des objets\n    </ion-title>\n    <div class=\"homeButton\">\n      <ion-button size=\"small\"  class=\"buttonPlacement\" color=\"danger\" (click)=\"homePageButton()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-item>\n      <ion-row >\n        <ion-col><div>Nom</div></ion-col>\n        <ion-col><div>Asension droite</div></ion-col>\n        <ion-col><div>Declinaison</div></ion-col>\n        <ion-col><div>Magnitude</div></ion-col>\n        <ion-col><div>Type</div></ion-col>\n        <ion-col><div>Constellation</div></ion-col>\n      </ion-row>\n    </ion-item>\n      <ion-item *ngFor=\"let objects of objects\" button>\n        <ion-row>\n        <ion-col ><div>{{objects.object_nom}}</div></ion-col>\n        <ion-col><div>{{objects.object_AD}}</div></ion-col>\n        <ion-col><div>{{objects.object_Decl}}</div></ion-col>\n        <ion-col><div>{{objects.object_Mag}}</div></ion-col>\n        <ion-col><div>{{objects.object_type}}</div></ion-col>\n        <ion-col><div>{{objects.object_const}}</div></ion-col>\n      </ion-row>\n      </ion-item>\n  </ion-grid>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_obj-manager_obj-manager_module_ts.js.map