import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarClientProComponent } from './navbarClientPro.component';

describe('NavbarComponent', () => {
  let component: NavbarClientProComponent;
  let fixture: ComponentFixture<NavbarClientProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarClientProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarClientProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
