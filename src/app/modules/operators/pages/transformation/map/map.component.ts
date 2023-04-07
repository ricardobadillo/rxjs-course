// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite transformar lo que recibimos o lo que emite el observable. También puede servir para extraer información.',
    title: 'Map',
  };

  map_code: string = `
    import { map, range } from 'rxjs';

    range(1, 5).pipe( 
      map<number, number>(val => val * 10)
    ).subscribe(console.log);

    // Resultado: 10, 20, 30, 40, 50.
  `;
}