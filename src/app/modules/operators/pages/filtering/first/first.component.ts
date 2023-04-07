// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite tomar el primer valor que emite un observable y lo completa. También puede tomar una condición deteniendo la emisión al encontrar el primer valor que cumpla dicha condición.',
    title: 'First',
  };

  first_code: string = `
    import { first, fromEvent, pipe } from 'rxjs';
      
    const clicks$ = fromEvent<MouseEvent>(document, 'click');

    // Emite el primer valor tras dar click.
    clicks$.pipe(first()).subscribe(console.log);

    // Emite el primer valor que cumpla la condición.
    clicks$
      .pipe(first<MouseEvent, MouseEvent>( event => event.clientY >= 150 ))
      .subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('Completado')
      });
  `;
}