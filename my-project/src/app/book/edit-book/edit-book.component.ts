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
    if (form.valid) {
      const updatedData = {
        title: this.book.title,
        author: this.book.author,
        genre: this.book.genre,
        year: this.book.year,
        imageUrl: this.book.imageUrl,
        description: this.book.description
    };

      // this.apiService.updateBook(this.book._id, updatedData).subscribe(
        
      //       response => {
      //           // console.log('Book updated successfully!', response);
      //           // this.router.navigate(['/book-details', this.book._id]);
      //       },
      //       error => {
      //         console.log(updatedData);
      //           console.error('Error updating book', error);

      //       }
      //   );
    }
  }
}
