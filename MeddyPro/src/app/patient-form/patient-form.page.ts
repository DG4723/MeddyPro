import { Component, OnInit, NgZone  } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeddypatientService } from './../services/meddypatient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.page.html',
  styleUrls: ['./patient-form.page.scss'],
})
export class PatientFormPage implements OnInit {

  meddypatientForm: FormGroup;


  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private meddypatientService: MeddypatientService
  ) {
    this.meddypatientForm = this.formBuilder.group({
      name: [''],
      age: [''],
      gender: [''],
      address: [''],
      contact: [''],
      complaint: [''],
      mname: [''],
      date: [''],
      strength: ['']
    });
  }

  ngOnInit() { }

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

