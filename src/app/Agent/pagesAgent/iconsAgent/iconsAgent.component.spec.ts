import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAgentComponent } from './iconsAgent.component';

describe('IconsComponent', () => {
  let component: IconsAgentComponent;
  let fixture: ComponentFixture<IconsAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
