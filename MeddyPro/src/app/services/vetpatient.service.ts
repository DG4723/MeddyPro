import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Vetpatient {
  _id: number;
  name: string;
  age: number;
  gender: string;
  type: string;
  address: string;
  contact: number;
  date: Date;
  time:string;

}

@Injectable({
  providedIn: 'root'
})
export class VetpatientService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createVetpatient(vetpatient: Vetpatient): Observable<any> {
    return this.httpClient.post<Vetpatient>('http://localhost:5400/api/create-vetpatient', vetpatient, this.httpOptions)
      .pipe(
        catchError(this.handleError<Vetpatient>('Error occured'))
      );
  }

  getVetpatient(id): Observable<Vetpatient[]> {
    return this.httpClient.get<Vetpatient[]>('http://localhost:5400/api/fetch-vetpatient/' + id)
      .pipe(
        tap(_ => console.log(`vetpatient fetched: ${id}`)),
        catchError(this.handleError<Vetpatient[]>(`Get patient id=${id}`))
      );
  }

  getVetpatients(): Observable<Vetpatient[]> {
    return this.httpClient.get<Vetpatient[]>('http://localhost:5400/api')
      .pipe(
        tap(vetpatients => console.log('vetpatient retrieved!')),
        catchError(this.handleError<Vetpatient[]>('Get Patients', []))
      );
  }

  updateVetpatient(id, vetpatient: Vetpatient): Observable<any> {
    return this.httpClient.put('http://localhost:5400/api/update-vetpatient/' + id, vetpatient, this.httpOptions)
      .pipe(
        tap(_ => console.log(`vetpatient updated: ${id}`)),
        catchError(this.handleError<Vetpatient[]>('Update Patient'))
      );
  }



  deleteVetpatient(id): Observable<Vetpatient[]> {
    return this.httpClient.delete<Vetpatient[]>('http://localhost:5400/api/delete-vetpatient/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`vetpatient deleted: ${id}`)),
        catchError(this.handleError<Vetpatient[]>('Delete Patients'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

