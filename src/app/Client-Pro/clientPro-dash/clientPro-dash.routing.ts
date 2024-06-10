import { Routes } from '@angular/router';
import {DashboardClientProComponent} from '../pagesClientPro/dashboardClientPro/dashboardClientPro.component';
import {ProfileClientProComponent} from '../pagesClientPro/profileClientPro/profileClientPro.component';
import {ProfileAdminComponent} from '../../Back-office/pages/profileAdmin/profileAdmin.component';
import {NewAgentComponent} from '../../Back-office/pages/new-agent/new-agent.component';
import {AddAgentComponent} from '../../Back-office/Admincomponents/add-agent/add-agent.component';
import {EditAgentComponent} from '../../Back-office/Admincomponents/edit-agent/edit-agent.component';
import {DetailsAgentComponent} from '../../Back-office/Admincomponents/details-agent/details-agent.component';
import {DetailsClientComponent} from '../ClientProcomponents/details-client/details-client.component';
import {ProfileClientComponent} from '../../client/clientsPages/profileClient/profileClient.component';
import {
  ServicesClientProComponent,

} from '../pagesClientPro/services-ClientPro/services-agent.component';
import {AddServiceComponent} from '../ClientProcomponents/add-service/add-service.component';
import {
  TrasactionClientProComponent,

} from '../pagesClientPro/trasaction-ClientPro/trasaction-agent.component';




export const ClientProDashRoutes: Routes = [
  { path: '',      component: DashboardClientProComponent },
  { path: 'clientPro-profile',   component: ProfileClientProComponent },
  { path: 'clientPro-pro/:id', component: DetailsClientComponent },
  {path: 'clientPro-service', component: ServicesClientProComponent},
  {path: 'add-service', component: AddServiceComponent},
  { path: 'details-client/:id', component: DetailsClientComponent },
  { path: 'clientPro-transaction', component: TrasactionClientProComponent },


];
