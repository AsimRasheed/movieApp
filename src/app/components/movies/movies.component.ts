import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  title: string;
  movies;
  movie;
  people: string = "";
  planets: string = "";

  constructor(private movieService: MovieService) {
    this.movieService.getMovies()
      .subscribe(movies =>
        this.movies = movies.results
      );
  }


  ngOnInit() {
  }

  showDetail(url) {
    this.movieService.getMovieDetails(url)
      .subscribe(movie => {
        this.movie = movie;
        this.movie.characters.forEach(url => {
          this.getPeople(url);
        })
        this.movie.planets.forEach(url => {
          this.getPlanets(url);
        })
      })
  }

  getPeople(characterUrl) {
    this.movieService.getMovieDetails(characterUrl)
      .subscribe(char => {
        this.people += (this.people.length > 0)? ", " + char.name : char.name;
      })
  }

  getPlanets(planetUrl) {
    this.movieService.getMovieDetails(planetUrl)
      .subscribe(planet => {
        this.planets += (this.planets.length > 0 ) ? ", " +  planet.name :  planet.name;
      })      
  }

  disposeObjects() {
    this.movie = "";
    this.people = "";
    this.planets = "";
  }


}
