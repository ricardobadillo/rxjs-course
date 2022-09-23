// Angular.
import { Component, Input } from '@angular/core';

// Modelos.
import { TableParameters } from '../../../core/models/table-parameters';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() columnNames: string[] = [];
  @Input() responsiveLayout: string = 'scroll';
  @Input() tableParameters: TableParameters[] = [];


  constructor() { }
}
