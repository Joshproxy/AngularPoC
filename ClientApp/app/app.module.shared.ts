import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HelloComponent } from './components/hello/hello.component';
import { MultiplierComponent } from './components/multiplier/multiplier.component';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';

export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        HelloComponent,
        MultiplierComponent
    ],
    imports: [
        routing,
        FormsModule
    ]
};
