import { CommonMethodsService } from './../../services/common-methods.service';
import { MovieSearchResult } from './../../models/movies-search-result';
import { Movies } from './../../models/movies';
import { ThemoviedbdataService } from './../../services/themoviedb-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  @Input('title')
  title;
  @Input('fetchUrl')
  fetchUrl;
  @Input('isLargeRow')
  isLargeRow: boolean = false;

  baseImageUrl = 'https://image.tmdb.org/t/p/original/';
  movies: Movies[] = [];

  constructor(
    private dataService: ThemoviedbdataService,
    private httpClient: HttpClient,
    private commonMethods: CommonMethodsService
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails() {
    var self = this;
    let response = this.httpClient
      .get<MovieSearchResult>(this.fetchUrl)
      .toPromise();

    response.then((data) => {
      self.movies = [];

      data.results.forEach(function (element) {
        let movie: Movies;
        movie = self.commonMethods.getMovieName(element);

        self.movies.push(movie);
      });
    });
  }
}
