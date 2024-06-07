import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  PATH_OF_API = 'http://localhost:8080/api/v1/auth/authenticate';


  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
  ) {}

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API , loginData, {
      headers: this.requestHeader,
    });
  }
}
