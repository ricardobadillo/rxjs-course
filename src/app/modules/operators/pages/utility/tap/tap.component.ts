// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite ver como va fluyendo la información a través de nuestros observables. Permiten disparar efectos secundarios.',
    title: 'Tap',
  } 

  tap_code: string = `
    import { tap } from 'rxjs';

    const numeros$ = of(1,2,3,4,5);

    numeros$.pipe(
      tap(x => console.log('Antes: ', x)),
      map(val => val * 10),
      tap(x => console.log('Después: ', x))
      .subscribe(val => console.log('subs: ', val));
  `;
}