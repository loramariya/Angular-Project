import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/book';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  book = {} as Book;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['bookId'];

    this.apiService.getBookById(id).subscribe(book => {
      console.log(book);
      
      this.book = book;
    })
  }
}
