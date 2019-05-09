
import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromAuth from './auth.reducer';
import * as fromAuthPage from './login-page.reducer';

export interface AuthState {
    status: fromAuth.State;
    loginPage: fromAuthPage.State;
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
    status: fromAuth.reducer,
    loginPage: fromAuthPage.reducer
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthStatusState = createSelector(selectAuthState, (state: AuthState) => state.status);
export const getIsAuthenticated = createSelector(selectAuthStatusState, fromAuth.getIsAuthenticated);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);
export const getCustomer = createSelector(selectAuthStatusState, fromAuth.getCustomer);

export const selectLoginPageState = createSelector(selectAuthState, (state: AuthState) => state.loginPage);
export const getLoginPageError = createSelector(selectLoginPageState, fromAuthPage.getError);
export const getLoginPagePending = createSelector(selectLoginPageState, fromAuthPage.getPending);
