import { Component, OnInit, Input } from '@angular/core';
import { ProductReview } from '@ecom9/models';

@Component({
  selector: 'xui-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.scss']
})
export class RatingItemComponent implements OnInit {
  @Input() review: ProductReview;

  constructor() { }

  ngOnInit() {
  }

  get getStars(): number[] {
    const stars: number[] = new Array<number>();
    if (this.review) {
      for (let i = 0; i < 5; i++) {
        if (i <= (this.review.rating - 1)) {
          stars[i] = 1;
        } else {
          stars[i] = 0;
        }
      }
    }

    return stars;
  }

  get avatar(): string {
    return this.review.reviewer_avatar_urls[Object.keys(this.review.reviewer_avatar_urls)[0]];
  }
}
