import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
LoginComponent
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule,LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
