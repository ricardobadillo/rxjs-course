// Angular.
import { Component, Input } from '@angular/core';

// Modelos.
import { FieldSet } from '../../../core/models/field-set';



@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent {

  @Input() fieldSetData: FieldSet = { classStyle: '', content: '', legend: '', styleClass: '' };
}
