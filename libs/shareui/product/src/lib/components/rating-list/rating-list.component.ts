import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductReview, Customer, Product } from '@ecom9/models';

@Component({
  selector: 'xui-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss']
})
export class RatingListComponent implements OnInit {
  @Input() reviews: ProductReview[];
  @Input() customer: Customer;
  @Input() product: Product;

  @Output() review = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  get isReviewed(): boolean {
    if (this.customer) {
      return this.reviews.find(review => review.reviewer_email === this.customer.email) ? false : true;
    } else {
      return false;
    }
  }

  onReview(rating) {
    if (rating) {
      this.review.emit({
        product_id: this.product.id,
        review: rating.comment,
        reviewer: rating.fullname,
        reviewer_email: rating.email,
        rating: rating.rating
      });
    }
  }
}
