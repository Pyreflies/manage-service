import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  steps: { label: string; link: string }[] = [];
  currentPage: string = ''; 

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateSteps(this.route.root);
      });
  }

  private generateSteps(route: ActivatedRoute) {
    this.steps = [];
    let url = '';
    let currentRoute = route;
    let lastLabel = 'Home';

    while (currentRoute) {
      const segments = currentRoute.snapshot.url.map(segment => segment.path);
      if (segments.length > 0) {
        url += '/' + segments.join('/');
        const label = segments[0].charAt(0).toUpperCase() + segments[0].slice(1);
        lastLabel = label;
        this.steps.push({ label, link: url });
      }
      currentRoute = currentRoute.firstChild!;
    }

    // Set the current page name
    this.currentPage = lastLabel;
  }
  
  
}
