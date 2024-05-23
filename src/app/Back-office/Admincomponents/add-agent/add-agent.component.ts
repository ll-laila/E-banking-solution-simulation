import { Component, OnInit } from '@angular/core';
import {IAgent} from "../../../models/Agent";
import {AgentService} from "../../../service/agent.service";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-add-agent',
  templateUrl: 'add-agent.component.html',
  styleUrls: ['add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {
  public agent:IAgent = {} as IAgent;

  constructor(private agentService : AgentService, private router: Router) {}

  ngOnInit(): void {
  }

  createSubmit() {
    this.agentService.createAgent(this.agent)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la création de l\'agent :', error);
          return throwError(error); // Renvoyer l'erreur pour la traiter en aval si nécessaire
        })
      )
      .subscribe((data: any) => {
        console.log(this.agent)
        console.log(data);
        console.log('Agent créé avec succès');
      });
  }
}
