import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Hp {
  _id: number;
  imgurl: string;
  name: string;
  qty: string;
  price: string;

 }

@Injectable({
  providedIn: 'root'
})

export class HpService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createHp(hp: Hp): Observable<any> {
    return this.httpClient.post<Hp>('http://localhost:5010/api/create-hp', hp, this.httpOptions)
      .pipe(
        catchError(this.handleError<Hp>('Error occured'))
      );
 }

  getHp(id): Observable<Hp[]> {
    return this.httpClient.get<Hp[]>('http://localhost:5010/api/fetch-hp/' + id)
      .pipe(
        tap(_ => console.log(`hp fetched: ${id}`)),
        catchError(this.handleError<Hp[]>(`Get hp id=${id}`))
      );
  }

  getHps(): Observable<Hp[]> {
    return this.httpClient.get<Hp[]>('http://localhost:5010/api')
      .pipe(
        tap(hp => console.log('hp retrieved!')),
        catchError(this.handleError<Hp[]>('Get hps', []))
      );
  }

  updateHp(id, hp: Hp): Observable<any> {
    return this.httpClient.put('http://localhost:5010/api/update-hp/' + id, hp, this.httpOptions)
      .pipe(
        tap(_ => console.log(`hp updated: ${id}`)),
        catchError(this.handleError<Hp[]>('Update hps'))
      );
  }

  deleteHp(id): Observable<Hp[]> {
    return this.httpClient.delete<Hp[]>('http://localhost:5010/api/delete-hp/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`hp deleted: ${id}`)),
        catchError(this.handleError<Hp[]>('Delete hps'))
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
