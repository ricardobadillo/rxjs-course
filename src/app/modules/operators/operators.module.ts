// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { FromEventComponent } from './functions/from-event/from-event.component';
import { OfComponent } from './functions/of/of.component';
import { OperatorsComponent } from './operators.component';

// Módulos.
import { OperatorsRoutingModule } from './operators-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RangeComponent } from './functions/range/range.component';
import { TimerComponent } from './functions/timer/timer.component';
import { IntervalComponent } from './functions/interval/interval.component';
import { AsyncSchedulerComponent } from './functions/async-scheduler/async-scheduler.component';


@NgModule({
  declarations: [
    FromEventComponent,
    OfComponent,
    OperatorsComponent,
    RangeComponent,
    TimerComponent,
    IntervalComponent,
    AsyncSchedulerComponent,
  ],
  imports: [
    CommonModule,
    
    OperatorsRoutingModule,
    SharedModule,
  ]
})
export class OperatorsModule { }
