import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';

import {LoginComponent} from "./auth-layout/login/login.component";
import {AdminDashComponent} from "./Back-office/admin-dash/admin-dash.component";
import {AdminComponentsModule} from "./Back-office/Admincomponents/AdminComponents.module";
import {AgentComponentsModule} from "./Agent/Agentcomponents/AgentComponents.module";
import {AgentDashComponent} from "./Agent/agent-dash/agent-dash.component";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AdminComponentsModule,
    AgentComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    LoginComponent,
    CommonModule,
    BrowserModule,
    AgentDashComponent
  ],
  declarations: [
    AppComponent,
    AdminDashComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
