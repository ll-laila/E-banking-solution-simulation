import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-agent',
  templateUrl: './details-agent.component.html',
  styleUrls: ['./details-agent.component.scss']
})
export class DetailsAgentComponent implements OnInit {
  agent: any = {
    firstName: 'John',
    lastName: 'Doe',
    cin: '123456789',
    birthDate: '1990-01-01',
    address: '123 Main St, City, Country',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890',
    commercialRn: 'ABC123',
    patentNumber: 'XYZ789'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
