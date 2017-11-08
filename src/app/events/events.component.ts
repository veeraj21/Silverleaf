import { Component, OnInit } from '@angular/core';

import {EventService} from './event.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {Event} from './event'
import {AngularFireModule} from 'angularfire2';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']  
})
export class EventsComponent implements OnInit {
  events : FirebaseListObservable<Event[]>;
  event :  Event = new Event();
  user : string;
  currentDate:Date;
  private isOpen:boolean = false;
  _adminUser : boolean= false;
  constructor(private _service: EventService,private afAuth:AngularFireAuth ,  private router:Router) {     
    this.currentDate = new Date();
    console.log(new Date()+ "called constructor" + (this.currentDate) );

    this.afAuth.authState.subscribe(
        auth => {
            if(auth){
              this.user = auth.email;
              if('veeraj21@gmail.com' == auth.email){
                this._adminUser = true;
              }else{
                this._adminUser = false;
              }
              console.log("User", auth.email);
            }
        });
  }

  ngOnInit() {
    this.getEvents();
  }

   getEvents(){
     this.events = this._service.getEvents();      
    }

   createEvent(){
    this.events.push(this.event);
    this.event = new Event();
  }

  deleteEvent(key: string){
    this._service.deleteEvent(key);
  }
    private handleError(error) {
     console.log(error)
   }

   toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }     

  

}
