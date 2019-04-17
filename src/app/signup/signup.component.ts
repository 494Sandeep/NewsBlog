import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private data: DataService) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      check: [false, Validators.required]
    })
  }

  signUpFormSubmit(username, email, password) {
    if (this.signUpForm.invalid) {
      return;
    }
    username = username.value;
    email = email.value;
    password = password.value;
    this.data.postUser(username, email, password).subscribe(
      data => {
        console.log("New user added successful ");
        location.href = '/login'
      });
  }
  ngOnInit() {
  }

}
