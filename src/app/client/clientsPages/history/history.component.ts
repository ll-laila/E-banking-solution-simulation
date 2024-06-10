import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Operation } from '../../models/operation';
import {SharedClientService} from "../../services/shared-client.service";
import {Client} from "../../models/client";

@Component({
  selector: 'app-tables',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public client: Client;
  public operations: Operation[];

  constructor(private clientService: ClientService,private sharedClientService: SharedClientService) {}

  ngOnInit() {
    this.client = this.sharedClientService.getClient();
    this.getClientOperations(this.client.phoneNumber);
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
