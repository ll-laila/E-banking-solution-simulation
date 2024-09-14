import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ClientChangePasswordService {
  constructor(
    private httpclient: HttpClient,
    private cookieService : CookieService
  ) {}
  private authorization = this.cookieService.get('Authorization');


  public changePswFirstTime(changePswData: any) {
    let dataUrl: string = `http://localhost:9090/client/infos/changePassword`;

    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpclient.post(dataUrl , changePswData, {headers});
  }

}

