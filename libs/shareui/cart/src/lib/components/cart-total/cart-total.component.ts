import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xui-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {
  @Input() total: number;

  @Output() cart = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  goCart() {
    this.cart.emit();
  }
}
