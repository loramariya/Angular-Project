import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  constructor(private apiService: ApiService) { }

  addBook(event: Event,title: string, author: string, genre: string, year: string, imageUrl: string, description: string) {
    event.preventDefault();

    this.apiService.addBook(title, author, genre, year, imageUrl, description).subscribe(data => {
      console.log('Book added successfully', data);
    });
  }
}
