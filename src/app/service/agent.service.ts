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

  //GET All Agents
  public getAllAgents(): Observable<IAgent[]> {
    let dataUrl: string = `${this.serverUrl}`;

    /*const headers = {
      'Authorization': `${this.authorization}`
    };*/
    return this.httpClient.get<IAgent[]>(dataUrl);

  }


  // Create agent
  public createAgent(agent : IAgent) : Observable<IAgent>{

    let dataUrl: string = `${this.serverUrl}`;
    return this.httpClient.post<IAgent>(dataUrl, agent);
  }
}
