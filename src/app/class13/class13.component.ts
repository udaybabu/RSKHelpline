import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class13',
  template: `
   <h3>{{'Hello TEST' | uppercase}}</h3>
   <h3>{{'Hello TEST' | lowercase}}</h3>
   <h3>{{ 'Hello TEST' | titlecase}}</h3>
   <h3>{{ 'Hello TEST' | slice:2:5}}</h3>
   <h3>{{ person | json }}</h3>
   <h3>{{ 0.25 | percent }}</h3>
   <h3>{{ 10 | currency }}</h3>
   <h3>{{ 10 | currency:'INR' }}</h3>
   <h3>{{ 3.278 | number:'1.2-3' }}</h3>
   <h3>{{ 3.278 | number:'2.2-3' }}</h3>
   <h3>{{ 3.278 | number:'3.1-2' }}</h3>
   <h3>{{ date }}</h3>
   <h3>{{ date | date:'short'}}</h3>
   <h3>{{ date | date:'shortDate'}}</h3>
   <h3>{{ date | date:'shortTime'}}</h3>
   <h3>{{ date | date:'medium'}}</h3>
   <h3>{{ date | date:'mediumDate'}}</h3>
   <h3>{{ date | date:'mediumTime'}}</h3>
   <h3>{{ date | date:'long'}}</h3>
   <h3>{{ date | date:'longDate'}}</h3>
   <h3>{{ date | date:'longTime'}}</h3>
  `,
  styles: [
  ]
})
export class Class13Component implements OnInit {

  public name = "Hellow WORLD";
  public date = new Date();
  public person = {
    "name":"uday",
    "place":"piler"
  }
  constructor() { }

  ngOnInit(): void {
    const result: number = this.factorial(5);
    console.log(result);
  }
 factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

}
