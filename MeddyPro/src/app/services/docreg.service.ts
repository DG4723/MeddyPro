import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Docreg {
  name: string;
  age: number;
  gender: string;
  mobileno: string;
  city: string;
  state: string;
  user: string;
  specialist: string;
  stime: string;
  etime: string;
  user_id: number;
}

@Injectable({
  providedIn: 'root',
})
export class DocregService {


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private httpClient: HttpClient) { }


  createdocreg(docreg: Docreg): Observable<any> {
    return this.httpClient.post<Docreg>('http://localhost:7000/api/create-docreg', docreg, this.httpOptions)
      .pipe(
        catchError(this.handleError<Docreg>('Error occured'))
      );
  }

  getdocreg(id): Observable<Docreg[]> {
    return this.httpClient.get<Docreg[]>('http://localhost:7000/api/fetch-docreg/' + id)
      .pipe(
        tap(_ => console.log(`Docreg fetched: ${id}`)),
        catchError(this.handleError<Docreg[]>(`Get Docreg id=${id}`))
      );
  }

  getdocregs(): Observable<Docreg[]> {
    return this.httpClient.get<Docreg[]>('http://localhost:7000/api')
      .pipe(
        tap(docregs => console.log('Docreg retrieved!')),
        catchError(this.handleError<Docreg[]>('Get Docreg', []))
      );
  }

  updatedocreg(id, docreg: Docreg): Observable<any> {
    return this.httpClient.put('http://localhost:7000/api/update-docreg/' + id, docreg, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Docreg updated: ${id}`)),
        catchError(this.handleError<Docreg[]>('Update Docreg'))
      );
  }

  deletedocreg(id): Observable<Docreg[]> {
    return this.httpClient.delete<Docreg[]>('http://localhost:7000/api/delete-docreg/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Docreg deleted: ${id}`)),
        catchError(this.handleError<Docreg[]>('Delete Docreg'))
      );
  }

  getTotalCount(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:7000/api/total-count', this.httpOptions)
      .pipe(
        tap(_ => console.log('Total count fetched')),
        catchError(this.handleError<number>('Get total count'))
      );
  }

   checkUserCredentials(userData: { name: string; phoneNumber: string }): Observable<boolean> {
    // Assuming your API has an endpoint to check user credentials
    // Modify the URL and request payload according to your API design
    const credentialsCheckUrl = 'http://localhost:7000/api/check-user-credentials';

    return this.httpClient.post<any>(credentialsCheckUrl, userData, this.httpOptions)
      .pipe(
        tap((response: any) =>
          // Assuming the response contains a 'success' field indicating credentials match
           response.success === true
        ),
        catchError(this.handleError<any>('Check User Credentials'))
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
