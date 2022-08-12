import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListUserComponent, DetailUserComponent } from './containers';

const routes: Routes = [
  { path: 'list-user', component: ListUserComponent },
  { path: 'detail-user', component: DetailUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
