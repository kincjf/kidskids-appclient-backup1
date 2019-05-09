import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductReview } from '@ecom9/models';


@Component({
  selector: 'xui-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() reviews: ProductReview[];
  @Input() loading: boolean;

  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get getStars(): number[] {
    let total = 0;
    this.reviews.forEach((review: ProductReview) => {
      total += review.rating;
    });

    const rate = Math.floor(total / this.reviews.length);

    const stars: number[] = new Array<number>();
    for (let i = 0; i < 5; i++) {
      if (i <= (rate - 1)) {
        stars[i] = 1;
      } else {
        stars[i] = 0;
      }
    }

    return stars;
  }

  goReview() {
    this.select.emit();
  }
}
