import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '@ecom9/models';

@Component({
  selector: 'xui-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() address: Address;
  @Input() total: number;

  @Output() add = new EventEmitter();
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  newAddress() {
    this.add.emit();
  }

  changeAddress() {
    this.change.emit();
  }
}
