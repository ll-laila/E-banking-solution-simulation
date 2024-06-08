import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebarClient/sidebarClient.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FeedDetails} from "../../models/feedDetails";
import {ClientService} from "../../services/client.service";
import {PaymentService} from "../../services/payment.service";
import {Client} from "../../models/client";

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbarClient.component.html',
  styleUrls: ['./navbarClient.component.scss']
})
export class NavbarClientComponent implements OnInit {

  public phoneNumber?: string;
  public paymentForm: FormGroup;
  public focus;
  public listTitles: any[];
  public location: Location;

  public feedDetails: FeedDetails = {
    idClient: -1,
    amount: 0
  };

  public client: Client = {
        id: 1,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        paymentAccount: null
  };


  constructor(location: Location, private element: ElementRef, private router: Router,
              private fb: FormBuilder,private clientService: ClientService,
              private paymentService: PaymentService) {
    this.location = location;

    this.paymentForm = this.fb.group({
      montant: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.getClientByPhone(this.phoneNumber);
  }


  getClientByPhone(phoneNum: string) {
    this.clientService.getClientByPhoneNumber(phoneNum).subscribe(res => {
      console.log(res);
      this.client = res;
      this.getClientPaymentAccount();
    }, error => {
      console.log(error);
    });
  }

  getClientPaymentAccount() {
    this.clientService.getPaymentAccountByClientId(this.client.id).subscribe(res => {
      console.log(res);
      this.client.paymentAccount = res;
    }, error => {
      console.log(error);
    });
  }

    submitForm() {
      if (this.paymentForm.valid) {
        const montant = this.paymentForm.get('montant')?.value;
        this.feedDetails.idClient = this.client.id;
          this.feedDetails.amount = montant;
        console.log(this.feedDetails);

       this.paymentService.feedPaymentAccount(this.feedDetails).subscribe(response => {
      }, error => {
        console.error('alimentation echoué:', error);
      });

      } else {
        console.log('form non valider');
    }
  }

























  logout() {
    this.router.navigate(['/login']);
  }

  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        titlee = this.listTitles[item].title;
      }
    }

    if (titlee.toLowerCase().includes('paiement') || titlee.toLowerCase().includes('validate') || titlee.toLowerCase().includes('confirm') ) {
      titlee = 'paiement';
    }

    return titlee;
  }




}
