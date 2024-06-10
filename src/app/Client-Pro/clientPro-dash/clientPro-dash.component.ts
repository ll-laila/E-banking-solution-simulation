import { Component, OnInit } from '@angular/core';
import {ClientProComponentsModule} from "../ClientProcomponents/ClientProComponents.module";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './clientPro-dash.component.html',
  standalone: true,
  imports: [
    ClientProComponentsModule,
    RouterOutlet
  ],
  styleUrls: ['./clientPro-dash.component.scss']
})
export class ClientProDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
