import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  steps: { label: string; link: string }[] = [];
  currentPage: string = ''; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateSteps();
      });

    this.generateSteps(); // Initial generation
  }

  private generateSteps() {
    const segments = this.router.url.split('/').filter(segment => segment !== '');
    let url = '';

    this.steps = segments.map((segment, index) => {
      url += '/' + segment;
      return { label: this.formatLabel(segment), link: url };
    });

    this.currentPage = this.steps[this.steps.length - 1]?.label || 'Home';
  }

  private formatLabel(segment: string): string {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
