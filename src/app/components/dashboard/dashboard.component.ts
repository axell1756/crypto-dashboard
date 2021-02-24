import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, type: 'details' },
          { title: 'Card 2', cols: 1, rows: 1, type: 'news' },
          { title: 'Card 3', cols: 1, rows: 1, type: 'graphs' },
        ];
      }

      return [
        { title: 'Coin details', cols: 1, rows: 1, type: 'details' },
        { title: 'Coin news', cols: 1, rows: 1, type: 'news' },
        { title: 'Coin graphs', cols: 2, rows: 1, type: 'graphs' },
        { title: 'Coin table', cols: 2, rows: 2, type: 'table' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
