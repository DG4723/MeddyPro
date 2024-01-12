import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeddylabService } from './../services/meddylab.service';

@Component({
  selector: 'app-labupdate',
  templateUrl: './labupdate.page.html',
  styleUrls: ['./labupdate.page.scss'],
})
export class LabupdatePage implements OnInit {



  updatemeddylabFg: FormGroup;
  id: any;
  fetchMeddyLab: any;

  constructor(
    private meddylabService: MeddylabService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchmeddylab(this.id);
    this.updatemeddylabFg = this.formBuilder.group({
      lname: [''],
      address: [''],
      city: [''],
      contact: [''],

    });
  }

  fetchmeddylab(id) {
    this.meddylabService.getMeddyLab(id).subscribe((data) => {
      this.updatemeddylabFg.setValue({
      lname: data['lname'],
      address: data['address'],
      city: data['city'],
      contact: data['contact'],

      });
    });
  }

  onSubmit() {
    if (!this.updatemeddylabFg.valid) {
      return false;
    } else {
      this.meddylabService.updateMeddyLab(this.id, this.updatemeddylabFg.value)
        .subscribe(() => {
          this.updatemeddylabFg.reset();
          this.router.navigate(['/laboratorylist']);
        });
    }
  }

}

