import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import {AdminDashComponent} from './Back-office/admin-dash/admin-dash.component';

import {AgentDashComponent} from './Agent/agent-dash/agent-dash.component';
import { ClientDashComponent } from './client/client-dash/client-dash.component';

import {DashboardClientComponent} from './client/clientsPages/dashboardClient/dashboardClient.component';
import {ProfileClientComponent} from './client/clientsPages/profileClient/profileClient.component';
import {HistoryComponent} from './client/clientsPages/history/history.component';
import {CreditorsListComponent} from './client/clientsPages/creditorsList/creditorsList.component';
import {Payment} from './client/clientsPages/payment/payment';
import {LoginComponent} from "./auth-layout/login/login.component";
import {ChangePasswordComponent} from "./auth-layout/change-password/change-password.component";





const routes: Routes = [
   {


    path: '',
    component: AuthLayoutComponent,
  },


  {
    path: 'admin',
    redirectTo: 'admin',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminDashComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/Back-office/admin-dash/admin-dash.module').then(m => m.AdminDashModule)
      }
    ]
  },
  {

    path: 'agent',
    redirectTo: 'agent',
    pathMatch: 'full',
  }, {
    path: '',
    component: AgentDashComponent,
    children: [
    {
      path: '',
      loadChildren: () => import('src/app/Agent/agent-dash/agent-dash.module').then(m => m.AgentDashModule)
    }]},


  {
  path: 'client',
  redirectTo: 'client',
  pathMatch: 'full',

},

  {
    path: 'client',
    component : ClientDashComponent,
    children : [
      {
        path: '',
        loadChildren: () => import('src/app/client/client-dash/client-dash.module').then(m => m.ClientDashModule)
      }
    ]
  },   {


    path: 'login',
    component: LoginComponent,
  },  {


    path: 'change-password',
    component: ChangePasswordComponent,
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
  export class AppRoutingModule {}
