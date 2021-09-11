import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//trae ngIf ngFor
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  //van las decaracions que utiliza el modulo propiamente
  declarations: [
    ListasComponent
  ],
  exports:[
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule, 
    PipesModule
  ]
})
export class ComponentsModule { }
