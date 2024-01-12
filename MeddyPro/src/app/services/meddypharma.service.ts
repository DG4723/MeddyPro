import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class MeddyPharma {
  _id: number;
  name: string;
  address: string;
  district: string;
  contact: number;
  email: string;
 }

@Injectable({
  providedIn: 'root'
})

export class MeddypharmaService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createMeddyPharma(meddypharma: MeddyPharma): Observable<any> {
    return this.httpClient.post<MeddyPharma>('http://localhost:5001/api/create-meddypharma', meddypharma, this.httpOptions)
      .pipe(
        catchError(this.handleError<MeddyPharma>('Error occured'))
      );
  }

  getMeddyPharma(id): Observable<MeddyPharma[]> {
    return this.httpClient.get<MeddyPharma[]>('http://localhost:5001/api/fetch-meddypharma/' + id)
      .pipe(
        tap(_ => console.log(`MeddyPharma fetched: ${id}`)),
        catchError(this.handleError<MeddyPharma[]>(`Get meddypharma id=${id}`))
      );
  }

  getMeddyPharmas(): Observable<MeddyPharma[]> {
    return this.httpClient.get<MeddyPharma[]>('http://localhost:5001/api')
      .pipe(
        tap(meddypharma => console.log('MeddyPharma retrieved!')),
        catchError(this.handleError<MeddyPharma[]>('Get pharmas', []))
      );
  }

  updateMeddyPharma(id, meddypharma: MeddyPharma): Observable<any> {
    return this.httpClient.put('http://localhost:5001/api/update-meddypharma/' + id, meddypharma, this.httpOptions)
      .pipe(
        tap(_ => console.log(`MeddyPharma updated: ${id}`)),
        catchError(this.handleError<MeddyPharma[]>('Update pharmas'))
      );
  }

  deleteMeddyPharma(id): Observable<MeddyPharma[]> {
    return this.httpClient.delete<MeddyPharma[]>('http://localhost:5001/api/delete-meddypharma/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`MeddyPharma deleted: ${id}`)),
        catchError(this.handleError<MeddyPharma[]>('Delete pharmas'))
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
