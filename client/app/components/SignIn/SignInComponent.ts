import 'rxjs/Rx'
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Muser} from '../../models/muser';
import {Router} from '@angular/router'
import {SignInService} from './SignInService';

@Component({
  selector: 'signin',
  templateUrl: 'app/components/views/SignInComponent.html',
  providers: [
    SignInService
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

