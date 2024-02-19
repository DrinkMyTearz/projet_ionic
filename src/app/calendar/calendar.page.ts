import { Component } from '@angular/core';
import { Calendar } from '@capacitor/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
})
export class CalendarPage {

  constructor() {}

  async addToCalendar() {
    try {
      const startDate = new Date(); 
      const endDate = new Date(); 
      endDate.setHours(endDate.getHours() + 1); 

      const event = {
        title: 'Réunion importante',
        location: 'Bureau',
        notes: 'Prévoir les détails de la réunion ici...',
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      };

      await Calendar.requestPermissions(); 
      await Calendar.createEvent(event); 

      console.log('Événement ajouté au calendrier avec succès!');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'événement au calendrier:', error);
    }
  }
}
