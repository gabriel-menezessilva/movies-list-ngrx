import { Movie } from './../models/movie.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as MoviePageActions from './movie.actions';

export const initialState: Movie[] = []

const movieReducer = createReducer(
    initialState,
    on(MoviePageActions.loadMovies, (state) => ([...state])),
    on(MoviePageActions.moviesLoaded, (state, { payload }) => ([...payload]))
)

export function reducer(state: Movie[] | undefined, action: Action) {
    return movieReducer(state, action)
}