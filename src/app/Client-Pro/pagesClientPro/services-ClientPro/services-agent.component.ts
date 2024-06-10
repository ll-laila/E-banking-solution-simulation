import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../../service/client.service';
import {IClient} from '../../../models/Client';
import {AgentservicesService} from '../../../service/agentservices.service';
import {IAgentServices} from '../../../models/AgentServices';

@Component({
  selector: 'app-services-agent',
  templateUrl: './services-ClientPro.component.html',
  styleUrls: ['./services-ClientPro.component.scss']
})
export class ServicesClientProComponent implements OnInit {

  constructor(private router: Router, private agentservices: AgentservicesService) { }

  services: IAgentServices[] = [];


  ngOnInit(): void {

  }
  addService() {
    this.router.navigate(['/add-service']);
  }




  getAllClients(): void {
    this.agentservices.getAllServices().subscribe(
        (services: IAgentServices[]) => {
          this.services = services;
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des agents :', error);
        }
    );
  }

  deleteClient(id: number) {
    console.log(id);
    this.agentservices.deleteService(id).subscribe(
        () => {
          console.log('Client deleted successfully.');
          this.getAllClients();
        },
        (error) => {
          console.error('An error occurred while deleting the agent:', error);
        }
    );
  }

  updateClient(id: number) {
    this.router.navigate(['/edit-agent', id]);
  }

  viewClientDetails(id: number) {
    this.router.navigate(['/details-agent', id]);
  }

}
