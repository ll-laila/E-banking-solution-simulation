import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  PATH_OF_API = 'http://localhost:8080/api/v1/auth/authenticate';

  constructor(
    private httpclient: HttpClient,
    private cookieService: CookieService
  ) {}

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API, loginData, {
      headers: this.requestHeader,
    });
  }

  public getRole(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken: any = jwt_decode(token);
        console.log('Decoded Token:', decodedToken); // Debugging log
        return decodedToken ? decodedToken.role : null;
      } catch (error) {
        console.error('Token decoding failed:', error);
        return null;
      }
    }
    return null;
  }


  public isAdmin(): boolean {
    const role = this.getRole();
    console.log('isAdmin role:', role);
    const isAdmin = role === 'ADMIN';
    console.log('isAdmin:', isAdmin);
    return isAdmin;
  }

  /*public isAgent(): boolean {
    const role = this.getRole();
    console.log('isAgent role:', role);
    const isAgent = role === 'AGENT';
    console.log('isAgent:', isAgent);
    return isAgent;
  }*/

 /* public isClient(): boolean {
    const role = this.getRole();
    console.log('isClient role:', role);
    const isClient = role === 'CLIENT';
    console.log('isClient:', isClient);
    return isClient;
  }*/



  public getToken(): string {
    const token = this.cookieService.get('Authorization');
    console.log('Token:', token); // Debugging log
    return token;
  }
}
