import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Vetdoc {
  _id: number;
  sno: number;
  nameoftheofficer: string;
  designation: string;
  contact: number;
  postaladdresswith: string;
  fees:number;

}

@Injectable({
  providedIn: 'root'
})

export class VetdocService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createVetdoc(vetdoc: Vetdoc): Observable<any> {
    return this.httpClient.post<Vetdoc>('http://localhost:9999/api/create-vetdoc', vetdoc, this.httpOptions)
      .pipe(
        catchError(this.handleError<Vetdoc>('Error occured'))
      );
  }

  getVetdoc(id): Observable<Vetdoc[]> {
    return this.httpClient.get<Vetdoc[]>('http://localhost:9999/api/fetch-vetdoc/' + id)
      .pipe(
        tap(_ => console.log(`vetdoc fetched: ${id}`)),
        catchError(this.handleError<Vetdoc[]>(`Get vetdoc id=${id}`))
      );
  }


  getVetdocs(): Observable<Vetdoc[]> {
    return this.httpClient.get<Vetdoc[]>('http://localhost:9999/api')
      .pipe(
        tap(vetdocs => console.log('vetdoc retrieved!')),
        catchError(this.handleError<Vetdoc[]>('Get vetdocs', []))
      );
  }

  updateVetdoc(id, vetdoc: Vetdoc): Observable<any> {
    return this.httpClient.put('http://localhost:9999/api/update-vetdoc/' + id, vetdoc, this.httpOptions)
      .pipe(
        tap(_ => console.log(`vetdoc updated: ${id}`)),
        catchError(this.handleError<Vetdoc[]>('Update vetdoc'))
      );
  }

  deleteVetdoc(id): Observable<Vetdoc[]> {
    return this.httpClient.delete<Vetdoc[]>('http://localhost:9999/api/delete-vetdoc/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`vetdoc deleted: ${id}`)),
        catchError(this.handleError<Vetdoc[]>('Delete vetdoc'))
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
