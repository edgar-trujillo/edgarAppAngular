import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChangeBandComponent } from '../change-band/change-band.component'

@Component({
  selector: 'app-home-songs',
  templateUrl: './home-songs.component.html',
  styleUrls: ['./home-songs.component.scss']
})
export class HomeSongsComponent implements OnInit {

  constructor(private apiService: ApiService){}

  songs = <any>[];
  songsBack = <any>[];
  search = '';
  band = 'queen';
  loading = false;

  ngOnInit() {
    this.loading = true;
    this.apiService.getSongs('queen').subscribe(
      data => {
        this.loading = false;
        this.songsBack = data['tracks']['items'];
        this.songs = data['tracks']['items'];
	  });
  }

  cambiarBandasParent(band) {
    this.loading = true;
    this.apiService.getSongs(band).subscribe(
      data => {
        this.loading = false;
        this.band = band;
        this.songsBack = data['tracks']['items'];
        this.songs = data['tracks']['items'];
	  });
  }

  onSearch(event) {
    this.search = event.target.value;
    let filterList = this.songsBack.filter((val) => {
      const splitSearch = this.search.split(' ');
      if (splitSearch[0] != '') {
        let banderaFilterArr = true;
        for (let i = 0; i < splitSearch.length; i++) {
          if (splitSearch[i] != '') {
            if (!val.name.toLowerCase().trim()
              .includes(splitSearch[i].toLowerCase().trim())) {
              banderaFilterArr = false;
            }
          }
        }
        return banderaFilterArr;
      } else {
        return true;
      }
    });
    this.songs = filterList;
  }

  ordenarAZ() {
    console.log('ordenar a z');
  }

  ordenarZA() {
    console.log('ordenar z a');
  }

}
