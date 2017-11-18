webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\r\n      cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n   <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Candy Love</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" >\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/members']\">Members</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/topics']\">Topics</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/help']\">Help</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  </nav>\n  <div class=\"container pt-3\">\n    <router-outlet></router-outlet>\n    <!--<div class=\"alert alert-light text-center\" role=\"alert\">\n    Developed with <3 By Rahmathullah\n    </div>-->\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.candies = [
            {
                color: "Red",
                talkAbout: "One thing that you love about your job."
            },
            {
                color: "Yellow",
                talkAbout: "A life goal you are working on."
            },
            {
                color: "Green",
                talkAbout: "Your favorite book or movie."
            },
            {
                color: "Purple",
                talkAbout: "Favorite way to revive yourself during the workday.."
            },
            {
                color: "Blue",
                talkAbout: "One stressful thing about your job you wish you could improve."
            },
            {
                color: "Orange",
                talkAbout: "Your favorite food. Everyone loves food."
            },
            {
                color: "Colourful",
                talkAbout: "Any topic in the list."
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__member_list_member_list_component__ = __webpack_require__("../../../../../src/app/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__retro_retro_component__ = __webpack_require__("../../../../../src/app/retro/retro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__topic_list_topic_list_component__ = __webpack_require__("../../../../../src/app/topic-list/topic-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__member_service__ = __webpack_require__("../../../../../src/app/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topic_service__ = __webpack_require__("../../../../../src/app/topic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__retro_retro_component__["a" /* RetroComponent */],
        pathMatch: 'full'
    },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_5__member_list_member_list_component__["a" /* MemberListComponent */] },
    { path: 'topics', component: __WEBPACK_IMPORTED_MODULE_7__topic_list_topic_list_component__["a" /* TopicListComponent */] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_8__help_help_component__["a" /* HelpComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__member_list_member_list_component__["a" /* MemberListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__retro_retro_component__["a" /* RetroComponent */],
                __WEBPACK_IMPORTED_MODULE_8__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_7__topic_list_topic_list_component__["a" /* TopicListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__member_service__["a" /* MemberService */],
                __WEBPACK_IMPORTED_MODULE_10__topic_service__["a" /* TopicService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h3>Running the activity:</h3>\n<p>\n  Candy love is a great team building activity that gets the participants talking about their life beyond the work activities\n</p>\n<ol>\n  <li>Place a package of M&Ms, Skittles or another colorful candy in a jar</li>\n  <li>Ask a  participant to pick a candy from the jar, and then share something about him/herself according to the candy color:\n\n    <p *ngFor=\"let topic of topics\" >\n      <span [ngStyle]=\" {color:topic.color}\">{{ topic.color.toUpperCase() }}</span> – {{ topic.description }}\n    </p>\n\n  </li>\n  <li>Pass the jar to the next participant and go back to step 2</li>\n  <li>Stop when the candies or the time is over</li>\n</ol>\n\n<p>All data are stored in local storage of your browser. So it will persist until you manually remove.</p>\n\n"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topic_service__ = __webpack_require__("../../../../../src/app/topic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpComponent = (function () {
    function HelpComponent(topicService) {
        this.topicService = topicService;
    }
    HelpComponent.prototype.ngOnInit = function () {
        this.topics = this.topicService.get();
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__topic_service__["a" /* TopicService */]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/member-list/member-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    \n  <h3>Team Members ({{ members.length }})</h3>\n  <form>\n    <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"member\" placeholder=\"Enter Name\" [(ngModel)]=\"member\">\n\n                    <span class=\"input-group-btn\">\n                      <button class=\"btn btn-success\" type=\"button\" (click)=\"add()\">Add</button>\n                    </span>\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <button class=\"btn btn-warning form-control\" (click)=\"shuffle()\">Shuffle the list</button>\n          </div>\n        </div>\n    </div>\n    </form>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let member of members\">{{ member.name }}\n        <button class=\"btn btn-danger btn-sm\" (click)=\"remove(member.name)\">Remove</button>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngIf=\"!members.length\">No members\n      </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/member-list/member-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_service__ = __webpack_require__("../../../../../src/app/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberListComponent = (function () {
    function MemberListComponent(memberService) {
        this.memberService = memberService;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.members = this.memberService.get();
    };
    MemberListComponent.prototype.add = function () {
        if (this.member.trim().length == 0)
            return;
        this.members = this.memberService.add(this.member);
        this.member = "";
    };
    MemberListComponent.prototype.remove = function (name) {
        if (!confirm("Are you sure?"))
            return;
        this.members = this.memberService.remove(name);
    };
    MemberListComponent.prototype.shuffle = function () {
        if (!confirm("Are you sure?"))
            return;
        this.members = this.memberService.shuffle();
    };
    MemberListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-member-list',
            template: __webpack_require__("../../../../../src/app/member-list/member-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__member_service__["a" /* MemberService */]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/member.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Member; });
var Member = (function () {
    function Member(name) {
        this.name = name;
        this.completed = false;
    }
    return Member;
}());



/***/ }),

/***/ "../../../../../src/app/member.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_model__ = __webpack_require__("../../../../../src/app/member.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberService = (function () {
    function MemberService() {
        this.KEY = "members";
    }
    MemberService.prototype.get = function () {
        var members = new Array();
        var strMembers = localStorage.getItem(this.KEY);
        if (strMembers)
            members = JSON.parse(strMembers);
        return members;
    };
    MemberService.prototype.add = function (name) {
        var members = this.get();
        members.push(new __WEBPACK_IMPORTED_MODULE_1__member_model__["a" /* Member */](name));
        localStorage.setItem(this.KEY, JSON.stringify(members));
        return members;
    };
    MemberService.prototype.setStatus = function (name, status) {
        var members = this.get();
        var member = members.find(function (member) {
            return member.name == name;
        });
        member.completed = status;
        localStorage.setItem(this.KEY, JSON.stringify(members));
        return members;
    };
    MemberService.prototype.remove = function (name) {
        var members = this.get();
        members = members.filter(function (member) {
            return member.name != name;
        });
        localStorage.setItem(this.KEY, JSON.stringify(members));
        return members;
    };
    MemberService.prototype.shuffle = function () {
        var members = this.get();
        for (var i = members.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = members[i];
            members[i] = members[j];
            members[j] = temp;
        }
        localStorage.setItem(this.KEY, JSON.stringify(members));
        return members;
    };
    MemberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "../../../../../src/app/retro/retro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/retro/retro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\">\n    <h3>Topics</h3>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let topic of topics\" [ngStyle]=\"{'border-left': '5px solid ' + topic.color}\">\n        {{ topic.description }}\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngIf=\"topics.length == 0\">\n        There're not topics stores. To add topics go to Menu > Topics and click Defaults button to restore default topic list.\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-6\">\n    <div class=\"row text-center\">\n      <div class=\"col-6 offset-md-3\">\n          <img src=\"assets/mm.png\" class=\"img-fluid\" alt=\"Responsive image\">\n          <button class=\"btn btn-warning\" style=\"margin-top:30px\" (click)=\"pickCandy()\">Pick a Candy</button>\n        <button class=\"btn btn-secondary\" style=\"margin-top:30px\" *ngIf=\"showPickedCandy\" (click)=\"showPickedCandy=false\">Clear</button>\n      </div>\n    </div>\n    <div class=\"row\"  style=\"margin-top:100px\" *ngIf=\"isPickingUp\"> \n      <div class=\"col-12 text-center\">\n        <h3 class=\"text-center\">Picking up, please wait...</h3>\n      </div>\n    </div>\n    <div class=\"row\"  style=\"margin-top:30px\" *ngIf=\"showPickedCandy\"> \n      <div class=\"col-12 text-center\">\n        <img src=\"assets/candy_{{ topics[index].color.toLowerCase() }}.png\" />\n        <h3 class=\"text-center\">You got {{ topics[index].color == 'Orange' ? 'an' : 'a'}} {{ topics[index].color.toLowerCase() }} candy, you have to talk about {{ topics[index].description.toLowerCase() }}</h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-3\">\n    <h3>Members</h3>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let member of members\" [ngClass]=\"{\n          'list-group-item-success': member.completed, \n          'list-group-item-warning': member.turn }\">\n        {{ member.name }}\n        <button class=\"btn btn-success btn-sm\" (click)=\"completed(member)\" *ngIf=\"(!member.completed) && member.turn\">Mark Done</button>\n        <button class=\"btn btn-link btn-sm text-success\" (click)=\"undo(member)\" *ngIf=\"member.completed\">Undo</button>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngIf=\"!members.length\">No members. To add team members, go to Menu > Members.\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/retro/retro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_service__ = __webpack_require__("../../../../../src/app/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_service__ = __webpack_require__("../../../../../src/app/topic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RetroComponent = (function () {
    function RetroComponent(memberService, topicService) {
        this.memberService = memberService;
        this.topicService = topicService;
        this.index = -1;
        this.isPickingUp = false;
    }
    RetroComponent.prototype.ngOnInit = function () {
        this.members = this.memberService.get();
        this.topics = this.topicService.get();
        this.nextMember();
    };
    RetroComponent.prototype.undo = function (member) {
        member.turn = false;
        this.members = this.memberService.setStatus(member.name, false);
        this.nextMember();
    };
    RetroComponent.prototype.completed = function (member) {
        member.turn = false;
        this.members = this.memberService.setStatus(member.name, true);
        this.nextMember();
    };
    RetroComponent.prototype.pickCandy = function () {
        var _this = this;
        this.isPickingUp = true;
        this.showPickedCandy = false;
        setTimeout(function () {
            _this.isPickingUp = false;
            _this.showPickedCandy = true;
            _this.index = _this.getRandomNumber(_this.topics.length);
        }, 200);
    };
    RetroComponent.prototype.getRandomNumber = function (max) {
        var random = Math.floor(Math.random() * max);
        while (random == this.index)
            random = Math.floor(Math.random() * max);
        return random;
    };
    RetroComponent.prototype.nextMember = function () {
        var availableMembers = this.members.filter(function (member) { return member.completed == false; });
        if (availableMembers.length) {
            var index = this.getRandomNumber(availableMembers.length);
            availableMembers[index].turn = true;
        }
    };
    RetroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-retro',
            template: __webpack_require__("../../../../../src/app/retro/retro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/retro/retro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_2__topic_service__["a" /* TopicService */]])
    ], RetroComponent);
    return RetroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topic-list/topic-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic-list/topic-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    \n  <h3>Topics ({{ topics.length }})</h3>\n  <form>\n    <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <button class=\"btn btn-warning form-control\" (click)=\"save()\">Save</button>\n          </div>\n          <div class=\"col-4\"> \n            <button class=\"btn btn-secondary form-control\" (click)=\"restore()\">Defaults</button>\n          </div>\n        </div>\n    </div>\n    </form>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let topic of topics\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon3\" [ngStyle]=\"{color: topic.color }\">{{ topic.color }}</span>\n          <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\" [(ngModel)]=\"topic.description\">\n        </div>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngIf=\"!topics.length\">No topics\n      </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/topic-list/topic-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topic_service__ = __webpack_require__("../../../../../src/app/topic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicListComponent = (function () {
    function TopicListComponent(topicService) {
        this.topicService = topicService;
    }
    TopicListComponent.prototype.ngOnInit = function () {
        this.topics = this.topicService.get();
    };
    TopicListComponent.prototype.save = function () {
        this.topicService.save(this.topics);
    };
    TopicListComponent.prototype.restore = function () {
        this.topics = this.topicService.restore();
    };
    TopicListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topic-list',
            template: __webpack_require__("../../../../../src/app/topic-list/topic-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topic-list/topic-list.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__topic_service__["a" /* TopicService */]])
    ], TopicListComponent);
    return TopicListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopicService = (function () {
    function TopicService() {
        this.KEY = "topics";
        this.topics = [
            {
                color: "Red",
                description: "One thing that you love about your job."
            },
            {
                color: "Yellow",
                description: "A life goal you are working on."
            },
            {
                color: "Green",
                description: "Your favorite book or movie."
            },
            {
                color: "Purple",
                description: "Favorite way to revive yourself during the workday.."
            },
            {
                color: "Blue",
                description: "One stressful thing about your job you wish you could improve."
            },
            {
                color: "Orange",
                description: "Your favorite food. Everyone loves food."
            },
            {
                color: "Colourful",
                description: "Any topic in the list."
            }
        ];
    }
    TopicService.prototype.get = function () {
        var topics = new Array();
        var strTopics = localStorage.getItem(this.KEY);
        if (strTopics)
            topics = JSON.parse(strTopics);
        return topics;
    };
    TopicService.prototype.restore = function () {
        localStorage.setItem(this.KEY, JSON.stringify(this.topics));
        return this.topics;
    };
    TopicService.prototype.hasStoredTopics = function () {
        var topics = this.get();
        return topics.length ? true : false;
    };
    TopicService.prototype.save = function (topics) {
        localStorage.setItem(this.KEY, JSON.stringify(topics));
        return topics;
    };
    TopicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TopicService);
    return TopicService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map