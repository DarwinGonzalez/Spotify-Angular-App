import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private artists: any = [];
  public loading: boolean;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  find(term: string) {
    this.loading = true;
    this._spotifyService.getArtists(term).subscribe( data => {
      this.artists = data;
      this.loading = false;
    });
  }
}
