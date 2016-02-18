import 'rxjs/Rx'
import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HTTP_PROVIDERS}    from 'angular2/http';

import {HomeComponent} from './HomeComponent'
import {SignInComponent} from './SignInComponent'
import {RegisterComponent} from './RegisterComponent'
import {RegisterService} from './RegisterService';

@RouteConfig([
  {path: '/', component: HomeComponent, as: 'Home'},
  {path: '/signin', component: SignInComponent, as: 'SignIn'},
  {path: '/register', component: RegisterComponent, as: 'Register'}
])
@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, RegisterService]

})
export class AppComponent { 
  
  constructor(){
    console.log("We are up and running!");
  }
    
}