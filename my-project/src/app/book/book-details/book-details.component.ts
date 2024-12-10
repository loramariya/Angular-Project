import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/book';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['bookId'];

    this.apiService.getBookById(id).subscribe(book => {      
      this.book = book;
    })
  }
  onEdit(): void {
    // Redirect to the edit page with the book ID
    this.router.navigate([`/books/${this.book._id}/edit`]);
  }
  onDelete(): void {
    this.apiService.deleteBook(this.book._id).subscribe(()=>{
      this.router.navigate(['/books']);
    }
  )
  }
}
