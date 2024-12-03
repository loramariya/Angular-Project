import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit{
  books: Book[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void{
    this.apiService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
}
