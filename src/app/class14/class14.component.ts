import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class14',
  template: `
   <app-student-list></app-student-list>
   <app-student-details></app-student-details>
  `,
  styles: [
  ]
})
export class Class14Component implements OnInit {

  constructor(private activetaroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetaroute.paramMap.subscribe(data=> {
      console.log('dta',data)
    })
  }

}
