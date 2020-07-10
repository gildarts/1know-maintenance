import { Component } from '@angular/core';
import { shakeAnimation, shakeOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    shakeAnimation(),
    shakeOnEnterAnimation()
  ]
})
export class AppComponent {
  title = 'oneknow-maintenance';
}
