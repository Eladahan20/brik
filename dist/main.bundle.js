webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis metus non nisi elementum pulvinar cursus at nulla. Nullam vehicula venenatis dui, eu vestibulum diam pellentesque in. Phasellus non enim tortor. Phasellus at bibendum ipsum. Proin eget pulvinar nibh, nec consequat lorem. Nulla ut ornare dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n    Curabitur mollis convallis leo nec porttitor. Nunc eget iaculis augue, ut sollicitudin elit. Praesent efficitur nibh in nulla aliquam lacinia. Nam vulputate vitae risus id pharetra. Aliquam blandit hendrerit ex, id dictum dui malesuada id. Nunc vitae ipsum quam. Nullam a eleifend mauris. Pellentesque ipsum mauris, mollis eget tempus a, finibus ac ante. Phasellus a facilisis nisi, quis rhoncus ante. Duis efficitur pellentesque ligula nec pretium.\n</p>\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aboutus',
            template: __webpack_require__("./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("./src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-banner></app-nav-banner>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mousetrap__ = __webpack_require__("./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mousetrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mousetrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_modal_gallery__ = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_banner_nav_banner_component__ = __webpack_require__("./src/app/nav-banner/nav-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aboutus_aboutus_component__ = __webpack_require__("./src/app/aboutus/aboutus.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_10__aboutus_aboutus_component__["a" /* AboutusComponent */] }
    // {
    //   path: 'heroes',
    //   component: HeroListComponent,
    //   data: { title: 'Heroes List' }
    // },
    // { path: '',
    //   redirectTo: '/heroes',
    //   pathMatch: 'full'
    // },
    // { path: '**', component: PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_banner_nav_banner_component__["a" /* NavBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__aboutus_aboutus_component__["a" /* AboutusComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_4_angular_modal_gallery__["b" /* ModalGalleryModule */].forRoot(),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small mdb-color lighten-3 pt-4 mt-4\">\n\n    <!-- Footer Links -->\n    <div class=\"container text-center text-md-left\">\n\n  \n    </div>\n    <!-- Footer Links -->\n  \n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright: Elad Dahan\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->\n                        "

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    -webkit-transition: .5s ease;\r\n    transition: .5s ease;\r\n    background-color: darkslategray;\r\n  }\r\n  \r\n  .container1:hover .overlay {\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .text {\r\n    color: white;\r\n    font-size: 25px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\r\n  \r\n  .text-mobile {\r\n    text-shadow: 2px 2px 4px #000000;\r\n    color: white;\r\n    font-size: 25px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n  \n   \n    <div class=\"container1 col-12 col-md-6 col-lg-3 p-1\">\n        <div class=\" text-mobile\">רהיטים</div>\n      <img src=\"assets/1.jpg\" alt=\"\" style=\"width: 100%\">\n      <div class=\"overlay\">\n        <div class=\"text\">רהיטים</div>\n      </div>\n    </div>\n    <div class=\"container1 col-12 col-md-6 col-lg-3 p-1\" >\n        <div class=\" text-mobile\">מראות</div>\n      <img src=\"assets/2.jpg\" alt=\"\" style=\"width: 100%\">\n      <div class=\"overlay\">\n        <div class=\"text\">מראות</div>\n      </div>\n    </div>\n    <div class=\"container1 col-12 col-md-6 col-lg-3 p-1\">\n        <div class=\" text-mobile\">עציצים</div>\n      <img src=\"assets/3.jpg\" alt=\"\" style=\"width: 100%\">\n      <div class=\"overlay\">\n        <div class=\"text\">עציצים</div>\n      </div>\n    </div>\n    <div class=\"container1 col-12 col-md-6 col-lg-3 p-1\">\n        <div class=\" text-mobile\">כריות</div>\n      <img src=\"assets/4.jpg\" alt=\"\" style=\"width: 100%\">\n      <div class=\"overlay\">\n        <div class=\"text\">כריות</div>\n      </div>\n    </div>    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_modal_gallery__ = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(galleryService) {
        this.galleryService = galleryService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular_modal_gallery__["a" /* GalleryService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/nav-banner/nav-banner.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-contain {\r\n    min-height: 70px;\r\n  }\r\n  .btn-skew {\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\r\n    font-weight:bold;\r\n    text-align: center;\r\n    color: #C9C9C9;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    border: 2px solid #f7f7f7;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    overflow: hidden;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n    display:block;\r\n  }\r\n  .btn-skew:after {\r\n    position: absolute;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n    content: '';\r\n    width: 0;\r\n    bottom: 0;\r\n    background: #C9C9C9;\r\n    height: 120%;\r\n    left: -10%;\r\n    -webkit-transform: skewX(15deg);\r\n    transform: skewX(15deg);\r\n    z-index: -1;\r\n  }\r\n  .btn-skew:hover {\r\n    cursor: pointer;\r\n  }\r\n  .btn-skew:hover:after {\r\n    width: 100%;\r\n    left: 0;\r\n  }\r\n  .btn-skew:hover {\r\n    color: black;\r\n  }\r\n  .btn-skew:hover:after {\r\n    left: -10%;\r\n    width: 120%;\r\n  }\r\n  .banner {\r\n    height: 250px;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n\r\n  }\r\n  hr {\r\n    height: 12px;\r\n    border: 0;\r\n    -webkit-box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n            box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n}\r\n  .contact {\r\n  color: #C6C6C6;\r\n}"

/***/ }),

/***/ "./src/app/nav-banner/nav-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"contact row pt-2\">\n    <div class=\"col-12 col-md-4\">\n      <span class=\"p-1\"><i class=\"fas fa-phone p-1\"></i>05493274482</span>\n      <span class=\"p-1\"><i class=\"fab fa-facebook-square p-1\"></i>Brik</span>\n\n    </div>\n  </div>\n  <div class=\" d-flex justify-content-center\">\n      <div class=\"banner col-sm-12 col-md-9 col-lg-7\" [ngStyle]=\"{'background-image': getUrl()}\">\n      </div>\n        <!-- <img [attr.src]=\"imgSrc\" style=\"width: 80%; min-height: 40%;\" alt=\"Responsive image\"> -->\n\n      \n  </div>\n\n<div style=\"margin-top: -10px\" class=\"d-flex flex-column flex-sm-row justify-content-center mt-3\">\n    <div class=\"btn-contain col-md-4\">\n        <div class=\"btn-skew-contain\">\n          <a routerLink=\"/gallery\" href=\"http://mediamilitia.com\" class=\"btn-skew\">\n            <span>לגלריית המוצרים</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"btn-contain col-md-4\">\n        <div class=\"btn-skew-contain\">\n          <a routerLink=\"/aboutus\" href=\"http://mediamilitia.com\" class=\"btn-skew\">\n            <span>אודות החברה</span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6\">\n\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/nav-banner/nav-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBannerComponent = /** @class */ (function () {
    function NavBannerComponent() {
        this.imgSrc = "url(assets/logo.jpg)";
    }
    NavBannerComponent.prototype.ngOnInit = function () {
    };
    NavBannerComponent.prototype.getUrl = function () {
        return this.imgSrc;
    };
    NavBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-banner',
            template: __webpack_require__("./src/app/nav-banner/nav-banner.component.html"),
            styles: [__webpack_require__("./src/app/nav-banner/nav-banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBannerComponent);
    return NavBannerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map