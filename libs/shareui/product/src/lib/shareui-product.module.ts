import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { RatingFormComponent } from './components/rating-form/rating-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingsComponent } from './components/ratings/ratings.component';
import { RatingSummaryComponent } from './components/rating-summary/rating-summary.component';
import { RatingListComponent } from './components/rating-list/rating-list.component';
import { RatingItemComponent } from './components/rating-item/rating-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    ProductComponent, 
    RatingComponent, 
    RatingFormComponent, 
    RatingsComponent, 
    RatingSummaryComponent, 
    RatingListComponent, 
    RatingItemComponent
  ],
  exports: [
    ProductComponent, 
    RatingComponent, 
    RatingFormComponent, 
    RatingsComponent, 
    RatingSummaryComponent, 
    RatingListComponent, 
    RatingItemComponent
  ]
})
export class ShareuiProductModule {}
