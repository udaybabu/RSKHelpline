import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RSKHelpline';
  constructor(public router:Router){

  }
  sendData() {
    this.router.navigate(['class14','hello'])
  }
}

