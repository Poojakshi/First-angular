import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],

})
export class RegistrationFormComponent{
   registerForm!: FormGroup;
  public userIdToUpdate!:number;
  public isUpdateActive:boolean=false;
   roleControl: FormControl = new FormControl();
   roles: string[] = ['Employee', 'Creator', 'Visitor'];
 // User:any;
  constructor(private formBuilder: FormBuilder,
    private _service: TestServiceService, private router:Router, private activatedRouter:ActivatedRoute) { }

    user: any= {
      id:'',
      name: '',
      email: '',
      contact: '',
      gender: '',
      role: '',
      password:''
    };
    

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isactive:this.formBuilder.control(false)
    });
    
     this.activatedRouter.params.subscribe(val=>{
     this.userIdToUpdate=val['id'];
     this._service.getUserId(this.userIdToUpdate).subscribe(res=>{
     this.isUpdateActive=true;
     this.fillFormToUpdate(res);
      })
    })
  
  }
  
  submit() {
    if(this.registerForm.valid){
      this._service.createUser(this.registerForm.value).subscribe((res =>{
        console.log(this.registerForm.value);
        alert('User registered successfully!');
      }))
    }else{
      alert('Please fill the details');
    }
   }

   update() {
    if (this.registerForm.valid) {
      console.log(this.userIdToUpdate)
      this._service.editUser(this.registerForm.value, this.userIdToUpdate).subscribe(updatedUser => {
        if (updatedUser) {
          alert("User updated successfully:");
          //this.registerForm.reset();
          this.router.navigate(['/eprofile']);
        } else {
          alert("User update failed or returned null response.");
        }
      });
    }
  }

   fillFormToUpdate(user:any){
      this.registerForm.patchValue({
        name:user.name,
        email:user.email,
        contact:user.contact,
        gender:user.gender,
        role:user.role,
        password:user.password

      })
    }
  }

  
  
    

    
    
  
  
  
  
  
  
  
  
    
    
    
    
    
    
    
    
    
  //   update(){
  //     if(this.registerForm.valid){
  //       this._service.editUser(this.registerForm.value).subscribe(res =>{
  //         if(res){
  //         console.log(this.registerForm.value);
  //         this.registerForm.reset();
  //         console.log('User updated successfully!');
  //     }else{
  //       console.log('User updated failed');
  //     }
  //   })
  //   }
  //     // this._service.editUser(this.registerForm.value).subscribe(userData => {
  //     //   if (userData) {
  //     //     console.log(this.registerForm.value);
  //     //   //   this.registerForm.reset();
  //     //     console.log("User updated successfully");
  //     //     this.router.navigate(['/eprofile']);
  //     //   } else {
  //     //     console.log("User update failed.");
  //     //    }
  //     // });
  //     //if(this.registerForm.valid){
  //     // this._service.editUser(this.registerForm.value).subscribe((userData=>{
  //     //   if(userData){
  //     //   console.log(this.registerForm.value);
  //     // // console.log(this.registerForm.value);
  //     //  this.registerForm.reset();
  //     //   console.log("User updated successfully")
  //     //   this.router.navigate(['/eprofile']);
  //     //    }else{
  //     //      console.log("User update failed.");
  //     //  }
  //     // }))
  //   //}
  // }  
    
    
    
    
  //this._service.updateUser( this.userIdToUpdate).subscribe((res=>{
    
    
    
    
    //       alert('User registered successfully!');
//     }, (error) => {
//         console.error(error);
//         alert('User already exists or registration failed.');
//     }
//         );
//     }
//  }

 





// submit(){
  //   // this._service.users().subscribe(result=>{
  //   //   console.log(result);
  //   //   alert("Registered Successfully");
  //   // });

  //   this._service.user().subscribe(result=>{
  //     console.log(result);
  //   });
  // }



