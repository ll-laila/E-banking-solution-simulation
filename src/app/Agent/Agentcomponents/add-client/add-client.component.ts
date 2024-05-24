import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {catchError, throwError} from 'rxjs';
import {IClient} from '../../../models/Client';
import {ClientService} from '../../../service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  public client: IClient = {} as IClient;
  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
  }

  createSubmit() {
    this.clientService.createClient(this.client)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la création du client :', error);
          return throwError(error); // Renvoyer l'erreur pour la traiter en aval si nécessaire
        })
      )
      .subscribe((data: any) => {
        this.router.navigate(['/agent']);
        console.log(this.client);
        console.log(data);
        console.log('Client créé avec succès');
      });
  }

}
