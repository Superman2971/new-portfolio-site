import { Component, Input } from '@angular/core';
import { AppBroadcaster } from '../services/app-broadcaster.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent {
  @Input() details;
  showAbout = false;
  notInAbout = true;

  constructor(private AppBroadcaster:AppBroadcaster) {}

  closeAbout() {
    this.notInAbout = true;
    setTimeout( () => {
      if (this.notInAbout) {
        this.showAbout = false;
      }
    }, 300);
  }

  resetHomepage() {
    this.AppBroadcaster.fire('selectedObject', false);
  }
}
