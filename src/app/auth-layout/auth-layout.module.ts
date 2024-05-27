import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    LoginComponent,

    // NgbModule
  ],
  declarations: [
    RegisterComponent,
    ChangePasswordComponent
  ]
})
export class AuthLayoutModule { }
