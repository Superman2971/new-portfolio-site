import { Component, Input } from '@angular/core';
import { AppBroadcaster } from '../services/app-broadcaster.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './app-homepage.component.html',
  styleUrls: ['./app-homepage.component.scss']
})
export class AppHomepageComponent {
  height = 256;

  constructor(private AppBroadcaster: AppBroadcaster) {
    this.registerSubscribe();
  }

  registerSubscribe() {
    this.AppBroadcaster.on('heightChange').subscribe((newheight: number) => {
      this.height = newheight - 56;
    });
  }
}
