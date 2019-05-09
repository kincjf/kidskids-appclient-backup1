import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CategoryItemComponent, CategoryListComponent],
  exports: [CategoryItemComponent, CategoryListComponent]
})
export class ShareuiCategoriesModule {}
