import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {
ngOnInit(): void {
throw new Error('Method not implemented.');
}
  @Output() capnhatGH = new EventEmitter();
  capnhat() {    
    let d = [ 10, 6000000]; 
    this.capnhatGH.emit(d);//thông qua EventEmitter bắn value ra cha, lúc này hàm gan_TT_GH trong cha sẽ chạy 
  
  }
}