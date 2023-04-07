// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { OperatorsComponent } from './operators.component';

import { AjaxComponent } from './pages/creation/ajax/ajax.component';
import { FromComponent } from './pages/creation/from/from.component';
import { FromEventComponent } from './pages/creation/from-event/from-event.component';
import { IntervalComponent } from './pages/creation/interval/interval.component';
import { RangeComponent } from './pages/creation/range/range.component';
import { TimerComponent } from './pages/creation/timer/timer.component';

import { AuditTimeComponent } from './pages/filtering/audit-time/audit-time.component';
import { DebounceTimeComponent } from './pages/filtering/debounce-time/debounce-time.component';
import { DistinctComponent } from './pages/filtering/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './pages/filtering/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './pages/filtering/distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterComponent } from './pages/filtering/filter/filter.component';
import { FirstComponent } from './pages/filtering/first/first.component';
import { SampleComponent } from './pages/filtering/sample/sample.component';
import { SampleTimeComponent } from './pages/filtering/sample-time/sample-time.component';
import { SkipComponent } from './pages/filtering/skip/skip.component';
import { TakeComponent } from './pages/filtering/take/take.component';
import { TakeUntilComponent } from './pages/filtering/take-until/take-until.component';
import { TakeWhileComponent } from './pages/filtering/take-while/take-while.component';
import { ThrottleTimeComponent } from './pages/filtering/throttle-time/throttle-time.component';

import { CombineLatestComponent } from './pages/join/combine-latest/combine-latest.component';
import { EndWithComponent } from './pages/join/end-with/end-with.component';
import { ForkJoinComponent } from './pages/join/fork-join/fork-join.component';
import { MergeAllComponent } from './pages/join/merge-all/merge-all.component';
import { StartWithComponent } from './pages/join/start-with/start-with.component';

import { ReduceComponent } from './pages/mathematical/reduce/reduce.component';

import { ConcatMapComponent } from './pages/transformation/concat-map/concat-map.component';
import { ExhaustMapComponent } from './pages/transformation/exhaust-map/exhaust-map.component';
import { MapComponent } from './pages/transformation/map/map.component';
import { MergeMapComponent } from './pages/transformation/merge-map/merge-map.component';
import { ScanComponent } from './pages/transformation/scan/scan.component';
import { SwitchMapComponent } from './pages/transformation/switch-map/switch-map.component';

import { TapComponent } from './pages/utility/tap/tap.component';



const routes: Routes = [
  { path: '', component: OperatorsComponent },

  { path: 'creation/ajax', component: AjaxComponent },
  { path: 'creation/from', component: FromComponent },
  { path: 'creation/from-event', component: FromEventComponent },
  { path: 'creation/interval', component: IntervalComponent },
  { path: 'creation/range', component: RangeComponent },
  { path: 'creation/timer', component: TimerComponent },

  { path: 'filtering/audit-time', component: AuditTimeComponent },
  { path: 'filtering/debounce-time', component: DebounceTimeComponent },
  { path: 'filtering/distinct', component: DistinctComponent },
  { path: 'filtering/distinct-until-changed', component: DistinctUntilChangedComponent },
  { path: 'filtering/distinct-until-key-changed', component: DistinctUntilKeyChangedComponent },
  { path: 'filtering/filter', component: FilterComponent },
  { path: 'filtering/first', component: FirstComponent },
  { path: 'filtering/sample', component: SampleComponent },
  { path: 'filtering/sample-time', component: SampleTimeComponent },
  { path: 'filtering/skip', component: SkipComponent },
  { path: 'filtering/take', component: TakeComponent },
  { path: 'filtering/take-until', component: TakeUntilComponent },
  { path: 'filtering/take-while', component: TakeWhileComponent },
  { path: 'filtering/throttle-time', component: ThrottleTimeComponent },
  
  { path: 'join/combine-latest', component: CombineLatestComponent },
  { path: 'join/end-with', component: EndWithComponent },
  { path: 'join/fork-join', component: ForkJoinComponent },
  { path: 'join/merge-all', component: MergeAllComponent },
  { path: 'join/start-with', component: StartWithComponent },

  { path: 'mathematical/reduce', component: ReduceComponent },
  
  { path: 'transform/concat-map', component: ConcatMapComponent },
  { path: 'transform/exhaust-map', component: ExhaustMapComponent },
  { path: 'transform/map', component: MapComponent },
  { path: 'transform/merge-map', component: MergeMapComponent },
  { path: 'transform/scan', component: ScanComponent },
  { path: 'transform/switch-map', component: SwitchMapComponent },
  
  { path: 'utility/tap', component: TapComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OperatorsRoutingModule { }