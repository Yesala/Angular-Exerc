import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MoviesModule { }
