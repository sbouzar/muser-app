import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

var html =
    `
<form method="POST">
  <div>
    <div class="form-group">
      <input type="email" class="form-control input-lg" id="email" name="email" placeholder="Email Address" value="" required autofocus />
    </div>
    <div class="form-group">
      <input type="password" class="form-control input-lg" id="password" name="password" placeholder="Password" required data-minlength="4" />
    </div>
    <div class="text-center"><a href="/#">Forgot your password ?</a></div>
  </div>
  <div class="btn-group btn-group-justified actionbar-fixed-bottom" role="group" >
    <div class="btn-group" role="group">
      <a [routerLink]="['Home']" class="btn btn-default btn-lg" role="button"><span class="glyphicon glyphicon-chevron-left pull-left" aria-hidden="true"></span>Go Back</a>
    </div>
      <div class="btn-group" role="group">
        <button type="submit" class="btn btn-primary btn-lg">Sign In<span class="glyphicon glyphicon-chevron-right pull-right" aria-hidden="true"></span></button>
    </div>
  </div>
</form>
`;

@Component({
    selector: 'signin',
    template: html,
    directives: [ROUTER_DIRECTIVES]
})

export class SignInComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}

