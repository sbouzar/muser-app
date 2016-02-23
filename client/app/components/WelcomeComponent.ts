import 'rxjs/Rx'
import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
  selector: 'welcome',
  templateUrl: 'app/components/views/WelcomeComponent.html',
  directives: [ROUTER_DIRECTIVES]
})

export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}

