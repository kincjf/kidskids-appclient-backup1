import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Category } from '@ecom9/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'xui-category-list-hoz',
  templateUrl: './category-list-hoz.component.html',
  styleUrls: ['./category-list-hoz.component.scss']
})
export class CategoryListHozComponent implements OnInit, OnChanges {
  @Input() categories: Category[];
  @Input() selectId: number;
  @Input() loading: boolean;
  @Input() error: any;
  @Input() showImage: boolean = true;
  @Input() showParent: boolean = true;

  @Output() select = new EventEmitter<number>();
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    let el: any;
    if (this.selectId > 0) {
      el = document.getElementById('cat' + this.selectId);
    } else {
      el = document.getElementById('cat__1');
    }
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  onSelect(id: number) {
    this.select.emit(id);
  }
}
