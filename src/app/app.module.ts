import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieService } from './services/movie.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
