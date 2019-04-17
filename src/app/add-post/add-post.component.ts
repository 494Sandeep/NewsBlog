import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent implements OnInit {
  messageForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  constructor(private formBuilder: FormBuilder, private data: DataService) {
    this.messageForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      Posturl: ['', Validators.required]
    });
  }

  onsubmit(title, description, Posturl) {
    console.log(this.messageForm);
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
    this.data.postData(title.value, description.value, Posturl.value).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        location.reload();
      });
  }

  ngOnInit() {
  }

  closeNav() {
    document.getElementById('addPost').style.width = '0';
    document.getElementById('body').style.transition = '0.6s linear';
    document.body.style.backgroundColor = 'white';
    document.getElementById('add').style.visibility = 'visible';
  }

}
