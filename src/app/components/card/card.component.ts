import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistComponent } from '../artist/artist.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  verArtist(item){
  console.log(item);
  let artistaId; 
  if(item.type === 'album') artistaId = item[0].id 
  else item.id;
  console.log(artistaId);
  this.Router.navigate('/artist', artistaId);
  
}
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

}
