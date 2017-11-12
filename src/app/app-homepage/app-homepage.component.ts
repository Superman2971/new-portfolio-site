import { Component, Input } from '@angular/core';
import { AppBroadcaster } from '../services/app-broadcaster.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './app-homepage.component.html',
  styleUrls: ['./app-homepage.component.scss']
})
export class AppHomepageComponent {
  propertyName:any;
  propertyDetails:any;
  height = 256;
  @Input() set details(details:any) {
    if (details) {
      this.propertyName = details.key
      this.propertyDetails = details.value;
    } else {
      this.propertyName = false;
      this.propertyDetails = false;
    }
  }

  constructor(private AppBroadcaster:AppBroadcaster) {
    this.registerSubscribe();
  }

  registerSubscribe() {
    this.AppBroadcaster.on('heightChange').subscribe((newheight:number) => {
      this.height = newheight - 56;
    });
  }
}
