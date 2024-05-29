import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation';

const apiUrl = 'http://localhost:9090/fim/est3Dgate/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  getClientOperation(phoneNumber: string): Observable<Operation[]> {
    return this.httpClient.get<Operation[]>(apiUrl+`client/operations/${phoneNumber}`);
  }
  

  constructor(private httpClient: HttpClient) {
  }

  getAllAgents(): Observable<any> {
    return this.httpClient.get(apiUrl + "allCreditors");
  }

  getAgentServiceById(agentId : number): Observable<any> {
    return this.httpClient.get(apiUrl + `services/${agentId}` );
  }

  getClientById(clientId : number): Observable<any> {
    return this.httpClient.get(apiUrl + `Profile/${clientId}` );
  }

  getPaymentAccountByClientId(clientId : number): Observable<any> {
    return this.httpClient.get(apiUrl + `PaymentAccount/${clientId}` );
  }

  getClientByPhoneNumber(phoneNumber: String): Observable<any> {
    return this.httpClient.get(apiUrl + `Profile/Phone/${phoneNumber}` );
  }


}
