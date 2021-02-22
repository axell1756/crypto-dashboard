import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Coin {
  name!: string;
  market_caps!: number[][];
  prices!: number[][];
  total_volumes!: number[][];
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

  getAllByName(name: string): Observable<any> {
    return this.httpClient
      .get<Coin>(this.endpoint + '/coins/' + name)
      .pipe(retry(1), catchError(this.processError));
  }

  getMarketDataByName(name: string): Observable<Coin> {
    const currency = '?vs_currency=' + 'gbp';
    const days = '&days=' + 1;
    const interval = '&interval=daily';

    var request = this.endpoint + '/coins/' + name + '/market_chart';
    request += currency + days + interval;

    return this.httpClient
      .get<Coin>(request)
      .pipe(retry(1), catchError(this.processError));
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
