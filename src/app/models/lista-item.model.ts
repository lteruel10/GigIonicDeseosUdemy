import { typeWithParameters } from "@angular/compiler/src/render3/util";

export class ListaItem{

desc: string;
completado:boolean;

constructor(desc:string){
    this.desc=desc;
    this.completado=false;
}


}