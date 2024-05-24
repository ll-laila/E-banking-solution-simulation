import { Component, OnInit } from '@angular/core';
import {IClient} from "../../../models/Client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../../service/client.service";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {


  public loading: boolean =false;
  public id: string | null = null;
  public client:IClient = {} as IClient;

  constructor(private activatedRoute : ActivatedRoute, private clientService : ClientService, private router : Router){

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.id =param.get('id');
    });
    if(this.id){
      this.loading=true;
      this.clientService.getClient(parseInt(this.id)).subscribe((data)=>{
        this.client = data;
        this.loading = false;
      }, (error) => {
        console.log(error);
      })
    }
  }


  public update(){
    if(this.id){
      this.clientService.updateClient(this.client, parseInt(this.id)).subscribe((data)=>{
        this.router.navigate([`/agent`]).then();
      }, (error) => {
        this.router.navigate(["/agent"]).then();
      });
    }

  }

}
