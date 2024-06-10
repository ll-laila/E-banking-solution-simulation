import { Component, OnInit } from '@angular/core';
import {Operation} from "../../../client/models/operation";
import {ClientService} from "../../../service/client.service";
import {SharedAgentService} from "../../../client/services/shared-agent.service";

@Component({
  selector: 'app-trasaction-agent',
  templateUrl: './trasaction-agent.component.html',
  styleUrls: ['./trasaction-agent.component.scss']
})
export class TrasactionAgentComponent implements OnInit {
  private serverUrl: string = `http://localhost:9090/api/v1/client`;

  public agentId: number| undefined;
  public operations: Operation[];

  constructor(private clientService: ClientService,) {}

  ngOnInit() {


    this.getAgentOperations(this.agentId);
  }

  public getAgentOperations(id: number) {
    this.clientService.getAgentOperation(id).subscribe(res => {
      console.log(res);
      this.operations = res;
    }, error => {
      console.log(error);
    });
  }


}
