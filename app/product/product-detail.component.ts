import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { PriceStock } from './price-stock';
import { ProductService } from './product.service';
import { NotificationsService } from 'angular2-notifications';


@Component({
    moduleId: module.id,
    selector: 'ma-product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProducDetailComponent implements OnInit {

    @Input()
    public product: Product;

    public priceStock: PriceStock;

    public locationID: number;
    public isSelected: boolean;

    public options: any;

    constructor(
        private _service: NotificationsService,
        private productService: ProductService) {
        this.isSelected = false;

        this.priceStock = new PriceStock();

        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
    }

    ngOnInit() {

    }

    public onNotify(id: number) {
        this.locationID = id;
        // alert(id);
    }

    public getSelectedLocation() {
        this.isSelected = this.locationID !== undefined ? true : false;
    }

    public add() {
        if (this.priceStock && this.locationID && this.product) {
            this.priceStock.LocationID = this.locationID;
            this.priceStock.ProductID = this.product.ProductId;

            this.productService.addPriceStock(this.priceStock)
                .then(message => {
                    //alert();
                    this._service.success("Save", message);
                    //this.goBack();
                })
                .catch(error => console.log(error));
        }
        else {
            alert('Something is wrong.');
        }

    }
}