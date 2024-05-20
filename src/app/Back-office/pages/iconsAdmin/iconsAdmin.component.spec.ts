import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAdminComponent } from './iconsAdmin.component';

describe('IconsComponent', () => {
  let component: IconsAdminComponent;
  let fixture: ComponentFixture<IconsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
