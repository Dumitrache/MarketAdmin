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
var auth_service_1 = require('../auth/auth.service');
var angular2_notifications_1 = require('angular2-notifications');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(authService, service, router) {
        this.authService = authService;
        this.service = service;
        this.router = router;
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginResponse = this.authService.login(this.username, this.password)
            .catch(function (error) {
            console.log(error);
        });
        this.loginResponse.then(function (response) {
            if (response !== undefined) {
                var ex = response;
                if (ex.Name !== undefined) {
                    _this.service.success('Login', 'Welcome ' + ex.Name);
                    _this.router.navigate(['/home']);
                }
                else {
                    for (var _i = 0, _a = (response.Errors); _i < _a.length; _i++) {
                        var item = _a[_i];
                        console.log(item);
                        _this.service.error('Login', item);
                    }
                }
            }
        });
    };
    LoginComponent.prototype.logout = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [angular2_notifications_1.NotificationsService]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, angular2_notifications_1.NotificationsService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map