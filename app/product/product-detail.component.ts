import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
@Component({
    moduleId: module.id,
    selector: 'ma-product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProducDetailComponent implements OnInit {
    
    @Input()
    public product: Product;

    constructor() { }

    ngOnInit() { }
}