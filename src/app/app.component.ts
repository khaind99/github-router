import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DuLieuTongService } from './du-lieu-tong.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Em thích ăn Rau';

  tongSL: number = 0;
  tongTienGH: number = 0;
  ganSL_TT_GH(data = [0, 0]) {
    //giả định component con bắn ra array data có 2 phần từ
    this.tongSL = data[0];
    this.tongTienGH = data[1];
  }
  message: string = '';

  constructor(private data: DuLieuTongService) {}

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
    console.log('abc', this.title);
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
}

export class ParentComponent {
  parentMessage: string = 'message from parent';

  constructor() {}
}
