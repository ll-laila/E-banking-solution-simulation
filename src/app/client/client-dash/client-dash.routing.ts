import { Routes } from '@angular/router';
import {DashboardClientComponent} from "../clientsPages/dashboardClient/dashboardClient.component";
import {ProfileClientComponent} from "../clientsPages/profileClient/profileClient.component";
import {TablesClientComponent} from "../clientsPages/tablesClient/tablesClient.component";
import {IconsClientComponent} from "../clientsPages/iconsClient/iconsClient.component";
import {MapsClientComponent} from "../clientsPages/mapsClient/mapsClient.component";



export const ClientDashRoutes: Routes = [
    { path: 'accueil',      component: DashboardClientComponent },
    { path: 'agents',         component: IconsClientComponent},
    { path: 'historique',          component: TablesClientComponent  },
    { path: 'mon-compte',   component: ProfileClientComponent },
    { path: 'paiement',           component: MapsClientComponent },
  {path:'',component:DashboardClientComponent}
];
