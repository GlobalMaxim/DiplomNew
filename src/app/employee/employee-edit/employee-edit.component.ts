import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { EmployeesService } from '../employees.service';
import {Employee} from '../employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee;
  id: number;
  editMode = false;
  employeeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
       // this.employee = this.employeeService.getEmployee(this.id);
        this.initForm();
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.employeeService.updateEmployee(this.id, this.employeeForm.value);
    } else {
      this.employeeService.addEmployee(this.employeeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let employeeName = '';
    if (this.editMode) {
      const employee = this.employeeService.getEmployee(this.id);
      employeeName = employee.name;
    }
    this.employeeForm = new FormGroup({
      name: new FormControl(employeeName, Validators.required)
    });
  }
}


