import { Component } from '@angular/core';
import { DescriptionCard } from '../../shared/models/description-card';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {

  descriptionCards: DescriptionCard[] = [
    { 
      title: '¿Qué es el patrón Observer?',
      imageURL: 'assets/images/rxjs.png',
      text: 'Es un patrón de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.',
      resume: 'En resumen: notifica cuando suceden cambios.'
    },
    { 
      title: '¿Qué es el patrón Iterador?',
      imageURL: 'assets/images/rxjs.png',
      text: 'En la POO, el patrón iterador define una interfaz que declara los métodos necesarios para acceder secuencialmente a un grupo de objetos de una colección.',
      resume: 'En resumen: todas las operaciones necesarias para poder ejecutar tareas de manera secuencial.'
    },
    { 
      title: '¿Qué es la Programación funcional?',
      imageURL: 'assets/images/rxjs.png',
      text: 'Es crear un conjunto de funciones que tengan un objetivo específico. Sin efectos secundarios, sin mutar la data.',
      resume: 'En resumen: Tener funciones con tareas específicas que reciban argumentos y no muten la información.'
    },

  ]

  cardStyle = { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '350px' };
  imageStyle = { 'width': '100%' };
  imageCardStyle = { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' };
  
  showContentRxJS: boolean = false;
  showRxJS: boolean = false;

  constructor() { }

  toggleRxJS() {
    this.showRxJS = !this.showRxJS;
  }

  toggleContentRxJS() {
    this.showContentRxJS = !this.showContentRxJS;
  }
}
