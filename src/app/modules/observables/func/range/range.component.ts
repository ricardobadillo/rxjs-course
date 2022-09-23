import { Component } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent {

  listContent: string[] = [
    '❗ Es síncrono.',
    '❗ Un observable de números que emite un rango finito de enteros secuenciales.',
    '❗ El operador de rango emite un rango de enteros secuenciales, en orden, donde selecciona el inicio del rango y su longitud.',
    `❗ El operador de rango emite un rango de enteros secuenciales, en orden, donde selecciona el inicio del rango y su longitud. 
    De manera predeterminada, no usa <span class="special">SchedulerLike</span> y solo entrega las notificaciones de forma sincrónica.
    Puede usar un SchedulerLike opcional para regular esas entregas.`,
    '👀 Por defecto tiene como valor inicial el 0.',
    '❗ Se puede transformar de manera asíncrona con un Async Scheduler.',
  ]

  cardStyle = {
    'margin-bottom': '1rem',
    'padding-top': '2rem',
    'width': '400px'
  };

  imageStyle = {
    'display': 'flex',
    'height': '100px',
    'margin': '0 auto',
    'width': '100px'
  };

  parameters = [
    { argument: 'start', type: 'number', description: 'El valor del primer entero de la secuencia.' },
    { argument: 'count', type: 'number', description: 'Opcional. El valor predeterminado es undefined. El número de enteros secuenciales a generar.' },
    { argument: 'scheduler', type: 'SchedulerLike', description: 'Opcional. El valor predeterminado es undefined. El SchedulerLike a utilizar para la programación de las emisiones de las notificaciones.' },
  ];

  range_code: string = `
    import { range } from 'rxjs';

    const numbers = range(1, 3);

    numbers.subscribe({
      next: value => console.log(value),
      complete: () => console.log('Completado');
    });

    // Output:
    // 1
    // 2
    // 3
    // Completado
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
