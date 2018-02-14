import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import * as socketIOClient  from "socket.io-client/dist/socket.io.js"
//import * as sailsIOClient  from "sails.io.js/dist/sails.io.js"
@Injectable()
export class TotemSocketService {

  socketIOClient = require('socket.io-client');
  sailsIOClient = require('sails.io.js'); 
  io = this.sailsIOClient(this.socketIOClient);
  
  constructor() {
    this.io.sails.url = 'http://localhost:1337';
    this.io.socket.get('/user/subscribeToRoom', function(response) {
      //observer.next(response);
    })
    
  }
  public conectToTotem(): Observable<any> {    
    return Observable.create((observer)=>{   
      this.io.socket.on('totem', function(response){
        observer.next(response);
      })  
      this.io.socket.get('/user/subscribeToRoom', function(response) {
        observer.next(response);
      })
      
    })
    
  } 
  public sendMsg(){
    this.io.socket.get('/user/emitToRoom', function(data, response) {
      console.log(data);
      console.log(response);
    });
  }
  public sendMensaje(msg){
    this.io.socket.post('/user/sendMensaje', { msg: msg }, function(data, response) {
      console.log(data);
      console.log(response);
    });
  }

}
