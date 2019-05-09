import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { XMenu } from '@ecom9/models';

@Component({
  selector: 'xui-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() menu: XMenu;
  @Input() current: XMenu;
  @Output() menuClick = new EventEmitter<XMenu>();

  show: boolean = false;
  constructor() { }

  ngOnInit() { }

  onClick(item: XMenu) {
    this.menuClick.emit(item);
  }

  toggle() {
    this.show = !this.show;
  }

  get isCurrent(): number {
    if (this.current) {
      return this.current.id;
    }

    return -1;
  }
}
