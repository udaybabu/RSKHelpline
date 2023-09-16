import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class11',
  template: `
    <div *ngFor="let language of languages; let i=index, let e=even, let o=odd, let f=first, let l=last ">
    {{l}}--{{language}} </div>
  `,
  styles: [
  ]
})
export class Class11Component implements OnInit {

  public languages = ['angular', 'react','python','java','javascript']
  constructor() { }

  ngOnInit(): void {
  }

}
