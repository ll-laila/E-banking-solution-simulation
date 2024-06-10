import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarClientProComponent } from './sidebarClientPro.component';

describe('SidebarComponent', () => {
  let component: SidebarClientProComponent;
  let fixture: ComponentFixture<SidebarClientProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarClientProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarClientProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
