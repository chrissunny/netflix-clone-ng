import { ThemoviedbRequestService } from './../../services/themoviedb-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public requestService: ThemoviedbRequestService) {}

  ngOnInit(): void {}
}
