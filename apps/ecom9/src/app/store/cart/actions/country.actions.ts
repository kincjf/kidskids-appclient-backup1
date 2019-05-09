import { Action } from '@ngrx/store';
import { Country } from '@ecom9/models';

export enum CountriesActionTypes {
  LoadCountries = '[Shop] Load  Countries',
  LoadCountriesSuccess = '[Shop] Load  Countries Success',
  LoadCountriesError = '[Shop] Load  Countries Error',

  SelectCountry = '[Shop] Select Country'
}

export class LoadCountries implements Action {
  readonly type = CountriesActionTypes.LoadCountries;
}

export class LoadCountriesSuccess implements Action {
  readonly type = CountriesActionTypes.LoadCountriesSuccess;
  constructor(public readonly payload: { countries: Country[] }) {
    console.log(payload);
  }
}

export class LoadCountriesError implements Action {
  readonly type = CountriesActionTypes.LoadCountriesError;
  constructor(public readonly payload: { error: string }) {}
}

export class SelectCountry implements Action {
  readonly type = CountriesActionTypes.SelectCountry;
  constructor(public readonly payload: { code: string }) {}
}

export type CountriesActions =
  | LoadCountries
  | LoadCountriesError
  | LoadCountriesSuccess
  | SelectCountry;
