import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:9090/fim/est3Dgate/';


@Injectable({
  providedIn: 'root'
})


export class PaymentService {
  constructor(private httpClient: HttpClient) {
  }

  /*feedPaymentAccount(feedDetails : FeedDetails): Observable<any> {
    return this.httpClient.put<FeedDetails>(apiUrl+"feedAccount", feedDetails);
  }*/




}
