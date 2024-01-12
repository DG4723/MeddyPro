import { Component, OnInit } from '@angular/core';
import { MeddypharmaService } from '../services/meddypharma.service';

@Component({
  selector: 'app-list',
  templateUrl: './pharmalist.page.html',
  styleUrls: ['./pharmalist.page.scss'],
})

export class PharmalistPage implements OnInit {

  meddypharmas: any = [];

  constructor( private meddypharmaService: MeddypharmaService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.meddypharmaService.getMeddyPharmas().subscribe((response) => {
      this.meddypharmas = response;
    });
   }

   removeMeddyPharma(meddypharma, i) {
    if (window.confirm('Are you sure')) {
      this.meddypharmaService.deleteMeddyPharma(meddypharma._id)
      .subscribe(() => {
          this.meddypharmas.splice(i, 1);
          console.log('Datas deleted!');
        }
      );
    }
  }
};
