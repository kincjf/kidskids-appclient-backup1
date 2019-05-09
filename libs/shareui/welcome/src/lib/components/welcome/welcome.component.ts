import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { XSlide } from '@ecom9/models';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'xui-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('slider') slider: IonSlides;

  @Input() slides: XSlide[];
  @Output() currentSlide = new EventEmitter<XSlide>();
  constructor() { }

  ngOnInit() {
    if (this.slides.length > 0) {
      this.currentSlide.emit(this.slides[0]);
    }
  }

  getImage(image: string) {
    return `url('${image}')`;
  }

  slideChanged(event) {
    this.slider
      .getActiveIndex()
      .then(index => {
        this.currentSlide.emit(this.slides[index]);
      });
  }

  public next() {
    this.slider.slideNext();
  }

  public prev() {
    this.slider.slidePrev();
  }
}
