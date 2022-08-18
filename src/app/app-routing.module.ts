// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'rxjs',
    loadChildren: () => import('./modules/rxjs/rxjs.module').then(m => m.RxjsModule)
  },
  {
    path: 'observables',
    loadChildren: () => import('./modules/observables/observables.module').then(m => m.ObservablesModule)
  },
  {
    path: 'operators',
    loadChildren: () => import('./modules/operators/operators.module').then(m => m.OperatorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
