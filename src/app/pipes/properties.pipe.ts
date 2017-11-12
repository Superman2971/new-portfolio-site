import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'properties'
})

export class PropertiesPipe implements PipeTransform {
  transform(value): any {
    if (value) {
      return Object.keys(value);
    } else {
      return value;
    }
  }
}