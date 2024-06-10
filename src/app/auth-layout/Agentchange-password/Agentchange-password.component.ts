import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

import {MyToken} from "../../models/MyToken";
import {jwtDecode} from "jwt-decode";
import {AgentChangePasswordService} from "../../service/AgentChangePassword.service";
import {ClientChangePasswordService} from "../../service/client-change-password.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './Agentchange-password.component.html',
  styleUrls: ['./Agentchange-password.component.scss']
})
export class AgentchangePasswordComponent implements OnInit {
  test: Date = new Date();
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private userService: ClientChangePasswordService,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const token = this.cookieService.get('token');
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
    });
  }

  changePasswordForm = new FormGroup({
    password: new FormControl('', Validators.required)
  });

  onSubmit(changePswForm: NgForm) {
    this.userService.changePswFirstTime(changePswForm.value).subscribe(
      (response: any) => {
        console.log('Response from API:', response);
        this.router.navigate(['/agent']);
        try {
          console.log("hi");
          const decodedToken = jwtDecode<MyToken>(response.access_token);
          console.log('Decoded token:', decodedToken);

          const expirationDate = new Date();
          expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000);
          const expires = `expires=${expirationDate.toUTCString()}`;
          document.cookie = `Authorization=${encodeURIComponent('Bearer ' + response.access_token)}; ${expires}; path=/`;

          if (decodedToken.isFirstLogin === false) {
            console.log('Redirecting to /agent');
            this.router.navigate(['/agent']);
          } else {
            console.log('Redirecting to /change-password');
            this.router.navigate(['/change-password']);
          }
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      },
      (error) => {
        console.log('Error during change password request:', error);
      }
    );
  }

  get f() { return this.changePasswordForm.controls; }
}
