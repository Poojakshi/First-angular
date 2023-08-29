import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 
  constructor( private formBuilder: FormBuilder,private _service: TestServiceService, private route: ActivatedRoute)
   {}

   employeeData:any;
 
  ngOnInit(){
    
    this.employeeData = this._service.getUserData();
  }
  
}






















// user  = {//displayword:string="hello";

  //  @Input() employeeData ={
  //      name: '',
  //      email: '',
  //      contact: '',
  //      gender: '',
  //      role: '',
  //      password:''
  //  } ;
  //     id:'',
  //     name: '',
  //     email: '',
  //     contact: '',
  //     gender: '',
  //     role: '',
  //     password:''
  //   };
