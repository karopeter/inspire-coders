import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacilitatorComponent } from './edit-facilitator.component';

describe('EditFacilitatorComponent', () => {
  let component: EditFacilitatorComponent;
  let fixture: ComponentFixture<EditFacilitatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFacilitatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacilitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
