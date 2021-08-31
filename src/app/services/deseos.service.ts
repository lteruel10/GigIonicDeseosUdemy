import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  public listas: Lista[]=[];


  constructor() {//bob
    console.log("Se inicio el servicio!");
    const lista1=new Lista('Recolectar piedras del infinto');
    const lista2=new Lista('Heroes a eliminar');
    this.listas.push(lista1,lista2)
    console.log(this.listas);

    
    

   }
}
