import { YoutubeApiResponse } from './../../models/youtubeApiResponse';
import { ThemoviedbRequestService } from './../../services/themoviedb-request.service';
import { CommonMethodsService } from './../../services/common-methods.service';
import { MovieSearchResult } from './../../models/movies-search-result';
import { Movies } from './../../models/movies';
import { ThemoviedbdataService } from './../../services/themoviedb-data.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
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

  player: YT.Player;
  videoId: string = '';

  constructor(
    private requestService: ThemoviedbRequestService,
    private httpClient: HttpClient,
    private commonMethods: CommonMethodsService
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  // Autoplay
  onReady(player) {
    this.player = player;
    this.player.playVideo();
  }

  // Loop
  onStateChange(event) {
    // console.log('player state', event.data);
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

  showVideo() {
    if (this.videoId != '') {
      return true;
    }
    return false;
  }

  movieSelected(movie: Movies) {
    if (this.videoId) {
      this.videoId = '';
    } else {
      this.getMovieTrailer(movie?.name);
    }
  }

  getMovieTrailer(name: string) {
    var self = this;
    let response = this.httpClient
      .get<YoutubeApiResponse>(this.requestService.getTrailerUrl(name))
      .toPromise();

    response.then((data) => {
      if (data.items.length > 0) {
        self.videoId = data.items[0].id.videoId;
      }
    });
  }
}
