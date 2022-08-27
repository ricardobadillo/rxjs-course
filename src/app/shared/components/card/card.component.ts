// Angular.
import { Component, Input } from '@angular/core';

// Modelos.
import { Card } from '../../../core/models/card';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardData: Card = { content: '', hasImage: false, styleCard: '', styleImage: '', urlImage: '' }

  constructor() { }
}
