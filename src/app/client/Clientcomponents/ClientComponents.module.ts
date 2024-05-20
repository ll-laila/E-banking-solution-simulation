import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarClientComponent } from './sidebarClient/sidebarClient.component';
import { NavbarClientComponent } from './navbarClient/navbarClient.component';
import { FooterClientComponent } from './footerClient/footerClient.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterClientComponent,
    NavbarClientComponent,
    SidebarClientComponent
  ],
  exports: [
    FooterClientComponent,
    NavbarClientComponent,
    SidebarClientComponent
  ]
})
export class ClientComponentsModule { }
