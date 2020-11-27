import { Component, OnInit } from '@angular/core';

// Para hacer peticiones HTTP
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // paises: any = [];
  // this.http.get('https://restcountries.eu/rest/v2/region/europe').subscribe((data)=>{
  //   console.log(data);
  //   this.paises = data;
  // });

  error: boolean;
  releases: any = [];
  loading: boolean;
  mensajeErors: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) =>{
      // console.log(data);
      this.releases = data;
      this.loading = false;
    }, (errorServicio => {
      this.loading = false;
      this.error = true;
      this.mensajeErors = errorServicio.error.error.message;
    }));
  }

  ngOnInit(): void {
  }

}
