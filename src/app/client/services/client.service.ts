import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:9090/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAgents(): Observable<any> {
    return this.httpClient.get(apiUrl + "api/agents/allAgents");
  }

  getAgentServiceById(agentId : number): Observable<any> {
    return this.httpClient.get(apiUrl + `service/${agentId}` );
  }

}
