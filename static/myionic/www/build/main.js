webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Radio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Radio = (function () {
    function Radio(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.isDisabled = true;
    }
    Radio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'radio',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u5355\u9009(radio)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding>  \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t    \u5355\u9009\u6309\u94AE\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  {{relationship|json}}\n\t\t\t \t <ion-list radio-group [(ngModel)]=\"relationship\">\n\t\t\t\t\t  <ion-item>\n\t\t\t\t\t    <ion-label>Friends</ion-label>\n\t\t\t\t\t    <ion-radio value=\"friends\" checked></ion-radio>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t\t  <ion-item>\n\t\t\t\t\t    <ion-label>Family</ion-label>\n\t\t\t\t\t    <ion-radio value=\"family\"></ion-radio>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t\t  <ion-item>\n\t\t\t\t\t    <ion-label>Enemies</ion-label>\n\t\t\t\t\t    <ion-radio value=\"enemies\" [disabled]=\"isDisabled\"></ion-radio>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t\t</ion-list>\n\t\t\t\t\t \n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/radio/RadioButton/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t    \u5355\u9009\u7EC4\u5408\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  {{autoManufacturers|json}}\n\t\t\t \t <ion-list radio-group [(ngModel)]=\"autoManufacturers\">\n\t\t\t\t  <ion-list-header>\n\t\t\t\t    Auto Manufacturers\n\t\t\t\t  </ion-list-header>\n\t\t\t\t  <ion-item>\n\t\t\t\t    <ion-label>Cord</ion-label>\n\t\t\t\t    <ion-radio value=\"cord\"></ion-radio>\n\t\t\t\t  </ion-item>\n\t\t\t\t  <ion-item>\n\t\t\t\t    <ion-label>Duesenberg</ion-label>\n\t\t\t\t    <ion-radio value=\"duesenberg\"></ion-radio>\n\t\t\t\t  </ion-item>\n\t\t\t\t  <ion-item>\n\t\t\t\t    <ion-label>Hudson</ion-label>\n\t\t\t\t    <ion-radio value=\"hudson\"></ion-radio>\n\t\t\t\t  </ion-item>\n\t\t\t\t  <ion-item>\n\t\t\t\t    <ion-label>Packard</ion-label>\n\t\t\t\t    <ion-radio value=\"packard\"></ion-radio>\n\t\t\t\t  </ion-item>\n\t\t\t\t  <ion-item>\n\t\t\t\t    <ion-label>Studebaker</ion-label>\n\t\t\t\t    <ion-radio value=\"studebaker\"></ion-radio>\n\t\t\t\t  </ion-item> \n\t\t\t\t</ion-list>\n\t\t\t\t\t \n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/radio/RadioButton/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Radio);
    return Radio;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_page__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Navigation = (function () {
    function Navigation(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        //	@ViewChild('myNav') nav: NavController
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__main_page__["a" /* MainPage */];
    }
    Navigation.prototype.ngOnInit = function () {
        // Let's navigate from TabsPage to Page1
        //		this.nav.push(this.rootPage);
    };
    Navigation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'navigation',
            template: "  \n\t\t <ion-nav  #myNav [root]=\"rootPage\"></ion-nav>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Navigation);
    return Navigation;
}());

//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalsProfile = (function () {
    function ModalsProfile(params, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.param = params.get('userId');
        console.log('UserId', params.get('userId'));
    }
    ModalsProfile.prototype.dismiss = function () {
        var data = {
            'result': parseInt(this.other) + parseInt(this.param)
        };
        this.viewCtrl.dismiss(data);
    };
    ModalsProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'modalsProfile',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u6A21\u6001\u6846\u8F6E\u5ED3(modalsProfile)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t    \u4E0A\u4E2A\u9875\u9762\u7684\u53C2\u6570\u662F{{param}}\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  \t\t  <ion-input type=\"text\" value=\"\" disabled placeholder=\"\u586B\u5199\u53C2\u6570\" [(ngModel)]=\"param\"></ion-input>\n\t\t\t  \t\t  +\n\t\t\t  \t\t  <ion-input type=\"text\" value=\"\" placeholder=\"\u586B\u5199\u53C2\u6570\" [(ngModel)]=\"other\"></ion-input>\n\t\t\t\t\t<button ion-button color=\"danger\" full (click)=\"dismiss()\"> \u8BA1\u7B97\u5E76\u5173\u95ED</button>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#badges\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ModalsProfile);
    return ModalsProfile;
}());

//# sourceMappingURL=modals-profile.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_system__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__head_footer_head_footer__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__action_sheet_action_sheet__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_alert__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__badges_badges__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__buttons_buttons__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cards_cards__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__checkbox_checkbox__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__date_time_date_time__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fabs_fabs__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gestures_gestures__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__grid_grid__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__icons_icons__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__inputs_inputs__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lists_lists__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__loading_loading__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modals_modals__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__navigation_navigation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__popover_popover__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__radio_radio__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__range_range__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__searchbar_searchbar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__segment_segment__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__select_select__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__slides_slides__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__toast_toast__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__toggle_toggle__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__toolbar_toolbar__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var HomePage = (function () {
    function HomePage(navCtrl, actionSheetCtrl, service) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.service = service;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMenuListP().then(function (args) {
            _this.items = args;
        });
    };
    HomePage.prototype.routerLink = function (args) {
        switch (args.id) {
            case "Menu":
                this.component = __WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* Menu */];
                break;
            case "Header&Footer":
                this.component = __WEBPACK_IMPORTED_MODULE_4__head_footer_head_footer__["a" /* HeaderFooter */];
                break;
            case "ActionSheet":
                this.component = __WEBPACK_IMPORTED_MODULE_5__action_sheet_action_sheet__["a" /* ActionSheet */];
                break;
            case "Alert":
                this.component = __WEBPACK_IMPORTED_MODULE_6__alert_alert__["a" /* Alert */];
                break;
            case "Badges":
                this.component = __WEBPACK_IMPORTED_MODULE_7__badges_badges__["a" /* Badges */];
                break;
            case "Buttons":
                this.component = __WEBPACK_IMPORTED_MODULE_8__buttons_buttons__["a" /* Buttons */];
                break;
            case "Cards":
                this.component = __WEBPACK_IMPORTED_MODULE_9__cards_cards__["a" /* Cards */];
                break;
            case "Checkbox":
                this.component = __WEBPACK_IMPORTED_MODULE_10__checkbox_checkbox__["a" /* Checkbox */];
                break;
            case "DateTime":
                this.component = __WEBPACK_IMPORTED_MODULE_11__date_time_date_time__["a" /* DateTime */];
                break;
            case "FABs":
                this.component = __WEBPACK_IMPORTED_MODULE_12__fabs_fabs__["a" /* FABs */];
                break;
            case "Gestures":
                this.component = __WEBPACK_IMPORTED_MODULE_13__gestures_gestures__["a" /* Gestures */];
                break;
            case "Grid":
                this.component = __WEBPACK_IMPORTED_MODULE_14__grid_grid__["a" /* Grid */];
                break;
            case "Icons":
                this.component = __WEBPACK_IMPORTED_MODULE_15__icons_icons__["a" /* Icons */];
                break;
            case "Inputs":
                this.component = __WEBPACK_IMPORTED_MODULE_16__inputs_inputs__["a" /* Inputs */];
                break;
            case "Lists":
                this.component = __WEBPACK_IMPORTED_MODULE_17__lists_lists__["a" /* Lists */];
                break;
            case "Loading":
                this.component = __WEBPACK_IMPORTED_MODULE_18__loading_loading__["a" /* Loading */];
                break;
            case "Modals":
                this.component = __WEBPACK_IMPORTED_MODULE_19__modals_modals__["a" /* Modals */];
                break;
            case "Navigation":
                this.component = __WEBPACK_IMPORTED_MODULE_20__navigation_navigation__["a" /* Navigation */];
                break;
            case "Popover":
                this.component = __WEBPACK_IMPORTED_MODULE_21__popover_popover__["a" /* Popover */];
                break;
            case "Radio":
                this.component = __WEBPACK_IMPORTED_MODULE_22__radio_radio__["a" /* Radio */];
                break;
            case "Range":
                this.component = __WEBPACK_IMPORTED_MODULE_23__range_range__["a" /* Range */];
                break;
            case "Searchbar":
                this.component = __WEBPACK_IMPORTED_MODULE_24__searchbar_searchbar__["a" /* Searchbar */];
                break;
            case "Segment":
                this.component = __WEBPACK_IMPORTED_MODULE_25__segment_segment__["a" /* Segment */];
                break;
            case "Selects":
                this.component = __WEBPACK_IMPORTED_MODULE_26__select_select__["a" /* Selects */];
                break;
            case "Slide":
                this.component = __WEBPACK_IMPORTED_MODULE_27__slides_slides__["a" /* Slide */];
                break;
            case "Toast":
                this.component = __WEBPACK_IMPORTED_MODULE_28__toast_toast__["a" /* Toast */];
                break;
            case "Toggle":
                this.component = __WEBPACK_IMPORTED_MODULE_29__toggle_toggle__["a" /* Toggle */];
                break;
            case "Toolbar":
                this.component = __WEBPACK_IMPORTED_MODULE_30__toolbar_toolbar__["a" /* Toolbar */];
                break;
            default:
                break;
        }
        this.navCtrl.push(this.component);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\home\home.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>组件列表</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-item-group *ngFor="let item of items">\n		<ion-item-divider color="light">{{item.name}}</ion-item-divider>\n		<ion-item *ngFor="let childItem of item.childAry" (click)="routerLink(childItem)">{{childItem.title}}</ion-item>\n	</ion-item-group>\n</ion-content>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__service_system__["a" /* SystemService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n	<ion-tab [root]="tab1Root" tabTitle="组件列表"></ion-tab>\n	<ion-tab [root]="tab2Root" tabTitle="Tab组件示例"></ion-tab>\n	<ion-tab [root]="tab3Root" tabTitle="联系我们"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lists_lists__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radio_radio__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = (function () {
    function AboutPage(navCtrl, modalCtrl) {
        /*this.lists = Lists;
        this.radios = Radio;
        this.navigation = Navigation;*/
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.liebiao = __WEBPACK_IMPORTED_MODULE_2__lists_lists__["a" /* Lists */];
        this.radios = __WEBPACK_IMPORTED_MODULE_3__radio_radio__["a" /* Radio */];
        this.daohang = __WEBPACK_IMPORTED_MODULE_4__navigation_navigation__["a" /* Navigation */];
        console.log(__WEBPACK_IMPORTED_MODULE_2__lists_lists__["a" /* Lists */]);
    }
    AboutPage.prototype.chat = function () {
        //直接打开modal
        /*let modal = this.modalCtrl.create(ModalsProfile);
        modal.present();*/
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\about\about.html"*/'<style type="text/css">\n	.container {\n		position: relative;\n		min-height: 400px;\n	}\n	\n	.tabs-ios .tabbar {\n		opacity: 1;\n	}\n</style>\n<ion-header>\n	<ion-navbar>\n		<ion-title>\n			选项卡(tab)\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	<p>\n		tab这个组件贯穿整个demo，所以我单独把tab放到tab下的一个选项卡下，来进行介绍。也省的我去创建一个新的组件\n	</p>\n\n	<ion-card>\n		<ion-card-header>\n			基本使用（纯文本）\n		</ion-card-header>\n		<ion-card-content class="container">\n			<a class="more" href="https://ionicframework.com/docs/api/components/tabs/Tab/">参数传递API</a>\n			<ion-tabs>\n				<ion-tab [root]="radios" tabTitle="轮播"></ion-tab>\n				<ion-tab [root]="liebiao" tabTitle="列表"></ion-tab>\n				<ion-tab [root]="daohang" tabTitle="导航"></ion-tab>\n			</ion-tabs>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			图标\n		</ion-card-header>\n		<ion-card-content class="container">\n			<a class="more" href="https://ionicframework.com/docs/api/components/tabs/Tab/">更多信息</a>\n			<ion-tabs>\n				<ion-tab tabIcon="radios" [root]="radios"></ion-tab>\n				<ion-tab tabIcon="liebiao" [root]="liebiao"></ion-tab>\n				<ion-tab tabIcon="daohang" [root]="daohang"></ion-tab>\n			</ion-tabs>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			文本和图标混排\n		</ion-card-header>\n		<ion-card-content class="container">\n			<a class="more" href="https://ionicframework.com/docs/api/components/tabs/Tab/">更多信息</a>\n			<ion-tabs>\n				<ion-tab [root]="radios" tabTitle="轮播" tabIcon="contact"></ion-tab>\n				<ion-tab [root]="liebiao" tabTitle="列表" tabIcon="analytics"></ion-tab>\n				<ion-tab [root]="daohang" tabTitle="导航" tabIcon="settings"></ion-tab>\n			</ion-tabs>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			带有徽章的图文混排\n		</ion-card-header>\n		<ion-card-content class="container">\n			<a class="more" href="https://ionicframework.com/docs/api/components/tabs/Tab/">更多信息</a>\n			<ion-tabs>\n				<ion-tab [root]="radios" tabTitle="轮播" tabBadge="3" tabIcon="contact"></ion-tab>\n				<ion-tab [root]="liebiao" tabTitle="列表" tabBadge="14" tabIcon="analytics"></ion-tab>\n				<ion-tab [root]="daohang" tabTitle="导航" tabIcon="settings"></ion-tab>\n			</ion-tabs>\n		</ion-card-content>\n	</ion-card>\n</ion-content>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_modals_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lists_lists__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__other_page__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPage = (function () {
    function MainPage(navCtrl, alertCtrl, modalCtrl, appCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.state = false;
    }
    MainPage.prototype.openModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_modals_profile__["a" /* ModalsProfile */]);
        profileModal.present();
    };
    MainPage.prototype.pushPage = function (args) {
        if (args) {
            this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__other_page__["a" /* OtherPage */], {
                data: {
                    name: "貂蝉",
                    type: "法师",
                    isGuards: args == 2 ? {
                        state: !this.state
                    } : false,
                }
            });
        }
        else {
            this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__lists_lists__["a" /* Lists */]);
        }
        //		this.viewCtrl.dismiss();
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'main-page',
            template: " \n\t\t<ion-header>\n\t\t  <ion-navbar>\n\t\t    <button ion-button icon-only menuToggle>\n\t\t      <ion-icon name=\"menu\"></ion-icon>\n\t\t    </button>\n\t\t    <ion-title>\n\t\t       \u4E3B\u9875\u9762(MainPage)\n\t\t    </ion-title>\n\t\t    <ion-buttons end>\n\t\t      <button ion-button icon-only (click)=\"openModal()\">\n\t\t        <ion-icon name=\"options\"></ion-icon>\n\t\t      </button>\n\t\t    </ion-buttons>\n\t\t  </ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding>  \n\t\t\t<button ion-button (click)=\"pushPage()\" full>\u666E\u901A\u5BFC\u822A</button>\n\t\t\t<button ion-button color=\"secondary\" (click)=\"pushPage(1)\" full>\u5E26\u53C2\u6570\u5BFC\u822A</button>\n\t\t\t <ion-item>\n\t\t\t     <ion-label>\u6DFB\u52A0\u5B88\u536B(\u53EA\u662F\u9488\u5BF9\u5B88\u536B\u5BFC\u822A\u800C\u8A00)</ion-label>\n\t\t\t     <ion-checkbox [(ngModel)]=\"state\"></ion-checkbox>\n\t\t\t   </ion-item> \n\t\t\t<button ion-button color=\"danger\" (click)=\"pushPage(2)\"  full>\u5B88\u536B\u5BFC\u822A</button>\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t     \u6211\u662F\u6839\u9875\u9762\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/navigation/NavController/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main-page.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OtherPage = (function () {
    function OtherPage(navCtrl, alertCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.bool = true;
        this.param = navParams.get("data");
    }
    OtherPage.prototype.popView = function () {
        this.navCtrl.pop();
    };
    OtherPage.prototype.ionViewDidLoad = function () {
        console.log("I'm alive!");
        this.alertCtrl.create({
            title: '组件声明周期',
            message: '组件渲染完成执行的方法',
            buttons: [{
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('取消');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        console.log('确定');
                    }
                }
            ]
        }).present();
    };
    OtherPage.prototype.ionViewWillLeave = function () {
        console.log("Looks like I'm about to leave ");
        this.alertCtrl.create({
            title: '组件声明周期',
            message: '组件离开执行的方法',
            buttons: [{
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('取消');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        console.log('确定');
                    }
                }
            ]
        }).present();
    };
    OtherPage.prototype.ionViewCanLeave = function () {
        if (this.param.isGuards) {
            return !this.bool;
        }
    };
    OtherPage.prototype.ionViewCanEnter = function () {
        if (this.param.isGuards) {
            return this.param.isGuards.state;
        }
        else {
            return true;
        }
    };
    OtherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'other-page',
            template: " \n\t\t<ion-header>\n\t\t  <ion-navbar>\n\t\t    <button ion-button icon-only menuToggle>\n\t\t      <ion-icon name=\"menu\"></ion-icon>\n\t\t    </button>\n\t\t    <ion-title>\n\t\t      \u5176\u4ED6\u9762(other-page)\n\t\t    </ion-title> \n\t\t  </ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding>  \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t   \u5B50\u9875\u9762\u53C2\u6570\u5185\u5BB9\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t   \u4E3B\u9875\u9762\u53C2\u6570:{{param|json}}\n\t\t\t   <br>\n\t\t\t   <ion-item>\n\t\t\t     <ion-label>\u6DFB\u52A0\u5B88\u536B(\u53EA\u662F\u9488\u5BF9\u5B88\u536B\u5BFC\u822A\u800C\u8A00)</ion-label>\n\t\t\t     <ion-checkbox [(ngModel)]=\"bool\"></ion-checkbox>\n\t\t\t   </ion-item> \n\t\t\t   <button ion-button color=\"danger\" (click)=\"popView()\" full>\u56DE\u9000\u56DE\u53BB</button>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/navigation/NavController/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=other-page.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.goToOtherPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\contact\contact.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			联系我们\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card>\n		<ion-card-header>\n			基本信息\n		</ion-card-header>\n		<ion-card-content>\n			环境加入黑猫技术大家庭\n			<br>群号：\n			<h1>275753700</h1>\n			<br>技术点：Es6 Angular React Vue\n			<a class="more" href="tencent://message/?uin=865045639&Site=黑猫科技&Menu=yes">加我QQ</a>\n		</ion-card-content>\n	</ion-card>\n</ion-content>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { MenuRoot } from './menu-root';
