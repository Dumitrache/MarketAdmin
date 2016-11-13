import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Location } from './location';
import { BaseResponse } from '../base-response';

@Injectable()
export class LocationService {

    private staticUrl: string;
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    constructor(private http: Http) {
        this.staticUrl = 'http://proiectsoftwareinechipa.16mb.com/api/index.php';
    }

    public getLocations(companyId: number) : Observable<Location[]>{
        let body = new URLSearchParams();
        body.set('action', 'GetLocatiosListByCompanyId');
        body.set('CompanyId', companyId.toString());
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this.http.post(this.staticUrl, body, options)
        .map((r: Response) => {
            return r.json() as Location[];
        });
    }

    public addLocation(location: Location): Promise<string> {
        let body = new URLSearchParams();
        body.set('action', 'AddANewLocation');
        body.set('LocationName', location.LocationName);
        body.set('LocationAdress',location.LocationAdress);
        body.set('LocationLat', location.LocationLat.toString());
        body.set('LocationLng', location.LocationLng.toString());
        
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