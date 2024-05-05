// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Componentes.
import { CardComponent } from './components/card/card.component';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { DescriptionCardComponent } from './components/description-card/description-card.component';
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';

// PrimeNG.
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

// Prismjs.
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-yaml';



@NgModule({
  declarations: [
    CardComponent,
    CodeBlockComponent,
    DescriptionCardComponent,
    FieldsetComponent,
    ListComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,

    CardModule,
    DividerModule,
    FieldsetModule,
    TableModule,
  ],
  exports: [
    CardComponent,
    CodeBlockComponent,
    DescriptionCardComponent,
    FieldsetComponent,
    ListComponent,
    TableComponent,

    ButtonModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    ImageModule,
    MenubarModule,
    PanelMenuModule,
    TableModule,
    TooltipModule,
  ]
})
export class SharedModule { }
