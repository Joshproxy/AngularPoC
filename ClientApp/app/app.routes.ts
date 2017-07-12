import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HelloComponent } from './components/hello/hello.component';
import { MultiplierComponent } from './components/multiplier/multiplier.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'counter', component: CounterComponent,
        children: [
            { path: '', redirectTo: 'multiplier', pathMatch: 'full' },
            { path: 'hello/:id', component: HelloComponent },
            { path: 'multiplier', component: MultiplierComponent }
        ]
    },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: '**', redirectTo: 'home' }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);