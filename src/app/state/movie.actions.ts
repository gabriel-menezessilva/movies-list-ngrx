import { Movie } from './../models/movie.model';
import { createAction, props } from "@ngrx/store";

export const loadMovies = createAction('[Movies Page] Load Movies');
export const moviesLoaded = createAction('[Movies API] Movies Loaded Success', props<{payload: Movie[]}>());