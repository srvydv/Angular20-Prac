import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../model/posts.model';

@Injectable({
  providedIn: 'root',
})
export class ApiCall {
  private apiUrl: string = 'https://json-placeholder.mock.beeceptor.com';
  private typicodeApiUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  addPost(payload: Posts): Observable<Posts> {
    return this.http.post<Posts>(`${this.typicodeApiUrl}/posts`, payload);
  }
}
