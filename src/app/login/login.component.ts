import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TotemSocketService } from './../totem-socket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string='';
  socketID:string;
  constructor(public sails:TotemSocketService, private ref:ChangeDetectorRef, private routes:Router) {
   }
  ngOnInit() {
    this.sails.conectToTotem()
    .subscribe(data=>{
      console.log(data.verb);
      if(data.verb=="subscribed"){
        this.socketID=data.socketID
      }else if(data.verb=="totem_call"){
        
      }else if(data.verb=="totem_take"){

      }else if(data.verb=="totem_logout"){
      }
      this.ref.detectChanges();
    })
  }
  agentLogIn(){
    localStorage.setItem('email',this.email);
    localStorage.setItem('socketID',this.socketID);
    this.sails.userOnline({socketID:this.socketID,email:this.email});
    this.routes.navigateByUrl('/dashboard');
  }


}
