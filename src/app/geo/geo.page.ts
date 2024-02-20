import { Component, OnInit } from '@angular/core';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {
  latitude: any;
  longitude: any;

  constructor() { }

  ngOnInit() {
    this.getPosition();
  }

  getPosition() {
    var options:PositionOptions = {
      enableHighAccuracy: true
    }
    Geolocation.getCurrentPosition(options).then((res)=>{
      this.latitude = res.coords.latitude;
      this.longitude = res.coords.longitude;
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }
}
