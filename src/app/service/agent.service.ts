import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {IAgent} from "../models/Agent";


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private serverUrl : string = `http://localhost:9090/api/agents` ;
  constructor(private httpClient :HttpClient) { }

  public getAllAgents(): Observable<IAgent[]> {
    return this.httpClient.get<IAgent[]>(this.serverUrl);

  }

  public createAgent(agent : IAgent) : Observable<IAgent>{
    return this.httpClient.post<IAgent>(this.serverUrl, agent);
  }


  public deleteAgent(agentId: number): Observable<HttpResponse<{}>> {
    let url = `${this.serverUrl}/${agentId}`;
    console.log(url);
    console.log(agentId);
    return this.httpClient.delete<HttpResponse<{}>>(url);
  }

  public updateAgent(agent : IAgent, agentId: number) : Observable<IAgent>{

    let dataUrl: string = `${this.serverUrl}/${agentId}`;
    return this.httpClient.put<IAgent>(dataUrl, agent);
  }

  public getAgent(agentId: number): Observable<IAgent>{
    let url: string = `${this.serverUrl}/${agentId}`;
    return this.httpClient.get<IAgent>(url);

  }
}
