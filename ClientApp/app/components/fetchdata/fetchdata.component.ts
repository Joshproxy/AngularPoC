import { Component } from '@angular/core';
import { FetchDataService, IWeatherForecast } from './fetchdata.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

@Component({
    selector: 'fetchdata',
    template: require('./fetchdata.component.html')
})
export class FetchDataComponent {
    // Promise params
    public forecastsPromise: IWeatherForecast[] = [];
    public forecastsPromiseAsnyc: Promise<IWeatherForecast[]> = new Promise(() => []);

    // Observable params
    public forecastsObservable: IWeatherForecast[] = [];
    public forecastsObservableAsnyc: Observable<IWeatherForecast[]>;
    
    constructor(private dataService: FetchDataService) {
        this.loadDataViaObservable(true);
    }

    loadDataViaPromise = (useCache: boolean = false) => {

        // Async promise
        this.forecastsPromiseAsnyc = this.dataService.fetchDataPromise(useCache);

        // Promise
        this.dataService.fetchDataPromise(useCache)
            .then((data: IWeatherForecast[]) => {
                this.forecastsPromise = data;
            });

        // Async Observable
        this.forecastsObservableAsnyc = this.dataService.fetchDataObservable(useCache);

        // Observable
        this.dataService.fetchDataObservable(useCache)
            .subscribe((data: IWeatherForecast[]) => {
                this.forecastsObservable = data;
            });

    };

    loadDataViaObservable = (useCache: boolean = false) => {
        this.loadDataViaPromise(useCache);
    };
}
