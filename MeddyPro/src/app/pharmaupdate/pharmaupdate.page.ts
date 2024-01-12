import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeddypharmaService } from './../services/meddypharma.service';

@Component({
  selector: 'app-pharmaupdate',
  templateUrl: './pharmaupdate.page.html',
  styleUrls: ['./pharmaupdate.page.scss'],
})
export class PharmaupdatePage implements OnInit {


  id: any;
  updateMeddyPharmaFg: FormGroup;


  constructor(
    private meddypharmaService: MeddypharmaService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchMeddyPharma(this.id);
    this.updateMeddyPharmaFg = this.formBuilder.group({
      name: [''],
      address: [''],
      district: [''],
      contact: [''],
      email: ['']

    });
  }

  fetchMeddyPharma(id) {
    this.meddypharmaService.getMeddyPharma(id).subscribe((data) => {
      this.updateMeddyPharmaFg.setValue({
      name: data['name'],
      address: data['address'],
      district: data['district'],
      contact: data['contact'],
      email: data['email'],

      });
    });
  }

  onSubmit() {
    if (!this.updateMeddyPharmaFg.valid) {
      return false;
    } else {
      this.meddypharmaService.updateMeddyPharma(this.id, this.updateMeddyPharmaFg.value)
        .subscribe(() => {
          this.updateMeddyPharmaFg.reset();
          this.router.navigate(['/pharmalist']);
        });
    }
  }

}
