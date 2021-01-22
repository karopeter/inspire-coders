import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFacilitatorComponent } from './create-facilitator.component';

describe('CreateFacilitatorComponent', () => {
  let component: CreateFacilitatorComponent;
  let fixture: ComponentFixture<CreateFacilitatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFacilitatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFacilitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
