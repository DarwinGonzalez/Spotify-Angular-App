import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  seeArtist(item: any) {
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artist[0].id;
    }
    console.log(artistId);
    this._router.navigate([ '/artist', artistId ]);
  }

}
