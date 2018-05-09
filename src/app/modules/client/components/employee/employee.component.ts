import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { EmployeeService } from '../../../../common/services/employee.service';
import { Employee } from '../../../../common/models/employee.model';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    selectedEmployee: Employee;

    constructor(
        private employeeService: EmployeeService,
        private toastrService: ToastrService
    ) { }

    ngOnInit() {}

    onSubmit(employeeForm: NgForm) {
        if (employeeForm.value.$key == null) {
            this.employeeService.insertEmployee(employeeForm.value);
        } else {
            this.employeeService.updateEmployee(employeeForm.value);
        }
        this.resetForm(employeeForm);
        this.toastrService.success('Submitted Successfully', 'Employee Register');
    }

    resetForm(employeeForm?: NgForm): void {
        if (employeeForm != null) {
            employeeForm.reset();
        }

        this.selectedEmployee = {
            $key: null,
            name: '',
            position: '',
            office: '',
            salary: 0
        };
    }
}