import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct, Currency } from '@ecom9/models';

@Component({
  selector: 'xui-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() product: CartProduct;
  @Input() currency: Currency;
  @Input() lockQuantity: boolean;
  @Input() lockRemove: boolean;

  @Output() clickItem = new EventEmitter<CartProduct>();
  @Output() delete = new EventEmitter<CartProduct>();
  @Output() increment = new EventEmitter<CartProduct>();
  @Output() decrement = new EventEmitter<CartProduct>();

  constructor() { }

  ngOnInit() { }

  getImage(image) {
    const fileExt = `.${image.split('.').pop()}`;
    const newImage = image.replace(fileExt, `-150x150${fileExt}`)
    return newImage;
  }

  remove() {
    this.delete.emit(this.product);
  }

  dec() {
    this.decrement.next(this.product);
  }

  inc() {
    this.increment.next(this.product);
  }

  goItem() {
    this.clickItem.emit(this.product);
  }
}
