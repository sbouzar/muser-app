import 'rxjs/Rx'
import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {NavComponent} from './../Nav/NavComponent'

@Component({
  selector: 'home',
  templateUrl: 'app/components/views/HomeComponent.html',
  directives: [ROUTER_DIRECTIVES, NavComponent]
})

export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}

