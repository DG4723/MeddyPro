import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage  {
  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -100,
  };

  public data: any;
  constructor(private http: HttpClient) {
    this.getData();
  }
  getData(): void {
    const url = 'http://localhost:8080/www/doctors_list.php';

    const data: any = {
      id:1
    };
    const a = this.http.post(url,data).subscribe((res)=>{
      console.log(res);
      this.data=res;
    });


    }
}
