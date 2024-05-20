import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAdminComponent } from './mapsAdmin.component';

describe('MapsComponent', () => {
  let component: MapsAdminComponent;
  let fixture: ComponentFixture<MapsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
