import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Agent } from "../../models/agent";
import { ServiceAgent } from "../../models/serviceAgent";
import { Router } from '@angular/router';
import {Client} from "../../models/client";
import {PaymentDetails} from "../../models/payment";
import {ClientService} from "../../services/client.service";
import {PaymentService} from "../../services/payment.service";


@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrls: ['./payment.scss']
})
export class Payment implements OnInit {

  currentStep = 1;
  public paymentForm1: FormGroup;

  public phoneNumber: string| undefined;
  public client: Client;
  public agent: Agent;
  public service: ServiceAgent;
  public donationAmount: number;
  public refOp: string;

 /* public client : Client = {
    id : 1,
    firstName: "laila",
    lastName: "timasli",
    email: "laila@gmail.com",
    phoneNumber: "06252624222",
    paymentAccount: null
  };
  */

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
              private router: Router,private clientService: ClientService, private paymentService: PaymentService) {
    this.paymentForm1 = this.fb.group({
      donationAmount: [0 , [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.agent = {
        id: +params['agentId'],
        firstName: params['agentFirstName'],
        lastName: params['agentLastName'],
        email: '',
        phoneNumber: '',
        image: params['agentImage'],
        services: [],
      };

      this.service = {
        id: +params['serviceId'],
        name: params['serviceName'],
        type: params['serviceType']
      };
    });

    this.getClientByPhone(this.phoneNumber);

  }

  getClientByPhone(phoneNum: string) {
    this.clientService.getClientByPhoneNumber(phoneNum).subscribe(res => {
      console.log(res);
      this.client = res;
    }, error => {
      console.log(error);
    });
  }


  validate1() {
    if (this.paymentForm1.valid) {
      this.donationAmount = this.paymentForm1.get('donationAmount')?.value;
      this.currentStep = 2;
    }
  }

  onCancel() {
    this.paymentForm1.reset();
  }


  validate2() {
    this.currentStep = 3;
    this.refOp = this.generateReferenceOperation();
  }


  validate3() {
    const paymentDetails: PaymentDetails = {
      refOperation: this.refOp,
      idClient: this.client.id,
      idCreditor: this.agent.id,
      idService: this.service.id,
      amount: this.donationAmount
    };

    console.log(paymentDetails);

     this.paymentService.PayService(paymentDetails).subscribe(
         response => {
           this.router.navigate(['/client/accueil'], { queryParams: { message: 'le paiement est bien réussite' } });
         },
         error => {
           this.router.navigate(['/client/accueil'], { queryParams: { message: 'Erreur lors du paiement'} });
         }
     );
  }

  annuler() {
    this.router.navigate(['/client/accueil']);
  }


  generateReferenceOperation(): string {
    let reference = '';
    for (let i = 0; i < 12; i++) {
      reference += Math.floor(Math.random() * 10).toString();
    }
    return reference;
  }

}

