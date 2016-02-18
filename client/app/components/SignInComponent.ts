import 'rxjs/Rx'
import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

var html =
    `
<form>
  <div class="container">
    <p class="h3">SIGN IN</p>
    <div class="form-group">
      <div class="block">
        <label>Email Address *</label>
        <div class="form-group">
          <input type="email" class="form-control input-custom" id="email" name="email" value="" required autofocus />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="block">
        <label>Password *</label>
        <input type="password" class="form-control input-custom" id="password" name="password" required data-minlength="4" />
      </div>
    </div>
    <div class="text-center"><a href="/#">Forgot your password ?</a></div>
    <div class="form-group">
      <div class="btn-group m-10" role="group">
        <a [routerLink]="['Home']" class="btn btn-custom" role="button"><span class="glyphicon glyphicon-chevron-left pull-left" aria-hidden="true"></span>Go Back</a>
      </div>
      <div class="btn-group m-10" role="group">
        <button type="button" class="btn btn-custom">Reset</button>
      </div>
      <div class="btn-group m-10" role="group">
        <button type="submit" class="btn btn-custom">Register<span class="glyphicon glyphicon-chevron-right pull-right" aria-hidden="true"></span></button>
      </div>
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

