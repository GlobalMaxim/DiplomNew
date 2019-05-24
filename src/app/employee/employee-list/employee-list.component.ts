import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';

import {Employee} from '../employee.model';
import {EmployeesService} from '../employees.service';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  subscription: Subscription;

  constructor(private employeeService: EmployeesService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.subscription = this.employeeService.employeesChanged.
    subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
      }
    );
    this.employees = this.employeeService.getEmployees();
  }

  onNewEmployee() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
