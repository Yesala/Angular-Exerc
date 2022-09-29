import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../interfaces/movies';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  // movies! : Movies
  movies : Movie[] = []

  constructor(private readonly moviesService : MoviesService) { }

  ngOnInit(): void {
    this.moviesService.findAll().subscribe(data => this.movies = data)
  }

}
