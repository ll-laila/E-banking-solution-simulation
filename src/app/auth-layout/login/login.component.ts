import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyToken } from 'src/app/models/MyToken';

import { DatePipe } from '@angular/common';
import {jwtDecode} from 'jwt-decode';
import {AuthenticationService} from '../../service/authentication.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: 'login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  public phoneNumber: string;
  test: Date = new Date();
  constructor(
    private router: Router,
    private userService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    const phoneNumber = loginForm.value.phoneNumber;
    this.userService.login(loginForm.value).subscribe({
      next: (response: any) => {
        const decodedToken = jwtDecode<MyToken>(response.access_token);

        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() +  24 * 60 * 60 * 1000);
        const expires = `expires=${expirationDate.toUTCString()}`;
        document.cookie = `Authorization=${encodeURIComponent('Bearer ' + response.access_token)}; ${expires}; path=/`;
        console.log(decodedToken.role);
        console.log(decodedToken.isFirstLogin);

        if (decodedToken.role === 'ADMIN') {
          this.router.navigate(['/admin'], { queryParams: { phoneNumber: phoneNumber } });
        } else if (decodedToken.role == 'AGENT') {
          if (decodedToken.isFirstLogin === true) {
            this.router.navigate(['/change-password']);
          } else {
            this.router.navigate(['/agent'], { queryParams: { phoneNumber: phoneNumber } });
          }
        } else if (decodedToken.role == 'CLIENT') {
          if (decodedToken.isFirstLogin === true) {
            this.router.navigate(['/change-password']);
          } else {
            this.router.navigate(['/client'], { queryParams: { phoneNumber: phoneNumber } });
          }
        } else {
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
