import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FeedDetails} from "../models/feedDetails";

const apiUrl = 'http://localhost:9090/api/cmi/';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  constructor(private httpClient: HttpClient) {
  }

  feedPaymentAccount(feedDetails : FeedDetails): Observable<any> {
    return this.httpClient.put<FeedDetails>(apiUrl+"feedAccount", feedDetails);
  }





}
