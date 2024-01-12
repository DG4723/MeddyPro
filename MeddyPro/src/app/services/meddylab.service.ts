
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class MeddyLab {
  _id: number;
  lname: string;
  address: string;
  city: string;
  contact: number;
  name: string;
  price: number;
  imgurl: string;
  aname: string;
  date: Date;
  gender: string;
  age: string;

}

@Injectable({
  providedIn: 'root'
})

export class MeddylabService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createMeddyLab(meddylab: MeddyLab): Observable<any> {
    return this.httpClient.post<MeddyLab>('http://localhost:5007/api/create-meddylab', meddylab, this.httpOptions)
      .pipe(
        catchError(this.handleError<MeddyLab>('Error occured'))
      );
  }

  getMeddyLab(id): Observable<MeddyLab[]> {
    return this.httpClient.get<MeddyLab[]>('http://localhost:5007/api/fetch-meddylab/' + id)
      .pipe(
        tap(_ => console.log(`meddyLab fetched: ${id}`)),
        catchError(this.handleError<MeddyLab[]>(`Get meddylab id=${id}`))
      );
  }

  getMeddyLabs(): Observable<MeddyLab[]> {
    return this.httpClient.get<MeddyLab[]>('http://localhost:5007/api')
      .pipe(
        tap(meddylabs => console.log('meddyLab retrieved!')),
        catchError(this.handleError<MeddyLab[]>('Get meddylabs', []))
      );
  }

  updateMeddyLab(id, meddylab: MeddyLab): Observable<any> {
    return this.httpClient.put('http://localhost:5007/api/update-meddylab/' + id, meddylab, this.httpOptions)
      .pipe(
        tap(_ => console.log(`MeddyLab updated: ${id}`)),
        catchError(this.handleError<MeddyLab[]>('Update meddylab'))
      );
  }



  deletemeddylab(id): Observable<MeddyLab[]> {
    return this.httpClient.delete<MeddyLab[]>('http://localhost:5007/api/delete-meddylab/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`MeddyLab deleted: ${id}`)),
        catchError(this.handleError<MeddyLab[]>('Delete doctors'))
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
