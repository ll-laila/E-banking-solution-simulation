import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientProComponent } from './dashboardClientPro.component';

describe('DashboardComponent', () => {
  let component: DashboardClientProComponent;
  let fixture: ComponentFixture<DashboardClientProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardClientProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardClientProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
