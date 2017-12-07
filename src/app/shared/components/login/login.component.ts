import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { AuthService } from '../../services/auth.service';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: Boolean = true;
  floatLabel = 'always';
  login: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]
      );
      this.password = new FormControl('', [
        Validators.required
      ]);
      this.login = new FormGroup({
        email: this.email,
        password: this.password
      });
  }

  isValidEmail() {
    return this.email.valid || this.email.untouched;
  }

  isValidPassword() {
    return this.password.valid || this.password.untouched;
  }

  onSubmit(values): void {
    if (this.login.valid) {
      console.log(values);
    }else {
      console.log('error');
    }
  }
}

