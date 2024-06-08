import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../../client/services/client.service";
import {Operation} from "../../../client/models/operation";

@Component({
  selector: 'app-trasaction-agent',
  templateUrl: './trasaction-agent.component.html',
  styleUrls: ['./trasaction-agent.component.scss']
})
export class TrasactionAgentComponent implements OnInit {

  public phoneNumber: string| undefined;
  public client : any = {operations: []};


  constructor(private clientService: ClientService) {

  }

  ngOnInit() {
    this.getClientByPhone(this.phoneNumber);
  }



  getClientByPhone(phoneNum: string) {
    this.clientService.getClientByPhoneNumber(phoneNum).subscribe(res => {
      console.log(res);
      this.client = res;
      this.getClientOperations(phoneNum);
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
