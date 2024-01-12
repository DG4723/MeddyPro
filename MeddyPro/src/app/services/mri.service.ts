import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Mri {
  _id: number;
  imgurl: string;
  name: string;
  qty: string;
  price: string;

 }

@Injectable({
  providedIn: 'root'
})
export class MriService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createMri(mri: Mri): Observable<any> {
    return this.httpClient.post<Mri>('http://localhost:5600/api/create-mri', mri, this.httpOptions)
      .pipe(
        catchError(this.handleError<Mri>('Error occured'))
      );
 }

  getMri(id): Observable<Mri[]> {
    return this.httpClient.get<Mri[]>('http://localhost:5600/api/fetch-mri/' + id)
      .pipe(
        tap(_ => console.log(`mri fetched: ${id}`)),
        catchError(this.handleError<Mri[]>(`Get mri id=${id}`))
      );
  }

  getMris(): Observable<Mri[]> {
    return this.httpClient.get<Mri[]>('http://localhost:5600/api')
      .pipe(
        tap(hp => console.log('mri retrieved!')),
        catchError(this.handleError<Mri[]>('Get mris', []))
      );
  }

  updateMri(id, mri: Mri): Observable<any> {
    return this.httpClient.put('http://localhost:5600/api/update-mri/' + id, mri, this.httpOptions)
      .pipe(
        tap(_ => console.log(`mri updated: ${id}`)),
        catchError(this.handleError<Mri[]>('Update mris'))
      );
  }

  deleteMri(id): Observable<Mri[]> {
    return this.httpClient.delete<Mri[]>('http://localhost:5600/api/delete-mri/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`mri deleted: ${id}`)),
        catchError(this.handleError<Mri[]>('Delete mris'))
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
