import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CategoriesService, StorageService } from '@ecom9/nobackend';

import { XMenu, Category, Customer, Order, Address, Product, CartProduct } from '@ecom9/models';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as fromStore from './store';
import * as fromProduct from './store/product';
import * as fromCart from './store/cart';
import * as fromAuth from './store/auth';


import { take } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'ecom9-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  current: XMenu;
  menus2: XMenu[];
  menus$: Observable<XMenu[]>;
  products$: Observable<Product[]>;

  @ViewChild('outlet') outlet: ElementRef;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private store: Store<fromStore.State>,
    private router: Router,
    private categories: CategoriesService,
    private renderer: Renderer2,
    private storage: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // set status bar to primary
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.splashScreen.hide();

      this.storage.fetch('intro')
        .pipe(take(1))
        .subscribe(yes => {
          if (!yes) {
            this.navCtrl.navigateForward('welcome');
          }
        });

      this.menus2 = [
        {
          id: 1,
          name: 'Hotdeals',
          parent: 0,
          route: 'hotdeal',
          children: []
        },
        {
          id: 2,
          name: 'Wishlist',
          parent: 0,
          route: 'wishlist',
          children: []
        },
        {
          id: 3,
          name: 'Track Orders',
          parent: 0,
          route: 'orders',
          children: []
        },
        {
          id: 4,
          name: 'Settings',
          parent: 0,
          route: 'settings',
          children: []
        },
        {
          id: 5,
          name: 'Sign out',
          parent: 0,
          route: 'login',
          children: []
        },
      ];

      this.menus$ = this.store.pipe(select(fromProduct.productState.getAllMenus));

      this.products$ = this.store.select(fromProduct.productState.getAllProducts);
      // Only for Demo
      setTimeout(() => {
        this.products$
          .pipe(take(1))
          .subscribe(products => {
            const billing: Address = {
              id: 'a829df85-63be-9b6f-400c-6e34b3f0727c',
              first_name: 'Quang Anh',
              last_name: 'Le',
              email: 'quanganh@aiti.com.vn',
              phone: '+84904814938',
              address_1: '46 Hang Giay',
              city: 'Ha Noi',
              state: 'Mien Bac',
              country: 'Vietnam',
            };

            const shipping: Address = {
              id: '453c17f5-f1c8-ca2d-c506-dd51b3c638ea',
              first_name: 'Quang Anh',
              last_name: 'Le',
              email: 'quanganh@aiti.com.vn',
              phone: '+84904814938',
              address_1: '50 Dong Xuan',
              city: 'Ha Noi',
              state: 'Mien Bac',
              country: 'Vietnam',
              default: true
            };

            const customer: Customer = {
              id: 2061981,
              first_name: 'Quang Anh',
              last_name: 'Le',
              email: 'quanganh@aiti.com.vn',
              avatar_url: 'https://en.gravatar.com/userimage/60006376/05f95953089b88055c8104bd94f0858d.png',
              phone: '+84904814938',
              billing: billing,
              shipping: shipping,
            };

            let count: number = 0;
            let total: number = 0;
            let line_items = new Array<CartProduct>();
            products.forEach(product => {
              if (product.type === 'simple' && count < 3) {
                line_items.push({ ...product, quantity: count, variant: 0, color: '' });
                total += product.price;
                count++;
              }
            });

            const order: Order = {
              id: UUID.UUID(),
              customer: customer,
              date_created: new Date(),
              date_created_gmt: new Date(),
              billing: billing,
              shipping: shipping,
              total: total,
              line_items: line_items,
            };

            this.store.dispatch(new fromAuth.authActions.LoadCustomerSuccess({ customer: customer }));
            this.store.dispatch(new fromCart.orderActions.AddOrder(order));

            this.storage.fetch('init')
              .pipe(take(1))
              .subscribe(data => {
                if (!data) {
                  this.storage.set('address', JSON.stringify([billing, shipping]))
                    .pipe(take(1))
                    .subscribe(() => {
                      this.store.dispatch(new fromCart.addressActions.FetchItems());
                      this.storage.set('init', 'inited').subscribe();
                    });
                }
              });
          });
      }, 1000);
    });
  }

  openMenu() {
    const children = this.outlet.nativeElement.children;

    if (this.platform.is('ios')) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        this.renderer.setStyle(child, 'zoom', '0.8');
        this.renderer.setStyle(child, 'top', '10%');
        this.renderer.setStyle(child, 'left', '10%');
        this.renderer.setStyle(child, 'border', '2px solid #989aa2');
        this.renderer.setStyle(child, 'height', '100vh');
        this.renderer.setStyle(child, 'opacity', '0.8');
      }
    } else {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        this.renderer.setStyle(child, 'zoom', '0.8');
        this.renderer.setStyle(child, 'top', '10%');
        this.renderer.setStyle(child, 'left', '86%');
        this.renderer.setStyle(child, 'border', '2px solid #989aa2');
        this.renderer.setStyle(child, 'height', '100vh');
        this.renderer.setStyle(child, 'opacity', '0.8');
      }
    }
  }

  closeMenu() {
    setTimeout(() => {
      const children = this.outlet.nativeElement.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        this.renderer.setStyle(child, 'zoom', '1');
        this.renderer.setStyle(child, 'top', '0');
        this.renderer.setStyle(child, 'left', '0');
        this.renderer.setStyle(child, 'border', 'none');
        this.renderer.setStyle(child, 'height', 'auto');
        this.renderer.setStyle(child, 'opacity', '1');
      }
    });
  }

  onMenuClick(xmenu: XMenu) {
    // select category
    this.current = xmenu;
    this.store.dispatch(new fromProduct.categoryActions.SelectCategory({ id: this.current.id }));

    if (this.router.url.indexOf('home') < 0) {
      setTimeout(() => {
        this.navCtrl.navigateRoot('home');
      }, 150);
    }
  }

  onClick(xmenu: XMenu) {
    if (xmenu.route === 'login') {
      this.navCtrl.navigateBack(xmenu.route);
    } else {
      this.current = xmenu;
      this.navCtrl.navigateForward(xmenu.route);
    }
  }

  get isCurrent(): number {
    if (this.current) {
      return this.current.id;
    }

    return -1;
  }
}
