import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product, Currency } from '@ecom9/models';

@Component({
  selector: 'xui-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, AfterViewInit {
  @Input() product: Product;
  @Input() currency: Currency;
  @Input() imageSize: string = '300x300';
  @Output() select = new EventEmitter<Product>();

  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
  }

  goProduct() {
    this.select.emit(this.product);
  }
}
