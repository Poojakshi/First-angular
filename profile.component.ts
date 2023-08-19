import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 
  //displayword:string="hello";

  user: any = {
    id:'',
    name: '',
    email: '',
    contact: '',
    gender: '',
    role: '',
    password:''
  };
  constructor( private formBuilder: FormBuilder,private _service: TestServiceService, private route: ActivatedRoute)
   {}
  
  ngOnInit(){
    this.getMethod();
  }
  getMethod(){
    this._service.getUser().subscribe((data) => {
      // this.user = data;
       this.user=data;
       console.log(this.user);
       
       })
  }
}

