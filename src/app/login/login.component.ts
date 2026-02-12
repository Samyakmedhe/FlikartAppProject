import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showLoginForm: boolean = true; // Default value

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }
  userInput: string = '';  // ✅ Declare the variable

}
