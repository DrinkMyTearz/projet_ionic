import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalListPage } from './pal-list.page';

const routes: Routes = [
  {
    path: '',
    component: PalListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./pal-new/pal-new.module').then( m => m.PalNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pal/pal.module').then( m => m.PalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalListPageRoutingModule {}
