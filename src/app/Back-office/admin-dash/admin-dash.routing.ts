import { Routes } from '@angular/router';
import {DashboardAdminComponent} from "../pages/dashboardAdmin/dashboardAdmin.component";
import {ProfileAdminComponent} from "../pages/profileAdmin/profileAdmin.component";
import {TablesAdminComponent} from "../pages/tablesAdmin/tablesAdmin.component";
import {IconsAdminComponent} from "../pages/iconsAdmin/iconsAdmin.component";
import {MapsAdminComponent} from "../pages/mapsAdmin/mapsAdmin.component";



export const AdminDashRoutes: Routes = [
<<<<<<< HEAD
  { path: 'admin',      component: DashboardAdminComponent },
  { path: 'user-profile',   component: ProfileAdminComponent },
  { path: 'tables',         component: TablesAdminComponent },
  { path: 'icons',          component: IconsAdminComponent },
  { path: 'maps',           component: MapsAdminComponent }
=======
    { path: 'admin',      component: DashboardAdminComponent },
    { path: 'user-profile',   component: ProfileAdminComponent },
    { path: 'tables',         component: TablesAdminComponent },
    { path: 'icons',          component: IconsAdminComponent },
    { path: 'maps',           component: MapsAdminComponent },
    { path: '', redirectTo:'admin', pathMatch:'full' }
>>>>>>> d88f39453e5b39a3373f7e6968c316d03dbbda8d
];
