import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Payment } from '@ecom9/models';

@Component({
  selector: 'xui-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  @Input() payments: Payment[];
  @Output() changePayment = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  changePaymentMethod(event) {
    this.changePayment.emit(event.detail.value);
  }
}
