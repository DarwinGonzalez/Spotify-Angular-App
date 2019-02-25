import { Component, OnInit } from "@angular/core";
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {

  public newReleases: any = [];
  public loading: boolean;
  public messageError: string;
  public errorFlag: boolean;

  constructor(private _spotifyService: SpotifyService) {
    this.loading = true;
    this._spotifyService.getNewReleases()
      .subscribe( data => {
        this.newReleases = data;
        this.loading = false;
      }, (error) => {
        this.errorFlag = true;
        this.messageError = error.error.error.message;
      });
  }

  ngOnInit() {}
}
