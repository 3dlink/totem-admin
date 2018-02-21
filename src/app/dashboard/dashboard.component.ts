import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TotemSocketService } from './../totem-socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clients:any;
  client:any={
    crup:'No informado',
    type:'Normal / Lenguaje de señas / Dialecto'
  };
  socketID:string;
  msg:string;
  alerta=true;
  constructor(public sails:TotemSocketService, private ref:ChangeDetectorRef) {
    this.clients=[];
  }
  ngOnInit() {
    this.sails.conectToTotem()
    .subscribe(data=>{
      console.log(data.verb);
      if(data.verb=="subscribed"){
        this.clients=data.totems
        console.log(this.clients);
        this.socketID=data.socketID
        //this.sails.updatesocket({socketID:data.socketID,email:localStorage.getItem('email')})
      }else if(data.verb=="totem_call"){
        this.clients.push(data.totem);
      }else if(data.verb=="totem_take"){
        for(let x in this.clients){
          if(this.clients[x].id==data.totem.id){
            this.clients.splice(x, 1);
          }
        }
      }else if(data.verb=="totem_logout"){
        console.log(data.totem);
        for(let x in this.clients){
          if(this.clients[x].id==data.totem.id){
            this.clients.splice(x, 1);
          }
        }
      }
      this.ref.detectChanges();
    })
  }
  conectToSystem(){
    this.sails.userOnline(this.socketID);
  }
  agentLogOut(){
    this.sails.agentLogOut(localStorage.getItem('email'));
  }
  empezar(){
    let client= this.clients[0];
    this.clients.splice(0,1);
    if(client.curp.length>0){
      this.client.crup=client.curp
    }
    if(client.type==1){
      this.client.type='Normal'
    }else if((client.type==2)){
      this.client.type='Lenguaje de señas'
    }else if(client.type==3){
      this.client.type='Dialecto'
    }
    //socketID
    this.sails.totemTake(client.socketID);
  }
 

}
