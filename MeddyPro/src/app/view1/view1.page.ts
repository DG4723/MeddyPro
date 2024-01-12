import { Component, OnInit, NgZone   } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  VetdocService } from './../services/vetdoc.service';
import {  VetpatientService } from '../services/vetpatient.service';
import { UserCrudService } from '../services/user-crud.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.page.html',
  styleUrls: ['./view1.page.scss'],
})
export class View1Page implements OnInit {
  Users: any = [];
  Vetdocs: any = [];
  id: any = [];
  data: any = [];
  vetpatientForm: FormGroup;

  constructor( private vetdocService: VetdocService,
    private usercrudService: UserCrudService,
     private activatedRoute: ActivatedRoute,
    private  vetpatientService: VetpatientService,
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,) {
      this.vetpatientForm = this.formBuilder.group({
        name: [''],
        age: [''],
        gender: [''],
        type: [''],
        address: [''],
        date: [''],
        contact:[''],
        time:['']

    });
     }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getVetdoc();
   }

   ionViewDidEnter() {
    this.usercrudService.getUsers().subscribe((response) => {
      this.Users = response;
    });
  }

   getVetdoc(){
    this.vetdocService.getVetdoc(this.id).subscribe((data) => {
      this.Vetdocs = data;
      console.log(data);
    });
   }

   getUser(){
    this.usercrudService.getUser(this.id).subscribe((data) => {
      this.Users = data;
      console.log(data);
    });
   }

   onSubmit() {
    if (!this.vetpatientForm.valid) {
      return false;
    } else {
      this.vetpatientService.createVetpatient(this.vetpatientForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.vetpatientForm.reset();
            this.router.navigate(['/vetpatient']);
          });
        });
    }
  }



}
