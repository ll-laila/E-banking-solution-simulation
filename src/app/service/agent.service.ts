import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {IAgent} from "../models/Agent";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private serverUrl : string = `http://localhost:8080/api/v1/admin` ;
  private authorization = this.cookieService.get('Authorization');
  constructor(private httpClient :HttpClient, private cookieService : CookieService) { }

  public getAllAgents(): Observable<IAgent[]> {
    let dataUrl: string = `${this.serverUrl}/list`;
    //console.log(this.authorization);
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<IAgent[]>(dataUrl, {headers} );
  }


  public createAgent(agent : IAgent) : Observable<IAgent>{
    let dataUrl: string = `${this.serverUrl}/register`;

    console.log(this.authorization);
    return this.httpClient.post<IAgent>(dataUrl, agent);
  }


  public deleteAgent(id: number) : Observable<{}>{
    const headers = {
      'Authorization': `${this.authorization}`
    };
    let dataUrl: string = `${this.serverUrl}/delete/${id}`;
    return this.httpClient.delete<{}>(dataUrl, {headers});
  }

  public updateAgent(agent : IAgent, id: number) : Observable<IAgent>{

    let dataUrl: string = `${this.serverUrl}/update/${id}`;
    return this.httpClient.put<IAgent>(dataUrl, agent);
  }

  public getAgent(id: number): Observable<IAgent>{
    const headers = {
      'Authorization': `${this.authorization}`
    };
    let dataUrl: string = `${this.serverUrl}/agent/${id}`;
    return this.httpClient.get<IAgent>(dataUrl, {headers});

  }
}
