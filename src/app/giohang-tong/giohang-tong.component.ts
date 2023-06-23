import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DuLieuTongService } from '../du-lieu-tong.service';
@Component({
  selector: 'app-giohang-tong',
  templateUrl: './giohang-tong.component.html',
  styleUrls: ['./giohang-tong.component.css'],
})
export class GiohangTongComponent implements OnInit {
  constructor(protected duLieuTongService: DuLieuTongService) {}
  tongSL: number = 0;
  tongTienGH: number = 0;

  ngOnInit(): void {
    this.duLieuTongService.currentTongSL.subscribe(
      (value) => (this.tongSL = value)
    );
    this.duLieuTongService.currentTongTienGH.subscribe(
      (value) => (this.tongTienGH = value)
    );
  }
}
 