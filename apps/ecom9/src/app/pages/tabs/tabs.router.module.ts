import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: '../hotdeal/hotdeal.module#HotDealPageModule'
          }
        ]
      },
      {
        path: 'mall',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'myProduct',
        children:[
          {
            path:'',
            loadChildren: '../wishlist/wishlist.module#WishlistPageModule',        
          }          
        ]        
      },
      {
        path: 'morePage',
        children:[
          {
            path:'',
            loadChildren: '../settings/settings.module#SettingsPageModule',
          }         
        ]        
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
