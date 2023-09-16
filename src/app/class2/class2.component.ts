import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class2',
  template: `
    <p>
      Welcometo inline templates {{name}}
    </p>
    <p>{{"Welcome to:" + name}}</p>
    <p>{{name.length}}</p>
    <P>{{name.toUpperCase()}}
    <p>{{getFullname()}}</p>
    <p>{{getSiteUrl()}}</p>
  `,
  styles: [`
  p {
    color: green;
    font: 15px;
    text-aling: center;
  }
  `]
})
export class Class2Component implements OnInit {

  public name = 'udaykumar';
  constructor() { }

  ngOnInit(): void {
  }

  getFullname() {
   return "Hello :" +this.name;
  }

  getSiteUrl() {
    return window.location.href
  }


}
