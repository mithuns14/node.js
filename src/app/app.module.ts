import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {EmployeeService} from './employees/shared/employee.service'
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {environment} from '../environments/environment';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component'
import { EmployeesComponent } from './employees/employees.component'
import {ToastrModule} from 'ngx-toastr'

@NgModule({ 
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
