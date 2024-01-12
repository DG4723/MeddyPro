import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VetdocService } from './../services/vetdoc.service';


@Component({
  selector: 'app-upd',
  templateUrl: './upd.page.html',
  styleUrls: ['./upd.page.scss'],
})

export class UpdPage implements OnInit {

  updatevetdocFg: FormGroup;
  id: any;
  fetchVetdoc: any;

  constructor(
    private vetdocService: VetdocService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchvetdoc(this.id);
    this.updatevetdocFg = this.formBuilder.group({
      sno: [''],
      nameoftheofficer: [''],

      designation: [''],
      contact: [''],
      postaladdresswith: [''],

    });
  }

  fetchvetdoc(id) {
    this.vetdocService.getVetdoc(id).subscribe((data) => {
      this.updatevetdocFg.setValue({
        sno: data['sno'],
        nameoftheofficer: data['nameoftheofficer'],
        designation: data ['designation'],
        contact: data ['contact'],
        postaladdresswith: data ['postaladdresswith'],
      });
    });
  }

  onSubmit() {
    if (!this.updatevetdocFg.valid) {
      return false;
    } else {
      this.vetdocService.updateVetdoc(this.id, this.updatevetdocFg.value)
        .subscribe(() => {
          this.updatevetdocFg.reset();
          this.router.navigate(['/lis']);
        })
    }
  }

}
