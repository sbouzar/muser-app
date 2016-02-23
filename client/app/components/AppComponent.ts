import 'rxjs/Rx'
import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HTTP_PROVIDERS}    from 'angular2/http';

import {WelcomeComponent} from './WelcomeComponent'
import {HomeComponent} from './Home/HomeComponent'
import {SignInComponent} from './SignIn/SignInComponent'
import {RegisterComponent} from './Register/RegisterComponent'
import {RegisterService} from './Register/RegisterService';

@RouteConfig([
  {path: '/', component: WelcomeComponent, as: 'Welcome'},
  {path: '/signin', component: SignInComponent, as: 'SignIn'},
  {path: '/register', component: RegisterComponent, as: 'Register'},
  {path: '/home', component: HomeComponent, as: 'Home'}
])
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
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, RegisterService]

})
export class AppComponent { 
  
  constructor(){
    console.log("We are up and running!");
  }
    
}