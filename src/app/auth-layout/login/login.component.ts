import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyToken } from 'src/app/models/MyToken';


import { DatePipe } from '@angular/common';

import {AuthenticationService} from '../../service/authentication.service';
import jwtDecode from "jwt-decode";
import {SharedInfosService} from "../../service/shared-infos.service";



@Component({
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
    private userService: AuthenticationService,
    private sharedInfosService: SharedInfosService

  ) {
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
     this.phoneNumber = loginForm.value.phoneNumber;
    this.userService.login(loginForm.value).subscribe({
      next: (response: any) => {
        const decodedToken = jwtDecode<MyToken>(response.access_token);

        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000);
        const expires = `expires=${expirationDate.toUTCString()}`;
        document.cookie = `Authorization=${encodeURIComponent('Bearer ' + response.access_token)}; ${expires}; path=/`;
        console.log(decodedToken.role);
        console.log(decodedToken.isFirstLogin);
        if (decodedToken.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (decodedToken.role == 'AGENT') {
          if (decodedToken.isFirstLogin === true) {
            this.router.navigate(['/agent-change-password']);
          } else {
            this.sharedInfosService.setPhoneNumber(this.phoneNumber);
            this.router.navigate(['/agent']);
          }
        } else if (decodedToken.role == 'CLIENT') {
          if (decodedToken.isFirstLogin === true) {
            this.router.navigate(['/client-change-password']);
          } else {
            this.sharedInfosService.setPhoneNumber(this.phoneNumber);
            this.router.navigate(['/client']);

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
