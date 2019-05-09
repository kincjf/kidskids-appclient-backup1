import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Address } from '@ecom9/models';

@Component({
  selector: 'xui-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
  @Input() addresses: Address[];
  @Input() loading: boolean;
  @Output() select = new EventEmitter<Address>();
  @Output() remove = new EventEmitter<Address>();
  @Output() default = new EventEmitter<Address>();

  @ViewChild('slidingList') slidingList: IonList;
  constructor() { }

  ngOnInit() {
  }

  onSelect(address: Address) {
    this.select.emit(address);
  }

  onRemove(address: Address) {
    this.slidingList.closeSlidingItems();
    this.remove.emit(address);
  }
  onDefault(address: Address) {
    this.default.emit(address);
  }
}
