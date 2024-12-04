import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books-list/books-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ErrorComponent } from './error/error.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';

export const routes: Routes = [
    {path: '',  redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},

    {path: 'books',
        children:[
            {path: '', component: BooksListComponent},
            {path: ':bookId', component: BookDetailsComponent},
        ],
    }, 
    {path: 'add-book', component: AddBookComponent},
    
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404'},
];
