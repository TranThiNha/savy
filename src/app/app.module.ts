import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { ListUserComponent, DetailUserComponent } from './containers';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListUserComponent,
    DetailUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgZorroAntdModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
