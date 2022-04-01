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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);








let record = false;
let HomePage = class HomePage {
    constructor(menu, modalCtrl, route) {
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.booleanVariable = false;
        this.IconButton = false;
    }
    callGotoFunction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://192.168.1.30:5000/api/doSteps', {
                    method: 'post',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ mode: 1, nb_steps: 2400 * 16 })
                });
                console.log('Completed!', response);
            }
            catch (err) {
                console.error(`Error: ${err}`);
            }
        });
    }
    callGetPosFunction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://192.168.1.30:5000/api/position', {
                    method: 'get',
                });
                console.log('Completed!', response);
            }
            catch (err) {
                console.error(`Error: ${err}`);
            }
        });
    }
    record() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (record == false) {
                console.log("Début de l'enregistrement");
                try {
                    const response = yield fetch('http://192.168.1.30:5000/api/enregistrement_start', {
                        method: 'post',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ FPS: 24 })
                    });
                    console.log('Completed!', response);
                }
                catch (err) {
                    console.error(`Error: ${err}`);
                }
                this.booleanVariable = true;
                record = true;
            }
            else if (record == true) {
                console.log("Fin de l'enregistrement");
                try {
                    const response = yield fetch('http://192.168.1.30:5000/api/enregistrement_stop', {
                        method: 'get'
                    });
                    console.log('Completed!', response);
                }
                catch (err) {
                    console.error(`Error: ${err}`);
                }
                this.booleanVariable = false;
                record = false;
            }
        });
    }
    callRafalesFunction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://192.168.1.30:5000/api/rafales', {
                    method: 'post',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ duree: 5, fps: 24 })
                });
                console.log('Completed!', response);
            }
            catch (err) {
                console.error(`Error: ${err}`);
            }
        });
    }
    callRecordFunction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://192.168.1.30:5000/api/enregistrement', {
                    method: 'post',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ duree_record: 5, fps_record: 24 })
                });
                console.log('Completed!', response);
            }
            catch (err) {
                console.error(`Error: ${err}`);
            }
        });
    }
    callCapturesFunction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://192.168.1.30:5000/api/captures', {
                    method: 'post',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({})
                });
                console.log('Completed!', response);
            }
            catch (err) {
                console.error(`Error: ${err}`);
            }
        });
    }
    GuiObjManager() {
        this.route.navigate(['/obj-manager']);
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
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
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

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.no-scroll {\n  --overflow: hidden;\n}\n\n.settingsButton {\n  margin-left: 40px;\n  margin-right: 40px;\n}\n\n.divCustom {\n  display: flex;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n}\n\n.rightButton {\n  float: right;\n  flex: vertical;\n  align-items: center;\n}\n\n.buttonPlacement {\n  padding-left: 30px;\n  padding-right: 30px;\n  position: relative;\n}\n\n.toggleButtonCS {\n  font-size: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n  position: relative;\n}\n\n.circledButton {\n  --border-radius: 50%;\n  width: 56px;\n  height: 56px;\n  --border-color: #350a0f;\n  --border-width: 0.3em;\n  --border-style:solid;\n  margin-bottom: -1px;\n}\n\n.iconSize {\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNDLGNBQUE7RUFDQyxtQkFBQTtBQURKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQXNCLG1CQUFBO0FBQ3hCOztBQUVBO0VBQ0EsZUFBQTtBQUNBIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uby1zY3JvbGwge1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZXR0aW5nc0J1dHRvbntcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLmRpdkN1c3RvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmlnaHRCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gICBmbGV4OiB2ZXJ0aWNhbDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ1dHRvblBsYWNlbWVudCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9nZ2xlQnV0dG9uQ1N7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaXJjbGVkQnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMzUwYTBmOyBcbiAgLS1ib3JkZXItd2lkdGg6IDAuM2VtOyBcbiAgLS1ib3JkZXItc3R5bGU6c29saWQ7IG1hcmdpbi1ib3R0b20gOiAtMXB4O1xufVxuXG4uaWNvblNpemUge1xuZm9udC1zaXplOiA1MHB4O1xufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<style>\n\n.imgSize { \n  max-width: 100%; \n  height: auto; \n}\n</style>\n\n<ion-content [fullscreen]=\"true\" style=\"--background: #000\" class=\"no-scroll\">\n  \n\n  <ion-header collapse=\"condense\">\n    <script src=\"//code.ionicframework.com/nightly/js/ionic.bundle.js\"></script>\n  </ion-header>\n\n\n<div id=\"container\" style=\"flex: vertical;\">\n    <img style=\"width:100%;\" src=\"http://192.168.1.30:8080/?action=stream\" />\n</div>\n\n<!--Bouton Capture-->\n<form class=\"rightButton\">\n  <div>\n    <ion-button color=\"danger\" (click)=\"callGotoFunction()\"><ion-icon name=\"camera\"></ion-icon>Test GOTO</ion-button>\n  </div>\n  <div>\n    <ion-button color=\"danger\" (click)=\"callGetPosFunction()\"><ion-icon name=\"move\"></ion-icon>Test getPosition</ion-button>\n  </div>\n  <div>\n    <ion-button color=\"danger\" (click)=\"callRafalesFunction()\"><ion-icon name=\"albums-outline\"></ion-icon>Test Rafales</ion-button>\n  </div>\n  <div>\n    <ion-button color=\"danger\" (click)=\"callRecordFunction()\"><ion-icon name=\"videocam-outline\"></ion-icon>Test Enregistrements</ion-button>\n  </div>\n  <div>\n    <ion-button color=\"danger\" (click)=\"callCapturesFunction()\"><ion-icon name=\"image-outline\"></ion-icon>Test Captures</ion-button>\n  </div>\n  <div>\n    <ion-button  color=\"danger\" class=\"circledButton\" (click)=\"record()\">\n      <ion-icon color=\"warning\" size=\"large\" *ngIf=\"booleanVariable; else alternateIcon\" name=\"square\"></ion-icon>\n    </ion-button>\n  </div>\n</form>\n\n<ng-template #alternateIcon>\n  <ion-icon size=\"large\" color=\"warning\" name=\"ellipse\"></ion-icon>\n</ng-template>\n\n<!--Menu pour ouvrir le drawer du bas-->\n<ion-button id=\"openModal\" color=\"danger\">\n  <ion-icon size name=\"menu\"></ion-icon>\n</ion-button>\n\n<ion-modal class=\"no-scroll\" trigger=\"openModal\" [initialBreakpoint]=\"0.5\">\n  <ng-template>\n    <ion-content style=\"--background: #131313;\">\n<div>\n  <div class=\"divCustom\">\n    <ion-button class=\"buttonPlacement\" color=\"dark\" (click)=\"GuiObjManager()\"><ion-icon color=\"danger\" name=\"planet-outline\"></ion-icon></ion-button>\n    <ion-button class=\"buttonPlacement\" color=\"dark\" (click)=\"CallExternalJSFileFunction()\"><ion-icon color=\"danger\" name=\"camera\"></ion-icon></ion-button>\n  </div>\n  <div class=\"divCustom\">\n    <ion-button class=\"buttonPlacement\" color=\"dark\" (click)=\"CallExternalJSFileFunction()\"><ion-icon color=\"danger\" name=\"camera\"></ion-icon></ion-button>\n    <ion-button class=\"buttonPlacement\" color=\"dark\" (click)=\"CallExternalJSFileFunction()\"><ion-icon color=\"danger\" name=\"camera\"></ion-icon></ion-button>\n  </div>\n  <!--Slider-->\n  <div>\n    <ion-item color=\"dark\" style=\"position: relative;\">\n      <p style=\"color: #5c000c\">Vitesse de déplacements : </p>\n      <ion-range min=\"1\" max=\"6\" step=\"1\" value=\"1\" snaps color=\"danger\">\n        <ion-label slot=\"start\" color=\"danger\">1</ion-label>\n        <ion-label slot=\"end\"  color=\"danger\">6</ion-label>\n      </ion-range>\n    </ion-item>\n  </div>\n</div>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map