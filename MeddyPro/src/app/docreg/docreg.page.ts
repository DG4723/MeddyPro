import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocregService } from '../services/docreg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docreg',
  templateUrl: './docreg.page.html',
  styleUrls: ['./docreg.page.scss'],
})
export class DocregPage implements OnInit {
  docregForm: FormGroup;
  user_id = 0;

  constructor(
    private formBuilder: FormBuilder,
    private docregService: DocregService,
    private router: Router,
    private zone: NgZone
  ) { 
    this.docregForm = this.formBuilder.group({
      name: [''],
      age: [''],
      gender: [''],
      mobileno: [''],
      city: [''],
      state: [''],
      user: [''],
      specialist: [''],
      stime: [''],
      etime: [''],
      user_id: [''],
    });
    this.calculateUserId();
  }

  ngOnInit() {}

 onSubmit() {
  if (!this.docregForm.valid) {
    return false;
  }

  const formData = { ...this.docregForm.value, user_id: this.user_id };
  this.docregService.createdocreg(formData).subscribe((_response) => {
    this.zone.run(() => {
      this.docregForm.reset();
    }); 
    });
}

  calculateUserId() {
    this.docregService.getTotalCount().subscribe(
      (totalCountOfEntries) => {
        this.user_id = totalCountOfEntries + 1;
        this.docregForm.patchValue({ user_id: this.user_id });
      },
      (error) => {
        console.error('Error fetching total count:', error);
      }
    );
  }

 

  toggleSpecialistVisibility() {
    const userControl = this.docregForm.get('user');
    if (userControl?.value === 'doctor') {
      this.docregForm.get('specialist')?.setValidators(Validators.required);
    } else {
      this.docregForm.get('specialist')?.clearValidators();
    }
    this.docregForm.get('specialist')?.updateValueAndValidity();
  }
}
