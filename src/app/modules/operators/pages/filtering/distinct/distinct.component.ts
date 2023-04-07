// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Deja pasar únicamente los valores que no se han previamente emitidos por el observable.',
    title: 'Distinct',
  };

  distinct_code: string = `
    import { distinct, from, pipe } from 'rxjs';
    
    const source$ = from([1, 2, 3, 1, 2, 3]);
  
    source$.pipe(
      distinct()
    ).subscribe(console.log); // 1, 2, 3.

    // Ejemplo con objetos.

    const personajes = [
      { nombre: 'Naruto' },
      { nombre: 'Sasuke' },
      { nombre: 'Sasuke' },
    ];

    from(personajes).pipe(
      distinct(personaje => personaje.nombre)
    ).subscribe(console.log); 
    
    // Resultado: { nombre: 'Naruto' }, { nombre: 'Sasuke' }.  
  `;
}