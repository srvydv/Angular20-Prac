import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../model/posts.model';

@Injectable({
  providedIn: 'root',
})
export class ApiCall {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.apiUrl}/posts`);
  }

  addPost(payload: Posts): Observable<Posts> {
    return this.http.post<Posts>(`${this.apiUrl}/posts`, payload);
  }

  editPost(id: number, payload: Posts): Observable<Posts> {
    return this.http.put<Posts>(`${this.apiUrl}/posts/${id}`, payload);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${id}`);
  }
}
