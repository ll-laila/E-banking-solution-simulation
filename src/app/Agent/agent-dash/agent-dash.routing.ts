import { Routes } from '@angular/router';
import {DashboardAgentComponent} from '../pagesAgent/dashboardAgent/dashboardAgent.component';
import {ProfileAgentComponent} from '../pagesAgent/profileAgent/profileAgent.component';
import {AddClientComponent} from '../Agentcomponents/add-client/add-client.component';




export const AgentDashRoutes: Routes = [
  { path: 'agent',      component: DashboardAgentComponent },
  { path: 'agent-profile',   component: ProfileAgentComponent },
  {path: 'add-client',       component: AddClientComponent},
];
