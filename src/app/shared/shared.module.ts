// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { CardComponent } from './components/card/card.component';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { DescriptionCardComponent } from './components/description-card/description-card.component';
import { DividerComponent } from './components/divider/divider.component';
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { ListComponent } from './components/list/list.component';

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
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-scss';



@NgModule({
  declarations: [
    CardComponent,
    CodeBlockComponent,
    DescriptionCardComponent,
    DividerComponent,
    FieldsetComponent,
    ListComponent,
    FieldsetComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    FieldsetModule,
  ],
  exports: [
    CardComponent,
    CodeBlockComponent,
    DescriptionCardComponent,
    DividerComponent,
    FieldsetComponent,
    ListComponent,

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
