import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '@ecom9/models';

@Component({
  selector: 'xui-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent implements OnInit {
  @Input() country: Country;

  @Output() select = new EventEmitter<Country>();
  constructor() { }

  ngOnInit() {
  }

  selectCountry() {
    this.select.emit(this.country);
  }
}
