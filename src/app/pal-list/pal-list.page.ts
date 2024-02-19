import { Component, OnInit } from '@angular/core';
import { PalService } from '../services/pal.service';
import { Pals } from '../models/pals.model';

@Component({
  selector: 'app-pal-list',
  templateUrl: './pal-list.page.html',
  styleUrls: ['./pal-list.page.scss'],
})
export class PalListPage implements OnInit {
  pals!: Array<Pals>;

  constructor(
    private Pals: PalService
    ) { }

  ngOnInit() {
    this.Pals.getAll().subscribe((data: any) => {
      this.pals = data;
    });
  }

}
