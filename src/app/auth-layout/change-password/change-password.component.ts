import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {AuthenticationService} from "../../service/authentication.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {jwtDecode} from "jwt-decode";
import {MyToken} from "../../models/MyToken";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  test: Date = new Date();
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private userService: AuthenticationService,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    const token = this.cookieService.get('token');
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
    });
  }

  changePasswordForm = new FormGroup({
    password: new FormControl('', Validators.required)
  });

  onSubmit(changePswForm : NgForm) {

    this.userService.changePswFirstTime(changePswForm.value).subscribe(
      (response :any) => {
        const decodedToken = jwtDecode<MyToken>(response.access_token);

        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() +  24 * 60 * 60 * 1000);
        const expires = `expires=${expirationDate.toUTCString()}`;
        document.cookie = `Authorization=${encodeURIComponent('Bearer ' + response.access_token)}; ${expires}; path=/`;
        console.log(decodedToken.isFirstLogin);

        if (decodedToken.isFirstLogin === false) {
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/change-password']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get f() { return this.changePasswordForm.controls; }

}
