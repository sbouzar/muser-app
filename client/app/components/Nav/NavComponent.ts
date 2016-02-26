import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'muser-menu',
  templateUrl: 'app/components/views/NavComponent.html',
  directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES]
})

export class NavComponent implements OnInit {

	private disabled:boolean = false;
  private status:{isopen:boolean} = {isopen: false};
  private items:Array<string> = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];

	constructor() { }
	
	private toggled(open:boolean):void {
	  console.log('Dropdown is now: ', open);
  }

	private toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit() { }
}
