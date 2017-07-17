import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FetchDataService {

    private fetchUrl: string = null;
    private cache: IWeatherForecast[] = [];

    constructor(private http: Http,
        @Inject('ORIGIN_URL') originUrl: string) {
        // The originUrl param must be injected for server-side pre-compilation
        // Without it, this would work if navigated to client-side, but would fail
        // if it were the first component pre-compiled on the server.
        this.fetchUrl = originUrl + '/api/SampleData/WeatherForecasts';
    }
    
    fetchDataObservable = (useCache: boolean = false): Observable<IWeatherForecast[]> => {
        if (useCache && this.cache.length > 0) {
            return Observable.of(this.cache);
            //return Observable.from(this.cache);
        } else {
            return this.http
                .get(this.fetchUrl)
                .map(this.extractData)
                .catch(this.handleError);
        }
    }

    fetchDataPromise = (useCache: boolean = false): Promise<IWeatherForecast[]> => {
        if (useCache && this.cache.length > 0) {
            return Promise.resolve(this.cache);
        }
        return this.http
            .get(this.fetchUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    extractData = (result: Response) => {
        var data: IWeatherForecast[] = result.json();
        this.cache = data;
        return this.cache;
    }

    handleError = () => {
        window.alert('Error getting weather');
        return [];
    }
}


export interface IWeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
