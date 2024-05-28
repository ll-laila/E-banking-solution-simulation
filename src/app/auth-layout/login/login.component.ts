import { Component, OnInit, OnDestroy } from '@angular/core';
import {DatePipe} from "@angular/common";
import {RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    DatePipe,
    RouterLinkWithHref
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  constructor() {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
