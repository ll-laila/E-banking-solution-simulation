import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IClient} from '../models/Client';

import { catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {IPaymentAccount} from '../models/paymentAccount';
import { IClientRegistrationRequest} from '../models/ClientRegistrationRequest';
import {Operation} from '../client/models/operation';




@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serverUrl = `http://localhost:8080/api/v1/client`;

  private authorization = this.cookieService.get('Authorization');

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  public createClient(clientRegisterRequest: IClientRegistrationRequest): Observable<IClientRegistrationRequest> {
    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/register`;
    return this.httpClient.post<IClientRegistrationRequest>(dataUrl, clientRegisterRequest, {headers})
      .pipe(catchError(this.handleError));
  }


  public getAllClientsByAgentId(idagent: number): Observable<IClient[]> {

    const dataUrl = `${this.serverUrl}/api/v1/client/listByAgent/${idagent}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<IClient[]>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }



  public deleteClient(id: number): Observable<{}> {

    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/delete/${id}`;
    return this.httpClient.delete<{}>(dataUrl, {headers}).pipe(catchError(this.handleError));

  }



  public getClient(id: number): Observable<IClient> {
    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/${id}`;
    return this.httpClient.get<IClient>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }


  getAgentById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.serverUrl}/${id}`);
  }

  getAgentOperation(id: number): Observable<Operation[]> {
    const dataUrl = `${this.serverUrl}/operations/${id}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<Operation[]>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }
}
