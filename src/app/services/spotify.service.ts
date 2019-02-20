import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAkQghCcSvuDzlbYK0mA2ORCjvHN5pVF49XWihmyIlXUefSj0GKZnXj33blgoW-yYL8o3hGcocdrPCjgyU'
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
