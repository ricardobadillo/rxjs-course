// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent {

  ninjas = [
    { name: 'Naruto', type: 'ninja' },
    { name: 'Sasuke', type: 'ninja' },
    { name: 'Pain', type: 'villain' },
    { name: 'Obito', type: 'villain' },
    { name: 'Kakashi', type: 'ninja' },
    { name: 'Madara', type: 'villain' }
  ];
  
  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Crea un observable a partir de una matriz, un objeto, una promesa o un objeto iterable.',
    title: 'From',
  } 

  from_code: string = `
    import { from } from 'rxjs';

    const ninjas = [
      { name: 'Naruto', type: 'ninja' },
      { name: 'Sasuke', type: 'ninja' },
      { name: 'Pain', type: 'villain' },
      { name: 'Obito', type: 'villain' },
      { name: 'Kakashi', type: 'ninja' },
      { name: 'Madara', type: 'villain' }
    ];

    from(ninjas).pipe(
      filter(ninja => ninja.type === 'ninja')
    ).subscribe(ninja => console.log(ninja));

    // Resultado: Muestra a todos los ninjas.
  `;
}
