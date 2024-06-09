import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import {SharedClientService} from "../../services/shared-client.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './profileClient.component.html',
  styleUrls: ['./profileClient.component.scss']
})
export class ProfileClientComponent implements OnInit {

  public client: Client;

  constructor(private sharedClientService: SharedClientService) { }

  ngOnInit() {
    this.client = this.sharedClientService.getClient();
    if (this.client) {
      console.log('Client retrieved :', this.client);
    }
  }
  
}
