import { Component, OnInit } from '@angular/core';
import {IAgent} from "../../../models/Agent";
import {ActivatedRoute, Router} from "@angular/router";
import {AgentService} from "../../../service/agent.service";

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.scss']
})
export class EditAgentComponent implements OnInit {

  public loading: boolean =false;
  public id: string | null = null;
  public agent:IAgent = {} as IAgent;

  constructor(private activatedRoute : ActivatedRoute, private agentService : AgentService, private router : Router){

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.id =param.get('id');
    });
    if(this.id){
      this.loading=true;
      this.agentService.getAgent(parseInt(this.id)).subscribe((data)=>{
        this.agent = data;
        this.loading = false;
      }, (error) => {
        console.log(error);
      })
    }
  }


  public update(){
    if(this.id){
      this.agentService.updateAgent(this.agent, parseInt(this.id)).subscribe((data)=>{
        this.router.navigate([`/admin`]).then();
      }, (error) => {
        this.router.navigate(["/edit-agent/:id"]).then();
      });
    }

  }

}
