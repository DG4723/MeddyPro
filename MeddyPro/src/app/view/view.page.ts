/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, NgZone   } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  MeddydocService } from './../services/meddydoc.service';
import { MeddypatientService } from './../services/meddypatient.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  countrycode='91';
  whatsappnumber='9442148202';
  url: string='https://wa.me/'+this.countrycode+this.
  whatsappnumber+'?text=hi';
  subjects;
  MeddyDocs: any = [];
  id: any = [];
  data: any = [];
  meddypatientForm: FormGroup;

  constructor( private meddydocService: MeddydocService,
     private activatedRoute: ActivatedRoute,
    private  meddypatientService: MeddypatientService ,
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,) {
      this.meddypatientForm = this.formBuilder.group({
        name: [''],
        age: [''],
        gender: [''],
        address: [''],
        contact: [''],
        date: [''],
        fee: [''],
        time: [''],
      });
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

   onSubmit() {
    if (!this.meddypatientForm.valid) {
      return false;
    } else {
      this.meddypatientService.createMeddyPatient(this.meddypatientForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.meddypatientForm.reset();
            this.router.navigate(['/patient-details']);
          });
        });
    }
  }



}
