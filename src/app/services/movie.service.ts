import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

    constructor(private http: Http) {
        console.log("Movie Service initializing...");
    }

    getMovies() {
        return this.http.get('https://swapi.co/api/films/')
            .map(response => response.json());
    }

    getMovieDetails(url: string): Observable<any> {
        return this.http.get(url)
            .map(response => response.json());
    }

}
