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

  // getComments(){
  //   const {apiUrl} = environment;
  //   return this.http.get<Comment[]>(`${apiUrl}/comments`)
  // }
  getBooks() {
    return this.http.get<Book[]>(`/api/books`);
  }

  getBookById(id:string) {
    return this.http.get<Book>(`/api/books/${id}`);
  }

  addBook(title:string, author:string, genre:string, year:string, imageUrl: string, description: string){
    const payload = {title, author, genre, year: +year, imageUrl, description}
    return this.http.post<Book>(`/api/books`, payload);
  }

  updateBook(bookId:string, title:string, author:string, genre:string, year:string, imageUrl: string, description: string) {
    const payload = {title, author, genre, year: +year, imageUrl, description}
    return this.http.put<Book>(`/api/books/${bookId}`, payload);
  }

  deleteBook(bookId: string) {
    return this.http.delete(`/api/books/${bookId}`);  
  }
}
