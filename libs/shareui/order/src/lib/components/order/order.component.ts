import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order, Currency, CartProduct } from '@ecom9/models';

@Component({
  selector: 'xui-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  @Input() products: CartProduct[];
  @Input() currency: Currency;

  @Output() select = new EventEmitter<CartProduct>();
  constructor() { }

  ngOnInit() { 
  }

  goProduct(product: CartProduct) {
    this.select.emit(product);
  }
}
