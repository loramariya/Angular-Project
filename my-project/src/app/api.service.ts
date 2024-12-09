import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Book } from './types/book';
import { Comment } from './types/comment';
import { Observable } from 'rxjs';

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

  addBook(title:string, author:string, genre:string, year:string, imageUrl: string, description: string){
    const {apiUrl} = environment;
    const payload = {title, author, genre, year, imageUrl, description}
    return this.http.post<Book>(`${apiUrl}/books`, payload);
  }

  updateBook(bookId:string, updatedData: Partial<Book>): Observable<Book> {
    const {apiUrl} = environment;
    return this.http.put<Book>(`${apiUrl}/books/${bookId}`, updatedData); 
  }
}
