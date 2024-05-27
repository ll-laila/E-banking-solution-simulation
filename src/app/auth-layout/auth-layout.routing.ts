import { Routes } from '@angular/router';



import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'change-password', component: ChangePasswordComponent}

];
