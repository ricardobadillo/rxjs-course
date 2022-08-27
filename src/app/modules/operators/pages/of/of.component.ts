// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {

  listContent: string[] = [
    '❗ Es síncrono.',
    '❗ Retorna un Observable que emite los argumentos descritos anteriormente y luego se completa.',
    '❗ Emite tantas veces como elementos tenga separados por coma.',
    '😥 Quedó deprecado en la versión 8 de RxJS.',
  ];

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    isList: false,
    text: 'Permite crear observables en base de un listado de elementos.',
    title: 'Of',
  } 

  cardStyle = {
    'margin-bottom': '1rem',
    'padding-top': '2rem',
    'width': '400px'
  };

  headerStyle = {
    'font-size': '1.25rem',
    'text-align': 'center'
  };

  imageStyle = {
    'display': 'flex',
    'height': '100px',
    'margin': '0 auto',
    'width': '100px'
  };

  of_code: string = `
    import { of } from 'rxjs';

    of(10, 20, 30).subscribe({
      next: value => console.log('Next:', value),
      error: err => console.log('Error:', err),
      complete: () => console.log('Completado'),
    });
    
    // Outputs: 

    // Next: 10
    // Next: 20
    // Next: 30
  `

  async_scheduler_code = `
  import { range, asyncScheduler } from 'rxjs';
import { DescriptionCard } from '../../../../core/models/description-card';

  const source$ = range(1, 5, asyncScheduler);

  console.log('Inicio');
  source$.subscribe(console.log);
  console.log('Fin)';
  
  // Outputs:

  // Inicio
  // Fin
  // 1
  // 2
  // 3
  // 4
  // 5
  `;
}
