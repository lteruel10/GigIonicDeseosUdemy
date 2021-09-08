import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  public listas: Lista[]=[];


  constructor() {//bob
    console.log("Se inicio el servicio!");
   // const lista1=new Lista('Recolectar piedras del infinto');
   // const lista2=new Lista('Heroes a eliminar');
   // this.listas.push(lista1,lista2)
   // console.log(this.listas);
    this.cargarStorage();
  }

  crearLista(titulo:string){
    const nuevaLista=new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
    console.log(this.listas);
  }
  
  cargarStorage(  ){

    if (localStorage.getItem('data')){
      this.listas=JSON.parse( localStorage.getItem('data'));
    }else{
      this.listas=[] ;
    }

  }

}
