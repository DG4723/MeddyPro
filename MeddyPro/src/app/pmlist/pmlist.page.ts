import { Component, OnInit } from '@angular/core';
import { vetmedService } from './../services/vetmed.service';

@Component({
  selector: 'app-pmlist',
  templateUrl: './pmlist.page.html',
  styleUrls: ['./pmlist.page.scss'],
})
export class PmlistPage implements OnInit {
  vetmeds: any = [];
  constructor( private vetmedService: vetmedService ) { }
  
  ngOnInit() { }

  ionViewDidEnter() {
    this.vetmedService.getVetmeds().subscribe((response) => {
      this.vetmeds = response;
    });
  }

  removeVetmed(vetmed, i) {
    if (window.confirm('Are you sure')) {
      this.vetmedService.deletevetmed(vetmed._id)
      .subscribe(() => {
          this.vetmeds.splice(i, 1);
          console.log('doctor deleted!');
        }
      );
    }
  }

}

