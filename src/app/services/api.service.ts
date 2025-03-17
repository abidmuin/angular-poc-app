import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(`${this.apiUrl}/posts`);
  }
}
