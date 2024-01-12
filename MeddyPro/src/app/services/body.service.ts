import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Bc {
  _id: number;
  imgurl: string;
  name: string;
  qty: string;
  price: string;

 }

@Injectable({
  providedIn: 'root'
})

export class BodyService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createBc(bc: Bc): Observable<any> {
    return this.httpClient.post<Bc>('http://localhost:5700/api/create-bc', bc, this.httpOptions)
      .pipe(
        catchError(this.handleError<Bc>('Error occured'))
      );
 }

  getBc(id): Observable<Bc[]> {
    return this.httpClient.get<Bc[]>('http://localhost:5700/api/fetch-bc/' + id)
      .pipe(
        tap(_ => console.log(`bc fetched: ${id}`)),
        catchError(this.handleError<Bc[]>(`Get bc id=${id}`))
      );
  }

  getBcs(): Observable<Bc[]> {
    return this.httpClient.get<Bc[]>('http://localhost:5700/api')
      .pipe(
        tap(bc => console.log('bc retrieved!')),
        catchError(this.handleError<Bc[]>('Get bcs', []))
      );
  }

  updateBc(id, bc: Bc): Observable<any> {
    return this.httpClient.put('http://localhost:5700/api/update-bc/' + id, bc, this.httpOptions)
      .pipe(
        tap(_ => console.log(`bc updated: ${id}`)),
        catchError(this.handleError<Bc[]>('Update hps'))
      );
  }

  deleteBc(id): Observable<Bc[]> {
    return this.httpClient.delete<Bc[]>('http://localhost:5700/api/delete-bc/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`bc deleted: ${id}`)),
        catchError(this.handleError<Bc[]>('Delete bcs'))
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
