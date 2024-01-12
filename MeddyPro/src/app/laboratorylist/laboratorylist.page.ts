import { Component, OnInit } from '@angular/core';
import { MeddylabService } from './../services/meddylab.service';

@Component({
  selector: 'app-laboratorylist',
  templateUrl: './laboratorylist.page.html',
  styleUrls: ['./laboratorylist.page.scss'],
})
export class LaboratorylistPage implements OnInit {


  meddylabs: any = [];

  constructor( private meddylabService: MeddylabService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.meddylabService.getMeddyLabs().subscribe((response) => {
      this.meddylabs = response;
    });
  }

  removeMeddyLab(meddylab, i) {
    if (window.confirm('Are you sure')) {
      this.meddylabService.deletemeddylab(meddylab._id)
      .subscribe(() => {
          this.meddylabs.splice(i, 1);
          console.log('Labs deleted!');
        }
      );
    }
  }

}
