import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-agents',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.scss']
})
export class NewAgentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  filterTable($event: Event) {

  }

  addAgent() {
    this.router.navigate(['/add-agent']);
  }
}
