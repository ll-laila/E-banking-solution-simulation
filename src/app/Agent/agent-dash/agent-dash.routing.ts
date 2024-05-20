import { Routes } from '@angular/router';
import {DashboardAgentComponent} from "../pagesAgent/dashboardAgent/dashboardAgent.component";
import {ProfileAgentComponent} from "../pagesAgent/profileAgent/profileAgent.component";
import {TablesAgentComponent} from "../pagesAgent/tablesAgent/tablesAgent.component";
import {IconsAgentComponent} from "../pagesAgent/iconsAgent/iconsAgent.component";
import {MapsAgentComponent} from "../pagesAgent/mapsAgent/mapsAgent.component";




export const AgentDashRoutes: Routes = [
  { path: 'agent',      component: DashboardAgentComponent },
  { path: 'user-profile',   component: ProfileAgentComponent },
  { path: 'tables',         component: TablesAgentComponent },
  { path: 'icons',          component: IconsAgentComponent },
  { path: 'maps',           component: MapsAgentComponent }
];
