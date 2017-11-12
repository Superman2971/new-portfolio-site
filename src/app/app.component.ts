import { Component } from '@angular/core';
import { AppBroadcaster } from './services/app-broadcaster.service';
import { WindowRef } from './services/app-window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  propertyDetails: any;
  showDetails: boolean;

  constructor(
    private AppBroadcaster: AppBroadcaster,
    private winRef: WindowRef
  ) {
    this.registerSubscribe();
    winRef.window.IanGoldfarb = function() {
      console.log('Oh I like you, please contact me one on one at goldfarb.ian@gmail.com. I look forward to saying hi :)');
    };
  }

  registerSubscribe() {
    // property selected
    this.AppBroadcaster.on('propertySelected').subscribe(propertyObject => {
      this.propertyDetails = propertyObject;
      this.showDetails = propertyObject ? true : false;
    });
    // object changed
    this.AppBroadcaster.on('selectedObject').subscribe(objectLink => {
      this.propertyDetails = false;
      this.showDetails = false;
    });
  }
}
