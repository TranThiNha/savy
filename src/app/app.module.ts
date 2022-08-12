import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { ListUserComponent } from './list-user/list-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, ListUserComponent, DetailUserComponent],
  imports: [BrowserModule, AppRoutingModule, NgZorroAntdModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
