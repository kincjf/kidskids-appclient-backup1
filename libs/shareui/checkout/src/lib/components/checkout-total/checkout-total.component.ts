import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Currency } from '@ecom9/models';

@Component({
  selector: 'xui-checkout-total',
  templateUrl: './checkout-total.component.html',
  styleUrls: ['./checkout-total.component.scss']
})
export class CheckoutTotalComponent implements OnInit {
  @Input() total: number;
  @Input() currency: Currency;

  @Output() order = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  placeOrder() {
    this.order.emit();
  }
}
