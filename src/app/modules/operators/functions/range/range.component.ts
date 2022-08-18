import { Component } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent {

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
}
