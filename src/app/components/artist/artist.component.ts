import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  loading: boolean;
  tracks: any = [];

  constructor(private aR: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.aR.params.subscribe((params) => {
    this.getArtist(params["id"]);
    this.getTopTracks(params["id"]);
      // console.log(params);
      // this.spotify.routerArtist(params['id']).subscribe(data => {
      //   this.artista = data;
      //   this.loading = false;
      // })
    })
   }
    
   getTopTracks(id) {
    this.spotify.getTopTracks(id).subscribe(data =>{
      this.tracks = data;
      console.log(this.tracks);
      
    })
   }

   getArtist(id){
    this.spotify.routerArtist(id).subscribe(data => {
    this.artista = data;
    this.loading= false
    console.log(this.artista.images);
    
    })
   }

  ngOnInit(): void {
  }

}
