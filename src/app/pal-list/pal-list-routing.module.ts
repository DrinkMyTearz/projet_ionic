import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalListPage } from './pal-list.page';

const routes: Routes = [
  {
    path: '',
    component: PalListPage
  },
  {
    path: 'pal-new',
    loadChildren: () => import('./pal-new/pal-new.module').then( m => m.PalNewPageModule)
  },
  {
    path: 'pal',
    loadChildren: () => import('./pal/pal.module').then( m => m.PalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalListPageRoutingModule {}
