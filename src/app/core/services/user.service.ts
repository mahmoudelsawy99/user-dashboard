import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';
  private cache: { [key: string]: Observable<any> } = {};

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    const url = `${this.baseUrl}?page=${page}`;
    if (!this.cache[url]) {
      this.cache[url] = this.http.get(url).pipe(
        map((res: any) => res),
        shareReplay(1),
        catchError(error => {
          delete this.cache[url];
          return of(error);
        })
      );
    }
    return this.cache[url];
  }

  getUserById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    if (!this.cache[url]) {
      this.cache[url] = this.http.get(url).pipe(
        map((res: any) => res.data),
        shareReplay(1),
        catchError(error => {
          delete this.cache[url];
          return of(error);
        })
      );
    }
    return this.cache[url];
  }
}
