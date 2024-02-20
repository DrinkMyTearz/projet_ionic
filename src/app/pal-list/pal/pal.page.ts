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
  
  works: any[] = [
    { label: 'Kindling', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Planting', checked: false, imageUrl: "../../../assets/img/works/Planting.png" },
    { label: 'Handiwork', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Lumbering', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Medecine Production', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Transporting', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Watering', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Generating Electricity', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Gathering', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Mining', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Cooling', checked: false, imageUrl: "../../../assets/img/works/kindling.png" },
    { label: 'Farming', checked: false, imageUrl: "../../../assets/img/works/kindling.png" }
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
    await toast.present();
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
      pal.type2 !== '' &&
      pal.food !== ''
    );
  }

  onDelete(id: any) {
    this.palService.delete(id); 
    this.router.navigate(['/pals']); 
  }

}