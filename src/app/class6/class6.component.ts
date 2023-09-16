import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class6',
  template: `
   <button type="button" (click)="displayMessage()">ClickMe</button>
   <h2>{{welcomeMessage}}</h2>
  `,
  styles: [
  ]
})
export class Class6Component implements OnInit {

  public welcomeMessage='';
  constructor() { }

  ngOnInit(): void {
  }

  displayMessage() {
    this.welcomeMessage = "Welcome";
  }

}
