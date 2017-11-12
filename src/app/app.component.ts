import { Component } from '@angular/core';
import { AppBroadcaster } from './services/app-broadcaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  propertyDetails:any;
  showDetails:boolean;

  constructor(private AppBroadcaster:AppBroadcaster) {
    this.registerSubscribe();
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
