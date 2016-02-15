import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from './HomeComponent'
import {SignInComponent} from './SignInComponent'
import {RegisterComponent} from './RegisterComponent'
import {RegisterFormComponent} from './RegisterFormComponent';


@RouteConfig([
  {path: '/', component: HomeComponent, as: 'Home'},
  {path: '/signin', component: SignInComponent, as: 'SignIn'},
  {path: '/register', component: RegisterComponent, as: 'Register'}
])
@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
  
  constructor(){
    console.log("We are up and running!");
  }
    
}