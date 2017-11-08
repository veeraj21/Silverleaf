import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';

export const router: Routes = [  
{ path:'',redirectTo:'/home', pathMatch: 'full'},
{ path:'home',component:HomeComponent},
{ path:'contact',component:ContactComponent},
{ path:'team',component:TeamComponent},
{ path:'services',component:ServicesComponent},
{ path:'events',component:EventsComponent},    
{ path:'reviews',component:ReviewsComponent},
{ path:'login', component:LoginComponent},
{ path:'logout', component:LoginComponent}
]

export const CONST_ROUTING: ModuleWithProviders = RouterModule.forRoot(router);