var Menu = (function () {
    function Menu(navCtrl, actionSheetCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.menuCtrl = menuCtrl;
    }
    Menu.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Menu.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    Menu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\menu\menu.html"*/'<ion-menu [content]="mycontent" type="reveal" side="left">\n\n	<ion-content>\n\n		<ion-list>\n\n			<ion-list-header>\n\n				<h3>功能菜单项</h3>\n\n			</ion-list-header>\n\n			<ion-item>\n\n				<ion-icon ios="ios-mail" md="md-mail" item-left></ion-icon>\n\n				消息中心\n\n				<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-right></ion-icon>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon ios="ios-build" md="md-build" item-left></ion-icon>\n\n				音乐工具\n\n				<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-right></ion-icon>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon ios="ios-notifications-off" md="md-notifications-off" item-left></ion-icon>\n\n				<ion-label>个性彩铃</ion-label>\n\n				<ion-toggle checked="false"></ion-toggle>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon ios="ios-wifi" md="md-wifi" item-left></ion-icon>\n\n				<ion-label>仅wify联网</ion-label>\n\n				<ion-toggle checked="false"></ion-toggle>\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-content>\n\n</ion-menu>\n\n<div class="menuContainer" #mycontent>\n\n	<ion-header>\n\n		<ion-navbar>\n\n			<ion-title>侧滑菜单</ion-title>\n\n		</ion-navbar>\n\n	</ion-header>\n\n	<ion-content padding>\n\n		<button ion-button (click)="goBack()" full>返回上一页</button>\n\n		<button ion-button color="secondary" menuClose full>关闭菜单</button>\n\n		<button ion-button color="danger" (click)="openMenu()" full>打开菜单</button>\n\n		<button ion-button menuToggle full>Toggle Menu</button>\n\n		<table table>\n\n			<caption>输入属性</caption>\n\n			<tr>\n\n				<th>Attr</th>\n\n				<th>Type</th>\n\n				<th>Details</th>\n\n			</tr>\n\n			<tr>\n\n				<td>content</td>\n\n				<td>any</td>\n\n				<td>菜单应该使用的内容元素的引用</td>\n\n			</tr>\n\n			<tr>\n\n				<td>enabled</td>\n\n				<td>boolean</td>\n\n				<td>如果为true，则菜单已启用。默认 true.</td>\n\n			</tr>\n\n			<tr>\n\n				<td>id</td>\n\n				<td>string</td>\n\n				<td>An id for the menu.</td>\n\n			</tr>\n\n			<tr>\n\n				<td>persistent</td>\n\n				<td>boolean</td>\n\n				<td>如果为true，菜单将保留在子页面上</td>\n\n			</tr>\n\n			<tr>\n\n				<td>side</td>\n\n				<td>string</td>\n\n				<td>菜单应该放置哪一侧。默认“左”</td>\n\n			</tr>\n\n			<tr>\n\n				<td>swipeEnabled</td>\n\n				<td>boolean</td>\n\n				<td>如果为true，则启用滑动菜单。默认为true</td>\n\n			</tr>\n\n			<tr>\n\n				<td>type</td>\n\n				<td>string</td>\n\n				<td>菜单的滑动类型"overlay", "reveal", "push".</td>\n\n			</tr>\n\n		</table>\n\n	</ion-content>\n\n</div>\n\n\n\n<!--<ion-nav #mycontent [root]="rootPage"></ion-nav>-->'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\menu\menu.html"*/,
            styles: ['./menu.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], Menu);
    return Menu;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderFooter = (function () {
    function HeaderFooter(navCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    HeaderFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header',
            template: "\n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>Header&Footer</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content>\n\t\t\t <ion-card> \n\t\t\t  <ion-card-header>\n\t\t\t      \u4EE3\u7801\u5757\u7684\u5C55\u793A\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content>\n\t\t\t    \t&lt;ion-header&gt;<br />  &lt;ion-navbar&gt;<br />    &lt;ion-title&gt;Page1&lt;/ion-title&gt;<br />  &lt;/ion-navbar&gt;<br /><br />  &lt;ion-toolbar&gt;<br />    &lt;ion-title&gt;Subheader&lt;/ion-title&gt;<br />  &lt;/ion-toolbar&gt;<br />&lt;/ion-header&gt;<br /><br />&lt;ion-content&gt;&lt;/ion-content&gt;<br />&lt;ion-footer&gt;<br />  &lt;ion-toolbar&gt;<br />    &lt;ion-title&gt;Footer&lt;/ion-title&gt;<br />  &lt;/ion-toolbar&gt;<br />&lt;/ion-footer&gt;\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t\t<ion-footer>\n\t\t\t  <ion-toolbar>\n\t\t\t    <ion-title>Footer</ion-title>\n\t\t\t  </ion-toolbar>\n\t\t</ion-footer>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], HeaderFooter);
    return HeaderFooter;
}());

//# sourceMappingURL=head&footer.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionSheet = (function () {
    function ActionSheet(navCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    ActionSheet.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'ActionSheet功能如下',
            buttons: [{
                    text: '删除',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: '修改',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ActionSheet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'action-sheet',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>actionSheet-Controller</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding>\n\t\t\t<button ion-button (click)=\"presentActionSheet()\" full>\u6253\u5F00actionSheet</button>\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      ts\u4EE3\u7801\u5757\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t  <code>\n\t\t\t\t\t   \t\t\u6211\u662F\u4EE3\u7801\u5757\u533A\u57DF\n\t\t\t\t\t  </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/#config\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActionSheet);
    return ActionSheet;
}());

//# sourceMappingURL=action-sheet.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Alert = (function () {
    function Alert(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Alert.prototype.presentAlert = function (args) {
        var alerts = this.alertCtrl.create({
            title: '基本弹框',
            subTitle: args || '基本的弹框内容填充部分',
            buttons: ['确定']
        });
        alerts.present();
    };
    Alert.prototype.presentConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirm 标题',
            message: '你想关闭次弹框吗?',
            buttons: [{
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('取消');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        console.log('确定');
                    }
                }
            ]
        });
        alert.present();
    };
    Alert.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [{
                    name: '帐号',
                    placeholder: '请输入帐号'
                },
                {
                    name: '密码',
                    placeholder: '请输入密码',
                    type: 'password'
                }
            ],
            buttons: [{
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '登录',
                    handler: function (data) {
                        _this.presentAlert(JSON.stringify(data));
                    }
                }
            ]
        });
        alert.present();
    };
    Alert.prototype.otherAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Hello',
            subTitle: "确定要返回去吗?",
            buttons: [{
                    text: '确定',
                    handler: function () {
                        // user has clicked the alert button
                        // begin the alert's dismiss transition
                        var navTransition = alert.dismiss();
                        navTransition.then(function () {
                            _this.navCtrl.pop();
                        });
                        // start some async method
                        /*someAsyncOperation().then(() => {
                            navTransition.then(() => {
                                this.navCtrl.pop();
                            });
                        });*/
                        return false;
                    }
                }]
        });
        alert.present();
    };
    Alert.prototype.showRadio = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'Red',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log(data);
            }
        });
        alert.present();
    };
    Alert.prototype.showCheckbox = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('爱好');
        alert.addInput({
            type: 'checkbox',
            label: '吃',
            value: '吃',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: '玩',
            value: '玩'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    Alert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alert',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>alert\u2014Controller</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding>\n\t\t\t<button ion-button (click)=\"presentAlert()\" color=\"secondary\" full>alert\u5F39\u6846</button>\n\t\t\t<button ion-button (click)=\"presentConfirm()\" color=\"Danger\" full>confirm\u5F39\u6846</button>\n\t\t\t<button ion-button (click)=\"presentPrompt()\" color=\"secondary\" full>\u53EF\u8F93\u5165\u5185\u5BB9\u5F39\u6846</button>\n\t\t\t<button ion-button (click)=\"otherAlert()\" color=\"danger\" full>\u8FD4\u56DE\u5217\u8868\u5F39\u6846</button>\n\t\t\t<button ion-button (click)=\"showRadio()\" color=\"secondary\" full>radio\u5F39\u6846</button>\n\t\t\t<button ion-button (click)=\"showCheckbox()\" color=\"Danger\" full>Checkbox\u5F39\u6846</button>\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      ts\u4EE3\u7801\u5757\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t  <code>\n\t\t\t\t\t   \t\t\u6211\u662F\u4EE3\u7801\u5757\u533A\u57DF\n\t\t\t\t\t  </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/alert/AlertController/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Alert);
    return Alert;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Badges; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Badges = (function () {
    function Badges(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Badges = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'badges',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u5FBD\u7AE0(badges)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\t<ion-item>\n\t\t\t\t  \u9ED8\u8BA4\u5FBD\u7AE0\n\t\t\t  <ion-badge item-end>260k</ion-badge>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t  \t\u6709\u989C\u8272\u7684\u5FBD\u7AE0\n\t\t\t  <ion-badge color=\"secondary\">12</ion-badge>\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      ts\u4EE3\u7801\u5757\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t  <code>\n\t\t\t\t\t   \t\t&lt;ion-card&gt; <br />  &lt;ion-card-header&gt;<br />    Card Header<br />  &lt;/ion-card-header&gt; <br />  &lt;ion-card-content&gt;<br />    &lt;!-- Add card content here! --&gt;<br />  &lt;/ion-card-content&gt; <br />&lt;/ion-card&gt;\n\t\t\t\t\t  </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#badges\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Badges);
    return Badges;
}());

//# sourceMappingURL=badges.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buttons; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Buttons = (function () {
    function Buttons(navCtrl) {
        this.navCtrl = navCtrl;
        console.log("打印按钮");
    }
    Buttons = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'buttons',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\buttons\button.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>按钮(button)</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			基本用法\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<button ion-button color="secondary">Secondary</button>\n\n			<button ion-button color="danger">Danger</button>\n\n			<button ion-button color="dark">Dark</button>\n\n			<ion-card>\n\n				<code> \n\n					&lt;button ion-button color="light"&gt;Light&lt;/button&gt;<br />&lt;button ion-button&gt;Default&lt;/button&gt;<br />&lt;button ion-button color="secondary"&gt;Secondary&lt;/button&gt;<br />&lt;button ion-button color="danger"&gt;Danger&lt;/button&gt;<br />&lt;button ion-button color="dark"&gt;Dark&lt;/button&gt;\n\n					</code>\n\n			</ion-card>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#outline-buttons">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-header>\n\n			圆角按钮\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<button ion-button color="light" round>Light Round</button>\n\n			<button ion-button round>Primary Round</button>\n\n			<button ion-button color="secondary" round>Secondary Round</button>\n\n			<button ion-button color="danger" round>Danger Round</button>\n\n			<button ion-button color="dark" round>Dark Round</button>\n\n			<ion-card>\n\n				<code> \n\n					&lt;button ion-button color="light" round&gt;Light Round&lt;/button&gt;<br />&lt;button ion-button round&gt;Primary Round&lt;/button&gt;<br />&lt;button ion-button color="secondary" round&gt;Secondary Round&lt;/button&gt;<br />&lt;button ion-button color="danger" round&gt;Danger Round&lt;/button&gt;<br />&lt;button ion-button color="dark" round&gt;Dark Round&lt;/button&gt;\n\n				</code>\n\n			</ion-card>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#outline-buttons">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-header>\n\n			组件中使用按钮\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item>\n\n					黑猫001\n\n					<button ion-button outline item-end icon-left>\n\n				      <ion-icon name="star"></ion-icon>\n\n				      黑喵\n\n				    </button>\n\n				</ion-item>\n\n				<ion-item>\n\n					黑猫002\n\n					<button ion-button outline item-end icon-left>\n\n				      <ion-icon name="star"></ion-icon>\n\n				      黑喵\n\n				    </button>\n\n				</ion-item>\n\n			</ion-list>\n\n			<ion-card>\n\n				<code> \n\n					&lt;ion-list&gt;<br />  &lt;ion-item&gt;<br />    Left Icon Button<br />    &lt;button ion-button outline item-end icon-left&gt;<br />      &lt;ion-icon name="star"&gt;&lt;/ion-icon&gt;<br />      Left Icon<br />    &lt;/button&gt;<br />  &lt;/ion-item&gt;<br />&lt;/ion-list&gt;\n\n				</code>\n\n			</ion-card>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#outline-buttons">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			带图标按钮\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<button ion-button icon-left>\n\n			  <ion-icon name="home"></ion-icon>\n\n			  Left Icon\n\n			</button>\n\n			<button ion-button icon-right>\n\n			  Right Icon\n\n			  <ion-icon name="home"></ion-icon>\n\n			</button>\n\n			<button ion-button icon-only>\n\n			  <ion-icon name="home"></ion-icon>\n\n			</button>\n\n			<ion-card>\n\n				<code> \n\n					&lt;button ion-button icon-left&gt;<br />			  &lt;ion-icon name="home"&gt;&lt;/ion-icon&gt;<br />			  Left Icon<br />			&lt;/button&gt;<br />			&lt;button ion-button icon-right&gt;<br />			  Right Icon<br />			  &lt;ion-icon name="home"&gt;&lt;/ion-icon&gt;<br />			&lt;/button&gt; <br />			&lt;button ion-button icon-only&gt;<br />			  &lt;ion-icon name="home"&gt;&lt;/ion-icon&gt;<br />			&lt;/button&gt;\n\n				</code>\n\n			</ion-card>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#outline-buttons">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-header>\n\n			块按钮\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<button ion-button block>Block Button</button>\n\n			<ion-card>\n\n				<code> \n\n					&lt;button ion-button block&gt;Block Button&lt;/button&gt;\n\n				</code>\n\n			</ion-card>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#outline-buttons">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			按钮大小\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<button ion-button small>Small</button>\n\n			<button ion-button>Default</button>\n\n			<button ion-button large>Large</button>\n\n			<ion-card>\n\n				<code> \n\n					&lt;button ion-button small&gt;Small&lt;/button&gt;<br />&lt;button ion-button&gt;Default&lt;/button&gt;<br />&lt;button ion-button large&gt;Large&lt;/button&gt;\n\n				</code>\n\n			</ion-card>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#outline-buttons">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			完整的按钮\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<button ion-button block>Block Button</button>\n\n			<ion-card>\n\n				<code> \n\n					&lt;button ion-button full&gt;Full Button&lt;/button&gt;\n\n				</code>\n\n			</ion-card>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#outline-buttons">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-header>\n\n			大纲样式\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<button ion-button color="light" outline>Light Outline</button>\n\n			<button ion-button outline>Primary Outline</button>\n\n			<button ion-button color="secondary" outline>Secondary Outline</button>\n\n			<button ion-button color="danger" outline>Danger Outline</button>\n\n			<button ion-button color="dark" outline>Dark Outline</button>\n\n			<ion-card>\n\n				<code> \n\n					&lt;button ion-button color="light" outline&gt;Light Outline&lt;/button&gt;<br />&lt;button ion-button outline&gt;Primary Outline&lt;/button&gt;<br />&lt;button ion-button color="secondary" outline&gt;Secondary Outline&lt;/button&gt;<br />&lt;button ion-button color="danger" outline&gt;Danger Outline&lt;/button&gt;<br />&lt;button ion-button color="dark" outline&gt;Dark Outline&lt;/button&gt;\n\n				</code>\n\n			</ion-card>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#outline-buttons">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-header>\n\n			清晰的风格\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<button ion-button color="light" clear>Light Clear</button>\n\n			<button ion-button clear>Primary Clear</button>\n\n			<button ion-button color="secondary" clear>Secondary Clear</button>\n\n			<button ion-button color="danger" clear>Danger Clear</button>\n\n			<button ion-button color="dark" clear>Dark Clear</button>\n\n			<ion-card>\n\n				<code> \n\n					&lt;button ion-button color="light" clear&gt;Light Clear&lt;/button&gt;<br />&lt;button ion-button clear&gt;Primary Clear&lt;/button&gt;<br />&lt;button ion-button color="secondary" clear&gt;Secondary Clear&lt;/button&gt;<br />&lt;button ion-button color="danger" clear&gt;Danger Clear&lt;/button&gt;<br />&lt;button ion-button color="dark" clear&gt;Dark Clear&lt;/button&gt;\n\n				</code>\n\n			</ion-card>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#outline-buttons">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\buttons\button.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], Buttons);
    return Buttons;
}());

//# sourceMappingURL=buttons.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cards; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Cards = (function () {
    function Cards(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Cards = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cards',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\cards\cards.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>卡片(cards)</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-card>\n		<ion-card-header>\n			基本卡片\n		</ion-card-header>\n		<ion-card-content>\n			环境加入黑猫技术大家庭。群号：275753700\n			<ion-card>\n				<code> \n					&lt;ion-card&gt;环境加入黑猫技术大家庭。群号：275753700&lt;/ion-card&gt;\n				</code>\n			</ion-card>\n			<a class="more" href="https://ionicframework.com/docs/components/#cards">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n	<ion-card>\n		<ion-card-header>\n			有卡片头部的\n		</ion-card-header>\n		<ion-card-content>\n			卡片正文\n			<ion-card>\n				<code> &lt;ion-card&gt;<br />   &lt;ion-card-header&gt;<br />			有卡片头部的<br />   &lt;/ion-card-header&gt;<br />   &lt;ion-card-content&gt;<br />			卡片正文 <br />   &lt;/ion-card-content&gt;<br />&lt;/ion-card&gt;<br />\n				</code>\n			</ion-card>\n			<a class="more" href="https://ionicframework.com/docs/components/#cards">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			卡片列表\n		</ion-card-header>\n		<ion-card-content>\n			<ion-list>\n				<button ion-item>\n			      <ion-icon name="cart" item-start></ion-icon>\n			      Shopping\n			    </button>\n				<button ion-item>\n			      <ion-icon name="medical" item-start></ion-icon>\n			      Hospital\n			    </button>\n				<button ion-item>\n			      <ion-icon name="cafe" item-start></ion-icon>\n			      Cafe\n			    </button>\n				<button ion-item>\n			      <ion-icon name="paw" item-start></ion-icon>\n			      Dog Park\n			    </button>\n				<button ion-item>\n			      <ion-icon name="beer" item-start></ion-icon>\n			      Pub\n			    </button>\n				<button ion-item>\n			      <ion-icon name="planet" item-start></ion-icon>\n			      Space\n			    </button>\n			</ion-list>\n			<ion-card>\n				<code>  \n					代码量过大的我就不贴了，不好意思\n				</code>\n			</ion-card>\n			<a class="more" href="https://ionicframework.com/docs/components/#cards">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			带图片的卡片\n		</ion-card-header>\n		<ion-card-content>\n			<ion-card>\n				<img src="assets/imgs/beijing.jpg" />\n				<ion-card-content>\n					<ion-card-title>\n						北京\n					</ion-card-title>\n					<p>\n						北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心，是中国共产党中央委员会、中华人民共和国中央人民政府、全国人民代表大会、中国人民政治协商会议全国委员会、中华人民共和国中央军事委员会所在地，也是中部战区司令部驻地。\n					</p>\n				</ion-card-content>\n			</ion-card>\n			<ion-card-content class="card-background-page">\n				<ion-card>\n					<img src="assets/imgs/beijing.jpg" />\n					<div class="card-title">北京</div>\n					<div class="card-subtitle">41 Listings</div>\n				</ion-card>\n				<ion-card>\n					<img src="assets/imgs/shagnhai.jpg" />\n					<div class="card-title">上海</div>\n					<div class="card-subtitle">72 Listings</div>\n				</ion-card>\n			</ion-card-content>\n			<ion-card>\n				<code> \n					代码量过大的我就不贴了，不好意思\n				</code>\n			</ion-card>\n			<a class="more" href="https://ionicframework.com/docs/components/#cards">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			社交卡\n		</ion-card-header>\n		<ion-card-content>\n			<ion-card>\n				<ion-item>\n					<ion-avatar item-start>\n						<img src="assets/imgs/2.png">\n					</ion-avatar>\n					<h2>黑猫</h2>\n					<p>November 5, 1990</p>\n				</ion-item>\n				<img src="assets/imgs/beijing.jpg">\n				<ion-card-content>\n					<p>\n						北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心，是中国共产党中央委员会、中华人民共和国中央人民政府、全国人民代表大会、中国人民政治协商会议全国委员会、中华人民共和国中央军事委员会所在地，也是中部战区司令部驻地。\n					</p>\n				</ion-card-content>\n				<ion-row>\n					<ion-col>\n						<button ion-button icon-left clear small>\n				        <ion-icon name="thumbs-up"></ion-icon>\n				        <div>12 Likes</div>\n				      </button>\n					</ion-col>\n					<ion-col>\n						<button ion-button icon-left clear small>\n				        <ion-icon name="text"></ion-icon>\n				        <div>4 Comments</div>\n				      </button>\n					</ion-col>\n					<ion-col center text-center>\n						<ion-note>\n							11h ago\n						</ion-note>\n					</ion-col>\n				</ion-row>\n			</ion-card>\n			<ion-card>\n				<code> \n					代码量过大的我就不贴了，不好意思\n				</code>\n			</ion-card>\n			<a class="more" href="https://ionicframework.com/docs/components/#cards">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			地图卡\n		</ion-card-header>\n		<ion-card-content>\n			<ion-card>\n				<img src="assets/imgs/beijing.jpg">\n				<ion-fab right top>\n					<button ion-fab>\n				      <ion-icon name="pin"></ion-icon>\n				    </button>\n				</ion-fab>\n				<ion-item>\n					<ion-icon name="football" item-start large></ion-icon>\n					<h2>Museum of Football</h2>\n					<p>11 N. Way St, Madison, WI 53703</p>\n				</ion-item>\n\n				<ion-item>\n					<ion-icon name="wine" item-left large></ion-icon>\n					<h2>Institute of Fine Cocktails</h2>\n					<p>14 S. Hop Avenue, Madison, WI 53703</p>\n				</ion-item>\n				<ion-item>\n					<span item-left>18 min</span>\n					<span item-left>(2.6 mi)</span>\n					<button ion-button icon-left clear item-end>\n				      <ion-icon name="navigate"></ion-icon>\n				      Start\n				    </button>\n				</ion-item>\n			</ion-card>\n			<ion-card>\n				<code> \n					代码量过大不贴了\n				</code>\n			</ion-card>\n			<a class="more" href="https://ionicframework.com/docs/components/#cards">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\cards\cards.html"*/,
            styles: ['./cards.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Cards);
    return Cards;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checkbox = (function () {
    function Checkbox(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Checkbox.prototype.updateCucumber = function () {
        console.log('Cucumbers new state:' + this.cucumber);
    };
    Checkbox = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'checkbox',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u590D\u9009\u6846(checkbox)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u57FA\u672Ccheckbox\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t  <ion-list>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t  <ion-label>\u542F\u7528\u72B6\u6001</ion-label>\n\t\t\t\t\t  <ion-checkbox color=\"blue\" checked=\"true\"></ion-checkbox>\n\t\t\t\t\t</ion-item> \n\t\t\t\t\t<ion-item>\n\t\t\t\t\t  <ion-label>\u7981\u7528\u72B6\u6001</ion-label>\n\t\t\t\t\t  <ion-checkbox disabled=\"true\"></ion-checkbox>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t\t  <code>\n\t\t\t\t\t   \t\t&lt;ion-list&gt;<br />\t\t\t\t&lt;ion-item&gt;<br />\t\t\t\t  &lt;ion-label&gt;Daenerys Targaryen&lt;/ion-label&gt;<br />\t\t\t\t  &lt;ion-checkbox color=\"blue\" checked=\"true\"&gt;&lt;/ion-checkbox&gt;<br />\t\t\t\t&lt;/ion-item&gt; <br />\t\t\t\t&lt;ion-item&gt;<br />\t\t\t\t  &lt;ion-label&gt;Daenerys Targaryen&lt;/ion-label&gt;<br />\t\t\t\t  &lt;ion-checkbox color=\"red\" checked=\"false\"&gt;&lt;/ion-checkbox&gt;<br />\t\t\t\t&lt;/ion-item&gt;  <br />\t\t\t\t&lt;ion-item&gt;<br />\t\t\t\t  &lt;ion-label&gt;Arya Stark&lt;/ion-label&gt;<br />\t\t\t\t  &lt;ion-checkbox disabled=\"true\"&gt;&lt;/ion-checkbox&gt;<br />\t\t\t\t&lt;/ion-item&gt;<br />\t\t\t&lt;/ion-list&gt;\n\t\t\t\t\t</code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/checkbox/Checkbox\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u9AD8\u7EA7checkbox\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t <ion-list> \n\t\t\t\t\t   <ion-item>\n\t\t\t\t\t     <ion-label>\u67E5\u770B\u4E0B\u8FB9\u503C\u7684\u53D8\u5316</ion-label>\n\t\t\t\t\t     <ion-checkbox [(ngModel)]=\"cucumber\" (ionChange)=\"updateCucumber()\"></ion-checkbox>\n\t\t\t\t\t   </ion-item> \n\t\t\t\t\t    <ion-item>\n\t\t\t\t\t     <ion-label>{{cucumber}}</ion-label>\n\t\t\t\t\t   </ion-item> \n\t\t\t\t  </ion-list>\n\t\t\t\t\t  <code>\n\t\t\t\t\t   \t\t &lt;ion-list&gt; <br />\t\t\t\t\t   &lt;ion-item&gt;<br />\t\t\t\t\t     &lt;ion-label&gt;Cucumber&lt;/ion-label&gt;<br />\t\t\t\t\t     &lt;ion-checkbox [(ngModel)]=\"cucumber\" (ionChange)=\"updateCucumber()\"&gt;&lt;/ion-checkbox&gt;<br />\t\t\t\t\t   &lt;/ion-item&gt; <br />\t\t\t\t  &lt;/ion-list&gt;\n\t\t\t\t\t</code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/checkbox/Checkbox/#advanced\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Checkbox);
    return Checkbox;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateTime = (function () {
    function DateTime(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    DateTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'date-time',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u65F6\u95F4(date-time)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u666E\u901A\u65E5\u671F\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content>  \n\t\t\t  <ion-list>\n\t\t\t  \t<ion-item>\n\t\t\t\t  <ion-label>\u666E\u901A\u65F6\u95F4\u9009\u62E9</ion-label>\n\t\t\t\t  <ion-datetime displayFormat=\"YYYY-MM-DD\"  [(ngModel)]=\"myDate1\"></ion-datetime>\n\t\t\t\t</ion-item>\n\t\t\t  \t<ion-item>\n\t\t\t\t  <ion-label>\u5E74</ion-label>\n\t\t\t\t  <ion-datetime displayFormat=\"YYYY-MM-DD\"   pickerFormat=\"YYYY\"   [(ngModel)]=\"myDate2\"></ion-datetime>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t  <ion-label>\u8BBE\u7F6E\u6700\u5C0F\u5E742016</ion-label>\n\t\t\t\t  <ion-datetime displayFormat=\"YYYY\" min=\"2016\" max=\"2020-10-31\" [(ngModel)]=\"myDate3\">\n\t\t\t\t  </ion-datetime>\n\t\t\t\t</ion-item>\n\t\t\t\t</ion-list> \n\t\t\t  \t<code></code>\n\t\t\t     <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/datetime/DateTime\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], DateTime);
    return DateTime;
}());

//# sourceMappingURL=date-time.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FABs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FABs = (function () {
    function FABs(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    FABs.prototype.share = function (socialNet, fab) {
        fab.close();
        console.log("Sharing in", socialNet);
    };
    FABs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fabs',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u6D6E\u52A8\u8D34(FABs)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding>  \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u4EE3\u7801\u6848\u4F8B\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content>  \n\t\t\t  \n\t\t\t\t\t  <ion-fab top left>\n\t\t\t\t\t    <button ion-fab mini><ion-icon name=\"add\"></ion-icon></button>\n\t\t\t\t\t    <ion-fab-list>\n\t\t\t\t\t      <button ion-fab><ion-icon name=\"logo-facebook\" color=\"red\"></ion-icon></button>\n\t\t\t\t\t      <button ion-fab><ion-icon name=\"logo-twitter\"></ion-icon></button>\n\t\t\t\t\t      <button ion-fab><ion-icon name=\"logo-vimeo\"></ion-icon></button>\n\t\t\t\t\t      <button ion-fab><ion-icon name=\"logo-googleplus\"></ion-icon></button>\n\t\t\t\t\t    </ion-fab-list>\n\t\t\t\t\t  </ion-fab>\n\t\t\t\t\t  \n\t\t\t\t\t  <ion-fab right bottom #fab>\n\t\t\t\t\t    <button ion-fab color=\"secondary\"><ion-icon name=\"arrow-dropleft\"></ion-icon></button>\n\t\t\t\t\t    <ion-fab-list side=\"left\">\n\t\t\t\t\t      <button ion-fab><ion-icon name=\"logo-facebook\" (click)=\"share('facebook', fab)\"></ion-icon></button>\n\t\t\t\t\t      <button ion-fab><ion-icon name=\"logo-twitter\" (click)=\"share('twitter', fab)\"> </ion-icon></button>\n\t\t\t\t\t      <button ion-fab><ion-icon name=\"logo-vimeo\"></ion-icon></button>\n\t\t\t\t\t      <button ion-fab><ion-icon name=\"logo-googleplus\"></ion-icon></button>\n\t\t\t\t\t    </ion-fab-list>\n\t\t\t\t\t  </ion-fab>  \n\t\t\t\t\t  \t\n\t\t\t\t\t <ion-fab middle center>\n\t\t\t\t\t   <button ion-fab color=\"danger\">Share</button>\n\t\t\t\t\t  <ion-fab-list side=\"top\">\n\t\t\t\t\t   <button ion-fab color=\"secondary\"><ion-icon name=\"logo-facebook\"></ion-icon></button>\n\t\t\t\t\t  </ion-fab-list>\n\t\t\t\t\t  <ion-fab-list side=\"left\" >\n\t\t\t\t\t     <button ion-fab color=\"light\"><ion-icon name=\"logo-twitter\" ></ion-icon></button>\n\t\t\t\t\t  </ion-fab-list>\n\t\t\t\t\t   <ion-fab-list side=\"right\">\n\t\t\t\t\t   <button ion-fab color=\"danger\"><ion-icon name=\"logo-vimeo\" ></ion-icon></button>\n\t\t\t\t\t  </ion-fab-list>\n\t\t\t\t\t   <ion-fab-list side=\"bottom\">\n\t\t\t\t\t    <button ion-fab color=\"dark\"><ion-icon name=\"logo-googleplus\" ></ion-icon></button>\n\t\t\t\t\t  </ion-fab-list>\n\t\t\t\t\t </ion-fab>\n\t\t\t\t\t\t \n\t\t\t\t\t  <code>\n\t\t\t\t\t   &lt;ion-fab top left&gt;<br />\t\t\t\t\t    &lt;button ion-fab mini&gt;&lt;ion-icon name=\"add\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t    &lt;ion-fab-list&gt;<br />\t\t\t\t\t      &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-facebook\" color=\"red\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t      &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-twitter\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t      &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-vimeo\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t      &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-googleplus\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t    &lt;/ion-fab-list&gt;<br />\t\t\t\t\t  &lt;/ion-fab&gt;<br />\t\t\t\t\t  <br />\t\t\t\t\t  &lt;ion-fab right bottom #fab&gt;<br />\t\t\t\t\t    &lt;button ion-fab color=\"light\"&gt;&lt;ion-icon name=\"arrow-dropleft\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t    &lt;ion-fab-list side=\"left\"&gt;<br />\t\t\t\t\t      &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-facebook\" (click)=\"share('facebook', fab)\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t      &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-twitter\" (click)=\"share('twitter', fab)\"&gt; &lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t      &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-vimeo\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t      &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-googleplus\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t    &lt;/ion-fab-list&gt;<br />\t\t\t\t\t  &lt;/ion-fab&gt;  <br />\t\t\t\t\t  <br />\t\t\t\t\t &lt;ion-fab middle center mini&gt;<br />\t\t\t\t\t   &lt;button ion-fab&gt;Share&lt;/button&gt;<br />\t\t\t\t\t  &lt;ion-fab-list side=\"top\"&gt;<br />\t\t\t\t\t   &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-facebook\" color=\"red\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t  &lt;/ion-fab-list&gt;<br />\t\t\t\t\t  &lt;ion-fab-list side=\"left\"&gt;<br />\t\t\t\t\t     &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-twitter\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t  &lt;/ion-fab-list&gt;<br />\t\t\t\t\t   &lt;ion-fab-list side=\"right\"&gt;<br />\t\t\t\t\t   &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-vimeo\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t  &lt;/ion-fab-list&gt;<br />\t\t\t\t\t   &lt;ion-fab-list side=\"bottom\"&gt;<br />\t\t\t\t\t    &lt;button ion-fab&gt;&lt;ion-icon name=\"logo-googleplus\"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />\t\t\t\t\t  &lt;/ion-fab-list&gt;<br />\t\t\t\t\t &lt;/ion-fab&gt;\n\t\t\t\t\t </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/fab/FabButton/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FABs);
    return FABs;
}());

//# sourceMappingURL=fabs.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gestures; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Gestures = (function () {
    function Gestures(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Gestures.prototype.tapEvent = function (args) {
        this.eventType = "名称" + args.type + ",序号" + args.eventType + ",时间" + args.deltaTime;
        console.log(args);
    };
    Gestures = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'gestures',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u624B\u52BF(gestures)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content>  \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header> \n\t\t\t      \u624B\u52BF\u4E8B\u4EF6\"\u70B9\u51FB\"(tap)\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  \t<ion-card (tap)=\"tapEvent($event)\">\n\t\t\t  \t\t<ion-card-content>\n\t\t\t\t    Tapped: {{eventType}}\n\t\t\t\t  </ion-card-content>\n\t\t\t\t</ion-card> \n\t\t\t\t\t  <code>\n\t\t\t\t\t </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#fabs\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header> \n\t\t\t      \u624B\u52BF\u4E8B\u4EF6\"\u6309\"(press)\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  \t<ion-card (press)=\"tapEvent($event)\">\n\t\t\t\t  <ion-card-content>\n\t\t\t\t    Tapped: {{eventType}}\n\t\t\t\t  </ion-card-content>\n\t\t\t\t</ion-card> \n\t\t\t\t\t  \n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#fabs\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card> \n\t\t\t<ion-card>  \n\t\t\t  <ion-card-header> \n\t\t\t      \u624B\u52BF\u4E8B\u4EF6\"\u6CDB\"(pan) \n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  \t<ion-card (pan)=\"tapEvent($event)\">\n\t\t\t\t   <ion-card-content>\n\t\t\t\t    Tapped: {{eventType}}\n\t\t\t\t  </ion-card-content>\n\t\t\t\t</ion-card> \n\t\t\t\t\t  <code>\n\t\t\t\t\t </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#fabs\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t<ion-card>  \n\t\t\t  <ion-card-header> \n\t\t\t      \u624B\u52BF\u4E8B\u4EF6\"\u5237\"(swipe)\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  \t<ion-card (swipe)=\"tapEvent($event)\">\n\t\t\t  \t\t<ion-card-content>\n\t\t\t\t    Tapped: {{eventType}}\n\t\t\t\t  </ion-card-content>\n\t\t\t\t</ion-card> \n\t\t\t\t\t  <code>\n\t\t\t\t\t </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#fabs\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t<ion-card>  \n\t\t\t  <ion-card-header> \n\t\t\t      \u624B\u52BF\u4E8B\u4EF6\"\u65CB\u8F6C\"(rotate)\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  \t<ion-card (rotate)=\"tapEvent($event)\">\n\t\t\t  \t\t<ion-card-content>\n\t\t\t\t    Tapped: {{eventType}}\n\t\t\t\t  </ion-card-content>\n\t\t\t\t</ion-card> \n\t\t\t\t\t  <code>\n\t\t\t\t\t </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#fabs\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t<ion-card>  \n\t\t\t  <ion-card-header> \n\t\t\t      \u624B\u52BF\u4E8B\u4EF6 \"\u634F\"(pinch)\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  \t<ion-card (pinch)=\"tapEvent($event)\">\n\t\t\t  \t\t<ion-card-content>\n\t\t\t\t    Tapped: {{eventType}}\n\t\t\t\t  </ion-card-content>\n\t\t\t\t</ion-card> \n\t\t\t\t\t  <code>\n\t\t\t\t\t </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#fabs\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card> \n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Gestures);
    return Gestures;
}());

//# sourceMappingURL=gestures.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Grid = (function () {
    function Grid(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Grid = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'grid',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\grid\grid.html"*/'<style type="text/css">\n	ion-grid {\n		border: 1px solid red;\n	}\n	\n	ion-col {\n		border: 1px solid green;\n	}\n</style>\n<ion-header>\n	<ion-navbar>\n		<ion-title>网格布局(grid)</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-card>\n		<ion-card-header>\n			<h5>自动布局</h5>\n		</ion-card-header>\n		<ion-card-content>\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						1 of 2\n					</ion-col>\n					<ion-col>\n						2 of 2\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col>\n						1 of 3\n					</ion-col>\n					<ion-col>\n						2 of 3\n					</ion-col>\n					<ion-col>\n						3 of 3\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col>\n						1 of 4\n					</ion-col>\n					<ion-col>\n						2 of 4\n					</ion-col>\n					<ion-col>\n						3 of 4\n					</ion-col>\n					<ion-col>\n						4 of 4\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<code>\n			 </code>\n			<a class="more" href="https://ionicframework.com/docs/api/components/grid/Grid/">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n	<ion-card>\n		<ion-card-header>\n			<h5>设置一个列宽</h5>\n		</ion-card-header>\n		<ion-card-content>\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						1 of 3\n					</ion-col>\n					<ion-col col-8>\n						2 of 3 (col-8)\n					</ion-col>\n					<ion-col>\n						3 of 3\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col>\n						1 of 3\n					</ion-col>\n					<ion-col col-6>\n						2 of 3 (col-6)\n					</ion-col>\n					<ion-col>\n						3 of 3\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<code>\n			 </code>\n			<a class="more" href="https://ionicframework.com/docs/api/components/grid/Grid/">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n	<ion-card>\n		<ion-card-header>\n			<h5>可变宽度 <code>col-auto</code></h5>\n		</ion-card-header>\n		<ion-card-content>\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						1 of 3\n					</ion-col>\n					<ion-col col-auto>\n						这一列是自动变宽的\n					</ion-col>\n					<ion-col>\n						3 of 3\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col>\n						1 of 4\n					</ion-col>\n					<ion-col>\n						2 of 4\n					</ion-col>\n					<ion-col col-auto>\n						<ion-input placeholder="这一列是自动变宽的"></ion-input>\n					</ion-col>\n					<ion-col>\n						4 of 4\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<code>\n			 </code>\n			<a class="more" href="https://ionicframework.com/docs/api/components/grid/Grid/">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			<h5>自定义宽度比例 <code>col-*</code></h5>\n		</ion-card-header>\n		<ion-card-content>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-4>\n						1 of 4\n					</ion-col>\n					<ion-col col-2>\n						2 of 4\n					</ion-col>\n					<ion-col col-2>\n						3 of 4\n					</ion-col>\n					<ion-col col-4>\n						4 of 4\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<code>\n			 </code>\n			<a class="more" href="https://ionicframework.com/docs/api/components/grid/Grid/">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			<h5>根据设备大小布局 <code>col-sm</code></h5>\n		</ion-card-header>\n		<ion-card-content>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-12 col-sm>\n						1 of 4\n					</ion-col>\n					<ion-col col-12 col-sm>\n						2 of 4\n					</ion-col>\n					<ion-col col-12 col-sm>\n						3 of 4\n					</ion-col>\n					<ion-col col-12 col-sm>\n						4 of 4\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<code>\n			 </code>\n			<a class="more" href="https://ionicframework.com/docs/api/components/grid/Grid/">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			<h5>偏移量<code>offset-*</code></h5>\n		</ion-card-header>\n		<ion-card-content>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-3>\n						1 of 2\n					</ion-col>\n					<ion-col col-3 offset-4>\n						2 of 2\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-md-3>\n						1 of 3\n					</ion-col>\n					<ion-col col-md-3>\n						2 of 3\n					</ion-col>\n					<ion-col col-md-3 offset-md-3>\n						3 of 3\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<code>\n			 </code>\n			<a class="more" href="https://ionicframework.com/docs/api/components/grid/Grid/">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			<h5>重新排列<code>push-*</code><code>pull-*</code></h5>\n		</ion-card-header>\n		<ion-card-content>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-9 push-3>\n						1 of 2\n					</ion-col>\n					<ion-col col-3 pull-9>\n						2 of 2\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6 push-6>\n						1 of 3\n					</ion-col>\n					<ion-col col-3 pull-3>\n						2 of 3\n					</ion-col>\n					<ion-col col-3 pull-9>\n						3 of 3\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<code>\n			 </code>\n			<a class="more" href="https://ionicframework.com/docs/api/components/grid/Grid/">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			<h5>垂直对齐  </h5>\n		</ion-card-header>\n		<ion-card-content>\n			<i> 行的属性 </i>\n			<br><code>align-items-start</code>\n			<br><code>align-items-center</code>\n			<br><code>align-items-end</code>\n			<ion-grid>\n				<ion-row align-items-start>\n					<ion-col>\n						1 of 4\n					</ion-col>\n					<ion-col>\n						2 of 4\n					</ion-col>\n					<ion-col>\n						3 of 4\n					</ion-col>\n					<ion-col>\n						4 of 4 <br>#<br>#<br>#\n					</ion-col>\n				</ion-row>\n				<ion-row align-items-center>\n					<ion-col>\n						1 of 4\n					</ion-col>\n					<ion-col>\n						2 of 4\n					</ion-col>\n					<ion-col>\n						3 of 4\n					</ion-col>\n					<ion-col>\n						4 of 4 <br>#<br>#<br>#\n					</ion-col>\n				</ion-row>\n				<ion-row align-items-end>\n					<ion-col>\n						1 of 4\n					</ion-col>\n					<ion-col>\n						2 of 4\n					</ion-col>\n					<ion-col>\n						3 of 4\n					</ion-col>\n					<ion-col>\n						4 of 4 <br>#<br>#<br>#\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<i>列的属性</i>\n			<br><code>align-self-start</code>\n			<br><code>align-self-center</code>\n			<br><code>align-self-end</code>\n			<ion-grid>\n				<ion-row>\n					<ion-col align-self-start>\n						<div>\n							1 of 4\n						</div>\n					</ion-col>\n					<ion-col align-self-center>\n						<div>\n							2 of 4\n						</div>\n					</ion-col>\n					<ion-col align-self-end>\n						<div>\n							3 of 4\n						</div>\n					</ion-col>\n					<ion-col>\n						<div>\n							4 of 4 <br>#<br>#<br>#\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<code>\n			 </code>\n			<a class="more" href="https://ionicframework.com/docs/api/components/grid/Grid/">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			<h5>水平居中</h5>\n		</ion-card-header>\n		<ion-card-content>\n			<i> 行的属性 </i>\n			<br><code>justify-content-start</code>\n			<br><code>justify-content-center</code>\n			<br><code>justify-content-end</code>\n			<br><code>justify-content-around</code>\n			<br><code>justify-content-between</code>\n			<ion-grid>\n				<ion-row justify-content-start>\n					<ion-col col-3>\n						1 of 2\n					</ion-col>\n					<ion-col col-3>\n						2 of 2\n					</ion-col>\n				</ion-row>\n				<ion-row justify-content-center>\n					<ion-col col-3>\n						1 of 2\n					</ion-col>\n					<ion-col col-3>\n						2 of 2\n					</ion-col>\n				</ion-row>\n				<ion-row justify-content-end>\n					<ion-col col-3>\n						1 of 2\n					</ion-col>\n					<ion-col col-3>\n						2 of 2\n					</ion-col>\n				</ion-row>\n				<ion-row justify-content-around>\n					<ion-col col-3>\n						1 of 2\n					</ion-col>\n					<ion-col col-3>\n						2 of 2\n					</ion-col>\n				</ion-row>\n				<ion-row justify-content-between>\n					<ion-col col-3>\n						1 of 2\n					</ion-col>\n					<ion-col col-3>\n						2 of 2\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<code>\n			 </code>\n			<a class="more" href="https://ionicframework.com/docs/api/components/grid/Grid/">更多信息</a>\n		</ion-card-content>\n	</ion-card>\n</ion-content>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\grid\grid.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Grid);
    return Grid;
}());

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icons; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Icons = (function () {
    function Icons(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.bool = false;
        this.boolOne = false;
        this.myIcon = "home";
    }
    Icons.prototype.ckd = function (args) {
        if (args) {
            this.bool = this.bool ? false : true;
        }
        else {
            this.boolOne = this.boolOne ? false : true;
        }
    };
    Icons = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'icons',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u56FE\u6807(icons)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\t<a class=\"more\" href=\"https://ionicframework.com/docs/ionicons/\">\u66F4\u591A\u56FE\u6807</a>\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t    \u57FA\u672C\u4F7F\u7528\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  <ion-icon name=\"heart\" color=\"danger\"  (click)=\"ckd(0)\" isActive=\"{{boolOne}}\"></ion-icon>&nbsp; &nbsp;             \n\t\t\t  <ion-icon name=\"heart\"  color=\"danger\" (click)=\"ckd(2)\" isActive=\"{{bool}}\"></ion-icon> \n\t\t\t  <ion-card>  \n\t\t\t\t <code>\n\t\t\t\t &lt;ion-icon name=\"heart\"&gt;&lt;/ion-icon&gt;<br />&lt;ion-icon name=\"heart\" isActive=\"false\"&gt;&lt;/ion-icon&gt;\n\t\t\t\t\t</code>\n\t\t\t  </ion-card>  \n\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/icon/Icon/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t\t<ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t   \u4F7F\u7528\u5E73\u53F0\u81EA\u5E26\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  <ion-icon ios=\"logo-apple\" md=\"logo-android\" isActive=\"false\"></ion-icon>\n\t\t\t  <ion-card>  \n\t\t\t\t <code> \n\t\t\t\t \t&lt;ion-icon ios=\"logo-apple\" md=\"logo-android\"&gt;&lt;/ion-icon&gt;\n\t\t\t\t\t</code>\n\t\t\t  </ion-card>  \n\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/icon/Icon/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t<ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t   \u4F7F\u7528\u53D8\u91CF\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t<ion-icon [name]=\"myIcon\"></ion-icon>\n\t\t\t  <ion-card>  \n\t\t\t\t <code> \n\t\t\t\t &lt;ion-icon [name]=\"myIcon\"&gt;&lt;/ion-icon&gt;\n\t\t\t\t\t</code>\n\t\t\t  </ion-card>  \n\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/icon/Icon/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Icons);
    return Icons;
}());

//# sourceMappingURL=icons.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inputs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Inputs = (function () {
    function Inputs(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Inputs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'inputs',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\inputs\inputs.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>输入框(inputs)</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			固定\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-label fixed>账户</ion-label>\n\n					<ion-input type="text" value=""></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					<ion-label fixed>密码</ion-label>\n\n					<ion-input type="password"></ion-input>\n\n				</ion-item>\n\n			</ion-list>\n\n			<button ion-button color="assertive">提交</button>\n\n			<code>\n\n				\n\n			 </code>\n\n			<br>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/input/Input/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			浮动\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-label floating>账户</ion-label>\n\n					<ion-input type="text" value=""></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					<ion-label floating>密码</ion-label>\n\n					<ion-input type="password"></ion-input>\n\n				</ion-item>\n\n			</ion-list>\n\n			<button ion-button color="primary">提交</button>\n\n			<code>\n\n				\n\n			 </code>\n\n			<br>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/input/Input/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			内联\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-label>账户</ion-label>\n\n					<ion-input type="text" value=""></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					<ion-label>密码</ion-label>\n\n					<ion-input type="password"></ion-input>\n\n				</ion-item>\n\n			</ion-list>\n\n			<button ion-button color="primary">提交</button>\n\n			<code>\n\n				\n\n			 </code>\n\n			<br>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/input/Input/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			嵌入\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list inset>\n\n				<ion-item>\n\n					<ion-label>账户</ion-label>\n\n					<ion-input type="text"></ion-input>\n\n				</ion-item>\n\n				<ion-item>\n\n					<ion-label>密码</ion-label>\n\n					<ion-input type="password"></ion-input>\n\n				</ion-item>\n\n			</ion-list>\n\n			<button ion-button color="primary">提交</button>\n\n			<code> \n\n			 </code>\n\n			<br>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/input/Input/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			占位符\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-input type="text" placeholder="账户"></ion-input>\n\n				</ion-item>\n\n				<ion-item>\n\n					<ion-input type="password" placeholder="密码"></ion-input>\n\n				</ion-item>\n\n			</ion-list>\n\n			<button ion-button color="primary">提交</button>\n\n			<code> \n\n			 </code>\n\n			<br>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/input/Input/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			堆积\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-label stacked>账户</ion-label>\n\n					<ion-input type="text"></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n					<ion-label stacked>密码</ion-label>\n\n					<ion-input type="password"></ion-input>\n\n				</ion-item>\n\n			</ion-list>\n\n			<button ion-button color="primary">提交</button>\n\n			<code> \n\n			 </code>\n\n			<br>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/input/Input/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\inputs\inputs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Inputs);
    return Inputs;
}());

//# sourceMappingURL=inputs.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Loading = (function () {
    function Loading(navCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    Loading.prototype.presentLoading = function (args) {
        var loader = this.loadingCtrl.create({
            content: "请稍等...",
            duration: args || 3000
        });
        loader.present();
    };
    Loading = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'loading',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u7B49\u5F85\u6548\u679C(loading)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\n\t\t\t<button ion-button color=\"secondary\" (click)=\"presentLoading(3000)\">3\u79D2\u7B49\u5F85</button>\n\t\t\t<button ion-button color=\"danger\" (click)=\"presentLoading(2000)\">2\u79D2\u7B49\u5F85</button>\n\t\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t    3\u79D2\u7684\u7B49\u5F85\u6548\u679C\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t  <code>\n\t\t\t\t\t  &lt;button ion-button color=\"secondary\"&gt;Secondary&lt;/button&gt;<br />\t\t\t&lt;button ion-button color=\"danger\"&gt;Danger&lt;/button&gt;\n\t\t\t\t\t </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#badges\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], Loading);
    return Loading;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_profile__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Modals = (function () {
    function Modals(navCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
    }
    Modals.prototype.console = function () {
        console.log(this.param);
    };
    Modals.prototype.openModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_profile__["a" /* ModalsProfile */]);
        profileModal.present();
    };
    Modals.prototype.presentProfileModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_profile__["a" /* ModalsProfile */], {
            userId: this.param || "123"
        });
        //监听销毁之后返回来的值
        profileModal.onDidDismiss(function (data) {
            _this.result = data.result;
        });
        profileModal.present();
    };
    Modals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'modals',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u6A21\u6001\u6846(modals)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t     <button ion-button color=\"danger\" (click)=\"openModal()\" full>\u6253\u5F00\u57FA\u672C\u6A21\u6001\u6846</button>\n\t\t\t     <ion-input type=\"text\" value=\"\" placeholder=\"\u586B\u5199\u53C2\u6570\" [(ngModel)]=\"param\"></ion-input>\n\t\t\t\t <button ion-button color=\"secondary\" (click)=\"presentProfileModal()\" full>\u6253\u5F00\u5E26\u53C2\u6570\u6A21\u6001\u6846\u8BA1\u7B97</button>\n\t\t\t\t  \u8BA1\u7B97\u7ED3\u679C\u4E3A{{result}}\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t  <code>\n\t\t\t\t\t </code>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#badges\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], Modals);
    return Modals;
}());

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_page__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Popover = (function () {
    function Popover(navCtrl, alertCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    Popover.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_page__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    Popover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u6F02\u6D6E\u7A97(popover)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u98D8\u7A97\u6D4B\u8BD5\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t  <button ion-button color=\"danger\" (click)=\"presentPopover($event)\" full>Danger</button>\n\t\t\t  <button ion-button color=\"secondary\" (click)=\"presentPopover($event)\" full>Secondary</button>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/popover/PopoverController/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]])
    ], Popover);
    return Popover;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover-page',
            template: "\n    <ion-list>\n      <ion-list-header>Ionic</ion-list-header>\n      <button ion-item (click)=\"close()\">Learn Ionic</button>\n      <button ion-item (click)=\"close()\">Documentation</button>\n      <button ion-item (click)=\"close()\">Showcase</button>\n      <button ion-item (click)=\"close()\">GitHub Repo</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover-page.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Range; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Range = (function () {
    function Range(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Range = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'range',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u6ED1\u5757(range)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content> \n\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t     \u57FA\u672C\u4F7F\u7528\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t  <ion-list>\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-range [(ngModel)]=\"singleValue\" color=\"danger\" pin=\"true\"></ion-range>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-range min=\"-200\" max=\"200\" [(ngModel)]=\"saturation\" color=\"secondary\">\n\t\t\t\t\t\t      <ion-label range-left>-200</ion-label>\n\t\t\t\t\t\t      <ion-label range-right>200</ion-label>\n\t\t\t\t\t\t    </ion-range>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\n\t\t\t\t\t\t <ion-item>\n\t\t\t\t\t\t   <ion-range min=\"20\" max=\"80\" step=\"2\" [(ngModel)]=\"brightness\">\n\t\t\t\t\t\t     <ion-icon small range-left name=\"sunny\"></ion-icon>\n\t\t\t\t\t\t     <ion-icon range-right name=\"sunny\"></ion-icon>\n\t\t\t\t\t\t   </ion-range>\n\t\t\t\t\t\t </ion-item>\n\t\t\t\t\t\t\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-label>step=100, snaps, </ion-label>\n\t\t\t\t\t\t    <ion-range min=\"1000\" max=\"2000\" step=\"100\" snaps=\"true\" color=\"secondary\" [(ngModel)]=\"singleValue4\"></ion-range>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-label>dual, step=3, snaps, </ion-label>\n\t\t\t\t\t\t    <ion-range dualKnobs=\"true\" [(ngModel)]=\"dualValue2\" min=\"21\" max=\"72\" step=\"3\" snaps=\"true\"></ion-range>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#badges\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Range);
    return Range;
}());

