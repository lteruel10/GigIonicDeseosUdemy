import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../models/lista.models';
import { DeseosService } from '../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService:DeseosService,
    private router:Router, 
    private  alertCtrl: AlertController) {
  }

//async conviete la funcion o metodo en una promesa
 async agregarLista(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      inputs: [
        {
          name:'titulo',
          type:'text',
          placeholder:'Nombre de la lista'
        }
      ],
      buttons: [{
        text:'Cancelar',
        role:'cancel',
        handler:()=>{//se dispara cuando presionamos cancelar o cierra la alerta
          console.log('presionó Cancelar');
        }
      },
        {
          text:'Crear',
          handler:(data)=>{
            console.log(data);  
            if (data.titulo.lenght===0){
              console.log("Nada");  

              return;
            }
            // si no es cero, tengo que crear la lista... vamos a servicios
           const listaId= this.deseosService.crearLista(data.titulo);
           console.log(data.titulo);

           this.router.navigateByUrl(`/tabs/agregar/${listaId}`)
        }

      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);

  }

  seleccionarLista(lista:Lista){
    //console.log(lista);
    this.router.navigateByUrl(`/tabs/agregar/${lista.id}`)

  }

}
