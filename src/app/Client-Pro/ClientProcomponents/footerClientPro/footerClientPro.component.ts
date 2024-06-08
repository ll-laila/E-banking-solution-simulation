import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-clientPro',
  templateUrl: './footerClientPro.component.html',
  styleUrls: ['./footerClientPro.component.scss']
})
export class FooterClientProComponent implements OnInit {
  test: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
