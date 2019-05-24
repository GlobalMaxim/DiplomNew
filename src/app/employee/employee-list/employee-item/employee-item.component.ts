import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Employee} from '../../employee.model';
import {EmployeesService} from '../../employees.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: Employee;
  @Input() index: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeesService) { }

  ngOnInit() {
  }
  onEditEmployee() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.employeeService.startedEditing.next(index);
  }
  onDeleteEmployee() {
    this.employeeService.deleteEmployee(this.index);
  }
}
