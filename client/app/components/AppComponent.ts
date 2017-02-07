/// <reference path="../../../typings/browser/definitions/moment/moment.d.ts" />

import 'rxjs/Rx'
import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {HTTP_PROVIDERS}    from '@angular/http';

import {BrowserModule} from '@angular/platform-browser'

import {WelcomeComponent} from './WelcomeComponent'
import {HomeComponent} from './Home/HomeComponent'
import {SignInComponent} from './SignIn/SignInComponent'
import {RegisterComponent} from './Register/RegisterComponent'
import {RegisterService} from './Register/RegisterService';

const appRoutes: Routes = [
  {path: '/', component: WelcomeComponent, outlet: 'Welcome'},
  {path: '/signin', component: SignInComponent, outlet: 'SignIn'},
  {path: '/register', component: RegisterComponent, outlet: 'Register'},
  {path: '/home', component: HomeComponent, outlet: 'Home'}
];
@Component({
  selector: 'my-app',
  template: `
    <div id="bg">
      <img src="app/images/drones.jpg" alt="Drones">
    </div>
    <div class="container">
      <main id="main">
        <router-outlet></router-outlet>
      </main>
    </div>
    `,
  //directives: [ROUTER_DIRECTIVES],
  providers: [RegisterService]

})

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes) 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppComponent { 
  
  constructor(){
    console.log("We are up and running!");
  }
    
}