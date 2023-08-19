import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator-profile',
  templateUrl: './creator-profile.component.html',
  styleUrls: ['./creator-profile.component.css']
})
export class CreatorProfileComponent {
  
  constructor(private formBuilder: FormBuilder,private _service: TestServiceService, private router: Router) { }
  editing:boolean=false;
  value:any;

  user: any = {
    id:'',
    name: '',
    email: '',
    contact: '',
    gender: '',
    role: '',
    password:''
  };
  onInit(){
    // this._service.loginUser(this.user.email, this.user.password).subscribe(res => {
    //     this.user = res;
        console.log(this.user);
         //})
  }
}

