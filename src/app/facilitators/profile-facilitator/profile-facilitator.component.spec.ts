import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFacilitatorComponent } from './profile-facilitator.component';

describe('ProfileFacilitatorComponent', () => {
  let component: ProfileFacilitatorComponent;
  let fixture: ComponentFixture<ProfileFacilitatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFacilitatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFacilitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
