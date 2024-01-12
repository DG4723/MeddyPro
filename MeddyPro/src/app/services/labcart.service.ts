import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Labcart {
  _id: number;
  imgurl: string;
  name: string;
  qty: string;
  price: string;

 }

@Injectable({
  providedIn: 'root'
})
export class LabcartService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createLabcart(labcart: Labcart): Observable<any> {
    return this.httpClient.post<Labcart>('http://localhost:5500/api/create-labcart', labcart, this.httpOptions)
      .pipe(
        catchError(this.handleError<Labcart>('Error occured'))
      );
 }

  getLabcart(id): Observable<Labcart[]> {
    return this.httpClient.get<Labcart[]>('http://localhost:5500/api/fetch-labcart/' + id)
      .pipe(
        tap(_ => console.log(`labcart fetched: ${id}`)),
        catchError(this.handleError<Labcart[]>(`Get labcart id=${id}`))
      );
  }

  getLabcarts(): Observable<Labcart[]> {
    return this.httpClient.get<Labcart[]>('http://localhost:5500/api')
      .pipe(
        tap(hp => console.log('Labcart retrieved!')),
        catchError(this.handleError<Labcart[]>('Get labcarts', []))
      );
  }

  updateLabcart(id, labcart: Labcart): Observable<any> {
    return this.httpClient.put('http://localhost:5500/api/update-labcart/' + id, labcart, this.httpOptions)
      .pipe(
        tap(_ => console.log(`labcart updated: ${id}`)),
        catchError(this.handleError<Labcart[]>('Update labcart'))
      );
  }

  deleteLabcart(id): Observable<Labcart[]> {
    return this.httpClient.delete<Labcart[]>('http://localhost:5500/api/delete-labcart/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`labcart deleted: ${id}`)),
        catchError(this.handleError<Labcart[]>('Delete labcart'))
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

