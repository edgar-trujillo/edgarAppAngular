import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-change-band',
  templateUrl: './change-band.component.html',
  styleUrls: ['./change-band.component.scss']
})
export class ChangeBandComponent implements OnInit {

  constructor(private apiService: ApiService){}

  @Output() cambiarBanda = new EventEmitter();
  ngOnInit() {
  }

  cambiarBandas(band) {
    this.cambiarBanda.emit(band);
  }

}
