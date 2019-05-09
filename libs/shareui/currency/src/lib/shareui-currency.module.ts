import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyItemComponent } from './components/currency-item/currency-item.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [CurrencyItemComponent, CurrencyListComponent],
  exports: [CurrencyItemComponent, CurrencyListComponent]
})
export class ShareuiCurrencyModule {}
