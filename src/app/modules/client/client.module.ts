import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeesComponent } from './pages/employees/employees.component';

@NgModule({
    declarations: [
        EmployeeListComponent,
        EmployeeComponent,
        EmployeesComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ToastrModule.forRoot()
    ],
    exports: [
        EmployeeListComponent,
        EmployeeComponent,
        EmployeesComponent
    ],
    providers: [ ],
    bootstrap: [ ]
})
export class ClientModule { }
