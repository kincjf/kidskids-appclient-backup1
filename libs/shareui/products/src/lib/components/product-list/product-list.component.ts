import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, Currency } from '@ecom9/models';

@Component({
  selector: 'xui-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Input() imageSize: string = '300x300';
  @Input() currency: Currency;
  @Input() loading: boolean;
  @Input() loadingMore: boolean;
  @Input() error: any;

  @Output() select = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(product: Product) {
    this.select.emit(product);
  }
}
