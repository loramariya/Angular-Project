import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Book } from './types/book';
import { Comment } from './types/comment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getComments(){
    const {apiUrl} = environment;
    return this.http.get<Comment[]>(`${apiUrl}/comments`)
  }
  getBooks() {
    const {apiUrl} = environment;
    return this.http.get<Book[]>(`${apiUrl}/books`);
  }

  getBookById(id:string) {
    const {apiUrl} = environment;
    return this.http.get<Book>(`${apiUrl}/books/${id}`);
  }
}
