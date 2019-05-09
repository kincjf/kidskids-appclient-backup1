import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '@ecom9/models';

@Component({
  selector: 'xui-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss']
})
export class AddressItemComponent implements OnInit {
  @Input() address: Address;
  @Output() select = new EventEmitter<Address>();
  @Output() remove = new EventEmitter<Address>();
  @Output() default = new EventEmitter<Address>();
  constructor() { }

  ngOnInit() {

  }

  selectAddress() {
    this.select.emit(this.address);
  }

  removeAddress() {
    this.remove.emit(this.address);
  }

  makeDefault() {
    this.default.emit(this.address);
  }
}
