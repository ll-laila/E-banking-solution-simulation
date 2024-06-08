import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { Operation } from '../models/operation';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serverUrl: string = `http://localhost:9090/fim/est3Dgate`;
  private authorization = this.cookieService.get('Authorization');

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  public getAllAgents(): Observable<any> {
    let dataUrl: string = `${this.serverUrl}/allCreditors`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get(dataUrl, { headers }).pipe(catchError(this.handleError));
  }


  public getAgentServiceById(agentId : number): Observable<any> {
    let dataUrl: string = `${this.serverUrl}/services/${agentId}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get(dataUrl, { headers }).pipe(catchError(this.handleError));
  }

  public getClientById(clientId : number): Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Profile/${clientId}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get(dataUrl, { headers }).pipe(catchError(this.handleError));
  }

  public getPaymentAccountByClientId(clientId : number): Observable<any> {
    let dataUrl: string = `${this.serverUrl}/PaymentAccount/${clientId}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get(dataUrl, { headers }).pipe(catchError(this.handleError));
  }

  getClientByPhoneNumber(phoneNumber: String): Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Profile/Phone/${phoneNumber}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get(dataUrl, { headers }).pipe(catchError(this.handleError));
  }


  getClientOperation(phoneNumber: string): Observable<Operation[]> {
    let dataUrl: string = `${this.serverUrl}/client/operations/${phoneNumber}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<Operation[]>(dataUrl, { headers }).pipe(catchError(this.handleError));
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
