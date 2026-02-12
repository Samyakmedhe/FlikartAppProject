import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userInput: string = '';
  otp: string = '';
  otpSent: boolean = false;
  message: string = '';

  BASE_URL = 'http://localhost:5001/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  // =====================
  // SEND OTP
  // =====================
  sendOTP() {
    if (!this.userInput) {
      this.message = "Please enter Email";
      return;
    }

    this.http.post(`${this.BASE_URL}/send-email-otp`, {
      email: this.userInput
    }).subscribe({
      next: (res: any) => {
        this.otpSent = true;
        this.message = "OTP Sent Successfully!";
      },
      error: () => {
        this.message = "Failed to send OTP. Check backend.";
      }
    });
  }

  // =====================
  // VERIFY OTP
  // =====================
  verifyOTP() {
    if (!this.otp) {
      this.message = "Please enter OTP";
      return;
    }

    this.http.post(`${this.BASE_URL}/verify-email-otp`, {
      email: this.userInput,
      otp: this.otp
    }).subscribe({
      next: (res: any) => {
        this.message = "Login Successful! Redirecting...";
        
        // Redirect after 1 sec
        setTimeout(() => {
          this.router.navigate(['']); // <--- GO TO NAVBAR COMPONENT
        }, 1000);
      },
      error: () => {
        this.message = "Invalid OTP. Try again.";
      }
    });
  }
}