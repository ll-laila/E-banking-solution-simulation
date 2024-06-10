import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AgentService} from "../../../service/agent.service";
import {ClientService} from "../../../service/client.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './profileAgent.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./profileAgent.component.scss']
})
export class ProfileAgentComponent implements OnInit {

  agent: any = {
    phone: '',
    email: '',
    firstName: '',
    lastName: '',
    address: ''
  };

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    const agentId = this.route.snapshot.paramMap.get('id');
    this.getAgentDetails(agentId);
  }


  getAgentDetails(id: string): void {
    this.clientService.getAgentById(id).subscribe(data => {
      this.agent = data;
    });
  }

}
