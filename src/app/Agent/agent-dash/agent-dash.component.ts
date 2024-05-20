import { Component, OnInit } from '@angular/core';
import {AgentComponentsModule} from "../Agentcomponents/AgentComponents.module";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './agent-dash.component.html',
  standalone: true,
  imports: [
    AgentComponentsModule,
    RouterOutlet
  ],
  styleUrls: ['./agent-dash.component.scss']
})
export class AgentDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
