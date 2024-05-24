import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IClient} from '../models/Client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serverUrl = `http://localhost:9090/api/client` ;

  constructor(private httpClient: HttpClient) { }



  public createClient(client: IClient): Observable<IClient> {
    return this.httpClient.post<IClient>(this.serverUrl , client);
  }





  public getAllClients(): Observable<IClient[]> {
    return this.httpClient.get<IClient[]>(this.serverUrl);

  }




  public deleteClient(clientId: number): Observable<HttpResponse<{}>> {
    let url = `${this.serverUrl}/${clientId}`;
    console.log(url);
    console.log(clientId);
    return this.httpClient.delete<HttpResponse<{}>>(url);
  }

  public updateClient(agent : IClient, agentId: number) : Observable<IClient>{

    let dataUrl: string = `${this.serverUrl}/${agentId}`;
    return this.httpClient.put<IClient>(dataUrl, agent);
  }

  public getClient(agentId: number): Observable<IClient>{
    let url: string = `${this.serverUrl}/${agentId}`;
    return this.httpClient.get<IClient>(url);

  }
}
