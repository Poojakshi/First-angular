import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-profile',
  templateUrl: './visitor-profile.component.html',
  styleUrls: ['./visitor-profile.component.css']
})
export class VisitorProfileComponent {
  
  
  constructor(private formBuilder: FormBuilder,
    private _service: TestServiceService, private router:Router) { }
     //User:any;
    //value:any;

 // visitorForm!: FormGroup;
  // email:string='';
  // password:string='';
  // profile:any;
 // editing:boolean=false;
  
  // @Input() visitorData={
  //   name: '',
  //    email: '',
  //    contact: '',
  //    gender: '',
  //    role: '',
  //    password:''
  // };
  
 
    visitorData: any;
  
   
  
    ngOnInit() {
      this.visitorData = this._service.getUserData();
    }
  }
  // user = {
  //   id:'',
  //   name: '',
  //   email: '',
  //   contact: '',
  //   gender: '',
  //   role: '',
  //   password:''
  // };
 
    //this.getMethod();
   // this.user=this._service.loginUser(this.email, this.password).subscribe((data) => {
        // this.user=data;
         // console.log(this.user);
          //this.router.navigate(['/vprofile']);
       // })
   
  
 // getMethod(){
    
   //this.user=this._service.loginUser();
    // this._service.loginUser(this.email, this.password).subscribe((data) => {
    //   this.user=data;
    //    console.log(this.user);
       
    //    })
 
  















// this.user = this._service.loginUser();
  
 
  // this.visitorForm = this.formBuilder.group({
  //   name: ['', Validators.required],
  //   email: ['', [Validators.required, Validators.email]],
  //   contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  //   gender: ['', Validators.required],
  //   role: ['', Validators.required],
  //   password: ['', [Validators.required, Validators.minLength(6)]]
  // })