import 'rxjs/Rx'
import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {NavComponent} from './../Nav/NavComponent'


var html =
`
<muser-menu></muser-menu>
<div id="home" class="text-center">
  <div class="mt-50 pt-15 pb-10">
    <div class="muse"><span class="whitestripes-lg">MUSE</span></div>
    <div class="h4">Welcome Muser !</div>
  </div>
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
    directives: [ROUTER_DIRECTIVES, NavComponent]
})

export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}

