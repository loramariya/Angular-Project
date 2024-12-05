import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Book } from '../../types/book';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [RouterLink,LoaderComponent,SlicePipe],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit{
  books: Book[] = [];
  isLoading = true;

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  constructor(private apiService: ApiService, private userService: UserService) {}

  ngOnInit(): void{
    this.apiService.getBooks().subscribe(books => {
      this.books = books;
      this.isLoading = false;
    });
  }
}
