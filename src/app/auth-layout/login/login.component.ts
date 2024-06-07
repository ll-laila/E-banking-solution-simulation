import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyToken } from 'src/app/models/MyToken';
import { AuthenticationService } from "../../service/authentication.service";

import { DatePipe } from "@angular/common";
import {jwtDecode} from "jwt-decode";


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
  test: Date = new Date();
  constructor(
    private router: Router,
    private userService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe({
      next: (response: any) => {
        const decodedToken = jwtDecode<MyToken>(response.access_token);

        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() +  24 * 60 * 60 * 1000);
        const expires = `expires=${expirationDate.toUTCString()}`;
        document.cookie = `Authorization=${encodeURIComponent('Bearer ' + response.access_token)}; ${expires}; path=/`;
        console.log(decodedToken.role);

        if (decodedToken.role === 'ADMIN') {
          this.router.navigate(['/admin']);
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
