import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/agent', title: 'Clients', icon: 'fas fa-users text-red', class: '' },
    { path: '/agent-profile', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
];

@Component({
  selector: 'app-sidebar-agent',
  templateUrl: 'sidebarAgent.component.html',
  styleUrls: ['sidebarAgent.component.scss']
})
export class SidebarAgentComponent implements OnInit {

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
