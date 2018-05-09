import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../../../common/services/employee.service';
import { Employee } from '../../../../common/models/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [ EmployeeService ]
})

export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  selectedEmployee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    const list = this.employeeService.getEmployees();
    list.snapshotChanges().subscribe(empList => {
      this.employeeList = [];
      empList.forEach(emp => {
        const employee = emp.payload.toJSON();
        employee['$key'] = emp.key;
        this.employeeList.push(employee as Employee);
      });
    });
  }

  onEdit(employee: Employee): void {
    // this.employeeService.passEmployeeData(employee);
    // this.employeeService.selectedEmployee = Object.assign({}, employee);
  }

  onDelete(key: string): void {
    if (confirm('Are you sure to delete this record?') === true) {
      this.employeeService.deleteEmployee(key);
      this.toastrService.warning('Deleted successfully', 'Employee register');
    }
  }
}
