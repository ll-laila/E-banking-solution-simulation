import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './profileClientPro.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./profileClientPro.component.scss']
})
export class ProfileClientProComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
