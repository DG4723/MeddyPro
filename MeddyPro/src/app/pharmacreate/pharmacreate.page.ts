import { Component, OnInit, NgZone  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeddypharmaService } from './../services/meddypharma.service';

@Component({
  selector: 'app-pharmacreate',
  templateUrl: './pharmacreate.page.html',
  styleUrls: ['./pharmacreate.page.scss'],
})
export class PharmacreatePage implements OnInit {

  meddypharmaForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private meddypharmaService: MeddypharmaService
  ) {
    this.meddypharmaForm = this.formBuilder.group({
      name: [''],
      address: [''],
      district: [''],
      contact: [''],
      email: ['']

    });
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.meddypharmaForm.valid) {
      return false;
    } else {
      this.meddypharmaService.createMeddyPharma(this.meddypharmaForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.meddypharmaForm.reset();
            this.router.navigate(['/pharmalist']);
          });
        });
    }
  }

}

