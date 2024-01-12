import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class MeddyPatient {
  _id: number;
  name: string;
  age: string;
  gender: string;
  address: string;
  contact: number;
  complaint: string;
  mname: string;
  strength: number;
  date: Date;
  fee: number;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class MeddypatientService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createMeddyPatient(meddypatient: MeddyPatient): Observable<any> {
    return this.httpClient.post<MeddyPatient>('http://localhost:5300/api/create-meddypatient', meddypatient, this.httpOptions)
      .pipe(
        catchError(this.handleError<MeddyPatient>('Error occured'))
      );
  }

  getMeddyPatient(id): Observable<MeddyPatient[]> {
    return this.httpClient.get<MeddyPatient[]>('http://localhost:5300/api/fetch-meddypatient/' + id)
      .pipe(
        tap(_ => console.log(`MeddyPatient fetched: ${id}`)),
        catchError(this.handleError<MeddyPatient[]>(`Get patient id=${id}`))
      );
  }

  getMeddyPatients(): Observable<MeddyPatient[]> {
    return this.httpClient.get<MeddyPatient[]>('http://localhost:5300/api')
      .pipe(
        tap(meddypatients => console.log('MeddyPatient retrieved!')),
        catchError(this.handleError<MeddyPatient[]>('Get Patients', []))
      );
  }

  updateMeddyPatient(id, meddypatient: MeddyPatient): Observable<any> {
    return this.httpClient.put('http://localhost:5300/api/update-meddypatient/' + id, meddypatient, this.httpOptions)
      .pipe(
        tap(_ => console.log(`MeddyPatient updated: ${id}`)),
        catchError(this.handleError<MeddyPatient[]>('Update Patient'))
      );
  }



  deleteMeddyPatient(id): Observable<MeddyPatient[]> {
    return this.httpClient.delete<MeddyPatient[]>('http://localhost:5300/api/delete-meddypatient/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`MeddyPatient deleted: ${id}`)),
        catchError(this.handleError<MeddyPatient[]>('Delete Patients'))
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

