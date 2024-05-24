import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/client";

import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardClient.component.html',
  styleUrls: ['./dashboardClient.component.scss']
})
export class DashboardClientComponent implements OnInit {

  public phoneNumber: String | undefined;
  public client : Client;

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







}
