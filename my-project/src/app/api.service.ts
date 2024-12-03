import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Book } from './types/book';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(){
    const {apiUrl} = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts`)
  }
  getBooks() {
    const {apiUrl} = environment;
    return this.http.get<Book[]>(`${apiUrl}/books`);
  }
}
