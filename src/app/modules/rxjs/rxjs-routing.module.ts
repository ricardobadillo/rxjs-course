// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { RxjsComponent } from './rxjs.component';
import { TestsComponent } from './tests/tests.component';



const routes: Routes = [
  { path: '', component: RxjsComponent },
  { path: 'tests', component: TestsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RxjsRoutingModule { }