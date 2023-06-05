import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { GiohangTongComponent } from './giohang-tong/giohang-tong.component';
import { GiohangComponent } from './giohang/giohang.component';
import { DuLieuTongService } from './du-lieu-tong.service';
import { RouterModule, Routes } from '@angular/router';

const appRouter: Routes = [
  {
    path: 'index',
    component: GiohangComponent,
  },
  {
    path: 'about',
    component: GiohangTongComponent,
  },
  {
    // khi một router nào được gọi mà không có trong phần appRouter thì NotFoundComponent được gọi ra
    path: '**',
    component: ChildComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GiohangTongComponent,
    GiohangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRouter),
  ],
  providers: [DuLieuTongService],
  bootstrap: [AppComponent],
})
export class AppModule {}
