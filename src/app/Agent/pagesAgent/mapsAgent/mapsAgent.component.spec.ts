import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAgentComponent } from './mapsAgent.component';

describe('MapsComponent', () => {
  let component: MapsAgentComponent;
  let fixture: ComponentFixture<MapsAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
