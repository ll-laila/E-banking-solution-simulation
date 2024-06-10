import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/MyClients', title: 'Mes Clients', icon: 'fas fa-users text-red', class: '' },
    { path: '/clientPro-service', title: 'Mes Services', icon: 'fas fa-question-circle text-red', class: '' },
    { path: '/clientPro-transaction', title: 'Mes Transactions',  icon: 'fas fa-exchange-alt text-red', class: '' },
    { path: '/clientPro-profile', title: 'Mon Compte',  icon: 'ni-single-02 text-yellow', class: '' },
];

@Component({
  selector: 'app-sidebar-clientPro',
  templateUrl: 'sidebarClientPro.component.html',
  styleUrls: ['sidebarClientPro.component.scss']
})
export class SidebarClientProComponent implements OnInit {

    public menuItems: any[];
    public isCollapsed = true;

    constructor(private router: Router) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
        });
    }
}
