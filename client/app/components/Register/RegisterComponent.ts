import 'rxjs/Rx'
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Muser} from '../../models/muser';
import {Router} from '@angular/router'
import {RegisterService} from './RegisterService';

@Component({
  selector: 'register',
  templateUrl: 'app/components/views/RegisterComponent.html',
  providers: [
    RegisterService
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