import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ClientProDashRoutes} from './clientPro-dash.routing';
import {DashboardClientProComponent} from "../pagesClientPro/dashboardClientPro/dashboardClientPro.component";
import {TrasactionClientProComponent} from "../pagesClientPro/trasaction-ClientPro/trasaction-agent.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientProDashRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardClientProComponent,
    TrasactionClientProComponent
  ]
})

export class ClientProDashModule {}
