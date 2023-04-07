// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite recibe valores mientras la condición se cumpla.',
    title: 'Take While',
  };

  take_while_code: string = `
    import { from, pipe, takeWhile } from 'rxjs';

    const source = from([1, 2, 3, 4, 5]);

    // Emite los valores mientras la condición se cumpla.

    source.pipe(
      takeWhile(value => value < 4)
    ).subscribe(console.log); // 1, 2, 3.

    /* 
      Para obtener el último valor que cumpla la condición: 
        Debe agregar el parámetro "inclusive".
    */

    source.pipe(
      takeWhile(value => value < 4, true)
    ).subscribe(console.log); // 1, 2, 3, 4.
  `;
}