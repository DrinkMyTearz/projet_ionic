import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalNewPage } from './pal-new.page';

const routes: Routes = [
  {
    path: '',
    component: PalNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalNewPageRoutingModule {}
