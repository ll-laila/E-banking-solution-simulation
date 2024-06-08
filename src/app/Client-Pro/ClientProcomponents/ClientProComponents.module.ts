import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarClientProComponent } from './sidebarClientPro/sidebarClientPro.component';
import { NavbarClientProComponent } from './navbarClientPro/navbarClientPro.component';
import { FooterClientProComponent } from './footerClientPro/footerClientPro.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { DetailsClientComponent } from './details-client/details-client.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import {ProfileClientProComponent} from "../pagesClientPro/profileClientPro/profileClientPro.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ProfileClientProComponent
  ],
  declarations: [
    FooterClientProComponent,
    NavbarClientProComponent,
    SidebarClientProComponent,
    DetailsClientComponent,
    AddServiceComponent,
    EditServiceComponent,
    UpdateServiceComponent
  ],
  exports: [
    FooterClientProComponent,
    NavbarClientProComponent,
    SidebarClientProComponent
  ]
})
export class ClientProComponentsModule { }
