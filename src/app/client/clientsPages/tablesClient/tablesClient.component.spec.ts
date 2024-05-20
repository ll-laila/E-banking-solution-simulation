import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesClientComponent } from './tablesClient.component';

describe('TablesComponent', () => {
  let component: TablesClientComponent;
  let fixture: ComponentFixture<TablesClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
