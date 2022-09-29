import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, mergeMap, zip, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Movie } from '../interfaces/movie';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly API = environment.API

  constructor(private readonly http : HttpClient) { }

  // findAll(): Observable<Movies>{
  //   return this.http.get<Movies>(`${this.API}/top_rated?api_key=${environment.apiKey}`)
  // }
  // findAll(): Observable<Movies>{
  //   return this.http.get<Movies>(`${this.API}/top_rated`,{
  //     params: {
  //       'api_key': environment.apiKey
  //     }
  //   })
  // }

  findAll(): Observable<Movie[]>{
    return this.http.get<Movies>(`${this.API}/top_rated`,{
      params: {
        api_key: environment.apiKey
      }
    }).pipe(
      //tap(console.log),
      map<Movies, Movie[]>( resp => resp.results),
      //tap(console.log),
    )
  }

  findById(id: number){
    return this.http.get<Movie>(`${this.API}/${id}`, {
      params: {
        api_key: environment.apiKey
      }
    }).pipe(
      mergeMap( ( resp : Movie ) => zip(of(resp),
        this.http.get(`${this.API}/${id}/videos`, {
          params: {
            api_key: environment.apiKey
          }
        }))),
        tap(console.log),
        map( ([movie, videos]) => ({
          ...movie,
          video: `https://www.youtube.com/embed/${videos.results[0].key}?rel=0`
        })),
        // tap(console.log),
        )
  }
}
