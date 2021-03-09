import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsAppComponent } from './programs-app.component';

describe('ProgramsAppComponent', () => {
  let component: ProgramsAppComponent;
  let fixture: ComponentFixture<ProgramsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
