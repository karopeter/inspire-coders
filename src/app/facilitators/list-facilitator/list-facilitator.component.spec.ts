import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacilitatorComponent } from './list-facilitator.component';

describe('ListFacilitatorComponent', () => {
  let component: ListFacilitatorComponent;
  let fixture: ComponentFixture<ListFacilitatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFacilitatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFacilitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
