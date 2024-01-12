import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, from } from 'rxjs';
import { Storage } from '@capacitor/storage';

const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  token = '';

  private apiUrl = 'http://localhost:4000/api/login';

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  loginUser(userData: { name: string; phoneNumber: string }) {
	  return this.http.post<any>(this.apiUrl, userData);
	}

  async loadToken() {
		const token = await Storage.get({ key: TOKEN_KEY });
		if (token && token.value) {
			console.log('set token: ', token.value);
			this.token = token.value;
			this.isAuthenticated.next(true);
		} else {
			this.isAuthenticated.next(false);
		}
	}


  logout() {
    this.isAuthenticated.next(false);
    this.token = ''; // Clear token
    Storage.remove({ key: TOKEN_KEY });
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }
}
