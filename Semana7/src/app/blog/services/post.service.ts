import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly API_URL = environment.api
  constructor(private readonly http : HttpClient) { }

  findAll(): Observable<Post[]>{
    return this.http.get<Post[]>(this.API_URL)
  }

  findById(id : number): Observable<Post> {
    return this.http.get<Post>(`${this.API_URL}/${id}`)
  }

  create(post : Post): Observable<Post> {
    const body = { title: post.title, body: post.body, userId: 1 }
    return this.http.post<Post>(this.API_URL, body)
  }

  update(post: Post): Observable<void> {
    const body = { title: post.title, body: post.body, userId: 1 }
    return this.http.post<void>(`${this.API_URL}/${post._id}`, body)
  }

  delete(id: string) : Observable<void>{
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }


}
