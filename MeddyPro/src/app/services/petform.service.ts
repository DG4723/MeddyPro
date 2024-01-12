import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


export class Petform {
  name: string;
  contact: number;
  address: string;
  pet: string;
  date: Date;
  time: string;
  doc_id: number;
  status: string;
} 

@Injectable({
  providedIn: 'root'
})
export class PetformService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  createpetform(petform: Petform): Observable<any> {
    return this.httpClient.post<Petform>('http://localhost:1500/api/create-petform', petform, this.httpOptions)
      .pipe(
        catchError(this.handleError<Petform>('Error occured'))
      );
  }

  getpetform(id): Observable<Petform[]> {
    return this.httpClient.get<Petform[]>('http://localhost:1500/api/fetch-petform/' + id)
      .pipe(
        tap(_ => console.log(`petform fetched: ${id}`)),
        catchError(this.handleError<Petform[]>(`Get petform id=${id}`))
      );
  }

  getpetforms(): Observable<Petform[]> {
    return this.httpClient.get<Petform[]>('http://localhost:1500/api')
      .pipe(
        tap(petforms => console.log('petform retrieved!')),
        catchError(this.handleError<Petform[]>('Get petform', []))
      );
  }

  updatepetform(id, petform: Petform): Observable<any> {
    return this.httpClient.put('http://localhost:1500/api/update-petform/' + id, petform, this.httpOptions)
      .pipe(
        tap(_ => console.log(`petform updated: ${id}`)),
        catchError(this.handleError<Petform[]>('Update petform'))
      );
  }

  deletepetform(id): Observable<Petform[]> {
    return this.httpClient.delete<Petform[]>('http://localhost:1500/api/delete-petform/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`petform deleted: ${id}`)),
        catchError(this.handleError<Petform[]>('Delete petform'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } ;

}
