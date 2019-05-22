export class Task {
    id: number;
    tittle: string='';
    complete: boolean=false;


    constructor(id: number, tittle: string, complete: boolean){
        this.id = id;
        this.tittle = tittle;
        this.complete = complete;
    }
}


