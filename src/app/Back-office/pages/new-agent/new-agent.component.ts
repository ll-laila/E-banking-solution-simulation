import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AgentService} from "../../../service/agent.service";
import {IAgent} from "../../../models/Agent";

@Component({
  selector: 'app-agents',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.scss']
})
export class NewAgentComponent implements OnInit {
  agents: IAgent[] = [];
  constructor(private router: Router, private agentService: AgentService) { }

<<<<<<< HEAD

  constructor(private router: Router) { }
=======
  ngOnInit(): void {
    this.getAllAgents();
  }
>>>>>>> 5ae805c92ec36c743dde1bdb956ce4514b7c3ccf

  getAllAgents(): void {
    this.agentService.getAllAgents().subscribe(
      (agents: IAgent[]) => {
        this.agents = agents;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des agents :', error);
      }
    );
  }

  filterTable($event: Event) {

  }

  addAgent() {
    this.router.navigate(['/add-agent']);
  }

  deleteAgent() {

  }
}
