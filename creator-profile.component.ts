import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creator-profile',
  templateUrl: './creator-profile.component.html',
  styleUrls: ['./creator-profile.component.css']
})
export class CreatorProfileComponent {
  
  constructor(private formBuilder: FormBuilder,private activatedRouter:ActivatedRoute, private _service: TestServiceService, private router: Router) { }
  editing:boolean=false;
  // public email!:string;
  // public password!:string;
  userResponse:any;
  value:any;
  creatorData: any;
 
//  @Input() creatorData={
//      name: '',
//      email: '',
//      contact: '',
//      gender: '',
//      role: '',
//      password:''
//  };
//  user = {
//     id:'',
//     name: '',
//     email: '',
//     contact: '',
//     gender: '',
//     role: '',
//     password:''
//   };
  ngOnInit(){
    this.creatorData = this._service.getUserData();
      }
    }
  
  





































// ngOnInit(){
//   //this.getMethod();
//    //this.activatedRouter.params.subscribe(val=>{
//      //  this._service.loginUser(this.email, this.password).subscribe(res=>{

//      //  })
//   // })
         
//  }
//  // getMethod(){
//  //   this._service.getUser().subscribe((data) => {
//  //   this.user=data;
//  //   console.log(this.user);
   
//  //   })
//  // }
// }


// ngOnInit(){
//   //this.getMethod();
//    this.activatedRouter.params.subscribe(val=>{
//      // this._service.loginUser(this.email, this.password).subscribe(res=>{
      
//      // })
//    })
//    //     this.user = res;
//       // console.log(this.user);
//       // this.router.navigate(['/cprofile']);        
//  }
//  // getMethod(){
//  //   this._service.getUser().subscribe((data) => {
//  //   this.user=data;
//  //   console.log(this.user);
   
//  //   })
//  // }
// }
