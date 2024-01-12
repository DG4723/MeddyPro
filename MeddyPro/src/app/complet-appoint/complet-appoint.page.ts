import { Component, OnInit } from '@angular/core';
import { PetformService } from '../services/petform.service';

@Component({
  selector: 'app-complet-appoint',
  templateUrl: './complet-appoint.page.html',
  styleUrls: ['./complet-appoint.page.scss'],
})
export class CompletAppointPage implements OnInit {
  petforms: any = [];

  constructor(private petformService: PetformService) { }

  ngOnInit() {
     this.fetchPetform();

  }
  
   fetchPetform() {
    this.petformService.getpetforms().subscribe(
      (data) => {
        this.petforms = data.filter((petfrom: any) => petfrom.status === 'complete');
        console.log('Doctor data:', this.petforms);

      },
      (error) => {
        console.error('Error fetching doctor data:', error);
      }
    );
  }
}
