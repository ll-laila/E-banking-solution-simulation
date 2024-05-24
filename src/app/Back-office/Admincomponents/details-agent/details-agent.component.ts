import { Component, OnInit } from '@angular/core';
import {IAgent} from "../../../models/Agent";
import {ActivatedRoute} from "@angular/router";
import {AgentService} from "../../../service/agent.service";

@Component({
  selector: 'app-details-agent',
  templateUrl: './details-agent.component.html',
  styleUrls: ['./details-agent.component.scss']
})
export class DetailsAgentComponent implements OnInit {
  agent: IAgent;

  constructor(private route: ActivatedRoute, private agentService: AgentService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.agentService.getAgent(parseInt(id)).subscribe((agent) => {
      this.agent = agent;
    });
  }

}
