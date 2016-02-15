import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Muser} from '../models/muser';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

var html =
`
<div [hidden]="submitted">
	<form *ngIf="active" (ngSubmit)="onSubmit()" #muserForm="ngForm">
		<div class="text-center">
			<p class="lead text-center">Start with registering</p>
			<div class="form-group">
		    <input type="email" class="form-control input-lg" [(ngModel)]="model.email" ngControl="email" #email="ngForm" id="email" name="email" placeholder="Email Address" value="" maxlength="150" required />
		  	<div [hidden]="email.valid || email.pristine" class="alert alert-danger">
		  		Email is required
		  	</div>
		  </div>
		  <div class="form-group">
		    <input type="password" class="form-control input-lg" [(ngModel)]="model.password" id="password" name="password" placeholder="Password" maxlength="50" required data-minlength="4" />
		  </div>
		  <div class="form-group">
		    <input type="password" class="form-control input-lg" [(ngModel)]="model.confirm" id="password-confirm" name="password-confirm" placeholder="Confirm Password" maxlength="50" data-match="#password" required data-minlength="4" />
		  </div>
		  <div class="form-group">
		  	<label for="age">Age</label>
		  	<select class="form-control input-lg" [(ngModel)]="model.age" required>
		  		<option *ngFor="#a of age" [value]="a">{{a}}</option>
		  	</select>
		  </div>
		  <div class="form-group text-center">
		    <label><input type="checkbox" required> By clicking Register, I agree I have read and accept <a href="#cgu-modal" data-toggle="modal">Muser's User Agreement</a></label>
		  </div>
		</div>
		<button type="button" class="btn btn-default" (click)="newMuser()">New Muser</button>
		<div class="btn-group btn-group-justified actionbar-fixed-bottom" role="group">
			<div class="btn-group" role="group">
		  	<a [routerLink]="['Home']" class="btn btn-default btn-lg" role="button"><span class="glyphicon glyphicon-chevron-left pull-left" aria-hidden="true"></span>Go Back</a>
			</div>
			<div class="btn-group" role="group">
		  	<button type="submit" class="btn btn-primary btn-lg" [disabled]="!muserForm.form.valid">Register<span class="glyphicon glyphicon-chevron-right pull-right" aria-hidden="true"></span></button>
			</div>
		</div>
		<div id="cgu-modal" class="modal fade main" role="dialog">
			<div class="modal-dialog" role="document">
		  	<div class="modal-content">
		    	<div class="modal-header">
		      	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		      	<h5 class="modal-title">Conditions Générales d’Utilisation</h5>
		    	</div>
		    	<div class="modal-body-cgu">
		      	<div class="container-fluid">
		        	<article>
		          	{% include 'cguContent.html'%}
		        	</article>
		      	</div>
		    	</div>
		      <div class="btn-group btn-group-justified" role="group">
		        <div class="btn-group" role="group">
		          <button type="button" class="btn btn-default btn-lg" data-dismiss="modal">
		            <span class="glyphicon  pull-left" aria-hidden="true"></span>Fermer
		          </button>
		        </div>
		      </div>
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
	selector: 'register-form',
	template: html,
	directives: [ROUTER_DIRECTIVES]
})

export class RegisterFormComponent {

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

// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}