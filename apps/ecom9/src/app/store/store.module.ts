import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@ecom9/env';
import { EffectsModule } from '@ngrx/effects';

import { AuthModule } from './auth';
import { ProductModule } from './product';
import { CartModule } from './cart';

@NgModule({
  imports: [
    CommonModule,
    NgRxStoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    AuthModule,
    ProductModule,
    CartModule
  ],
  declarations: []
})
export class StoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreModule
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: StoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already loaded. Import in root module only.');
    }
  }
}