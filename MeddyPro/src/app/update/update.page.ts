import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeddydocService } from './../services/meddydoc.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {


  id: any;
  updateMeddyDocFg: FormGroup;

  constructor(
    private meddydocService: MeddydocService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchMeddyDoc(this.id);
    this.updateMeddyDocFg = this.formBuilder.group({
      name: [''],
      designation: [''],
      hname: [''],
      city: [''],
      contact: [''],
      fee: ['']
    });
  }

  fetchMeddyDoc(id) {
    this.meddydocService.getMeddyDoc(id).subscribe((data) => {
      this.updateMeddyDocFg.setValue({
      name: data['name'],
      designation: data['designation'],
      hname: data['hname'],
      city: data['city'],
      contact: data['contact'],
      fee: data['fee']
      });
    });
  }

  onSubmit() {
    if (!this.updateMeddyDocFg.valid) {
      return false;
    } else {
      this.meddydocService.updateMeddyDoc(this.id, this.updateMeddyDocFg.value)
        .subscribe(() => {
          this.updateMeddyDocFg.reset();
          this.router.navigate(['/list']);
        });
    }
  }

}
