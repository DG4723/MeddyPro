import { Component, OnInit } from '@angular/core';
import { DocregService } from './../services/docreg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lis',
  templateUrl: './lis.page.html',
  styleUrls: ['./lis.page.scss'],
})

export class LisPage implements OnInit {
  docregs: any = [];
  filterTerm!: string;
  lisform: FormGroup;


  constructor(private docregService: DocregService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.lisform = this.formBuilder.group({
      city: [''],
    });
   }
   ngOnInit() {
     this.fetchDocregs();

   }

  fetchDocregs() {
    this.docregService.getdocregs().subscribe(
      (data) => {
        this.docregs = data.filter((docreg: any) => docreg.specialist === 'Veterinary');
        console.log('Doctor data:', this.docregs);

      },
      (error) => {
        console.error('Error fetching doctor data:', error);
      }
    );
  }


  onSubmit() {
     const cityValue = this.lisform.get('city')?.value;
    console.log('Entered City:', cityValue);

     this.docregs = this.docregs.filter((docreg: any) =>
      docreg.city.toLowerCase() === cityValue.toLowerCase()
    );
  }

 goToPetForm(userId: any) {
  const doc = this.docregs.find((docreg: any) => docreg.user_id === userId);
  if (doc && doc.stime && doc.etime) {
    this.router.navigate(['/petform'], { queryParams: { doc_id: userId, stime: doc.stime, etime: doc.etime } });
  } else {
    // Handle case when necessary data is not available
  }
}



 /* ionViewDidEnter() {
    this.vetdocService.getVetdocs().subscribe((response) => {
      this.Vetdocs = response;
    });
  }

  removeVetdoc(vetdoc, i) {
    if (window.confirm('Are you sure')) {
      this.vetdocService.deleteVetdoc(vetdoc._id)
      .subscribe(() => {
          this.Vetdocs.splice(i, 1);
          console.log('doctor deleted!');
        }
      );
    }
  }*/

}
