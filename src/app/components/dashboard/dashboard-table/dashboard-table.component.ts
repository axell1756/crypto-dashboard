import { Component, OnInit } from '@angular/core';
import { ApiService, Coin } from 'src/app/shared/services/api.service';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnInit {
  lookupCoins = ['bitcoin', 'litecoin'];

  allColumns = ['Name', 'Market cap', 'Prices', 'Total volume'];

  data: Coin[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.lookupCoins.forEach((c) =>
      this.apiService.getMarketDataByName(c).subscribe((res: Coin) => {
        res.name = c.toUpperCase();
        this.data.push({ ...res });
      })
    );
  }
}
