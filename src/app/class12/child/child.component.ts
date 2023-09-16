import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>{{pData}}</p>
    <button type="button" (click)="sendData()">Click Me</button>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  // @Input() public parentData:any;
  @Input('parentData') public pData:any;
  @Output() public childData = new EventEmitter();
  public parentdata: string = "This is parent data";
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.childData.emit('This data is comming from child');
  }

}
