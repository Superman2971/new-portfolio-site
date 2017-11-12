import { Component, Input } from '@angular/core';
import { AppBroadcaster } from '../services/app-broadcaster.service';

@Component({
  selector: 'app-object-tier',
  templateUrl: './app-object-tier.component.html',
  styleUrls: ['./app-object-tier.component.scss']
})
export class AppObjectTierComponent {
  @Input() tier;

  constructor(private AppBroadcaster:AppBroadcaster) {}

  selectProperty(key, value) {
    let sendObject = {
      key: key,
      value: value
    };
    this.AppBroadcaster.fire('propertySelected', sendObject);
  }
}
