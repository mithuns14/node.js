import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import {Employee} from './employee.model'
import {ToastrService} from 'ngx-toastr'
@Injectable()
export class EmployeeService {

employeeList:AngularFireList<any>;
selectedEmployee:Employee=new Employee();
constructor(private firebase:AngularFireDatabase,private toast:ToastrService) { }

  getData(){
    this.employeeList=this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee:Employee)
  {
    this.getData();
    debugger
    this.employeeList.push({
      name:employee.name,
      position:employee.position,
      office:employee.office,
      salary:employee.salary
    });
     this.toast.success("Employee Inserted!!!");
  }
  updateEmployee(employee:Employee){
    this.employeeList.update(employee.$key,{
      name:employee.name,
      position:employee.position,
      office:employee.position,
      salary:employee.salary
    });
     this.toast.success("Employee Updated!!!");
  }
  deleteEmployee($key:string){
    this.employeeList.remove($key);
    this.toast.success("Employee Deleted!!!");
  }
}