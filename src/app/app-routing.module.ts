import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';


const routes: Routes = [
  {path: '', redirectTo: '/employee', pathMatch: 'full'},
  {path: 'employee', component: EmployeeComponent, children: [
      {path: 'new', component: EmployeeEditComponent},
      {path: 'edit', component: EmployeeEditComponent},
    ]},
  {path: 'employee-list', component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
