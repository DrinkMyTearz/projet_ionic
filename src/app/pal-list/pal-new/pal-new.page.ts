import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Pals } from 'src/app/models/pals.model';
import { PalService } from 'src/app/services/pal.service';

@Component({
  selector: 'app-pal-new',
  templateUrl: './pal-new.page.html',
  styleUrls: ['./pal-new.page.scss'],
})
export class PalNewPage implements OnInit {
  public pal!: Pals;

  works: any[] = [
    { label: 'Kindling', checked: false },
    { label: 'Planting', checked: false },
    { label: 'Handiwork', checked: false },
    { label: 'Lumbering', checked: false },
    { label: 'Medicine Production', checked: false },
    { label: 'Transporting', checked: false },
    { label: 'Watering', checked: false },
    { label: 'Generating Electricity', checked: false },
    { label: 'Gathering', checked: false },
    { label: 'Mining', checked: false },
    { label: 'Cooling', checked: false },
    { label: 'Farming', checked: false }
  ];

  constructor(
    private palService: PalService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.pal = new Pals()
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'New pal registered',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/pals']);
      }, 2000);
    });
  }

  add() {
    if (this.isPalValid(this.pal)) {
      this.palService.saveNewPal(this.pal).subscribe(() => {
        this.pal = new Pals();
        this.presentToast();
      });
    } else {
      this.presentErrorToast('Please fill in all fields.');
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

  async presentErrorToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
