import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';

import { AdminDashComponent } from './Back-office/admin-dash/admin-dash.component';
import { AdminComponentsModule } from './Back-office/Admincomponents/AdminComponents.module';
import { AgentComponentsModule } from './Agent/Agentcomponents/AgentComponents.module';
import { AgentDashComponent } from './Agent/agent-dash/agent-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth-layout/login/login.component';
import { ChangePasswordComponent } from './auth-layout/change-password/change-password.component';
import { ServicesAgentComponent } from './Agent/pagesAgent/services-agent/services-agent.component';
import { ToastrModule } from 'ngx-toastr';
import { TrasactionAgentComponent } from './Agent/pagesAgent/trasaction-agent/trasaction-agent.component';
import {ClientProDashComponent} from "./Client-Pro/clientPro-dash/clientPro-dash.component";
import {ClientProDashRoutes} from "./Client-Pro/clientPro-dash/clientPro-dash.routing";
import {ClientProDashModule} from "./Client-Pro/clientPro-dash/clientPro-dash.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AdminComponentsModule,
    AgentComponentsModule,
    NgbModule,
    RouterModule,

    AgentDashComponent,
    ClientProDashComponent,
    LoginComponent,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ClientProDashModule
  ],
  declarations: [
    AppComponent,
    AdminDashComponent,

    // ChangePasswordComponent,
    ServicesAgentComponent,
    TrasactionAgentComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
