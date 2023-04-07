// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Recibe múltiples observables finitos como argumentos, una vez que terminan todos retorna un arreglo con el valor de cada uno de ellos.',
    title: 'Fork Join',
  };

  fork_join_code: string = `
    import { delay, forkJoin, from, interval, pipe } from 'rxjs';
    
    const source$ = from([1, 2, 3, 4, 5]);
    const interval$ = interval(1000).pipe(take(3));
    const letras$ = from(['a', 'b', 'c']).pipe(delay(3500));

    forkJoin(
      source$,
      interval$,
      letras$
    ).subscribe(console.log);


    // Resultado: [5, 2, "c"] luego de 3.5 segundos.
  `;
}