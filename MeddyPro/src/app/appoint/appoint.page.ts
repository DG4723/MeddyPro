import { Component, OnInit } from '@angular/core';
import { MeddylabService } from './../services/meddylab.service';

@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.page.html',
  styleUrls: ['./appoint.page.scss'],
})
export class AppointPage implements OnInit {

  MeddyLab: any = [];
  filterTerm!: string;

  constructor( private meddylabService: MeddylabService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.meddylabService.getMeddyLabs().subscribe((response) => {
      this.MeddyLab = response;
    });
  }

}
