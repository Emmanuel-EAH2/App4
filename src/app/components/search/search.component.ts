import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  resultados: any = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  buscar(term){
    if(term === '') return this.resultados = [];
    this.loading = true;
    this.spotify.getArtist(term).subscribe((data: any) => {
      // console.log(data.artists.items);
      this.resultados = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}