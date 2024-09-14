import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


import {IClient} from '../../../models/Client';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../service/client.service';
import {SharedAgentService} from '../../../service/shared-agent.service';
import {IAgent} from '../../../models/Agent';
import {AgentService} from '../../../service/agent.service';
import {SharedInfosService} from "../../../service/shared-infos.service";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardAgent.component.html',
  styleUrls: ['./dashboardAgent.component.scss']
})
export class DashboardAgentComponent implements OnInit {
    constructor(private router: Router, private clientService: ClientService, private agentService: AgentService,
                private sharedAgentService: SharedAgentService, private route: ActivatedRoute,    private sharedInfosService: SharedInfosService
    ) {
    }

    clients: IClient[] = [];
    phoneNumber: string;
    agent: IAgent;

    ngOnInit(): void {
        this.getAgentByPhone(this.sharedInfosService.getPhoneNumber());
        this.getAllClients(this.agent.id);
        this.getAllClientByAgentId(this.agent.id);
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

        getAllClientByAgentId(idAgent: number): void {
            this.clientService.getAllClientsByAgentId(idAgent).subscribe(res => {
                this.clients = res;
            }, error => {
                console.log(error);
            });

        }


        deleteClient(id: number) {
            console.log(id);
            this.clientService.deleteClient(id).subscribe(
                () => {
                    console.log('Client deleted successfully.');
                    this.getAllClients(this.agent.id);
                    this.getAllClientByAgentId(this.agent.id);
                },
                (error) => {
                    console.error('An error occurred while deleting the client:', error);
                }
            );
            window.location.reload(); }

          }

