import { Component, OnInit } from '@angular/core';
import { EmergenciesService } from '../../services/emergencies.service';
import { Emergency } from '../../models/emergency.model';

@Component({
  selector: 'app-emergency-data',
  templateUrl: './emergency-data.component.html',
  styleUrls: ['./emergency-data.component.sass'],
})
export class EmergencyDataComponent implements OnInit {
  public emergencies: Emergency[] = [];

  constructor(private emergencyService: EmergenciesService) {}

  ngOnInit(): void {
    this.emergencyService
      .getEmergencies()
      .subscribe((emergencies: Emergency[]) => {
        this.emergencies = emergencies;
      });
  }
}
