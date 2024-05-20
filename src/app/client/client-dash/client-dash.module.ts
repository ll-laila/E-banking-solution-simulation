import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import {ClientDashRoutes} from './client-dash.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DashboardClientComponent} from "../clientsPages/dashboardClient/dashboardClient.component";
import {ProfileClientComponent} from "../clientsPages/profileClient/profileClient.component";
import {TablesClientComponent} from "../clientsPages/tablesClient/tablesClient.component";
import {IconsClientComponent} from "../clientsPages/iconsClient/iconsClient.component";
import {MapsClientComponent} from "../clientsPages/mapsClient/mapsClient.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientDashRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardClientComponent,
    ProfileClientComponent,
    TablesClientComponent,
    IconsClientComponent,
    MapsClientComponent
  ]
})

export class ClientDashModule {}
