import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:5001/api/auth';  // your backend

  constructor(private http: HttpClient) {}

  sendEmailOTP(email: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/send-email-otp`, { email });
  }

  verifyEmailOTP(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/verify-email-otp`, { email, otp });
  }
}
