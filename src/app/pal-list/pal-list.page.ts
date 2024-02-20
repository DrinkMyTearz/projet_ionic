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
  searchTerm: string = ''; 
  filteredPals: any[] = [];

  constructor(
    private Pals: PalService
    ) { }

  ngOnInit() {
    this.Pals.getAll().subscribe((data: any) => {
      this.pals = data;
    });
  }

  get sortedPals(): any[] {
    return this.pals.sort((a, b) => a.number - b.number);
  }

  getTypeImageUrl(type: string): string {
    switch (type) {
      case 'Neutral':
        return '../../../assets/img/types/neutral.png';
      case 'Dark':
        return '../../../assets/img/types/dark.png';
      case 'Dragon':
        return '../../../assets/img/types/dragon.png';
      case 'Ice':
        return '../../../assets/img/types/ice.png';
      case 'Fire':
        return '../../../assets/img/types/fire.png';
      case 'Grass':
        return '../../../assets/img/types/grass.png';
      case 'Ground':
        return '../../../assets/img/types/ground.png';
      case 'Electric':
        return '../../../assets/img/types/electric.png';
      case 'Water':
        return '../../../assets/img/types/water.png';
      case 'None':
        return '../../../assets/img/types/none.png';
      default:
        return ''; 
    }
  }

  filterPals(event: any) {
    const searchTerm = event.detail.value;
    if (!searchTerm) {
      this.filteredPals = this.sortedPals;
      return;
    }
    this.filteredPals = this.sortedPals.filter(pal => pal.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
