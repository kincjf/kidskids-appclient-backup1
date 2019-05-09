import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CartProduct, Currency } from '@ecom9/models';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'xui-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() products: CartProduct[];
  @Input() currency: Currency;
  @Input() lockQuantity: boolean = false;
  @Input() lockRemove: boolean = false;

  @Output() clickItem = new EventEmitter<CartProduct>();
  @Output() delete = new EventEmitter<CartProduct>();
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  @ViewChild('slidingList') slidingList: IonList;

  constructor() { }

  ngOnInit() { }

  async onDelete($event) {
    await this.slidingList.closeSlidingItems();
    setTimeout(() => {
      this.delete.emit($event);
    }, 150);
  }

  async onIncrement(product: CartProduct) {
    await this.slidingList.closeSlidingItems();
    setTimeout(() => {
      this.increment.next(product);
    }, 150);
  }

  async onDecrement(product: CartProduct) {
    await this.slidingList.closeSlidingItems();
    setTimeout(() => {
      this.decrement.next(product);
    }, 150);
  }

  goItem(product: CartProduct) {
    this.clickItem.emit(product);
  }
}
