import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  PATH_OF_API = 'http://localhost:8080/api/v1/auth/authenticate';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  private authorization = this.cookieService.get('Authorization');

  constructor(
    private httpclient: HttpClient,
    private cookieService : CookieService
  ) {}

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API , loginData, {
      headers: this.requestHeader,
    });
  }

  public changePswFirstTime(changePswData: any) {
    let dataUrl: string = `http://localhost:8080/api/v1/client/changePassword`;
    console.log(changePswData);
    console.log(this.authorization);
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpclient.post(dataUrl , changePswData, {headers});
  }
}
