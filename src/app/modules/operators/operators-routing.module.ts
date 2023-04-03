// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { FilterComponent } from './pages/filter/filter.component';
import { MapComponent } from './pages/map/map.component';
import { OperatorsComponent } from './operators.component';
import { ReduceComponent } from './pages/reduce/reduce.component';
import { ScanComponent } from './pages/scan/scan.component';
import { TapComponent } from './pages/tap/tap.component';



const routes: Routes = [
  { path: '', component: OperatorsComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'map', component: MapComponent },
  { path: 'reduce', component: ReduceComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'tap', component: TapComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OperatorsRoutingModule { }