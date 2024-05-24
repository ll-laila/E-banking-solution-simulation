import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './profileAgent.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./profileAgent.component.scss']
})
export class ProfileAgentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
