import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, Currency } from '@ecom9/models';

@Component({
  selector: 'xui-product-list-hoz',
  templateUrl: './product-list-hoz.component.html',
  styleUrls: ['./product-list-hoz.component.scss']
})
export class ProductListHozComponent implements OnInit {
  @Input() products: Product[];
  @Input() imageSize: string = '300x300';
  @Input() currency: Currency;
  @Input() loading: boolean;
  @Input() error: any;

  @Output() select = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() { }

  onSelect(product: Product) {
    this.select.emit(product);
  }
}
