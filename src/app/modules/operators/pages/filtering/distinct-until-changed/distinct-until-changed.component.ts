// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Emite valores siempre y cuando el valor actual sea distinto al anterior.',
    title: 'Distinct Until Changed',
  };

  distinct_until_changed_code: string = `
    import { distinctUntilChanged, from, pipe } from 'rxjs';
      
    const source$ = from([1, 2, 3, 1, 1, 2, 3]);

    source$.pipe(
      distinctUntilChanged()
    ).subscribe(console.log); // 1, 2, 3, 1, 2, 3.

    // Ejemplo con objetos.

    const personajes = [
      { nombre: 'Naruto' },
      { nombre: 'Sasuke' },
      { nombre: 'Sasuke' }
    ];

    from(personajes).pipe(
      distinctUntilChanged((anterior, actual) => anterior.nombre === actual.nombre)
    ).subscribe(console.log);

    // Resultado: { nombre: 'Naruto' }, { nombre: 'Sasuke' }.
  `;
}