import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  constructor(private apiService: ApiService) { }

  addBook(form: NgForm) {
    console.log(form.invalid)
    if (form.invalid) {
      return;
    }
    
    console.log(form.value);
    
    

    // this.apiService.addBook(title, author, genre, year, imageUrl, description).subscribe(data => {
    //   console.log('Book added successfully', data);
    // });
  }
}
