export class Education {
    id: number = 0;
    instiution:string = "";
    study: string = "";
    dateStarted:Date = new Date();
    dateFinished?:Date;
    description:string = "";
}