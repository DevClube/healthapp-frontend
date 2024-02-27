// symptoms.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SymptomsService {


  apiUrl = 'assets/symptoms.json';

  constructor(private http: HttpClient) { }

  getSymptoms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
