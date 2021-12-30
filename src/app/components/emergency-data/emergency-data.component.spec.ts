import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyDataComponent } from './emergency-data.component';

describe('EmergencyDataComponent', () => {
  let component: EmergencyDataComponent;
  let fixture: ComponentFixture<EmergencyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
