import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'xui-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  @Output() facebook = new EventEmitter();
  @Output() twitter = new EventEmitter();
  @Output() google = new EventEmitter();

  @Input() enableTwitter: boolean = false;

  constructor() {}

  ngOnInit() {}

  goFacebook() {
    this.facebook.emit();
  }

  goTwitter() {
    this.twitter.emit();
  }

  goGoogle() {
    this.google.emit();
  }
}
