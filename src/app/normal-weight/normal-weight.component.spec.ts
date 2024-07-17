import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalWeightComponent } from './normal-weight.component';

describe('NormalWeightComponent', () => {
  let component: NormalWeightComponent;
  let fixture: ComponentFixture<NormalWeightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalWeightComponent]
    });
    fixture = TestBed.createComponent(NormalWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
