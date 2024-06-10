import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileClientProComponent } from './profileClientPro.component';

describe('UserProfileComponent', () => {
  let component: ProfileClientProComponent;
  let fixture: ComponentFixture<ProfileClientProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileClientProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileClientProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
