import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbynameComponent } from './findbyname.component';

describe('FindbynameComponent', () => {
  let component: FindbynameComponent;
  let fixture: ComponentFixture<FindbynameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindbynameComponent]
    });
    fixture = TestBed.createComponent(FindbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
