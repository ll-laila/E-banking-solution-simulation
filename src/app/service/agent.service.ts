import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from "rxjs";
import {IAgent} from "../models/Agent";


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private serverUrl : string = `http://localhost:8080/api/agents` ;
  constructor(private httpClient :HttpClient) { }

  public getAllAgents(): Observable<IAgent[]> {
    return this.httpClient.get<IAgent[]>(this.serverUrl);

  }

  public createAgent(agent : IAgent) : Observable<IAgent>{
    return this.httpClient.post<IAgent>(this.serverUrl, agent);
  }

  public deleteAgent(agentId: number) : Observable<{}>{
    let url=`${this.serverUrl}/${agentId}`
    return this.httpClient.delete<{}>(url);
  }
}
