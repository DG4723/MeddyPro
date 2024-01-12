import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeddylabService } from './../services/meddylab.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.page.html',
  styleUrls: ['./appoinment.page.scss'],
})
export class AppoinmentPage implements OnInit {

  meddylabForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private meddylabService: MeddylabService
  ) {
    this.meddylabForm = this.formBuilder.group({
      aname: [''],
      age: [''],
      gender: [''],
      date: ['']
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.meddylabForm.valid) {
      return false;
    } else {
      this.meddylabService.createMeddyLab(this.meddylabForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.meddylabForm.reset();
            this.router.navigate(['/appoint']);
          });
        });
    }
  }

}

