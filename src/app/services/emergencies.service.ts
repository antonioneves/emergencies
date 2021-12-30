import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Emergency } from '../models/emergency.model';

@Injectable({
  providedIn: 'root',
})
export class EmergenciesService {
  constructor(private http: HttpClient) {}

  public getEmergencies(): Observable<Emergency[]> {
    return this.http
      .get<any>('/getAllEmergencies')
      .pipe(map((data) => data.content));
  }
}
