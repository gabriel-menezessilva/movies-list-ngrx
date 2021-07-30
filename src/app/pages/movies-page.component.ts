import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from './../models/movie.model';

@Component({
    template: `
    <li *ngFor="let movie of movies$ | async">
        {{ movie.name }}
    </li>
    `
})
export class MoviesPageComponent {
    movies$: Observable<Movie[]> = this.store.select(state => state.movies);

    moviesList = [];

    constructor(private store: Store<{ movies: Movie[] }>) { }

    ngOnInit() {
        this.store.dispatch({ type: '[Movies Page] Load Movies' });

        this.movies$.subscribe((items: any) => {
            this.moviesList = items;
            console.log(this.moviesList)
        })
    }
}