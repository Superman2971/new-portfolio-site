import { Injectable } from '@angular/core';

function getWindow (): any {
  return window;
}

@Injectable()
export class WindowRef {
  get window (): any {
    return getWindow();
  }
}
