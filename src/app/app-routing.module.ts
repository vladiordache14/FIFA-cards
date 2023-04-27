import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '' , redirectTo:'main-component', pathMatch: 'full'},
  { path: 'main-component', component: MainComponent },
  { path: 'table-component', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
