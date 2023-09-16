import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class3',
  template: `
    <input type="text" [value]="value" bind-placeholder="text" [id]="className" />`,
  styles: [`
  #txt-input {
    border: 1px solid red;
    color: blue;
    text-aling: center;
  }
  `]
})
export class Class3Component implements OnInit {

  public value = "Hello";
  public text = "Enter the value";
  public className = '';
  constructor() { }

  ngOnInit(): void {
    this.className = 'txt-input';
  }

}
