import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class10',
  template: `
    <div [ngSwitch]="choice">
     <div class="switch-styles">
      <div *ngSwitchCase="'one'">First</div>
      <div *ngSwitchCase="'two'">Second</div>
      <div *ngSwitchCase="'three'">Thired</div>
      <div *ngSwitchDefault>Case not matched</div>
     </div>
    </div>
  `,
  styles: [`
  .switch-styles {
     font-size: 20px;
     font-style: italic;
     color: green;
     border: 1px solid red;
  }
  `]
})
export class Class10Component implements OnInit {

  public choice = 'ten';
  constructor() { }

  ngOnInit(): void {
  }

}
