import { Component, Input } from '@angular/core';
import { Card } from '../../../core/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardData: Card = { content: '', styleClass: '', styleImage: '', urlImage: '' }

  constructor() { }
}
