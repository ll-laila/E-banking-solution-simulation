import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Agent } from "../../models/agent";
import { ServiceAgent } from "../../models/serviceAgent";
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrls: ['./payment.scss']
})
export class Payment implements OnInit {

  public agent: Agent;
  public service: ServiceAgent;
  public paymentForm: FormGroup;
  public firstNameDon: String;
  public lastNameDon: String;
  public donationAmount: number;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.paymentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      donationAmount: [0 , [Validators.required, Validators.min(1)]]
    });
  }

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
        services: [],
      };

      this.service = {
        id: params['serviceId'],
        name: params['serviceName'],
        type: params['serviceType']
      };
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value;
      this.firstNameDon = this.paymentForm.get('firstName')?.value
      this.lastNameDon = this.paymentForm.get('lastName')?.value
      this.donationAmount = this.paymentForm.get('donationAmount')?.value;

      this.router.navigate(['/client/validate'], { queryParams: { agentId: this.agent.id, agentFirstName: this.agent.firstName,
          agentLastName: this.agent.lastName, agentImage: this.agent.image, serviceId: this.service.id ,serviceName: this.service.name,serviceType: this.service.type,
          firstNameDon: this.firstNameDon,  lastNameDon: this.lastNameDon, amount: this.donationAmount
        } });
    }
  }



  onCancel() {
    this.paymentForm.reset();
  }
}
