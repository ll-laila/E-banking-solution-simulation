import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import {AdminDashComponent} from "./Back-office/admin-dash/admin-dash.component";

import {AgentDashComponent} from "./Agent/agent-dash/agent-dash.component";
import { ClientDashComponent } from './client/client-dash/client-dash.component';
import {DashboardClientComponent} from "./client/clientsPages/dashboardClient/dashboardClient.component";
import {ProfileClientComponent} from "./client/clientsPages/profileClient/profileClient.component";
import {TablesClientComponent} from "./client/clientsPages/tablesClient/tablesClient.component";
import {IconsClientComponent} from "./client/clientsPages/iconsClient/iconsClient.component";
import {MapsClientComponent} from "./client/clientsPages/mapsClient/mapsClient.component";

const routes: Routes =[
  /*  {
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
  redirectTo: 'dashboardClient',
  pathMatch: 'full',
  },
*/
  {
    path: '',
    component: ClientDashComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/client/client-dash/client-dash.module').then(m => m.ClientDashModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
  export class AppRoutingModule{}
