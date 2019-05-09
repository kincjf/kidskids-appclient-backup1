import { Action } from '@ngrx/store';
import { XMenu } from '@ecom9/models';

export enum XMenuActionTypes {
  LoadMenus = '[Shop] Load  Menus',
  LoadMenusSuccess = '[Shop] Load  Menus Success',
  LoadMenusError = '[Shop] Load  Menus Error',

  SelectXMenu = '[Shop] Select XMenu'
}

export class LoadMenus implements Action {
  readonly type = XMenuActionTypes.LoadMenus;
}

export class LoadMenusSuccess implements Action {
  readonly type = XMenuActionTypes.LoadMenusSuccess;
  constructor(public readonly payload: { items: XMenu[] }) {}
}

export class LoadMenusError implements Action {
  readonly type = XMenuActionTypes.LoadMenusError;
  constructor(public readonly payload: { error: string }) {}
}

export class SelectXMenu implements Action {
  readonly type = XMenuActionTypes.SelectXMenu;
  constructor(public readonly payload: { id: number }) {}
}

export type XMenuActions =
  | LoadMenus
  | LoadMenusError
  | LoadMenusSuccess
  | SelectXMenu;
