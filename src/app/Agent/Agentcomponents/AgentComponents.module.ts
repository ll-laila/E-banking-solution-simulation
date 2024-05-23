import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarAgentComponent } from './sidebarAgent/sidebarAgent.component';
import { NavbarAgentComponent } from './navbarAgent/navbarAgent.component';
import { FooterAgentComponent } from './footerAgent/footerAgent.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddClientComponent } from './add-client/add-client.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FormsModule
    ],
  declarations: [
    FooterAgentComponent,
    NavbarAgentComponent,
    SidebarAgentComponent,
    AddClientComponent
  ],
  exports: [
    FooterAgentComponent,
    NavbarAgentComponent,
    SidebarAgentComponent
  ]
})
export class AgentComponentsModule { }
