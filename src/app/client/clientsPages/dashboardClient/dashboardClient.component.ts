import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/client";
import { ClientService } from "../../services/client.service";
import { Operation } from '../../models/operation';
import {ActivatedRoute} from "@angular/router";
import {SharedClientService} from "../../services/shared-client.service";
import {PaymentAccount} from "../../models/paymentAccount";
import {SharedInfosService} from "../../../service/shared-infos.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardClient.component.html',
  styleUrls: ['./dashboardClient.component.scss']
})

export class DashboardClientComponent implements OnInit {

  public phoneNumber: string| undefined;

  public client : Client;

  public paymentAccount: PaymentAccount;

  public operations: Operation[];


  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private sharedClientService: SharedClientService,
    private sharedInfosService: SharedInfosService

  ) { }

  ngOnInit() {
    this.getClientByPhone(this.sharedInfosService.getPhoneNumber());
    this.getClientOperations(this.sharedInfosService.getPhoneNumber());
  }

  getClientByPhone(phoneNum: string) {
    this.clientService.getClientByPhoneNumber(phoneNum).subscribe(res => {
      console.log(res);
      this.client = res;
      this.getClientPaymentAccount();
      this.sharedClientService.setClient(this.client);
    }, error => {
      console.log(error);
    });
  }

  public getClientPaymentAccount() {
    this.clientService.getPaymentAccountByClientId(this.client.id).subscribe(res => {
      console.log(res);
      this.client.paymentAccount = res;
    }, error => {
      console.log(error);
    });
  }

  public getClientOperations(phoneNum: string) {
    this.clientService.getClientOperation(phoneNum).subscribe(res => {
      console.log(res);
      this.operations = res;
    }, error => {
      console.log(error);
    });
  }
}
