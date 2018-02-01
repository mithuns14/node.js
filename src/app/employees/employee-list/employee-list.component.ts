import { Component, OnInit } from '@angular/core';
import {EmployeeService  } from '../shared/employee.service'
import {Employee} from '../shared/employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

employeeList:Employee[]
  constructor(public empService:EmployeeService) { }

  ngOnInit() {
    var x=this.empService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.employeeList=[];
      item.forEach(element=>{
        var y=element.payload.toJSON();
        y["$key"]=element.key;
        this.employeeList.push(y as Employee);
      })
    })
  }

  onEdit(emp:Employee){
    debugger
    this.empService.selectedEmployee=Object.assign({},emp);
  }

  onDelete(key:string ){
    if(confirm('Are you sure want to delete selected Employee ?')==true) {
    this.empService.deleteEmployee(key);    
    }
  }
}
