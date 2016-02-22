import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

var html =
`
<header>
<nav class="navbar navbar-custom">
  <div>
    <div class="navbar navbar-custom">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle burger-custom collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="muse-sm navbar-brand"><span class="whitestripes">MUSE</span></div>
      </div>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['Home']">Home<span class="fa fa-chevron-right pull-right visible-xs" aria-hidden="true"></span></a></li>
        <li><a [routerLink]="['Home']">Albums<span class="fa fa-chevron-right pull-right visible-xs" aria-hidden="true"></span></a></li>
        <li><a [routerLink]="['Home']">Songs<span class="fa fa-chevron-right pull-right visible-xs" aria-hidden="true"></span></a></li>
        <li><a [routerLink]="['Home']">Performances<span class="fa fa-chevron-right pull-right visible-xs" aria-hidden="true"></span></a></li>
        <li><a [routerLink]="['Home']">Log Out<span class="fa fa-chevron-right pull-right visible-xs" aria-hidden="true"></span></a></li>
      </ul>
    </div>
  </div>
</nav>
</header>

`;

@Component({
  selector: 'muser-menu',
  template: html,
  directives: [ROUTER_DIRECTIVES]
})

export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}

