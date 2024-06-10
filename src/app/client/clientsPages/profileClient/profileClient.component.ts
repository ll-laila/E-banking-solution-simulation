import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import {SharedClientService} from "../../services/shared-client.service";
import {ClientService} from "../../services/client.service";
import {SharedInfosService} from "../../../service/shared-infos.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './profileClient.component.html',
  styleUrls: ['./profileClient.component.scss']
})
export class ProfileClientComponent implements OnInit {

  public client: Client

  constructor(private sharedClientService: SharedClientService,
              private sharedInfosService: SharedInfosService,
              private clientService: ClientService) { }

  ngOnInit() {
    this.getClientByPhone( this.sharedInfosService.getPhoneNumber());
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

}
