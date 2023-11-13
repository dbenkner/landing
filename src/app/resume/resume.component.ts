import { Component } from '@angular/core';
import { Job } from './job.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeService } from './resume.service';
import { Education } from './education.class';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styles: []
})
export class ResumeComponent {
  jobs:Job[] = [];
  url: string = '/assets/skills.json';
  skills:any;
  education:Education[] = [];
  constructor(private http: HttpClient,
    private resumeSvc: ResumeService) {}
  ngOnInit() {
    this.resumeSvc.getJsonData('skills').subscribe(
      res => {
        this.skills = Object.keys(res).map(a=>res[a]);
        console.log(this.skills);
        for(let s of this.skills) {
          this.skills = s;
        }
      }
    );
    this.resumeSvc.getJsonData('education').subscribe(
      {
        next: (res) => {
          this.education = res;
          console.debug(this.education);
        },
        error: (err) => {
          console.error(err);
        }
      }
    );
    this.resumeSvc.getJsonData('jobs').subscribe(
      {
        next: (res) => {
          console.debug(res);
          this.jobs = res;
          console.debug(this.jobs);
        }
      }
    )
  }
}
