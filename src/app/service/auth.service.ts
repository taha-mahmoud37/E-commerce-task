import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { env } from '../../env/env';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  TOKEN_KEY: string = 'auth_token';
  isLoggedIn = signal<boolean>(!!this.getCookie(this.TOKEN_KEY));
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.httpClient
      .post(`${env.apiUrl}auth/login`, { username, password })
      .pipe(
        tap((response: any) => {
          this.setCookie(this.TOKEN_KEY, response?.token, 1);
          this.isLoggedIn.set(true);
        }),
        catchError((error: any) => {
          console.error('Login failed', error);
          return throwError(() => error);
        })
      );
  }

  setCookie(name: string, value: string, days: number = 7): void {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString();

    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=/`;
  }

  getCookie(name: string): string | null {
    const nameEQ = name + '=';

    const cookies = document.cookie.split('; ');

    for (const c of cookies) {
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length));
      }
    }

    return null;
  }

  deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    this.isLoggedIn.set(false);
  }

  // isLoggedIn(): boolean {
  //   return !!this.getCookie(this.TOKEN_KEY);
  // }

  logout(): void {
    this.deleteCookie(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
}
