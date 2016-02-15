import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

var html = 
`
<div class="text-center">
  <header class="mt-50 mb-50">
    <div class="muse"><span class="whitestripes-lg">MUSE</span></div>
    <div class="h2">Are you a true Muser?</div>
  </header>
  <div class="row m-0">
    <div class="col-xs-12 col-sm-6 mb-20 mt-20">
      <div class="col-xs-8 col-xs-offset-2 whitestripes">
        <a class="h4 mb-10 mt-10" [routerLink]="['Register']" >Créer un compte</a>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 mb-20 mt-20">
      <div class="col-xs-8 col-xs-offset-2 whitestripes">
        <a class="h4 mb-10 mt-10" [routerLink]="['SignIn']">Connexion</a>
      </div>
    </div>
  </div>
</div>
`;

@Component({
  selector: 'home',
  template: html,
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}

