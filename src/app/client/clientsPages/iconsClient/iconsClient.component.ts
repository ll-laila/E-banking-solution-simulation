import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { Agent } from "../../models/agent";
import { ServiceAgent } from "../../models/serviceAgent";
import { Router } from '@angular/router';

@Component({
  selector: 'app-icons',
  templateUrl: './iconsClient.component.html',
  styleUrls: ['./iconsClient.component.scss']
})
export class IconsClientComponent implements OnInit {

  public copy: string;
  public agents: Agent[];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.copy = "";
    this.getAllAgents();
  }

  getAllAgents() {
    this.clientService.getAllAgents().subscribe(res => {
      console.log(res);
      this.agents = res;
      this.getAgentsServices();
    }, error => {
      console.log(error);
    })
  }

  getAgentsServices() {
    this.agents.forEach(agent => {
      this.clientService.getAgentServiceById(agent.id).subscribe(services => {
        agent.services = services;
      }, error => {
        console.log(error);
      });
    });
  }

  redirectToPayment(agent: Agent, service: ServiceAgent) {
    this.router.navigate(['/client/paiement'], { queryParams: { agentId: agent.id, agentFirstName: agent.firstName,
     agentLastName: agent.lastName, agentImage: agent.image, serviceId: service.id ,serviceName: service.name,serviceType: service.type, } });
  }
}
