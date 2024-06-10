import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


import {IClient} from '../../../models/Client';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../service/client.service';
import {SharedClientService} from '../../../client/services/shared-client.service';
import {SharedAgentService} from '../../../service/shared-agent.service';
import {IAgent} from '../../../models/Agent';
import {AgentService} from '../../../service/agent.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardAgent.component.html',
  styleUrls: ['./dashboardAgent.component.scss']
})
export class DashboardAgentComponent implements OnInit {
  constructor(private router: Router, private clientService: ClientService, private agentService: AgentService,
  private sharedAgentService: SharedAgentService, private route: ActivatedRoute

  ) { }

  clients: IClient[] = [];
  agents: IClient[] = [];
 phoneNumber: string;
  agent: IAgent ;

  ngOnInit(): void {
      this.agent = this.sharedAgentService.getAgent();
    this.getAllClients(this.agent.id);
    this.sharedAgentService.setAgent(this.agent);
    this.route.queryParams.subscribe(params => {
      this.phoneNumber = params['phoneNumber'];
      if (this.phoneNumber) {
        this.getAgentByPhone(this.phoneNumber);
      }
    });

  }


  getAgentByPhone(phoneNum: string) {
    this.agentService.getAgentByPhoneNumber(phoneNum).subscribe(res => {
      console.log(res);
      this.agent = res;
      this.sharedAgentService.setAgent(this.agent);
    }, error => {
      console.log(error);
    });
  }


  addClient() {
    this.router.navigate(['/add-client']);
  }


  getAllClients(idAgent: number): void {
    this.clientService.getAllClientsByAgentId(idAgent).subscribe(
      (clients: IClient[]) => {
        this.clients = clients;
      },

      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des clients :', error);
      }
    );
  }

  deleteClient(id: number) {
    console.log(id);
    this.clientService.deleteClient(id).subscribe(
      () => {
        console.log('Client deleted successfully.');
        this.getAllClients(this.agent.id);
      },
      (error) => {
        console.error('An error occurred while deleting the client:', error);
      }
    );
    window.location.reload();

  }

  updateClient(id: number) {
    this.router.navigate(['/edit-client', id]);

  }

  viewClientDetails(id: number) {
    this.router.navigate(['/details-client', id]);
  }



}
