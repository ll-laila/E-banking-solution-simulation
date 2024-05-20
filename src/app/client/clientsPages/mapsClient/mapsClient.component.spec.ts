import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsClientComponent } from './mapsClient.component';

describe('MapsComponent', () => {
  let component: MapsClientComponent;
  let fixture: ComponentFixture<MapsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
