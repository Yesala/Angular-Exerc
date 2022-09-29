import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent implements OnInit {

  movie! : Movie
  videoSafeUrl! : SafeResourceUrl

  constructor(private activatedRoute : ActivatedRoute,
              private readonly moviesService : MoviesService,
              private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ id }) => {
      this.moviesService.findById(id).subscribe(
        movie => {
          this.movie = movie,
          this.videoSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(movie.video)
        }
      )
    })
  }

  poster(){
    return `https://image.tmdb.org/t/p/w185/${this.movie.poster_path}`
  }
}
