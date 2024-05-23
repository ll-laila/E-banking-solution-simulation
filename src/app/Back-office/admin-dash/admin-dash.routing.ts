import { Routes } from '@angular/router';
import {ProfileAdminComponent} from "../pages/profileAdmin/profileAdmin.component";
import {NewAgentComponent} from "../pages/new-agent/new-agent.component";
import {AddAgentComponent} from "../Admincomponents/add-agent/add-agent.component";
import {EditAgentComponent} from "../Admincomponents/edit-agent/edit-agent.component";
import {DetailsAgentComponent} from "../Admincomponents/details-agent/details-agent.component";



export const AdminDashRoutes: Routes = [

    { path: 'user-profile',   component: ProfileAdminComponent },
    { path: 'admin',         component: NewAgentComponent },
    { path: 'add-agent', component: AddAgentComponent },
    { path: 'edit-agent', component: EditAgentComponent },
    { path: 'details-agent', component: DetailsAgentComponent},

];
