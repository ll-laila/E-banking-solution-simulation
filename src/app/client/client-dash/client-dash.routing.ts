import { Routes } from '@angular/router';
import {DashboardClientComponent} from "../clientsPages/dashboardClient/dashboardClient.component";
import {ProfileClientComponent} from "../clientsPages/profileClient/profileClient.component";
import {TablesClientComponent} from "../clientsPages/tablesClient/tablesClient.component";
import {IconsClientComponent} from "../clientsPages/iconsClient/iconsClient.component";
import {MapsClientComponent} from "../clientsPages/mapsClient/mapsClient.component";



export const ClientDashRoutes: Routes = [
    { path: 'client',      component: DashboardClientComponent },
    { path: 'user-profile',   component: ProfileClientComponent },
    { path: 'tables',         component: TablesClientComponent },
    { path: 'icons',          component: IconsClientComponent },
    { path: 'maps',           component: MapsClientComponent },
  {path:'',component:DashboardClientComponent}
];
