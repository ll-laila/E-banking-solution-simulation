import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


import {IClient} from '../../../models/Client';
import {Router} from '@angular/router';
import {ClientService} from '../../../service/client.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardAgent.component.html',
  styleUrls: ['./dashboardAgent.component.scss']
})
export class DashboardAgentComponent implements OnInit {
  constructor(private router: Router, private clientService: ClientService) { }

  clients: IClient[] = [];
  agents: IClient[] = [];

  ngOnInit(): void {
    this.getAllClients();
  }
  addClient() {
    this.router.navigate(['/add-client']);
  }





  getAllClients(): void {
    this.clientService.getAllClients().subscribe(
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
        this.getAllClients();
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
