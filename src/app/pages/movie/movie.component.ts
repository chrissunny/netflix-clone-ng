import { Movies } from './../../models/movies';
import { ThemoviedbRequestService } from './../../services/themoviedb-request.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeApiResponse } from 'src/app/models/youtubeApiResponse';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private requestService: ThemoviedbRequestService
  ) {}

  player: YT.Player;
  videoId: string = '';
  movieId: number = 0;

  movie: Movies;

  ngOnInit(): void {
    this.movieId = parseInt(
      this.route.snapshot.paramMap.get('selectedMovieID')
    );

    this.getMovieDetails(this.movieId);
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
      self.movie = result;
      self.movieSelected(result);
    });
  }

  movieSelected(movie: Movies) {
    this.getMovieTrailer(movie?.title);
  }

  getMovieTrailer(name: string) {
    var self = this;
    let response = this.httpClient
      .get<YoutubeApiResponse>(this.requestService.getTrailerUrl(name))
      .toPromise();

    response.then((data) => {
      if (data.items.length > 0) {
        let foundVideo = false;
        data.items.forEach(function (video) {
          if (!foundVideo && typeof video.id.videoId != 'undefined') {
            self.videoId = video.id.videoId;
            foundVideo = true;
          }
        });
      }
    });
  }

  // Autoplay
  onReady(player) {
    this.player = player;
    // this.player.playVideo();
  }

  // Loop
  onStateChange(event) {
    // console.log('player state', event.data);
  }

  showVideo() {
    if (this.videoId != '') {
      return true;
    }
    return false;
  }
}
