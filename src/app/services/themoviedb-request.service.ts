import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemoviedbRequestService {
  private apiKey = '6c4c4dde505f8c23a9079be33e088fcd';
  baseUrl = 'https://api.themoviedb.org/3';
  constructor() {}

  requests = {
    fetchTending: `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}&language=en-US`,
    fetchNetflixOriginals: `${this.baseUrl}/discover/tv?api_key=${this.apiKey}&with_networks=213`,
    fetchTopRated: `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-US`,
    fetchActionMovies: `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`,
    fetchComedyMovies: `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`,
    fetchHorrorMovies: `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=27`,
    fetchRomanceMovies: `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=10749`,
    fetchDocumentaries: `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`,
  };

  baseImageUrl = 'https://image.tmdb.org/t/p/original/';
}
