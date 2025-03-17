import {Component} from '@angular/core';
import {ApiService} from './services/api.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root', imports: [NgForOf], templateUrl: './app.component.html', styleUrl: './app.component.scss'
})
export class AppComponent {
  posts: any = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log('API Response:', this.posts);
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  }
}
