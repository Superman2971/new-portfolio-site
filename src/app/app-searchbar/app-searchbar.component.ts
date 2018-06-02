import { Component, ElementRef, Renderer2, Input } from '@angular/core';
import { AppBroadcaster } from '../services/app-broadcaster.service';
import { DataService } from '../services/app-data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './app-searchbar.component.html',
  styleUrls: ['./app-searchbar.component.scss']
})
export class AppSearchbarComponent {
  @Input() navbar;
  objects: Array<any>;
  searchText: string;
  placeholder: string;
  showDropdown = false;

  constructor(
    public elem: ElementRef,
    private renderer: Renderer2,
    private AppBroadcaster: AppBroadcaster,
    private dataService: DataService
  ) {
    this.objects = this.dataService.searchbar;
    renderer.listen('document', 'click', (event: any) => {
      if (this.showDropdown && event.target && this.elem.nativeElement !== event.target &&
      !this.elem.nativeElement.contains(event.target)) {
        this.showDropdown = false;
      }
    });
    // get searchbar text data from Google Sheet
    this.dataService.getSearchbarData().subscribe((rawData: any) => {
      this.objects = this.formatData(rawData.feed.entry);
    });
  }

  formatData(data) {
    const returnArray = data.map((object) => {
      let correctedKeys = {};
      Object.keys(object).forEach(key => {
        if (key.includes('gsx$')) {
          let newKey = key.replace('gsx$', '');
          correctedKeys[newKey] = object[key].$t;
        }
      });
      return correctedKeys;
    });
    return returnArray;
  }

  selectOption = option => {
    this.showDropdown = false;
    this.searchText = '';
    this.placeholder = option.text;
    this.sendInfo(option.link);
  }

  sendInfo(objectLink) {
    this.AppBroadcaster.fire('selectedObject', objectLink);
  }
}
