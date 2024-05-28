import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  confirmForm: FormGroup;
  public agent_Id: string;
  public agent_FirstName: string;
  public agent_LastName: string;
  public agent_Image: string;
  public service_Id: string;
  public service_Name: string;
  public service_Type: string;
  public firstName_Don: string;
  public lastName_Don: string;
  public donation_Amount: number;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,  private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.agent_Id = params['agentId'];
      this.agent_FirstName = params['agentFirstName'];
      this.agent_LastName = params['agentLastName'];
      this.agent_Image = params['agentImage'];
      this.service_Id = params['serviceId'];
      this.service_Name = params['serviceName'];
      this.service_Type = params['serviceType'];
      this.firstName_Don = params['firstNameDon'];
      this.lastName_Don = params['lastNameDon'];
      this.donation_Amount = +params['amount'];
    });

  }

  confirm() {


  }

  annuler() {

  }
}
