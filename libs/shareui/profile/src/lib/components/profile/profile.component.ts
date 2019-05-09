import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer, Address } from '@ecom9/models';

@Component({
  selector: 'xui-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() profile: Customer;
  @Output() edit = new EventEmitter();
  @Output() billingAddress = new EventEmitter<Address>();
  @Output() shippingAddress = new EventEmitter<Address>();
  constructor() { }

  ngOnInit() { }

  goEdit() {
    this.edit.emit();
  }

  changeBilling(address: Address) {
    this.billingAddress.emit(address);
  }

  changeShipping(address: Address) {
    this.shippingAddress.emit(address);
  }
}
