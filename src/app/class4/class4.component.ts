import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class4',
  template: `
   <p [class]="name">Hello uday this is class binding </p>
   <p [class.txt-big]="true">Hi this is big text</p>
   <p [ngClass]="group">This is sample test</p>

  `,
  styles: [`
  .txt-name {
    color: green;
    font-size: 15px;
    text-aline: center;
  }
  .txt-place {
     font-size: 25px;
  }
  .txt-address {
    color: red;
  }
  .txt-age {
    border: 1px solid yellow;
  }
  .txt-big {
    font-size: 40px;
  }
  `]
})
export class Class4Component implements OnInit {

  public name = 'txt-name'
  public group = {};
  constructor() { }

  ngOnInit(): void {
    this.group = {"txt-place": true,"txt-address": true, "txt-age": false };
  }

}
