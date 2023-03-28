// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'observables',
    loadChildren: () => import('./modules/observables/observables.module').then(m => m.ObservablesModule)
  },
  {
    path: 'operators',
    loadChildren: () => import('./modules/operators/operators.module').then(m => m.OperatorsModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./modules/rxjs/rxjs.module').then(m => m.RxjsModule)
  },
  { path: '', redirectTo: 'rxjs', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }