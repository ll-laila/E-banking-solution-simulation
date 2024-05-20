import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DashboardAgentComponent} from "../pagesAgent/dashboardAgent/dashboardAgent.component";
import {TablesAgentComponent} from "../pagesAgent/tablesAgent/tablesAgent.component";
import {IconsAgentComponent} from "../pagesAgent/iconsAgent/iconsAgent.component";
import {MapsAgentComponent} from "../pagesAgent/mapsAgent/mapsAgent.component";
import {AgentDashRoutes} from "./agent-dash.routing";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AgentDashRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardAgentComponent,
    TablesAgentComponent,
    TablesAgentComponent,
    IconsAgentComponent,
    MapsAgentComponent
  ]
})

export class AgentDashModule {}
