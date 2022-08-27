// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html',
  styleUrls: ['./observers.component.scss']
})
export class ObserversComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: `
      Los observers son <span class="special">consumidores</span> de los valores entregados por un Observable.
              
      <br> <br>

      Los observers son solo objetos con tres devoluciones de llamada, una para cada tipo de 
      notificación que un Observable puede entregar.
    `,
    title: '¿Qué son los Observers?',
  };

  observer_code: string = `
  import { Observer } from 'rxjs';

  // Los observer suelen lucir de esta manera:
  
  const observer: Observer<any> = {
    next: 
      value => console.log('Next: ' + value),
    error: 
      error => console.error('Error: ' + error),
    complete: 
      () => console.log('Complete'),
  };
  `

  observer: string = `
    observable.subscribe(observer);
  `;

  first_form: string = `
    observable.subscribe(respuesta => {
      console.log(respuesta);
    });
  `;
  
  second_form: string = `
  
    observable.subscribe(
      value => console.log('Next':, value),
      error => console.warn('Error:', error),
      () => console.info('Completado')
    );
  `;
}
