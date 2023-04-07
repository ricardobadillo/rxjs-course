// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent {
  
  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite crear una función acumuladora a las emisiones producidas por el observable. El resultado se obtiene cuando se procesa todo.',
    title: 'Reduce',
  };

  reduce_code: string = `
    import { interval } from 'rxjs';

    interval(1000).pipe(
      take(5),
      reduce((accumulator, currentValue) => accumulator + currentValue, 0)))
    ).subscribe({
      next: (value) => console.log(value), // 10
      complete: () => console.log('Se ha completado')
    });
  `;
}