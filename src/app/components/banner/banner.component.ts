import { ThemoviedbRequestService } from './../../services/themoviedb-request.service';
import { HttpClient } from '@angular/common/http';
import { MovieSearchResult } from './../../models/movies-search-result';
import { Component, OnInit } from '@angular/core';
import { Movies } from './../../models/movies';
import { CommonMethodsService } from 'src/app/services/common-methods.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  movie: Movies;

  constructor(
    private httpClient: HttpClient,
    private requestService: ThemoviedbRequestService,
    private commonMethods: CommonMethodsService
  ) {}

  ngOnInit(): void {
    this.getRandomMovieDetails();
  }

  getRandomMovieDetails() {
    var self = this;

    let response = this.httpClient
      .get<MovieSearchResult>(
        this.requestService.requests.fetchNetflixOriginals
      )
      .toPromise();

    response.then((result) => {
      let m =
        result.results[
          self.commonMethods.getRandomNumber(result.results.length)
        ];
      m.backdrop_path = self.requestService.baseImageUrl + m.backdrop_path;
      self.movie = self.commonMethods.getMovieName(m);
    });
  }

  truncate(str: string, n: number) {
    return this.commonMethods.truncate(str, n);
  }
}
