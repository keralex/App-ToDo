export class Task {
    id:number;
    tittle:string='';
    complete:boolean=false;


    constructor(values:Object={}){
        Object.assign(this,values);
    }
}


