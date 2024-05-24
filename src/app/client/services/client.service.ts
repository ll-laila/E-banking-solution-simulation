import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:9090/api/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAgents(): Observable<any> {
    return this.httpClient.get(apiUrl + "agents/allAgents");
  }

  getAgentServiceById(agentId : number): Observable<any> {
    return this.httpClient.get(apiUrl + `service/${agentId}` );
  }

  getClientById(clientId : number): Observable<any> {
    return this.httpClient.get(apiUrl + `client/Profile/${clientId}` );
  }

  getPaymentAccountByClientId(clientId : number): Observable<any> {
    return this.httpClient.get(apiUrl + `client/PaymentAccount/${clientId}` );
  }

  getClientByPhoneNumber(phoneNumber: String): Observable<any> {
    return this.httpClient.get(apiUrl + `client/Profile/Phone/${phoneNumber}` );
  }


}
