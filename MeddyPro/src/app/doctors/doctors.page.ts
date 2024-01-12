import { Component, OnInit } from '@angular/core';
import { DocregService } from './../services/docreg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetformService } from '../services/petform.service';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {

  docregs: any = [];
  filterTerm!: string;
  petforms: any = [];
  formattedDate: any;
  petform: any;
  isEditMode = false; // To toggle edit mode
  editForm: FormGroup; // Create an Angular form

  constructor(private docregService: DocregService,
    private formBuilder: FormBuilder,
    private petformService: PetformService,
    private navCtrl: NavController,
    private router: Router) {
     this.editForm = this.formBuilder.group({
      stime: ['', Validators.required],
       etime: ['', Validators.required],
      status: ['', Validators.required],
    });
    }

  ngOnInit() {
    this.fetchDocregs();
    this.fetchPetform();


  }

   fetchDocregs() {
    this.docregService.getdocregs().subscribe(
      (data) => {
        this.docregs = data.filter((docreg: any) => docreg.mobileno === '9788373212');
        console.log('Doctor data:', this.docregs);

      },
      (error) => {
        console.error('Error fetching doctor data:', error);
      }
    );
   }

  fetchPetform() {
    this.petformService.getpetforms().subscribe(
      (data) => {
        this.petforms = data.filter((petfrom: any) => petfrom.doc_id === 5 && petfrom.status === null);
        console.log('Doctor data:', this.petforms);

      },
      (error) => {
        console.error('Error fetching doctor data:', error);
      }
    );
  }

   editAppointment(docreg: any) {
    this.isEditMode = true;
    this.editForm.patchValue({
      stime: docreg.stime,
      etime: docreg.etime,
    });
  }

  // Function to handle form submission and update stime and etime
 saveAppointment(docreg: any) {
  const { stime, etime } = this.editForm.value;

  // Update the stime and etime in the docreg object
  docreg.stime = stime;
  docreg.etime = etime;
   console.log('s',stime,'e', etime);
  // Call the service method to update the docreg
  this.docregService.updatedocreg(docreg._id, docreg).subscribe(
    (updatedDocreg) => {
      console.log('Docreg updated:', updatedDocreg);
      this.isEditMode = false; // Exit edit mode after successful update
    },
    (error) => {
      console.error('Error updating docreg:', error);
    }
  );
}

completeAppointment(petform: any) {
  petform.status = 'complete'; // Update status to 'complete'

  this.petformService.updatepetform(petform._id, petform).subscribe(
    (updatedPetform) => {
      console.log('Petform updated with complete status:', updatedPetform);
      // Optionally, you can remove the completed petform from the petforms array:
      this.petforms = this.petforms.filter((form) => form._id !== petform._id);
      
    },
    (error) => {
      console.error('Error updating petform status:', error);
    }
  );
}


}

