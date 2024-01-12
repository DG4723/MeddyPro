
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class MeddyDoc {
  _id: number;
  name: string;
  designation: string;
  hname: string;
  city: string;
  contact: number;
  fee: number;
  imgurl: string;
  degree: string;
  experience: string;
  date: Date;
  time: string;
}

@Injectable({
  providedIn: 'root'
})

export class MeddydocService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createMeddyDoc(meddydoc: MeddyDoc): Observable<any> {
    return this.httpClient.post<MeddyDoc>('http://localhost:5000/api/create-meddydoc', meddydoc, this.httpOptions)
      .pipe(
        catchError(this.handleError<MeddyDoc>('Error occured'))
      );
  }

  getMeddyDoc(id): Observable<MeddyDoc[]> {
    return this.httpClient.get<MeddyDoc[]>('http://localhost:5000/api/fetch-meddydoc/' + id)
      .pipe(
        tap(_ => console.log(`MeddyDoc fetched: ${id}`)),
        catchError(this.handleError<MeddyDoc[]>(`Get doctor id=${id}`))
      );
  }

  getMeddyDocs(): Observable<MeddyDoc[]> {
    return this.httpClient.get<MeddyDoc[]>('http://localhost:5000/api')
      .pipe(
        tap(meddydocs => console.log('MeddyDoc retrieved!')),
        catchError(this.handleError<MeddyDoc[]>('Get doctors', []))
      );
  }

  updateMeddyDoc(id, meddydoc: MeddyDoc): Observable<any> {
    return this.httpClient.put('http://localhost:5000/api/update-meddydoc/' + id, meddydoc, this.httpOptions)
      .pipe(
        tap(_ => console.log(`MeddyDoc updated: ${id}`)),
        catchError(this.handleError<MeddyDoc[]>('Update Doctor'))
      );
  }



  deleteMeddyDoc(id): Observable<MeddyDoc[]> {
    return this.httpClient.delete<MeddyDoc[]>('http://localhost:5000/api/delete-meddydoc/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`MeddyDoc deleted: ${id}`)),
        catchError(this.handleError<MeddyDoc[]>('Delete doctors'))
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
