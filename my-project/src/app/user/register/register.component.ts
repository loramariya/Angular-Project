import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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
  }
}
