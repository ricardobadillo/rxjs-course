// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { FromEventComponent } from '../observables/func/from-event/from-event.component';
import { OfComponent } from '../observables/func/of/of.component';
import { OperatorsComponent } from './operators.component';

// Módulos.
import { OperatorsRoutingModule } from './operators-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RangeComponent } from '../observables/func/range/range.component';
import { TimerComponent } from '../observables/func/timer/timer.component';
import { IntervalComponent } from '../observables/func/interval/interval.component';
import { AsyncSchedulerComponent } from '../observables/func/async-scheduler/async-scheduler.component';


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
