import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


import {IClient} from '../../../models/Client';
import {Router} from '@angular/router';
import {ClientService} from "../../../service/client.service";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardAgent.component.html',
  styleUrls: ['./dashboardAgent.component.scss']
})
export class DashboardAgentComponent implements OnInit {

  clients: IClient[] = [];
  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }
  addClient() {
    this.router.navigate(['/add-client']);
  }
  agents: IClient[] = [];




  getAllClients(): void {
    this.clientService.getAllClients().subscribe(
      (agents: IClient[]) => {
        this.agents = agents;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des agents :', error);
      }
    );
  }

  deleteClient(id: number) {
    console.log(id);
    this.clientService.deleteClient(id).subscribe(
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
