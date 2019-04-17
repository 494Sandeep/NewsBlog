import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { timeout } from 'q';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  value = {
    userName: '',
    isloggedIn: false
  }
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private data: DataService, private auth: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  loginFormSubmit(username, password) {
    if (this.loginForm.invalid) {
      return;
    }
    username = username.value;
    password = password.value;
    this.data.getUser(username, password).subscribe(
      data => {
        setTimeout(() => {
          console.log('New user added successful', data);
          location.href = '/';
        }, 1000);
      });
  }
  ngOnInit() {
  }
}
