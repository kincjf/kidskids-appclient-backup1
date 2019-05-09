import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Currency } from '@ecom9/models';

@Component({
  selector: 'xui-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss']
})
export class CurrencyItemComponent implements OnInit {
  @Input() currency: Currency;
  @Output() select = new EventEmitter<Currency>();
  constructor() { }

  ngOnInit() {
  }

  selectCurrency() {
    this.select.emit(this.currency);
  }
}
