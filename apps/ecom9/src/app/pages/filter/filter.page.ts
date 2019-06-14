import { Component, OnInit } from '@angular/core';

import { LoadingController, ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-filter',
    templateUrl: './filter.page.html',
    styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
    constructor(
        private navCtrl: NavController,
      ){}
     price: any = {lower: 0, upper: 100};
    // attributes: any;
    // id: any;
    // filter: any;
    // constructor(public api: ApiService, public loadingController: LoadingController, public modalCtrl: ModalController, public settings: Settings, public navParams: NavParams) {}
    ngOnInit() {
        // this.filter = this.navParams.data.filter;
        // this.attributes = this.navParams.data.attributes;
        // if (this.filter.min_price) {
        //     this.price.lower = this.filter.min_price;
        //     this.price.upper = this.filter.max_price;
        // } else this.price.upper = this.settings.settings.max_price;
    }
    dismiss() {
       this.navCtrl.back();
    }
    applyFilter() {
        // var i = 0;
        // for (const [key, value] of Object.entries(this.attributes)) {
        //     if (this.attributes[key].terms.length) this.attributes[key].terms.forEach(term => {
        //         if (term.selected && term.selected == true) {
        //             this.filter['attributes' + i] = this.attributes[key].id;
        //             this.filter['attribute_term' + i] = term.term_id;
        //         } else {
        //             this.filter['attributes' + i] = undefined;
        //             this.filter['attribute_term' + i] = undefined;
        //         }
        //         i++;
        //     });
        // }
        // this.filter.min_price = this.price.lower;
        // this.filter.max_price = this.price.upper;
        // this.modalCtrl.dismiss(this.filter);
    }
}