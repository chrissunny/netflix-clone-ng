import { ThemoviedbdataService } from './../../services/themoviedb-data.service';
import { ActivatedRoute } from '@angular/router';
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
    private commonMethods: CommonMethodsService,
    private route: ActivatedRoute,
    private theMovieDbData: ThemoviedbdataService
  ) {}

  backDrop: string = '';

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('selectedMovieID');
    if (id != null) {
      this.getMovieDetails(parseInt(id));
      this.backDrop = this.route.snapshot.paramMap.get('backDrop');
    } else {
      this.getRandomMovieDetails();
    }
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

  getMovieDetails(id: number) {
    var self = this;

    let response = this.httpClient
      .get<Movies>(
        `${
          this.requestService.requests.fetchMovieByID
        }${id}${this.requestService.getapiKey()}`
      )
      .toPromise();

    response.then((result) => {
      let m = result;

      m.backdrop_path = self.requestService.baseImageUrl + self.backDrop;
      self.movie = self.commonMethods.getMovieName(m);
    });
  }

  truncate(str: string, n: number) {
    return this.commonMethods.truncate(str, n);
  }
}
