import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarAgentComponent } from './sidebarAgent/sidebarAgent.component';
import { NavbarAgentComponent } from './navbarAgent/navbarAgent.component';
import { FooterAgentComponent } from './footerAgent/footerAgent.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterAgentComponent,
    NavbarAgentComponent,
    SidebarAgentComponent
  ],
  exports: [
    FooterAgentComponent,
    NavbarAgentComponent,
    SidebarAgentComponent
  ]
})
export class AgentComponentsModule { }
