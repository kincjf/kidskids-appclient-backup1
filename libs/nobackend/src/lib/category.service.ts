import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category, XMenu } from '@ecom9/models';
import { map, groupBy, mergeMap, toArray, reduce } from 'rxjs/operators';

@Injectable()
export class CategoriesService {
  constructor(private httpClient: HttpClient) { }

  /**
   * Retrieve list of category
   */
  retrieveCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`assets/db/categories.json`);
  }

  retrieveMenus(): Observable<XMenu[]> {
    return this.httpClient.get(`assets/db/categories.json`)
      .pipe(
        map((categories: any) => categories.map((category: Category) => {
          const menu: XMenu = {
            id: category.id,
            name: category.name,
            parent: category.parent,
            route: category.slug,
            children: []
          }
          return menu;
        })),
        reduce((acc, menus) => {
          menus.forEach(menu => {
            if (menu.parent === 0 && menu.name !== 'Uncategorized') {
              acc.push(menu);
            }
          });

          acc.forEach(item => {
            menus.forEach(menu => {
              if (menu.parent === item.id) {
                item.children.push(menu);
              }
            });
          })

          acc.map(item => item.children.sort((a, b) => a.id - b.id));

          return acc;
        }, []),
        map((menus: any) => menus.sort((a, b) => a.id - b.id)),
      );
  }
}
