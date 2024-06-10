import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { Agent } from "../../models/agent";
import { ServiceAgent } from "../../models/serviceAgent";
import {ActivatedRoute, Router} from '@angular/router';
import {SharedAgentService} from "../../services/shared-agent.service";
import {SharedAgentServiceService} from "../../services/shared-agent-service.service";
import {PaymentService} from "../../services/payment.service";

@Component({
  selector: 'app-icons',
  templateUrl: './creditorsList.component.html',
  styleUrls: ['./creditorsList.component.scss']
})
export class CreditorsListComponent implements OnInit {

  public copy: string;
  public agents: Agent[];
  public responseMessage: string;
  public currentMsg: number;


  /*public agents: Agent[] = [
  {
    id: 1,
    firstName: "Inwi",
    lastName: "",
    email: "INWI@gmail.com",
    phoneNumber: "0534551234",
    image: "https://images.teamtailor-cdn.com/images/s3/teamtailor-production/gallery_picture-v6/image_uploads/9ed77d49-3b8e-4fbc-9639-2ec71db044d8/original.png",
    services: [
      { id: 1, name: "paiement Internet", type: "facture internet" },
      { id: 2, name: "paiement Carte SIM", type: "facture carte SIM" },
    ],
  }
  ]*/


  constructor(private clientService: ClientService,
              private paymentService: PaymentService,
              private router: Router,
              private route: ActivatedRoute,
              private sharedAgentService: SharedAgentService,
              private sharedAgentServiceService: SharedAgentServiceService
  ) { }

  ngOnInit() {
    this.copy = "";
    this.getAllAgents();
    this.route.queryParams.subscribe(params => {
      if(params['responseMessage'] != null){
        switch (+params['status']) {
          case 1:
            this.currentMsg = 1;
            break;
          case 0:
            this.currentMsg = 0;
            break;
        }
        this.responseMessage = params['responseMessage'];
      }
    });
  }


  getAllAgents() {
    this.paymentService.getAllAgents().subscribe(res => {
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
    this.sharedAgentService.setAgent(agent);
    this.sharedAgentServiceService.setServiceAgent(service);
    this.router.navigate(['/client/paiement']);
  }

}
