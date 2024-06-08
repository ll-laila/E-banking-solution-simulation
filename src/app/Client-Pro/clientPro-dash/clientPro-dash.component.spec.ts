import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProDashComponent } from './clientPro-dash.component';

describe('AdminLayoutComponent', () => {
  let component: ClientProDashComponent;
  let fixture: ComponentFixture<ClientProDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
