import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Muser} from '../models/muser';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

var html =
`
<div [hidden]="submitted">
  <form *ngIf="active" (ngSubmit)="onSubmit()" #muserForm="ngForm">
    <div class="container">
      <p class="h3">REGISTER YOUR DETAILS</p>
      <div class="form-group">
        <div class="block">
          <label>Email Address *</label>
          <input type="email" class="form-control input-custom" [(ngModel)]="model.email" ngControl="email" #email="ngForm" id="email" name="email" placeholder="Email Address" value="" maxlength="150" required />
          <div [hidden]="email.valid || email.pristine" class="alert alert-danger">
            Email is required
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="block">
          <label>Password *</label>
          <input type="password" class="form-control input-custom" [(ngModel)]="model.password" id="password" name="password" placeholder="Password" maxlength="50" required data-minlength="4" />
        </div>
      </div>
      <div class="form-group">
        <div class="block">
          <label>Confirm Password *</label>
          <input type="password" class="form-control input-custom" [(ngModel)]="model.confirm" id="password-confirm" name="password-confirm" placeholder="Confirm Password" maxlength="50" data-match="#password" required data-minlength="4" />
        </div>
      </div>
      <div class="form-group">
        <div class="block">
          <label for="age">Age</label>
          <select class="form-control input-custom" required [(ngModel)]="model.age">
            <option *ngFor="#a of age" [value]="a">{{a}}</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label><input type="checkbox" required> By clicking Register, I agree I have read and accept <a href="#cgu-modal" data-toggle="modal">Muser's User Agreement</a></label>
      </div>
      <div class="form-group" role="group">
        <div class="btn-group m-10" role="group">
          <a [routerLink]="['Home']" class="btn btn-custom" role="button"><span class="glyphicon glyphicon-chevron-left pull-left" aria-hidden="true"></span>Go Back</a>
        </div>
        <div class="btn-group m-10" role="group">
          <button type="button" class="btn btn-custom" (click)="newMuser()">Reset</button>
        </div>
        <div class="btn-group m-10" role="group">
          <button type="submit" class="btn btn-custom" [disabled]="!muserForm.form.valid">Register<span class="glyphicon glyphicon-chevron-right pull-right" aria-hidden="true"></span></button>
        </div>
      </div>
    </div>
  </form>
</div>
<div [hidden]="!submitted">
  <h2>You submitted the following:</h2>
  <div class="row">
    <div class="col-xs-3">Email</div>
    <div class="col-xs-9  pull-left">{{ model.email }}</div>
  </div>
  <div class="row">
    <div class="col-xs-3">Age</div>
    <div class="col-xs-9 pull-left">{{ model.age }}</div>
  </div>
  <br>
  <button class="btn btn-default" (click)="submitted=false">Edit</button>
</div>
`;

@Component({
  selector: 'register',
  template: html,
  directives: [ROUTER_DIRECTIVES]
})

export class RegisterComponent implements OnInit{

  age = [15, 20, 25, 30];
  model = new Muser(1, 'test@test.fr', 'test', 'test', this.age[0]);

  submitted = false;
  onSubmit() { this.submitted = true }

  active = true;

  newMuser() {
    this.model = new Muser(42, '', '','', this.age[1]);
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  ngOnInit() { }

// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}