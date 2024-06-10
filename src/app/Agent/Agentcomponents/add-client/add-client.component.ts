import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {catchError, throwError} from 'rxjs';
import {IClient} from '../../../models/Client';
import {ClientService} from '../../../service/client.service';
import {ToastrService} from 'ngx-toastr';
import {IClientRegistrationRequest} from '../../../models/ClientRegistrationRequest';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

 clientRegistrationRequest: IClientRegistrationRequest = {} as IClientRegistrationRequest;
  constructor(private clientService: ClientService, private router: Router , private toastr: ToastrService) {}

  ngOnInit(): void {
  }



  createSubmit() {
      this.clientService.createClient(this. clientRegistrationRequest)
          .subscribe((data: any) => {
                  this.toastr.success('Client created successfully', 'Success');
                  this.router.navigate([`/agent`]).then();
              },
              (error) => {
                  this.toastr.error('Error creating client', 'Error');
                setTimeout(() => {
                  this.router.navigate([`/agent`]).then();
                }, 300); // Délai de 3 secondes avant la redirection
              });
  }

}
