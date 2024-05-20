import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsClientComponent } from './iconsClient.component';

describe('IconsComponent', () => {
  let component: IconsClientComponent;
  let fixture: ComponentFixture<IconsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
