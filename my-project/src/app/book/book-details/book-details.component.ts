import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/book';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  book = {} as Book;

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['bookId'];

    this.apiService.getBookById(id).subscribe(book => {
      console.log(book);
      
      this.book = book;
    })
  }
}
