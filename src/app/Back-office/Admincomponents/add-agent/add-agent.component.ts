import { Component, OnInit } from '@angular/core';
import {IAgent} from '../../../models/Agent';
import {AgentService} from '../../../service/agent.service';
import {Router} from '@angular/router';
import {catchError, throwError} from 'rxjs';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-add-agent',
  templateUrl: 'add-agent.component.html',
  styleUrls: ['add-agent.component.scss'],
  providers: [DatePipe]
})
export class AddAgentComponent implements OnInit {
  public agent: IAgent = {} as IAgent;

  constructor(private agentService: AgentService, private router: Router, private datePipe: DatePipe) {}

  ngOnInit(): void {
  }


  createSubmit(){
    this.agentService.createAgent(this.agent).subscribe((data: any)=>{
      console.log(data)
      console.log(this.agent);
      console.log('Agent créé avec succès');
      this.router.navigate(['/admin']).then();

    }, (error) => {
      console.log(this.agent);
      console.error('Erreur lors de la création de l\'agent :', error);
      return throwError(error);

    });

  }

}
