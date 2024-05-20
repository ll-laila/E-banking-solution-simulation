import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesAgentComponent } from './tablesAgent.component';

describe('TablesComponent', () => {
  let component: TablesAgentComponent;
  let fixture: ComponentFixture<TablesAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
