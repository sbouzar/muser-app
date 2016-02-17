import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Muser} from '../models/muser';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RegisterService} from './RegisterService';

var html =
`
<div [hidden]="submitted">
  <form *ngIf="active" (ngSubmit)="onSubmit()" #muserForm="ngForm">
    <div class="container">
      <p class="h3">REGISTER YOUR DETAILS</p>
      <div class="form-group">
        <div class="block">
          <label>Username *</label>
          <input type="text" class="form-control input-custom" [(ngModel)]="model.username" ngControl="username" #username="ngForm" maxlength="150" required />
          <div [hidden]="username.valid || username.pristine" class="alert alert-danger">
            Username is required
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="block">
          <label>Email Address *</label>
          <input type="email" class="form-control input-custom" [(ngModel)]="model.email" ngControl="email" #email="ngForm" maxlength="150" required />
          <div [hidden]="email.valid || email.pristine" class="alert alert-danger">
            Email is required
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="block">
          <label>Password *</label>
          <input type="password" class="form-control input-custom" [(ngModel)]="model.password" ngControl="password" #password="ngForm" maxlength="50" required data-minlength="4" />
          <div [hidden]="password.valid || password.pristine" class="alert alert-danger">
            Password is required
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="block">
          <label>Confirm Password *</label>
          <input type="password" class="form-control input-custom" [(ngModel)]="model.confirm" ngControl="confirm" #confirm="ngForm" maxlength="50" data-match="#password" required data-minlength="4" />
          <div [hidden]="confirm.valid || confirm.pristine" class="alert alert-danger">
            Password confirmation is required
          </div>
        </div>
      </div>
      <div class="form-group">
        <label><input type="checkbox" required> By clicking Register, I agree I have read and accept <a href="#cgu-modal">Muser's User Agreement</a></label>
      </div>
      <div class="form-group" role="group">
        <div class="btn-group m-10" role="group">
          <a [routerLink]="['Home']" class="btn btn-custom" role="button"><span class="glyphicon glyphicon-chevron-left pull-left" aria-hidden="true"></span>Go Back</a>
        </div>
        <div class="btn-group m-10" role="group">
          <button type="button" class="btn btn-custom" (click)="newMuser()">Reset</button>
        </div>
        <div class="btn-group m-10" role="group">
          <button (click)=addMuser(model) class="btn btn-custom" [disabled]="!muserForm.form.valid">Register<span class="glyphicon glyphicon-chevron-right pull-right" aria-hidden="true"></span></button>
        </div>
      </div>
    </div>
  </form>
</div>
<div [hidden]="!submitted">
  <h2>You submitted the following:</h2>
  <div class="row">
    <div class="col-xs-3">Username</div>
    <div class="col-xs-9  pull-left">{{ model.username }}</div>
  </div>
  <div class="row">
    <div class="col-xs-3">Email</div>
    <div class="col-xs-9  pull-left">{{ model.email }}</div>
  </div>
  <br>
  <button class="btn btn-default" (click)="submitted=false">Edit</button>
</div>
`;

@Component({
  selector: 'register',
  template: html,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    RegisterService,
  ]
})

export class RegisterComponent implements OnInit{

  constructor(private _registerService: RegisterService) {}

  errorMessage: string;

  model = new Muser(1, '', '', '', '');

  addMuser(muser: Muser) {
    if (!muser) { return; }
    this._registerService.addMuser(muser)
        .subscribe(
          error => this.errorMessage = <any>error);
  }


  submitted = false;
  //onSubmit() { this.submitted = true }
  onSubmit() { this.addMuser(this.model) }

  active = true;

  newMuser() {
    this.model = new Muser(42, '', '','','');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  ngOnInit() { }

// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}