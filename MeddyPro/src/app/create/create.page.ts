import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeddydocService } from './../services/meddydoc.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  meddydocForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private meddydocService: MeddydocService
  ) {
    this.meddydocForm = this.formBuilder.group({
      name: [''],
      designation: [''],
      hname: [''],
      city: [''],
      contact: [''],
      fee: [''],
      date: ['']
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.meddydocForm.valid) {
      return false;
    } else {
      this.meddydocService.createMeddyDoc(this.meddydocForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.meddydocForm.reset();
            this.router.navigate(['/list']);
          });
        });
    }
  }

}
