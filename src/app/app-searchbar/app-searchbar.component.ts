import { Component, ElementRef, Renderer2, Input } from '@angular/core';
import { AppBroadcaster } from '../services/app-broadcaster.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './app-searchbar.component.html',
  styleUrls: ['./app-searchbar.component.scss']
})
export class AppSearchbarComponent {
  @Input() navbar;
  objects = [{
    text: 'Window',
    progress: 'in progress',
    link: 'window'
  }, {
    text: 'Resume',
    progress: 'last updated XX/XX/17',
    link: 'resume'
  }, {
    text: 'Projects',
    progress: 'some samples',
    link: 'projects'
  }, {
    text: 'Something Else',
    progress: 'not sure what'
  }];
  searchText: string;
  placeholder: string;
  showDropdown = false;

  constructor(
    public elem: ElementRef,
    private renderer: Renderer2,
    private AppBroadcaster: AppBroadcaster
  ) {
    renderer.listen('document', 'click', (event: any) => {
      if (this.showDropdown && event.target && this.elem.nativeElement !== event.target &&
      !this.elem.nativeElement.contains(event.target)) {
        this.showDropdown = false;
      }
    });
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
