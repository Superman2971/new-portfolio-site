import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-property',
  templateUrl: './app-object-property.component.html',
  styleUrls: ['./app-object-property.component.scss']
})
export class AppObjectPropertyComponent implements OnInit {
  @Input() property;

  propertyType:any;

  ngOnInit() {
    this.propertyType = typeof(this.property);
  }
}
