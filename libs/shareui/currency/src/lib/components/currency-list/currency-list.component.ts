import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Currency } from '@ecom9/models';

@Component({
  selector: 'xui-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  @Input() currencies: Currency[];
  @Output() select = new EventEmitter<Currency>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(currency: Currency) {
    this.select.emit(currency);
  }
}
