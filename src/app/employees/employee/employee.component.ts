import { Component, OnInit } from '@angular/core';
import {EmployeeService  } from '../shared/employee.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empService:EmployeeService) { }

  ngOnInit() {
    this.onResetForm();
  }

  onSubmit(employeeForm){
    if(employeeForm.value.$key==null)    
    this.empService.insertEmployee(employeeForm.value);
    else
    this.empService.updateEmployee(employeeForm.value);   
    this.onResetForm(employeeForm);
  }

  onResetForm(employeeForm?){
    if(employeeForm!=null)
    employeeForm.reset();
    this.empService.selectedEmployee={
      $key:null,
      name:'',
      position:'',
      office:'',
      salary:0
    }
  }

  }


