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
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home.component');
// import { ProductDatatableComponent } from './product/product-datatable.component';
// import { ProductComponent } from './product/product.component';
// import { ProducDetailComponent } from  './product/product-detail.component';
var location_component_1 = require('./location/location.component');
var location_datatable_component_1 = require('./location/location-datatable.component');
var angular2_notifications_1 = require('angular2-notifications');
var product_module_1 = require('./product/product.module');
//Servicees
var product_service_1 = require('./product/product.service');
var location_service_1 = require('./location/location.service');
//Routings
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                angular2_notifications_1.PushNotificationsModule,
                angular2_notifications_1.SimpleNotificationsModule, product_module_1.ProductModule
            ],
            declarations: [
                app_component_1.AppComponent,
                //ProductDatatableComponent,
                home_component_1.HomeComponent,
                //ProductComponent,
                //ProducDetailComponent,
                location_datatable_component_1.LocationDatatableComponent,
                location_component_1.LocationComponent
            ],
            providers: [product_service_1.ProductService, location_service_1.LocationService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map