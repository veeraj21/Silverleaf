import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {Event} from './event'

@Injectable()
export class EventService {
 events : FirebaseListObservable<Event[]>;
 event : FirebaseObjectObservable<Event>;
 private basePath: string = '/events';

  constructor(private afAuth:AngularFireAuth ,  private firedatabase : AngularFireDatabase) { }

  getEvents(query={}): FirebaseListObservable<Event[]> {
    this.events = this.firedatabase.list(this.basePath, {
      query: {orderByChild: 'createdAt'}
    });
    return this.events; //comments.reverse()
  }

  getEvent(id): FirebaseObjectObservable<Event> {
    return this.firedatabase.object(this.basePath+"/"+id);    
  }

  addEvents(event:Event){
    this.events.push(Event);
  }

  deleteEvent(key: string): void {
     this.events.remove(key)
       .catch(error => this.handleError(error))
  }
 
  private handleError(error) {
     console.log(error)
   }

}
