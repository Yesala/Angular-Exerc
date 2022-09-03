import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styles: [
  ]
})
export class PostDetailComponent implements OnInit {

  post! : Post

  constructor(private activateRoute : ActivatedRoute, private postService : PostService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe ( ({id}) =>{
      this.postService.getById(id)
        .subscribe(post => this.post = post)
    } )

  }
}
