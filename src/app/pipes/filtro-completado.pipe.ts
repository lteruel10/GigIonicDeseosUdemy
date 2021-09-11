import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.models';

@Pipe({
  name: 'filtroCompletado',
  pure:false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas:Lista[], completada:boolean =true): Lista[] {
    // listas.filter(lista => {
    //     return lista.terminada===completada;
    // }); en la siguiente linea aparece mas limpia y es lo mismo exacatamente
    return listas.filter(lista =>  lista.terminada===completada);
    
  }

}
