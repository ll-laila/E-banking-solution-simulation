import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import {AdminDashRoutes} from './admin-dash.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DashboardAdminComponent} from "../pages/dashboardAdmin/dashboardAdmin.component";
import {ProfileAdminComponent} from "../pages/profileAdmin/profileAdmin.component";
import {TablesAdminComponent} from "../pages/tablesAdmin/tablesAdmin.component";
import {IconsAdminComponent} from "../pages/iconsAdmin/iconsAdmin.component";
import {MapsAdminComponent} from "../pages/mapsAdmin/mapsAdmin.component";


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
    DashboardAdminComponent,
    ProfileAdminComponent,
    TablesAdminComponent,
    IconsAdminComponent,
    MapsAdminComponent
  ]
})

export class AdminDashModule {}
