import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesAdminComponent } from './tablesAdmin.component';

describe('TablesComponent', () => {
  let component: TablesAdminComponent;
  let fixture: ComponentFixture<TablesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
