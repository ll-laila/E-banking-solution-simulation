import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProfileAdminComponent} from "../pages/profileAdmin/profileAdmin.component";
import {NewAgentComponent} from "../pages/new-agent/new-agent.component";
import {AdminDashRoutes} from "./admin-dash.routing";
import {AddAgentComponent} from "../Admincomponents/add-agent/add-agent.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminDashRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    ProfileAdminComponent,
    NewAgentComponent,
  ]
})

export class AdminDashModule {}
