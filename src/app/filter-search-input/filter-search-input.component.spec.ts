import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchInputComponent } from './filter-search-input.component';

describe('FilterSearchInputComponent', () => {
  let component: FilterSearchInputComponent;
  let fixture: ComponentFixture<FilterSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
