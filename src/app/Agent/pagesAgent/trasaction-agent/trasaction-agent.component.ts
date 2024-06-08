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
  public operations: Operation[];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClientOperations(this.phoneNumber);
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
