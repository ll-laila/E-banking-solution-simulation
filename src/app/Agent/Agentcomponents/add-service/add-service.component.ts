import { Component, OnInit } from '@angular/core';
import {catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {IAgentServices} from '../../../models/AgentServices';
import {AgentservicesService} from '../../../service/agentservices.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  public service: IAgentServices = {} as IAgentServices;
  private agentId: number;
  constructor(private agentServices: AgentservicesService, private router: Router) {}

  ngOnInit(): void {
  }
  createService() {
    this.agentServices.createService(this.service, this.agentId)
        .pipe(
            catchError(error => {
              console.error('Erreur lors de la création du service:', error);
              return throwError(error); // Renvoyer l'erreur pour la traiter en aval si nécessaire
            })
        )
        .subscribe((data: any) => {
          console.log(this.service);
          console.log(data);
          console.log('service créé avec succès');
        });
  }

}
