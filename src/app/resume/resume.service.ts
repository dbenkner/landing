import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

    constructor(private http: HttpClient) {}
    
    getJson():Observable<any> {
      return this.http.get('/assets/skills.json') as Observable<any>;
    }
}
