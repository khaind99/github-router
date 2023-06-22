import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DuLieuTongService {
  private messageSource = new BehaviorSubject('Nhân Sinh');
  currentMessage = this.messageSource.asObservable();
  private tongTienGH: BehaviorSubject<number> = new BehaviorSubject(0);
  currentTongTienGH = this.tongTienGH.asObservable();
  private tongSL: BehaviorSubject<number> = new BehaviorSubject(0);
  currentTongSL = this.tongSL.asObservable();

  constructor() {}
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeTongTienGH(value: number) {
    this.tongTienGH.next(value);
  }

  changeTongSL(value: number) {
    this.tongSL.next(value);
  }
}
