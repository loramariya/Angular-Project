import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService:UserService, private router: Router) {}
  login(event:Event, emailValue:string, passwordValue:string){
    event.preventDefault();

    this.userService.login();
    this.router.navigate(['/home']);
    // //(emailValue, passwordValue).subscribe(() => {
    //   // Redirect to home page after successful login
    //   this.userService.isLoggedIn = true;
    // }, () => {
    //   // Handle login error
    //   console.error('Login failed');
    // }); 
    
  }
}
