import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { Operation } from '../../models/operation';
@Component({
  selector: 'app-user-profile',
  templateUrl: './profileClient.component.html',
  styleUrls: ['./profileClient.component.scss']
})
export class ProfileClientComponent implements OnInit {
  public phoneNumber: String | undefined;
  public client : any = {operations: []};

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClientByPhone(this.phoneNumber);
  }

  getClientByPhone(phoneNum: String) {
    this.clientService.getClientByPhoneNumber(phoneNum).subscribe(res => {
      console.log(res);
      this.client = res;
      this.getClientPaymentAccount();
    }, error => {
      console.log(error);
    })
  }
  getClientPaymentAccount() {
    this.clientService.getPaymentAccountByClientId(this.client.id).subscribe(res => {
      console.log(res);
      this.client.paymentAccount = res;
    }, error => {
      console.log(error);
    })
  }

  getClientOperations(phoneNumber: string) {
    this.clientService.getClientOperation(phoneNumber).subscribe((res: Operation[]) => {
      console.log(res);
      if (Array.isArray(res)) {
        this.client.operations = res; // Affecter toutes les opérations
      } else {
        console.error('La réponse n\'est pas un tableau d\'opérations');
      }
    }, error => {
      console.log(error);
    });
  }
  

}
