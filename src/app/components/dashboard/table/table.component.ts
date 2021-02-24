import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { ApiService, Coin } from 'src/app/shared/services/api.service';

@Component({
  selector: 'dashboard-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  private data: Coin[] = [];

  dataSource = new MatTableDataSource<Coin>();

  resultsLength: number = -1;

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  displayColumns: string[] = [
    'name',
    'symbol',
    'current_price',
    'market_cap',
    'total_volume',
    'high_24h',
    'low_24h',
    'price_change_percentage_24h',
    'market_cap_change_percentage_24h',
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllCoins().subscribe((res) => {
      this.data = res;
      this.dataSource.data = this.data;
      this.isLoading.next(false);
      this.resultsLength = res.length;
    });
  }

  ngAfterViewInit(): void {
    this.paginator.pageSize = 10;
    this.paginator.pageSizeOptions = [5, 10];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
