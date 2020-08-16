import { Component, OnInit } from '@angular/core';
//import { ScrollDispatcher } from '@angular/cdk/scrolling';
// import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  handleShow: boolean = false;
  constructor() {
    // this.scrollDispatcher
    //   .scrolled()
    //   .subscribe((x) => console.log('I am scrolling '));
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.handleShow = true;
      } else {
        this.handleShow = false;
      }
    });
  }

  ngOnDestroy() {
    //window.removeEventListener("scroll", true);
  }
}
