import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from '../models/lista-item.model';
import { Lista } from '../models/lista.models';
import { DeseosService } from '../services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista:Lista;
  nombreItem='';
  constructor(private deseosService:DeseosService,
    private route:ActivatedRoute) {
      const listaId=this.route.snapshot.paramMap.get('listaId');

      this.lista =this.deseosService.obtenerLista(listaId);
      //console.log(this.lista);
     }

  ngOnInit() {
  }

  agregarItem() {
    // validacion
    if(this.nombreItem.length===0){
      return;
    }
    const nuevoItem=new ListaItem(this.nombreItem);
    // insertar en la lista
    this.lista.items.push(nuevoItem);
    this.nombreItem='';
    this.deseosService.guardarStorage();
  }

  cambioCheck(item:ListaItem){
    // console.log(item);
    const pendientes=this.lista.items.filter(itemData => {
        return !itemData.completado;
    }).length
    // console.log({pendientes});

    if (pendientes===0){
      this.lista.terminadaEn=new Date();
      this.lista.terminada=true;
    }else{
      this.lista.terminadaEn=null;
      this.lista.terminada=false;
    }
     console.log('terminada',this.lista.terminadaEn);
     console.log(this.deseosService.listas);

    this.deseosService.guardarStorage();

  }
  borrar(i:number){
    this.lista.items.splice(i,1)
    this.deseosService.guardarStorage();//para hacer persistente el cambio
 }
 borrarTodo(){
    const x=this.lista.items.length;
    this.lista.items.splice(0,x)
    this.deseosService.guardarStorage();//para hacer persistente el cambio


 }

}
