# ionicDeseosUdemyGig

## REMUEVE ELEMENTOS DE ARREGLOS
en i empieza y 1 es la cantidad de items que desea borrar
    this.lista.items.splice(i,1)


# PIPES
* Sirven para trabajar la data pero tambiens e pueden usar como filtros * 

* * para que siempres se actualic e el navegador en el pipe tenemos que agregar
pure:false
cada vez que se iniecie el ciclo de refresco del navegador se buscara el pipe en cuestion
* ** filtro-completado.pipe.ts
@Pipe({
  name: 'filtroCompletado',
  pure:false/// aquie
})