import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Pals } from 'src/app/models/pals.model';
import { PalService } from 'src/app/services/pal.service';

@Component({
  selector: 'app-pal',
  templateUrl: './pal.page.html',
  styleUrls: ['./pal.page.scss'],
})
export class PalPage implements OnInit {
  modif: boolean = false;
  pal!: Pals;

  types: any[] = [
    { label: 'Neutral', imageUrl: '../../../assets/img/types/neutral.png' },
    { label: 'Dark', imageUrl: '../../../assets/img/types/dark.png' },
    { label: 'Dragon', imageUrl: '../../../assets/img/types/dragon.png' },
    { label: 'Ice', imageUrl: '../../../assets/img/types/ice.png' },
    { label: 'Fire', imageUrl: '../../../assets/img/types/fire.png' },
    { label: 'Grass', imageUrl: '../../../assets/img/types/grass.png' },
    { label: 'Ground', imageUrl: '../../../assets/img/types/ground.png' },
    { label: 'Electric', imageUrl: '../../../assets/img/types/electric.png' },
    { label: 'Water', imageUrl: '../../../assets/img/types/water.png' }
  ];

  
  types2: any[] = [
    { label: 'None' },
    ...this.types
  ];
  
  works: any[] = [
    { label: 'Kindling', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Planting', checked: false, imageUrl: "../../../assets/img/works/planting.png" },
    { label: 'Handiwork', checked: false, imageUrl: "../../../assets/img/works/handiwork.png" },
    { label: 'Lumbering', checked: false, imageUrl: "../../../assets/img/works/lumbering.png" },
    { label: 'Medicine Production', checked: false, imageUrl: "../../../assets/img/works/medicine_production.png" },
    { label: 'Transporting', checked: false, imageUrl: "../../../assets/img/works/transporting.png" },
    { label: 'Watering', checked: false, imageUrl: "../../../assets/img/works/watering.png" },
    { label: 'Generating Electricity', checked: false, imageUrl: "../../../assets/img/works/generating_electricity.png" },
    { label: 'Gathering', checked: false, imageUrl: "../../../assets/img/works/gathering.png" },
    { label: 'Mining', checked: false, imageUrl: "../../../assets/img/works/mining.png" },
    { label: 'Cooling', checked: false, imageUrl: "../../../assets/img/works/cooling.png" },
    { label: 'Farming', checked: false, imageUrl: "../../../assets/img/works/farming.png" }
  ];

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private palService: PalService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.palService.get(id).subscribe((value: any) => {
      this.pal = value; 
    });
  }

  async setUpdate() {
    const alert = await this.alertCtrl.create({
      header: 'Warning! You are about to modify the pal.',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel'
        },
        {
          text: 'Modify',
          handler: () => { this.modif = true; }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/pal']);
      }, 2000);
    });
  }

  onUpdate() {
    if (this.isPalValid(this.pal)) {
      this.palService.update(this.pal).subscribe(() => {
        this.presentToast('Modification registered.');
        this.modif = false;
      });
    } else {
      this.presentToast('Please fill in all fields.');
    }
  }

  isPalValid(pal: Pals): boolean {
    return (
      pal.name !== '' &&
      pal.number !== 0 &&
      pal.description !== '' &&
      pal.type1 !== '' &&
      pal.type2 !== '' 
    );
  }

  async setDelete(id: any) {
    const alert = await this.alertCtrl.create({
      header: 'Attention! You are about to delete a pal.',
      subHeader: 'This action is irreversible. Are you sure you want to delete this pal?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {   
            this.palService.delete(id); 
            this.router.navigate(['/pal']); 
            console.log('Deletion performed');
          }
        }
      ]
    });
    await alert.present();
  }

  onDelete(id: any) {
    this.palService.delete(id); 
    this.router.navigate(['/pal']); 
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

}