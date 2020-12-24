import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() customerevent=new EventEmitter();

  
  ob={
    name:'raj',
    address:'hyd',
    id:29,
    age:18,
  }
  constructor() { }

  ngOnInit() {
  }
  childcust(){
    this.customerevent.emit(this.ob);
   }
}
