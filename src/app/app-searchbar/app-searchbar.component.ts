import { Component, HostListener, ElementRef, Input } from '@angular/core';
import { AppBroadcaster } from '../services/app-broadcaster.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './app-searchbar.component.html',
  styleUrls: ['./app-searchbar.component.scss']
})
export class AppSearchbarComponent {
  @Input() navbar;
  objects = [{
    text: 'window',
    progress: 'in progress',
    link: '/window'
  }, {
    text: 'document',
    progress: 'coming soon'
  }, {
    text: 'navigation',
    progress: 'coming soon'
  }, {
    text: 'mouse event',
    progress: 'coming soon'
  }, {
    text: 'input event',
    progress: 'last updated n/ev/er'
  }];
  searchText: string;
  placeholder: string;
  showDropdown = false;

  constructor(
    public elem: ElementRef,
    private AppBroadcaster: AppBroadcaster
  ) {}

  @HostListener('document:click', ['$event'])
  clickEvent(event) {
    if (this.showDropdown && event.target &&
    this.elem.nativeElement !== event.target &&
    !this.elem.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
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
