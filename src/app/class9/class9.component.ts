import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class9',
  template: `
    <div *ngIf="status; then trueBlock else falseBlock"></div>
    <ng-template #trueBlock>This is true block</ng-template>
    <ng-template #falseBlock>This is false block</ng-template>
  `,
  styles: [
  ]
})
export class Class9Component implements OnInit {

  public status = false;
  constructor() { }

  ngOnInit(): void {
  }

}
