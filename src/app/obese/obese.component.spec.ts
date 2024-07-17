import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObeseComponent } from './obese.component';

describe('ObeseComponent', () => {
  let component: ObeseComponent;
  let fixture: ComponentFixture<ObeseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObeseComponent]
    });
    fixture = TestBed.createComponent(ObeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
