import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'cm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private alert: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  get passwordField(): AbstractControl {
    return this.loginForm.controls.password;
  }

  get usernameField(): AbstractControl {
    return this.loginForm.controls.username;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe(
      token => {
        if (!token) {
          return;
        }
        localStorage.setItem('currentUser', JSON.stringify({ username, token }));
        this.router.navigate(['']);
      },
      err => {
        this.alert.error('Invalid username or password');
      }
    )
  }


  private createLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }

}
