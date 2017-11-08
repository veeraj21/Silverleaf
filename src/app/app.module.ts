import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {AngularFireModule} from 'angularfire2'
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';

import {LoginService} from './login/login.service';
import {ContactService} from './contact/contact.service';
import {TeamService} from './team/team.service';
import {ReviewsService} from './reviews/reviews.service';
import {EventService} from './events/event.service';

import {CONST_ROUTING} from './app.routes';
import {CONST_FIREBASE_CONFIG} from './app.firebase';
import { TruncateModule } from 'ng2-truncate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ AppComponent, LoginComponent,  TeamComponent, ContactComponent, ReviewsComponent, HomeComponent, ServicesComponent, EventsComponent ],
  imports: [BrowserModule,FormsModule,HttpModule,AppRoutingModule,AngularFireAuthModule,AngularFireDatabaseModule,
    CONST_ROUTING, CONST_FIREBASE_CONFIG,TruncateModule, NgbModule.forRoot()],
  providers: [LoginService, TeamService, ReviewsService,ContactService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
