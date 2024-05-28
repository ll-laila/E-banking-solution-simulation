import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {


  public agentId: string;
  public agentFirstName: string;
  public agentLastName: string;
  public agentImage: string;
  public serviceId: string;
  public serviceName: string;
  public serviceType: string;
  public firstNameDon: string;
  public lastNameDon: string;
  public donationAmount: number;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,  private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.agentId = params['agentId'];
      this.agentFirstName = params['agentFirstName'];
      this.agentLastName = params['agentLastName'];
      this.agentImage = params['agentImage'];
      this.serviceId = params['serviceId'];
      this.serviceName = params['serviceName'];
      this.serviceType = params['serviceType'];
      this.firstNameDon = params['firstNameDon'];
      this.lastNameDon = params['lastNameDon'];
      this.donationAmount = +params['amount'];
    });

  }


  Validate() {

    this.router.navigate(['/client/confirm'], { queryParams: { agentId: this.agentId, agentFirstName: this.agentFirstName,
        agentLastName: this.agentLastName, agentImage: this.agentImage, serviceId: this.serviceId ,serviceName: this.serviceName,serviceType: this.serviceType,
        firstNameDon: this.firstNameDon,  lastNameDon: this.lastNameDon, amount: this.donationAmount
      } });

  }

}
