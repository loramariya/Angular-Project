import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { BooksListComponent } from '../books-list/books-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BooksListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
