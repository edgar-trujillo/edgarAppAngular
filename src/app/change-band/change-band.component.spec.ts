import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBandComponent } from './change-band.component';

describe('ChangeBandComponent', () => {
  let component: ChangeBandComponent;
  let fixture: ComponentFixture<ChangeBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
