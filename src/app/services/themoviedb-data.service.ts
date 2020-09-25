import { ThemoviedbRequestService } from './themoviedb-request.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThemoviedbdataService {
  baseUrl = 'https://api.themoviedb.org/3';
  constructor(
    private httpClient: HttpClient,
    private requestService: ThemoviedbRequestService
  ) {}

  getMovieDetails(url) {
    // let result = this.httpClient.get(url).toPromise();

    // result.then((data) =>{
    //   console.log(data);
    // });

    const observable = this.httpClient.get(url);
    observable.subscribe((result) => {
      return result;
    });
  }

  getMovieByID(id: number) {
    var self = this;

    let response = this.httpClient
      .get(this.requestService.requests.fetchNetflixOriginals)
      .toPromise();

    response.then((result) => {
      console.log('movie details by Id: ' + result);
    });
  }
}
