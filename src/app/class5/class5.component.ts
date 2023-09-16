import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class5',
  template: `
   <p [style.color]="'red'">this is style binding</p>
   <p [style.color]="txtColor"> This is changed color</p>
   <p [style.font-size]="isSmall?'16px':'24px'"> This is changed font</p>
   <p [ngStyle]="group">This is ng style attribute </p>
  `,
  styles: [`
  .txt-font {
    font-size: 20px;
    color: green;
  }
  `]
})
export class Class5Component implements OnInit {

  public txtColor = 'red';
  public isSmall = false;
  public group = {};
  constructor() { }

  ngOnInit(): void {
    this.group = {
      'font-size': '20px',
      'color': 'green'
    }
  }

}
