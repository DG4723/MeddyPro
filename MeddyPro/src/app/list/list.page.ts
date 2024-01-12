import { Component, OnInit } from '@angular/core';
import { DocregService } from './../services/docreg.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  docregs: any = [];
  filterTerm!: string;

  constructor( private docregService: DocregService ) { }

  ngOnInit() {
     this.fetchDocregs();
   }

  fetchDocregs() {
    this.docregService.getdocregs().subscribe(
      (data) => {
         this.docregs = data.filter((docreg: any) => docreg.user === 'doctor')
        console.log('Doctor data:', this.docregs);
      },
      (error) => {
        console.error('Error fetching doctor data:', error);
      }
    );
  }



 

}
