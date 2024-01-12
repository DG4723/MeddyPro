import { Component, OnInit, NgZone  } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserCrudService } from './../services/user-crud.service';

@Component({
  selector: 'app-vetpatientform',
  templateUrl: './vetpatientform.page.html',
  styleUrls: ['./vetpatientform.page.scss'],
})
export class VetpatientFormPage implements OnInit {

  vetpatientForm: FormGroup;
  userForm: any;


  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private usercrudService: UserCrudService
  ) {
    this.userForm = this.formBuilder.group({
      name: [''],
      age: [''],
      address: [''],
      contact: [''], 

    });
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.usercrudService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
           // this.router.navigate(['/list ']);
          });
        });
    }
  }

}