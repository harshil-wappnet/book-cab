import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Here you can handle the form submission,
    // e.g., call an authentication service
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
