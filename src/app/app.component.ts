import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DuLieuTongService } from './du-lieu-tong.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Em thích ăn Rau';
  message: string = ''; 
  isClickedAbout = false;

  constructor(private data: DuLieuTongService, public routerService: Router) {}

  arrProduct = [
    {
      first: 'Thiện Lương',
      last: 'Otto',
      handle: '@mdo',
      image:
        'https://icons.veryicon.com/png/Culture/Real%20Vista%20Education/teacher.png',
      icon: '112212',
    },
    {
      first: 'Hoàng Dương Chân Nhân',
      last: '',
      handle: '',
      image:
        'https://icons.veryicon.com/128/Culture/Real%20Vista%20Education/graduated.png',
      icon: 'sadfsd',
    },
    {
      first: 'Tuấn Thành',
      last: 'bia đia',
      handle: '',
      image:
        'https://icons.veryicon.com/png/o/culture/little-fake-brother_-zodiac_-icon049/cattle-18.png',
      icon: 'rtghrèđf',
    },
  ];

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }

  navigate(url: string) {
    // this.routerService.navigate([url]);
    this.routerService.navigateByUrl(url);
  }

  clickAbout(): void {
    this.isClickedAbout = true;
    this.navigate('about');
  }

  clickHome(): void {
    this.isClickedAbout = false;
    this.navigate('');
  }
}
