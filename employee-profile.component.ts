import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormControl } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastModule } from 'ng-angular-popup';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit{
  public userIdToGet!:number;
  public email!:string;
  public password!:string;
  constructor(private _service: TestServiceService, private activatedRouter:ActivatedRoute, private router: Router,private toast:NgToastModule, private confirm:NgConfirmService) { }
  //user:any;
  displayedColumns: string[] = ['no', 'id', 'name', 'email', 'contact', 'gender', 'role', 'password', 'actions'];
  dataSource:any=[];
  user:any;
  //displayword:string="hello";

  // userObj = {
  //   id:'',
  //   name: '',
  //   email: '',
  //   contact: '',
  //   gender: '',
  //   role: '',
  //   password:''
  // };

  ngOnInit(){
    //const role = this.router.snapshot.paramMap.get('role');
    this.getMethod();  
    this.activatedRouter.params.subscribe(val=>{
     // this.userIdToGet=val['id'];
      this._service.loginUser(this.email, this.password).subscribe(res=>{
        
      })
    })
    //this.editUser(id:number);   
    // this.deleteUser(userId:string);
    // this._service.getUser().subscribe((users) => {
    //   this.user = users.filter((user: { role: any; }) => user.role === role);
    // });
  }
  getMethod(){
    this._service.getUser().subscribe((data) => {
    this.dataSource=data;
    console.log(this.dataSource);
    
    })
  }

  editUser(id:number){
   this.router.navigate(['update', id]);
    // this._service.updateUser(this.).subscribe(res=>{
    //   console.log(this.dataSource);
    // })
  }

  deleteUser(id:number){
    this.confirm.showConfirm("Are you sure want to delete?",
    ()=>{
      this._service.removeUser(id).subscribe(res=>{
        //this.toast.success({detail: 'SUCCESS', summary: 'Deleted Successfully', duration 3000})
       // this.getUsers();
      })
    },
    ()=>{

    })
    this._service.removeUser(id).subscribe(()=>{
    console.log('User deleted successfully');
    this.getMethod();
  })
}
}
