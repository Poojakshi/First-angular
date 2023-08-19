import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeForm!: FormGroup;
  employeeid:string='';
  name:string='';
  department:string='';
  constructor(private formBuilder: FormBuilder) {
  }

 ngOnInit(){
    this.employeeForm = this.formBuilder.group({
      employeeid: [''],  
      name: [''],
      department: ['']
    });
  }

  onSubmit() {
      
  }
 
}
