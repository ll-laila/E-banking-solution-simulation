import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agent } from "../../models/agent";
import { ServiceAgent } from "../../models/serviceAgent";

@Component({
  selector: 'app-maps',
  templateUrl: './mapsClient.component.html',
  styleUrls: ['./mapsClient.component.scss']
})
export class MapsClientComponent implements OnInit {

  public agent: Agent;
  public service: ServiceAgent;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.agent = {
        id: params['agentId'],
        firstName: params['agentFirstName'],
        lastName: params['agentLastName'],
        email: '',
        phoneNumber: '',
        address: '',
        image: params['agentImage'],
        services:[],
      };

      this.service = {
        id: params['serviceId'],
        name: params['serviceName'],
        type: params['serviceType']
      };
    });
  }
}
