import { Component, Renderer, OnInit } from '@angular/core';
import { AppBroadcaster } from '../services/app-broadcaster.service';
import { WindowRef } from '../services/app-window-ref.service';

@Component({
  selector: 'app-devtools',
  templateUrl: './app-devtools.component.html',
  styleUrls: ['./app-devtools.component.scss']
})
export class AppDevtoolsComponent implements OnInit {
  mousemoveListener;
  mouseupListener;
  filterType = 'All';
  types = ['All', 'Properties', 'Functions', 'Objects'];
  height: number;
  yStart = 0;
  notSetYet = true;
  top = 312;
  text = [''];
  textToUse = [
    'This will be the first line of information',
    'Then we will write  a second line',
    'final test for third'
  ];

  constructor(
    private winRef: WindowRef,
    private AppBroadcaster: AppBroadcaster,
    private renderer: Renderer
  ) {
    this.height = winRef.window.innerHeight - 368;
    this.registerSubscribe();
  }

  ngOnInit() {
    this.writeLine(0);
  }

  writeLine(index) {
    if (index < this.textToUse.length) {
      this.typeWriter(0, this.textToUse[index], 100, index);
    }
  }

  typeWriter(index, text, speed, line) {
    if (index < text.length) {
      this.text[line] += text.charAt(index);
      index++;
      setTimeout(() => {
        this.typeWriter(index, text, speed, line)
      }, speed);
    } else {
      line++;
      this.text[line] = '';
      this.writeLine(line);
    }
  }

  registerSubscribe() {
    this.AppBroadcaster.on('selectedObject').subscribe(objectLink => {
      console.log(objectLink);
    });
  }

  changeFilterType(newFilter) {
    this.filterType = newFilter;
  }

  changeHeightStart() {
    this.mousemoveListener = this.renderer.listenGlobal('body', 'mousemove', (event: MouseEvent) => {
      if (this.notSetYet) {
        this.yStart = event.clientY;
        this.notSetYet = false;
      }
      this.height = this.winRef.window.innerHeight - 468 - (event.clientY - this.yStart);
      this.top = 312 - (this.yStart - event.clientY);
      this.AppBroadcaster.fire('heightChange', this.top);
    });
    this.mouseupListener = this.renderer.listenGlobal('body', 'mouseup', () => {
      this.changeHeightStop();
    });
  }

  changeHeightStop() {
    if (this.mousemoveListener) {
      this.mousemoveListener();
    }
    if (this.mouseupListener) {
      this.mouseupListener()
    }
  }
}
