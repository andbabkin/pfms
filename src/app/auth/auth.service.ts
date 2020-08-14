import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { BaseResponse } from '../core/response';

@Injectable()
export class AuthService {
  redirectUrl: string;
  private loggedIn = false;
  private token: string;

  constructor(private http: HttpService) { }

  login(name: string, pswd: string, callback: (status: number, error: string) => void) {
    this.loggedIn = false;
    this.http.post('auth/login', { name, pswd }).subscribe(
      (r: BaseResponse) => {
        let s = r.status;
        if (s === 200) {
          this.token = r.data.token;
          if (!this.token) {
            s = 401;
            this.token = '';
          }
        }
        callback(s, r.error);
      }
    );
  }

  isLoggedIn() {
    return !!(this.token);
  }

  getToken() {
    return this.token;
  }
}
