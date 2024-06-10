import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasactionClientProComponent } from './trasaction-agent.component';

describe('TrasactionClientProComponent', () => {
  let component: TrasactionClientProComponent;
  let fixture: ComponentFixture<TrasactionClientProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasactionClientProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrasactionClientProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
