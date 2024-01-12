import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HpService } from './../services/hp.service';

@Component({
  selector: 'app-hpcreate',
  templateUrl: './hpcreate.page.html',
  styleUrls: ['./hpcreate.page.scss'],
})

export class HpcreatePage implements OnInit {

  hpForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private hpService: HpService
  ) {
    this.hpForm = this.formBuilder.group({
      imgurl:[],
      name: [''],
      qty: [''],
      price: ['']
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.hpForm.valid) {
      return false;
    } else {
      this.hpService.createHp(this.hpForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.hpForm.reset();
            this.router.navigate(['/health-care']);
          });
        });
    }
  }

}
