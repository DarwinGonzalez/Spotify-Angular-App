import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC8j2qaCUUXjacwB5sicvYOrVTjarjRrJgEh3XzXvbgJM1dJ7OOqsuz6ROHZXcLK78aH-qKgQ_xVhbW6uI'
    });
    return this._http.get(url, { headers})
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map(data => data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=20`)
      .pipe( map(data => data['artists'].items ));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map(data => data['tracks']));
  }
}
