import { Component } from '@angular/core';
import { Job } from './job';
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
  jobs:Job[] = [
    new Job("Schoening Technology Group under contract for Luoxottica", "Technical Support Cordniator", "Cincinnati, Oh", '2022-9', '2023-6', ['Responsible for providing support for over 5000 luxottica sites', 
    'Troubleshot various pieces of in-store technology: Oracle Xstore POS Systems, store networks/internet connectivity, telecommunications equipment, computer hardware / peripherals, internally and externally developed applications',
    'Correctly recorded all incidents into ticketing system', 'Gathered and processed users’ information via verbal communication and screen viewer software to properly resolve or escalate user issues',
    'Successfully educated users on fixes and workarounds or set expectations for escalated issues']),
    new Job("Startek", "Technical Support Representative", "Hamilton, Oh", '2019-1', '2022-8', [])
  ];
  url: string = '/assets/skills.json';
  skills:any;
  education:Education[] = [];
  constructor(private http: HttpClient,
    private resumeSvc: ResumeService) {}
  ngOnInit() {
    this.resumeSvc.getSkills().subscribe(
      res => {
        this.skills = Object.keys(res).map(a=>res[a]);
        console.log(this.skills);
        for(let s of this.skills) {
          this.skills = s;
        }
      }
    );
    this.resumeSvc.getEducation().subscribe(
      {
        next: (res) => {
          this.education = res;
          console.debug(this.education);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }
}
