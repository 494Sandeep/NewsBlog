import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private auth: AuthService) { }
  getPost() {
    return this.http.get('http://localhost:3004/post');
  }
  postData(title, description, url) {
    const post = {
      name: 'unknown',
      title: title,
      Description: description,
      upvote: 0,
      downvote: 0,
      link: url
    }
    return this.http.post('http://localhost:3004/post', post, {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json'
      })
    });
  }
  postUser(username, email, password) {
    const post = {
      username: username,
      email: email,
      password: password
    }
    return this.http.post('http://localhost:3004/user', post, {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json'
      })
    });
  }
  changevote(blog, type) {
    let vote: any;
    vote = (type === 'upvote') ? { 'upvote': ++blog.upvote } : { 'downvote': ++blog.downvote };
    return this.http.patch(`http://localhost:3004/post/${blog.id}`, vote, {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json'
      })
    });
  }
  getUser(username, password) {
    const users = this.http.get('http://localhost:3004/user');
    let isloggIn = false;
    users.forEach(user => {
      for (let i = 0; i <= user; i++) {
        if (user[i].username === username && user[i].password === password) {
          console.log('user found')
          isloggIn = true;
          this.auth.isUserLogin(isloggIn, user);
          return user;
        }
      }
    })
    return users;
  }
}