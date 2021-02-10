import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateForumComponent } from './create-forum.component';

describe('CreateForumComponent', () => {
  let component: CreateForumComponent;
  let fixture: ComponentFixture<CreateForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
