import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/client";

import {ClientService} from "../../services/client.service";
import { Operation } from '../../models/operation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardClient.component.html',
  styleUrls: ['./dashboardClient.component.scss']
})


export class DashboardClientComponent implements OnInit {

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
  

  getClientOperations(phoneNum: string) {
    this.clientService.getClientOperation(phoneNum).subscribe((res: Operation[]) => {
      console.log(res);
      if (Array.isArray(res)) {
        // Assumer que 'res' est un tableau des opérations et prendre les 5 dernières
        this.client.operations = res.slice(-5);
      } else {
        console.error('La réponse n\'est pas un tableau d\'opérations');
      }
      // this.getClientByPhone(phoneNumber);
    }, error => {
      console.log(error);
    });
  }





}
