import { Injectable } from '@angular/core';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class CommonMethodsService {
  constructor() {}

  getMovieName(movie: Movies) {
    if (typeof movie.original_title != 'undefined') {
      movie.name = movie.original_title;
    } else if (typeof movie.original_name != 'undefined') {
      movie.name = movie.original_name;
    }
    return movie;
  }

  getRandomNumber(num: number) {
    return Math.floor(Math.random() * num - 1);
  }

  truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
}
