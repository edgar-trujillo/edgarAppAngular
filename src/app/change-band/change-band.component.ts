import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-band',
  templateUrl: './change-band.component.html',
  styleUrls: ['./change-band.component.scss']
})
export class ChangeBandComponent implements OnInit {

  band = 'queen';
  @Output() cambiarBanda = new EventEmitter();
  ngOnInit() {
  }

  cambiarBandas(band) {
    if (this.band == band) {
      return;
    }
    this.cambiarBanda.emit(band);
    this.band = band;
  }

}
