import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

import {Employee} from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
   employeesChanged = new Subject<Employee[]>();
   // startedEditing = new Subject<number>();
  private employees: Employee[] = [
    new Employee(
      'First member',
    ),
    new Employee(
      'Second member'
    ),
    new Employee(
      'Third member'
    )
  ];

  getEmployees() {
    return this.employees.slice();
  }
  getEmployee(index: number) {
    return this.employees[index];
  }
  updateEmployee(index: number, newEmployee: Employee) {
    this.employees[index] = newEmployee;
    this.employeesChanged.next(this.employees.slice());
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeesChanged.next(this.employees.slice());
  }
  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.employeesChanged.next(this.employees.slice());
  }
}
