import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from './education.class';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

    constructor(private http: HttpClient) {}
    
    getSkills():Observable<any> {
      return this.http.get('/assets/skills.json') as Observable<any>;
    }
    getEducation():Observable<Education[]> {
      return this.http.get('/assets/education.json') as Observable<Education[]>;
    }
}
