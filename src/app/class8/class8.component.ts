import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class8',
  template: `
    <input type="text" [(ngModel)]="place"  placeholde="Enter text"/>
    <h3>{{place}}</h3>
  `,
  styles: [
  ]
})
export class Class8Component implements OnInit {

  public place = '';
  constructor() { }

  ngOnInit(): void {
  }

}
