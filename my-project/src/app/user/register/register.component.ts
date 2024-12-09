import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private userService:UserService, private router: Router) {}

  formData = {
    password: '',
    confirmPassword: '',
  };
  get passwordsMatch(): boolean {
    return this.formData.password === this.formData.confirmPassword;
  }
  register(form: NgForm){
    if(form.invalid){
      return;
    }
    const {username, email, password, confirmPassword} = form.value;

    this.userService.register(username!, email!, password!,confirmPassword!).subscribe(() =>{
      this.router.navigate(['/books']);

    })
    
  }
}
