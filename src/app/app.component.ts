import { Component } from '@angular/core';
import { AppBroadcaster } from './services/app-broadcaster.service';
import { WindowRef } from './services/app-window-ref.service';
import { DataService } from './services/app-data.service';

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
    private winRef: WindowRef,
    private dataService: DataService
  ) {
    this.registerSubscribe();
    winRef.window.IanGoldfarb = function() {
      // tslint:disable-next-line
      console.log(`Oh I like you, please contact me one on one, I look forward to saying hi :)`);
      return 'goldfarb.ian@gmail.com -or- (541)621-0655';
    };
    // GET cms data from Google Spreadsheet
    this.dataService.getGoogleSheetData().subscribe((rawData) => {
      let formattedGoogleData = this.unflatten(this.formatData(rawData.feed.entry[0]));
      this.dataService.data = formattedGoogleData;
    });
  }

  registerSubscribe() {
    // property selected
    this.AppBroadcaster.on('propertySelected').subscribe(propertyObject => {
      this.propertyDetails = propertyObject;
      this.showDetails = propertyObject ? true : false;
    });
    // object changed
    this.AppBroadcaster.on('selectedObject').subscribe((objectLink: string) => {
      this.propertyDetails = {
        key: objectLink,
        value: this.dataService.data.ian[objectLink]
      };
      this.showDetails = (objectLink === 'ian') ? false : true;
    });
  }

  formatData(data) {
    const correctedKeys = {};
    Object.keys(data).forEach(key => {
      if (key.includes('gsx$')) {
        let newKey = key.replace('gsx$', '');
        correctedKeys[newKey] = data[key].$t;
      }
    });
    return correctedKeys;
  }

  unflatten (target, opts?) {
    opts = opts || {};
    let delimiter = opts.delimiter || '.';
    let overwrite = opts.overwrite || false;
    let result = {};
    let isbuffer = Buffer.isBuffer(target);
    if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
      return target;
    }
    // safely ensure that the key is an integer.
    function getkey (key) {
      let parsedKey = Number(key)
      return (isNaN(parsedKey) || key.indexOf('.') !== -1 || opts.object) ? key : parsedKey;
    }
    let sortedKeys = Object.keys(target).sort((keyA, keyB) => {
      return keyA.length - keyB.length;
    });
    sortedKeys.forEach((key) => {
      let split = key.split(delimiter);
      let key1 = getkey(split.shift());
      let key2 = getkey(split[0]);
      let recipient = result;
      while (key2 !== undefined) {
        let type = Object.prototype.toString.call(recipient[key1]);
        let isobject = (type === '[object Object]' ||  type === '[object Array]');
        // do not write over falsey, non-undefined values if overwrite is false
        if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
          return;
        }
        if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
          recipient[key1] = (typeof key2 === 'number' && !opts.object ? [] : {});
        }
        recipient = recipient[key1]
        if (split.length > 0) {
          key1 = getkey(split.shift());
          key2 = getkey(split[0]);
        }
      }
      // unflatten again for 'messy objects'
      recipient[key1] = this.unflatten(target[key], opts);
    });
    return result;
  }
}
