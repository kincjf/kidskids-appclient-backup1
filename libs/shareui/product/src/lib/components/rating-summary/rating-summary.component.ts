import { Component, OnInit, Input } from '@angular/core';
import { ProductReview } from '@ecom9/models';

@Component({
  selector: 'xui-rating-summary',
  templateUrl: './rating-summary.component.html',
  styleUrls: ['./rating-summary.component.scss']
})
export class RatingSummaryComponent implements OnInit {
  @Input() reviews: ProductReview[];

  rates: { id: string, quantity: number }[];

  ngOnInit() {
    setTimeout(() => {
      if (this.reviews) {
        this.summary();
      }
    }, 2000);
  }

  ngOnChanges() {
    this.summary();
  }

  public summary() {
    const idsMap = this.reviews.reduce((acc, review) => {
      console.log(review);
      const currentQuantity: number = acc[`id_${review.rating}`] || 0;
      acc[`id_${review.rating}`] = currentQuantity + 1;
      return acc;
    }, {});

    const result = Object.keys(idsMap).map(key => ({
      id: key.split('_')[1],
      quantity: idsMap[key]
    }));

    const rates = new Array<{ id: string, quantity: number }>();
    for (let i = 0; i < 5; i++) {
      rates[i] = {
        id: `${i + 1}`,
        quantity: 0
      };
    }

    console.log(rates);

    this.rates = rates.map(item => ({
      ...item,
      ...result.find(rate => rate.id === item.id)
    })).sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10));
  }

  get Rate(): number {
    let rate: number;
    if (this.reviews) {
      let total = 0;
      this.reviews.forEach((review: ProductReview) => {
        total += review.rating;
      });

      rate = total / this.reviews.length;
    }
    return rate;
  }

  get TotalQuantity(): number {
    let total = 0;
    this.reviews.forEach(review => {
      total += 1;
    });

    return total;
  }

  getPercent(rate): string {
    console.log(`${(rate.quantity / this.TotalQuantity) * 100}%`);
    return `${(rate.quantity / this.TotalQuantity) * 100}%`;
  }
}
