import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-class12',
  templateUrl: './class12.component.html',
  styleUrls: ['./class12.component.scss']
})
export class Class12Component implements OnInit {

  public messageToChild = "This is message from parent";
  public message = "";
  @ViewChild(ChildComponent,{static:true}) mychild:any;
  constructor() { }

  ngOnInit(): void {
    console.log('View child data is:',this.mychild.parentdata);
  }

  dataChild(data:any) {
   this.message = data;
  }

}
