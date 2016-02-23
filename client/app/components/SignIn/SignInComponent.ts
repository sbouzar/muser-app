import 'rxjs/Rx'
import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Muser} from '../../models/muser';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HTTP_PROVIDERS}    from 'angular2/http';
import {SignInService} from './SignInService';

@Component({
  selector: 'signin',
  templateUrl: 'app/components/views/SignInComponent.html',
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

