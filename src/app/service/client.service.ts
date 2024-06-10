import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IClient} from '../models/Client';

import {  Subject, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {IPaymentAccount} from '../models/paymentAccount';
import { IClientRegistrationRequest} from '../models/ClientRegistrationRequest';
import {IAgent} from '../models/Agent';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serverUrl = `http://localhost:9090/api/client` ;
  private authorization = this.cookieService.get('Authorization');

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  public createClient(clientRegisterRequest: IClientRegistrationRequest): Observable<IClientRegistrationRequest> {
    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/api/v1/admin/register`;
    return this.httpClient.post<IClientRegistrationRequest>(dataUrl, clientRegisterRequest, { headers })
      .pipe(catchError(this.handleError));
  }

  public getAllClients(): Observable<IClient[]> {

    const dataUrl = `${this.serverUrl}/api/v1/admin/list`;
    console.log(this.authorization);

    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<IClient[]>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }


  public deleteClient(id: number): Observable<{}> {

    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/api/v1/agent/delete/${id}`;
    return this.httpClient.delete<{}>(dataUrl, {headers}).pipe(catchError(this.handleError));

  }

  public updateClient(client: IClient, id: number): Observable<IClient> {
    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/api/v1/agent/update/${id}`;
    return this.httpClient.put<IClient>(dataUrl, client, {headers}).pipe(catchError(this.handleError));

  }

  public getClient(id: number): Observable<IClient> {
    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/api/v1/agent/client/${id}`;
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
}


