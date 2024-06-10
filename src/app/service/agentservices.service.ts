import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {IAgentServices} from '../models/AgentServices';
import {CookieService} from 'ngx-cookie-service';



@Injectable({
    providedIn: 'root'
})
export class AgentservicesService {

  private serverUrl = `http://localhost:9090` ;
  private authorization = this.cookieService.get('Authorization');

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {}


  public createService(client: IAgentServices, id: number): Observable<IAgentServices> {
       const headers = {
         'Authorization': `${this.authorization}`
       };
  const dataUrl = `${this.serverUrl}/api/v1/client/services/${id}`;
  return this.httpClient.post<IAgentServices>(dataUrl, client, {headers}).pipe(catchError(this.handleError));
  }


    public getAllAgentServices(idAgent: any): Observable<IAgentServices[]> {
      const headers = {
        'Authorization': `${this.authorization}`
      };
      const dataUrl = `${this.serverUrl}/api/v1/client/serviceByAgent/${idAgent}`;

        return this.httpClient.get<IAgentServices[]>(this.serverUrl);
    }

    public deleteService(serviceId: number): Observable<HttpResponse<{}>> {
        const headers = {
            'Authorization': `${this.authorization}`
        };
        const dataUrl = `${this.serverUrl}/api/v1/client/service/delete/${serviceId}`;
        return this.httpClient.delete<HttpResponse<{}>>(dataUrl, {headers}).pipe(catchError(this.handleError));
    }

    public updateService(service: IAgentServices, serviceId: number): Observable<IAgentServices> {

        const headers = {
            'Authorization': `${this.authorization}`
        };
        const dataUrl = `${this.serverUrl}/api/v1/client/service/update/${serviceId}`;
        return this.httpClient.put<IAgentServices>(dataUrl, service, {headers}).pipe(catchError(this.handleError));
    }


    public getService(serviceId: number): Observable<IAgentServices> {
        const headers = {
            'Authorization': `${this.authorization}`
        };
        const dataUrl = `${this.serverUrl}/api/v1/client/serviceByAgent/${serviceId}`;
        return this.httpClient.get<IAgentServices>(dataUrl, {headers}).pipe(catchError(this.handleError));
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
