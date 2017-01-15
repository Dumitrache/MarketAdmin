import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Error } from '../common/error';

@Injectable()
export class ImportFileService {

private staticUrl: string;
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    constructor(private http: Http) {
        this.staticUrl = 'http://proiectsoftwareinechipa.16mb.com/api/index.php';
    }

    public insertFile(file: any): Observable<Error> {
        let body = new URLSearchParams();
        body.set('action', 'AddAutomaticPriceStock');
        body.set('JsonFile',file);

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
                if(r.text() == "")
                    return undefined;

                return r.json() as Error;
            });
    }

}