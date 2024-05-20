import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {AuthLayoutComponent} from "./auth-layout/auth-layout.component";

const routes: Routes =[
  {
    path: '',
    component: AuthLayoutComponent,
  },
  {
    path: 'dashboardAdmin',
    redirectTo: 'dashboardAdmin',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminDashComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/back-office/admin-dash/admin-dash.module').then(m => m.AdminDashModule)
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
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
export class AppRoutingModule { }
