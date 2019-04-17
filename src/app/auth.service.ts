import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn:boolean = false;
  loginUser= ""; 
  constructor() { }

  isUserLogin(bol, user){
    this.isloggedIn = bol;
    this.loginUser = user.userName;
    console.log(this.isloggedIn, this.loginUser)
  }
}
