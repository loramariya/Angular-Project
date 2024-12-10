import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../types/book';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit{
  book = {} as Book;
  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
   ){}
   
   ngOnInit(): void {
    const id = this.route.snapshot.params['bookId'];
    this.apiService.getBookById(id).subscribe(book => this.book = book);
 
    
  }
  
  editBook(form: NgForm): void{
   
    if (form.invalid) {
      return;
    }
    const bookId = this.book._id
    const { title, author, genre, year, imageUrl, description } = form.value;
    

    this.apiService.updateBook(bookId,title, author, genre, year, imageUrl, description).subscribe(
      () => {
      console.log(form.value)
     this.router.navigate([`/books/${bookId}`]);
     });
  }
}
