import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'counter',
    template: require('./counter.component.html')
})
export class CounterComponent {
    public currentCount = 0;
    public helloBlank = 'xyz';

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    public incrementCounter() {
        this.currentCount++;
    }

    public onAlternativeClick() {
        this.router.navigate(['./hello', this.helloBlank], { relativeTo: this.route });
    }
}
