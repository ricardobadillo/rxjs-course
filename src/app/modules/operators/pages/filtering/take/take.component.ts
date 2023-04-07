// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Sirve para limitar la cantidad de emisiones que un observable puede tener.',
    title: 'Take',
  };

  take_code: string = `
    import { from, pipe, take } from 'rxjs';
     
    const source = from([1, 2, 3, 4, 5])
      .pipe(take(3))
      .subscribe({
        next: value => console.log(value), // 1, 2, 3.
        complete: () => console.log('Completado')
      });
  `;
}