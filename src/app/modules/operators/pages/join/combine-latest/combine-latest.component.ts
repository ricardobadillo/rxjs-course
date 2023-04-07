// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent {

  listContent: string[] = [
    '❗ Retorna un nuevo observable.',
    '💡 Este observable va a emitir valores hasta que todos los observables internos hayan emitidos al menos un valor.',
    '❗ El complete de la suscripción ocurre cuando se hayan completado todos los observables internos.',
  ];

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite pasar observables como argumentos, combinarlos y emitir los valores de todos los observables internos simultáneamente.',
    title: 'Combine Latest',
  };

  combine_latest_code: string = `
    import { combineLatest, fromEvent, pipe } from 'rxjs';
      
    const keyup$ = fromEvent(document, 'keyup');
    const click$ = fromEvent(document, 'click');

    combineLatest(
      keyup$.pipe(
        map((event: KeyboardEvent) => event.code)),
      click$.pipe(
        map((event: MouseEvent) => event.x)
      )).subscribe(console.log);

    // Resultado: ["KeyA", 100]. ["KeyB", 100]. ["KeyB", 200]...
  `;
}