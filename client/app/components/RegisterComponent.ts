import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {RegisterFormComponent} from './RegisterFormComponent';

@Component({
    selector: 'register',
    template: '<register-form></register-form>',
    directives: [ROUTER_DIRECTIVES, RegisterFormComponent]
})

export class RegisterComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}

