import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  });
  err: string;
  processing = false;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (!this.loginForm.valid) {
      this.err = 'All fields are required!';
      return;
    }
    this.err = '';
    this.processing = true;
    this.auth.login(
      this.loginForm.get('name').value,
      this.loginForm.get('pass').value,
      (status, error) => {
        this.processing = false;
        if (status === 401) {
          this.err = 'Username or password is wrong!';
        } else if (status !== 200) {
          this.err = 'Failed to process login request! See details in console.';
          console.log(`(${status}) ${error}`);
        } else {
          const path = this.auth.redirectUrl ? this.auth.redirectUrl : '';
          this.router.navigate([path]);
        }
      });
  }

  isDisabled(): boolean {
    return this.processing || !this.loginForm.valid;
  }

}
