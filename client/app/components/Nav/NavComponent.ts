import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'muser-menu',
  templateUrl: 'app/components/views/NavComponent.html'
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
