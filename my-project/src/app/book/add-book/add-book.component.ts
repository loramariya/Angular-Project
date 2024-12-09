import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  constructor(private apiService: ApiService, private router: Router) { }

  addBook(form: NgForm) {

    if (form.invalid) {
      return;
    }
    
    const { title, author, genre, year, imageUrl, description } = form.value;
    

    this.apiService.addBook(title, author, genre, year, imageUrl, description).subscribe(() => {
     this.router.navigate(['/books']);
     });
  }
}
