import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from "./home/home.component";
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from "./user/register/register.component";
import { ErrorComponent } from "./error/error.component";
import { AddBookComponent } from "./book/add-book/add-book.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AddBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';

}
