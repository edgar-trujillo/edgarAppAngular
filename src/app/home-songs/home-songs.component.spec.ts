import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSongsComponent } from './home-songs.component';

describe('HomeSongsComponent', () => {
  let component: HomeSongsComponent;
  let fixture: ComponentFixture<HomeSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
