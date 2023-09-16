import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Class15RoutingModule } from './class15-routing.module';
import { Class15Component } from './class15.component';


@NgModule({
  declarations: [
    Class15Component
  ],
  imports: [
    CommonModule,
    Class15RoutingModule
  ]
})
export class Class15Module { }
