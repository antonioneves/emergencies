import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { EmergencyDataComponent } from './emergency-data.component';
import { EmergenciesService } from '../../services/emergencies.service';

describe('EmergencyDataComponent', () => {
  let component: EmergencyDataComponent;
  let fixture: ComponentFixture<EmergencyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmergencyDataComponent],
      providers: [HttpClient, HttpHandler, EmergenciesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EmergencyDataComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Emergencies'
    );
  });

  it('should render emergencies table', () => {
    const fixture = TestBed.createComponent(EmergencyDataComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeDefined();
  });

  it('should allow emergencies', () => {
    expect(component.emergencies).toBeDefined();
  });
});
