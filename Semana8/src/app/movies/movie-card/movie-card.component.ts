import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styles: [
  ]
})
export class MovieCardComponent {

  @Input() movie! : Movie

  poster(){
    return `https://image.tmdb.org/t/p/w185/${this.movie.poster_path}`
  }
}
