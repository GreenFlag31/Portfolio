import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter, Subscription } from 'rxjs';
import { description, navigation, project } from '../shared/data-type';

@Component({
  selector: 'app-pro-contra',
  templateUrl: './pro-contra.component.html',
  styleUrls: ['./pro-contra.component.css'],
})
export class ProContraComponent implements OnInit, OnDestroy {
  @Input() description!: description;
  @Input() project!: project;
  @Input() navigation!: navigation;
  subscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.subscription = this.router.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationEnd),
    //     delay(450)
    //   )
    //   .subscribe(() => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    //   });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
