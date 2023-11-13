export class Job {
    employer:string = "";
    title:string = "";
    location:string = "";
    dateStarted?:Date = new Date();
    dateEnded?:any;
    jobDuties:string[] = [];

    constructor(employer:string, title:string, location:string, dateStarted:string, dateEnded:any, jobDuties:string[]) {
        this.employer = employer;
        this.title = title;
        this.location = location;
        this.dateStarted = new Date(dateStarted);
        if(dateEnded == null) {
            this.dateEnded = null;
        }
        else {
            this.dateEnded = new Date(dateEnded);
        }
        this.jobDuties = jobDuties;
    }
}