//# sourceMappingURL=range.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Searchbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_system__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Searchbar = (function () {
    function Searchbar(navCtrl, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.searchQuery = '';
        this.initializeItems();
    }
    Searchbar.prototype.initializeItems = function () {
        var _this = this;
        this.service.getColorList().then(function (args) {
            _this.items = args;
        });
    };
    Searchbar.prototype.getItems = function (ev) {
        var _this = this;
        this.initializeItems();
        var val = ev.target.value;
        setTimeout(function () {
            if (val && val.trim() != '') {
                _this.items = _this.items.filter(function (item) {
                    return (item.name.indexOf(val) > -1);
                });
            }
        }, 500);
    };
    Searchbar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'searchbar',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u641C\u7D22\u6846(searchbar)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content> \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u57FA\u672C\u4F7F\u7528\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t  <ion-searchbar (ionInput)=\"getItems($event)\"></ion-searchbar>\n\t\t\t\t\t\t<ion-list>\n\t\t\t\t\t\t  <ion-item *ngFor=\"let item of items\">\n\t\t\t\t\t\t    {{ item.name }}\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/searchbar/Searchbar/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_system__["a" /* SystemService */]])
    ], Searchbar);
    return Searchbar;
}());

//# sourceMappingURL=searchbar.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Segment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_system__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Segment = (function () {
    function Segment(navCtrl, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.relationship = "mage";
        this.myForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            mapStyle: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    Segment.prototype.ngOnInit = function () {
        this.initializeItems(this.relationship);
    };
    Segment.prototype.initializeItems = function (param) {
        var _this = this;
        this.service.getColorList().then(function (args) {
            if (param == "mage") {
                _this.heros = args[0].child;
            }
            else {
                _this.heros = args[2].child;
            }
        });
    };
    Segment.prototype.segmentChanged = function (args) {
        this.initializeItems(args.value);
    };
    Segment.prototype.selecteds = function (args) {
        //		console.log(args);
    };
    Segment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'segment',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\segment\segement.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>节点按钮(segment)</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<!--\n\n    	作者：maweichao90@126.com\n\n    	时间：2018-01-02\n\n    	描述：图标的方式\n\n    -->\n\n	<ion-card>\n\n		<ion-card-header>\n\n			基本使用(图标的方式)\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			{{icons}}\n\n			<ion-segment [(ngModel)]="icons" color="secondary">\n\n				<ion-segment-button value="camera">\n\n					<ion-icon name="camera"></ion-icon>\n\n				</ion-segment-button>\n\n				<ion-segment-button value="bookmark">\n\n					<ion-icon name="bookmark"></ion-icon>\n\n				</ion-segment-button>\n\n			</ion-segment>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#segment">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<!--\n\n    	作者：maweichao90@126.com\n\n    	时间：2018-01-02\n\n    	描述：按钮方式\n\n    -->\n\n	<ion-card>\n\n		<ion-card-header>\n\n			按钮的方式\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			{{relationship}}\n\n			<ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">\n\n				<ion-segment-button value="mage" (ionSelect)="selecteds(\'mage\')">\n\n					法师\n\n				</ion-segment-button>\n\n				<ion-segment-button value="assassin" (ionSelect)="selecteds(\'assassin\')">\n\n					刺客\n\n				</ion-segment-button>\n\n			</ion-segment>\n\n\n\n			<ion-list inset>\n\n				<ion-item *ngFor="let item of heros">\n\n					<ion-thumbnail item-start>\n\n						<img src="{{item.imgUrl}}">\n\n					</ion-thumbnail>\n\n					<h2>{{item.name}}</h2>\n\n					<p>{{ item.intro }}</p>\n\n				</ion-item>\n\n			</ion-list>\n\n\n\n			<a class="more" href="https://ionicframework.com/docs/components/#segment">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<!--\n\n    	作者：maweichao90@126.com\n\n    	时间：2018-01-02\n\n    	描述：表单方式\n\n    -->\n\n	<ion-card>\n\n		<ion-card-header>\n\n			表单方式\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<p>Form value: {{ myForm.value | json }}</p>\n\n			<p>Form status: {{ myForm.status | json }}</p>\n\n			<form [formGroup]="myForm">\n\n				<ion-segment formControlName="mapStyle" color="danger">\n\n					<ion-segment-button value="standard">\n\n						Standard\n\n					</ion-segment-button>\n\n					<ion-segment-button value="hybrid">\n\n						Hybrid\n\n					</ion-segment-button>\n\n					<ion-segment-button value="sat">\n\n						Satellite\n\n					</ion-segment-button>\n\n				</ion-segment>\n\n			</form>\n\n			<a class="more" href="https://ionicframework.com/docs/components/#segment">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\segment\segement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__service_system__["a" /* SystemService */]])
    ], Segment);
    return Segment;
}());

