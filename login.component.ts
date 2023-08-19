import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; // Combine imports
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { // Implement OnInit interface
  loginForm!: FormGroup;
  //isError: boolean = false;
 // invalidLoginMessage: string | null = null;
  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _service: TestServiceService,
    private router: Router
  ) {}

  getUser: any;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    //this.visitorMethod();
    //this.creatorMethod();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._service.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe({
              next: res => {
          this.getUser = res;
          console.log(this.getUser);

          if (this.getUser.role === 'Creator') {
            this.router.navigate(['/creator']);
          } else if (this.getUser.role === 'Employee') {
            this.router.navigate(['/eprofile']);
          } else if (this.getUser.role === 'Visitor') {
            this.router.navigate(['/vprofile']);
          }
        },
      error: (error) => {
        this.loginError = true;
      }
        });
    }
  }
  // visitorMethod(){
  //  this.router.navigate(['vprofile'])
  // }
}




// onSubmit() {
//   if (this.loginForm.valid) {
//     this._service.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe({
//       next: res => {
//         this.getUser = res;
//         console.log(this.getUser);

//         if (this.getUser.role === 'Creator') {
//           this.router.navigate(['/creator']);
//         } else if (this.getUser.role === 'Employee') {
//           this.router.navigate(['/employee']);
//         } else if (this.getUser.role === 'Visitor') {
//           this.router.navigate(['/vprofile']);
//         }
//       },
//       error: error => {
//         console.error('Invalid email or password', error);
//         this.invalidLoginMessage = 'Invalid email or password';
//       }
//     });
//   }
// }
// }




  // import { Component} from '@angular/core';
  // import { FormBuilder, Validators } from '@angular/forms';
  // import { FormGroup } from '@angular/forms';
  // import { TestServiceService } from '../test-service.service';
  // import { Router } from '@angular/router';
  
  // @Component({
  //   selector: 'app-login',
  //   templateUrl: './login.component.html',
  //   styleUrls: ['./login.component.css']
  // })
  // export class LoginComponent{
  //   loginForm!: FormGroup;
  //   isError:boolean=false;
  //   invalidLoginMessage: string | null = null;
     
  //   constructor(private formBuilder: FormBuilder,private _service: TestServiceService, private router: Router) { }
   
  //   getUser:any;
  //   ngOnInit(){
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //        })
  // }
  //   onSubmit(){
  //     if(this.loginForm.valid){
  //       this._service.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(res =>{
  //          this.getUser=res;
  //        console.log(this.getUser);
          
  //         if(this.getUser.role === 'Creator'){
  //           this.router.navigate(['/creator']);
  //         }else if(this.getUser.role === 'Employee'){
  //           this.router.navigate(['/employee']);
  //         }else if(this.getUser.role === 'Visitor'){
  //           this.router.navigate(['/vprofile']);
  //         }
          
  //         })  
          
  //       }
  //     }
  //   }





  // if(this.getUser.role === 'creator'){
  //   this.router.navigate(['/creator']);
  // }else if(this.getUser.role === 'employee'){
  //   this.router.navigate(['/employee']);
  // }else if(this.getUser.role === 'visitor'){
  //   this.router.navigate(['/vprofile']);
  // }


// onSubmit(){
//   if(this.loginForm.valid){
//     this._service.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(res =>{
//        this.getUser=res;
//       console.log(this.getUser);
//     }








// if(this.loginForm.valid){
//   this._service.loginUser(this.loginForm.value.email,this.password).subscribe(res =>{
//     console.log(this.loginForm.value);
//     if (this.loginForm.value.email === 'email' && this.loginForm.value.password === 'password') {
//             console.log('Login successful');
//         } else {
//           this.isError = true;
//          }
//   })

// }
// }


//alert('User registered successfully!');
//     }, (error) => {
//         console.error(error);
//         alert('User already exists or registration failed.');
//     }
//         );





// if(this.userData.password === this.loginForm.value.password){
        //   if(this.userData.isactive){
        //     sessionStorage.setItem('email',this.userData.email)
            
        //   }
        // }



  // onSubmit() {
  //  this._service.loginUser(this.email, this.password).subscribe(data => this.email = data);
  //   if (this.email === 'email' && this.password === 'password') {
  //      console.log('Login successful');
  //   } else {
  //      this.isError = true;
  //   }
  //  }


  // import { Component} from '@angular/core';
  // import { FormBuilder, Validators } from '@angular/forms';
  // import { FormGroup } from '@angular/forms';
  // import { TestServiceService } from '../test-service.service';
  // import { Router } from '@angular/router';
  
  // @Component({
  //   selector: 'app-login',
  //   templateUrl: './login.component.html',
  //   styleUrls: ['./login.component.css']
  // })
  // export class LoginComponent{
    
  //    loginForm!: FormGroup;
  //    userData:any;
    
  //   constructor(private formBuilder: FormBuilder,private _service: TestServiceService, private router: Router) { }
  
  //   ngOnInit(){
  //   this.loginForm = this.formBuilder.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(6)]]
  //   })
  // }
  //    email: string='';
  //    password: string='';
    
  //    //isError: boolean = false;
  
  //   onSubmit(){





