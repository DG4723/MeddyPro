import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.page.html',
  styleUrls: ['./physician.page.scss'],
})
export class PhysicianPage {
  public currentDate: string;
  public chosenDate: string;
  constructor(public navCtrl: NavController,private platform: Platform) {
    this.currentDate = (new Date()).toISOString();
    this.chosenDate = this.currentDate;
  }
}
