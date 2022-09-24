import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : Post[] = []

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.activatedRoute.snapshot.data['data']
  }

}
