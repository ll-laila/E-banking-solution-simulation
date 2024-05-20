import { Routes } from '@angular/router';
import {DashboardAdminComponent} from "../pages/dashboardAdmin/dashboardAdmin.component";
import {ProfileAdminComponent} from "../pages/profileAdmin/profileAdmin.component";
import {TablesAdminComponent} from "../pages/tablesAdmin/tablesAdmin.component";
import {IconsAdminComponent} from "../pages/iconsAdmin/iconsAdmin.component";
import {MapsAdminComponent} from "../pages/mapsAdmin/mapsAdmin.component";



export const AdminDashRoutes: Routes = [
    { path: 'admin',      component: DashboardAdminComponent },
    { path: 'user-profile',   component: ProfileAdminComponent },
    { path: 'tables',         component: TablesAdminComponent },
    { path: 'icons',          component: IconsAdminComponent },
    { path: 'maps',           component: MapsAdminComponent },
    { path: '', redirectTo:'admin', pathMatch:'full' }
];
