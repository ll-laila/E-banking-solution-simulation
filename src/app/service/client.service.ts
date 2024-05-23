import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {IClient} from '../models/Client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serverUrl = `http://localhost:8080/agents/` ;
  constructor(private httpClient: HttpClient) { }

  public getAllClients(): Observable<IClient[]> {
    return this.httpClient.get<IClient[]>(this.serverUrl);

  }

  public createClient(client: IClient): Observable<IClient> {
    return this.httpClient.post<IClient>(this.serverUrl + 'register', client);
  }


  public deleteClient(clientId: number): Observable<{}> {
    const url = `${this.serverUrl}/${clientId}`;
    return this.httpClient.delete<{}>(url);
  }
}
