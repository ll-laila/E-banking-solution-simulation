import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Operation } from '../../models/operation';

@Component({
  selector: 'app-tables',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

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
