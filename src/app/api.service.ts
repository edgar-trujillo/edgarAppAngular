import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://platzi-music-api.now.sh';

  constructor(private httpClient: HttpClient) {}

  public getSongs(band){
    return this.httpClient.get(`${this.apiURL}/search?type=track&q=${band}`);
}
}
