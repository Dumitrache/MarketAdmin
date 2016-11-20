import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Product } from './product';
import { PriceStock } from './price-stock';


@Injectable()
export class ProductService {

    private staticUrl: string;
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    constructor(private http: Http) {
        this.staticUrl = 'http://proiectsoftwareinechipa.16mb.com/api/index.php';
    }

    public getProductsByName(producName: string): Observable<Product[]> {
        let body = new URLSearchParams();
        body.set('action', 'GetProductListByName');
        body.set('ProductName',producName);

        //Este bun si asta
        //let bodyString = `action=GetProductListByName&input=+%22ProductName%22%3A%22${producName}%22`;
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this.http
            .post(this.staticUrl,
            //bodyString,
            body,
            options
            )
            .map((r: Response) => {
                console.log(r.json());
                return r.json() as Product[]
            });
    }

    public addProduct(product: Product): Promise<string> {
        let body = new URLSearchParams();
        body.set('action', 'AddANewProduct');
        body.set('ProductName', product.ProductName);
        body.set('ProductDescription', product.ProductDescription);
        //alert(JSON.stringify(product));
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this.http
            .post(this.staticUrl,
            //bodyString,
            body,
            options
            ).toPromise()
            .then((r: Response) => {
                console.log(r.text());
                return r.text()
            });
    }

    public addPriceStock(price: PriceStock): Promise<string> {
        let body = new URLSearchParams();
        body.set('action', 'AddANewPriceStock');
        body.set('location_id', price.LocationID.toString());
        body.set('product_id', price.ProductID.toString());
        body.set('Price', price.Price.toString());
        body.set('Stock', price.Stock.toString());
        //alert(JSON.stringify(product));
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this.http
            .post(this.staticUrl,
            //bodyString,
            body,
            options
            ).toPromise()
            .then((r: Response) => {
                console.log(r.text());
                return r.text()
            });
    }

}