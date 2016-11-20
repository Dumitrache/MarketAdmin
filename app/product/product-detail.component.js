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
var product_1 = require('./product');
var price_stock_1 = require('./price-stock');
var product_service_1 = require('./product.service');
var angular2_notifications_1 = require('angular2-notifications');
var ProducDetailComponent = (function () {
    function ProducDetailComponent(_service, productService) {
        this._service = _service;
        this.productService = productService;
        this.isSelected = false;
        this.priceStock = new price_stock_1.PriceStock();
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
    }
    ProducDetailComponent.prototype.ngOnInit = function () {
    };
    ProducDetailComponent.prototype.onNotify = function (id) {
        this.locationID = id;
        // alert(id);
    };
    ProducDetailComponent.prototype.getSelectedLocation = function () {
        this.isSelected = this.locationID !== undefined ? true : false;
    };
    ProducDetailComponent.prototype.add = function () {
        var _this = this;
        if (this.priceStock && this.locationID && this.product) {
            this.priceStock.LocationID = this.locationID;
            this.priceStock.ProductID = this.product.ProductId;
            this.productService.addPriceStock(this.priceStock)
                .then(function (message) {
                //alert();
                _this._service.success("Save", message);
                //this.goBack();
            })
                .catch(function (error) { return console.log(error); });
        }
        else {
            alert('Something is wrong.');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProducDetailComponent.prototype, "product", void 0);
    ProducDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ma-product-detail',
            templateUrl: 'product-detail.component.html'
        }), 
        __metadata('design:paramtypes', [angular2_notifications_1.NotificationsService, product_service_1.ProductService])
    ], ProducDetailComponent);
    return ProducDetailComponent;
}());
exports.ProducDetailComponent = ProducDetailComponent;
//# sourceMappingURL=product-detail.component.js.map