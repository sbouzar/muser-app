import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {Collapse} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'muser-menu',
  templateUrl: 'app/components/views/NavComponent.html',
  directives: [ROUTER_DIRECTIVES, Collapse]
})

export class NavComponent implements OnInit {

	private isCollapsed : boolean

	constructor() { this.isCollapsed = false; }

  toggle() {
		this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() { }
}

