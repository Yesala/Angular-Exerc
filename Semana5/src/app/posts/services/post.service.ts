import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private baseUrl : string = 'https://jsonplaceholder.typicode.com'

  constructor(private http : HttpClient) { }

  getAll() : Observable<Post[]> {
    const url = `${this.baseUrl}/posts`
    return this.http.get<Post[]>(url)
  }

  getById(id: number) : Observable<Post>{
    const url = `${this.baseUrl}/posts/${id}`
    return this.http.get<Post>(url)

  }
}
