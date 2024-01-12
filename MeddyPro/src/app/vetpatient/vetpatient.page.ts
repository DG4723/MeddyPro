import { Component, OnInit, NgZone   } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  VetdocService } from './../services/vetdoc.service';
import { VetpatientService } from '../services/vetpatient.service';

@Component({
  selector: 'app-vetpatient',
  templateUrl: './vetpatient.page.html',
  styleUrls: ['./vetpatient.page.scss'],
})
export class VetpatientPage implements OnInit {
  calendar: string;
  type: 'string';
  vetpatients: any = [];
  vetdocs: any = [];
  id: string;

  constructor( private vetdocService: VetdocService,
   private activatedRoute: ActivatedRoute,
   private  vetpatientService: VetpatientService ,
   private router: Router,
   public formBuilder: FormBuilder,
   private zone: NgZone,) { }

  getvetpatient(id) {
    this.vetpatientService.getVetpatient(id).subscribe((response) => {
    this.vetpatients = response;
    });
  }

  ionViewDidEnter() {
    this.vetpatientService.getVetpatients().subscribe((response) => {
      this.vetpatients = response;
    });
  }

  onChange($event) {
    console.log($event);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getvetdoc();
   }

   getvetdoc(){
    this.vetdocService.getVetdoc(this.id).subscribe((data) => {
      this.vetdocs = data;
      console.log(data);
    });
   }

}
