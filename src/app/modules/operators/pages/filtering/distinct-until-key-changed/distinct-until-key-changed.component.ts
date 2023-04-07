// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.scss']
})
export class DistinctUntilKeyChangedComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Suponiendo que hay un objeto que emite valores, este emitirá siempre y cuando la propiedad actual sea distinto a la anterior.',
    title: 'Distinct Until Key Changed',
  };

  distinct_until_key_changed_code: string = `
    import { distinctUntilKeyChanged, from, pipe } from 'rxjs';

    const personajes = [
      { nombre: 'Naruto' },
      { nombre: 'Sasuke' },
      { nombre: 'Sasuke' }
    ];

    from(personajes).pipe(
      distinctUntilKeyChanged('nombre')
    ).subscribe(console.log);

    // Resultado: { nombre: 'Naruto' }, { nombre: 'Sasuke' }.
  `;
}