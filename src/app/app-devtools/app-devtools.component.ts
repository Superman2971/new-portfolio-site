import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppBroadcaster } from '../services/app-broadcaster.service';
import { WindowRef } from '../services/app-window-ref.service';
import { DataService } from '../services/app-data.service';

@Component({
  selector: 'app-devtools',
  templateUrl: './app-devtools.component.html',
  styleUrls: ['./app-devtools.component.scss']
})
export class AppDevtoolsComponent implements OnInit {
  mousemoveListener: () => void;
  mouseupListener: () => void;
  activeWelcome = true;
  filterType = 'All';
  types = ['All', 'Properties', 'Functions', 'Objects'];
  browserObject;
  height: number;
  yStart = 0;
  notSetYet = true;
  top = 312;
  welcome = [''];
  welcomeText = [
    'Welcome to Ian Goldfarb.co',
    'You can access some details about me here:',
    'window.IanGoldfarb()'
  ];

  constructor(
    private winRef: WindowRef,
    private AppBroadcaster: AppBroadcaster,
    private elem: ElementRef,
    private renderer: Renderer2,
    private dataService: DataService
  ) {
    this.height = winRef.window.innerHeight - 368;
    this.registerSubscribe();
  }

  ngOnInit() {
    this.writeLine(0);
  }

  writeLine(index) {
    if (index < this.welcomeText.length) {
      this.typeWriter(0, this.welcomeText[index], 100, index);
    } else if (this.activeWelcome) {
      this.browserObject = this.dataService.data;
      console.log(this.browserObject);
    }
  }

  typeWriter(index, text, speed, line) {
    if (index < text.length) {
      this.welcome[line] += text.charAt(index);
      index++;
      setTimeout(() => {
        this.typeWriter(index, text, speed, line)
      }, speed);
    } else {
      line++;
      this.welcome[line] = '';
      this.writeLine(line);
    }
  }

  registerSubscribe() {
    this.AppBroadcaster.on('selectedObject').subscribe(objectLink => {
      this.activeWelcome = false;
      if (typeof(objectLink) === 'string' && objectLink === 'ian') {
        this.browserObject = this.dataService.data;
      } else if (typeof(objectLink) === 'string') {
        this.browserObject = this.dataService.data.ian[objectLink];
      } else {
        this.browserObject = undefined;
      }
    });
  }

  changeFilterType(newFilter) {
    this.filterType = newFilter;
  }

  changeHeightStart() {
    if (!this.mousemoveListener) {
      this.mousemoveListener = this.renderer.listen('body', 'mousemove', (event: MouseEvent) => {
        if (this.notSetYet) {
          this.yStart = event.clientY;
          this.notSetYet = false;
        }
        this.height = this.winRef.window.innerHeight - 368 - (event.clientY - this.yStart);
        this.top = 312 - (this.yStart - event.clientY);
        this.AppBroadcaster.fire('heightChange', this.top);
      });
    }
    if (!this.mouseupListener) {
      this.mouseupListener = this.renderer.listen('body', 'mouseup', () => {
        this.changeHeightStop();
      });
    }
  }

  changeHeightStop() {
    if (this.mousemoveListener) {
      this.mousemoveListener();
      this.mousemoveListener = undefined;
    }
    if (this.mouseupListener) {
      this.mouseupListener();
      this.mouseupListener = undefined;
    }
  }
}
