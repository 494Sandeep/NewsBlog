import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { _ } from 'underscore';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  BlogPost: object;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getPost().subscribe(post => {
      this.BlogPost = post;
      this.BlogPost = _.sortBy(this.BlogPost, 'upvote');
      console.log('GET');
    });
  }
  show() {
    document.getElementById('addPost').style.width = '400px';
    document.body.style.backgroundColor = '#34465d13';
    document.getElementById('body').style.transition = '0.6s linear';
    document.getElementById('add').style.visibility = 'hidden';
  }
  changevote(post, type) {
    this.data.changevote(post, type).subscribe(
      data => {
        console.log('Patch Request is successful !');
        location.reload();
      });
  }
}
