import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-songs',
  templateUrl: './sort-songs.component.html',
  styleUrls: ['./sort-songs.component.scss']
})
export class SortSongsComponent implements OnInit {

  @Output() sortSong = new EventEmitter();
  ngOnInit() {
  }

  sortSongs(type) {
    this.sortSong.emit(type);
  }
}
