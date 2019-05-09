import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from '@ecom9/nobackend';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