//# sourceMappingURL=segment.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_system__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Selects = (function () {
    function Selects(navCtrl, alertCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.selectOptions = {
            title: '标题',
            subTitle: '摘要',
            mode: 'md',
        };
        this.service.getColorList().then(function (args) {
            _this.items = args;
        });
    }
    Selects.prototype.compareFn = function (e1, e2) {
        console.log(e1);
        console.log(e2);
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    Selects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'selects',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u4E0B\u62C9\u6846(select)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content> \n\t\t\t \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u57FA\u672C\u4F7F\u7528(\u5355\u9009)\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t   <ion-list>\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-label>\u7231\u597D</ion-label>\n\t\t\t\t\t\t    <ion-select [(ngModel)]=\"value\">\n\t\t\t\t\t\t      <ion-option value=\"\u5403\">\u5403</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u559D\">\u559D</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u73A9\">\u73A9</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u4E50\">\u4E50</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u7761\">\u7761</ion-option>\n\t\t\t\t\t\t    </ion-select>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t</ion-list>\n\t\t\t\t    <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/select/Select/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t \n\t\t\t \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u591A\u9009\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t   <ion-list>\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-label>\u7231\u597D</ion-label>\n\t\t\t\t\t\t    <ion-select okText=\"\u786E\u5B9A\" cancelText=\"\u53D6\u6D88\" [(ngModel)]=\"multipleValue\" multiple=\"true\">\n\t\t\t\t\t\t      <ion-option value=\"\u5403\">\u5403</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u559D\">\u559D</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u73A9\">\u73A9</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u4E50\">\u4E50</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u7761\">\u7761</ion-option>\n\t\t\t\t\t\t    </ion-select>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t</ion-list>\n\t\t\t\t    <a class=\"more\"   href=\"https://ionicframework.com/docs/api/components/select/Select/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u81EA\u5B9A\u4E49\u4E0B\u62C9\u5C55\u793A\u65B9\u5F0F(\u4E0A\u62C9\u83DC\u5355,\u5F39\u6846,\u98D8\u7A97)action-sheet, popover or alert. Default: alert.\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t     <ion-list>\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-label>\u7231\u597D</ion-label>\n\t\t\t\t\t\t    <ion-select okText=\"\u786E\u5B9A\" cancelText=\"\u53D6\u6D88\"  interface= \"action-sheet\" [(ngModel)]=\"selectOptionsValue\" [selectOptions]=\"selectOptions\">\n\t\t\t\t\t\t      <ion-option value=\"\u5403\">\u5403</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u559D\">\u559D</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u73A9\">\u73A9</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u4E50\">\u4E50</ion-option>\n\t\t\t\t\t\t      <ion-option value=\"\u7761\">\u7761</ion-option>\n\t\t\t\t\t\t    </ion-select>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t</ion-list>\n\t\t\t\t    <a class=\"more\"   href=\"https://ionicframework.com/docs/api/components/select/Select/\">\u53C2\u6570\u5177\u4F53\u4F20\u9012\u8BE6\u7EC6</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t     \u5BF9\u8C61\u503C\u5F15\u7528(\u70B9\u51FB\u5BF9\u8C61\u6BD4\u8F83\u5217\u8868\u7684\u6BCF\u4E00\u4E2A\u9879)\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t    \t<ion-item>\n\t\t\t\t\t\t  <ion-label>Employee</ion-label>\n\t\t\t\t\t\t  <ion-select [(ngModel)]=\"employee\" [compareWith]=\"compareFn\">\n\t\t\t\t\t\t    <ion-option *ngFor=\"let employee of items\" [value]=\"employee\">{{employee.name}}</ion-option>\n\t\t\t\t\t\t  </ion-select>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t    <a class=\"more\"   href=\"https://ionicframework.com/docs/api/components/select/Select/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t\t\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_system__["a" /* SystemService */]])
    ], Selects);
    return Selects;
}());

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Slide = (function () {
    function Slide(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Slide.prototype.ngAfterViewInit = function () {
        this.slides.autoplay = 3000;
    };
    Slide.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    //上下切换
    Slide.prototype.pre_next = function (args) {
        if (args) {
            this.slides.slideNext(500, true);
        }
        else {
            this.slides.slidePrev(500, true);
        }
    };
    //自动播放
    Slide.prototype.isAutoplay = function (evt) {
        if (evt.value) {
            this.slides.startAutoplay();
        }
        else {
            this.slides.stopAutoplay();
        }
    };
    Slide.prototype.slideChanged = function () {
        this.index = this.slides.getActiveIndex();
        console.log("监听滚动方法");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], Slide.prototype, "slides", void 0);
    Slide = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'slide',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u5E7B\u706F\u7247(slides)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content> \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u57FA\u672C\u4F7F\u7528\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content > \n\t\t\t  \t\t\u4E0B\u6807:{{index}}<br>\n\t\t\t  \t\t <ion-item>\n\t\t\t\t\t  <ion-label>\u81EA\u52A8\u64AD\u653E</ion-label>\n\t\t\t\t\t  <ion-checkbox color=\"blue\" checked=\"true\" (ionChange)=\"isAutoplay($event)\"></ion-checkbox>\n\t\t\t\t\t</ion-item> \n\t\t\t\t\t<button ion-button color=\"secondary\" (click)=\"goToSlide()\">\u8DF3\u5230\u82B1\u6728\u5170\u56FE\u7247</button>  \n\t\t\t\t\t<button ion-button (click)=\"pre_next(0)\">\u4E0A\u4E00\u9875</button>\n\t\t\t\t\t<button ion-button color=\"danger\" (click)=\"pre_next(1)\">\u4E0B\u4E00\u9875</button>\n\t\t\t\t\t <ion-slides (ionSlideDidChange)=\"slideChanged()\" [loop]=\"true\">\n\t\t\t\t\t  <ion-slide  style=\"background-color: green\">\n\t\t\t\t\t   <img src=\"assets/imgs/diaochan.jpg\">\n\t\t\t\t\t  </ion-slide>\n\t\t\t\t\t  <ion-slide style=\"background-color: blue\">\n\t\t\t\t\t   <img src=\"assets/imgs/huamulan.jpg\">\n\t\t\t\t\t  </ion-slide>\n\t\t\t\t\t  <ion-slide style=\"background-color: red\">\n\t\t\t\t\t   <img src=\"assets/imgs/anqila.jpg\">\n\t\t\t\t\t  </ion-slide>\n\t\t\t\t\t</ion-slides>\n\t\t\t\t\t<br>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/slides/Slides/#startAutoplay\">\u66F4\u591AAPI\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Slide);
    return Slide;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Toast = (function () {
    function Toast(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    Toast.prototype.presentToast = function (args) {
        var toast = this.toastCtrl.create({
            message: '测试提示信息显示',
            duration: 3000,
            position: args || "bottom"
        });
        toast.onDidDismiss(function () {
            console.log('监听关闭方法');
        });
        toast.present();
    };
    Toast = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'toast',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u63D0\u793A\u6846(toast)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u57FA\u672C\u4F7F\u7528\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t <button ion-button full (click)=\"presentToast('bottom')\">\u5E95\u90E8\u5F39\u51FA</button>\n\t\t\t\t\t<button ion-button color=\"secondary\" full (click)=\"presentToast('top')\">\u9876\u90E8\u5F39\u51FA</button>\n\t\t\t\t\t<button ion-button color=\"danger\" full (click)=\"presentToast('middle')\">\u4E2D\u95F4\u5F39\u51FA</button>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/api/components/toast/ToastController/\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], Toast);
    return Toast;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Toggle = (function () {
    function Toggle(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Toggle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'toggle',
            template: " \n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u5F00\u5173(toggle)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\n\t\t\t<button ion-button color=\"light\">Light</button>\n\t\t\t<button ion-button>Default</button>\n\t\t\t<button ion-button color=\"secondary\">Secondary</button>\n\t\t\t<button ion-button color=\"danger\">Danger</button>\n\t\t\t<button ion-button color=\"dark\">Dark</button>\n\t\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t     \u57FA\u672C\u4F7F\u7528\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content> \n\t\t\t\t\t  <ion-list> \n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-label>Pepperoni</ion-label>\n\t\t\t\t\t\t    <ion-toggle [(ngModel)]=\"pepperoni\"></ion-toggle>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-label>Sausage</ion-label>\n\t\t\t\t\t\t    <ion-toggle [(ngModel)]=\"sausage\" disabled=\"true\"></ion-toggle>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t    <ion-label>Mushrooms</ion-label>\n\t\t\t\t\t\t    <ion-toggle [(ngModel)]=\"mushrooms\"></ion-toggle>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#badges\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Toggle);
    return Toggle;
}());

//# sourceMappingURL=toggle.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_system__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Toolbar = (function () {
    function Toolbar(navCtrl, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.searchQuery = '';
        this.initializeItems();
    }
    Toolbar.prototype.initializeItems = function () {
        var _this = this;
        this.service.getColorList().then(function (args) {
            _this.items = args;
        });
    };
    Toolbar.prototype.getItems = function (ev) {
        var _this = this;
        this.initializeItems();
        var val = ev.target.value;
        setTimeout(function () {
            if (val && val.trim() != '') {
                _this.items = _this.items.filter(function (item) {
                    return (item.name.indexOf(val) > -1);
                });
            }
        }, 500);
    };
    Toolbar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'toolbar',
            template: " \n\t\t<style type=\"text/css\">\n\t\t\t.container {\n\t\t\t\tposition: relative;\n\t\t\t\tmin-height: 450px;\n\t\t\t}\n\t\t\t.container ion-footer{\n\t\t\t\tbottom:0px;\n\t\t\t}\n\t\t</style>\n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t\t<ion-title>\u5DE5\u5177\u680F(toolbar)</ion-title>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\t\t<ion-content padding> \n\t\t\t\n\t\t\t <ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u57FA\u672C\u4F7F\u7528\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content class=\"container\"> \n\t\t\t  \t\t\t<ion-header>\n\t\t\t\t\t\t  <ion-toolbar>\n\t\t\t\t\t\t    <ion-title>Toolbar</ion-title>\n\t\t\t\t\t\t  </ion-toolbar>\n\t\t\t\t\t\t</ion-header>\n\t\t\t\t\t\t<ion-content>\n\t\t\t\t\t\t\t\t <p>\u5185\u5BB9\u533A\u57DF</p> <p>\u5185\u5BB9\u533A\u57DF</p> <p>\u5185\u5BB9\u533A\u57DF</p> <p>\u5185\u5BB9\u533A\u57DF</p> \n\t\t\t\t\t\t\t\t <a class=\"more\" href=\"https://ionicframework.com/docs/components/#toolbar\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t\t\t\t</ion-content>\n\t\t\t\t\t\t<ion-footer>\n\t\t\t\t\t\t  <ion-toolbar>\n\t\t\t\t\t\t    <ion-title>Footer</ion-title>\n\t\t\t\t\t\t  </ion-toolbar>\n\t\t\t\t\t\t</ion-footer>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t\t<ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u6539\u53D8\u989C\u8272\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content class=\"container\"> \n\t\t\t  \t\t<ion-header>\n\t\t\t\t\t\t  <ion-toolbar  color=\"primary\">\n\t\t\t\t\t\t    <ion-title>Toolbar</ion-title>\n\t\t\t\t\t\t  </ion-toolbar>\n\t\t\t\t\t\t</ion-header>\n\t\t\t\t\t\t<ion-content class=\"container\">\n\t\t\t\t\t\t\t\t <p>\u989C\u8272\u503C:primary,secondary,danger,dark</p>\n\t\t\t\t\t\t\t\t <p>\u989C\u8272\u503C:primary,secondary,danger,dark</p>\n\t\t\t\t\t\t\t\t <p>\u989C\u8272\u503C:primary,secondary,danger,dark</p>\n\t\t\t\t\t\t</ion-content>\n\t\t\t\t\t\t<ion-footer>\n\t\t\t\t\t\t  <ion-toolbar color=\"primary\">\n\t\t\t\t\t\t    <ion-title>Footer</ion-title>\n\t\t\t\t\t\t  </ion-toolbar>\n\t\t\t\t\t\t</ion-footer> \n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#toolbar\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t\t<ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u5DE5\u5177\u680F\u4E2D\u7684\u6309\u94AE\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content class=\"container\"> \n\t\t\t  \t\t \t<ion-header>\n\t\t\t\t\t\t  <ion-toolbar>\n\t\t\t\t\t\t    <ion-buttons start>\n\t\t\t\t\t\t      <button ion-button icon-only color=\"royal\">\n\t\t\t\t\t\t        <ion-icon name=\"search\"></ion-icon>\n\t\t\t\t\t\t      </button>\n\t\t\t\t\t\t    </ion-buttons>\n\t\t\t\t\t\t    <ion-title>Send To...</ion-title>\n\t\t\t\t\t\t    <ion-buttons end>\n\t\t\t\t\t\t      <button ion-button icon-only color=\"royal\">\n\t\t\t\t\t\t        <ion-icon name=\"person-add\"></ion-icon>\n\t\t\t\t\t\t      </button>\n\t\t\t\t\t\t    </ion-buttons>\n\t\t\t\t\t\t  </ion-toolbar>\n\t\t\t\t\t\t</ion-header>\n\t\t\t\t\t\t<ion-content>\u5185\u5BB9\u533A\u57DF</ion-content>\n\t\t\t\t\t\t<ion-footer>\n\t\t\t\t\t\t  <ion-toolbar>\n\t\t\t\t\t\t    <p>Ash, Misty, Brock</p>\n\t\t\t\t\t\t    <ion-buttons end>\n\t\t\t\t\t\t      <button ion-button icon-right color=\"royal\">\n\t\t\t\t\t\t        Send\n\t\t\t\t\t\t        <ion-icon name=\"send\"></ion-icon>\n\t\t\t\t\t\t      </button>\n\t\t\t\t\t\t    </ion-buttons>\n\t\t\t\t\t\t  </ion-toolbar>\n\t\t\t\t\t\t</ion-footer>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#toolbar\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t\t<ion-card>  \n\t\t\t  <ion-card-header>\n\t\t\t      \u5DE5\u5177\u680F\u4E2D\u7684\u641C\u7D22\n\t\t\t  </ion-card-header> \n\t\t\t  <ion-card-content class=\"container\"> \n\t\t\t  \t\t \t <ion-header>\n\t\t\t\t\t\t  <ion-toolbar color=\"primary\">\n\t\t\t\t\t\t    <ion-searchbar (input)=\"getItems($event)\"></ion-searchbar>\n\t\t\t\t\t\t  </ion-toolbar>\n\t\t\t\t\t\t</ion-header>\n\t\t\t\t\t\t<br><br><br><br>\n\t\t\t\t\t\t  <ion-list>\n\t\t\t\t\t\t    <ion-item *ngFor=\"let item of items\">\n\t\t\t\t\t\t       {{ item.name }}\n\t\t\t\t\t\t    </ion-item>\n\t\t\t\t\t\t  </ion-list>\n\t\t\t\t\t  <a class=\"more\" href=\"https://ionicframework.com/docs/components/#toolbar\">\u66F4\u591A\u4FE1\u606F</a>\n\t\t\t </ion-card-content>\n\t\t\t</ion-card>\n\t\t\t\n\t\t</ion-content>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_system__["a" /* SystemService */]])
    ], Toolbar);
    return Toolbar;
}());

//# sourceMappingURL=toolbar.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_head_footer_head_footer__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_action_sheet_action_sheet__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_alert_alert__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_badges_badges__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_buttons_buttons__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cards_cards__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkbox_checkbox__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_date_time_date_time__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_fabs_fabs__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_gestures_gestures__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_grid_grid__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_icons_icons__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_inputs_inputs__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_lists_lists__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_loading_loading__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modals_modals__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modals_modals_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_navigation_navigation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_navigation_other_page__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_navigation_main_page__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_popover_popover__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_popover_popover_page__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_radio_radio__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_range_range__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_searchbar_searchbar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_segment_segment__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_select_select__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_slides_slides__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_toast_toast__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_toggle_toggle__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_toolbar_toolbar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__service_system__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* Menu */],
                __WEBPACK_IMPORTED_MODULE_11__pages_action_sheet_action_sheet__["a" /* ActionSheet */],
                __WEBPACK_IMPORTED_MODULE_10__pages_head_footer_head_footer__["a" /* HeaderFooter */],
                __WEBPACK_IMPORTED_MODULE_12__pages_alert_alert__["a" /* Alert */],
                __WEBPACK_IMPORTED_MODULE_13__pages_badges_badges__["a" /* Badges */],
                __WEBPACK_IMPORTED_MODULE_14__pages_buttons_buttons__["a" /* Buttons */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cards_cards__["a" /* Cards */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkbox_checkbox__["a" /* Checkbox */],
                __WEBPACK_IMPORTED_MODULE_17__pages_date_time_date_time__["a" /* DateTime */],
                __WEBPACK_IMPORTED_MODULE_18__pages_fabs_fabs__["a" /* FABs */],
                __WEBPACK_IMPORTED_MODULE_19__pages_gestures_gestures__["a" /* Gestures */],
                __WEBPACK_IMPORTED_MODULE_20__pages_grid_grid__["a" /* Grid */],
                __WEBPACK_IMPORTED_MODULE_21__pages_icons_icons__["a" /* Icons */],
                __WEBPACK_IMPORTED_MODULE_22__pages_inputs_inputs__["a" /* Inputs */],
                __WEBPACK_IMPORTED_MODULE_23__pages_lists_lists__["a" /* Lists */],
                __WEBPACK_IMPORTED_MODULE_24__pages_loading_loading__["a" /* Loading */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modals_modals__["a" /* Modals */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modals_modals_profile__["a" /* ModalsProfile */],
                __WEBPACK_IMPORTED_MODULE_27__pages_navigation_navigation__["a" /* Navigation */],
                __WEBPACK_IMPORTED_MODULE_29__pages_navigation_main_page__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_navigation_other_page__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_popover_popover__["a" /* Popover */],
                __WEBPACK_IMPORTED_MODULE_31__pages_popover_popover_page__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_radio_radio__["a" /* Radio */],
                __WEBPACK_IMPORTED_MODULE_33__pages_range_range__["a" /* Range */],
                __WEBPACK_IMPORTED_MODULE_34__pages_searchbar_searchbar__["a" /* Searchbar */],
                __WEBPACK_IMPORTED_MODULE_35__pages_segment_segment__["a" /* Segment */],
                __WEBPACK_IMPORTED_MODULE_36__pages_select_select__["a" /* Selects */],
                __WEBPACK_IMPORTED_MODULE_37__pages_slides_slides__["a" /* Slide */],
                __WEBPACK_IMPORTED_MODULE_38__pages_toast_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_39__pages_toggle_toggle__["a" /* Toggle */],
                __WEBPACK_IMPORTED_MODULE_40__pages_toolbar_toolbar__["a" /* Toolbar */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* Menu */],
                __WEBPACK_IMPORTED_MODULE_10__pages_head_footer_head_footer__["a" /* HeaderFooter */],
                __WEBPACK_IMPORTED_MODULE_11__pages_action_sheet_action_sheet__["a" /* ActionSheet */],
                __WEBPACK_IMPORTED_MODULE_12__pages_alert_alert__["a" /* Alert */],
                __WEBPACK_IMPORTED_MODULE_13__pages_badges_badges__["a" /* Badges */],
                __WEBPACK_IMPORTED_MODULE_14__pages_buttons_buttons__["a" /* Buttons */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cards_cards__["a" /* Cards */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkbox_checkbox__["a" /* Checkbox */],
                __WEBPACK_IMPORTED_MODULE_17__pages_date_time_date_time__["a" /* DateTime */],
                __WEBPACK_IMPORTED_MODULE_18__pages_fabs_fabs__["a" /* FABs */],
                __WEBPACK_IMPORTED_MODULE_19__pages_gestures_gestures__["a" /* Gestures */],
                __WEBPACK_IMPORTED_MODULE_20__pages_grid_grid__["a" /* Grid */],
                __WEBPACK_IMPORTED_MODULE_21__pages_icons_icons__["a" /* Icons */],
                __WEBPACK_IMPORTED_MODULE_22__pages_inputs_inputs__["a" /* Inputs */],
                __WEBPACK_IMPORTED_MODULE_23__pages_lists_lists__["a" /* Lists */],
                __WEBPACK_IMPORTED_MODULE_24__pages_loading_loading__["a" /* Loading */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modals_modals__["a" /* Modals */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modals_modals_profile__["a" /* ModalsProfile */],
                __WEBPACK_IMPORTED_MODULE_27__pages_navigation_navigation__["a" /* Navigation */],
                __WEBPACK_IMPORTED_MODULE_29__pages_navigation_main_page__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_navigation_other_page__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_popover_popover__["a" /* Popover */],
                __WEBPACK_IMPORTED_MODULE_31__pages_popover_popover_page__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_radio_radio__["a" /* Radio */],
                __WEBPACK_IMPORTED_MODULE_33__pages_range_range__["a" /* Range */],
                __WEBPACK_IMPORTED_MODULE_34__pages_searchbar_searchbar__["a" /* Searchbar */],
                __WEBPACK_IMPORTED_MODULE_35__pages_segment_segment__["a" /* Segment */],
                __WEBPACK_IMPORTED_MODULE_36__pages_select_select__["a" /* Selects */],
                __WEBPACK_IMPORTED_MODULE_37__pages_slides_slides__["a" /* Slide */],
                __WEBPACK_IMPORTED_MODULE_38__pages_toast_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_39__pages_toggle_toggle__["a" /* Toggle */],
                __WEBPACK_IMPORTED_MODULE_40__pages_toolbar_toolbar__["a" /* Toolbar */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_splash_screen__["a" /* SplashScreen */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_43__service_system__["a" /* SystemService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_data__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemService = (function () {
    function SystemService(http) {
        this.http = http;
    }
    SystemService.prototype.getMenuListP = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__app_data__["b" /* MenuList */]);
    };
    SystemService.prototype.getColorList = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__app_data__["a" /* ColorList */]);
    };
    SystemService.prototype.getProvinceList = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__app_data__["c" /* ProvinceList */]);
    };
    SystemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SystemService);
    return SystemService;
}());

//# sourceMappingURL=system.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProvinceList; });
var MenuList = [{
        name: "工具栏(Toolbar)",
        childAry: [{
                id: "Toolbar",
                title: "Toolbar",
                links: ""
            }]
    }, {
        name: "开关(Toggle)",
        childAry: [{
                id: "Toggle",
                title: "Toggle",
                links: ""
            }]
    },
    {
        name: "提示框(Toast)",
        childAry: [{
                id: "Toast",
                title: "Toast",
                links: ""
            }]
    },
    {
        name: "轮播(Slide)",
        childAry: [{
                id: "Slide",
                title: "Slide",
                links: ""
            }]
    },
    {
        name: "下拉框(Selects)",
        childAry: [{
                id: "Selects",
                title: "Selects",
                links: ""
            }]
    },
    {
        name: "节点按钮(Segment)",
        childAry: [{
                id: "Segment",
                title: "Segment",
                links: ""
            }]
    },
    {
        name: "搜索栏(Searchbar)",
        childAry: [{
                id: "Searchbar",
                title: "Searchbar",
                links: ""
            }]
    }, {
        name: "滑块(Range)",
        childAry: [{
                id: "Range",
                title: "Range",
                links: ""
            }]
    },
    {
        name: "单选(Radio)",
        childAry: [{
                id: "Radio",
                title: "Radio",
                links: ""
            }]
    }, {
        name: "飘窗(Popover)",
        childAry: [{
                id: "Popover",
                title: "Popover",
                links: ""
            }]
    }, {
        name: "导航(Navigation)",
        childAry: [{
                id: "Navigation",
                title: "Navigation",
                links: ""
            }]
    }, {
        name: "模态框(Modals)",
        childAry: [{
                id: "Modals",
                title: "Modals",
                links: ""
            }]
    }, {
        name: "等待(Loading)",
        childAry: [{
                id: "Loading",
                title: "Loading",
                links: ""
            }]
    }, {
        name: "列表(Lists)",
        childAry: [{
                id: "Lists",
                title: "Lists",
                links: ""
            }]
    }, {
        name: "输入框(Inputs)",
        childAry: [{
                id: "Inputs",
                title: "Inputs",
                links: ""
            }]
    },
    {
        name: "图标(Icon)",
        childAry: [{
                id: "Icons",
                title: "Icon",
                links: ""
            }]
    }, {
        name: "网格(Grid)",
        childAry: [{
                id: "Grid",
                title: "Grid",
                links: ""
            }]
    },
    {
        name: "手势(Gestures)",
        childAry: [{
                id: "Gestures",
                title: "Gestures",
                links: ""
            }]
    },
    {
        name: "浮动贴(FABs)",
        childAry: [{
                id: "FABs",
                title: "FABs",
                links: ""
            }]
    },
    {
        name: "时间(DateTime)",
        childAry: [{
                id: "DateTime",
                title: "DateTime",
                links: ""
            }]
    },
    {
        name: "复选框(Checkbox)",
        childAry: [{
                id: "Checkbox",
                title: "Checkbox",
                links: ""
            }]
    },
    {
        name: "按钮(Buttons)",
        childAry: [{
                id: "Buttons",
                title: "Buttons",
                links: ""
            }]
    }, {
        name: "卡片(Cards)",
        childAry: [{
                id: "Cards",
                title: "Cards",
                links: ""
            }]
    }, {
        name: "菜单(Side Menus)",
        childAry: [{
                id: "Menu",
                title: "Menu",
                links: ""
            }]
    }, {
        name: "页眉页脚(Headers/Footers)",
        childAry: [{
                id: "Header&Footer",
                title: "Header&Footer",
                links: ""
            }]
    }, {
        name: "上滑菜单(ActionSheetController)",
        childAry: [{
                id: "ActionSheet",
                title: "ActionSheet",
                links: ""
            }]
    }, {
        name: "弹框(AlertController)",
        childAry: [{
                id: "Alert",
                title: "Alert",
                links: ""
            }]
    }, {
        name: "徽章(Badges)",
        childAry: [{
                id: "Badges",
                title: "badges",
                links: ""
            }]
    },
];
var ColorList = [{
        id: "1",
        name: "法师",
        type: "法师",
        child: [{
                name: '貂蝉',
                imgUrl: 'assets/imgs/diaochan.jpg',
                intro: "容貌倾城，身段柔美。舞姿带有致命的诱惑，曼妙玲珑。莲花是她的象征。貂蝉在团战中有重要的作用。"
            }, {
                name: '安其拉',
                imgUrl: 'assets/imgs/anqila.jpg',
                intro: "其大范围的攻击、稳定的眩晕和灵活免控的大招，让这位魔法少女更具有杀伤力。"
            }, {
                name: '王昭君',
                imgUrl: 'assets/imgs/wangzhaojun.jpg',
                intro: "王昭君，《王者荣耀》中的一位女性法师英雄，擅长团控，在团战中有很大的作用，喜好梅花"
            }, {
                name: '妲己',
                imgUrl: 'assets/imgs/daji.jpg',
                intro: "妲己，腾讯手游《王者荣耀》女性英雄之一。法师类角色，拥有先手控制敌人，而且在后期超高爆发的特长。[1]  《王者荣耀》官方代言英雄，有着想要拥有真正的心的愿望"
            }],
        color: "secondary",
    }, {
        id: "2",
        name: "坦克",
        type: "坦克",
        child: [{
                name: '吕布',
                imgUrl: ''
            }, {
                name: '梦琪',
                imgUrl: ''
            }, {
                name: '项羽',
                imgUrl: ''
            }],
        color: "danger"
    }, {
        id: "3",
        name: "刺客",
        type: "刺客",
        child: [{
                name: '荆轲',
                imgUrl: 'assets/imgs/jingke.jpg',
                intro: "暗夜中隐藏着神秘的刺客一族“荆氏”。他们掌握着代代相传的杀人之剑的秘诀，收受佣金为雇主服务。 "
            }, {
                name: '花木兰',
                imgUrl: 'assets/imgs/huamulan.jpg',
                intro: "花木兰的双剑形态更倾向于刺客，沉默与减速效果能有效的追击敌方后排和落单英雄/花木兰的重剑形态更倾向于战士，拥有更加强大的输出能力和身体强度."
            }, {
                name: '李白',
                imgUrl: 'assets/imgs/libai.jpg',
                intro: "和其他刺客一样，李白有位移、有控制、有输出，但是自身较脆。李白对比其他刺客英雄（如孙悟空，韩信等等），基本没有对暴击效果的需求。但李白有一个伤害高的大招，李白的大招有输出，是AOE（群体伤害），还能暂时处于无法选中的状态，所以李白大招的释放是李白运用的关键"
            }],
        color: "light"
    }, {
        id: "4",
        name: "射手",
        type: "射手",
        child: [{
                name: '百里守约',
                imgUrl: ''
            }, {
                name: '鲁班',
                imgUrl: ''
            }, {
                name: '狄仁杰',
                imgUrl: ''
            }],
        color: "dark"
    }];
var ProvinceList = [{
        id: "001",
        name: "beijing",
        value: "北京"
    }, {
        id: "002",
        name: "shagnhai",
        value: "上海"
    }, {
        id: "003",
        name: "tianjin",
        value: "天津"
    }, {
        id: "004",
        name: "chongqing",
        value: "重庆"
    }, {
        id: "005",
        name: "hebei",
        value: "河北"
    }, {
        id: "006",
        name: "shanxi",
        value: "山西"
    }, {
        id: "007",
        name: "neimeng",
        value: "内蒙"
    }, {
        id: "008",
        name: "liaoning",
        value: "辽宁"
    }, {
        id: "009",
        name: "jilin",
        value: "吉林"
    }, {
        id: "010",
        name: "heilongjiang",
        value: "黑龙江"
    }, {
        id: "011",
        name: "jiangsu",
        value: "江苏"
    }, {
        id: "012",
        name: "zhejiang",
        value: "浙江"
    }, {
        id: "013",
        name: "anhui",
        value: "安徽"
    }, {
        id: "014",
        name: "fujian",
        value: "福建"
    }, {
        id: "015",
        name: "jiangxi",
        value: "江西"
    }, {
        id: "016",
        name: "shandong",
        value: "山东"
    }, {
        id: "017",
        name: "henan",
        value: "河南"
    }, {
        id: "018",
        name: "hubei",
        value: "湖北"
    }, {
        id: "019",
        name: "hunan",
        value: "湖南"
    }, {
        id: "020",
        name: "guangdong",
        value: "广东"
    }, {
        id: "021",
        name: "guangxi",
        value: "广西"
    }, {
        id: "022",
        name: "hainan",
        value: "海南"
    }, {
        id: "023",
        name: "sichuan",
        value: "四川"
    }, {
        id: "024",
        name: "guizhou",
        value: "贵州"
    }, {
        id: "025",
        name: "yunnan",
        value: "云南"
    }, {
        id: "026",
        name: "xizang",
        value: "西藏"
    }, {
        id: "027",
        name: "shanxi",
        value: "陕西"
    }, {
        id: "028",
        name: "gansu",
        value: "甘肃"
    }, {
        id: "029",
        name: "ningxia",
        value: "宁夏"
    }, {
        id: "030",
        name: "qinghai",
        value: "青海"
    }, {
        id: "031",
        name: "xinjiang",
        value: "新疆"
    }, {
        id: "032",
        name: "xianggang",
        value: "香港"
    }, {
        id: "033",
        name: "aomen",
        value: "澳门"
    }, {
        id: "034",
        name: "taiwan",
        value: "台湾"
    }, {
        id: "035",
        name: "qita",
        value: "其它"
    }];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lists; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_system__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Lists = (function () {
    function Lists(navCtrl, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
    }
    Lists.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getColorList().then(function (args) {
            _this.items = args;
            _this.heros = args[0].child;
        });
    };
    Lists.prototype.itemSelected = function (args) {
    };
    Lists = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lists',template:/*ion-inline-start:"E:\mytest\angular\ionic\myionic\src\pages\lists\lists.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>列表(lists)</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			基本\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n				    {{ item.name }}\n\n				  </button>\n\n			</ion-list>\n\n\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/list/List/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			去掉底部线\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list no-lines>\n\n				<button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n				    {{ item.name }}\n\n				  </button>\n\n			</ion-list>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/list/List/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			分割线\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list inset>\n\n				<button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n				    {{ item.color }}\n\n				  </button>\n\n			</ion-list>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/list/List/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-header>\n\n			分组\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-item-group *ngFor="let item of items">\n\n				<ion-item-divider color="light">{{item.type}}</ion-item-divider>\n\n				<ion-item *ngFor="let childItem of item.child" (click)="itemSelected(item)">{{childItem.name}}</ion-item>\n\n			</ion-item-group>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/list/List/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-header>\n\n			添加列表头\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-list-header>\n\n					英雄列表\n\n				</ion-list-header>\n\n				<ion-item *ngFor="let item of items" (click)="itemSelected(item)"> {{ item.name }}</ion-item>\n\n			</ion-list>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/list/List/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			添加图标\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n					<ion-icon name="leaf" item-start></ion-icon>\n\n					{{ item.name }}\n\n					<ion-icon name="rose" item-end></ion-icon>\n\n				</ion-item>\n\n			</ion-list>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/list/List/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			添加图像\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item *ngFor="let item of heros" (click)="itemSelected(item)">\n\n					<ion-avatar item-start>\n\n						<img src="{{item.imgUrl}}">\n\n					</ion-avatar>\n\n					<h2>{{item.name}}</h2>\n\n					<p>{{item.intro}}</p>\n\n				</ion-item>\n\n			</ion-list>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/list/List/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			滑动列表\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item-sliding *ngFor="let item of heros" (click)="itemSelected(item)">\n\n					<ion-item>\n\n						<ion-avatar item-start>\n\n							<img src="{{item.imgUrl}}">\n\n						</ion-avatar>\n\n						<h2>{{item.name}}</h2>\n\n					</ion-item>\n\n					<ion-item-options side="right">\n\n						<button ion-button color="primary">\n\n					        <ion-icon name="text"></ion-icon>\n\n					        删除\n\n					      </button>\n\n						<button ion-button color="secondary">\n\n					        <ion-icon name="call"></ion-icon>\n\n					        电话\n\n					      </button>\n\n					</ion-item-options>\n\n					<ion-item-options side="left">\n\n						<button ion-button color="primary">\n\n				        <ion-icon name="mail"></ion-icon>\n\n				        邮箱\n\n				      </button>\n\n					</ion-item-options>\n\n				</ion-item-sliding>\n\n			</ion-list>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/list/List/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			缩略图\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list>\n\n				<ion-item *ngFor="let item of heros" (click)="itemSelected(item)">\n\n					<ion-thumbnail item-start>\n\n						<img src="{{item.imgUrl}}">\n\n					</ion-thumbnail>\n\n					<h2>{{item.name}}</h2>\n\n					<p>{{ item.intro }}</p>\n\n					<button ion-button clear item-end>View</button>\n\n				</ion-item>\n\n			</ion-list>\n\n			<a class="more" href="https://ionicframework.com/docs/api/components/list/List/">更多信息</a>\n\n		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\mytest\angular\ionic\myionic\src\pages\lists\lists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_system__["a" /* SystemService */]])
    ], Lists);
    return Lists;
}());

//# sourceMappingURL=lists.js.map

/***/ })

},[235]);
//# sourceMappingURL=main.js.map