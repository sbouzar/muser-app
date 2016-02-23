import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
  selector: 'muser-menu',
  templateUrl: 'app/components/views/NavComponent.html',
  directives: [ROUTER_DIRECTIVES]
})

export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}

