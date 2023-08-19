import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { CreatorComponent } from './creator/creator.component';
import { EmployeeComponent } from './employee/employee.component';
import { FoodComponent } from './food/food.component';
 import { ProfileComponent } from './profile/profile.component';
//import { UserProfileComponent } from './user-profile/user-profile.component';
import { VisitorProfileComponent } from './visitor-profile/visitor-profile.component';
import { CreatorProfileComponent } from './creator-profile/creator-profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import {MatTableModule } from '@angular/material/table' ;
import {NgConfirmModule} from 'ng-confirm-box';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationFormComponent,
    HomeComponent,
    LoginComponent,
    ContentComponent,
    CreatorComponent,
    EmployeeComponent,
    FoodComponent,
     ProfileComponent,
    //UserProfileComponent,
    VisitorProfileComponent,
    CreatorProfileComponent,
    EmployeeProfileComponent
   
    
  ],
  imports:[
     BrowserModule,
     AppRoutingModule,
     MatIconModule, 
     MatToolbarModule,
     MatButtonModule, 
     MatRadioModule,
     MatTableModule ,
     BrowserAnimationsModule,
     FormsModule,
     ReactiveFormsModule,
     MatSelectModule,
     MatCardModule,
     MatFormFieldModule,
     HttpClientModule,
     NgConfirmModule,
     NgToastModule
  ],
  
  
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}