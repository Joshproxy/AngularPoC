import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HelloComponent } from '../../hello/hello.component';
import { MultiplierComponent } from '../../multiplier/multiplier.component';


@Component({
    selector: 'counter-menu',
    templateUrl: './countermenu.component.html'
})
export class CounterMenuComponent {
    public helloBlank = 'xyz';

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    public onAlternativeClick() {
        this.router.navigate(['./hello', this.helloBlank], { relativeTo: this.route });
    }
}
