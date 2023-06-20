import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DuLieuTongService } from '../du-lieu-tong.service';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css'],
})
export class GiohangComponent implements OnInit {
  constructor(protected duLieuTongService: DuLieuTongService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  capnhat() {
    let d = [10, 6000000];
    this.duLieuTongService.changeTongSL(d[0]);
    this.duLieuTongService.changeTongTienGH(d[1]);
  }
}
