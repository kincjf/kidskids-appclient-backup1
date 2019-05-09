import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as categoryActions from '../actions/category.actions';
import * as menuActions from '../actions/menu.actions';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { CategoriesService } from '@ecom9/nobackend';
import { of as observableOf } from 'rxjs';

@Injectable()
export class CategoryEffects {

    @Effect()
    loadCategories$ = this.actions$.pipe(
        ofType(categoryActions.CategoryActionTypes.LoadCategories),
        startWith(new categoryActions.LoadCategories()),
        switchMap(action => {
            return this.categoryService.retrieveCategories()
                .pipe(
                    map((res: any) => new categoryActions.LoadCategoriesSuccess({ items: res })),
                    catchError(error => observableOf(new categoryActions.LoadCategoriesError({ error })))
                );
        })
    );

    @Effect()
    loadMenuss$ = this.actions$.pipe(
        ofType(menuActions.XMenuActionTypes.LoadMenus),
        startWith(new menuActions.LoadMenus()),
        switchMap(action => {
            return this.categoryService.retrieveMenus()
                .pipe(
                    map((res: any) => new menuActions.LoadMenusSuccess({ items: res })),
                    catchError(error => observableOf(new menuActions.LoadMenusError({ error })))
                );
        })
    );

    constructor(private actions$: Actions, private categoryService: CategoriesService) { }
}
