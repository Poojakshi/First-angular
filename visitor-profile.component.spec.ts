import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorProfileComponent } from './visitor-profile.component';

describe('VisitorProfileComponent', () => {
  let component: VisitorProfileComponent;
  let fixture: ComponentFixture<VisitorProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorProfileComponent]
    });
    fixture = TestBed.createComponent(VisitorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
