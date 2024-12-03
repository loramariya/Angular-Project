import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../types/book';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit{
  books: Book[] = [];
  isLoading = true;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void{
    this.apiService.getBooks().subscribe(books => {
      this.books = books;
      this.isLoading = false;
    });
  }
}
