import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class vetmed {
  _id: number;
  Genericname: string;
  Tradename: string;
  Strengthvalue: string;
  Unitofstrength: string;
  Dosageform: string;
  Routeofadministration: string;
  Volume: number;
  Unitofvolume: string;
  Packagetype: string;
  Legalstatus: string;
  Productcontrol: string;
  Storageconditions: string;
  ATCvet: string;
  Targetanimals: string;
  Type: string;
  Manufacturername: string;
}

@Injectable({
  providedIn: 'root'
})

export class vetmedService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }
  createVetmed(vetmed: vetmed): Observable<any> {
    return this.httpClient.post<vetmed>('http://localhost:1999/api/create-vetmed', vetmed, this.httpOptions)
      .pipe(
        catchError(this.handleError<vetmed>('Error occured'))
      );
  }

  getVetmed(id): Observable<vetmed[]> {
    return this.httpClient.get<vetmed[]>('http://localhost:1999/api/fetch-vetmed/' + id)
      .pipe(
        tap(_ => console.log(`vetmed fetched: ${id}`)),
        catchError(this.handleError<vetmed[]>(`Get vetmed id=${id}`))
      );
  }

  getVetmeds(): Observable<vetmed[]> {
    return this.httpClient.get<vetmed[]>('http://localhost:1999/api')
      .pipe(
        tap(vetmeds => console.log('vetmed retrieved!')),
        catchError(this.handleError<vetmed[]>('Get vetdocs', []))
      );
  }

  updateVetmed(id, vetmed: vetmed): Observable<any> {
    return this.httpClient.put('http://localhost:1999/api/update-vetmed/' + id, vetmed, this.httpOptions)
      .pipe(
        tap(_ => console.log(`vetmed updated: ${id}`)),
        catchError(this.handleError<vetmed[]>('Update vetmed'))
      );
  }

  deletevetmed(id): Observable<vetmed[]> {
    return this.httpClient.delete<vetmed[]>('http://localhost:1999/api/delete-vetmed/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`vetmed deleted: ${id}`)),
        catchError(this.handleError<vetmed[]>('Delete vetmed'))
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
