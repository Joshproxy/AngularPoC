import { Component } from '@angular/core';
import { FetchDataService, IWeatherForecast } from './fetchdata.service';

@Component({
    selector: 'fetchdata',
    template: require('./fetchdata.component.html')
})
export class FetchDataComponent {
    public forecasts: IWeatherForecast[] = [];

    constructor(private dataService: FetchDataService) {
        this.loadDataViaPromise();
    }

    loadDataViaPromise = () => {
        this.dataService.fetchDataPromise()
            .then((data: IWeatherForecast[]) => {
                this.forecasts = data;
            });
    };

    loadDataViaObservable = () => {
        this.dataService.fetchDataObservable()
            .subscribe((data: IWeatherForecast[]) => {
                this.forecasts = data;
            });
    };
}
