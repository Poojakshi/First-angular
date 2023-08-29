import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { CreatorComponent } from './creator/creator.component';
import { EmployeeComponent } from './employee/employee.component';
//import { FoodComponent } from './food/food.component';
import {ProfileComponent } from './profile/profile.component';
//import {EmployeeComponent } from './user-profile/user-profile.component';
import {EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import {VisitorProfileComponent } from './visitor-profile/visitor-profile.component';
import {CreatorProfileComponent } from './creator-profile/creator-profile.component';


const routes: Routes=[
 {path:'', component:HomeComponent}, //this path opens first
 {path:'home', component:HomeComponent},
 {path:'register',component:RegistrationFormComponent},
 {path:'login', component:LoginComponent},
 {path:'cprofile', component:CreatorProfileComponent},
 {path:'profile', component:ProfileComponent},  
 {path:'employee',component:EmployeeComponent},
 {path:'vprofile', component:VisitorProfileComponent},
 {path:'eprofile', component:EmployeeProfileComponent},
 {path:'content', component:ContentComponent},
 {path:'creator', component:CreatorComponent},
 // {path:'food', component:FoodComponent},
 {path:'update/:id',component:RegistrationFormComponent}
 
];


@NgModule({
  imports:[RouterModule.forRoot(routes)], 
          
  exports:[RouterModule]
        
})

export class AppRoutingModule {

}







// {path:'login', component:LoginComponent,
// children:[
//   {path:'creator', component:CreatorComponent},
//   {path:'employee', component:EmployeeComponent},
//   {path:'vprofile', component:VisitorProfileComponent}
// ]},