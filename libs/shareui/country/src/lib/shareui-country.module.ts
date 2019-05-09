import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryItemComponent } from './components/country-item/country-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [CountryListComponent, CountryItemComponent],
  exports: [CountryListComponent, CountryItemComponent]
})
export class ShareuiCountryModule {}
