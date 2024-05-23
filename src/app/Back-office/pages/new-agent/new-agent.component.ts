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

  ngOnInit(): void {
    this.getAllAgents();
  }

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

  addAgent() {
    this.router.navigate(['/add-agent']);
  }

  deleteAgent(id: number) {
    console.log(id);
    this.agentService.deleteAgent(id).subscribe(
      () => {
        console.log('Agent deleted successfully.');
        this.getAllAgents();
      },
      (error) => {
        console.error('An error occurred while deleting the agent:', error);
      }
    );
  }

  updateAgent(id: number) {
    this.router.navigate(['/edit-agent', id]);
  }

  viewAgentDetails(id: number) {
    this.router.navigate(['/details-agent', id]);
  }
}
