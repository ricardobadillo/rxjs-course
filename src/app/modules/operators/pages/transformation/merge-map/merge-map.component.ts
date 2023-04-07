// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent {

  listContent: string[] = [
    '💡 La función interna no es más que un callback que retorna un observable.',
    '❗ No tiene límites de suscripciones internas.',
    '❗ Tiene que completarse todos los observables internos y el externo para que se ejecute el complete de la salida inicial.',
  ];

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite proyectar cada valor de distintos observables, los cuales se fusionan en el observable de salida.',
    title: 'Merge Map',
  } 

  merge_map_code: string = `
    import { from, interval, mergeMap, pipe, take } from 'rxjs';

    const letras$ = from(['a', 'b', 'c']);

    letras$.pipe(
      mergeMap(letra => interval(1000).pipe(
        map(i => letra + i),
        take(3)
      )
    )).subscribe({
      next: val => console.log(val),
      complete: () => console.log('Completado')
    });
    
    /*
      Resultado: Debe de emitir tres veces cada letra.
      a0, a1, a2, b0, b1, b2, c0, c1, c2.
    */


    // Ejemplo 2.
    import { fromEvent, interval, mergeMap, pipe, takeUntil } from 'rxjs';

    const mousedown$ = fromEvent(document, 'mousedown');
    const mouseup$ = fromEvent(document, 'mouseup');
    const interval$ = interval();

    // El mergeMap es un operador de aplanamiento. 
    // En vez de emitir un observable, emite los valores de ese observable
    
    mousedown$.pipe(
      mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
      ))
    ).subscribe(console.log);

    // Resultado: Emite un valor cada segundo mientras el mouse esté presionado.
  `;

  
  constructor() { }
}