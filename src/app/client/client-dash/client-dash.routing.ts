import { Routes } from '@angular/router';
import {DashboardClientComponent} from "../clientsPages/dashboardClient/dashboardClient.component";
import {ProfileClientComponent} from "../clientsPages/profileClient/profileClient.component";
import {HistoryComponent} from "../clientsPages/history/history.component";
import {CreditorsListComponent} from "../clientsPages/creditorsList/creditorsList.component";
import {Payment} from "../clientsPages/payment/payment";
import {ValidateComponent} from "../clientsPages/payment/validate/validate.component";
import {ConfirmComponent} from "../clientsPages/payment/confirm/confirm.component";



export const ClientDashRoutes: Routes = [
    { path: 'accueil',      component: DashboardClientComponent },
    { path: 'agents',         component: CreditorsListComponent},
    { path: 'historique',          component: HistoryComponent  },
    { path: 'mon-compte',   component: ProfileClientComponent },
    { path: 'paiement',           component: Payment },
  { path: 'validate',           component: ValidateComponent },
  { path: 'confirm',           component: ConfirmComponent },
  {path:'',component:DashboardClientComponent}
];
