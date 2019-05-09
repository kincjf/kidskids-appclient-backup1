import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '@ecom9/models';

@Component({
  selector: 'xui-category-item-hoz',
  templateUrl: './category-item-hoz.component.html',
  styleUrls: ['./category-item-hoz.component.scss']
})
export class CategoryItemHozComponent implements OnInit {
  @Input() category: Category;
  @Input() selectId: number;
  @Input() showImage: boolean = true;
  @Input() showParent: boolean = false;
  @Output() select = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  selectCard() {
    this.select.emit(this.category.id);
  }

  getImage(image: string) {
    const fileExt = `.${image.split('.').pop()}`;
    const newImage = image.replace(fileExt, `-150x150${fileExt}`)
    return newImage;
  }
}
