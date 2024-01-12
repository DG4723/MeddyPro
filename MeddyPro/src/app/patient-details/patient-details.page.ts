import { Component, OnInit, NgZone   } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  MeddydocService } from './../services/meddydoc.service';
import { MeddypatientService } from './../services/meddypatient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.page.html',
  styleUrls: ['./patient-details.page.scss'],
})
export class PatientDetailsPage implements OnInit {
  calendar: string;
  type: 'string';
  MeddyPatients: any = [];
  MeddyDocs: any = [];
  id: string;

  constructor( private meddydocService: MeddydocService,
    private activatedRoute: ActivatedRoute,
   private  meddypatientService: MeddypatientService ,
   private router: Router,
   public formBuilder: FormBuilder,
   private zone: NgZone,) { }

  getMeddyPatient(id) {
    this.meddypatientService.getMeddyPatient(id).subscribe((response) => {
    this.MeddyPatients = response;
    });
  }

  ionViewDidEnter() {
    this.meddypatientService.getMeddyPatients().subscribe((response) => {
      this.MeddyPatients = response;
    });
  }

  onChange($event) {
    console.log($event);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMeddyDoc();
   }

   getMeddyDoc(){
    this.meddydocService.getMeddyDoc(this.id).subscribe((data) => {
      this.MeddyDocs = data;
      console.log(data);
    });
   }

}
