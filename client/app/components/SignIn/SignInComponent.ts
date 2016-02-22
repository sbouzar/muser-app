import 'rxjs/Rx'
import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Muser} from '../../models/muser';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HTTP_PROVIDERS}    from 'angular2/http';
import {SignInService} from './SignInService';

var html =
    `
<form (ngSubmit)="onSubmit()" #muserForm="ngForm">
  <div class="container">
    <p class="h3">SIGN IN</p>
    <div class="form-group">
      <div class="block">
        <label>Email Address *</label>
        <input type="email" class="form-control input-custom" [(ngModel)]="model.email" ngControl="email" #email="ngForm" required autofocus />
        <div [hidden]="email.valid || email.pristine" class="alert alert-danger">
          Email is required
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="block">
        <label>Password *</label>
        <input type="password" class="form-control input-custom" [(ngModel)]="model.password" ngControl="password" #password="ngForm" required data-minlength="4" />
        <div [hidden]="password.valid || password.pristine" class="alert alert-danger">
          Password is required
        </div>
      </div>
    </div>
    <div class="text-center"><a href="#">Forgot your password ?</a></div>
    <div class="form-group text-center">
      <div class="btn-group m-10" role="group">
        <a [routerLink]="['Welcome']" class="btn btn-custom" role="button"><span class="glyphicon glyphicon-chevron-left pull-left" aria-hidden="true"></span>Go Back</a>
      </div>
      <div class="btn-group m-10" role="group">
        <button class="btn btn-custom" [disabled]="!muserForm.form.valid">Sign In<span class="glyphicon glyphicon-chevron-right pull-right" aria-hidden="true"></span></button>
      </div>
    </div>
  </div>
</form>
`;

@Component({
    selector: 'signin',
    template: html,
    directives: [ROUTER_DIRECTIVES],
    providers: [
      HTTP_PROVIDERS,
      SignInService,
    ]
})

export class SignInComponent implements OnInit {

  constructor(
  private _router: Router,
  private _signInService: SignInService) {}

  errorMessage: string;

  model = new Muser(1, '', '', '', '');

  logMuser(muser: Muser) {
    if (!muser) { return; }
    this._signInService.logMuser(muser)
      .subscribe(
        url => this._router.navigate(['Home']),
        error => this.errorMessage = <any>error);
  }

  submitted = false;
  //onSubmit() { this.submitted = true }
  onSubmit() { 
    this.logMuser(this.model);
  }

  active = true;

  ngOnInit() { }

// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}

