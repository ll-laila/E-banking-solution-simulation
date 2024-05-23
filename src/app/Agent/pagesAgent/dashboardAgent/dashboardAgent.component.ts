import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


import {IAgent} from '../../../models/Agent';
import {Router} from '@angular/router';
import {AgentService} from '../../../service/agent.service';
import {IClient} from '../../../models/Client';
import {ClientService} from '../../../service/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardAgent.component.html',
  styleUrls: ['./dashboardAgent.component.scss']
})
export class DashboardAgentComponent implements OnInit {

  clients: IClient[] = [];
  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
  }
  addClient() {
    this.router.navigate(['/add-client']);
  }

}
