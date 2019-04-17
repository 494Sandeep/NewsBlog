import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isloggedIn = false;
  loginUser = '';
  constructor(private auth: AuthService) {
    this.isloggedIn = this.auth.isloggedIn;
    if (this.auth.isloggedIn) {
      this.loginUser = 'Sandeep';
    }
  }
}