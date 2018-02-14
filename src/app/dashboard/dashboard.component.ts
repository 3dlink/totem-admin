import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TotemSocketService } from './../totem-socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  agents:any;
  msg:string;
  alerta=true;
  constructor(public sails:TotemSocketService, private ref:ChangeDetectorRef) {
    this.agents={
      'A':0,
      'B':0,
      'C':0
    };
  }
  ngOnInit() {
    this.sails.conectToTotem()
    .subscribe(data=>{
      console.log(data.verb);
      if(data.verb=="joined"){
        this.agents=data.agents
        this.agentsInit(data.agents)
      }else if(data.verb=="agent_logeed"){
        this.agents[data.type]++;
      }else if(data.verb=="agent_logout"){
        this.agents[data.type]--;
      }else if(data.verb=="alert"){
        this.shotAlert(data);
      }
      this.ref.detectChanges();
    })
  }
  agentsInit(agents){
    this.agents=agents;
  }
  shotAlert(data){
    if(this.alerta){
      //console.log(data)
      alert(data.msg);
    }else{
      this.alerta=true;
    }
  }
  getmsg(){
    this.sails.sendMsg();
  }
  sendMensaje(msg){
    this.alerta=false;
    this.sails.sendMensaje(msg);
  }

}
