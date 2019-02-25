import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  
  public artist: any = {};
  public topTracks: any = {};
  public loadingArtist: boolean;

  constructor(
    private _router: ActivatedRoute,
    private _spotifyService: SpotifyService
    ) {
      this.loadingArtist = true;
    this._router.params.subscribe( params => {
      console.log(params['id']);
      this.artist = this.getArtist(params['id']);
      this.topTracks = this.getTopTracks(params['id']);
      this.loadingArtist = false;
    });
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this.loadingArtist = true;
    this._spotifyService.getArtist(id)
      .subscribe(artist => {
        console.log(artist);
      });
  }

  getTopTracks(id: string) {
    this._spotifyService.getTopTracks(id)
      .subscribe( topTracks => {
        console.log(topTracks);
      });
  }
}
