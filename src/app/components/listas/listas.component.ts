import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.models';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
   @Input() terminada=true;
  constructor(
    public deseosService:DeseosService,
    private router:Router, 
    private  alertCtrl: AlertController) { }

  ngOnInit() {}

  seleccionarLista(lista:Lista){
    console.log(lista);
    // El curso lo tiene asi
    // if(this.terminada ){
    //   this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`)
    // }else{
    //   this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`)
    // }
    this.router.navigateByUrl(`/tabs/agregar/${lista.id}`)

  }
  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista)
  }

}
