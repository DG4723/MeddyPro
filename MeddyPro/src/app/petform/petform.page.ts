import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetformService } from '../services/petform.service';

@Component({
  selector: 'app-petform',
  templateUrl: './petform.page.html',
  styleUrls: ['./petform.page.scss'],
})
export class PetformPage implements OnInit {
  petform: FormGroup;
  doc_id: any;
  stime: any;
  etime: any;
  timeOptions: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private petformService: PetformService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.petform = this.formBuilder.group({
      name: [''],
      contact: [''],
      address: [''],
      pet: [''],
      date: [''],
      time: [''],
      satime: [''],
      eatime: [''],
      status: [''],
      doc_id: [''],
    });
  }

  ngOnInit() {
     this.route.queryParams.subscribe(params => {
    this.doc_id = params['doc_id'];
    this.stime = params['stime'];
    this.etime = params['etime'];

      console.log('Received stime:', this.stime);
      console.log('Received etime:', this.etime);
      console.log('docid:', this.doc_id);
 
      this.generateTimeOptions();
      this.setFormDefaults();
    });
  }



  
  generateTimeOptions(): void {
  const startTime = this.stime.split(':').map(Number);
  const endTime = this.etime.split(':').map(Number);

  const startHour = startTime[0];
  const startMinute = startTime[1];
  const endHour = endTime[0];
  const endMinute = endTime[1];

  for (let hour = startHour; hour <= endHour; hour++) {
    const maxMinute = (hour === endHour) ? endMinute : 59; // Adjust the maximum minute for the end hour
    const minMinute = (hour === startHour) ? startMinute : 0; // Adjust the minimum minute for the start hour

    for (let minute = minMinute; minute <= maxMinute; minute += 30) {
      const formattedHour = ('0' + hour).slice(-2);
      const formattedMinute = ('0' + minute).slice(-2);
      const ampm = hour < 12 ? 'AM' : 'PM';
      const time = `${formattedHour}:${formattedMinute} ${ampm}`;
      this.timeOptions.push(time);
    }
  }
}

 
  setFormDefaults(): void {
    this.petform.patchValue({
      doc_id: this.doc_id,
      stime: this.stime,
      etime: this.etime,
      time: this.timeOptions.length > 0 ? this.timeOptions[0] : '',
    });
  }

  onSubmit(): void {
    if (!this.petform.valid) {
      return;
    }

    this.petformService.createpetform(this.petform.value).subscribe((_response) => {
      this.petform.reset();
      this.router.navigate(['/tupage']);
    });
  }
}


