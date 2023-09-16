import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class7',
  template: `
   <input #msg type="text" placeholder="Enter Text"/>
   <button type="button" (click)="sendMessage(msg)">ClickMe</button>
  `,
  styles: [
  ]
})
export class Class7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(message:any) {
    window.alert(message.value);
    
  }

}
