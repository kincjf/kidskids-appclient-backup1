import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListHozComponent } from './components/category-list-hoz/category-list-hoz.component';
import { CategoryItemHozComponent } from './components/category-item-hoz/category-item-hoz.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [CategoryListHozComponent, CategoryItemHozComponent],
  exports: [CategoryListHozComponent, CategoryItemHozComponent]
})
export class ShareuiCategoriesHozModule {}
