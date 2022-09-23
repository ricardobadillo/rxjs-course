// Angular.
import { Component } from '@angular/core';

// Modelos.
import { Card } from '../../core/models/card';
import { DescriptionCard } from '../../core/models/description-card';
import { FieldSet } from '../../core/models/field-set';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {

  cardData: Card = {
    content: 'RxJS <span class="special">("Reactive Extensions for JavaScript")</span> es una librería para programación  reactiva usando observables que hacen más fácil la creación de código asíncrono o basado en callbacks.',
    hasImage: true,
    styleCard: 'card-content',
    styleImage: { 'width': '100%' },
    urlImage: 'assets/images/rxjs-operators.jpg'
  };

  reactiveNotesData: FieldSet[] = [
    {
      classStyle: 'definition-container',
      content: 'La programación reactiva es un paradigma de programación asincrónico interesado en <span class="special">los flujos de datos</span> y <span class="special">la propagación al cambio</span>. Es decir, <span class="special italic">reaccionar</span> a los datos ejecutando una serie de eventos.',
      legend: '¿Qué es la programación reactiva?',
      styleClass: 'definition-container'
    },
    {
      classStyle: 'definition-container',
      content: 'La programación reactiva está relacionada con el <span class="special">patrón de diseño Observer</span>: cuando hay un cambio de estado en un objeto, los otros objetos son notificados y actualizados acorde.',
      legend: 'Más sobre la programación reactiva',
      styleClass: 'definition-container'
    },
  ];

  rxjsData: FieldSet[] = [
    {
      classStyle: 'definition-container',
      content: 'RxJS es una biblioteca para componer programas asíncronos y basados en eventos mediante el uso de secuencias observables. Proporciona un tipo de núcleo: los <span class="special">Observables</span>, de tipos de satélites <span class="special">(Observer, Schedulers, Subjects)</span> y <span class="special">operadores</span> inspirados en los métodos nativos de los arreglos (map, filter, reduce, every, entre otros) para permitir el manejo de eventos asíncronos como colecciones.',
      legend: '¿Qué es RxJS?',
      styleClass: 'definition-container'
    },
    {
      classStyle: 'definition-container',
      content: '<span class="special">ReactiveX</span> combina <span class="special">el patrón Observer</span> con <span class="special">el patrón Iterator</span> y <span class="special">la programación funcional</span> con colecciones para satisfacer la necesidad de una forma ideal de gestionar secuencias de eventos.',
      legend: 'Resumen',
      styleClass: 'definition-container'
    },
  ];
  
  descriptionCards: DescriptionCard[] = [
    { 
      imageURL: 'assets/images/rxjs.png',
      imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
      isList: false,
      resume: 'En resumen: notifica cuando suceden cambios.',
      showDivider: true,
      styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '350px' },
      text: 'Es un patrón de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.',
      title: '¿Qué es el patrón Observer?',
    },
    { 
      imageURL: 'assets/images/rxjs.png',
      imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
      isList: false,
      resume: 'En resumen: todas las operaciones necesarias para poder ejecutar tareas de manera secuencial.',
      showDivider: true,
      styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '350px' },
      text: 'En la POO, el patrón iterador define una interfaz que declara los métodos necesarios para acceder secuencialmente a un grupo de objetos de una colección.',
      title: '¿Qué es el patrón Iterador?',
    },
    { 
      imageURL: 'assets/images/rxjs.png',
      imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
      isList: false,
      resume: 'En resumen: Tener funciones con tareas específicas que reciban argumentos y no muten la información.',
      showDivider: true,
      styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '350px' },
      text: 'Es crear un conjunto de funciones que tengan un objetivo específico. Sin efectos secundarios, sin mutar la data.',
      title: '¿Qué es la Programación funcional?',
    },
  ];

  showContentRxJS: boolean = false;
  showRxJS: boolean = false;

  constructor() { }

  toggleRxJS(): void {
    this.showRxJS = !this.showRxJS;
  };

  toggleContentRxJS(): void {
    this.showContentRxJS = !this.showContentRxJS;
  };
}
