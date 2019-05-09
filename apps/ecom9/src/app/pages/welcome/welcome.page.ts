import { Component, OnInit, ViewChild } from '@angular/core';
import { XSlide } from '@ecom9/models';
import { NavController } from '@ionic/angular';
import { WelcomeComponent } from '@ecom9/shareui/welcome';
import { StorageService } from '@ecom9/nobackend';

@Component({
  selector: 'ecom9-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {
  slides: XSlide[] = [
    {
      title: '9ecom Ionic v4',
      sub_title: 'Your best m-ecommerce themes',
      image: 'assets/imgs/welcome/welcome1.png'
    },
    {
      title: 'Powered by Angular 7',
      sub_title: 'New Angular Engine,<br>Faster than ever',
      image: 'assets/imgs/welcome/welcome2.png'
    },
    {
      title: 'Using NgRx',
      sub_title: 'for better States Management',
      image: 'assets/imgs/welcome/welcome3.png'
    },
    {
      title: 'Nx Best Pratices',
      sub_title: 'Concentrated on components reuse',
      image: 'assets/imgs/welcome/welcome4.png'
    },
    {
      title: '9ecom Ionic v4',
      sub_title: 'All your m-commerce needed',
      image: 'assets/imgs/welcome/welcome5.png'
    },
  ];

  slide: XSlide;

  @ViewChild('slider') slider: WelcomeComponent;
  constructor(
    private navCtrl: NavController,
    private storage: StorageService,
  ) { 
  }

  ngOnInit() { 
    this.storage.set('intro', 'true').subscribe();
  }

  setCurrentSlideContent(slide: XSlide) {
    this.slide = slide;
  }

  get Image(): string {
    if (this.slide) {
      return `url('${this.slide.image}')`;
    } else {
      return `url('assets/imgs/welcome/welcome1.png')`;
    }
  }

  skip() {
    this.navCtrl.navigateForward('/home');
  }

  prev() {
    this.slider.prev();
  }

  next() {
    this.slider.next();
  }
}
