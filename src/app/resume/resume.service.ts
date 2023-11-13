import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from './education.class';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

    constructor(private http: HttpClient) {}
    
    getJsonData(data:string):Observable<any> {
      return this.http.get(`/assets/${data}.json`) as Observable<any>;
    }
}
