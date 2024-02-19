import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalListPageRoutingModule } from './pal-list-routing.module';

import { PalListPage } from './pal-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalListPageRoutingModule
  ],
  declarations: [PalListPage]
})
export class PalListPageModule {}
