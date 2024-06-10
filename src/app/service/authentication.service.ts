import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  PATH_OF_API = 'http://localhost:8080/api/v1/auth/authenticate';
  constructor(
    private httpclient: HttpClient,
  ) {}

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });


  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API , loginData, {
      headers: this.requestHeader,
    });
  }




}
