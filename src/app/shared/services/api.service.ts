import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date: Date;
  roi?: any;
  last_updated: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint: string = 'https://api.coingecko.com/api/v3';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllCoins(): Observable<Coin[]> {
    var request = this.endpoint + '/coins/markets';

    const currency = 'gbp';

    return this.httpClient
      .get<Coin[]>(request, {
        params: new HttpParams().set('vs_currency', currency),
      })
      .pipe(map((res: Coin[]) => res.map((coin: Coin) => coin)));
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
