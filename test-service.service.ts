import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class TestServiceService {
findUser:any;
   constructor(private http:HttpClient) { }

createUser(userData:any):Observable<any>{
    return this.http.post('http://localhost:8086/addUser', userData);

  }

loginUser(email:string, password:string):Observable<any>{
   return this.http.get<any>(`http://localhost:8086/getUserByEmail?email=${email}&password=${password}`);
  
  }

getUserId(id:number):Observable<any>{
    return this.http.get(`http://localhost:8086/getUserByID/${id}`)
}

getUser():Observable<any>{
    return this.http.get('http://localhost:8086/getUser');
  }
 
updateUser(value:any, registerObj:any):Observable<any>{
    return this.http.put('http://localhost:8086/updateUser', value, registerObj);
  }

removeUser(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8086/deleteUser?${id}`);
  }
}




































// getUser():Observable<any>{
//   return this.http.get('http://localhost:8086/getUser');
// // let user = this.http.get('http://localhost:8086/getUser');
// // console.log(user);
// // return user;
// }


 // getUserProfile(): Observable<any> {
  //   // Replace with actual API endpoint to fetch user profile
  //   return this.http.get<any>(`${this.apiUrl}/user/profile`);
  // }

  // getUser():Observable<any>{
  //    return this.http.get('http://localhost:8086/getUserByID/id');
  //  }



 //loginUser(email:string, password:string):Observable<any>