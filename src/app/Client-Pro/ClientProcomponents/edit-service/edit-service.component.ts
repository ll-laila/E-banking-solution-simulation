import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AgentservicesService} from '../../../service/agentservices.service';
import {IAgentServices} from '../../../models/AgentServices';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private agentservices: AgentservicesService, private router: Router) {

  }

  public loading = false;
  public id: string | null = null;
  public agentservice: IAgentServices = {} as IAgentServices;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
    });
    if (this.id) {
      this.loading = true;
      // tslint:disable-next-line:radix
      this.agentservices.getService(parseInt(this.id)).subscribe((data) => {
        this.agentservice = data;
        this.loading = false;
      }, (error) => {
        console.log(error);
      });
    }
  }

  public update() {
    if (this.id) {
      // tslint:disable-next-line:radix
      this.agentservices.updateService(this.agentservice, parseInt(this.id)).subscribe((data) => {
        this.router.navigate([`/agent`]).then();
      }, (error) => {
        this.router.navigate(['/edit-client/:id']).then();
      });
    }

  }


}
