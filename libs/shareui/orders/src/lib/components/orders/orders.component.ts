import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order, Currency } from '@ecom9/models';

@Component({
  selector: 'xui-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @Input() orders: Order[];
  @Input() loading: boolean;
  @Input() currency: Currency;
  @Output() select = new EventEmitter<Order>();
  constructor() { }

  ngOnInit() { }

  selectOrder(order: Order) {
    this.select.emit(order);
  }
}
