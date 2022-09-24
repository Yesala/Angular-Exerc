import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostService } from '../services/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<Post[]> {
  constructor(private readonly postService : PostService){}

  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<Post[]> {
          return this.postService.findAll()
  }
}
