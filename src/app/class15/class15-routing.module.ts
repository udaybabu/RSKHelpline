import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Class15Component } from './class15.component';

const routes: Routes = [{ path: '', component: Class15Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Class15RoutingModule { }
