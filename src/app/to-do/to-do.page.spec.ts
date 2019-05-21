import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoPage } from './to-do.page';

describe('ToDoPage', () => {
  let component: ToDoPage;
  let fixture: ComponentFixture<ToDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
