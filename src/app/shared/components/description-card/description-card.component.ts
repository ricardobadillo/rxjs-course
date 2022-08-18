// Angular.
import { Component, Input, OnInit } from '@angular/core';

// Modelos.
import { DescriptionCard } from '../../models/description-card';



@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {

  @Input() dataCard: DescriptionCard = { title: '', imageURL: '', text: '', resume: '' };

  cardStyle = { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '350px' };
  imageStyle = { 'width': '100%' };
  imageCardStyle = { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' };
  

  constructor() { }

  ngOnInit(): void {
  }

}
