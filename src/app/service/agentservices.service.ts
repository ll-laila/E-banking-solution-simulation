import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAgentServices} from '../models/AgentServices';


@Injectable({
    providedIn: 'root'
})
export class AgentservicesService {

    private serverUrl = `http://localhost:9092/api/client` ;

    constructor(private httpClient: HttpClient) { }



    public createService(client: IAgentServices): Observable<IAgentServices> {
        return this.httpClient.post<IAgentServices>(this.serverUrl , client);
    }







    public getAllServices(): Observable<IAgentServices[]> {
        return this.httpClient.get<IAgentServices[]>(this.serverUrl);

    }




    public deleteService(servicetId: number): Observable<HttpResponse<{}>> {
        const url = `${this.serverUrl}/${servicetId}`;
        console.log(url);
        console.log(servicetId);
        return this.httpClient.delete<HttpResponse<{}>>(url);
    }

    public updateService(service: IAgentServices, serviceId: number): Observable<IAgentServices> {

        const dataUrl = `${this.serverUrl}/${serviceId}`;
        return this.httpClient.put<IAgentServices>(dataUrl, service);
    }

    public getService(serviceId: number): Observable<IAgentServices> {
        const url = `${this.serverUrl}/${serviceId}`;
        return this.httpClient.get<IAgentServices>(url);

    }
}
