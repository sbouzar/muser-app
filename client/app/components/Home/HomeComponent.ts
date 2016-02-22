import 'rxjs/Rx'
import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

var html =
    `
<div id="home" class="text-center">
  <header class="mt-50 pt-15">
    <div class="muse"><span class="whitestripes-lg">MUSE</span></div>
    <div class="h4">Welcome Muser !</div>
  </header>
  <!--<div class="row m-0">
    <div class="col-xs-12 col-sm-6">
      <a class="btn btn-default btn-lg btn-block btn-custom" [routerLink]="['Register']" >Register</a>
    </div>
    <div class="col-xs-12 col-sm-6">
      <a class="btn btn-default btn-lg btn-block btn-custom" [routerLink]="['SignIn']">Sign In</a>
    </div>
  </div>-->
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

