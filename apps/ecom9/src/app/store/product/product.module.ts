import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';
import { CategoryEffects } from './effects/category.effects';
import { VariantEffects } from './effects/variant.effects';

import { ProductsService, CategoriesService } from '@ecom9/nobackend';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('product', fromProduct.reducers),
    EffectsModule.forFeature([ProductEffects, CategoryEffects, VariantEffects])
  ],
  declarations: [],
  providers: [
    ProductsService,
    CategoriesService,
  ]
})
export class ProductModule { }
