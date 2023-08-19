import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent {
  createForm!: FormGroup;
  title:string='';
  author:string='';
  description:string='';
  content:string='';
  tags:string='';

 // imageUrl:string='';
 // getUser:any;
  constructor(private formBuilder: FormBuilder,private _service: TestServiceService, private router: Router) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      title : [''],  
      author: [''],
      description: [''],
      content:['']
     });
  }
  

   onSubmit(){
    
    // this._service.loginUser(this.value.email, this.value.password).subscribe(res => {
    //   this.user = res;
    //   console.log(this.user);
    //   })
   


   
   }
}













//   const newBlog={
  //     title:this.title,
  //     description:this.description,
  //     content:this.content,
  //     tags:this.tags
  //   };
