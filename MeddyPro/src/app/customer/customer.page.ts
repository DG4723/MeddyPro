import { Component, OnInit } from '@angular/core';
import { DocregService } from './../services/docreg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetformService } from '../services/petform.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

   docregs: any = [];
    filterTerm!: string;
    petforms: any = [];
  
  constructor(private docregService: DocregService,
    private formBuilder: FormBuilder,
    private petformService: PetformService,
    private router: Router) {}

  ngOnInit() {
    this.fetchDocregs();
    this.fetchPetform();
  }

   fetchDocregs() {
    this.docregService.getdocregs().subscribe(
      (data) => {
        this.docregs = data.filter((docreg: any) => docreg.mobileno === '8080808080');
        console.log('Doctor data:', this.docregs);

      },
      (error) => {
        console.error('Error fetching doctor data:', error);
      }
    );
   }
  
  fetchPetform() {
    this.petformService.getpetforms().subscribe(
      (data) => {
        this.petforms = data.filter((petfrom: any) => petfrom.contact === 8080808080);
        console.log('Doctor data:', this.petforms);

      },
      (error) => {
        console.error('Error fetching doctor data:', error);
      }
    );
  }

}
