// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { OperatorsComponent } from './operators.component';

// Módulos.
import { OperatorsRoutingModule } from './operators-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MapComponent } from './pages/map/map.component';
import { FilterComponent } from './pages/filter/filter.component';
import { TapComponent } from './pages/tap/tap.component';
import { ReduceComponent } from './pages/reduce/reduce.component';
import { ScanComponent } from './pages/scan/scan.component';


@NgModule({
  declarations: [
    OperatorsComponent,
    MapComponent,
    FilterComponent,
    TapComponent,
    ReduceComponent,
    ScanComponent,
  ],
  imports: [
    CommonModule,
    
    OperatorsRoutingModule,
    SharedModule,
  ]
})
export class OperatorsModule { }
