import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { XMenu } from '@ecom9/models';

@Component({
  selector: 'xui-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() menus: XMenu[];
  @Input() current: XMenu;
  @Output() menuClick = new EventEmitter<XMenu>();
  constructor() { }

  ngOnInit() { }

  onClick(xmenu: XMenu) {
    this.menuClick.emit(xmenu);
  }
}
