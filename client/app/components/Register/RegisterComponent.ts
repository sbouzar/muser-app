import 'rxjs/Rx'
import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Muser} from '../../models/muser';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RegisterService} from './RegisterService';

@Component({
  selector: 'register',
  templateUrl: 'app/components/views/RegisterComponent.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    RegisterService,
  ]
})

export class RegisterComponent implements OnInit{

  constructor(
    private _router: Router,
    private _registerService: RegisterService) {}

  errorMessage: string;

  model = new Muser(1, '', '', '', '');

  addMuser(muser: Muser) {
    if (!muser) { return; }
    this._registerService.addMuser(muser)
      .subscribe(
        url => this._router.navigate(['Home']),
        error => this.errorMessage = <any>error);
  }

  submitted = false;
  //onSubmit() { this.submitted = true }
  onSubmit() { 
    this.addMuser(this.model);
  }

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