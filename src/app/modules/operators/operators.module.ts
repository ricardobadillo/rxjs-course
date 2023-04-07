// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes.
import { DistinctComponent } from './pages/filtering/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './pages/filtering/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './pages/filtering/distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterComponent } from './pages/filtering/filter/filter.component';
import { FirstComponent } from './pages/filtering/first/first.component';
import { MapComponent } from './pages/transformation/map/map.component';
import { OperatorsComponent } from './operators.component';
import { ReduceComponent } from './pages/mathematical/reduce/reduce.component';
import { ScanComponent } from './pages/transformation/scan/scan.component';
import { SkipComponent } from './pages/filtering/skip/skip.component';
import { TakeComponent } from './pages/filtering/take/take.component';
import { TakeUntilComponent } from './pages/filtering/take-until/take-until.component';
import { TakeWhileComponent } from './pages/filtering/take-while/take-while.component';
import { TapComponent } from './pages/utility/tap/tap.component';

import { AuditTimeComponent } from './pages/filtering/audit-time/audit-time.component';
import { DebounceTimeComponent } from './pages/filtering/debounce-time/debounce-time.component';
import { SampleComponent } from './pages/filtering/sample/sample.component';
import { SampleTimeComponent } from './pages/filtering/sample-time/sample-time.component';
import { ThrottleTimeComponent } from './pages/filtering/throttle-time/throttle-time.component';

import { AjaxComponent } from './pages/creation/ajax/ajax.component';

// Módulos.
import { OperatorsRoutingModule } from './operators-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MergeAllComponent } from './pages/join/merge-all/merge-all.component';
import { MergeMapComponent } from './pages/transformation/merge-map/merge-map.component';
import { SwitchMapComponent } from './pages/transformation/switch-map/switch-map.component';
import { ConcatMapComponent } from './pages/transformation/concat-map/concat-map.component';
import { ExhaustMapComponent } from './pages/transformation/exhaust-map/exhaust-map.component';
import { FormsModule } from '@angular/forms';
import { StartWithComponent } from './pages/join/start-with/start-with.component';
import { EndWithComponent } from './pages/join/end-with/end-with.component';
import { CombineLatestComponent } from './pages/join/combine-latest/combine-latest.component';
import { ForkJoinComponent } from './pages/join/fork-join/fork-join.component';
import { FromComponent } from './pages/creation/from/from.component';
import { FromEventComponent } from './pages/creation/from-event/from-event.component';
import { IntervalComponent } from './pages/creation/interval/interval.component';
import { RangeComponent } from './pages/creation/range/range.component';
import { TimerComponent } from './pages/creation/timer/timer.component';



@NgModule({
  declarations: [
    OperatorsComponent,

    AjaxComponent,
    FromComponent,
    FromEventComponent,
    IntervalComponent,
    RangeComponent,
    TimerComponent,

    AuditTimeComponent,
    DebounceTimeComponent,
    DistinctComponent,
    DistinctUntilChangedComponent,
    DistinctUntilKeyChangedComponent,
    FilterComponent,
    FirstComponent,
    SampleComponent,
    SampleTimeComponent,
    SkipComponent,
    TakeComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    ThrottleTimeComponent,
    
    CombineLatestComponent,
    EndWithComponent,
    ForkJoinComponent,
    MergeAllComponent,
    StartWithComponent,
    
    ReduceComponent,

    ConcatMapComponent,
    ExhaustMapComponent,
    MapComponent,
    MergeMapComponent,
    ScanComponent,
    SwitchMapComponent,

    TapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    OperatorsRoutingModule,
    SharedModule,
  ]
})
export class OperatorsModule { }