"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_notifications_1 = require('angular2-notifications');
var user_output_1 = require('../auth/user-output');
var auth_service_1 = require('../auth/auth.service');
var RegisterComponent = (function () {
    function RegisterComponent(notification, authService) {
        this.notification = notification;
        this.authService = authService;
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
        this.user = new user_output_1.User();
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        alert(JSON.stringify(this.user));
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css'],
            providers: [angular2_notifications_1.NotificationsService]
        }), 
        __metadata('design:paramtypes', [angular2_notifications_1.NotificationsService, auth_service_1.AuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map