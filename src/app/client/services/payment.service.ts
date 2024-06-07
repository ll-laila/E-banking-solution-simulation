import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import {catchError, Observable, throwError} from 'rxjs';
import {FeedDetails} from "../models/feedDetails";
import {PaymentDetails} from "../models/payment";

const apiUrl = 'http://localhost:9090/fim/est3Dgate/';


@Injectable({
  providedIn: 'root'
})


export class PaymentService {

  private serverUrl: string = `http://localhost:9090/fim/est3Dgate`;
  private authorization = this.cookieService.get('Authorization');


  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }


  public feedPaymentAccount(feedDetails : FeedDetails): Observable<any> {

    const headers = {
      'Authorization': `${this.authorization}`
    };
    let dataUrl: string = `${this.serverUrl}/feedAccount`;
    return this.httpClient.put<FeedDetails>(dataUrl, feedDetails, {headers}).pipe(catchError(this.handleError));

  }


  public PayService(paymentDetails : PaymentDetails): Observable<any> {

    const headers = {
      'Authorization': `${this.authorization}`
    };
    let dataUrl: string = `${this.serverUrl}/payService`;
    return this.httpClient.put<PaymentDetails>(dataUrl, paymentDetails, {headers}).pipe(catchError(this.handleError));

  }





  //Error Handling
    public handleError(error: HttpErrorResponse){
      let errorMessage: string = '';
      if(error.error instanceof ErrorEvent) {
        // client error
        errorMessage = `Error : ${error.error.message}`
      } else {
        // server error
        errorMessage = `Status : ${error.status} \n Message: ${error.message}`
      }
      return throwError(errorMessage);
    }


}
