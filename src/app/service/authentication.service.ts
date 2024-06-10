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
    return this.httpclient.post(this.PATH_OF_API , loginData, {
      headers: this.requestHeader,
    });
  }

  public getRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwt_decode(token);
      return decodedToken ? decodedToken.role : null;
    }
    return null;
  }

  public isAdmin(): boolean {
    const role = this.getRole();
    return role === 'admin';
  }

  public isAgent(): boolean {
    const role = this.getRole();
    return role === 'agent';
  }

  public isClient(): boolean {
    const role = this.getRole();
    return role === 'client';
  }

  public getToken(): string {
    return this.cookieService.get('Authorization');
  }
}
