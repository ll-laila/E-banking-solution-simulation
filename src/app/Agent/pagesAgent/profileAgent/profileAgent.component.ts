import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AgentService} from "../../../service/agent.service";
import {IAgent} from "../../../models/Agent";
import {SharedAgentService} from "../../../service/shared-agent.service";
import {SharedInfosService} from "../../../service/shared-infos.service";

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

  phoneNumber: string;
  agent: IAgent ;

  constructor(private sharedAgentService: SharedAgentService ,  private sharedInfosService: SharedInfosService,
              private agentService: AgentService) { }


  ngOnInit(): void {
    this.getAgentByPhone( this.sharedInfosService.getPhoneNumber());
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



}
