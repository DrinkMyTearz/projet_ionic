import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalNewPageRoutingModule } from './pal-new-routing.module';

import { PalNewPage } from './pal-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalNewPageRoutingModule
  ],
  declarations: [PalNewPage]
})
export class PalNewPageModule {}
