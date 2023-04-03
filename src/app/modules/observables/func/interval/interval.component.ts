// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {

  listContent: string[] = [
    '💡 Son asíncronos por naturaleza.',
    '❗ El periodo por defecto es 0.',
    '❗ Aunque se cancele la subscripción, el intervalo seguirá corriendo.',
  ];

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Es un observable que trabaja con intervalos de tiempo. Básicamente, es un observable que emite una secuencia de número en un intervalo de tiempo determinado.',
    title: 'Interval',
  } 

  interval_code: string = `
    import { interval } from 'rxjs';

    const observer = {
      next: value => console.log('Next:', value),
      complete: () => console.log('Completado'),
    };
    
    const interval$ = interval(1000);

    // Emite 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ... (cada segundo)
    interval$.subscribe(observer);
  `
}