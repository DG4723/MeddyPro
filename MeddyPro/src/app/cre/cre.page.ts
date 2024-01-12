import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VetdocService } from './../services/vetdoc.service';

@Component({
  selector: 'app-cre',
  templateUrl: './cre.page.html',
  styleUrls: ['./cre.page.scss'],
})

export class CrePage implements OnInit {

  vetdocForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private vetdocService: VetdocService
  ) {
    this.vetdocForm = this.formBuilder.group({

      sno: [''],
      nameoftheofficer: [''],
      designation: [''],
      contact: [''],
      postaladdresswith: [''],

    });
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.vetdocForm.valid) {
      return false;
    } else {
      this.vetdocService.createVetdoc(this.vetdocForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.vetdocForm.reset();
            this.router.navigate(['/lis']);
          });
        });
    }
  }

}
