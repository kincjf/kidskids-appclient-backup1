import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '@ecom9/models';

@Component({
  selector: 'xui-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  @Input() countries: Country[];

  @Output() select = new EventEmitter<Country>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(country: Country) {
    this.select.emit(country);
  }
}
